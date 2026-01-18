[説明書(日本語)](/README.md) [readme(EN)](/README_EN.md)
# calcore

`calcore` is an esolang that uses date notations for writing code.

## Language specification

* Interpreter-based.
* Commands, numbers, and characters are written using **one of** the supported date notations below:

  * `YYYY/MM/DD` - `YYYY/M/D`
  * `YYYY.MM.DD` - `YYYY.M.D`
  * `YYYY-MM-DD` - `YYYY-M-D`
  * `MM/DD/YYYY` - `M/D/YYYY`
  * `MM.DD.YYYY` - `M.D.YYYY`
  * `MM-DD-YYYY` - `M-D-YYYY`
  * `DD/MM/YYYY` - `D/M/YYYY`
  * `DD.MM.YYYY` - `D.M.YYYY`
  * `DD-MM-YYYY` - `D-M-YYYY`
* Commands are identified by the `MM` and `DD` (or `M` and `D`) parts. **When writing commands, use a date format that includes `YYYY`.**
* Numeric values are represented as the number of days elapsed since **2000-01-01**, which is treated as `0`. (Dates before 2000-01-01 become negative integers.)
* Characters are assigned by inputting the Unicode code point (decimal).
* Variables are managed on a memory tape.
* At the start of the code, write the date-format you will use. From the next line onward, write the program using that initial date-format.
* Use a single ASCII space between a command and its arguments, and between arguments.
* Separate commands (i.e., consecutive commands) with newlines.
* Comments begin with ` #` (a single ASCII space followed by `#`) at the start of the comment.
* Source files use the extension `.clc`.

## Command list
| Instruction (M/D) |Action|Description|Arguments|
|---|---|---|---|
|**January**||||
| 1/1  |Input |Read one line from input, convert each character to its Unicode code point, and store them into variables. For each character stored, advance the pointer by one and write in order. After finishing writing, the pointer returns to its original position.| */1/1 (no arguments)|
| 1/2 |Append to output variable | Append the variable at the pointer to the end of the output variable's string.| */1/2 (no arguments)|
| 1/3 |Output the output-variable | Print the output variable and reset (clear) it.| *1/3 (no arguments)|
| 1/4 |Unconditional jump | Move the execution position to the line number indicated by the value stored in argument1 variable.| */1/4 `<arg1>` |
| 1/5 | Conditional jump (==) | If the value in the variable referenced by argument1 equals the value in the variable referenced by argument2, move execution to the line number stored in the variable referenced by argument3. If false and argument4 is not provided, continue; if argument4 is provided, move execution to the line number stored in the variable referenced by argument4. | */1/5 `<arg1>` `<arg2>` `<arg3>` `<optional:arg4>` |
| 1/6 |Conditional jump (<) | If variable[arg1] < variable[arg2], move execution to the line number stored in variable[arg3]. Otherwise, if argument4 is absent, continue; if argument4 is present, jump to line number stored in variable[arg4].| */1/6 `<arg1>` `<arg2>` `<arg3>` `<optional:arg4>` |
| 1/7 |Conditional jump (>) | If variable[arg1] > variable[arg2], move execution to the line number stored in variable[arg3]. Otherwise, if argument4 is absent, continue; if argument4 is present, jump to line number stored in variable[arg4].| */1/7 `<arg1>` `<arg2>` `<arg3>` `<optional:arg4>` |
| 1/8 | Conditional jump (<=) | If variable[arg1] <= variable[arg2], move execution to the line number stored in variable[arg3]. Otherwise, if argument4 is absent, continue; if argument4 is present, jump to line number stored in variable[arg4]. | */1/8 `<arg1>` `<arg2>` `<arg3>` `<optional:arg4>` |
| 1/9 | Conditional jump (>=) | If variable[arg1] >= variable[arg2], move execution to the line number stored in variable[arg3]. Otherwise, if argument4 is absent, continue; if argument4 is present, jump to line number stored in variable[arg4]. | */1/9 `<arg1>` `<arg2>` `<arg3>` `<optional:arg4>` |
| **February**| |||
| 2/1 | Assign numeric variable | Assign the numeric value given by the argument to the variable at the pointer. | */2/1 `<arg1>` |
| 2/2 | Assign character variable | Assign the character value given by the argument to the variable at the pointer. | */2/2 `<arg1>` |
| 2/3 |Move variable pointer (absolute) | Move the pointer to the variable index specified by the argument.| */2/3 `<arg1>` |
| 2/4 |Move variable pointer (relative) | Move the pointer by the amount specified in the argument (relative move).| */2/4 `<arg1>` |
| 2/5 | Move variable pointer (absolute via variable) | Move the pointer to the index given by the value stored in the variable referenced by the argument.| */2/5 `<arg1>` |
| 2/6 |Copy variable → variable | Assign the variable referenced by the argument into the variable at the pointer. | */2/6 `<arg1>` |
| 2/7 | Copy pointer index → variable | Store the current pointer index into the variable referenced by the argument.| */2/7 `<arg1>` |
| 2/8 | Convert numeric → character | Convert the numeric value at the pointer to the corresponding Unicode code point character.| */2/8 (no arguments) |
| 2/9 | Convert character → numeric | Convert the character at the pointer to its Unicode code point (numeric) and store it. | */2/9 (no arguments) |
| 2/10|Copy variable ← variable | Copy the variable at the pointer into the variable referenced by the argument. | */2/10 `<arg1>`|
| 2/11| Get variable type | Store the type of the variable at the pointer into the variable referenced by the argument: numeric=1, character=2, no value=0.| */2/11 `<arg1>`|
| **March** | |||
| 3/1 |Addition | Store (variable[arg1] + variable[arg2]) into the variable at the pointer.| */3/1 `<arg1>` `<arg2>`|
| 3/2 | Subtraction | Store (variable[arg1] - variable[arg2]) into the variable at the pointer.| */3/2 `<arg1>` `<arg2>`|
| 3/3 |Multiplication | Store (variable[arg1] * variable[arg2]) into the variable at the pointer.| */3/3 `<arg1>` `<arg2>`|
| 3/4 |Division | Store (variable[arg1] / variable[arg2]) into the variable at the pointer.| */3/4 `<arg1>` `<arg2>`|
| 3/5 |Modulo | Store (variable[arg1] % variable[arg2]) into the variable at the pointer.| */3/5 `<arg1>` `<arg2>`|
| **April** | |||
| 4/1 |Initialize output variable | Clear the output variable's contents (no output performed).| */4/1 (no arguments) |
| 4/2 |Current year | Store the current year (from system time) as a numeric value into the variable at the pointer (1000–9999). | */4/2 (no arguments) |
| 4/3 | Current month | Store the current month (1–12) as a numeric value into the variable at the pointer.| */4/3 (no arguments) |
| 4/4 | Current day | Store the current day-of-month (1–31) as a numeric value into the variable at the pointer. | */4/4 (no arguments) |
| 4/5 | Current weekday | Store the current weekday (0: Sunday – 6: Saturday) as a numeric value into the variable at the pointer. | *4/5 (no arguments)|
| 4/6 |Current hour | Store the current hour (0–23) as a numeric value into the variable at the pointer. | */4/6 (no arguments) |
| 4/7 |Current minute | Store the current minute (0–59) as a numeric value into the variable at the pointer. | */4/7 (no arguments) |
| 4/8 |Current second | Store the current second (0–59) as a numeric value into the variable at the pointer. | */4/8 (no arguments) |
| 4/9 | Current millisecond | Store the current millisecond (0–999) as a numeric value into the variable at the pointer. | */4/9 (no arguments) |
| 4/10| Today's date as numeric | Calculate the number of days elapsed since 2000/1/1 to today and store as a numeric value into the variable at the pointer.| *4/10 (no arguments) |

