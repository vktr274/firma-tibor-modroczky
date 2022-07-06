FROM python:3.8-slim
WORKDIR /webapp
COPY docker-requirements.txt .
RUN python -m pip install --no-cache-dir -r docker-requirements.txt
COPY src .
RUN python -m pip install --no-cache-dir -r requirements.txt
CMD ["gunicorn", "--threads", "8", "--worker-class", "gthread", "--workers", "4", "--bind", "0.0.0.0:5000", "app:app"]
