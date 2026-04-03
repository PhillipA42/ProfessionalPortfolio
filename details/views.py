from django.shortcuts import render, redirect
from .models import Details
from .forms import ContactForm
from django.contrib import messages
# Create your views here.

def details(request):
    details = details.objects.all()
    context = {
        'details': details
    }
    
    return render(request, 'details.html', context)


def details(request):
   
    projects = Details.objects.all() 
    
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('details')
    else:
        form = ContactForm()
    
    # Pass 'projects' to the template
    return render(request, 'details.html', {
        'projects': projects, 
        'form': form
    })