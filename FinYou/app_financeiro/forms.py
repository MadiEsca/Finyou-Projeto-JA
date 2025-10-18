from django import forms
from django.contrib.auth.forms import AuthenticationForm

class Formulario_Login(forms.Form):
    username = forms.CharField(
        required=True, 
        label="Digite seu username",
        initial="asd",
        widget=forms.TextInput(attrs={'class': 'form-control'})
    )
    # email = forms.EmailField(
    #     required=True,
    #     label="Digite seu email",
    # ) #Retirando o Input de Email
    password = forms.CharField(
        required=True,
        label="Digite sua senha",
        widget=forms.PasswordInput(),
    )

class Formulario_Criar_Conta(forms.Form):
    username = forms.CharField(
        required=True, 
        label="Digite seu username",
    )
    email = forms.EmailField(
        required=True,
        label="Digite seu email",
    )
    password = forms.CharField(
        required=True,
        label="Digite sua senha",
        widget=forms.PasswordInput(),
    )
