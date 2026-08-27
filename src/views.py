from flask import Blueprint
from flask import render_template, Response
from content import actions, intro, highlights, gallery, meta, geo
import mimetypes

page = Blueprint("page", __name__, template_folder="templates")


@page.route("/", methods=["GET"])
def index():
    return render_template(
        "index.html",
        go_to="#",
        show_hamburger=True,
        actions=actions,
        intro=intro,
        highlights=highlights,
        gallery=gallery,
        meta=meta,
        geo=geo,
    )


@page.app_errorhandler(404)
def page_not_found(e):
    return (
        render_template(
            "404.html", title="Stránka sa nenašla", go_to="/", show_hamburger=False
        ),
        404,
    )


def render_text_file(filename):
    mimetype, _ = mimetypes.guess_type(filename)
    return Response(render_template(filename), mimetype=mimetype)


@page.route("/robots.txt", methods=["GET"])
def robots():
    return render_text_file("robots.txt")


@page.route("/sitemap.xml", methods=["GET"])
def sitemap():
    return render_text_file("sitemap.xml")
