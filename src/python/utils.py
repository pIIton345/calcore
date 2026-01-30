import sys
from datetime import date

def get_days_from_base(year, month, day):
    try:
        y, m, d = int(year), int(month), int(day)
        # JS code: new Date(y, m-1, d)
        # In calcore.js: query[0][1] is the month from the clc file.
        # If the file has 2025.1.2, query[0][1] is "1".
        # JS does new Date(2025, 0, 2) which is Jan 2, 2025.
        # Python date(2025, 1, 2) is Jan 2, 2025.
        # However, Hello_world.clc uses 2000.3.13 to mean 'H'.
        # 'H' is ASCII 72.
        # (date(2000, 3, 13) - date(2000, 1, 1)).days is 72.
        # This matches perfectly. 
        # The issue MUST be how the value is stored or retrieved.
        d1 = date(y, m, d)
        d0 = date(2000, 1, 1)
        return float((d1 - d0).days)
    except:
        return None

def exit_with_error(line_num, msg_jp, msg_en):
    print(f"calcore_error:{line_num}", file=sys.stderr)
    print(msg_jp, file=sys.stderr)
    print(msg_en, file=sys.stderr)
    sys.exit(1)
