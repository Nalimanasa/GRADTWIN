import pandas as pd
from django.shortcuts import render
from django.http import HttpResponse ,JsonResponse
from django.shortcuts import render
from django.contrib.auth.models import User
from django.contrib.auth import authenticate,login
from app_rlagent.models import Item ,Material
from django.views.decorators.http import require_http_methods
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view, parser_classes
from rest_framework.parsers import JSONParser
from rest_framework.response import Response
import random
import json
import io



def agent_home(request):
    return HttpResponse("Welcome to GradTwin Project!")

def agent_register(request):
    items=Item.objects.all().values()
    # return JsonResponse(list(items),safe=False)
    return HttpResponse('this is register page')
                        
@csrf_exempt   
@require_http_methods(["POST",'GET'])
def agent_register_api(request):
    if request.method == 'POST':
        data = json.loads(request.body.decode("utf-8"))
        item=Item.objects.create(
            name=data['name'],
            email=data['email'],
            username=data['username'],
            password=data['password'],
            gender=data['gender'],
            phone=data['phone'],
            city=data['city'],
            state=data['state'],
            country=data['country'],
            pincode=data['pincode'],
            address=data['address'],
            role=data.get('role','agent')
        )       
        return JsonResponse({"id": item.id, "name": item.name, 
                             "email": item.email, "username": item.username,
                               "password": item.password, "gender": item.gender,
                               "phone": item.phone,"city": item.city,
                               "state": item.state, "country": item.country,
                                 "address": item.address,"pincode":item.pincode,
                                  'role':item.role })
    elif request.method == 'GET':  # 👈 Add this
        items = list(Item.objects.values())  # get all items as a list of dicts
        return JsonResponse(items, safe=False)
    else:  
        return JsonResponse({"error":"invalid request"},status=400) 


@csrf_exempt
@require_http_methods(["POST"])
def agent_userlogin(request):
    items=Item.objects.all().values()
    if request.method =='POST':
        try:            
            data=json.loads(request.body.decode('utf-8'))
            username=data.get('username')
            password=data.get('password')

            if not username or not password:
                return JsonResponse({"error": "Missing username or password"}, status=400)

            
            user=Item.objects.filter(username=username,password=password).first()
            if user is not None:
                 if user.is_superuser:
                    role = "admin"
                    login(request,user)
                    return JsonResponse({"admin logged successfully"},status=200)
                 
                 elif user.is_staff:
                    role = "staff"
                    login(request,user)
                    return JsonResponse({"message":"staff logged successfully",
                                         "role":role
                                           },status=200)
                 
                 else:
                    role = "normal_user"
                    if user.status != "approved":
                        login(request,user)
                    return JsonResponse({"message":'user registerd succcessfully',
                                         "role":role
                         },status=200)
            elif user is None:
                    return JsonResponse({'success':False,
                                     "message":"user not found"},status=401)
                
        except json.JSONDecodeError:
            return JsonResponse({"error":"invalid json"},status=405)
    return JsonResponse(list(items),safe=False)
    
    
@csrf_exempt
@require_http_methods(['GET','POST'])
def agent_pending(request):
    # Filter first, then call values()
    items = Item.objects.filter(status__iexact='pending').values()
    return JsonResponse(list(items), safe=False)

@csrf_exempt
@require_http_methods(['POST'])
def agent_pending_Id(request,item_id):
   if request.method =='POST':
       try:
           item=Item.objects.get(id=item_id)
           item.status='approved'
           item.save()
           return JsonResponse({"message":'item approved'})
       except Item.DoesNotExist:
           return JsonResponse({"message":'error occured'},status=404)
   else:
       return HttpResponse(alert='invalid request')

@csrf_exempt
@require_http_methods(["GET","POST"])      
def agent_approve(request):
    items=Item.objects.filter(status='approved').values()
    return JsonResponse(list(items),safe=False)


