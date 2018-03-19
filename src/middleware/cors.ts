import { Context } from "koa";

export default async function(ctx: Context, next: Function) {

    ctx.set('Access-Control-Allow-Origin', '*');

    await next();
    
}