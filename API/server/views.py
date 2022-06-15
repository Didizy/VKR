from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import *
from .serializers import *

import base64
import matplotlib.pyplot as plt
import matplotlib.image as mpimg
from PIL import Image
from io import BytesIO


class ImageView(APIView):
    def post(self, request):
        print("TEST")
        img = request.data['img']
        dec = base64.b64decode(img)
        print(dec)
        new_img = ImageModel(img=dec)
        new_img.save()
        # plt.imshow(mpimg.imread(dec))
        # plt.show()

        return Response("Aaa")

    def get(self, request):
        img_id = 1
        img = ImageModel.objects.get(pk=img_id)
        print(img)
        return Response(img.img.path)
