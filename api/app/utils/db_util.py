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
  articles = Article.query.order_by(Article.update_time.desc()).paginate(page,per_page=10,error_out=False)
  return [ article.to_dict() for article in articles.items ]

# article list
def get_articles_of_user(user_id):
  articles = Article.query.with_entities(Article.id,Article.title).filter_by(author_id=user_id).order_by(Article.update_time.desc()).all()
  return [ {'id': article[0], 'title': article[1]} for article in articles ]

# add article 
def add_article(data):
  article = Article(id=util.random_str(), update_time=util.time_stamp(), **data)
  db.session.add(article)
  db.session.commit()

# delete article
def delete_article_by_id(id):
  article = Article.query.filter_by(id=id).first()
  db.session.delete(article)
  db.session.commit()

# update article
def update_article_by_id(id, data):
  article = Article.query.filter_by(id=id).update(data)
  article.update_time = util.time_stamp()
  db.session.commit()

