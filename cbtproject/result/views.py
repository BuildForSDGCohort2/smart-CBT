from django.shortcuts import render
from rest_framework import viewsets

from .serializers import ResultSerializer
from .models import Result

# Create your views here.
class ResultViewSet(viewsets.ModelViewSet):
    queryset = Result.objects.all().order_by('question')
    serializer_class = ResultSerializer

