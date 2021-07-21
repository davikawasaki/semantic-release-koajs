import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import cors from '@koa/cors'
import pino from 'pino'
import { koaSwagger } from 'koa2-swagger-ui'
import { Server } from 'http'
import dotenv from 'dotenv'

import { rootRouter, infoRouter, swaggerRouter } from './routes'

const start = async (): Promise<Server> => {
  dotenv.config()

  const logger = pino()
  const app = new Koa()

  app.on('error', e => logger.info(e.stack))
  app.use(cors({ origin: '*' }))
  app.use(bodyParser())

  if (process.env.NODE_ENV !== 'prod') {
    app.use(koaSwagger({
      swaggerOptions: {
        url: '/api/info'
      },
      routePrefix: '/api/docs'
    }))
  }

  app.use(rootRouter.routes())
  app.use(infoRouter.routes())

  if (process.env.NODE_ENV !== 'prod') {
    app.use(swaggerRouter.routes())
  }

  const PORT = process.env.PORT ?? 443

  return app.listen(PORT, () => {
    logger.info(`Server listening on port: ${PORT}`)
  })
}

export {
  start
}
