from flask import Flask, request, jsonify
from flask import g

from flask import Flask

from utils.auth import get_admin, create_user, get_oidc, get_token, check_token


app = Flask(__name__)

app.config.from_object('utils.settings')
# app.config.from_envvar('KEYCLOAK_FLASK_SETTINGS')

@app.route('/',methods=['POST'])
def home():
    if request.headers.get("content-type") == 'application/json':
        if not 'username' in request.json.keys():
            return jsonify(dict(status=-1,message='username required'))
        if not 'password' in request.json.keys():
            return jsonify(dict(status=-1,message='password required'))
        g.username = request.json.get('username')
        g.password = request.json.get('password')
        oidc_obj = get_oidc()
        token = get_token(oidc_obj, g.username, g.password)
        print("\nTOKEN: %s\n" % token)
        return jsonify(dict(status=1,message=token))
    return jsonify(dict(status=-1,message=''))

@app.route('/login',methods=['GET','POST'])
def login():
    return 'faca login'

if __name__ == '__main__':
    app.run()