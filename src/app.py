from flask import Flask, render_template, send_from_directory
from flask_sitemap import Sitemap
from flask_mobility import Mobility
from settings import actions, intro
import os

app = Flask(__name__)
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY')
ext = Sitemap(app=app)
Mobility(app)


@app.route('/', methods=['GET'])
@app.route('/index', methods=['GET'])
def index():
    return render_template(
        'index.html',
        title='Servis výpočtovej techniky a spotrebnej elektroniky',
        go_to='#',
        show_hamburger=True,
        google_site_verification=os.environ.get('GOOGLE_SITE_VERIFICATION'),
        actions=actions,
        intro=intro
    )


@app.errorhandler(404)
def page_not_found(e):
    return render_template(
        '404.html',
        title='Stránka sa nenašla',
        go_to='index',
        show_hamburger=False
    ), 404


@app.route('/robots.txt', methods=['GET'])
def robots():
    return send_from_directory('.', 'robots.txt')


@ext.register_generator
def sitemap():
    yield 'index', {}
