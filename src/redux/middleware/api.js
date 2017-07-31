/**
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-07-21 15:29:35
 */
import { loseAuth, login } from '../actions/auth';

class NetworkError extends Error {
  constructor(message, status) {
     super(message);
     this.status = status;
  }
}

const API_ROOT = 'http://127.0.0.1:5000/blog/api/v1/';

const callApi = (endpoint, mehtod, data) => {
  
  const fullUrl = API_ROOT + endpoint;

  return fetch(fullUrl, {
    method: mehtod, 
    mode: 'cors',
    body: JSON.stringify(data)
  })
  .then(response => {
    if (response.status >= 200 && response.status < 300) {
      return response;
    }
    throw new NetworkError(response.statusText, response.status);
  })
  .then(response => {
    return response.json();
  })
}


export const CALL_API = 'Call API';

export default store => next => action => {
  const callAPI = action[CALL_API];

  if (callAPI === undefined) {
    return next(action);
  }

  const { endpoint, types, method, params } = callAPI;

  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three action types');
  }

  if (!types.every(type => typeof type === 'string')) {
    throw new Error('Expected action types to be string');
  }

  // 删除action中辅助用的CALL
  const actionWith = data => {
    const newAction = {...action, ...data};
    delete newAction[CALL_API];
    return newAction;
  }
  const [requestType, successType, failureType] = types;

  const { success, failure } = action; 

  next(actionWith({ type: requestType, isFetching: true }));
  return callApi(endpoint, method, params).then(
    json => {
      next(actionWith({
        response: json,
        status: 200,
        type: successType,
        isFetching: false
      }));
      success && next(success(json, action));
    }
  )
  .catch(
    error => {
      next(actionWith({
        error: error.message || 'Something bad happened',
        status: error.status, 
        type: failureType,
        isFetching: false
      }));
      failure && next(failure(error, action));

      if (error.status === 401) {
        next(loseAuth());
      }
    }
  );
}
