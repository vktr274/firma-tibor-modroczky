from flask_frozen import Freezer
from app import app, assets
import shutil

BUILD_DIR = "build"
CSS_GEN_DIR = "static/css/gen"
JS_GEN_DIR = "static/js/gen"

app.config["FREEZER_BASE_URL"] = "https://modroczky.sk/"
app.config["FREEZER_DESTINATION"] = BUILD_DIR
app.config["FREEZER_RELATIVE_URLS"] = True
assets.url = "static"

freezer = Freezer(app)

if __name__ == "__main__":
    freezer.freeze()
    shutil.copytree(
        CSS_GEN_DIR,
        f"{BUILD_DIR}/static/css/gen",
        dirs_exist_ok=True,
    )
    shutil.copytree(
        JS_GEN_DIR,
        f"{BUILD_DIR}/static/js/gen",
        dirs_exist_ok=True,
    )
