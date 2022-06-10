from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import *
from .serializers import *

class ImageView(APIView):
    def post(self, request):
        print("TEST")
        print(request.data['img'])

        return Response("Aaa")
