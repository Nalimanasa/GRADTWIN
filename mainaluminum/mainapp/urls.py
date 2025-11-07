from django.urls import path
from . import views


urlpatterns = [
    path('', views.home, name='home'),
    path('main_register/',views.main_register , name='register'),
    path('main_register_api/',views.main_register_api,name='register_api'),
    path('api/main_userlogin/',views.main_userlogin, name='userlogin'),
    # path('api/adminlogin/',views.adminlogin, name='adminlogin'),
    path('api/main_pending/',views.main_pending,name='pending'),
    path('api/main_pending_Id/<int:item_id>/',views.main_pending_Id,name='pending_Id'),
    path('api/main_approve/',views.main_approve,name='approve'),
    path('api/main_feedback/',views.main_feedback,name="feedback")
]    