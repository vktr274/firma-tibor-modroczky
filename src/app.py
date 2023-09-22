from flask import Flask
from flask_sitemap import Sitemap
from flask_mobility import Mobility
from flask_minify import Minify
from flask_assets import Environment
from assets import bundles
from views import page
import os

app = Flask(__name__)
app.config["SECRET_KEY"] = os.environ.get("SECRET_KEY")
app.register_blueprint(page)

Minify(app=app, html=True, js=True, cssless=True)

ext = Sitemap(app=app)

Mobility(app)

assets = Environment(app)
assets.register(bundles)


@ext.register_generator
def sitemap():
    yield "page.index", {}
