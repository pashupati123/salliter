
from flask import Flask, render_template, request, jsonify
import os
import redis
import json
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
	return render_template('index.html')


@app.route('/about/', methods=['GET'])
def about():
	return render_template('about.html')


@app.route('/getcoupon/', methods=['GET'])
def getcoupon():
	r = redis.Redis()
	reply = r.get("coupon")
	reply = json.loads(reply)
	result=json.dumps(reply)
	data = {'coupon':result}
	return data

@app.route('/search/', methods=['POST'])
def search():
	src = str(request.form.get('src', 0))
	dst = str(request.form.get('dst', 0))
	date = str(request.form.get('date', 0))
	(src_pre,src_post)=src.split('-')
	(dst_pre,dst_post)=dst.split('-')
	(year,month,date)=date.split('-')
	key=src_pre+dst_pre+year+month+date
	r = redis.Redis()
	reply = r.hget("flight", key)
        if reply is None:
            print "Key value not found in redis" + key
            return ""
        reply = reply.replace("\'", "\"")
	reply = json.loads(reply)
	res=json.dumps(reply['flight'])
	data = {'search_result': res}
	return data

@app.route('/result/<data>', methods=['GET'])
def result(data):
	data=json.loads(data)
        print (data)
	return render_template('result.html',de=data)

if __name__ == '__main__':
	app.run("0.0.0.0",80,debug=True)
