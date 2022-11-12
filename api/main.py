import json
import requests

from flask import Flask, request, render_template, redirect, flash, url_for
from flask import session, make_response, g
from flask import current_app

from flask import Flask

from utils.auth import get_admin, create_user, get_oidc, get_token, check_token


app = Flask(__name__)

app.config.from_object('utils.settings')
app.config.from_envvar('KEYCLOAK_FLASK_SETTINGS')

g.username = ''
g.access_token = ''

@app.route('/',methods=['GET','POST'])
def home():
    if g.username is None or g.access_token is None:
        return redirect(url_for('login'))
    return '123123' 

@app.route('/login',methods=['GET','POST'])
def login():
    return 'faca login'

if __name__ == '__main__':
    app.run()