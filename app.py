from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    # Esto buscará tu página principal (puedes adaptarlo o servir tu HTML)
    return "¡Servidor Flask funcionando correctamente!"

if __name__ == '__main__':
    app.run(debug=True)