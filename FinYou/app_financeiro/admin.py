from django.contrib import admin
from .models import Usuario


# Register your models here.
@admin.register(Usuario)
class UsuarioAdmin(admin.ModelAdmin):
    list_display = ("nome", "idade", "email", "created_at", "updated_at")
    search_fields = ("id", "nome", "email")
    list_filter = ("created_at", "updated_at")
