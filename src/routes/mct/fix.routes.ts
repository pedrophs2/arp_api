import { Router } from "express";
import authFixController from "../../controllers/mct/fix/auth.fix.controller";

const routes = Router()

routes.post('/encryption', authFixController.checkEncription)

export default routes