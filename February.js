function February(que,poi,va,out,line){
var query=que
    var point=poi
    var vari=va
    var output=out
    var i=line

    
        if(query[0][2]==1){
            if(query[1]==undefined){
                console.error("引数がありません")
            }else if(isNaN((new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000)){
                console.error("引数は日付形式以外では指定できません")
            }else{
            vari[point]=[0,(new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000]
            }
        }else if(query[0][2]==2){
            if(query[1]==undefined){
                console.error("引数がありません")
            }else if(isNaN((new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000)){
                console.error("引数は日付形式以外では指定できません")
            }else{
            vari[point]=[1,(new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000]
            }
        }else if(query[0][2]==3){
            if(query[1]==undefined){
                console.error("引数がありません")
            }else if((new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000<0){
                console.error("変数ポインタが0未満になってしまいます")
            }else if(isNaN((new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000)){
                console.error("引数は日付形式以外では指定できません")
            }else{
                point=(new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000
            }
        }else if(query[0][2]==4){
            if(query[1]==undefined){
                console.error("引数がありません")
            }else if(isNaN((new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000)){
                console.error("引数は日付形式以外では指定できません")
            }else if((point+(new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000)<0){
                console.error("変数ポインタが0未満になってしまいます")
            }else{
                point+=(new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000
            }
        }else if(query[0][2]==5){
          //  変数ポインタの移動(ポインタ＝変数)
          if((new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000<0){
                console.error("指定した変数の場所は0未満の場所です")
          }else{
          if(vari[(new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000][1]<0){
                console.error("変数ポインタが0未満になってしまいます")
          }else{
          point=vari[(new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000][1]
            }
        }
        }else if(query[0][2]==6){
            if((new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000<0){
                console.error("指定した変数の場所は0未満の場所です")
            }else{
            vari[point]=vari[(new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000]
            }
        }else if(query[0][2]==7){
            if((new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000<0){
            console.error("指定した変数の場所は0未満の場所です")
            }else{
            vari[(new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000]=[0,point]
            }
        }else if(query[0][2]==8){
            vari[point][0]=1
        }else if(query[0][2]==9){
            vari[point][0]=0
        }else if(query[0][2]==10){
            if((new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000<0){
                console.error("指定した変数の場所は0未満の場所です")
            }else{
            vari[(new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000]=vari[point]
            }
        }

    return [point,vari,output,i]
}
module.exports={
    February
}