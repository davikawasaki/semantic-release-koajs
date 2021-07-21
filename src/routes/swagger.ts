import swaggerJsDoc from 'swagger-jsdoc'
import Router from '@koa/router'

import { root as rootController } from '../controllers'

const options = {
  swaggerDefinition: {
    openapi: '3.0.1',
    info: {
      title: 'KoaJS API',
      version: '1.0.0',
      description: 'KoaJS API documentation generated with Swagger'
    },
    security: [
      // {
      //   ApiKeyAuth: []
      // }
    ],
    components: {
      // securitySchemes: {
      //   ApiKeyAuth: {
      //     type: 'apiKey',
      //     in: 'header',
      //     name: 'authorization'
      //   }
      // }
    },
    tags: [
      {
        name: 'semantic-release-koajs',
        externalDocs: {
          description: 'Code base',
          url: 'https://github.com/davikawasaki/semantic-release-koajs'
        }
      }
    ]
  },
  apis: [`${__dirname}/*.ts`, `${__dirname}/*.js`]
}

const specs = swaggerJsDoc(options)
const router = new Router()
const routes = { swagger: '/api/info' }

router
  .get(routes.swagger, async ctx => { ctx.body = JSON.stringify(specs) })
  .post(routes.swagger, rootController.notImplemented)
  .put(routes.swagger, rootController.notImplemented)
  .delete(routes.swagger, rootController.notImplemented)

export { router }
