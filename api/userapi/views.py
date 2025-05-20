from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from .models import User,SaveQueryData
from .serializers import UserSerializer,QuerySerializer
from rest_framework import status
from rest_framework.decorators import action
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated,AllowAny
from django.contrib.auth import authenticate
from django.core.mail import send_mail
from django.conf import settings



# Create your views here.
class UserViewSet(viewsets.ModelViewSet):
    queryset=User.objects.all()
    serializer_class=UserSerializer
    permission_classes=[IsAuthenticated]


    @action(detail=False,methods=['POST'],permission_classes=[AllowAny])
    def register(self,request,*args,**kwargs):
        serializer=UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({
                'message':"user created successfully",
                "data":serializer.data
            },status=status.HTTP_201_CREATED)
        return Response({
            "message":"user not created",
            "error":serializer.errors
            },status=status.HTTP_400_BAD_REQUEST)
    
    @action(detail=False,methods=['POST'],permission_classes=[AllowAny])
    def login(self,request,*args,**kwargs):
        email=request.data.get('email')
        password=request.data.get('password')
        
        if not email or not password:
            return Response({
                'message':"email and password is required"
            },status=status.HTTP_400_BAD_REQUEST)
        
        check_user=User.objects.filter(email=email).exists()
        if check_user is False:
            return Response({
                'message':"user not found"
            },status=status.HTTP_404_NOT_FOUND)
        else:
            user=authenticate(email=email,password=password)
            if user is None:
                return Response({
                    'message':"invalid credentials"
                },status=status.HTTP_401_UNAUTHORIZED)
            token=RefreshToken.for_user(user)
            return Response({
                'message':"login successful",
                'refresh_token':str(token),
                'access_token':str(token.access_token),
            },status=status.HTTP_200_OK)


    @action(detail=False,methods=['POST'],permission_classes=[IsAuthenticated])
    def logout(self,request,*args,**kwargs):
        token=request.data.get("refresh_token")
        if not token:
            return Response({
                'message':"token Is Required"
            },status=status.HTTP_400_BAD_REQUEST)
        else:
            RefreshToken(token).blacklist()
            return Response({
                'message':"logout successful"
            },status=status.HTTP_200_OK)
        
    @action(detail=False,methods=['POST'],permission_classes=[IsAuthenticated])
    def change_password(self,request,*args,**kwargs):
        user=request.user
        old_password=request.data.get('old_password')
        new_password=request.data.get('new_password')
        if not old_password or not new_password:
            return Response({
                'message':"old_password and new_password is required"
            },status=status.HTTP_400_BAD_REQUEST)
        if user.check_password(old_password):
            user.set_password(new_password)
            user.save()
            return Response({
                'message':"password changed successfully"
            },status=status.HTTP_200_OK)
        else:
            return Response({
                'message':"old_password is incorrect"
            },status=status.HTTP_400_BAD_REQUEST)
        

# class QuerySaveViewSet(viewsets.ModelViewSet):
#     queryset=SaveQueryData.objects.all()
#     serializer_class=QuerySerializer
#     permission_classes=[AllowAny]


#     def create(self, request, *args, **kwargs):
#         serializer = self.get_serializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()

#             # Extracting fields from request.data
#             name = request.data.get("name", "No name provided")
#             email = request.data.get("email", "No email provided")
#             number = request.data.get("phone_number", "No phone number provided")
#             website_link = request.data.get("website_link", "No website link provided")
#             budget = request.data.get("budget", "No budget provided")
#             message = request.data.get("query", "No message provided")

#             # Email content

#             subject = f"Customer query Form Awakening Coins {name}"
#             content = (
#                 f"📨 New Contact Form Submission\n\n"
#                 f"👤 Name: {name}\n"
#                 f"📧 Email: {email}\n"
#                 f"📱 Phone Number: {number}\n"
#                 f"🔗 Website Link: {website_link}\n"
#                 f"💰 Budget: {budget}\n"
#                 f"📝 Message:\n{message}\n"
#             )

#             # Send the email

#             send_mail(
#                 subject,
#                 content,
#                 settings.EMAIL_HOST_USER,
#                 ['Wd.awakeningcoins@gmail.com'],       
#                 fail_silently=False,
#             )

#             return Response({
#                 "message": "Your query has been submitted. Our team will get back to you shortly.",
#                 "data": serializer.data
#             }, status=status.HTTP_201_CREATED)

#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class QuerySaveViewSet(viewsets.ModelViewSet):
    queryset = SaveQueryData.objects.all()
    serializer_class = QuerySerializer
    permission_classes = [AllowAny]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()

            # Extracting fields from request.data
            name = request.data.get("name", "No name provided")
            email = request.data.get("email", "No email provided")
            number = request.data.get("phone_number", "No phone number provided")
            website_link = request.data.get("website_link", "No website link provided")
            budget = request.data.get("budget", "No budget provided")
            message = request.data.get("query", "No message provided")

            # Admin Email
            subject_admin = f"Customer query Form Awakening Coins {name}"
            content_admin = (
                f"📨 New Contact Form Submission\n\n"
                f"👤 Name: {name}\n"
                f"📧 Email: {email}\n"
                f"📱 Phone Number: {number}\n"
                f"🔗 Website Link: {website_link}\n"
                f"💰 Budget: {budget}\n"
                f"📝 Message:\n{message}\n"
            )

            # Send email to Admin
            send_mail(
                subject_admin,
                content_admin,
                settings.EMAIL_HOST_USER,
                ['Wd.awakeningcoins@gmail.com'],
                fail_silently=False,
            )

            # User Confirmation Email
            subject_user = "Thank you for contacting Awakening Coins"
            content_user = (
                f"Hi {name},\n\n"
                f"Thank you for reaching out to Awakening Coins. We've received your query:\n\n"
                f"📝 \"{message}\"\n\n"
                f"Our team will review your message and get back to you shortly.\n\n"
                f"Warm regards,\n"
                f"Awakening Coins Team"
            )

            # Send confirmation email to User
            send_mail(
                subject_user,
                content_user,
                settings.EMAIL_HOST_USER,
                [email],  # user's email
                fail_silently=False,
            )

            return Response({
                "message": "Your query has been submitted. Confirmation email sent.",
                "data": serializer.data
            }, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
