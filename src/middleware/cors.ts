import { Context } from "koa";

export default async function(ctx: Context, next: Function) {

    ctx.set('Access-Control-Allow-Origin', '*');

    if(ctx.method === 'OPTIONS') {
        ctx.set('Access-Control-Allow-Headers', 'Content-Type')
        ctx.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
        return ctx.status = 204
    }
    
    await next();
    
}