@csrf_exempt
@require_http_methods(["POST","GET"])
def agent_material(request):
    if request.method == 'POST':
        data = json.loads(request.body.decode("utf-8"))
        item=Material.objects.create(
            bauxite=data['bauxite'],
            alumina=data['alumina'],
            moisture=data['moisture'],
            soda=data['soda'],
            temperature=data['temperature'],
        )       
        return JsonResponse({"id": item.id, "bauxite": item.bauxite, 
                             "alumina": item.alumina,
                               "moisture": item.moisture,
                                 "soda": item.soda,
                                   "temperature": item.temperature })
    elif request.method == 'GET':  # 👈 Add this
        items = list(Material.objects.values())  # get all items as a list of dicts
        return JsonResponse(items, safe=False)
    else:  
        return JsonResponse({"error":"invalid request"},status=400) 

@csrf_exempt
@require_http_methods(['GET','POST'])
def agent_material_view(request):
    # Filter first, then call values()
    items = Material.objects.filter(status="pending").values()
    return JsonResponse(list(items), safe=False)


@csrf_exempt
@require_http_methods(['GET', 'POST'])
def agent_material_view_Id(request,item_id):
    try:
        item = Material.objects.get(id=item_id)
    except Material.DoesNotExist:
        return JsonResponse({"error": "Material not found"}, status=404)

    if request.method == 'GET':
        return JsonResponse({
            "id": item.id,
            "bauxite": item.bauxite,
            "alumina": item.alumina,
            "moisture": item.moisture,
            "soda": item.soda,
            "temperature": item.temperature
        })

    if request.method == 'POST':
        # Update status if approved
        item.status = 'approved'
        item.save()
        return JsonResponse({"message": "Item approved successfully"})
    

@csrf_exempt
@require_http_methods(['POST','GET'])
def agent_material_approved(request):
    items=Material.objects.filter(status__iexact='approved').values()
    items.status = 'approved'
    return JsonResponse(list(items),safe=False)
   

# @csrf_exempt
# @require_http_methods(['GET'])
# def agent_data(request):
#     approved = request.GET.get('approved', 'false').lower() == 'true'
    
#     if approved:
#         queryset = Item.objects.filter(status__iexact='approved')
#     else:
#         queryset = Item.objects.all()

#     if not queryset.exists():
#         return HttpResponse("No data available.", content_type="text/plain")

#     df = pd.DataFrame(list(queryset.values()))
#     buffer = io.BytesIO()

#     with pd.ExcelWriter(buffer, engine='openpyxl') as writer:
#         df.to_excel(writer, index=False, sheet_name='Users')

#     buffer.seek(0)
#     response = HttpResponse(
#         buffer.getvalue(),
#         content_type='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
#     )
#     response['Content-Disposition'] = 'attachment; filename="agent_users.xlsx"'
#     return response


@csrf_exempt
@require_http_methods(['GET'])
def agent_data(request):
    approved = request.GET.get('approved', 'false').lower() == 'true'
    role = request.GET.get('role', '').strip().lower()  # get role from URL if provided

    # Base queryset
    queryset = Item.objects.all()

    # Apply approval filter
    if approved:
        queryset = queryset.filter(status__iexact='approved')

    # Apply role filter (optional)
    if role:
        queryset = queryset.filter(role__iexact=role)

    # If no records found
    if not queryset.exists():
        return HttpResponse("No data available.", content_type="text/plain")

    # Convert queryset to DataFrame
    df = pd.DataFrame(list(queryset.values()))

    # Write to Excel
    buffer = io.BytesIO()
    with pd.ExcelWriter(buffer, engine='openpyxl') as writer:
        df.to_excel(writer, index=False, sheet_name='Users')

    buffer.seek(0)
    response = HttpResponse(
        buffer.getvalue(),
        content_type='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    )

    # File name will reflect role automatically
    filename = f"{role or 'all'}_users.xlsx"
    response['Content-Disposition'] = f'attachment; filename="{filename}"'

    return response

def _str_(self):
    return self.username

