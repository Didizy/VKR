from django.db import models


class ImageModel(models.Model):
    img = models.ImageField()
