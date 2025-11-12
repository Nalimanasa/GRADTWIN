from django.urls import path
from app_scrap import views  as scrap_views


urlpatterns = [
    path('', scrap_views.scrap_home, name='home'),
    path('scrap_register/',scrap_views.scrap_register , name='register'),
    path('scrap_register_api/',scrap_views.scrap_register_api,name='register_api'),
    path('scrap_userlogin/',scrap_views.scrap_userlogin, name='userlogin'),
    path('scrap_pending/',scrap_views.scrap_pending,name='pending'),
    path('scrap_pending_Id/<int:item_id>/',scrap_views.scrap_pending_Id,name='pending_Id'),
    path('scrap_approve/',scrap_views.scrap_approve,name='approve'),
    path('scrap_feedback/',scrap_views.scrap_feedback,name="feedback"),
    path("agent_material_excel/", scrap_views.export_approved_materials_to_excel, name="agent_material_excel"),
    path('scrap_data/',scrap_views.scrap_data,name="scrap_data")
 ]    