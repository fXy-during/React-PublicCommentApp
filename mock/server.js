var ConApp = require('koa');
var router = require('koa-router')();
// var koaBody = require('koa-Body')();
var app = new ConApp();
    // router = new ConRouter(),
    // koaBody = new ConKoaBody();

// var app = new require('koa')();
// var router = new require('koa-router')();
// var koaBody = new require('koa-Body')();



// router.get('/', function *(next) {
//     this.body = 'hello koa!'
// });
app.use(async(ctx, next)=>{
    console.log('Error...');
    await next();
})

// router.get('/', async(ctx, next)=>{
//     ctx.response.body = 'Hello Koa!';
// })

router.get('/api/1', async(ctx, next)=>{
    ctx.response.body = 'test data 1'
});

router.get('/api/2', async(ctx, next)=> {
    ctx.response.body = {
        a: 1,
        b: '123'
    }
});

// router.post('/api/post', koaBody, function *(next) {
//     console.log(this.request.body);
//     this.body = JSON.stringify(this.request.body);
// })

app.use(router.routes())
    .use(router.allowedMethods());

app.listen(8080);
console.log('app started at port 8080...');
// 
// 
// var koa = require('koa');
// var app = new koa();

// app.use(function *(){
//   this.body = 'Hello World';
// });

// app.listen(3000);