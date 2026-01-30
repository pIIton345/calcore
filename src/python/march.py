from .utils import get_days_from_base, exit_with_error

def march(query, point, vari, output, i):
    sub_cmd = int(query[0][2])
    
    if sub_cmd in [1, 2, 3, 4, 5]:
        if len(query) < 2: exit_with_error(i + 1, "引数1が指定されていません", "Argument 1 is not specified.")
        if len(query) < 3: exit_with_error(i + 1, "引数2が指定されていません", "Argument 2 is not specified.")
        
        addr1 = get_days_from_base(query[1][0], query[1][1], query[1][2])
        addr2 = get_days_from_base(query[2][0], query[2][1], query[2][2])
        
        if addr1 is None: exit_with_error(i + 1, "引数は日付形式以外では指定できません", "Argument must be a valid date.")
        if addr2 is None: exit_with_error(i + 1, "引数は日付形式以外では指定できません", "Argument must be a valid date.")
        
        if addr1 < 0: exit_with_error(i + 1, "引数1が指定した変数の場所は0未満の場所です", "The variable location specified by argument 1 is negative.")
        if addr2 < 0: exit_with_error(i + 1, "引数2が指定した変数の場所は0未満の場所です", "The variable location specified by argument 2 is negative.")
        
        v1 = vari.get(addr1)
        v2 = vari.get(addr2)
        
        if v1 is None: exit_with_error(i + 1, "引数1が指定した変数は値がありません", "Variable specified by argument 1 has no value.")
        if v2 is None: exit_with_error(i + 1, "引数2が指定した変数は値がありません", "Variable specified by argument 2 has no value.")
        
        # JS uses 64-bit floats for all numbers
        if sub_cmd == 1: # 足し算
            vari[point] = [0, float(v1[1] + v2[1])]
        elif sub_cmd == 2: # 引き算
            vari[point] = [0, float(v1[1] - v2[1])]
        elif sub_cmd == 3: # 掛け算
            vari[point] = [0, float(v1[1] * v2[1])]
        elif sub_cmd == 4: # 割り算
            if v2[1] == 0: exit_with_error(i + 1, "0で割ることはできません", "Division by zero.")
            vari[point] = [0, float(v1[1] / v2[1])]
        elif sub_cmd == 5: # 余り
            if v2[1] == 0: exit_with_error(i + 1, "0で割ることはできません", "Division by zero.")
            vari[point] = [0, float(v1[1] % v2[1])]
            
    return [point, vari, output, i]
