var ConApp = require('koa');
var router = require('koa-router')();
// var koaBody = require('koa-Body')();
var app = new ConApp();
    // router = new ConRouter(),
    // koaBody = new ConKoaBody();

// var app = new require('koa')();
// var router = new require('koa-router')();
// var koaBody = new require('koa-Body')();

// import data from './HomeAd/data.js';
// router.get('/', function *(next) {
//     this.body = 'hello koa!'
// });
app.use(async(ctx, next)=>{
    console.log('Parse...');
    await next();
})

// router.get('/', async(ctx, next)=>{
//     ctx.response.body = 'Hello Koa!';
// })

router.get('/api/1', async(ctx, next)=>{
    ctx.response.body = 'test data 1'
});
router.get('/api/3', async(ctx, next)=>{
    ctx.response.body = 'test data 3'
});
router.get('/api/2', async(ctx, next)=> {
    ctx.response.body = {
        a: 1,
        b: '123'
    }
});

var data = require('./HomeAd/data.js');
router.get('/api/homead', async(ctx, next) =>{
    ctx.response.body = data;
})

var list = require('./HomeAd/list.js');
router.get('/api/homelist/:city/:page', async(ctx, next)=>{
    // const params = this.params;
    // const City = params.city || 'chengDu';
    // const Page = params.page || '23';
    
    // console.log('当前城市 ',City);
    // console.log('当前页码 ',Page);

    ctx.response.body= list;

    // ctx.response.body = list;
})


// router.post('/api/post', koaBody, function *(next) {
//     console.log(this.request.body);
//     this.body = JSON.stringify(this.request.body);
// })

app.use(router.routes())
    .use(router.allowedMethods());

app.listen(3000);
console.log('app started at port 3000...');
// 
// 
// var koa = require('koa');
// var app = new koa();

// app.use(function *(){
//   this.body = 'Hello World';
// });

// app.listen(3000);