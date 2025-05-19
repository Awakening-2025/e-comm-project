from rest_framework import serializers
from .models import User,SaveQueryData
from django.contrib.auth.hashers import make_password

class UserSerializer(serializers.ModelSerializer):

    def create(self, validated_data):
        validated_data['password']=make_password(validated_data['password'])
        user=User.objects.create(**validated_data)
        return user

    class Meta:
        model=User
        fields=['username','email','password','first_name','last_name','mobile_number']

        extra_kwargs={
            'password':{'write_only':True}
            }


class QuerySerializer(serializers.ModelSerializer):
    class Meta:
        model=SaveQueryData
        fields="__all__"