import 'whatwg-fetch' 
import 'es6-promise'

function obj2params(obj){
    var result = '';

    // for(let [key, value] of Object.entries(obj)){
    //     result+=`&${key}=${encodeURIComponent(value)}`;
    // }
    for(let item in obj) {
        result += '&' + item + '=' + encodeURIComponent(obj[item])
    }

    if(result) {
        result = result.slice(1);
    }

    return result;
}

export function post(url, paramsObj) {
    var result = fetch(url, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/x-www-from-urlencoded'
        },
        body: obj2params(paramsObj)
    });

    return result
}