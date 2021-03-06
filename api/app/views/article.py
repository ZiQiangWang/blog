#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Date    : 2017-07-24 19:03:23
# @Author  : ZiQiangWang
# Email    : 814120507@qq.com

from flask import Blueprint, jsonify, url_for, request, abort
from ..utils import db_util, util
from .. import rds
import traceback
import json

article = Blueprint('article', __name__)

@article.route('/', methods=['GET'])
def article_list():
  params = request.args
  token = params['token']
  author_id = rds.get(token)
  if not author_id:
    return jsonify({'flag': False, 'msg':'咩有权限'})
  try:
    articles = db_util.get_articles_of_user(int(author_id))
  except Exception as e:
    traceback.print_exc()
    abort(500)
  return jsonify({'flag': True, 'msg': '', 'content': articles })

@article.route('/page/<int:num>', methods=['GET'])
def article_page(num):
  articles = db_util.get_articles_of_page(num)
  return jsonify({'flag': True, 'msg': '', 'content': articles })


@article.route('/<articleId>', methods=['GET'])
def article_detail(articleId):
  try:
    article = db_util.get_article_by_id(articleId)
  except Exception as e:
    traceback.print_exc()
    abort(500)
  return jsonify({'flag': True, 'msg': '', 'content': article })

@article.route('/blog/<articleId>', methods=['GET'])
def article_blog_detail(articleId):
  try:
    article = db_util.get_article_visit_by_id(articleId)
  except Exception as e:
    traceback.print_exc()
    abort(500)
  return jsonify({'flag': True, 'msg': '', 'content': article })

@article.route('/', methods=['POST'])
def create_article():
  params = json.loads(request.data)
  token = params['token']
  author_id = rds.get(token)
  if not author_id:
    return jsonify({'flag': False, 'msg':'咩有权限'})
  params['author_id'] = int(author_id)
  del params['token']
  
  try:
    article = db_util.add_article(params)
  except Exception as e:
    traceback.print_exc()
    abort(500)

  return jsonify({'flag': True, 'msg': '', 'content': article })

@article.route('/<articleId>', methods=['PUT'])
def update_article(articleId):
  
  params = json.loads(request.data)
  token = params['token']
  author_id = rds.get(token)
  if not author_id:
    return jsonify({'flag': False, 'msg':'咩有权限'})
  del params['token']

  try:
    article = db_util.update_article_by_id(articleId, params)
  except Exception as e:
    traceback.print_exc()
    abort(500)

  return jsonify({'flag': True, 'msg': '', 'content': article })

@article.route('/<articleId>', methods=['DELETE'])
def delete_article(articleId):
  params = json.loads(request.data)
  token = params['token']
  author_id = rds.get(token)
  if not author_id:
    return jsonify({'flag': False, 'msg':'咩有权限'})

  try:
    db_util.delete_article_by_id(articleId)
  except Exception as e:
    traceback.print_exc()
    abort(500)

  return jsonify({'flag': True, 'msg': '', 'content': {'articleId': articleId} })
