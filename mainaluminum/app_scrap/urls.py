from django.urls import path
from . import views


urlpatterns = [
    path('', views.scrap_home, name='home'),
    path('scrap_register/',views.scrap_register , name='register'),
    path('scrap_register_api/',views.scrap_register_api,name='register_api'),
    path('scrap_userlogin/',views.scrap_userlogin, name='userlogin'),
    path('scrap_pending/',views.scrap_pending,name='pending'),
    path('scrap_pending_Id/<int:item_id>/',views.scrap_pending_Id,name='pending_Id'),
    path('scrap_approve/',views.scrap_approve,name='approve'),
    path('scrap_feedback/',views.scrap_feedback,name="feedback"),
    path("agent_material_excel/", views.export_approved_materials_to_excel, name="agent_material_excel"),
    path('scrap_data/',views.scrap_data,name="scrap_data")
 ]    