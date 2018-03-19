import * as Router from 'koa-router'
import { Context } from 'koa'
import Todo from '../entity/todo'

const router = new Router({
    prefix: '/todos'
})

router.get('/', async(ctx: Context) => {

    const todos = await Todo.find()
    
    ctx.body = todos
})

export default router
