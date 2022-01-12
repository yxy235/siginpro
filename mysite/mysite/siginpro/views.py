from django.db import reset_queries
from django.http.response import JsonResponse
from django.shortcuts import render
from django.http import HttpResponse
from .models import User, TimeTable
import siginpro
from django.views.decorators.csrf import csrf_exempt
import time, datetime
import json, random
from django.core import serializers
from django.utils import timezone
# Create your views here.


def index(request):
    return HttpResponse("Hello World. You are the siginpro index. ")


@csrf_exempt
def Login(request):
    res_data = {'isOk': True, 'errorMes': '未知错误'}
    if request.method == 'POST':
        print(request.POST)
        uID = request.POST.get('num'),
        uName = request.POST.get('name'),
        uDep = request.POST.get('dep'),
        uWX = request.POST.get('wxid'),
        uID = list(uID)[0]
        uName = list(uName)[0]
        uDep = list(uDep)[0]
        uWX = list(uWX)[0]
        print(uID, uName, uDep, uWX)
        isuserID = User.objects.filter(uID=uID)
        if isuserID.exists:
            res_data['errorMes'] = '学号已存在'
        else:
            user_now = User.objects.create(
                uID=uID,
                uName=uName,
                uDep=uDep,
                uWX=uWX,
            )
            res_data['isOk'] = True
        print(res_data)
    return JsonResponse(res_data)


@csrf_exempt
def getData(request):
    res_data = {'isOk': False, 'errorMes': '未知错误'}
    if request.method == 'POST':
        uID = request.POST.get('num'),
        uID = list(uID)[0]
        user = User.objects.filter(uID=uID)
        if user.exists():
            user = User.objects.get(uID=uID)
            res_data['name'] = user.uName
            res_data['ID'] = user.uID
            res_data['dep'] = user.uDep
            res_data['wxid'] = user.uWX
            res_data['isOk'] = True
            res_data['errorMes'] = ''
        else:
            res_data['errorMes'] = '该账号不存在'
    return JsonResponse(res_data)


@csrf_exempt
def Luck(request):
    res_data = {'isOk': False, 'errorMes': '未知错误'}
    stage = get_stage()
    if stage:
      if stage.name == '出来啦':
          res_data['id'] = '还没出捏'
          res_data['isOk'] = True
          res_data['errorMes'] = ''
    return JsonResponse(res_data)


@csrf_exempt
def get_stages(request):
    time_now = int(time.time())
    print('time_now', datetime.datetime.now())
    data = {'isOk': True, 'time_now': time_now}
    stages = TimeTable.objects.all().order_by('id')
    stages_data = json.loads(serializers.serialize('json', stages))
    stages_fields = []
    for i in range(len(stages)):
        data_temp = {
            'name': stages[i].name,
            'timeStart': get_time(stages[i].timeStart),
            'timeEnd': get_time(stages[i].timeEnd),
        }
        print('1', stages[i].timeStart)
        print('2', get_time(stages[i].timeStart))
        #print(data_temp)
        stages_fields.append(data_temp)
        stages_data[i]['fields'] = data_temp
    data['stages'] = stages_data
    #print(data['stages'])
    if get_stage():
        data['stage'] = get_stage().id
    else:
        data['stage'] = 0
    return HttpResponse(json.dumps(data).encode(),
                        content_type="application/json")


def get_stage():
    stages = TimeTable.objects.all().order_by('id')
    #print('stages',stages) ##时间表里一共有的时间节点
    time_now = timezone.now()  ##获取当前时间
    #print('time_now',time_now)
    #time_now1=datetime.datetime.now()
    # print(type(time_now))
    for stage in stages:
        # print(stage.timeEnd-time_now)
        #print(stage.timeEnd)
        if stage.timeStart <= time_now <= stage.timeEnd:
            print('s')
            return stage
    return None


def get_time(datetime):
    print(datetime)
    return int(time.mktime(timezone.localtime(datetime).timetuple()))
