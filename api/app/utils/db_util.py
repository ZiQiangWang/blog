#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Date    : 2017-07-24 23:22:06
# @Author  : ZiQiangWang
# Email    : 814120507@qq.com

from .. import db
from ..models import *
import util

# article detail
def get_article_by_id(id):
  article = Article.query.filter_by(id=id).first()

  return article.to_dict()

# article page
def get_articles_of_page(page):
  articles = Article.query.filter_by(publish=True).order_by(Article.update_time.desc()).paginate(page,per_page=1,error_out=False)
  return {'articles': [ article.to_dict() for article in articles.items ], 'next': articles.has_next}

# article list
def get_articles_of_user(user_id):
  articles = Article.query.filter_by(author_id=user_id).order_by(Article.update_time.desc()).all()

  return [ {k: v for k, v in article.to_dict().items() if k not in ['content', 'author_id']} for article in articles]

# add article 
def add_article(data):
  article = Article(id=util.random_str(), update_time=util.time_stamp(), **data)
  db.session.add(article)
  db.session.commit()

  return article.to_dict()

# delete article
def delete_article_by_id(id):
  article = Article.query.filter_by(id=id).first()
  db.session.delete(article)
  db.session.commit()

# update article
def update_article_by_id(id, data):
  data['update_time'] = util.time_stamp()
  article = Article.query.filter_by(id=id).first()
  print "===========",article
  for key, value in data.items():
    setattr(article, key, value)
  db.session.commit()

  return article.to_dict()

# check user
def check_user(name, pwd):
  # user = User.query.filter_by(name=name,password=util.hex_md5(pwd)).first()
  user = User.query.filter_by(name=name,password=pwd).first()
  if user:
    return user.id

  return False
