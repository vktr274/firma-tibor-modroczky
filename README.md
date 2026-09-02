# [![tm_logo](src/static/images/logo_large_sk.webp)](https://modroczky.sk/)

## Flask Web Application for Tibor Modroczky

Tibor Modroczky owns an electronics repair shop based in Slovakia.\
The Web Application is hosted on [GitHub Pages](https://modroczky.sk/). It was built with responsiveness and cross-browser compatibility in mind. It was tested and works flawlessly in Chrome, Firefox, Opera, Edge and Brave. It has some flaws in Internet Explorer which is an unsupported browser.

## Run locally

```bash
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
pip install -r requirements.txt
cd src
flask run
```

## Build

```bash
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
pip install -r requirements.txt
cd src
python freezer.py
```

## Test build locally

```bash
npm install -g serve
cd src/build
serve .
```

### License

The code is licensed under the [MIT License](LICENSE).\
© [Tibor Modroczky](https://modroczky.sk/) logo rights are reserved.
