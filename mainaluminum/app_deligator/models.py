from django.db import models

# Create your models here.
class  Deligator(models.Model):
    name=models.CharField(max_length=100  , default="Unknown")
    email=models.CharField(max_length=100  , default="Unknown")
    username=models.CharField(max_length=100  , default="Unknown")
    password=models.CharField(max_length=100,default="unknown")
    gender=models.CharField(max_length=100 , default="Unknown")
    phone=models.CharField(max_length=100,default='unknown')
    city = models.CharField(max_length=100, default="Unknown")
    state=models.CharField(max_length=100 , default="Unknown")
    country = models.CharField(max_length=100, default='India')
    pincode=models.CharField(max_length=100 , default="Unknown")
    address=models.TextField(null=True, blank=True)
    status=models.CharField(max_length=100,default='pending')
    is_superuser=models.BooleanField(default=False)
    is_staff=models.BooleanField(default=False)
    role = models.CharField(max_length=50, default='deligator')
    approved = models.BooleanField(default=False)   

class Material(models.Model):
    bauxite=models.FloatField(max_length=50 ,default="0")
    alumina=models.FloatField(max_length=50 ,default="0")
    moisture=models.FloatField(max_length=50 ,default="0")
    soda=models.FloatField(max_length=50 ,default="0")
    temperature=models.FloatField(max_length=50 ,default="0")
    residue = models.FloatField(null=True, blank=True)
    status=models.CharField(max_length=50,default="pending")

