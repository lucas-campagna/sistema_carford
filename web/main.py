from flask import Flask, render_template

app = Flask(__name__,root_path='build',template_folder='./')

@app.route('/')
def home():
    return render_template('index.html')

if __name__ == '__main__':
    app.run()