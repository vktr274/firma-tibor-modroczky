from flask_frozen import Freezer
from app import app, assets

app.config["FREEZER_BASE_URL"] = "https://modroczky.sk/"
app.config["FREEZER_DESTINATION"] = "build"
app.config["FREEZER_RELATIVE_URLS"] = True
assets.url = "static"

freezer = Freezer(app)

if __name__ == "__main__":
    freezer.freeze()
