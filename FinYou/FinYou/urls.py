"""
URL configuration for FinYou project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import path, include


#Importando as Views de Autenticação
from django.contrib.auth import views as auth_views
from django.contrib.auth.forms import AuthenticationForm
from django import forms

from app_financeiro import urls as app_urls
from app_financeiro import forms as app_forms

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", include("app_financeiro.urls")),

    #path("account/", include("django.contrib.auth.urls")),
    # path("account/login", include("django.contrib.auth.urls")),
    
]
