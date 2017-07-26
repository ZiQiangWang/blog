#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Date    : 2017-07-24 19:03:23
# @Author  : ZiQiangWang
# Email    : 814120507@qq.com

from flask import Blueprint, jsonify, url_for
from ..utils import db_util, util
import traceback

article = Blueprint('article', __name__)

@article.route('/', methods=['GET'])
def article_list():
  articles = db_util.get_articles_of_user(1)
  for article in articles:
    article['url'] = util.make_article_url(article['id'])
  
  return jsonify(articles)

@article.route('/page', methods=['GET'])
def article_page():
  articles = db_util.get_articles_of_page(1)
  for article in articles:
    article['url'] = util.make_article_url(article['id'])
  return jsonify(articles)


@article.route('/<articleId>', methods=['GET'])
def article_detail(articleId):
  try:
    article = db_util.get_article_by_id(articleId)
    article['url'] = util.make_article_url(articleId)
  except Exception as e:
    raise
  return jsonify(article)

@article.route('/', methods=['POST'])
def create_article():
  try:
    db_util.add_article({'title':'test', 'content': 'trqweert', 'author_id':1})
  except Exception as e:
    return jsonify({'flag': False, 'msg': '创建失败'})

  return jsonify({'flag': True, 'msg': '创建成功'})

@article.route('/<articleId>', methods=['PUT'])
def update_article(articleId):
  try:
    db_util.update_article_by_id(articleId, request.json)
  except Exception as e:
    traceback.print_exc()
    return jsonify({'flag': False, 'msg': '更新失败'})

  return jsonify({'flag': True, 'msg': '更新成功'})
  

@article.route('/<articleId>', methods=['DELETE'])
def delete_article(articleId):
  try:
    db_util.delete_article_by_id(articleId)
  except Exception as e:
    traceback.print_exc()
    return jsonify({'flag': False, 'msg': '删除失败'})

  return jsonify({'flag': True, 'msg': '删除成功'})
