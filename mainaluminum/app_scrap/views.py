import pandas as pd
from django.shortcuts import render
from django.http import HttpResponse ,JsonResponse
from django.shortcuts import render
from django.contrib.auth.models import User
from django.contrib.auth import authenticate,login
from app_scrap.models import Scrap ,Material3
from app_rlagent.models import Material
from django.views.decorators.http import require_http_methods
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view, parser_classes
from rest_framework.parsers import JSONParser
from rest_framework.response import Response
import random
import json
import openpyxl
import io


def scrap_home(request):
    return HttpResponse("Welcome to GradTwin Project!")

def scrap_register(request):
    items=Scrap.objects.all().values()
    # return JsonResponse(list(items),safe=False)
    return HttpResponse('this is register page')
                        
@csrf_exempt   
@require_http_methods(["POST",'GET'])
def scrap_register_api(request):
    if request.method == 'POST':
        data = json.loads(request.body.decode("utf-8"))
        item=Scrap.objects.create(
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
            role=data.get('role','scrap')
        )       
        return JsonResponse({"id": item.id, "name": item.name,
                              "email": item.email, "username": item.username,
                                "password": item.password, "gender": item.gender,
                                "phone": item.phone,"city": item.city,"state": item.state,
                                  "country": item.country, "address": item.address,"pincode":item.pincode ,
                                   "role":item.role })
    elif request.method == 'GET':  # 👈 Add this
        items = list(Scrap.objects.values())  # get all items as a list of dicts
        return JsonResponse(items, safe=False)
    else:  
        return JsonResponse({"error":"invalid request"},status=400) 


@csrf_exempt
@require_http_methods(["POST"])
def scrap_userlogin(request):
    items=Scrap.objects.all().values()
    if request.method =='POST':
        try:            
            data=json.loads(request.body.decode('utf-8'))
            username=data.get('username')
            password=data.get('password')

            if not username or not password:
                return JsonResponse({"error": "Missing username or password"}, status=400)

            
            user=Scrap.objects.filter(username=username,password=password).first()
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
def scrap_pending(request):
    items = Scrap.objects.filter(status__iexact='pending').values()
    return JsonResponse(list(items), safe=False)

@csrf_exempt
@require_http_methods(['POST'])
def scrap_pending_Id(request,item_id):
   if request.method =='POST':
       try:
           item=Scrap.objects.get(id=item_id)
           item.status='approved'
           item.save()
           return JsonResponse({"message":'item approved'})
       except Scrap.DoesNotExist:
           return JsonResponse({"message":'error occured'},status=404)
   else:
       return HttpResponse(alert='invalid request')

@csrf_exempt
@require_http_methods(["GET","POST"])      
def scrap_approve(request):
    items=Scrap.objects.filter(status='approved').values()
    return JsonResponse(list(items),safe=False)



@csrf_exempt
@require_http_methods(['POST'])
def scrap_process(request):
    try:
        data = json.loads(request.body)
        item_id = data.get('item_id')  # ✅ Get ID from frontend

        if not item_id:
            return JsonResponse({"error": "item_id is required"}, status=400)

        item = Material3.objects.get(id=item_id)  # ✅ Lookup by ID

        # ✅ Example logic - update status
        item.status = "Processed"
        item.save()

        return JsonResponse({"message": "Material processed successfully"})
    except Material3.DoesNotExist:
        return JsonResponse({"error": "Material not found"}, status=404)
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)

last_result = None 
@csrf_exempt
def scrap_feedback(request):
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



def export_approved_materials_to_excel(request):
    """
    Export only approved materials to Excel (auto-updated with DB inserts)
    """
    # Create Excel workbook
    wb = openpyxl.Workbook()
    ws = wb.active
    ws.title = "approved"

    # Header row
    ws.append(["ID", "Bauxite", "Alumina", "Moisture", "Soda", "Temperature", "Approved On"])

    # Fetch only approved materials (adjust field name if different)
   approved_materials = Material.objects.filter(status="approved").order_by('-id')

    # Add each approved record to Excel
    for m in approved_materials:
        ws.append([
            m.id,
            m.bauxite,
            m.alumina,
            m.moisture,
            m.soda,
            m.temperature,
            getattr(m, "updated_at", ""),  # optional if you track update/approval time
        ])

    # Prepare HTTP response for Excel file
    response = HttpResponse(
        content_type="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    )
    response["Content-Disposition"] = 'attachment; filename="approved_agent_materials.xlsx"'

    wb.save(response)
    return response


@csrf_exempt
@require_http_methods(['GET'])
def scrap_data(request):
    approved = request.GET.get('approved', 'false').lower() == 'true'
    role = request.GET.get('role', '').strip().lower()  # get role from URL if provided

    # Base queryset
    queryset = Scrap.objects.all()

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

