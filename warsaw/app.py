# from turtle import update
from flask import Flask, render_template, request, jsonify
import logging
# import json
from backend.database import DB

app = Flask(__name__)
SECRET = "areallybadsecreat"
app.config.update(
    DEBUG=True,
    SECRET_KEY = SECRET,
)

log = logging.getLogger("werkzeug")
log.disabled = True

# This list will hold all created profiles
profiles = {}

# Render a form to create a new profile
@app.route('/api/')
def create_profile_form():
    return "hello22"



@app.route('/api/getuserprofile')
def getuserprofile():
    username = request.args.get('username')
    return getuserprofile(username)

def getuserprofile(username):
    try:
        x = DB.getuserprofile(DB, username)
        profiles.__setitem__(username, x)
    except Exception as e:
        x = jsonify({'error':'user not found'})
    
    return x
    


@app.route('/api/login', methods=['POST'])
def login():
    ##edit when we have access to database
    authenticated = False

    username = request.form.get("username")
    password = request.form.get("password")
    authenticated = DB.authenticate(DB, username, password) 

    if authenticated is not None:
        # print(authenticated.json['username'])
        # print(authenticated.json['userdata']['personal-info'])
        profiles[username] = (authenticated.json['userdata']) # assign the userdata to the local profiles cache
        return(authenticated.json['userdata'])
    else:
        return(jsonify({'error': 'Wrong Username/Password'}))
    

def getIntArray(stringValue: str):
    return [int(numeric_string) for numeric_string in stringValue.split(',')]

 #informaiton specific to the personal-info section - see updateagming for gaming specific info   
@app.route('/api/updateuser', methods=['POST'])
def updateUser():
    username = request.form.get("username")
    getuserprofile(username)
    try:
        user = profiles[username]
        userinfo = user['personalInformation']
        userinfo['name'] = username
        userinfo['pronouns'] = request.form.get("pronouns")
        userinfo['languages'] = request.form.get("languages").split(',')
        userinfo['flairs'] = request.form.get("flairs").split(',')
        userinfo['blurp'] = request.form.get("blurp")
        userinfo['discordUsername'] = request.form.get("discordUsername")
        userinfo['availability']['weekdays']['days'] = getIntArray(request.form.get("availability-weekdays-days"))
        userinfo['availability']['weekdays']['times'] = getIntArray(request.form.get("availability-weekdays-times"))
        userinfo['availability']['weekend']['days'] = getIntArray(request.form.get("availability-weekend-days"))
        userinfo['availability']['weekend']['times'] = getIntArray(request.form.get("availability-weekend-times"))
        x = DB.updateUserinfo(DB, username, user) # returns True or False is the record was updated
        if x:
            return(user)
        else:
            return jsonify({'error':'user not found'})
    except Exception as e:
        return jsonify({'error': str(e)})
    
#  informaiton specific to the gaming-info section - see updateuser for gaming specific info   
@app.route('/api/updateagming', methods=['POST'])
def updateagming():
    username = request.form.get("username")
    getuserprofile(username)
    try:
        user = profiles[username]
        gaminginfo = user['gameInformation']
        gaminginfo['communication'] = request.form.get("communication", type=int)
        gaminginfo['matchingPreference'] = request.form.get("matchingPreference")
        gaminginfo['playstyle']["approach"] = request.form.get("playstyle-approach", type=int)
        gaminginfo['playstyle']["reaction"] = request.form.get("playstyle-reaction", type=int)
        gaminginfo['playstyle']["setting"] = request.form.get("playstyle-setting", type=int)
        gaminginfo['rank'] = request.form.get("rank")
        gaminginfo['region'] = request.form.get("region")
        gaminginfo['roles'] = request.form.get("roles").split(',')
        gaminginfo['platforms'] = request.form.get("platforms").split(',')
        x = DB.updateUserinfo(DB, username, user) # returns True or False is the record was updated
        if x:
            return(user)
        else:
            return jsonify({'error':'user not found'})
    except Exception as e:
        return jsonify({'error': str(e)})    


@app.route('/api/addmatch')
def addmatch():
    username = request.args.get('username')
    match = request.args.get('match')
    return DB.addmatch(DB, username, match)

@app.route('/api/deletematch')
def deletematch():
    username = request.args.get('username')
    match = request.args.get('match')
    return DB.deletematch(DB, username, match)

@app.route('/api/getmatches')
def getmatches():
    username = request.args.get('username')
    return DB.getmatches(DB, username)

    
    
@app.route('/api/getsecurityquestion')
def getsecurityquestion():
    username = request.args.get('username')
    return DB.forgotPassword(DB, username)


@app.route('/api/resetpassword', methods=['POST'])
def resetpassword():
    username = request.form.get("username")
    newpassword = request.form.get("newpassword")
    securityanswer = request.form.get("securityanswer")
    if DB.resetPassword(DB, username, newpassword, securityanswer):
        return('password was reset')
    else:
        return('password was NOT reset')
    

@app.route('/api/getuserscores')
def getuserscores():
    username = request.args.get('username')
    return DB.getuserscores(DB, username)



if __name__ == '__main__':
    app.run(debug=False)
