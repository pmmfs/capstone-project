# import flask dependencies
from flask import Flask, render_template

# create a new flask app instance
app = Flask(__name__)

# create flask routes
@app.route('/')
def index():
    return render_template("index.html")

@app.route('/dummypage1')
def dummy1():
    return render_template('dummypage1.html')

@app.route('/dummypage2')
def dummy2():
    return render_template('dummypage2.html')

if __name__== "__main__":
    app.run(debug=True)