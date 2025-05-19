from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser):
    email=models.EmailField(unique=True)
    mobile_number=models.CharField(max_length=16,null=True,blank=True)
    USERNAME_FIELD='email'
    REQUIRED_FIELDS=['username','mobile_number']

    def __str__(self):
        return f'{self.email}-{self.username}'


class SaveQueryData(models.Model):
    name=models.CharField(max_length=20,null=True,blank=True)
    email=models.CharField(max_length=50)
    phone_number=models.CharField(max_length=20,null=True,blank=True)
    website_link=models.CharField(max_length=100,null=True,blank=True)
    query=models.TextField()
    budget=models.CharField(max_length=20,null=True,blank=True)
