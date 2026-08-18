from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/juego')
def juego():
    return render_template('numero-secreto.html') # O el nombre exacto de tu archivo HTML

if __name__ == '__main__':
    app.run()