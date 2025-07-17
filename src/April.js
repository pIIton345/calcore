function April(que,poi,va,out,line){
    var query=que
    var point=poi
    var vari=va
    var output=out
    var i=line


    if(query[0][2]==1){
        if(output!=""){
        console.log(output)
        output="";
        }
        console.log("このバージョンはbeta版です。\n\nジョークを教えてください!")
    }else if(query[0][2]==2){
        var today = new Date();
        vari[point]=[0,today.getFullYear()]
    }else if(query[0][2]==3){
        var today = new Date();
        vari[point]=[0,today.getMonth() + 1]
    }else if(query[0][2]==4){
        var today = new Date();
        vari[point]=[0,today.getDate()]
    }else if(query[0][2]==5){
        var today = new Date();
        vari[point]=[0,today.getDay()]
    }else if(query[0][2]==6){
        var today = new Date();
        vari[point]=[0,today.getHours()]
    }else if(query[0][2]==7){
        var today = new Date();
        vari[point]=[0,today.getMinutes()]
    }else if(query[0][2]==8){
        var today = new Date();
        vari[point]=[0,today.getSeconds()]
    }else if(query[0][2]==9){
        var today = new Date();
        vari[point]=[0,today.getMilliseconds()]
    }else if(query[0][2]==10){
        var today = new Date();
        vari[point]=[0,(new Date(today.getFullYear(),today.getMonth(),today.getDate())-new Date(2000, 0, 1))/86400000]
    }

    return [point,vari,output,i]
}
module.exports={
    April
}