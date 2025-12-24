from rest_framework import serializers
from .models import Vehicule, Avis

class VehiculeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vehicule
        fields = '__all__'

class AvisSerializer(serializers.ModelSerializer):
    class Meta:
        model = Avis
        fields = '__all__'
