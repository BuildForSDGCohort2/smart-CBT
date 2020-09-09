from django.shortcuts import render
from rest_framework import viewsets

from .serializers import QuestionSerializer
from .models import Question

# Create your views here.
class QuestionViewSet(viewsets.ModelViewSet):
    queryset = Question.objects.all().order_by('question')
    serializer_class = QuestionSerializer

