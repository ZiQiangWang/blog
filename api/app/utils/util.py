#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Date    : 2017-07-25 16:10:08
# @Author  : ZiQiangWang
# Email    : 814120507@qq.com

import time
import hashlib   
from flask import url_for

def random_str():
  time_stamp = str(time.time() * 1000)
  m = hashlib.md5()   
  m.update(time_stamp)   
  return m.hexdigest()   

def time_stamp():
  return int(time.time() * 1000)

def make_article_url(id):
  return url_for('article.article_detail', articleId=id, _external=True)
