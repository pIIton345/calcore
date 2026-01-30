from .utils import get_days_from_base, exit_with_error

def february(query, point, vari, output, i):
    sub_cmd = int(query[0][2])
    
    if sub_cmd == 1:
        if len(query) < 2: exit_with_error(i + 1, "引数がありません", "No arguments provided.")
        days = get_days_from_base(query[1][0], query[1][1], query[1][2])
        if days is None: exit_with_error(i + 1, "引数は日付形式以外では指定できません", "Argument must be a valid date.")
        vari[point] = [0, float(days)]
        
    elif sub_cmd == 2:
        if len(query) < 2: exit_with_error(i + 1, "引数がありません", "No arguments provided.")
        days = get_days_from_base(query[1][0], query[1][1], query[1][2])
        if days is None: exit_with_error(i + 1, "引数は日付形式以外では指定できません", "Argument must be a valid date.")
        vari[point] = [1, float(days)]
        
    elif sub_cmd == 3:
        if len(query) < 2: exit_with_error(i + 1, "引数がありません", "No arguments provided.")
        days = get_days_from_base(query[1][0], query[1][1], query[1][2])
        if days is None: exit_with_error(i + 1, "引数は日付形式以外では指定できません", "Argument must be a valid date.")
        if days < 0: exit_with_error(i + 1, "変数ポインタが0未満になってしまいます", "Pointer to variable would underflow.")
        point = days
        
    elif sub_cmd == 4:
        if len(query) < 2: exit_with_error(i + 1, "引数がありません", "No arguments provided.")
        days = get_days_from_base(query[1][0], query[1][1], query[1][2])
        if days is None: exit_with_error(i + 1, "引数は日付形式以外では指定できません", "Argument must be a valid date.")
        if (point + days) < 0: exit_with_error(i + 1, "変数ポインタが0未満になってしまいます", "Pointer to variable would underflow.")
        point += days
        
    elif sub_cmd == 5:
        if len(query) < 2: exit_with_error(i + 1, "引数がありません", "No arguments provided.")
        days = get_days_from_base(query[1][0], query[1][1], query[1][2])
        if days is None: exit_with_error(i + 1, "引数は日付形式以外では指定できません", "Argument must be a valid date.")
        if days < 0: exit_with_error(i + 1, "指定した変数の場所は0未満の場所です", "Specified memory address is negative.")
        val = vari.get(days)
        if val is None: exit_with_error(i + 1, "指定した変数は値がありません", "Specified variable is undefined.")
        if val[1] < 0: exit_with_error(i + 1, "変数ポインタが0未満になってしまいます", "Pointer to variable would underflow.")
        point = val[1]
        
    elif sub_cmd == 6:
        if len(query) < 2: exit_with_error(i + 1, "引数がありません", "No arguments provided.")
        days = get_days_from_base(query[1][0], query[1][1], query[1][2])
        if days is None or days < 0: exit_with_error(i + 1, "指定した変数の場所は0未満の場所です", "Specified memory address is negative.")
        vari[point] = vari.get(days)
        
    elif sub_cmd == 7:
        if len(query) < 2: exit_with_error(i + 1, "引数がありません", "No arguments provided.")
        days = get_days_from_base(query[1][0], query[1][1], query[1][2])
        if days is None: exit_with_error(i + 1, "引数は日付形式以外では指定できません", "Argument must be a valid date.")
        if days < 0: exit_with_error(i + 1, "指定した変数の場所は0未満の場所です", "Specified memory address is negative.")
        vari[days] = [0, float(point)]
        
    elif sub_cmd == 8:
        if vari.get(point) is None: exit_with_error(i + 1, "ポインタ先の変数に値がありません。", "Value at pointer is undefined.")
        vari[point][0] = 1
        
    elif sub_cmd == 9:
        if vari.get(point) is None: exit_with_error(i + 1, "ポインタ先の変数に値がありません。", "Value at pointer is undefined.")
        vari[point][0] = 0
        
    elif sub_cmd == 10:
        if len(query) < 2: exit_with_error(i + 1, "引数がありません", "No arguments provided.")
        days = get_days_from_base(query[1][0], query[1][1], query[1][2])
        if days is None: exit_with_error(i + 1, "引数は日付形式以外では指定できません", "Argument must be a valid date.")
        if days < 0: exit_with_error(i + 1, "指定した変数の場所は0未満の場所です", "Specified memory address is negative.")
        vari[days] = vari.get(point)
        
    elif sub_cmd == 11:
        if len(query) < 2: exit_with_error(i + 1, "引数がありません", "No arguments provided.")
        days = get_days_from_base(query[1][0], query[1][1], query[1][2])
        if days is None: exit_with_error(i + 1, "引数は日付形式以外では指定できません", "Argument must be a valid date.")
        if days < 0: exit_with_error(i + 1, "指定した変数の場所は0未満の場所です", "Specified memory address is negative.")
        if vari.get(point) is None:
            vari[days] = [0, 0.0]
        else:
            vari[days] = [0, float(vari[point][0] + 1)]
            
    return [point, vari, output, i]
