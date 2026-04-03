- Create a virtual environment
- Activate the virtual environment
- install Django 'pip install django'
- Create your project ' django-admin startproject Profile'
- Create your app python manange.py startapp Details.

- go to settings.py in profiles then under installed apps, addd the app that you just created

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    
    #added app
    'Details',
]

- Run migrations using 'python manage.py makemigrations'
- followed by 'python manage.py migrate'