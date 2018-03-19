import { Context } from "koa";

export default async(ctx: Context, next: Function) => {
    const start: number = Date.now();
    await next();
    const end: number = Date.now();

    console.log(`${ctx.method} ${ctx.href} ${ctx.status} cost ${end - start}ms`);
}