import 'whatwg-fetch' 
import 'es6-promise'


export function getData() {

    //获取文本信息
    var result = fetch('/api/1', {
        credentials: 'include',
        headers: {
            'Accept': 'application/json, text/plain, */*'
        }
    })

    result.then(res => {
        return res.text()
    }).then(text => {
        console.log(text)
    })


    //获取json
    var result2 = fetch('/api/2', {
        credentials: 'include',
        headers: {
            'Accept': 'application/json, text/plain, */*'
        }
    })

    result.then(res => {
        return res.json()
    }).then(text => {
        console.log(text)
    })
}

export function postData() {
    var result = fetch('/api/post', {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/x-www-from-urlencoded'
        },
        body: 'a=100&b=200'
    });

    result.then(res => {
        return res.json()
    }).then(json => {
        console.log(json)
    })
}