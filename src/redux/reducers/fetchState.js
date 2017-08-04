/**
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-07-27 22:57:56
 */


const fetchState = (state = { message: '', status: 200, isFetching: false, actionType: '' }, action) => {
  const { error, status, isFetching, type } = action;
  if (error !== undefined || status !== undefined || isFetching !== undefined) {
    return { message: error, status, isFetching, type };
  }

  return state;
};

export default fetchState;
