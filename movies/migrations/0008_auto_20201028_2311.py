# Generated by Django 3.1.2 on 2020-10-28 23:11

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('movies', '0007_auto_20201026_2036'),
    ]

    operations = [
        migrations.AlterField(
            model_name='movie',
            name='liked_by',
            field=models.ManyToManyField(related_name='liked_movies', to=settings.AUTH_USER_MODEL),
        ),
    ]
