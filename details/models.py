from django.db import models

# Create your models here.
class Details(models.Model):
    title= models.CharField(max_length=100)
    description = models.TextField
    technology = models.CharField(max_length=50)
    image = models.ImageField(upload_to='project_images/')
    
    def __str__(self):
        return self.title
    
class ContactMessage(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"Message from (self.name) - {self.email}"