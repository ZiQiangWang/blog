/**
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-07-21 15:29:35
 */

export const CALL_API = 'Call API';

export default store => next => action => {
  const callAPI = action[CALL_API];

  if (callAPI === undefined) {
    return next(action);
  }

  const { endpoint, types } = callAPI;

  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three action types');
  }

  if (types.every(type => typeof type === 'string')) {
    throw new Error('Expected action types to be string');
  }

  // 删除action中辅助用的CALL
  const actionWith = data => {
    const newAction = {...action, ...data};
    delete newAction[CALL_API];
    return newAction;
  }
  const [requestType, successType, failureType] = types;

}
