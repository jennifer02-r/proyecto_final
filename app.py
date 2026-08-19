from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/juego')
def juego():
    return render_template('numero-secreto.html')

@app.route('/integrante1')
def integrante1():
    return render_template('PAGINA.html')

@app.route('/integrante3')
def integrante3():
    return render_template('pagina3.html')


if __name__ == '__main__':
    app.run()