const Koa = require("koa");
const bodyPaser = require('koa-bodyparser')
const routes = require("./routes/index");
const app = new Koa();

app.use(bodyPaser())
app.use(routes);

app.listen(4000, () => {
  console.log("Running to Server");
});
