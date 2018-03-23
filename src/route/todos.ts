import * as Router from 'koa-router'
import { Context } from 'koa'
import Todo from '../entity/todo'

const router = new Router({
    prefix: '/todos'
})

router
    .get('/', async(ctx: Context) => {

        const todos = await Todo.find()
        
        ctx.body = todos
    })

    .post('/', async(ctx: Context) => {

        let todo = await Todo.create(ctx.request.body)
        todo = await Todo.save(todo)

        ctx.body = todo
        ctx.status = 201
    })

    .put('/:id', async(ctx: Context) => {
        await Todo.update(ctx.params.id, ctx.request.body)
        ctx.status = 201
    })

    .put('/all_done/:completed', async(ctx: Context) => {
        await Todo
            .createQueryBuilder()
            .update()
            .set({completed: !!Number(ctx.params.completed)})
            .execute()
                
        ctx.status = 201
    })

    .delete('/completed', async(ctx: Context) => {
        await Todo
            .createQueryBuilder()
            .delete()
            .where('completed = :completed', {completed: 1})
            .execute()

        ctx.status = 204
    })

    .delete('/:id', async(ctx: Context) => {

        await Todo.remove(<Todo> {id: Number(ctx.params.id)})
        
        ctx.status = 204
    })

export default router
