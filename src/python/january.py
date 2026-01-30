import sys
from .utils import get_days_from_base, exit_with_error

def january_first(query, point, vari, output, i, rl_input):
    if output != "":
        print(output)
        output = ""
    
    point_before = point
    answer = rl_input
    codes = [ord(c) for c in answer]
    for code in codes:
        vari[point] = [1, float(code)]
        point += 1
    
    point = point_before
    return [point, vari, output, i]

def january(query, point, vari, output, i):
    sub_cmd = int(query[0][2])
    
    if sub_cmd == 2:
        val = vari.get(point)
        if val is not None:
            if val[0] == 0:
                v = val[1]
                if isinstance(v, (int, float)) and float(v).is_integer():
                    output += str(int(v))
                else:
                    output += str(v)
            else:
                if val[1] < 0:
                    exit_with_error(i + 1, "ポインタ先の変数の値は0未満です", "Value at pointer is negative.")
                
                v = val[1]
                if not (isinstance(v, (int, float)) and float(v).is_integer()):
                    exit_with_error(i + 1, "ポインタ先の変数の値は整数ではありません", "Value at pointer is not an integer.")
                output += chr(int(v))
        else:
            exit_with_error(i + 1, "ポインタ先の変数に値はありません", "Value at pointer is undefined.")
            
    elif sub_cmd == 3:
        print(output)
        output = ""
        
    elif sub_cmd == 4:
        if len(query) > 1:
            addr = get_days_from_base(query[1][0], query[1][1], query[1][2])
            if addr is not None:
                val = vari.get(addr)
                if val is not None:
                    jump_to = int(val[1]) - 2
                    if jump_to < -1:
                        exit_with_error(i + 1, "ジャンプ先が1未満の場所です", "Jump address is less than 1.")
                    i = jump_to
            else:
                exit_with_error(i + 1, "引数は日付形式以外は指定できません。", "Argument 1 must be a valid date.")
            
    elif sub_cmd in [5, 6, 7, 8, 9]:
        if len(query) >= 4:
            addr1 = get_days_from_base(query[1][0], query[1][1], query[1][2])
            addr2 = get_days_from_base(query[2][0], query[2][1], query[2][2])
            addr3 = get_days_from_base(query[3][0], query[3][1], query[3][2])
            
            if addr1 is None or addr2 is None or addr3 is None:
                exit_with_error(i + 1, "引数は日付形式以外は指定できません", "Arguments must be valid dates.")

            addr4 = None
            if len(query) > 4:
                addr4 = get_days_from_base(query[4][0], query[4][1], query[4][2])

            v1 = vari.get(addr1)
            v2 = vari.get(addr2)
            
            condition = False
            if sub_cmd == 5: # ==
                if v1 is None and v2 is None: condition = True
                elif v1 is not None and v2 is not None: condition = (v1[1] == v2[1])
            elif sub_cmd == 6: # <
                if v1 is not None and v2 is not None: condition = (v1[1] < v2[1])
            elif sub_cmd == 7: # >
                if v1 is not None and v2 is not None: condition = (v1[1] > v2[1])
            elif sub_cmd == 8: # <=
                if v1 is not None and v2 is not None: condition = (v1[1] <= v2[1])
            elif sub_cmd == 9: # >=
                if v1 is not None and v2 is not None: condition = (v1[1] >= v2[1])

            if condition:
                v3 = vari.get(addr3)
                if v3 is not None:
                    i = int(v3[1]) - 2
            elif addr4 is not None:
                v4 = vari.get(addr4)
                if v4 is not None:
                    i = int(v4[1]) - 2

    return [point, vari, output, i]
