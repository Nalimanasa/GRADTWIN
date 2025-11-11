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


def del_home(request):
    return HttpResponse("Welcome to GradTwin Project!")

def del_register(request):
    items=Item.objects.all().values()
    # return JsonResponse(list(items),safe=False)
    return HttpResponse('this is register page')
                        
@csrf_exempt   
@require_http_methods(["POST",'GET'])
def del_register_api(request):
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
            role=data['role','deligator']
        )       
        return JsonResponse({"id": item.id, "name": item.name,
                              "email": item.email, "username": item.username,
                                "password": item.password, "gender": item.gender,
                                "phone": item.phone,"city": item.city,"state": item.state,
                                  "country": item.country, "address": item.address,"pincode":item.pincode,
                                   "role":item.role })
    elif request.method == 'GET':  # 👈 Add this
        items = list(Item.objects.values())  # get all items as a list of dicts
        return JsonResponse(items, safe=False)
    else:  
        return JsonResponse({"error":"invalid request"},status=400) 


@csrf_exempt
@require_http_methods(["POST"])
def del_userlogin(request):
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
def del_pending(request):
    # Filter first, then call values()
    items = Item.objects.filter(status='pending').values()
    return JsonResponse(list(items), safe=False)

@csrf_exempt
@require_http_methods(['POST'])
def del_pending_Id(request,item_id):
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
def del_approve(request):
    items=Item.objects.filter(status='approved').values()
    return JsonResponse(list(items),safe=False)

@csrf_exempt
@require_http_methods(['GET','POST'])
def del_material_view(request):
    # Filter first, then call values()
    items = Material.objects.filter(status="pending").values()
    return JsonResponse(list(items), safe=False)


@csrf_exempt
@require_http_methods(['GET', 'POST'])
def del_material_view_Id(request,item_id):
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
def del_material_approved(request):
    items=Material.objects.filter(status__iexact='approved').values()
    items.status = 'approved'
    return JsonResponse(list(items),safe=False)
   
@csrf_exempt
@require_http_methods(['POST'])
def del_process(request):
    try:
        data = json.loads(request.body)
        item_id = data.get('item_id')  # ✅ Get ID from frontend

        if not item_id:
            return JsonResponse({"error": "item_id is required"}, status=400)

        item = Material.objects.get(id=item_id)  # ✅ Lookup by ID

        # ✅ Example logic - update status
        item.status = "Processed"
        item.save()

        return JsonResponse({"message": "Material processed successfully"})
    except Material.DoesNotExist:
        return JsonResponse({"error": "Material not found"}, status=404)
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)

last_result = None 
@csrf_exempt
def del_feedback(request):
    global last_result
    try:
        if request.method == "POST":
            data = json.loads(request.body.decode("utf-8"))

            # Extract safely
            bauxite = float(data.get("bauxite", 0))
            alumina = float(data.get("alumina", 0))
            moisture = float(data.get("moisture", 0))
            soda = float(data.get("soda", 0))
            temperature = float(data.get("temperature", 0))

            # --- Constants ---
            digestionEff = 0.95
            clarificationloss = 0.01
            precipitationrecovery = 0.92
            calcination = 0.01
            aloh3peral2o3 = (2 * 78.003) / 101.9613

            # --- Adjustments ---
            if soda < 100:
                precipitationrecovery *= 0.75
            elif 100 <= soda <= 400:
                precipitationrecovery *= 1.0
            else:
                precipitationrecovery *= 0.8

            if temperature < 100:
                digestionEff *= 0.85
            elif 100 <= temperature <= 250:
                digestionEff *= 1.00
            else:
                digestionEff *= 0.95

            # --- Calculations ---
            drybauxite = bauxite * (1 - moisture / 100)
            aluminabauxite = drybauxite * (alumina / 100)
            othersolids = drybauxite - aluminabauxite
            aluminadissolved = aluminabauxite * digestionEff
            aluminalosttomud = aluminadissolved * clarificationloss
            aluminaavailable = aluminadissolved - aluminalosttomud
            aloh3produced = aluminaavailable * aloh3peral2o3 * precipitationrecovery
            aluminacalcined = (aloh3produced / aloh3peral2o3) * (1 - calcination)
            redmud = othersolids + aluminalosttomud

            # --- Feedback ---
            if aluminacalcined < aluminabauxite * 0.25:
                feedbackMsg = "Yield very low — raise temperature or reduce moisture."
            elif aluminacalcined < aluminabauxite * 0.35:
                feedbackMsg = "Yield slightly low — check soda concentration."
            elif aluminacalcined < aluminabauxite * 0.45:
                feedbackMsg = "Yield is low, increase digestion efficiency."
            elif redmud > bauxite * 0.6:
                feedbackMsg = "Red mud is high, optimize soda usage."
            else:
                feedbackMsg = "Process is near optimal!"

            result = {
                "aluminum_yield": round(aluminacalcined, 2),
                "waste": round(redmud, 2),
                "feedback": feedbackMsg,
            }

            last_result = result  # save result for GET
            return JsonResponse(result, status=200)

        elif request.method == "GET":
            if last_result:
                return JsonResponse(last_result, status=200)
            else:
                return JsonResponse({"message": "No previous results available."}, status=200)

        else:
            return JsonResponse({"error": "Method not allowed"}, status=405)

    except Exception as e:
        print("Error:", e)
        return JsonResponse({"error": str(e)}, status=400)

@csrf_exempt
@require_http_methods(["GET"])
def deligator_data(request):
    role = request.GET.get("role")
    approved = request.GET.get("approved")

    # Filter data dynamically
    items = Item.objects.all()

    if role:
        items = items.filter(role=role)
    if approved is not None:
        approved_val = approved.lower() == "true"
        items = items.filter(approved=approved_val)

    if not items.exists():
        return HttpResponse("No data found", content_type="text/plain")

    # Convert queryset to dataframe
    df = pd.DataFrame(list(items.values(
        "id", "name", "email", "username", "role", "approved",
        "city", "state", "country", "pincode"
    )))

    # Prepare HTTP response
    response = HttpResponse(content_type='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
    response['Content-Disposition'] = 'attachment; filename="registered_users.xlsx"'

    # Write Excel file
    with pd.ExcelWriter(response, engine='openpyxl') as writer:
        df.to_excel(writer, index=False, sheet_name="Users")

    return response

def _str_(self):
    return self.username

