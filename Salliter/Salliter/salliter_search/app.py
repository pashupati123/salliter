
from flask import Flask, render_template, request, jsonify
import os
import redis
import json
 
app = Flask(__name__)
 
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
	key=src+dst+date
	r = redis.Redis()
	reply = r.get("flight")
	reply = json.loads(reply)
	result=json.dumps(reply[key])
	res=[]
	res.append(reply[key])
	res.append(reply[key])
	res.append(reply[key])
	res.append(reply[key])
	res.append(reply[key])
	res.append(reply[key])
	res.append(reply[key])
	res.append(reply[key])
	res=json.dumps(res)
	data = {'search_result': res}
	return data

@app.route('/result/<data>', methods=['GET'])
def result(data):
	data=json.loads(data)
	return render_template('result.html',de=data)
#--------------------------------------------------------------
#bus code
@app.route('/bus/', methods=['GET'])
def bus():
	return render_template('bus.html')

@app.route('/getcoupon_bus/', methods=['GET'])
def getcoupon_bus():
	r = redis.Redis()
	reply = r.get("bus_coupon")
	reply = json.loads(reply)
	result=json.dumps(reply)
	data = {'coupon':result}
	return data

@app.route('/bus_search/', methods=['POST'])
def bus_search():
	src = str(request.form.get('src', 0))
	dst = str(request.form.get('dst', 0))
	date = str(request.form.get('date', 0))
	key=src+dst+date
	r = redis.Redis()
	reply = r.get("bus_data")
	reply = json.loads(reply)
	result=json.dumps(reply[key])
	res=[]
	res.append(reply[key])
	res.append(reply[key])
	res.append(reply[key])
	res.append(reply[key])
	res.append(reply[key])
	res.append(reply[key])
	res.append(reply[key])
	res.append(reply[key])
	res=json.dumps(res)
	data = {'search_result': res}
	return data

@app.route('/busresult/<data1>', methods=['GET'])
def busresult(data1):
	data1=json.loads(data1)
	return render_template('busresult.html',de=data1)

if __name__ == '__main__':
	app.run(debug=True)