from django.urls import path
from django.urls.resolvers import URLPattern
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('Login', views.Login),
    path('User', views.getData),
    path('Luck', views.Luck)
]