The `YYYY` part of a command may be any digits or a string.
If the program finishes while the output variable still contains data, the output variable's value will be printed.
Jump targets (execution positions) are specified by counting lines starting from the first line (the date-format declaration) as `1` and indicating which line number to jump to.

## BNF

```
<program>::=<dateformat>"\n"|<lines>
<dateformat>::=<yyyy_mm_dd>|<mm_dd_yyyy>|<d_m_yyyy>|<yyyy_m_d>|<m_d_yyyy>|<d_m_yyyy>
<yyyy_mm_dd>::="YYYY"<sep>"MM"<sep>"DD"
<mm_dd_yyyy>::="MM"<sep>"DD"<sep>"YYYY"
<dd_mm_yyyy>::="DD"<sep>"MM"<sep>"YYYY"
<yyyy_m_d>::="YYYY"<sep>"M"<sep>"D"
<m_d_yyyy>::="M"<sep>"D"<sep>"YYYY"
<d_m_yyyy>::="D"<sep>"M"<sep>"YYYY"
<sep>::="/"|"."|"-"

<lines>::=<line>"\n"|<lines>
<line>::=<date>" "|<line>
<date>::=<yyyy><sep><mm><sep><dd>
          |<mm><sep><dd><sep><yyyy>
          |<dd><sep><mm><sep><yyyy>
          |<yyyy><sep><m><sep><d>
          |<m><sep><d><sep><yyyy>
          |<d><sep><m><sep><yyyy>
<yyyy>::=<digit><digit><digit><digit>
<mm>::=<digit><digit>
<dd>::=<digit><digit>
<m>::=<digit2>
<d>::=<digit><digit>

<digit>::= "0" | "1" | "2" | "3" | "4"
        | "5" | "6" | "7" | "8" | "9" ;
<digit2>::="0" | "1" | "2" | "3" | "4"
        | "5" | "6" | "7" | "8" | "9" 
        | "10" | "11" |"12" 
```

## Code example

```
YYYY/M/D
2025/2/1 2000/1/6 # Create variable (numeric) 5 (pointer 0)
2025/2/4 2000/1/2 # Add 1 to the variable pointer
2025/2/1 2000/1/7 # Create variable (numeric) 6 (pointer 1)
2025/2/3 2000/1/1 # Set variable pointer to 0
2025/1/2          # Output (pointer 0)
2025/1/3	       # Output newline
2025/2/4 2000/1/2 # Add 1 to the variable pointer
2025/1/2            # Output (pointer 1)
2025/1/3          # Output newline
2025/2/4 2000/1/2 # Add 1 to the variable pointer
2025/3/1 2000/1/1 2000/1/2 # variable0 + variable1 → variable at pointer (pointer 2)
2025/1/2	       # Output (pointer 2)
2025/1/3          # Output newline
```

Output
```
5
6
11
```
`Hello,world!` is [here](/example/Hello,world.clc).
Other code examples are available in the [`example`](/example/) directory.

## How to run
```bash
npm install pIIton345/calcore 
calcore [option] [filepath]
```

If you run without specifying `[filepath]`, usage information and options will be displayed.
