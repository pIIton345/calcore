var readline = require('readline');
const Jan=require("./January.js")
const Feb=require("./February.js")
const Mar=require("./March.js")
const Apr=require("./April.js")

async function Main(input,is,isdata) {
    var rl
    var input_date=isdata
    var input_system=is
    var input_i=0;
    if(input_system!="-i"){
        rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
        });
    function questionAsync(query) {

    // Promise ラップした question
    return new Promise((resolve) => {
        rl.question(query, resolve);
         });
    }
    }else{
        //input_date=fs.readFileSync(0, 'utf8').split("\n");
    }

    const inp = input.split(/\r\n|\n|\r/)
    var point=0;
    var vari=[]
    var output="";
    var result;

    var date_sign="";
    var date_row=[];
    var check_text=inp[0].split(" ")[0]
    if(check_text=="YYYY/MM/DD"){
        date_sign="/"
        date_row=[0,1,2]
    }else if(check_text=="YYYY.MM.DD"){
        date_sign="."
        date_row=[0,1,2]
    }else if(check_text=="YYYY-MM-DD"){
        date_sign="-"
        date_row=[0,1,2]
    }else if(check_text=="MM/DD/YYYY"){
        date_sign="/"
        date_row=[2,0,1]
    }else if(check_text=="MM.DD.YYYY"){
        date_sign=".";
        date_row=[2,0,1]
    }else if(check_text=="MM-DD-YYYY"){
        date_sign="-";
        date_row=[2,0,1]
    }else if(check_text=="DD/MM/YYYY"){
        date_sign="/"
        date_row=[2,1,0]
    }else if(check_text=="DD.MM.YYYY"){
        date_sign="."
        date_row=[2,1,0]
    }else if(check_text=="DD-MM-YYYY"){
        date_sign="-"
        date_row=[2,1,0]
    }else{
        console.error("calcore_error:"+0)
        console.error("対応していない日付表記です")
        console.error("Unsupported date format")
        process.exit(1);
    }


    for(var i=1;i<inp.length;i++){
        
        var token=inp[i].split(" ")//クエリとトークン逆や
        var query=[...Array(token.length)].map((_,j)=>(token[j].split(date_sign)))
        for(var j=0;j<query.length;j++){
            query[j]=[query[j][date_row[0]],query[j][date_row[1]],query[j][date_row[2]]]
        }

        //console.log(query)    
        //if(query[0][0]==2020){
            if(query[0][1]==1){
                //1月
                if(query[0][2]==1){
                    if(input_system!="-i"){
                    var rl_input= await questionAsync('> ');
                    }else{
                    var rl_input=input_date[input_i]
                    input_i++;
                    if(rl_input==undefined){
                        rl_input=""
                    }
                    }
                    result=Jan.January_first(query,point,vari,output,i,rl_input);
                    point=result[0]
                    vari=result[1]
                    output=result[2]
                    i=result[3]
                }else{
                result=Jan.January(query,point,vari,output,i);
                    point=result[0]
                    vari=result[1]
                    output=result[2]
                    i=result[3]
                }
                //ここまで
            }else if(query[0][1]==2){
                //2月
                result=Feb.February(query,point,vari,output,i);
                    point=result[0]
                    vari=result[1]
                    output=result[2]
                    i=result[3]
            }else if(query[0][1]==3){
                //3月
                
                result=Mar.March(query,point,vari,output,i);
                    point=result[0]
                    vari=result[1]
                    output=result[2]
                    i=result[3]
            }else if(query[0][1]==4){
                //4月
                
                result=Apr.April(query,point,vari,output,i);
                    point=result[0]
                    vari=result[1]
                    output=result[2]
                    i=result[3]
            }else{

            }
                    
        //}
        //console.log(i,vari,point)

        await new Promise(resolve => setTimeout(resolve, 0));

    }
    if(input_system!="-i"){
    rl.close();
    }
    if(output!=""){
        console.log(output)
    }
   
}       

const fs = require('fs');

// コマンドライン引数からファイル名を取得（3番目の要素に入ってる）

var input_system=""
var is_data=[]
if(process.argv[2]=="-i"){
    input_system="-i"
    var filePath = process.argv[3];
}else{
var filePath = process.argv[2];
}

if (!filePath) {  
console.log("welcome to calcore.Reading the clc file.")
console.log("usage: node calcore.js [option][clc file path] \n")
console.log("option: -i     input from stdin.Ctrl+D to end input.")
console.log("       (none)  Use interactive input mode\n")
console.log("example: calcore program.clc\n")
//console.log("-----")
//Main(require("fs").readFileSync("/dev/stdin", "utf8"));
}else{

try {
  const data = fs.readFileSync(filePath, 'utf8');
  if(input_system=="-i"){
        process.stdin.resume();
        process.stdin.setEncoding('utf8');

        var lines = [];
        var reader = readline.createInterface({
          input: process.stdin,
          output: process.stdout
        });
        reader.on('line', (line) => {
          lines.push(line);
        });
        reader.on('close', () => {
            Main(data,input_system,lines)
        });
  }else{
  Main(data,input_system,[])
  }
} catch (err) {
  console.error('ファイルの読み込みに失敗:', err.message);
}
}

process.on("SIGINT", () => {
  //console.log("\nCtrl+C を受け取りました。プログラムを終了します。");
  process.exit(0);
});