const Router = require("koa-router");
const router = new Router();
const users = require("./users");
router.use("/users", users);

module.exports = router.routes();
