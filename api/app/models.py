#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Date    : 2017-07-24 18:31:31
# @Author  : ZiQiangWang
# Email    : 814120507@qq.com
 
from app import db

class User(db.Model):
  __tablename__ = 'user'
  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String)
  password = db.Column(db.String)
  role = db.Column(db.Integer)

class Article(db.Model):
  __tablename__ = 'article'

  id = db.Column(db.String(32), primary_key=True, index=True)
  title = db.Column(db.String)
  content = db.Column(db.Text)
  author_id = db.Column(db.Integer, db.ForeignKey('user.id'))
  author = db.relationship('User', backref='article')
  update_time = db.Column(db.Integer)

  def to_dict(self):
    result = {c.name: getattr(self, c.name) for c in self.__table__.columns}
    del result['author_id']
    result['author'] = self.author.name
    return result
