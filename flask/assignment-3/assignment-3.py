
import json
from flask import Flask, request

app=Flask(__name__)
@app.route("/add")
def add():
    args = request.args
    en = args.get("en")
    fi=args.get("fi")
    # read JSON file, turn into python dictionary
    with open("dictionary.json", encoding="utf-8") as file:
        dictionary = json.load(file)
    # add key-value pair
    dictionary[en]=fi
    # turn back python dictionary into JSON
    # and write directly into file
    # dumps: dump to STRING # dump
    with open("dictionary.json","w", encoding="utf-8") as file:
        json.dump(dictionary,file,ensure_ascii=False,indent=2)
    return {"en": en, "fi": fi}
if __name__=='__main__':
    app.run(host='127.0.0.1',port=3000,use_reloader = True)