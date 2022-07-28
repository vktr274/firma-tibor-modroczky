from flask import Blueprint
from flask import render_template, send_from_directory
from content import actions, intro, highlights
import os

page = Blueprint('page', __name__, template_folder='templates')


@page.route('/', methods=['GET'])
@page.route('/index', methods=['GET'])
def index():
    return render_template(
        'index.html',
        title='Servis výpočtovej techniky a spotrebnej elektroniky',
        go_to='#',
        show_hamburger=True,
        google_site_verification=os.environ.get('GOOGLE_SITE_VERIFICATION'),
        actions=actions,
        intro=intro,
        highlights=highlights
    )


@page.app_errorhandler(404)
def page_not_found(e):
    return render_template(
        '404.html',
        title='Stránka sa nenašla',
        go_to='index',
        show_hamburger=False
    ), 404


@page.route('/robots.txt', methods=['GET'])
def robots():
    return send_from_directory('.', 'robots.txt')
