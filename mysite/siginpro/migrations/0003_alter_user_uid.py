# Generated by Django 3.2.7 on 2022-01-03 17:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('siginpro', '0002_alter_user_uwx'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='uID',
            field=models.IntegerField(default=0, null=True),
        ),
    ]