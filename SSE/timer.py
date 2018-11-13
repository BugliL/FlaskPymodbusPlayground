import time


def printit():
    def print_stream():
        while True:
            time.sleep(.5)
            yield "Hello, World!"

    for x in print_stream():
        print(x)


printit()
