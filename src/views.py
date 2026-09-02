from datetime import datetime

from flask import Blueprint, Response, current_app, render_template, url_for
from content import actions, intro, highlights, gallery, meta, geo, text
import mimetypes

SLOVAK_LANGUAGE = "sk"
HUNGARIAN_LANGUAGE = "hu"

page = Blueprint("page", __name__, template_folder="templates")


@page.route("/", methods=["GET"])
def index():
    return render_template(
        "index.html",
        go_to="#",
        show_hamburger=True,
        actions=actions[SLOVAK_LANGUAGE],
        intro=intro[SLOVAK_LANGUAGE],
        highlights=highlights[SLOVAK_LANGUAGE],
        gallery=gallery[SLOVAK_LANGUAGE],
        meta=meta[SLOVAK_LANGUAGE],
        text=text[SLOVAK_LANGUAGE],
        geo=geo,
        language=SLOVAK_LANGUAGE,
    )


@page.route("/sk/", methods=["GET"])
def index_sk():
    return render_template(
        "index.html",
        go_to="#",
        show_hamburger=True,
        actions=actions[SLOVAK_LANGUAGE],
        intro=intro[SLOVAK_LANGUAGE],
        highlights=highlights[SLOVAK_LANGUAGE],
        gallery=gallery[SLOVAK_LANGUAGE],
        meta=meta[SLOVAK_LANGUAGE],
        text=text[SLOVAK_LANGUAGE],
        geo=geo,
        language=SLOVAK_LANGUAGE,
    )


@page.route("/hu/", methods=["GET"])
def index_hu():
    return render_template(
        "index.html",
        go_to="#",
        show_hamburger=True,
        actions=actions[HUNGARIAN_LANGUAGE],
        intro=intro[HUNGARIAN_LANGUAGE],
        highlights=highlights[HUNGARIAN_LANGUAGE],
        gallery=gallery[HUNGARIAN_LANGUAGE],
        meta=meta[HUNGARIAN_LANGUAGE],
        text=text[HUNGARIAN_LANGUAGE],
        geo=geo,
        language=HUNGARIAN_LANGUAGE,
    )


@page.app_errorhandler(404)
def page_not_found(e):
    return (
        render_template(
            "404.html",
            title="Stránka sa nenašla",
            go_to="/",
            show_hamburger=False,
            meta=meta[SLOVAK_LANGUAGE],
            language=SLOVAK_LANGUAGE,
        ),
        404,
    )


def render_text_file(filename, **context):
    mimetype, _ = mimetypes.guess_type(filename)
    return Response(render_template(filename, **context), mimetype=mimetype)


@page.route("/robots.txt", methods=["GET"])
def robots():
    return render_text_file("robots.txt")


@page.route("/sitemap.xml", methods=["GET"])
def sitemap():
    sitemap_entries = []
    excluded_endpoints = {
        "page.sitemap",
        "page.robots",
        "page.index",  # default index
    }

    for rule in current_app.url_map.iter_rules():
        rule_methods = rule.methods or set()
        if (
            rule.endpoint.startswith("page.")
            and "GET" in rule_methods
            and not rule.arguments
            and rule.endpoint not in excluded_endpoints
        ):
            sitemap_entries.append(
                {
                    "url": url_for(rule.endpoint, _external=True),
                    "lastmod": datetime.now().strftime("%Y-%m-%d"),
                }
            )
    return render_text_file("sitemap.xml", entries=sitemap_entries)
