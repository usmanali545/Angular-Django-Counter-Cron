from rest_framework import serializers 
from tutorials.models import Tutorial
 
 
class CounterReducerSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = Tutorial
        fields = ('id',
                  'value')