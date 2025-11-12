from django.urls import path
from app_rlagent import views  as  Item_views


urlpatterns = [
    path('', Item_views.agent_home, name='home'),
    path('agent_register/',Item_views.agent_register , name='register'),
    path('agent_register_api/',Item_views.agent_register_api,name='register_api'),
    path('agent_userlogin/',Item_views.agent_userlogin, name='userlogin'),
    path('agent_pending/',Item_views.agent_pending,name='pending'),
    path('agent_pending_Id/<int:item_id>/',Item_views.agent_pending_Id,name='pending_Id'),
    path('agent_approve/',Item_views.agent_approve,name='approve'),
    path('agent_material/',Item_views.agent_material,name='material'),
    path('agent_material_view/',Item_views.agent_material_view,name='materialview'),
    path('agent_material_view_Id/<int:item_id>/',Item_views.agent_material_view_Id,name="materialview"),
    path('agent_material_approved/',Item_views.agent_material_approved,name="agentmaterialapproved"),
    path('agent_data/?approve=true',Item_views.agent_data,name="registerd data"),
    path('agent_data/',Item_views.agent_data,name="registerd data")
]    