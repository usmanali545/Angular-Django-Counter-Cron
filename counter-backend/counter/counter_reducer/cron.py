from counter_reducer.models import Counter

def counter_cron_job():
    counter = Counter.objects.get(pk=1)
    counter.value = 2
    counter.save()