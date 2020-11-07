import { Router } from 'express'

const routes = new Router()

import UsersControllers from '../app/controllers/UsersControllers'
import CharactersController from '../app/controllers/CharactersController'
import SessionsController from '../app/controllers/SessionsController'

import authMiddleware from '../app/middleware/auth'

routes.get('/', (req, res) => res.json({ api: 'online' }))
routes.post('/users', UsersControllers.store)
routes.post('/auth', SessionsController.create)

routes.use(authMiddleware)
routes.get('/users', UsersControllers.index)
routes.get('/users/:id', UsersControllers.show)
routes.post('/characters/:user_id', CharactersController.store)

export { routes }