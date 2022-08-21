FROM python:3.8.12-slim-bullseye

WORKDIR /app/api

COPY requirements.txt .

RUN apt-get update
RUN apt-get install ffmpeg libsm6 libxext6  -y
RUN python -m pip install --upgrade pip
RUN pip --default-timeout=1000 install -r requirements.txt

COPY . .

EXPOSE 8000

# CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]