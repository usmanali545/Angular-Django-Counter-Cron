from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status
 
from counter_reducer.models import Counter
from counter_reducer.serializers import CounterReducerSerializer
from rest_framework.decorators import api_view


 
@api_view(['GET', 'PUT', 'DELETE'])
def counter_detail(request, pk):
    # find counter by pk (id)
    try:
        counter = Counter.objects.get(pk=pk)
        if request.method == 'GET':
            counter_reducer_serializer = CounterReducerSerializer(counter) 
            return JsonResponse(counter_reducer_serializer.data)
        elif request.method == 'PUT': 
            counter_data = JSONParser().parse(request) 
            counter_reducer_serializer = CounterReducerSerializer(counter, data=counter_data) 
            if counter_reducer_serializer.is_valid(): 
                counter_reducer_serializer.save() 
                return JsonResponse(counter_reducer_serializer.data) 
            return JsonResponse(counter_reducer_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    except Counter.DoesNotExist:
        return JsonResponse({'message': 'The counter does not exist'}, status=status.HTTP_404_NOT_FOUND) 
 
 