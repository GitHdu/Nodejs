var http=require('http');
var querystring =require('querystring');

var postData=querystring.stringify({
    'content':'good courses!',
    'cid':0
})

var options={
    hostname:'www.imooc.com',
    port:80,
    path:'/video/8837/0',
    method:'POST',
    headers:{
        'Accept':'application/json, text/javascript, */*; q=0.01',
        'Accept-Encoding':'gzip, deflate',
        'Accept-Language':'zh-CN,zh;q=0.8',
        'Connection':'keep-alive',
        'Content-Length':postData.length,
        'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
        'Cookie':'imooc_uuid=e4feb8a4-801e-4559-87b6-64990e6451d1; imooc_isnew=1; imooc_isnew_ct=1457406873; IMCDNS=0; PHPSESSID=v8s0uv13ps1m3m2jk8up62dna7; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1457420993; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1457420993; loginstate=1; apsid=Y1MzVkYWY0Y2ZmOWZmZDk0ZDJiYTNkMzYzY2MzZDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjMxNjU3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABteWZseTIwMTNAeWVhaC5uZXQAAAAAAAAAAAAAAAAAAGJmMDY1NGM2ZGE5MjdkODg1ZjUyOTA4MDZkNzc5Mjg113reVtd63lY%3DN2; last_login_username=myfly2013%40yeah.net; cvde=56de7ab93ae80-11',
        'DNT':'1',
        'Host':'www.imooc.com',
        'Origin':'http://www.imooc.com',
        'Referer':'http://www.imooc.com/video/8837/0',
        'User-Agent':'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36',
        'X-Requested-With':'XMLHttpRequest',
    }
}

var req=http.request(options,function(res){
    console.log('Status:'+ res.statusCode);
    console.log('headers:'+JSON.stringify(res.headers));

    res.on('data',function(chunk){
        console.log('Buffer.isBuffer(chunk)')
    })

    res.on('end',function(){
        console.log('finished')
    })

})
    req.on('error',function(e){
    console.log('error');
    })

    req.write(postData)
    req.end()