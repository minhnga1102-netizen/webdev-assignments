
import json
from flask import Flask, Response

# reading a JSON file
with open("dictionary.json", encoding="utf-8") as file:
    dictionary = json.load(file)

app = Flask(__name__)
@app.route("/translate/<word>")
def translate (word):
    word = word.lower()
    if word in dictionary:
        finnish = dictionary[word]
        response = {
            "English": word,
            "Finnish": finnish
        }
        return response
    # if the word not found
    else:
        # now response type is still dictionary
        dict_response = {"error": "Word not found"}
        # turn dict into JSON response
        json_response = json.dumps(dict_response)
        # json_response is just body, need more info
        #Response is a CLASS used to create HTTP response
        #response=..,status=..,mimetype=.. are arguments
        #to create the http_response OBJECT
        http_response = Response (
            response = json_response,
            status = 404,
            mimetype = "application/json"
        )
        return http_response

if __name__=='__main__':
    app.run(host="127.0.0.1", port=3000, use_reloader=True)