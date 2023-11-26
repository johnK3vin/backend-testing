import { Router } from "express";
import passport from 'passport';
import { passportError, authorization } from "../utils/messageError.js";
import { generateToken } from "../utils/jwt.js";
import sessionController from '../controllers/session.controller.js'


const sessionRouter = Router()

sessionRouter.post('/login', passport.authenticate('login',{failureRedirect: 'faillogin'}), sessionController.login)
sessionRouter.get('/faillogin', sessionController.faillogin)
sessionRouter.get('/github', passport.authenticate('github', { scope: ['user:email'] }), sessionController.github);
// Este es el callback de GitHub una vez que el usuario acepta o rechaza la autorización
sessionRouter.get('/githubCallback', passport.authenticate('github', { failureRedirect: '/faillogin' }),
    sessionController.githubCallback)
sessionRouter.get('/logout', sessionController.logout)
//Verifica que el token enviado sea valido (misma contraseña de encriptacion)
sessionRouter.get('/testJWT', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.send(req.user)})
sessionRouter.get('/current', passportError('jwt'), authorization(['admin','user']), (req, res) => {
    res.send(req.user)})
sessionRouter.post('/update-welcome', sessionController.updateWelcome)


export default sessionRouter