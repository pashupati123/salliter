from flask import Flask,render_template
#import paytm_selenium as paytm # this will be your file name; minus the `.py`

app = Flask(__name__)

@app.route('/')
#def dynamic_page():
    #return paytm.main()
def home():
	return render_template('index.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port='8000', debug=True)