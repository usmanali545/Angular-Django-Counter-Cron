from rest_framework import serializers 
from counter_reducer.models import Counter
 
 
class CounterReducerSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = Counter
        fields = ('id',
                  'value')