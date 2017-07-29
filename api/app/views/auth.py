#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Date    : 2017-07-26 14:52:12
# @Author  : ZiQiangWang
# Email    : 814120507@qq.com

from flask import Blueprint, request, jsonify, abort
from ..utils import db_util, util
import json
from .. import rds

auth = Blueprint('auth', __name__)

@auth.route('/create', methods=['POST'])
def create_token():
  info = json.loads(request.data)
  auth = db_util.check_user(info['name'], info['password'])
  if auth:
    token = util.random_str()
    rds.set(token, auth)
    rds.expire(token, 24 * 60 * 60 )
    return jsonify({'token': token})
  else:
    abort(401)

@auth.route('/delete', methods=['DELETE'])
def delete_token():
  token = json.loads(request.data)['token']

  result = rds.delete(token)
  return jsonify({'flag': bool(result)})
