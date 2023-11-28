const {Router} = require('express');
const { home, getsignup, signup, login, taskcreate } = require('../controller/user.controller');
const router = Router();

router.get("/",home)

router.get("/signup", getsignup)

router.post("/signup", signup)

router.post("/login", login)

router.post("/task", taskcreate)

module.exports={router}