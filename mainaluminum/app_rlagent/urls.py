from django.urls import path
from . import views


urlpatterns = [
    path('', views.agent_home, name='home'),
    path('agent_register/',views.agent_register , name='register'),
    path('agent_register_api/',views.agent_register_api,name='register_api'),
    path('agent_userlogin/',views.agent_userlogin, name='userlogin'),
    path('agent_pending/',views.agent_pending,name='pending'),
    path('agent_pending_Id/<int:item_id>/',views.agent_pending_Id,name='pending_Id'),
    path('agent_approve/',views.agent_approve,name='approve'),
    path('agent_material/',views.agent_material,name='material'),
    path('agent_material_view/',views.agent_material_view,name='materialview'),
    path('agent_material_view_Id/<int:item_id>/',views.agent_material_view_Id,name="materialview"),
    path('agent_material_approved/',views.agent_material_approved,name="agentmaterialapproved"),
    
]    