var koa = require('koa');
var app = koa();

app.use(function *(){
  this.body = 'Hello WOrld';
});

app.listen(3000);