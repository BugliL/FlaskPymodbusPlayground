import datetime

from flask import Flask, Response, send_from_directory
import time

app = Flask(__name__)


@app.route('/alarms')
def stream():
    def eventStream():
        template = "data: {}\n\n"
        while True:
            time.sleep(4)
            data = "Hello, World! {}".format(datetime.datetime.now().strftime("%S"))
            yield template.format(data)

    return Response(eventStream(), mimetype="text/event-stream")


@app.route("/")
def main():
    return send_from_directory('templates', 'index.html')


if __name__ == "__main__":
    app.debug = True
    app.run()
