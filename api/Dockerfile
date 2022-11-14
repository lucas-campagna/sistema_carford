FROM python:3.11.0-alpine

RUN apk update
RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . .

ENV FLASK_APP=main.py
ENV FLASK_DEBUG=1
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

RUN pip install -r requirements.txt

CMD flask run --host 0.0.0.0 --port 5000