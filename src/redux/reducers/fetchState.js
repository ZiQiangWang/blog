/**
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-07-27 22:57:56
 */


const fetchState = (state = { message: '', isFetching: false, actionType: '' }, action) => {
  const { error, isFetching, type } = action;
  if (error !== undefined || isFetching !== undefined) {
    return { message: error, isFetching, type };
  }

  return state;
};

export default fetchState;
