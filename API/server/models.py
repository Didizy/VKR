from django.db import models


class ImageModel(models.Model):
    img = models.ImageField(upload_to="images/imgs")


class LocationModel(models.Model):
    location_name = models.CharField(max_length=100, default="default location", primary_key=True)
    location_img = models.ImageField(upload_to="images/locations")


class MarkerModel(models.Model):
    marker_location = models.ForeignKey(LocationModel, on_delete=models.PROTECT)
    marker_img = models.ImageField(upload_to="images/markers")
    marker_hash = models.CharField(max_length=255, default="-")
