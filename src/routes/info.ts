import Router from '@koa/router'
import { info as infoController, root as rootController } from '../controllers'

const router = new Router()
const routes = { root: '/', hello: '/hello' }

// Hello
/**
  * @openapi
  *
  * /hello:
  *  get:
  *      tags:
  *      - "semantic-release-koajs"
  *      summary: Returns a hello object
  *      description: Call hello in the API
  *      responseClass: Hello
  *      nickname: hello
  *      produces:
  *        - "application/json"
  *      responses:
  *        "200":
  *          description: "Hello'ed"
  *          content:
  *            application/json:
  *              schema:
  *                $ref: "#/definitions/Hello200"
  * definitions:
  *  Hello200:
  *    type: "object"
  *    properties:
  *      msg:
  *        description: "Hello message"
  *        type: "string"
  *        default: "hello"
  *      statusCode:
  *        description: "Status of the underlying response"
  *        type: number
  *        default: 200
  */
router
  .get(routes.hello, infoController.hello)
  .post(routes.root, rootController.notImplemented)
  .put(routes.root, rootController.notImplemented)
  .delete(routes.root, rootController.notImplemented)

export { router }
