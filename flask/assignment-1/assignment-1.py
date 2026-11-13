
from flask import Flask
app = Flask (__name__)
@app.route('/prime_number/<number>')
def prime_number (number):
    number = int(number);
    isPrime = True;
    if number <= 1 :
        isPrime = False;
    for divisor in range (2, number):
        if number % divisor == 0:
            isPrime=False;
            break
    return {"Number":number,
            "isPrime" : isPrime}

if __name__== '__main__':
    app.run(host='127.0.0.1',
            port = 3000,
            use_reloader = True)
     
    
    

