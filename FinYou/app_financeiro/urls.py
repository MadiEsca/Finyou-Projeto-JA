from django.contrib.auth import views as auth_views
from django.urls import path, reverse_lazy

#Importando as Views de Autenticação
from django.contrib.auth import views as auth_views
from django.contrib.auth.forms import AuthenticationForm
from django import forms

#Importando os formulários e a url
from .forms import Formulario_Criar_Conta, Formulario_Login
from .views import home, login, recuperarSenha, dashboard, pagamento, criarConta, logout



urlpatterns = [
    path("", home, name="rota_home"),
    path("login/", login, name="rota_login"),
    path("criarConta/", criarConta, name="rota_criarConta"),
    path("recuperarSenha/", recuperarSenha, name="rota_recuperarSenha"),
    path("dashboard/", dashboard, name="rota_dashboard"),
    path("pagamento/", pagamento, name="rota_pagamento"),
    path("logout/", logout, name="rota_logout"),
    #path("teste/", loginTeste.as_view(), name="rota_teste"),

    # path("login/", auth_views.LoginView.as_view(
    #     template_name="app_financeiro/login.html",
    #     authentication_form = AuthenticationForm,
    #     redirect_authenticated_user=True,
    #     success_url=reverse_lazy("rota_home"),
    #     ), name="rota_login")
]