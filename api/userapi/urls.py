from django.urls import path,include
from rest_framework.routers import DefaultRouter
from .views import UserViewSet,QuerySaveViewSet

router=DefaultRouter()
router.register(r'user',UserViewSet,basename='user')
router.register(r'contact', QuerySaveViewSet, basename='contact')
urlpatterns = [
    path('',include(router.urls)),
]