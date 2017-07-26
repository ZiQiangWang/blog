#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Date    : 2017-07-24 21:32:13
# @Author  : ZiQiangWang
# Email    : 814120507@qq.com

import os

basedir = os.path.abspath(os.path.dirname(__file__))

class Config:
  SECRET_KEY = os.environ.get('SECRECT_KEY') or 'hard to guess string'
  SQLALCHEMY_TRACK_MODIFICATIONS  = True
  ARTICLES_PER_PAGE = 10
  @staticmethod
  def init_app(app):
    pass

class DevelopmentConfig(Config):
  DEBUG = True
  SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(basedir, 'data-dev.sqlite')

class TestingConfig(Config):
  TESTING = True

class ProductionConfig(Config):
  pass


config = {
  'development': DevelopmentConfig,
  'testing': TestingConfig,
  'production': ProductionConfig,
  'default': DevelopmentConfig
}
