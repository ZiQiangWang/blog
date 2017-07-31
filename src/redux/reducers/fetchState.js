/**
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-07-27 22:57:56
 */


const fetchState = (state={message: "", status: 200, isFetching: false}, action) => {
  const { error, statusm, isFetching } = action;
  if (error !== undefined || status !== undefined || isFetching !== undefined) {
    return {message: error, status, isFetching};
  }

  return state;
}

export default fetchState;
