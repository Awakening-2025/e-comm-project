from django.contrib import admin
from .models import User,SaveQueryData



@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ("id", "first_name", "last_name", "email")

@admin.register(SaveQueryData)
class ContactQuery(admin.ModelAdmin):
    list_display = ("id", "name", "website_link", "phone_number", "email", "query", "budget")

