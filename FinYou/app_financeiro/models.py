from django.db import models


# Criando os modelos do meu banco de dados
class Usuario(models.Model):
    nome = models.CharField(max_length=255, null=False)
    idade = models.DecimalField(max_digits=2, decimal_places=0)
    email = models.EmailField(max_length=254, blank=False, null=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Usuário"
        verbose_name_plural = "Usuários"

    def __str__(self):
        return self.nome
