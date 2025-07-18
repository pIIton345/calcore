function February(que,poi,va,out,line){
var query=que
    var point=poi
    var vari=va
    var output=out
    var i=line

    
        if(query[0][2]==1){
            if(query[1]==undefined){
                console.error("calcore_error:"+(i+1))
                console.error("引数がありません")
                process.exit(1); 
            }else if(isNaN((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)){
                console.error("calcore_error:"+(i+1))
                console.error("引数は日付形式以外では指定できません")
                process.exit(1); 
            }else{
            vari[point]=[0,(new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000]
            }
        }else if(query[0][2]==2){
            if(query[1]==undefined){
                console.error("calcore_error:"+(i+1))
                console.error("引数がありません")
                process.exit(1); 
            }else if(isNaN((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)){
                console.error("calcore_error:"+(i+1))
                console.error("引数は日付形式以外では指定できません")
                process.exit(1); 
            }else{
            vari[point]=[1,(new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000]
            }
        }else if(query[0][2]==3){
            if(query[1]==undefined){
                console.error("calcore_error:"+(i+1))
                console.error("引数がありません")
                process.exit(1); 
            }else if((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000<0){
                console.error("calcore_error:"+(i+1))
                console.error("変数ポインタが0未満になってしまいます")
                process.exit(1); 
            }else if(isNaN((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)){
                console.error("calcore_error:"+(i+1))
                console.error("引数は日付形式以外では指定できません")
                process.exit(1); 
            }else{
                point=(new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000
            }
        }else if(query[0][2]==4){
            if(query[1]==undefined){
                console.error("calcore_error:"+(i+1))
                console.error("引数がありません")
                process.exit(1); 
            }else if(isNaN((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)){
                console.error("calcore_error:"+(i+1))
                console.error("引数は日付形式以外では指定できません")
                process.exit(1); 
            }else if((point+(new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)<0){
                console.error("calcore_error:"+(i+1))
                console.error("変数ポインタが0未満になってしまいます")
                process.exit(1); 
            }else{
                point+=(new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000
            }
        }else if(query[0][2]==5){
          //  変数ポインタの移動(ポインタ＝変数)
          if(query[1]==undefined){
                console.error("calcore_error:"+(i+1))    
                console.error("引数がありません")
                process.exit(1);             
          }else if(isNaN((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)){
                console.error("calcore_error:"+(i+1))
                console.error("引数は日付形式以外では指定できません")
                process.exit(1); 
          }else if((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000<0){
                console.error("calcore_error:"+(i+1))
                console.error("指定した変数の場所は0未満の場所です")
                process.exit(1); 
          }else{
          if(vari[(new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000]==undefined){
                console.error("calcore_error:"+(i+1))
                console.error("指定した変数は値がありません")
                process.exit(1); 
          }
          else if(vari[(new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000][1]<0){
                console.error("calcore_error:"+(i+1))
                console.error("変数ポインタが0未満になってしまいます")
                process.exit(1); 
          }else{
          point=vari[(new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000][1]
            }
        }
        }else if(query[0][2]==6){
            if(query[1]==undefined){
                console.error("calcore_error:"+(i+1))
                console.error("引数がありません")
                process.exit(1); 
            }else if((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000<0){
                console.error("calcore_error:"+(i+1))
                console.error("指定した変数の場所は0未満の場所です")
                process.exit(1); 
            }else{
            vari[point]=vari[(new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000]
            }
            //引数が日付形式ではなかったら、コピー先が、unifinedになる。
        }else if(query[0][2]==7){
            if(query[1]==undefined){
                console.error("calcore_error:"+(i+1))
                console.error("引数がありません")
                process.exit(1); 
            }else if(isNaN((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)){
                console.error("calcore_error:"+(i+1))
                console.error("引数は日付形式以外では指定できません")
                process.exit(1); 
            }else if((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000<0){
            console.error("calcore_error:"+(i+1))
            console.error("指定した変数の場所は0未満の場所です")
            process.exit(1); 
            }else{
            vari[(new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000]=[0,point]
            }
        }else if(query[0][2]==8){
            if(vari[point]==undefined){
                console.error("calcore_error:"+(i+1))
                console.error("ポインタ先の変数に値がありません。")
                process.exit(1); 
            }else{
                vari[point][0]=1
            }
        }else if(query[0][2]==9){
            if(vari[point]==undefined){
                console.error("calcore_error:"+(i+1))
                console.error("ポインタ先の変数に値がありません。")
                process.exit(1); 
            }else{
                vari[point][0]=0
            }
        }else if(query[0][2]==10){
            if(query[1]==undefined){
                console.error("calcore_error:"+(i+1))
                console.error("引数がありません")
                process.exit(1); 
            }else if((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000<0){
                console.error("calcore_error:"+(i+1))
                console.error("指定した変数の場所は0未満の場所です")
                process.exit(1); 
            }else if(isNaN((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)){
                console.error("calcore_error:"+(i+1))
                console.error("引数は日付形式以外では指定できません")
                process.exit(1)
            }
            else{
            vari[(new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000]=vari[point]
            }
        }else if(query[0][2]==11){
            if(query[1]==undefined){
                console.error("calcore_error:"+(i+1))
                console.error("引数がありません")
                process.exit(1)
            }else if(isNaN((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)){
                console.error("calcore_error:"+(i+1))
                console.error("引数は日付形式以外では指定できません")
                process.exit(1)
            }else if((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000<0){
                console.error("calcore_error:"+(i+1))
                console.error("指定した変数の場所は0未満の場所です")
                process.exit(1)
            }else if(vari[point]==undefined){
                vari[(new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000]=[0,0]
            }else{
                vari[(new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000]=[0,vari[point][0]+1]
            }
        }

    return [point,vari,output,i]
}
module.exports={
    February
}