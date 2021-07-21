import { RouterContext } from '@koa/router'
import { HttpService } from '../services'

const notImplemented = async (ctx: RouterContext): Promise<void> => {
  ctx.status = HttpService.statusCodes.NotImplemented
}

const healthCheck = async (ctx: RouterContext): Promise<void> => {
  ctx.status = HttpService.statusCodes.Ok
  ctx.body = { up: true }
}

export {
  notImplemented,
  healthCheck
}
