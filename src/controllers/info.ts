import { RouterContext } from '@koa/router'
import { HttpService } from '../services'

const hello = async (ctx: RouterContext): Promise<void> => {
  ctx.status = HttpService.statusCodes.Ok
  ctx.body = { msg: 'hello', statusCode: ctx.status }
}

export {
  hello
}
