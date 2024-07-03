from rest_framework_simplejwt.serializers import TokenObtainPairSerializer 
from rest_framework import serializers

from .models import User

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):

    @classmethod
    def get_token(cls, user):
        token = super(MyTokenObtainPairSerializer, cls).get_token(user)

        return token
    

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True,'required':True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user