from django.db import models


# Create your models here.
class Result(models.Model):
    score = models.CharField(max_length = 60)
    question = models.TextField()
    isCorrect = models.BooleanField()

    def __str__(self):
        return self.question
