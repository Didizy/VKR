# Generated by Django 4.0.5 on 2022-06-15 05:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('server', '0002_locationmodel_markermodel'),
    ]

    operations = [
        migrations.AlterField(
            model_name='imagemodel',
            name='img',
            field=models.ImageField(upload_to='images/imgs'),
        ),
    ]