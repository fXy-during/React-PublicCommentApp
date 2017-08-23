
import get from './get';
import post from './post';

export function getData(url) {
    var result = get(url);
    result.then(data => {
        return data.text()
    }).then(text => {
        return text;
    })
}

