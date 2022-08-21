from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import *
from .serializers import *

import base64
from PIL import Image
from io import BytesIO
from cv_module import Classifier
import cv2 as cv


class ImageView(APIView):
    def post(self, request):
        data_img = request.data['img']
        # print(data_img)
        if data_img:
            img = data_img.replace('data:image/png;base64,', '')
            imgdata = base64.b64decode(img)

            filename = 'input.png'
            with open(filename, 'wb') as f:
                f.write(imgdata)

            image = Classifier()
            marker = image.checkImage(cv.imread(f'input.png'))
            # marker = "Marker4"
            print(marker)
            if marker:
                location_name = LocationModel.objects.filter(location_name=MarkerModel.objects.filter(
                    marker_img='images/markers/' + str(marker) + '.png').values()[0]['marker_location_id']).values()[0][
                    'location_name']
                print(location_name)

                location_img = LocationModel.objects.filter(location_name=MarkerModel.objects.filter(
                    marker_img='images/markers/' + str(marker) + '.png').values()[0]['marker_location_id']).values()[0][
                    'location_img']
                print(location_img)

                # return Response("Фото отправлено!")
                data = {'name': location_name, 'path': location_img}
                print(data)
                return Response(data)
            else:
                return Response("ERROR")
        else:
            return Response("NULL")

    def get(self, request):
        img = list(LocationModel.objects.filter(location_name='Холл D8').values())[0]['location_img']
        # img['location_img']
        # filename = 'db_img.png'
        # with open(filename, 'wb') as f:
        #     f.write(img)
        print(img)
        # print(Image.open(img.img).tobytes().decode("ISO-8859-1"))
        # print(to_pil)
        # return Response(Image.open(img.img).tobytes().decode("ISO-8859-1"))
        return Response(img)


class LocationView(APIView):
    def get(self):
        return
