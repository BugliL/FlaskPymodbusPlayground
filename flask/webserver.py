import json
import threading
import atexit
from time import sleep

from flask import Flask, render_template
from my_utility import get_data
from flask import jsonify

JSONIFY_PRETTYPRINT_REGULAR = False
app = Flask(__name__, static_folder="templates", static_url_path="")
the_threads = []


@app.route("/instant")
def instant():
    # return str(get_data())
    return str(get_data())


@app.route("/instant_json")
def instant_json():
    # return jsonify(get_data())
    json.dumps(get_data())
    return jsonify(get_data())


@app.route("/")
def hello():
    # return render_template("index.html", d=get_data())
    print(get_data())
    return render_template("index.html", d=get_data())


def flaskThread():
    app.run(debug=False, host='0.0.0.0', port=5000)


if __name__ == "__main__":
    import thread

    JSONIFY_PRETTYPRINT_REGULAR = False
    thread.start_new_thread(flaskThread, ())
