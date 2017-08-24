import * as actionTypes from '../constants'

export function update(data){
    return {
        type: actionTypes.UPDATE_CITYNAME,
        data
    }
}