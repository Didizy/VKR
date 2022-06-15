from django.urls import path, include
from .views import *

urlpatterns = [
    path('images/', ImageView.as_view()),
    path('images/<int:img_id>', ImageView.as_view())
]
