#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Date    : 2017-07-21 12:53:10
# @Author  : ZiQiangWang
# Email    : 814120507@qq.com

from flask import Flask, jsonify, make_response, request
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

articles = [
    {
        'id': 1,
        'title': u'Buy groceries 测试找到你阿斯蒂芬阿斯蒂芬打发',
        'content': u'测试aa测试美女美女宝贝们那边',
        'author': {'id':1, 'name': '小强', 'role':0},
        'update_time': '2017-01-01',
        'category': ['aaa']
    },
    {
        'id': 2,
        'title': u'Learn Python',
        'content': u'Need to find a good Python tutorial on the web 结构和空间来看拉开距离空间骷髅精灵看见了离开老家了拉开距离空间绿军绿军扩绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿客家话或或或或或或或或或或或或或或或或或或或或或或或或或或金合欢花或或或或或或或或或或或或或或或或或或或或',
        'author': {'id':2, 'name': '小丽', 'role':1},
        'update_time': '2017-01-02',
        'category': ['aaa','bbb']
    },
    {
        'id': 128,
        'title': u'Learn React',
        'content': u'aaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
        'author': {'id':1, 'name': '小强', 'role':0},
        'update_time': '2017-01-03',
        'category': ['ccc']
    },
]

@app.route('/blog/api/v1/articles', methods=['GET'])
def get_articles():
    return jsonify(articles)

@app.route('/blog/api/v1/articles/<int:article_id>', methods=['GET'])
def get_article(article_id):
    article = filter(lambda a: a['id'] == article_id, articles)
    return jsonify(article[0])

@app.route('/blog/api/v1/articles', methods=['POST'])
def create_article():
    print request.json
    pass

if __name__ == '__main__':
    app.run(debug=True)
