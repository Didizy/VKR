from django.urls import path, include
from .views import *

urlpatterns = [
    path('images/', ImageView.as_view())
]
