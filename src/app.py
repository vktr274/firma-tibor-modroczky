from flask import Flask
from flask_mobility import Mobility
from flask_minify import Minify
from flask_assets import Environment
from assets import bundles
from views import page

app = Flask(__name__)
app.register_blueprint(page)

Minify(app=app, html=True, js=True, cssless=True)

Mobility(app)

assets = Environment(app)
assets.register(bundles)
