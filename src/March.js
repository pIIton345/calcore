function March(que,poi,va,out,line){
    var query=que
    var point=poi
    var vari=va
    var output=out
    var i=line

    
        if(query[0][2]==1){
            if(query[1]==undefined){
                console.error("calcore_error:"+(i+1))
                console.error("引数1が指定されていません")
                process.exit(1); 
            }else if(isNaN((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)){
                console.error("calcore_error:"+(i+1))
                console.error("引数は日付形式以外では指定できません")
                process.exit(1); 
            }else if(query[2]==undefined){
                console.error("calcore_error:"+(i+1))
                console.error("引数2が指定されていません")
                process.exit(1); 
            }else if(isNaN((new Date(query[2][0],query[2][1]-1,query[2][2])-new Date(2000, 0, 1))/86400000)){
                console.error("calcore_error:"+(i+1))
                console.error("引数は日付形式以外では指定できません")
                process.exit(1); 
            }else{
            if(((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)<0){
                console.error("calcore_error:"+(i+1))
                console.error("指定した1つ目の変数の場所は0未満の場所です")
                process.exit(1); 
            }else if(((new Date(query[2][0],query[2][1]-1,query[2][2])-new Date(2000, 0, 1))/86400000)<0){
                console.error("calcore_error:"+(i+1))
                console.error("指定した2つ目の変数の場所は0未満の場所です")
                process.exit(1); 
            }else if(vari[((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)]==undefined){
                console.error("calcore_error:"+(i+1))
                console.error("引数1が指定した変数は値がありません")
                process.exit(1); 
            }else if(vari[((new Date(query[2][0],query[2][1]-1,query[2][2])-new Date(2000, 0, 1))/86400000)]==undefined){
                console.error("calcore_error:"+(i+1))
                console.error("引数2が指定した変数は値がありません")
                process.exit(1); 
            }
            else{
            vari[point]=[0,vari[((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)][1]+vari[((new Date(query[2][0],query[2][1]-1,query[2][2])-new Date(2000, 0, 1))/86400000)][1]]                    
            }
        }
        }else if(query[0][2]==2){
            if(query[1]==undefined){
                console.error("calcore_error:"+(i+1))
                console.error("引数1が指定されていません")
                process.exit(1); 
            }else if(isNaN((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)){
                console.error("calcore_error:"+(i+1))
                console.error("引数は日付形式以外では指定できません")
                process.exit(1); 
            }else if(query[2]==undefined){
                console.error("calcore_error:"+(i+1))
                console.error("引数2が指定されていません")
                process.exit(1); 
            }else if(isNaN((new Date(query[2][0],query[2][1]-1,query[2][2])-new Date(2000, 0, 1))/86400000)){
                console.error("calcore_error:"+(i+1))
                console.error("引数は日付形式以外では指定できません")
                process.exit(1); 
            }else{
            if(((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)<0){
                console.error("calcore_error:"+(i+1))
                console.error("指定した1つ目の変数の場所は0未満の場所です")
                process.exit(1); 
            }else if(((new Date(query[2][0],query[2][1]-1,query[2][2])-new Date(2000, 0, 1))/86400000)<0){
                console.error("calcore_error:"+(i+1))
                console.error("指定した2つ目の変数の場所は0未満の場所です")
                process.exit(1); 
            }else if(vari[((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)]==undefined){
                console.error("calcore_error:"+(i+1))
                console.error("引数1が指定した変数は値がありません")
                process.exit(1); 
            }else if(vari[((new Date(query[2][0],query[2][1]-1,query[2][2])-new Date(2000, 0, 1))/86400000)]==undefined){
                console.error("calcore_error:"+(i+1))
                console.error("引数2が指定した変数は値がありません")
                process.exit(1); 
            }
            else{
            vari[point]=[0,vari[((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)][1]-vari[((new Date(query[2][0],query[2][1]-1,query[2][2])-new Date(2000, 0, 1))/86400000)][1]]                    
            }
        }
        }else if(query[0][2]==3){
            if(query[1]==undefined){
                console.error("calcore_error:"+(i+1))
                console.error("引数1が指定されていません")
                process.exit(1); 
            }else if(isNaN((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)){
                console.error("calcore_error:"+(i+1))
                console.error("引数は日付形式以外では指定できません")
                process.exit(1); 
            }else if(query[2]==undefined){
                console.error("calcore_error:"+(i+1))
                console.error("引数2が指定されていません")
                process.exit(1); 
            }else if(isNaN((new Date(query[2][0],query[2][1]-1,query[2][2])-new Date(2000, 0, 1))/86400000)){
                console.error("calcore_error:"+(i+1))
                console.error("引数は日付形式以外では指定できません")
                process.exit(1); 
            }else{
            if(((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)<0){
                console.error("calcore_error:"+(i+1))
                console.error("指定した1つ目の変数の場所は0未満の場所です")
                process.exit(1); 
            }else if(((new Date(query[2][0],query[2][1]-1,query[2][2])-new Date(2000, 0, 1))/86400000)<0){
                console.error("calcore_error:"+(i+1))
                console.error("指定した2つ目の変数の場所は0未満の場所です")
                process.exit(1); 
            }else if(vari[((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)]==undefined){
                console.error("calcore_error:"+(i+1))
                console.error("引数1が指定した変数は値がありません")
                process.exit(1); 
            }else if(vari[((new Date(query[2][0],query[2][1]-1,query[2][2])-new Date(2000, 0, 1))/86400000)]==undefined){
                console.error("calcore_error:"+(i+1))
                console.error("引数2が指定した変数は値がありません")
                process.exit(1); 
            }
            else{
            vari[point]=[0,vari[((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)][1]*vari[((new Date(query[2][0],query[2][1]-1,query[2][2])-new Date(2000, 0, 1))/86400000)][1]]                    
            }
        }
        }else if(query[0][2]==4){
            if(query[1]==undefined){
                console.error("calcore_error:"+(i+1))
                console.error("引数1が指定されていません")
                process.exit(1); 
            }else if(isNaN((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)){
                console.error("calcore_error:"+(i+1))
                console.error("引数は日付形式以外では指定できません")
                process.exit(1); 
            }else if(query[2]==undefined){
                console.error("calcore_error:"+(i+1))
                console.error("引数2が指定されていません")
                process.exit(1); 
            }else if(isNaN((new Date(query[2][0],query[2][1]-1,query[2][2])-new Date(2000, 0, 1))/86400000)){
                console.error("calcore_error:"+(i+1))
                console.error("引数は日付形式以外では指定できません")
                process.exit(1); 
            }else{
            if(((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)<0){
                console.error("calcore_error:"+(i+1))
                console.error("指定した1つ目の変数の場所は0未満の場所です")
                process.exit(1); 
            }else if(((new Date(query[2][0],query[2][1]-1,query[2][2])-new Date(2000, 0, 1))/86400000)<0){
                console.error("calcore_error:"+(i+1))
                console.error("指定した2つ目の変数の場所は0未満の場所です")
                process.exit(1); 
            }else if(vari[((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)]==undefined){
                console.error("calcore_error:"+(i+1))
                console.error("引数1が指定した変数は値がありません")
                process.exit(1); 
            }else if(vari[((new Date(query[2][0],query[2][1]-1,query[2][2])-new Date(2000, 0, 1))/86400000)]==undefined){
                console.error("calcore_error:"+(i+1))
                console.error("引数2が指定した変数は値がありません")
                process.exit(1); 
            }
            else{
            vari[point]=[0,vari[((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)][1]/vari[((new Date(query[2][0],query[2][1]-1,query[2][2])-new Date(2000, 0, 1))/86400000)][1]]                    
            }
        }
        }else if(query[0][2]==5){
            if(query[1]==undefined){
                console.error("calcore_error:"+(i+1))
                console.error("引数1が指定されていません")
                process.exit(1); 
            }else if(isNaN((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)){
                console.error("calcore_error:"+(i+1))
                console.error("引数は日付形式以外では指定できません")
                process.exit(1); 
            }else if(query[2]==undefined){
                console.error("calcore_error:"+(i+1))
                console.error("引数2が指定されていません")
                process.exit(1); 
            }else if(isNaN((new Date(query[2][0],query[2][1]-1,query[2][2])-new Date(2000, 0, 1))/86400000)){
                console.error("calcore_error:"+(i+1))
                console.error("引数は日付形式以外では指定できません")
                process.exit(1); 
            }else{
            if(((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)<0){
                console.error("calcore_error:"+(i+1))
                console.error("指定した1つ目の変数の場所は0未満の場所です")
                process.exit(1); 
            }else if(((new Date(query[2][0],query[2][1]-1,query[2][2])-new Date(2000, 0, 1))/86400000)<0){
                console.error("calcore_error:"+(i+1))
                console.error("指定した2つ目の変数の場所は0未満の場所です")
                process.exit(1); 
            }else if(vari[((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)]==undefined){
                console.error("calcore_error:"+(i+1))
                console.error("引数1が指定した変数は値がありません")
                process.exit(1); 
            }else if(vari[((new Date(query[2][0],query[2][1]-1,query[2][2])-new Date(2000, 0, 1))/86400000)]==undefined){
                console.error("calcore_error:"+(i+1))
                console.error("引数2が指定した変数は値がありません")
                process.exit(1); 
            }
            else{
            vari[point]=[0,vari[((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)][1]%vari[((new Date(query[2][0],query[2][1]-1,query[2][2])-new Date(2000, 0, 1))/86400000)][1]]                    
            }
        }
        }

    return [point,vari,output,i]
}
module.exports={
    March
}