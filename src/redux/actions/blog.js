/**
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-08-04 01:01:06
 */

import { CALL_API } from '../middleware/api';
import * as CONST from './const';

export const startBlog = started => ({
  type: CONST.START_BLOG,
  started,
});


export const pageArticle = page => ({
  [CALL_API]: {
    types: [CONST.PAGE_ARTICLE_REQUEST, CONST.PAGE_ARTICLE_SUCCESS, CONST.PAGE_ARTICLE_FAILURE],
    method: 'GET',
    endpoint: `article/page/${page}`,
  },
});

export const blogDetail = articleId => ({
  [CALL_API]: {
    types: [CONST.BLOG_DETAIL_REQUEST, CONST.BLOG_DETAIL_SUCCESS, CONST.BLOG_DETAIL_FAILURE],
    method: 'GET',
    endpoint: `article/${articleId}`,
  },
});
