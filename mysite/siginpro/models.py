from django.db import models

# Create your models here.


class User(models.Model):
    uWX = models.CharField('NULL', max_length=50, null=True)
    uID = models.IntegerField(default=0, null=True)
    uName = models.CharField(max_length=50, null=True)
    uDep = models.CharField(max_length=50, null=True)


class TimeTable(models.Model):
    timeStart = models.DateTimeField('开始时间')
    timeEnd = models.DateTimeField('结束时间')
    name = models.CharField('开奖了嘛', max_length=50)

    def __str__(self):
        return self.name
