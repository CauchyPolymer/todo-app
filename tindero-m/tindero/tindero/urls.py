from django.conf import settings
from django.conf.urls import re_path, include
from django.conf.urls.static import static
from django.contrib import admin

urlpatterns = [
    re_path(r'^admin/', admin.site.urls),
    re_path(r'^', include('django.contrib.auth.urls')),
    re_path(r'^', include('registration.urls')),
    re_path(r'^', include('app.urls')),
    # static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT),
]