from django.db import models

class Vehicule(models.Model):
    nom = models.CharField(max_length=255)
    prix = models.CharField(max_length=100)
    type = models.CharField(max_length=50)  # Vente, Location, Réparation
    image = models.ImageField(upload_to='vehicules/')
    annee = models.IntegerField()
    passagers = models.IntegerField()
    carburant = models.CharField(max_length=50)
    transmission = models.CharField(max_length=50)
    description = models.TextField()

    def __str__(self):
        return self.nom


class Avis(models.Model):
    nom = models.CharField(max_length=100)
    service = models.CharField(max_length=255)
    note = models.IntegerField()
    commentaire = models.TextField()
    date = models.CharField(max_length=100)

    def __str__(self):
        return f"Avis de {self.nom}"
