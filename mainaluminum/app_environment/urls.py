from django.urls import path
from . import views


urlpatterns = [
    path('', views.home, name='home'),
    path('eni_register/',views.eni_register , name='register'),
    path('eni_register_api/',views.eni_register_api,name='register_api'),
    path('eni_userlogin/',views.eni_userlogin, name='userlogin'),
    path('eni_adminlogin/',views.eni_adminlogin, name='adminlogin'),
    path('eni_pending/',views.eni_pending,name='pending'),
    path('eni_pending_Id/<int:item_id>/',views.eni_pending_Id,name='pending_Id'),
    path('eni_approve/',views.eni_approve,name='approve'),
    path('eni_feedback/',views.eni_feedback,name="feedback")
]    