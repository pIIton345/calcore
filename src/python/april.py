from datetime import datetime
from .utils import get_days_from_base

def april(query, point, vari, output, i):
    sub_cmd = int(query[0][2])
    today = datetime.now()
    
    if sub_cmd == 1:
        if output != "":
            output = ""
    elif sub_cmd == 2:
        vari[point] = [0, float(today.year)]
    elif sub_cmd == 3:
        vari[point] = [0, float(today.month)]
    elif sub_cmd == 4:
        vari[point] = [0, float(today.day)]
    elif sub_cmd == 5:
        js_day = (today.weekday() + 1) % 7
        vari[point] = [0, float(js_day)]
    elif sub_cmd == 6:
        vari[point] = [0, float(today.hour)]
    elif sub_cmd == 7:
        vari[point] = [0, float(today.minute)]
    elif sub_cmd == 8:
        vari[point] = [0, float(today.second)]
    elif sub_cmd == 9:
        vari[point] = [0, float(today.microsecond // 1000)]
    elif sub_cmd == 10:
        days = get_days_from_base(today.year, today.month, today.day)
        vari[point] = [0, days]
        
    return [point, vari, output, i]
