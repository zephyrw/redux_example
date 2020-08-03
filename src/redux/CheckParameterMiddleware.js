import {errorInput} from './slices/CountSlice';

export function checkParameterMiddleware({ dispatch }) {
    return function(next){
        return function(action){
            console.debug(action);
            if (action.type === 'counter/incrementAction' || action.type === 'counter/decrementActio') {
                console.debug(action);
                if (!checkIsNumber(action.payload)) {
                    return next(errorInput("请输入数字！"));
                }
            }
            return next(action);
        };
    };
}


function checkIsNumber(value) {
    return typeof value === 'number' && !isNaN(value);
}
