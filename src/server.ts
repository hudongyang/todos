import 'reflect-metadata'
import { createConnection } from 'typeorm'
import * as Koa from 'koa'
import * as koaBody from 'koa-body'

import logger from './middleware/logger'
import cors from './middleware/cors'

import router from './route/todos'

const PORT: number = 3000

createConnection().catch(err => console.error(err));

const app: Koa = new Koa();

app.use(logger)
app.use(cors)
app.use(koaBody())
app.use(router.routes())

app.listen(PORT);

console.log(`app start on port %d`, PORT);
