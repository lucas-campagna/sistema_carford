FROM python:3.11.0-alpine

RUN apk update
RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . .

RUN pip install -r requirements.txt
