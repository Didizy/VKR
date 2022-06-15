from django.contrib import admin
from .models import *


class ImageAdmin(admin.ModelAdmin):
    readonly_fields = ('id',)


admin.site.register(ImageModel, ImageAdmin)
admin.site.register(MarkerModel)
admin.site.register(LocationModel)
