#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Date    : 2017-07-24 18:37:52
# @Author  : ZiQiangWang
# Email    : 814120507@qq.com

from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from config import config

db = SQLAlchemy()


def create_app(config_name):
  
  app = Flask(__name__)

  app.config.from_object(config[config_name])

  db.init_app(app)

  from views.article import article

  app.register_blueprint(article, url_prefix='/blog/api/v1/article')

  return app
