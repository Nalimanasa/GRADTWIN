from django.urls import path
from . import views


urlpatterns = [
    path('', views.del_home, name='home'),
    path('del_register/',views.del_register , name='register'),
    path('del_register_api/',views.del_register_api,name='register_api'),
    path('del_userlogin/',views.del_userlogin, name='userlogin'),
    path('del_pending/',views.del_pending,name='pending'),
    path('del_pending_Id/<int:item_id>/',views.del_pending_Id,name='pending_Id'),
    path('del_approve/',views.del_approve,name='approve'),
    path('del_feedback/',views.del_feedback,name="feedback"),
    path('del_material_view/',views.del_material_view,name='materialview'),
    path('del_material_view_Id/<int:item_id>/',views.del_material_view_Id,name="materialview"),
    path('del_material_approved/',views.del_material_approved,name="agentmaterialapproved"),
    path('del_process/',views.del_process,name="agent_process"),
    path('del_data/',views.deligator_data,name="export_to_excel"),
]    