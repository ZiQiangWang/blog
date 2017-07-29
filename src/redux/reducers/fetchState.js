/**
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-07-27 22:57:56
 */


const fetchState = (state={message: "", status: 200}, action) => {
  const { type, error, status } = action;
  if (error || status) {
    return {message: error, status: status};
  }

  return state;
}

export default fetchState;
