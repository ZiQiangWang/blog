#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Date    : 2017-07-24 21:45:34
# @Author  : ZiQiangWang
# Email    : 814120507@qq.com

import os
from app import db, create_app
from flask_cors import CORS
from flask_script import Manager,Server, Shell
from flask_migrate import Migrate, MigrateCommand
from app.models import Article

app = create_app(os.getenv('FLASK_CONFIG') or 'default')

manager = Manager(app)
migrate = Migrate(app,db)
CORS(app)

def make_shell_context():
  return dict(app=app, db=db, Article=Article)

# server = Server(host="0.0.0.0", port=5000, use_debugger=False)
# manager.add_command('runserver', server)
manager.add_command('shell',Shell(make_context=make_shell_context))
manager.add_command('db', MigrateCommand)

if __name__ == '__main__':
  manager.run()

