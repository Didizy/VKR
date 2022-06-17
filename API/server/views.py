from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import *
from .serializers import *

import base64
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
        # print(Image.open(img.img).tobytes().decode("ISO-8859-1"))
        # print(to_pil)
        return Response(Image.open(img.img).tobytes().decode("ISO-8859-1"))


class LocationView(APIView):
    def get(self):
        return
