from django.shortcuts import render
from django.http import HttpResponse ,JsonResponse
from django.shortcuts import render
from django.contrib.auth.models import User
from django.contrib.auth import authenticate,login
from .models import Item 
from django.views.decorators.http import require_http_methods
from django.views.decorators.csrf import csrf_exempt
import json
from rest_framework.decorators import api_view, parser_classes
from rest_framework.parsers import JSONParser
from rest_framework.response import Response
import random


def home(request):
    return HttpResponse("Welcome to GradTwin Project!")

def main_register(request):
    items=Item.objects.all().values()
    # return JsonResponse(list(items),safe=False)
    return HttpResponse('this is register page')
                        
@csrf_exempt    
def main_register_api(request):
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
        )       
        return JsonResponse({"id": item.id, "name": item.name, "email": item.email, "username": item.username, "password": item.password, "gender": item.gender,"phone": item.phone,"city": item.city,"state": item.state, "country": item.country, "address": item.address})
    elif request.method == 'GET':  # 👈 Add this
        items = list(Item.objects.values())  # get all items as a list of dicts
        return JsonResponse(items, safe=False)
    else:  
        return JsonResponse({"error":"invalid request"},status=400) 


@csrf_exempt
@require_http_methods(["POST"])
def main_userlogin(request):
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
    

# @csrf_exempt
# @require_http_methods(["POST"])
# def adminlogin(request):
#     items=User.objects.all().values()
#     if request.method == 'POST':
#         try:
#             data = json.loads(request.body.decode('utf-8'))
#             print("RAW BODY:", request.body)
#             username = data.get('username')
#             password = data.get('password')

#             user = authenticate(request, username=username, password=password)
            
#             if user is not None:
#                 if user.is_staff and user.is_superuser:  # Only admin/staff users
#                     login(request, user)  # Logs in the admin
#                     return JsonResponse({
#                         "success": True,
#                         "message": f"Admin {user.username} logged in successfully"
#                     })
#                 else:
#                     return JsonResponse({
#                         "success": False,
#                         "message": "You are not an admin!"
#                     }, status=403)
#             else:
#                 return JsonResponse({
#                     "success": False,
#                     "message": "Invalid username or password"
#                 }, status=401)

#         except Exception as e:
#             return JsonResponse({"success": False, "error": str(e)}, status=400)
#     else:
#         return JsonResponse({"success": False, "message": "POST request required"}, status=405)
    
@csrf_exempt
@require_http_methods(['GET','POST'])
def main_pending(request):
    # Filter first, then call values()
    items = Item.objects.filter(status='pending').values()
    return JsonResponse(list(items), safe=False)

@csrf_exempt
@require_http_methods(['POST'])
def main_pending_Id(request,item_id):
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
def main_approve(request):
    items=Item.objects.filter(status='approved').values()
    return JsonResponse(list(items),safe=False)


@api_view(['POST'])
@parser_classes([JSONParser])  # ensures only JSON is parsed
def main_feedback(request):
    print(request.body)
    # ✅ DRF automatically parses JSON from request.body
    data = request.data
    print("Received data:", data)
    # Extract values safely
    bauxite = float(data.get("bauxite", 0))
    soda = float(data.get("soda", 0))
    temperature = float(data.get("temperature", 0))
    moisture = float(data.get("moisture", 0))
    alumina = float(data.get("alumina", 0))

    # ✅ Processing logic
    dry_bauxite = bauxite * (1 - moisture / 100)
    alumina_content = dry_bauxite * (alumina / 100)
    aluminum_yield = (alumina_content * 0.8) + (soda * 0.05) - (temperature * 0.01)
    waste = dry_bauxite - (aluminum_yield * 0.5)

    feedback_msg = random.choice([
        "Increase temperature for higher alumina extraction.",
        "Reduce soda usage to minimize red mud generation.",
        "Your alumina recovery rate is within an optimal range.",
        "Try lowering moisture in bauxite for efficiency."
    ])

    return Response({
        "aluminum_yield": round(aluminum_yield, 2),
        "waste": round(waste, 2),
        "feedback": feedback_msg
    })

def _str_(self):
    return self.username

