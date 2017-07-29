#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Date    : 2017-07-25 16:10:08
# @Author  : ZiQiangWang
# Email    : 814120507@qq.com

import time
import hashlib   
from flask import url_for, request, abort
from .. import rds

def random_str():
  time_stamp = str(time.time() * 1000)
  m = hashlib.md5()   
  m.update(time_stamp)   
  return m.hexdigest()   

def time_stamp():
  return int(time.time() * 1000)

def make_article_url(id):
  return url_for('article.article_detail', articleId=id, _external=True)

def hex_md5(str):
  m = hashlib.md5()
  m.update(str)
  return m.hexdigest()

def need_token(func):
  def wrapper():
    params = json.loads(request.data)
    token = params['token']
    author_id = rds.get(token)
    if not author_id:
      abort(401)

    func()
  return wrapper
