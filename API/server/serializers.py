from rest_framework import serializers
from .models import *


class ImagesModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImageModel
        fields = '__all__'


class LocationModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = LocationModel
        fields = '__all__'


class MarkerModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = MarkerModel
        fields = '__all__'
