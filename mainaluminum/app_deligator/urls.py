from django.urls import path
from app_deligator import views as deligator_views


urlpatterns = [
    path('', deligator_views.del_home, name='home'),
    path('del_register/',deligator_views.del_register , name='register'),
    path('del_register_api/',deligator_views.del_register_api,name='register_api'),
    path('del_userlogin/',deligator_views.del_userlogin, name='userlogin'),
    path('del_pending/',deligator_views.del_pending,name='pending'),
    path('del_pending_Id/<int:item_id>/',deligator_views.del_pending_Id,name='pending_Id'),
    path('del_approve/',deligator_views.del_approve,name='approve'),
    path('del_feedback/',deligator_views.del_feedback,name="feedback"),
    path('del_material_view/',deligator_views.del_material_view,name='materialview'),
    path('del_material_view_Id/<int:item_id>/',deligator_views.del_material_view_Id,name="materialview"),
    path('del_material_approved/',deligator_views.del_material_approved,name="agentmaterialapproved"),
    path('del_process/',deligator_views.del_process,name="agent_process"),
    path('del_data/',deligator_views.del_data,name="del_data"),
]    