from django.urls import path, include
from .views import AvisViewSet, VehiculeViewSet
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register(r"vehicules", VehiculeViewSet)
router.register(r"avis", AvisViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
