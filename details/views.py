from django.shortcuts import render, redirect
from .models import Details, ContactMessage
from .forms import ContactForm
from django.contrib import messages

def details(request):
    projects = Details.objects.all() 
    
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            # This will now correctly use the ContactMessage model 
            # as long as your ContactForm is linked to it in forms.py
            form.save() 
            messages.success(request, "Message sent successfully!")
            return redirect('details') 
    else:
        form = ContactForm()
    
    return render(request, 'details.html', {'projects': projects, 'form': form})