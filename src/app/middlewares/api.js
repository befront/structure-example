import axios from 'axios';

const handleSuccess = (res, action, next) => {
    next({
        type: `${action.type}_SUCCESS`,
        payload: res.data
    });
};

const handleError = (err, action, next) => {
    next({
        type: `${action.type}_ERROR`,
        payload: err
    });
};

const apiMiddleware = () => next => (action) => {
    const result = next(action);

    if (!action.promise) {
        return result;
    }
  
    const { url, method = 'GET', params, data } = action.promise;
  
    if (!url) {
        throw new Error( `'path' not specified for async action ${action.type}` );
    }

    return axios({
        url,
        method,
        params,
        data
    })
        .then(res => handleSuccess(res, action, next))
        .catch(err => handleError(err, action, next));
};
  
export default apiMiddleware;