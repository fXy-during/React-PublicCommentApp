import * as actionTypes from '../constants/index'

export function update(data){
    return {
        type: actionTypes.UPDATE_CITYNAME,
        data
    }
}