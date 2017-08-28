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



// 头部广告
var data = require('./HomeAd/data.js');
router.get('/api/homead', async(ctx, next) =>{
    ctx.response.body = data;
})


// 猜你喜欢
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


// 搜索结果 三个参数
var searchListData = require('./Search/index.js');
router.get('/api/search/:page/:city/:category/:keyword', async(ctx, next) =>{
    // const params = this.params
    // const paramsPage = params.page
    // const paramsCity = params.city
    // const paramsCategory = params.category
    // const paramsKeyword = params.keyword

    // console.log('当前页数：' + paramsPage)
    // console.log('当前城市：' + paramsCity)
    // console.log('当前类别：' + paramsCategory)
    // console.log('关键字：' + paramsKeyword)

    ctx.response.body = searchListData;
})

// 搜索结果 俩个参数
router.get('/api/search/:page/:city/:category', async(ctx, next) =>{
    // const params = this.params
    // const paramsPage = params.page
    // const paramsCity = params.city
    // const paramsCategory = params.category

    // console.log('当前页数：' + paramsPage)
    // console.log('当前城市：' + paramsCity)
    // console.log('当前类别：' + paramsCategory)

    ctx.response.body = searchListData;
})

// 店家详情
var info = require('./detail/info.js');
router.get('/api/detail/info/:id', async(ctx, next) =>{

    ctx.response.body = info;
})

// 店家评论
var comment = require('./detail/comment.js');
router.get('/api/detail/comment/:page/:id', async(ctx, next) =>{

    ctx.response.body = comment;
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