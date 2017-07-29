#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Date    : 2017-07-24 18:37:52
# @Author  : ZiQiangWang
# Email    : 814120507@qq.com

from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from config import config
import redis

db = SQLAlchemy()

rds = redis.StrictRedis(host = 'localhost', port = 6379, db = 0)  

def create_app(config_name):
  
  app = Flask(__name__)

  app.config.from_object(config[config_name])

  db.init_app(app)

  from views.article import article
  app.register_blueprint(article, url_prefix='/blog/api/v1/article')
  from views.auth import auth
  app.register_blueprint(auth, url_prefix='/blog/api/v1/auth')
  return app
