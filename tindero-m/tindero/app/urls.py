from django.urls import re_path, include
from . import views


urlpatterns = [
	re_path(r'^$', views.index, name='index'),
	re_path(r'^nice/(?P<user_id>\d+)$', views.nice, name='nice'),
	re_path(r'^nope/(?P<user_id>\d+)$', views.nope, name='nope'),
	re_path(r'^profile/$', views.profile, name='profile'),
]
