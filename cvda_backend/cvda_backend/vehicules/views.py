from .permissions import IsAdminUserRole
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework import viewsets
from .models import Vehicule, Avis
from .serialiazers import VehiculeSerializer, AvisSerializer
import logging

logger = logging.getLogger(__name__)

class VehiculeViewSet(viewsets.ModelViewSet):
    queryset = Vehicule.objects.all()
    serializer_class = VehiculeSerializer

    def get_permissions(self):
        logger.info(f"Action: {self.action}, User: {self.request.user}, Authenticated: {self.request.user.is_authenticated}")
        if self.action in ['list', 'retrieve']:
            permission_classes = [AllowAny]
        else:
            # Temporairement : autoriser tout utilisateur authentifié
            permission_classes = [IsAuthenticated]
            logger.info(f"User authenticated: {self.request.user.is_authenticated}")
            if hasattr(self.request.user, 'role'):
                logger.info(f"User role: {self.request.user.role}")
            else:
                logger.info("User has no role attribute")
        return [permission() for permission in permission_classes]

class AvisViewSet(viewsets.ModelViewSet):
    queryset = Avis.objects.all()
    serializer_class = AvisSerializer
