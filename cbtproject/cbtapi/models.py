
from django.db import models


# Create your models here.
class Question(models.Model):
    question = models.CharField(max_length = 60)
    solution = models.TextField()
    answers = models.TextField()

    def __str__(self):
        return self.question

