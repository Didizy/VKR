from rest_framework import serializers
from .models import *


class ImagesModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImageModel
        fields = '__all__'
