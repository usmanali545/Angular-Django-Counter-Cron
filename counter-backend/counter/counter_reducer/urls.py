from django.conf.urls import url 
from counter_reducer import views 
 
urlpatterns = [
    url(r'^api/counters/(?P<pk>[0-9]+)$', views.counter_detail)
]