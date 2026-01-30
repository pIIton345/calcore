import sys
import os
import signal
from .january import january_first, january
from .february import february
from .march import march
from .april import april

interrupted = False

def signal_handler(sig, frame):
    global interrupted
    interrupted = True

signal.signal(signal.SIGINT, signal_handler)

def main():
    global interrupted
    
    args = sys.argv[1:]
    input_system = ""
    file_path = ""
    
    if len(args) > 0 and args[0] == "-i":
        input_system = "-i"
        if len(args) > 1:
            file_path = args[1]
    elif len(args) > 0:
        file_path = args[0]
        
    if not file_path:
        print("welcome to calcore (Python). Reading the clc file.")
        print("usage: python3 -m src.python.calcore [option] [clc file path] \n")
        return

    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            data = f.read()
    except Exception as e:
        print(f"ファイルの読み込みに失敗: {e}", file=sys.stderr)
        sys.exit(1)

    lines_input = []
    if input_system == "-i":
        try:
            for line in sys.stdin:
                lines_input.append(line.rstrip('\n'))
        except EOFError:
            pass

    run_interpreter(data, input_system, lines_input)

def run_interpreter(input_text, is_system, is_data):
    global interrupted
    input_i = 0
    
    inp = input_text.splitlines()
    if not inp:
        return
        
    point = 0.0
    vari = {}
    output = ""
    
    date_sign = ""
    date_row = []
    check_text = inp[0].split(" ")[0]
    
    formats = {
        "YYYY/MM/DD": ("/", [0, 1, 2]),
        "YYYY/M/D": ("/", [0, 1, 2]),
        "YYYY.MM.DD": (".", [0, 1, 2]),
        "YYYY.M.D": (".", [0, 1, 2]),
        "YYYY-MM-DD": ("-", [0, 1, 2]),
        "MM/DD/YYYY": ("/", [2, 0, 1]),
        "M/D/YYYY": ("/", [2, 0, 1]),
        "MM.DD.YYYY": (".", [2, 0, 1]),
        "M.D.YYYY": (".", [2, 0, 1]),
        "MM-DD-YYYY": ("-", [2, 0, 1]),
        "M-D-YYYY": ("-", [2, 0, 1]),
        "DD/MM/YYYY": ("/", [2, 1, 0]),
        "D/M/YYYY": ("/", [2, 1, 0]),
        "DD.MM.YYYY": (".", [2, 1, 0]),
        "D.M.YYYY": (".", [2, 1, 0]),
        "DD-MM-YYYY": ("-", [2, 1, 0]),
        "D-M-YYYY": ("-", [2, 1, 0])
    }
    
    if check_text in formats:
        date_sign, date_row = formats[check_text]
    else:
        print("calcore_error:0", file=sys.stderr)
        sys.exit(1)

    i = 1
    while i < len(inp):
        if interrupted:
            sys.exit(130)
            
        line = inp[i]
        token = line.split(" ")
        query = []
        for t in token:
            parts = t.split(date_sign)
            if len(parts) >= 3:
                query.append([parts[date_row[0]], parts[date_row[1]], parts[date_row[2]]])
            else:
                query.append(parts)

        if not query or len(query[0]) < 3:
            i += 1
            continue

        try:
            month = int(query[0][1])
            day = int(query[0][2])
        except:
            i += 1
            continue
        
        if month == 1:
            if day == 1:
                if is_system != "-i":
                    rl_input = input("> ")
                else:
                    rl_input = is_data[input_i] if input_i < len(is_data) else ""
                    input_i += 1
                res = january_first(query, point, vari, output, i, rl_input)
            else:
                res = january(query, point, vari, output, i)
        elif month == 2:
            res = february(query, point, vari, output, i)
        elif month == 3:
            res = march(query, point, vari, output, i)
        elif month == 4:
            res = april(query, point, vari, output, i)
        else:
            res = [point, vari, output, i]
            
        point, vari, output, i = res
        i += 1

    if output != "":
        print(output)

if __name__ == "__main__":
    main()
