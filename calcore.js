var readline = require('readline');
const Jan=require("./January.js")
const Feb=require("./February.js")
const Mar=require("./March.js")
const Apr=require("./April.js")

async function Main(input) {
var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
        });
    function questionAsync(query) {

    // Promise ラップした question
    return new Promise((resolve) => {
        rl.question(query, resolve);
         });
    }

    const inp = input.split("\n")
    var point=0;
    var vari=[]
    var output="";
    var result
    for(var i=0;i<inp.length;i++){
        
        var token=inp[i].split(" ")//クエリとトークン逆や
        var query=[...Array(token.length)].map((_,j)=>(token[j].split("/")))
        //console.log(query)    
        //if(query[0][0]==2020){
            if(query[0][1]==1){
                //1月
                if(query[0][2]==1){
                    var rl_input= await questionAsync('> ');
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
        //console.log(i+1,vari)
    }
    rl.close();
    if(output!=""){
        console.log(output)
    }
   
}       

const fs = require('fs');

// コマンドライン引数からファイル名を取得（3番目の要素に入ってる）
const filePath = process.argv[2];

if (!filePath) {  
console.log("welcome to Calcore ver.Alpha.1")
//console.log("-----")
//Main(require("fs").readFileSync("/dev/stdin", "utf8"));
}else{

try {
  const data = fs.readFileSync(filePath, 'utf8');
  Main(data)
} catch (err) {
  console.error('ファイルの読み込みに失敗:', err.message);
}
}