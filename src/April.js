function April(que,poi,va,out,line){
    let query=que
    let point=poi
    let vari=va
    let output=out
    let i=line

    let today = new Date();

    if(query[0][2]==1){
        if(output!=""){
        output="";
        }
    }else if(query[0][2]==2){
        vari[point]=[0,today.getFullYear()]
    }else if(query[0][2]==3){
        vari[point]=[0,today.getMonth() + 1]
    }else if(query[0][2]==4){
        vari[point]=[0,today.getDate()]
    }else if(query[0][2]==5){
        vari[point]=[0,today.getDay()]
    }else if(query[0][2]==6){
        vari[point]=[0,today.getHours()]
    }else if(query[0][2]==7){
        vari[point]=[0,today.getMinutes()]
    }else if(query[0][2]==8){
        vari[point]=[0,today.getSeconds()]
    }else if(query[0][2]==9){
        vari[point]=[0,today.getMilliseconds()]
    }else if(query[0][2]==10){
        vari[point]=[0,(new Date(today.getFullYear(),today.getMonth(),today.getDate())-new Date(2000, 0, 1))/86400000]
    }

    return [point,vari,output,i]
}
module.exports={
    April
}