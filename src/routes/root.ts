import Router from '@koa/router'
import { root as rootController } from '../controllers'

const router = new Router()
const routes = { root: '/' }

router
  .get(routes.root, rootController.healthCheck)
  .post(routes.root, rootController.notImplemented)
  .put(routes.root, rootController.notImplemented)
  .delete(routes.root, rootController.notImplemented)

export { router }
