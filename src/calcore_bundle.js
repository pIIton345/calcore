var readline = require('readline');

function January_first(que,poi,va,out,line,input){
    //1/1だけ
     var query=que
    var point=poi
    var vari=va
    var output=out
    var i=line
    
    if(output!=""){
    console.log(output)
    output="";
    }
    var point_before=point
        const answer = input;
        var ans=`${answer}`;
            var codes = [...ans].map(char => char.codePointAt(0));
            for(var k=0;k<codes.length;k++){
                vari[point]=[1,codes[k]]
                point++;
            }
            point=point_before
        
        
        return [point,vari,output,i]

}
function January(que,poi,va,out,line){

    
    var query=que
    var point=poi
    var vari=va
    var output=out
    var i=line
                if(query[0][2]==1){
                    //入力
                    /*
                        if(output!=""){
                        console.log(output)
                        }
                        var point_before=point
                            const answer = await questionAsync('> ');
                            var ans=`${answer}`;
                            if(String(Number(ans))===ans){
                                vari[point]=[0,Number(ans)]                                
                            }else{
                                var codes = [...ans].map(char => char.codePointAt(0));
                                for(var k=0;k<codes.length;k++){
                                    vari[point]=[1,codes[k]]
                                    point++;
                                }
                                point=point_before
                            }
                      */          
                }else if(query[0][2]==2){
                    //出力
                    //console.log(vari[point])
                    if(vari[point]!=undefined){
                    if(vari[point][0]==0){
                        output+=vari[point][1]
                    }else{
                        //Unicode表を見よう！
                        if(vari[point][1]<0){
                        console.error("calcore_error:"+(i+1))
                        console.error("ポインタ先の変数の値は0未満です")
                        console.error("Value at pointer is negative.")
                        process.exit(1); 
                    }else if(Number.isInteger(vari[point][1])==false){
                            console.error("calcore_error:"+(i+1))
                            console.error("ポインタ先の変数の値は整数ではありません")
                            console.error("Value at pointer is not an integer.")
                            process.exit(1); 
                        }
                        else{
                            output+=String.fromCodePoint(vari[point][1])
                        }
                    }
                    }else{
                        console.error("calcore_error:"+(i+1))
                        console.error("ポインタ先の変数に値はありません")
                        console.error("Value at pointer is undefined.")
                        process.exit(1); 
                    }
                }else if(query[0][2]==3){
                    //出力改行
                    console.log(output)
                    output="";
                }else if(query[0][2]==4){
                    //ジャンプ
                    if(query[1]!=undefined){
                        if(isNaN((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)){
                            console.error("calcore_error:"+(i+1))
                            console.error("引数は日付形式以外は指定できません。")
                            console.error("Argument 1 must be a valid date.")
                            process.exit(1); 
                        }else{
                        if((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000<0){
                            console.error("calcore_error:"+(i+1))
                            console.error("指定した変数の場所は0未満の場所です")
                            console.error("Specified memory address is negative.")
                        process.exit(1); 
                        }else{
                        if(vari[(new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000]==undefined){
                            console.error("calcore_error:"+(i+1))
                            console.error("指定した変数に値はありません")
                            console.error("Specified variable is undefined.")
                            process.exit(1); 
                        }else{
                        if((vari[(new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000][1]-2)<-1){
                            console.error("calcore_error:"+(i+1))
                            console.error("ジャンプ先が1未満の場所です")
                            console.error("Jump address is less than 1.")
                            process.exit(1); 
                        }else{
                            i=vari[(new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000][1]-2
                        }
                        }
                    }
                    }
                    }else{
                        console.error("calcore_error:"+(i+1))
                        console.error("引数が指定されていません")
                        console.error("Argument is not specified.")
                        process.exit(1); 
                    }
                }else if(query[0][2]==5){
                    //条件ジャンプ
                    /*変数がundefinedの場合の処理
                        なし==なし
                        数値==なし
                        なし==数値
                        数値==数値
                        の場合
                    */
                   if(query[4]==undefined){
                        query[4]=[NaN,NaN,NaN]
                   }
                    if(query[1]==undefined){
                        console.error("calcore_error:"+(i+1))
                        console.error("引数1が指定されていません")
                        console.error("Argument 1 is not specified.")
                        process.exit(1); 
                    }else if(query[2]==undefined){
                        console.error("calcore_error:"+(i+1))
                        console.error("引数2が指定されていません")
                        console.error("Argument 2 is not specified.")
                        process.exit(1); 
                    }else if(query[3]==undefined){
                        console.error("calcore_error:"+(i+1))
                        console.error("引数3が指定されていません")
                        console.error("Argument 3 is not specified.")
                        process.exit(1); 
                    }else if(isNaN((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)){
                        console.error("calcore_error:"+(i+1))
                        console.error("引数1は日付形式以外は指定できません")
                        console.error("Argument 1 must be a valid date.")
                        process.exit(1); 
                    }else if(isNaN((new Date(query[2][0],query[2][1]-1,query[2][2])-new Date(2000, 0, 1))/86400000)){
                        console.error("calcore_error:"+(i+1))
                        console.error("引数2は日付形式以外は指定できません")
                        console.error("Argument 2 must be a valid date.")
                        process.exit(1); 
                    }else if(isNaN((new Date(query[3][0],query[3][1]-1,query[3][2])-new Date(2000, 0, 1))/86400000)){
                        console.error("calcore_error:"+(i+1))
                        console.error("引数3は日付形式以外は指定できません")
                        console.error("Argument 3 must be a valid date.")
                        process.exit(1); 
                    }else if(((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)<0){
                        console.error("calcore_error:"+(i+1))
                        console.error("引数1が指定した変数の場所は0未満の場所です")
                        console.error("The variable location specified by argument 1 is negative.")
                        process.exit(1); 
                    }else if(((new Date(query[2][0],query[2][1]-1,query[2][2])-new Date(2000, 0, 1))/86400000)<0){
                        console.error("calcore_error:"+(i+1))
                        console.error("引数2が指定した変数の場所は0未満の場所です")
                        console.error("The variable location specified by argument 2 is negative.")
                        process.exit(1); 
                    }else if(((new Date(query[3][0],query[3][1]-1,query[3][2])-new Date(2000, 0, 1))/86400000)<0){
                        console.error("calcore_error:"+(i+1))
                        console.error("引数3が指定した変数の場所は0未満の場所です")
                        console.error("The variable location specified by argument 3 is negative.")
                        process.exit(1); 
                    }else if(!isNaN((new Date(query[4][0],query[4][1]-1,query[4][2])-new Date(2000, 0, 1))/86400000)){
                        //引数4がある場合
                        if(((new Date(query[4][0],query[4][1]-1,query[4][2])-new Date(2000, 0, 1))/86400000)<0){
                            console.error("calcore_error:"+(i+1))
                            console.error("引数4が指定した変数の場所は0未満です。")
                            console.error("The variable location specified by argument 4 is negative.")
                            process.exit(1); 
                        }else{
                            if(vari[((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)]==undefined&&vari[((new Date(query[2][0],query[2][1]-1,query[2][2])-new Date(2000, 0, 1))/86400000)]==undefined){
                                //true
                                if(vari[(new Date(query[3][0],query[3][1]-1,query[3][2])-new Date(2000, 0, 1))/86400000]==undefined){
                                    console.error("calcore_error:"+(i+1))
                                    console.error("引数3が指定した変数に値はありません")
                                    console.error("Variable specified by argument 3 has no value.")
                                    process.exit(1); 
                                }else{
                                    if((vari[(new Date(query[3][0],query[3][1]-1,query[3][2])-new Date(2000, 0, 1))/86400000][1]-2)<-1){
                                    console.error("calcore_error:"+(i+1))
                                    console.error("ジャンプ先が1未満の場所です")
                                    console.error("Jump address is less than 1.")
                                    process.exit(1); 
                                    }else{
                                        i=vari[(new Date(query[3][0],query[3][1]-1,query[3][2])-new Date(2000, 0, 1))/86400000][1]-2
                                    }
                                }
                            }else if(vari[((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)]==undefined||vari[((new Date(query[2][0],query[2][1]-1,query[2][2])-new Date(2000, 0, 1))/86400000)]==undefined){
                                //false
                                if(vari[(new Date(query[4][0],query[4][1]-1,query[4][2])-new Date(2000, 0, 1))/86400000]==undefined){
                                    console.error("calcore_error:"+(i+1))
                                    console.error("引数4が指定した変数に値はありません")
                                    console.error("Variable specified by argument 4 has no value.")
                                    process.exit(1); 
                                }else{
                                    if((vari[(new Date(query[4][0],query[4][1]-1,query[4][2])-new Date(2000, 0, 1))/86400000][1]-2)<-1){
                                    console.error("calcore_error:"+(i+1))
                                    console.error("ジャンプ先が1未満の場所です")
                                    console.error("Jump address is less than 1.")
                                    process.exit(1); 
                                    }else{
                                        i=vari[(new Date(query[4][0],query[4][1]-1,query[4][2])-new Date(2000, 0, 1))/86400000][1]-2
                                    }
                                }
                            }else if(vari[((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)][1]==vari[((new Date(query[2][0],query[2][1]-1,query[2][2])-new Date(2000, 0, 1))/86400000)][1]){
                                //true
                                if(vari[(new Date(query[3][0],query[3][1]-1,query[3][2])-new Date(2000, 0, 1))/86400000]==undefined){
                                    console.error("calcore_error:"+(i+1))
                                    console.error("引数3が指定した変数に値はありません")
                                    console.error("Variable specified by argument 3 has no value.")
                                    process.exit(1); 
                                }else{
                                    if((vari[(new Date(query[3][0],query[3][1]-1,query[3][2])-new Date(2000, 0, 1))/86400000][1]-2)<-1){
                                    console.error("calcore_error:"+(i+1))
                                    console.error("ジャンプ先が1未満の場所です")
                                    console.error("Jump address is less than 1.")
                                    process.exit(1); 
                                    }else{
                                        i=vari[(new Date(query[3][0],query[3][1]-1,query[3][2])-new Date(2000, 0, 1))/86400000][1]-2
                                    }
                                }
                            }else{
                                //false
                                if(vari[(new Date(query[4][0],query[4][1]-1,query[4][2])-new Date(2000, 0, 1))/86400000]==undefined){
                                    console.error("calcore_error:"+(i+1))
                                    console.error("引数4が指定した変数の値はありません")
                                    console.error("Variable specified by argument 4 has no value.")
                                    process.exit(1); 
                                }else{
                                    if((vari[(new Date(query[4][0],query[4][1]-1,query[4][2])-new Date(2000, 0, 1))/86400000][1]-2)<-1){
                                    console.error("calcore_error:"+(i+1))
                                    console.error("ジャンプ先が1未満の場所です")
                                    console.error("Jump address is less than 1.")
                                    process.exit(1); 
                                    }else{
                                        i=vari[(new Date(query[4][0],query[4][1]-1,query[4][2])-new Date(2000, 0, 1))/86400000][1]-2
                                    }
                                }
                            }
                        }
                    }else{
                        //引数4がない場合
                        if(vari[((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)]==undefined&&vari[((new Date(query[2][0],query[2][1]-1,query[2][2])-new Date(2000, 0, 1))/86400000)]==undefined){
                            //true
                            if(vari[(new Date(query[3][0],query[3][1]-1,query[3][2])-new Date(2000, 0, 1))/86400000]==undefined){
                                console.error("calcore_error:"+(i+1))
                                console.error("引数3が指定した変数に値はありません")
                                console.error("Variable specified by argument 3 has no value.")
                                process.exit(1); 
                            }else{
                                if((vari[(new Date(query[3][0],query[3][1]-1,query[3][2])-new Date(2000, 0, 1))/86400000][1]-2)<-1){
                                console.error("calcore_error:"+(i+1))
                                console.error("ジャンプ先が1未満の場所です")
                                console.error("Jump address is less than 1.")
                                process.exit(1); 
                                }else{
                                    i=vari[(new Date(query[3][0],query[3][1]-1,query[3][2])-new Date(2000, 0, 1))/86400000][1]-2
                                }
                            }
                        }else if(vari[((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)]==undefined||vari[((new Date(query[2][0],query[2][1]-1,query[2][2])-new Date(2000, 0, 1))/86400000)]==undefined){
                            //false
                        }
                        else if(vari[((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)][1]==vari[((new Date(query[2][0],query[2][1]-1,query[2][2])-new Date(2000, 0, 1))/86400000)][1]){
                            //true
                            if(vari[(new Date(query[3][0],query[3][1]-1,query[3][2])-new Date(2000, 0, 1))/86400000]==undefined){
                                console.error("calcore_error:"+(i+1))
                                console.error("引数3が指定した変数に値はありません")
                                console.error("Variable specified by argument 3 has no value.")
                                process.exit(1); 
                            }else{
                                if((vari[(new Date(query[3][0],query[3][1]-1,query[3][2])-new Date(2000, 0, 1))/86400000][1]-2)<-1){
                                console.error("calcore_error:"+(i+1))
                                console.error("ジャンプ先が1未満の場所です")
                                console.error("Jump address is less than 1.")
                                process.exit(1); 
                                }else{
                                    i=vari[(new Date(query[3][0],query[3][1]-1,query[3][2])-new Date(2000, 0, 1))/86400000][1]-2
                                }
                            }
                        }
                    }
                }else if(query[0][2]==6){
                    //条件ジャンプ
                    /*変数がundefinedの場合の処理
                        なし<なし
                        数値<なし
                        なし<数値
                        数値<数値
                        の場合
                    */
                   if(query[4]==undefined){
                        query[4]==[NaN,NaN,NaN]
                   }
                    if(query[1]==undefined){
                        console.error("calcore_error:"+(i+1))
                        console.error("引数1が指定されていません")
                        console.error("Argument 1 is not specified.")
                        process.exit(1); 
                    }else if(query[2]==undefined){
                        console.error("calcore_error:"+(i+1))
                        console.error("引数2が指定されていません")
                        console.error("Argument 2 is not specified.")
                        process.exit(1); 
                    }else if(query[3]==undefined){
                        console.error("calcore_error:"+(i+1))
                        console.error("引数3が指定されていません")
                        console.error("Argument 3 is not specified.")
                        process.exit(1); 
                    }else if(isNaN((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)){
                        console.error("calcore_error:"+(i+1))
                        console.error("引数1は日付形式以外は指定できません")
                        console.error("Argument 1 must be a valid date.")
                        process.exit(1); 
                    }else if(isNaN((new Date(query[2][0],query[2][1]-1,query[2][2])-new Date(2000, 0, 1))/86400000)){
                        console.error("calcore_error:"+(i+1))
                        console.error("引数2は日付形式以外は指定できません")
                        console.error("Argument 2 must be a valid date.")
                        process.exit(1); 
                    }else if(isNaN((new Date(query[3][0],query[3][1]-1,query[3][2])-new Date(2000, 0, 1))/86400000)){
                        console.error("calcore_error:"+(i+1))
                        console.error("引数3は日付形式以外は指定できません")
                        console.error("Argument 3 must be a valid date.")
                        process.exit(1); 
                    }else if(((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)<0){
                        console.error("calcore_error:"+(i+1))
                        console.error("引数1が指定した変数の場所は0未満の場所です")
                        console.error("The variable location specified by argument 1 is negative.")
                        process.exit(1); 
                    }else if(((new Date(query[2][0],query[2][1]-1,query[2][2])-new Date(2000, 0, 1))/86400000)<0){
                        console.error("calcore_error:"+(i+1))
                        console.error("引数2が指定した変数の場所は0未満の場所です")
                        console.error("The variable location specified by argument 2 is negative.")
                        process.exit(1); 
                    }else if(((new Date(query[3][0],query[3][1]-1,query[3][2])-new Date(2000, 0, 1))/86400000)<0){
                        console.error("calcore_error:"+(i+1))
                        console.error("引数3が指定した変数の場所は0未満の場所です")
                        console.error("The variable location specified by argument 3 is negative.")
                        process.exit(1); 
                    }else if(!isNaN((new Date(query[4][0],query[4][1]-1,query[4][2])-new Date(2000, 0, 1))/86400000)){
                        //引数4がある場合
                        if(((new Date(query[4][0],query[4][1]-1,query[4][2])-new Date(2000, 0, 1))/86400000)<0){
                            console.error("calcore_error:"+(i+1))
                            console.error("引数4が指定した変数の場所は0未満です。")
                            console.error("The variable location specified by argument 4 is negative.")
                            process.exit(1); 
                        }else{
                            if(vari[((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)]==undefined&&vari[((new Date(query[2][0],query[2][1]-1,query[2][2])-new Date(2000, 0, 1))/86400000)]==undefined){
                                //false
                                if(vari[(new Date(query[4][0],query[4][1]-1,query[4][2])-new Date(2000, 0, 1))/86400000]==undefined){
                                    console.error("calcore_error:"+(i+1))
                                    console.error("引数4が指定した変数に値はありません")
                                    console.error("Variable specified by argument 4 has no value.")
                                    process.exit(1); 
                                }else{
                                    if((vari[(new Date(query[4][0],query[4][1]-1,query[4][2])-new Date(2000, 0, 1))/86400000][1]-2)<-1){
                                        console.error("calcore_error:"+(i+1))
                                        console.error("ジャンプ先が1未満の場所です")
                                        console.error("Jump address is less than 1.")
                                        process.exit(1); 
                                    }else{
                                        i=vari[(new Date(query[4][0],query[4][1]-1,query[4][2])-new Date(2000, 0, 1))/86400000][1]-2
                                    }
                                }
                            }else if(vari[((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)]==undefined||vari[((new Date(query[2][0],query[2][1]-1,query[2][2])-new Date(2000, 0, 1))/86400000)]==undefined){
                                //false
                                if(vari[(new Date(query[4][0],query[4][1]-1,query[4][2])-new Date(2000, 0, 1))/86400000]==undefined){
                                    console.error("calcore_error:"+(i+1))
                                    console.error("引数4が指定した変数に値はありません")
                                    console.error("Variable specified by argument 4 has no value.")
                                    process.exit(1); 
                                }else{
                                    if((vari[(new Date(query[4][0],query[4][1]-1,query[4][2])-new Date(2000, 0, 1))/86400000][1]-2)<-1){
                                    console.error("calcore_error:"+(i+1))
                                    console.error("ジャンプ先が1未満の場所です")
                                    console.error("Jump address is less than 1.")
                                    process.exit(1); 
                                    }else{
                                        i=vari[(new Date(query[4][0],query[4][1]-1,query[4][2])-new Date(2000, 0, 1))/86400000][1]-2
                                    }
                                }
                            }else if(vari[((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)][1]<vari[((new Date(query[2][0],query[2][1]-1,query[2][2])-new Date(2000, 0, 1))/86400000)][1]){
                                //true
                                if(vari[(new Date(query[3][0],query[3][1]-1,query[3][2])-new Date(2000, 0, 1))/86400000]==undefined){
                                    console.error("calcore_error:"+(i+1))
                                    console.error("引数3が指定した変数に値はありません")
                                    console.error("Variable specified by argument 3 has no value.")
                                    process.exit(1); 
                                }else{
                                    if((vari[(new Date(query[3][0],query[3][1]-1,query[3][2])-new Date(2000, 0, 1))/86400000][1]-2)<-1){
                                    console.error("calcore_error:"+(i+1))
                                    console.error("ジャンプ先が1未満の場所です")
                                    console.error("Jump address is less than 1.")
                                    process.exit(1); 
                                    }else{
                                        i=vari[(new Date(query[3][0],query[3][1]-1,query[3][2])-new Date(2000, 0, 1))/86400000][1]-2
                                    }
                                }
                            }else{
                                //false
                                if(vari[(new Date(query[4][0],query[4][1]-1,query[4][2])-new Date(2000, 0, 1))/86400000]==undefined){
                                    console.error("calcore_error:"+(i+1))
                                    console.error("引数4が指定した変数に値はありません")
                                    console.error("Variable specified by argument 4 has no value.")           
                                    process.exit(1); 
                                }else{
                                    if((vari[(new Date(query[4][0],query[4][1]-1,query[4][2])-new Date(2000, 0, 1))/86400000][1]-2)<-1){
                                    console.error("calcore_error:"+(i+1))
                                    console.error("ジャンプ先が1未満の場所です")
                                    console.error("Jump address is less than 1.")
                                    process.exit(1); 
                                    }else{
                                        i=vari[(new Date(query[4][0],query[4][1]-1,query[4][2])-new Date(2000, 0, 1))/86400000][1]-2
                                    }
                                }
                            }
                        }
                    }else{
                        //引数4がない場合
                        if(vari[((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)]==undefined&&vari[((new Date(query[2][0],query[2][1]-1,query[2][2])-new Date(2000, 0, 1))/86400000)]==undefined){
                            //false
                        }else if(vari[((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)]==undefined||vari[((new Date(query[2][0],query[2][1]-1,query[2][2])-new Date(2000, 0, 1))/86400000)]==undefined){
                            //false
                        }
                        else if(vari[((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)][1]<vari[((new Date(query[2][0],query[2][1]-1,query[2][2])-new Date(2000, 0, 1))/86400000)][1]){
                            //true
                            if(vari[(new Date(query[3][0],query[3][1]-1,query[3][2])-new Date(2000, 0, 1))/86400000]==undefined){
                                console.error("calcore_error:"+(i+1))
                                console.error("引数3が指定した変数に値はありません")
                                console.error("Variable specified by argument 3 has no value.")
                                process.exit(1); 
                            }else{
                                if((vari[(new Date(query[3][0],query[3][1]-1,query[3][2])-new Date(2000, 0, 1))/86400000][1]-2)<-1){
                                console.error("calcore_error:"+(i+1))
                                console.error("ジャンプ先が1未満の場所です")
                                console.error("Jump address is less than 1."); 
                                process.exit(1); 
                                }else{
                                    i=vari[(new Date(query[3][0],query[3][1]-1,query[3][2])-new Date(2000, 0, 1))/86400000][1]-2
                                }
                            }
                        }
                    }

                }else if(query[0][2]==7){
                    
                    //条件ジャンプ
                    /*変数がundefinedの場合の処理
                        なし>なし
                        数値>なし
                        なし>数値
                        数値>数値
                        の場合
                    */
                   if(query[4]==undefined){
                        query[4]=[NaN,NaN,NaN]
                   }
                    if(query[1]==undefined){
                        console.error("calcore_error:"+(i+1))
                        console.error("引数1が指定されていません")
                        console.error("Argument 1 is not specified.")
                        process.exit(1); 
                    }else if(query[2]==undefined){
                        console.error("calcore_error:"+(i+1))
                        console.error("引数2が指定されていません")
                        console.error("Argument 2 is not specified.")
                        process.exit(1); 
                    }else if(query[3]==undefined){
                        console.error("calcore_error:"+(i+1))
                        console.error("引数3が指定されていません")
                        console.error("Argument 3 is not specified.")
                        process.exit(1); 
                    }else if(isNaN((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)){
                        console.error("calcore_error:"+(i+1))
                        console.error("引数1は日付形式以外は指定できません")
                        console.error("Argument 1 must be a valid date.")
                        process.exit(1); 
                    }else if(isNaN((new Date(query[2][0],query[2][1]-1,query[2][2])-new Date(2000, 0, 1))/86400000)){
                        console.error("calcore_error:"+(i+1))
                        console.error("引数2は日付形式以外は指定できません")
                        console.error("Argument 2 must be a valid date.")
                        process.exit(1); 
                    }else if(isNaN((new Date(query[3][0],query[3][1]-1,query[3][2])-new Date(2000, 0, 1))/86400000)){
                        console.error("calcore_error:"+(i+1))
                        console.error("引数3は日付形式以外は指定できません")
                        console.error("Argument 3 must be a valid date.")
                        process.exit(1); 
                    }else if(((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)<0){
                        console.error("calcore_error:"+(i+1))
                        console.error("引数1が指定した変数の場所は0未満の場所です")
                        console.error("The variable location specified by argument 1 is negative.")
                        process.exit(1); 
                    }else if(((new Date(query[2][0],query[2][1]-1,query[2][2])-new Date(2000, 0, 1))/86400000)<0){
                        console.error("calcore_error:"+(i+1))
                        console.error("引数2が指定した変数の場所は0未満の場所です")
                        console.error("The variable location specified by argument 2 is negative.")
                        process.exit(1); 
                    }else if(((new Date(query[3][0],query[3][1]-1,query[3][2])-new Date(2000, 0, 1))/86400000)<0){
                        console.error("calcore_error:"+(i+1))
                        console.error("引数3が指定した変数の場所は0未満の場所です")
                        console.error("The variable location specified by argument 3 is negative.")
                        process.exit(1); 
                    }else if(!isNaN((new Date(query[4][0],query[4][1]-1,query[4][2])-new Date(2000, 0, 1))/86400000)){
                        //引数4がある場合
                        if(((new Date(query[4][0],query[4][1]-1,query[4][2])-new Date(2000, 0, 1))/86400000)<0){
                            console.error("calcore_error:"+(i+1))
                            console.error("引数4が指定した変数の場所は0未満です。")
                            console.error("The variable location specified by argument 4 is negative.")
                            process.exit(1); 
                        }else{
                            if(vari[((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)]==undefined&&vari[((new Date(query[2][0],query[2][1]-1,query[2][2])-new Date(2000, 0, 1))/86400000)]==undefined){
                                //false
                                if(vari[(new Date(query[4][0],query[4][1]-1,query[4][2])-new Date(2000, 0, 1))/86400000]==undefined){
                                    console.error("calcore_error:"+(i+1))
                                    console.error("引数4が指定した変数に値はありません")
                                    console.error("Variable specified by argument 4 has no value.")
                                    process.exit(1); 
                                }else{
                                    if((vari[(new Date(query[4][0],query[4][1]-1,query[4][2])-new Date(2000, 0, 1))/86400000][1]-2)<-1){
                                    console.error("calcore_error:"+(i+1))
                                    console.error("ジャンプ先が1未満の場所です")
                                    console.error("Jump address is less than 1.")
                                    process.exit(1); 
                                    }else{
                                        i=vari[(new Date(query[4][0],query[4][1]-1,query[4][2])-new Date(2000, 0, 1))/86400000][1]-2
                                    }
                                }
                            }else if(vari[((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)]==undefined||vari[((new Date(query[2][0],query[2][1]-1,query[2][2])-new Date(2000, 0, 1))/86400000)]==undefined){
                                //false
                                if(vari[(new Date(query[4][0],query[4][1]-1,query[4][2])-new Date(2000, 0, 1))/86400000]==undefined){
                                    console.error("calcore_error:"+(i+1))
                                    console.error("引数4が指定した変数に値はありません")
                                    console.error("Variable specified by argument 4 has no value.")
                                    process.exit(1); 
                                }else{
                                    if((vari[(new Date(query[4][0],query[4][1]-1,query[4][2])-new Date(2000, 0, 1))/86400000][1]-2)<-1){
                                    console.error("calcore_error:"+(i+1))
                                    console.error("ジャンプ先が1未満の場所です")
                                    console.error("Jump address is less than 1.")
                                    process.exit(1); 
                                    }else{
                                        i=vari[(new Date(query[4][0],query[4][1]-1,query[4][2])-new Date(2000, 0, 1))/86400000][1]-2
                                    }
                                }
                            }else if(vari[((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)][1]>vari[((new Date(query[2][0],query[2][1]-1,query[2][2])-new Date(2000, 0, 1))/86400000)][1]){
                                //true
                                if(vari[(new Date(query[3][0],query[3][1]-1,query[3][2])-new Date(2000, 0, 1))/86400000]==undefined){
                                    console.error("calcore_error:"+(i+1))
                                    console.error("引数3が指定した変数に値はありません")
                                    console.error("Variable specified by argument 3 has no value.")
                                    process.exit(1); 
                                }else{
                                    if((vari[(new Date(query[3][0],query[3][1]-1,query[3][2])-new Date(2000, 0, 1))/86400000][1]-2)<-1){
                                    console.error("calcore_error:"+(i+1))
                                    console.error("ジャンプ先が1未満の場所です")
                                    console.error("Jump address is less than 1.")
                                    process.exit(1); 
                                    }else{
                                        i=vari[(new Date(query[3][0],query[3][1]-1,query[3][2])-new Date(2000, 0, 1))/86400000][1]-2
                                    }
                                }
                            }else{
                                //false
                                if(vari[(new Date(query[4][0],query[4][1]-1,query[4][2])-new Date(2000, 0, 1))/86400000]==undefined){
                                    console.error("calcore_error:"+(i+1))
                                    console.error("引数4が指定した変数に値はありません")
                                    console.error("Variable specified by argument 4 has no value.")     
                                    process.exit(1); 
                                }else{
                                    if((vari[(new Date(query[4][0],query[4][1]-1,query[4][2])-new Date(2000, 0, 1))/86400000][1]-2)<-1){
                                    console.error("calcore_error:"+(i+1))
                                    console.error("ジャンプ先が1未満の場所です")
                                    console.error("Jump address is less than 1.")
                                    process.exit(1); 
                                    }else{
                                        i=vari[(new Date(query[4][0],query[4][1]-1,query[4][2])-new Date(2000, 0, 1))/86400000][1]-2
                                    }
                                }
                            }
                        }
                    }else{
                        //引数4がない場合
                        if(vari[((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)]==undefined&&vari[((new Date(query[2][0],query[2][1]-1,query[2][2])-new Date(2000, 0, 1))/86400000)]==undefined){
                            //false
                        }else if(vari[((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)]==undefined||vari[((new Date(query[2][0],query[2][1]-1,query[2][2])-new Date(2000, 0, 1))/86400000)]==undefined){
                            //false
                        }
                        else if(vari[((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)][1]>vari[((new Date(query[2][0],query[2][1]-1,query[2][2])-new Date(2000, 0, 1))/86400000)][1]){
                            //true
                            if(vari[(new Date(query[3][0],query[3][1]-1,query[3][2])-new Date(2000, 0, 1))/86400000]==undefined){
                                console.error("calcore_error:"+(i+1))
                                console.error("引数3が指定した変数に値はありません")
                                console.error("Variable specified by argument 3 has no value.")
                                process.exit(1); 
                            }else{
                                if((vari[(new Date(query[3][0],query[3][1]-1,query[3][2])-new Date(2000, 0, 1))/86400000][1]-2)<-1){
                                console.error("calcore_error:"+(i+1))
                                console.error("ジャンプ先が1未満の場所です")
                                console.error("Jump address is less than 1."); 
                                process.exit(1); 
                                }else{
                                    i=vari[(new Date(query[3][0],query[3][1]-1,query[3][2])-new Date(2000, 0, 1))/86400000][1]-2
                                }
                            }
                        }
                    }
                    
                }else if(query[0][2]==8){
                    //条件ジャンプ
                    /*変数がundefinedの場合の処理
                        なし<=なし
                        数値<=なし
                        なし<=数値
                        数値<=数値
                        の場合
                    */
                   if(query[4]==undefined){
                    query[4]=[NaN,NaN,NaN]
                   }
                    if(query[1]==undefined){
                        console.error("calcore_error:"+(i+1))
                        console.error("引数1が指定されていません")
                        console.error("Argument 1 is not specified.")
                        process.exit(1); 
                    }else if(query[2]==undefined){
                        console.error("calcore_error:"+(i+1))
                        console.error("引数2が指定されていません")
                        console.error("Argument 2 is not specified.")
                        process.exit(1); 
                    }else if(query[3]==undefined){
                        console.error("calcore_error:"+(i+1))
                        console.error("引数3が指定されていません")
                        console.error("Argument 3 is not specified.")
                        process.exit(1); 
                    }else if(isNaN((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)){
                        console.error("calcore_error:"+(i+1))
                        console.error("引数1は日付形式以外は指定できません")
                        console.error("Argument 1 must be a valid date.")
                        process.exit(1); 
                    }else if(isNaN((new Date(query[2][0],query[2][1]-1,query[2][2])-new Date(2000, 0, 1))/86400000)){
                        console.error("calcore_error:"+(i+1))
                        console.error("引数2は日付形式以外は指定できません")
                        console.error("Argument 2 must be a valid date.")
                        process.exit(1); 
                    }else if(isNaN((new Date(query[3][0],query[3][1]-1,query[3][2])-new Date(2000, 0, 1))/86400000)){
                        console.error("calcore_error:"+(i+1))
                        console.error("引数3は日付形式以外は指定できません")
                        console.error("Argument 3 must be a valid date.")
                        process.exit(1); 
                    }else if(((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)<0){
                        console.error("calcore_error:"+(i+1))
                        console.error("引数1が指定した変数の場所は0未満の場所です")
                        console.error("The variable location specified by argument 1 is negative.")
                        process.exit(1); 
                    }else if(((new Date(query[2][0],query[2][1]-1,query[2][2])-new Date(2000, 0, 1))/86400000)<0){
                        console.error("calcore_error:"+(i+1))
                        console.error("引数2が指定した変数の場所は0未満の場所です")
                        console.error("The variable location specified by argument 2 is negative.")
                        process.exit(1); 
                    }else if(((new Date(query[3][0],query[3][1]-1,query[3][2])-new Date(2000, 0, 1))/86400000)<0){
                        console.error("calcore_error:"+(i+1))
                        console.error("引数3が指定した変数の場所は0未満の場所です")
                        console.error("The variable location specified by argument 3 is negative.")
                        process.exit(1); 
                    }else if(!isNaN((new Date(query[4][0],query[4][1]-1,query[4][2])-new Date(2000, 0, 1))/86400000)){
                        //引数4がある場合
                        if(((new Date(query[4][0],query[4][1]-1,query[4][2])-new Date(2000, 0, 1))/86400000)<0){
                            console.error("calcore_error:"+(i+1))
                            console.error("引数4が指定した変数の場所は0未満です。")
                            console.error("The variable location specified by argument 4 is negative.")
                            process.exit(1); 
                        }else{
                            if(vari[((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)]==undefined&&vari[((new Date(query[2][0],query[2][1]-1,query[2][2])-new Date(2000, 0, 1))/86400000)]==undefined){
                                //false
                                if(vari[(new Date(query[4][0],query[4][1]-1,query[4][2])-new Date(2000, 0, 1))/86400000]==undefined){
                                    console.error("calcore_error:"+(i+1))
                                    console.error("引数4が指定した変数に値はありません")
                                    console.error("Variable specified by argument 4 has no value.")
                                    process.exit(1); 
                                }else{
                                    if((vari[(new Date(query[4][0],query[4][1]-1,query[4][2])-new Date(2000, 0, 1))/86400000][1]-2)<-1){
                                    console.error("calcore_error:"+(i+1))
                                    console.error("ジャンプ先が1未満の場所です")
                                    console.error("Jump address is less than 1.")
                                    process.exit(1); 
                                    }else{
                                        i=vari[(new Date(query[4][0],query[4][1]-1,query[4][2])-new Date(2000, 0, 1))/86400000][1]-2
                                    }
                                }
                            }else if(vari[((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)]==undefined||vari[((new Date(query[2][0],query[2][1]-1,query[2][2])-new Date(2000, 0, 1))/86400000)]==undefined){
                                //false
                                if(vari[(new Date(query[4][0],query[4][1]-1,query[4][2])-new Date(2000, 0, 1))/86400000]==undefined){
                                    console.error("calcore_error:"+(i+1))
                                    console.error("引数4が指定した変数に値はありません")
                                    console.error("Variable specified by argument 4 has no value.")
                                    process.exit(1); 
                                }else{
                                    if((vari[(new Date(query[4][0],query[4][1]-1,query[4][2])-new Date(2000, 0, 1))/86400000][1]-2)<-1){
                                    console.error("calcore_error:"+(i+1))
                                    console.error("ジャンプ先が1未満の場所です")
                                    console.error("Jump address is less than 1.")
                                    process.exit(1); 
                                    }else{
                                        i=vari[(new Date(query[4][0],query[4][1]-1,query[4][2])-new Date(2000, 0, 1))/86400000][1]-2
                                    }
                                }
                            }else if(vari[((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)][1]<=vari[((new Date(query[2][0],query[2][1]-1,query[2][2])-new Date(2000, 0, 1))/86400000)][1]){
                                //true
                                if(vari[(new Date(query[3][0],query[3][1]-1,query[3][2])-new Date(2000, 0, 1))/86400000]==undefined){
                                    console.error("calcore_error:"+(i+1))
                                    console.error("引数3が指定した変数に値はありません")
                                    console.error("Variable specified by argument 3 has no value.")
                                    process.exit(1); 
                                }else{
                                    if((vari[(new Date(query[3][0],query[3][1]-1,query[3][2])-new Date(2000, 0, 1))/86400000][1]-2)<-1){
                                    console.error("calcore_error:"+(i+1))
                                    console.error("ジャンプ先が1未満の場所です")
                                    console.error("Jump address is less than 1.")
                                    process.exit(1); 
                                    }else{
                                        i=vari[(new Date(query[3][0],query[3][1]-1,query[3][2])-new Date(2000, 0, 1))/86400000][1]-2
                                    }
                                }
                            }else{
                                //false
                                if(vari[(new Date(query[4][0],query[4][1]-1,query[4][2])-new Date(2000, 0, 1))/86400000]==undefined){
                                    console.error("calcore_error:"+(i+1))
                                    console.error("引数4が指定した変数に値はありません")
                                    console.error("Variable specified by argument 4 has no value.")     
                                    process.exit(1); 
                                }else{
                                    if((vari[(new Date(query[4][0],query[4][1]-1,query[4][2])-new Date(2000, 0, 1))/86400000][1]-2)<-1){
                                    console.error("calcore_error:"+(i+1))
                                    console.error("ジャンプ先が1未満の場所です")
                                    console.error("Jump address is less than 1.")
                                    process.exit(1); 
                                    }else{
                                        i=vari[(new Date(query[4][0],query[4][1]-1,query[4][2])-new Date(2000, 0, 1))/86400000][1]-2
                                    }
                                }
                            }
                        }
                    }else{
                        //引数4がない場合
                        if(vari[((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)]==undefined&&vari[((new Date(query[2][0],query[2][1]-1,query[2][2])-new Date(2000, 0, 1))/86400000)]==undefined){
                            //false
                        }else if(vari[((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)]==undefined||vari[((new Date(query[2][0],query[2][1]-1,query[2][2])-new Date(2000, 0, 1))/86400000)]==undefined){
                            //false
                        }
                        else if(vari[((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)][1]<=vari[((new Date(query[2][0],query[2][1]-1,query[2][2])-new Date(2000, 0, 1))/86400000)][1]){
                            //true
                            if(vari[(new Date(query[3][0],query[3][1]-1,query[3][2])-new Date(2000, 0, 1))/86400000]==undefined){
                                console.error("calcore_error:"+(i+1))
                                console.error("引数3が指定した変数に値はありません")
                                console.error("Variable specified by argument 3 has no value.")
                                process.exit(1); 
                            }else{
                                if((vari[(new Date(query[3][0],query[3][1]-1,query[3][2])-new Date(2000, 0, 1))/86400000][1]-2)<-1){
                                console.error("calcore_error:"+(i+1))
                                console.error("ジャンプ先が1未満の場所です")
                                console.error("Jump address is less than 1."); 
                                process.exit(1); 
                                }else{
                                    i=vari[(new Date(query[3][0],query[3][1]-1,query[3][2])-new Date(2000, 0, 1))/86400000][1]-2
                                }
                            }
                        }
                    }

                }else if(query[0][2]==9){
                                        //条件ジャンプ
                    /*変数がundefinedの場合の処理
                        なし>=なし
                        数値>=なし
                        なし>=数値
                        数値>=数値
                        の場合
                    */
                   if(query[4]==undefined){
                    query[4]=[NaN,NaN,NaN]
                   }
                    if(query[1]==undefined){
                        console.error("calcore_error:"+(i+1))
                        console.error("引数1が指定されていません")
                        console.error("Argument 1 is not specified.")
                        process.exit(1); 
                    }else if(query[2]==undefined){
                        console.error("calcore_error:"+(i+1))
                        console.error("引数2が指定されていません")
                        console.error("Argument 2 is not specified.")
                        process.exit(1); 
                    }else if(query[3]==undefined){
                        console.error("calcore_error:"+(i+1))
                        console.error("引数3が指定されていません")
                        console.error("Argument 3 is not specified.")
                        process.exit(1); 
                    }else if(isNaN((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)){
                        console.error("calcore_error:"+(i+1))
                        console.error("引数1は日付形式以外は指定できません")
                        console.error("Argument 1 must be a valid date.")
                        process.exit(1); 
                    }else if(isNaN((new Date(query[2][0],query[2][1]-1,query[2][2])-new Date(2000, 0, 1))/86400000)){
                        console.error("calcore_error:"+(i+1))
                        console.error("引数2は日付形式以外は指定できません")
                        console.error("Argument 2 must be a valid date.")
                        process.exit(1); 
                    }else if(isNaN((new Date(query[3][0],query[3][1]-1,query[3][2])-new Date(2000, 0, 1))/86400000)){
                        console.error("calcore_error:"+(i+1))
                        console.error("引数3は日付形式以外は指定できません")
                        console.error("Argument 3 must be a valid date.")
                        process.exit(1); 
                    }else if(((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)<0){
                        console.error("calcore_error:"+(i+1))
                        console.error("引数1が指定した変数の場所は0未満の場所です")
                        console.error("The variable location specified by argument 1 is negative.")
                        process.exit(1); 
                    }else if(((new Date(query[2][0],query[2][1]-1,query[2][2])-new Date(2000, 0, 1))/86400000)<0){
                        console.error("calcore_error:"+(i+1))
                        console.error("引数2が指定した変数の場所は0未満の場所です")
                        console.error("The variable location specified by argument 2 is negative.")
                        process.exit(1); 
                    }else if(((new Date(query[3][0],query[3][1]-1,query[3][2])-new Date(2000, 0, 1))/86400000)<0){
                        console.error("calcore_error:"+(i+1))
                        console.error("引数3が指定した変数の場所は0未満の場所です")
                        console.error("The variable location specified by argument 3 is negative.")
                        process.exit(1); 
                    }else if(!isNaN((new Date(query[4][0],query[4][1]-1,query[4][2])-new Date(2000, 0, 1))/86400000)){
                        //引数4がある場合
                        if(((new Date(query[4][0],query[4][1]-1,query[4][2])-new Date(2000, 0, 1))/86400000)<0){
                            console.error("calcore_error:"+(i+1))
                            console.error("引数4が指定した変数の場所は0未満です。")
                            console.error("The variable location specified by argument 4 is negative.")
                            process.exit(1); 
                        }else{
                            if(vari[((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)]==undefined&&vari[((new Date(query[2][0],query[2][1]-1,query[2][2])-new Date(2000, 0, 1))/86400000)]==undefined){
                                //false
                                if(vari[(new Date(query[4][0],query[4][1]-1,query[4][2])-new Date(2000, 0, 1))/86400000]==undefined){
                                    console.error("calcore_error:"+(i+1))
                                    console.error("引数4が指定した変数に値はありません")
                                    console.error("Variable specified by argument 4 has no value.")
                                    process.exit(1); 
                                }else{
                                    if((vari[(new Date(query[4][0],query[4][1]-1,query[4][2])-new Date(2000, 0, 1))/86400000][1]-2)<-1){
                                    console.error("calcore_error:"+(i+1))
                                    console.error("ジャンプ先が1未満の場所です")
                                    console.error("Jump address is less than 1.")
                                    process.exit(1); 
                                    }else{
                                        i=vari[(new Date(query[4][0],query[4][1]-1,query[4][2])-new Date(2000, 0, 1))/86400000][1]-2
                                    }
                                }
                            }else if(vari[((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)]==undefined||vari[((new Date(query[2][0],query[2][1]-1,query[2][2])-new Date(2000, 0, 1))/86400000)]==undefined){
                                //false
                                if(vari[(new Date(query[4][0],query[4][1]-1,query[4][2])-new Date(2000, 0, 1))/86400000]==undefined){
                                    console.error("calcore_error:"+(i+1))
                                    console.error("引数4が指定した変数に値はありません")
                                    console.error("Variable specified by argument 4 has no value.")
                                    process.exit(1); 
                                }else{
                                    if((vari[(new Date(query[4][0],query[4][1]-1,query[4][2])-new Date(2000, 0, 1))/86400000][1]-2)<-1){
                                    console.error("calcore_error:"+(i+1))
                                    console.error("ジャンプ先が1未満の場所です")
                                    console.error("Jump address is less than 1.")
                                    process.exit(1); 
                                    }else{
                                        i=vari[(new Date(query[4][0],query[4][1]-1,query[4][2])-new Date(2000, 0, 1))/86400000][1]-2
                                    }
                                }
                            }else if(vari[((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)][1]>=vari[((new Date(query[2][0],query[2][1]-1,query[2][2])-new Date(2000, 0, 1))/86400000)][1]){
                                //true
                                if(vari[(new Date(query[3][0],query[3][1]-1,query[3][2])-new Date(2000, 0, 1))/86400000]==undefined){
                                    console.error("calcore_error:"+(i+1))
                                    console.error("引数3が指定した変数に値はありません")
                                    console.error("Variable specified by argument 3 has no value.")
                                    process.exit(1); 
                                }else{
                                    if((vari[(new Date(query[3][0],query[3][1]-1,query[3][2])-new Date(2000, 0, 1))/86400000][1]-2)<-1){
                                    console.error("calcore_error:"+(i+1))
                                    console.error("ジャンプ先が1未満の場所です")
                                    console.error("Jump address is less than 1.")
                                    process.exit(1); 
                                    }else{
                                        i=vari[(new Date(query[3][0],query[3][1]-1,query[3][2])-new Date(2000, 0, 1))/86400000][1]-2
                                    }
                                }
                            }else{
                                //false
                                if(vari[(new Date(query[4][0],query[4][1]-1,query[4][2])-new Date(2000, 0, 1))/86400000]==undefined){
                                    console.error("calcore_error:"+(i+1))
                                    console.error("引数4が指定した変数に値はありません")
                                    console.error("Variable specified by argument 4 has no value.") 
                                    process.exit(1); 
                                }else{
                                    if((vari[(new Date(query[4][0],query[4][1]-1,query[4][2])-new Date(2000, 0, 1))/86400000][1]-2)<-1){
                                    console.error("calcore_error:"+(i+1))
                                    console.error("ジャンプ先が1未満の場所です")
                                    console.error("Jump address is less than 1.")
                                    process.exit(1); 
                                    }else{
                                        i=vari[(new Date(query[4][0],query[4][1]-1,query[4][2])-new Date(2000, 0, 1))/86400000][1]-2
                                    }
                                }
                            }
                        }
                    }else{
                        //引数4がない場合
                        if(vari[((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)]==undefined&&vari[((new Date(query[2][0],query[2][1]-1,query[2][2])-new Date(2000, 0, 1))/86400000)]==undefined){
                            //false
                        }else if(vari[((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)]==undefined||vari[((new Date(query[2][0],query[2][1]-1,query[2][2])-new Date(2000, 0, 1))/86400000)]==undefined){
                            //false
                        }
                        else if(vari[((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)][1]>=vari[((new Date(query[2][0],query[2][1]-1,query[2][2])-new Date(2000, 0, 1))/86400000)][1]){
                            //true
                            if(vari[(new Date(query[3][0],query[3][1]-1,query[3][2])-new Date(2000, 0, 1))/86400000]==undefined){
                                console.error("calcore_error:"+(i+1))
                                console.error("引数3が指定した変数に値はありません")
                                console.error("Variable specified by argument 3 has no value.")
                                process.exit(1); 
                            }else{
                                if((vari[(new Date(query[3][0],query[3][1]-1,query[3][2])-new Date(2000, 0, 1))/86400000][1]-2)<-1){
                                console.error("calcore_error:"+(i+1))
                                console.error("ジャンプ先が1未満の場所です")
                                console.error("Jump address is less than 1."); 
                                process.exit(1); 
                                }else{
                                    i=vari[(new Date(query[3][0],query[3][1]-1,query[3][2])-new Date(2000, 0, 1))/86400000][1]-2
                                }
                            }
                        }
                    }
                    
                }
                return [point,vari,output,i]
            }
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
                console.error("No arguments provided.")
                process.exit(1); 
            }else if(isNaN((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)){
                console.error("calcore_error:"+(i+1))
                console.error("引数は日付形式以外では指定できません")
                console.error("Argument must be a valid date.")
                process.exit(1); 
            }else{
            vari[point]=[0,(new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000]
            }
        }else if(query[0][2]==2){
            if(query[1]==undefined){
                console.error("calcore_error:"+(i+1))
                console.error("引数がありません")
                console.error("No arguments provided.")
                process.exit(1); 
            }else if(isNaN((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)){
                console.error("calcore_error:"+(i+1))
                console.error("引数は日付形式以外では指定できません")
                console.error("Argument must be a valid date.")
                process.exit(1); 
            }else{
            vari[point]=[1,(new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000]
            }
        }else if(query[0][2]==3){
            if(query[1]==undefined){
                console.error("calcore_error:"+(i+1))
                console.error("引数がありません")
                console.error("No arguments provided.")
                process.exit(1); 
            }else if((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000<0){
                console.error("calcore_error:"+(i+1))
                console.error("変数ポインタが0未満になってしまいます")
                console.error("Pointer to variable would underflow.")
                process.exit(1); 
            }else if(isNaN((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)){
                console.error("calcore_error:"+(i+1))
                console.error("引数は日付形式以外では指定できません")
                console.error("Argument must be a valid date.")
                process.exit(1); 
            }else{
                point=(new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000
            }
        }else if(query[0][2]==4){
            if(query[1]==undefined){
                console.error("calcore_error:"+(i+1))
                console.error("引数がありません")
                console.error("No arguments provided.")
                process.exit(1); 
            }else if(isNaN((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)){
                console.error("calcore_error:"+(i+1))
                console.error("引数は日付形式以外では指定できません")
                console.error("Argument must be a valid date.")
                process.exit(1); 
            }else if((point+(new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)<0){
                console.error("calcore_error:"+(i+1))
                console.error("変数ポインタが0未満になってしまいます")
                console.error("Pointer to variable would underflow.")
                process.exit(1); 
            }else{
                point+=(new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000
            }
        }else if(query[0][2]==5){
          //  変数ポインタの移動(ポインタ＝変数)
          if(query[1]==undefined){
                console.error("calcore_error:"+(i+1))    
                console.error("引数がありません")
                console.error("No arguments provided.")
                process.exit(1);
          }else if(isNaN((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)){
                console.error("calcore_error:"+(i+1))
                console.error("引数は日付形式以外では指定できません")
                console.error("Argument must be a valid date.")
                process.exit(1); 
          }else if((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000<0){
                console.error("calcore_error:"+(i+1))
                console.error("指定した変数の場所は0未満の場所です")
                console.error("Specified memory address is negative.")
                process.exit(1); 
          }else{
          if(vari[(new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000]==undefined){
                console.error("calcore_error:"+(i+1))
                console.error("指定した変数は値がありません")
                console.error("Specified variable is undefined.")
                process.exit(1); 
          }
          else if(vari[(new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000][1]<0){
                console.error("calcore_error:"+(i+1))
                console.error("変数ポインタが0未満になってしまいます")
                console.error("Pointer to variable would underflow.")
                process.exit(1); 
          }else{
          point=vari[(new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000][1]
            }
        }
        }else if(query[0][2]==6){
            if(query[1]==undefined){
                console.error("calcore_error:"+(i+1))
                console.error("引数がありません")
                console.error("No arguments provided.")
                process.exit(1); 
            }else if((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000<0){
                console.error("calcore_error:"+(i+1))
                console.error("指定した変数の場所は0未満の場所です")
                console.error("Specified memory address is negative.")
                process.exit(1); 
            }else{
            vari[point]=vari[(new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000]
            }
            //引数が日付形式ではなかったら、コピー先が、unifinedになる。
        }else if(query[0][2]==7){
            if(query[1]==undefined){
                console.error("calcore_error:"+(i+1))
                console.error("引数がありません")
                console.error("No arguments provided.")
                process.exit(1); 
            }else if(isNaN((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)){
                console.error("calcore_error:"+(i+1))
                console.error("引数は日付形式以外では指定できません")
                console.error("Argument must be a valid date.")
                process.exit(1); 
            }else if((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000<0){
            console.error("calcore_error:"+(i+1))
            console.error("指定した変数の場所は0未満の場所です")
            console.error("Specified memory address is negative.")
            process.exit(1); 
            }else{
            vari[(new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000]=[0,point]
            }
        }else if(query[0][2]==8){
            if(vari[point]==undefined){
                console.error("calcore_error:"+(i+1))
                console.error("ポインタ先の変数に値がありません。")
                console.error("Value at pointer is undefined.")
                process.exit(1); 
            }else{
                vari[point][0]=1
            }
        }else if(query[0][2]==9){
            if(vari[point]==undefined){
                console.error("calcore_error:"+(i+1))
                console.error("ポインタ先の変数に値がありません。")
                console.error("Value at pointer is undefined.")
                process.exit(1); 
            }else{
                vari[point][0]=0
            }
        }else if(query[0][2]==10){
            if(query[1]==undefined){
                console.error("calcore_error:"+(i+1))
                console.error("引数がありません")
                console.error("No arguments provided.")
                process.exit(1); 
            }else if((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000<0){
                console.error("calcore_error:"+(i+1))
                console.error("指定した変数の場所は0未満の場所です")
                console.error("Specified memory address is negative.")
                process.exit(1); 
            }else if(isNaN((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)){
                console.error("calcore_error:"+(i+1))
                console.error("引数は日付形式以外では指定できません")
                console.error("Argument must be a valid date.")
                process.exit(1)
            }
            else{
            vari[(new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000]=vari[point]
            }
        }else if(query[0][2]==11){
            if(query[1]==undefined){
                console.error("calcore_error:"+(i+1))
                console.error("引数がありません")
                console.error("No arguments provided.")
                process.exit(1)
            }else if(isNaN((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)){
                console.error("calcore_error:"+(i+1))
                console.error("引数は日付形式以外では指定できません")
                console.error("Argument must be a valid date.")
                process.exit(1)
            }else if((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000<0){
                console.error("calcore_error:"+(i+1))
                console.error("指定した変数の場所は0未満の場所です")
                console.error("Specified memory address is negative.")
                process.exit(1)
            }else if(vari[point]==undefined){
                vari[(new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000]=[0,0]
            }else{
                vari[(new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000]=[0,vari[point][0]+1]
            }
        }

    return [point,vari,output,i]
}

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
                console.error("Argument 1 is not specified.")
                process.exit(1); 
            }else if(isNaN((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)){
                console.error("calcore_error:"+(i+1))
                console.error("引数は日付形式以外では指定できません")
                console.error("Argument must be a valid date.")
                process.exit(1); 
            }else if(query[2]==undefined){
                console.error("calcore_error:"+(i+1))
                console.error("引数2が指定されていません")
                console.error("Argument 2 is not specified.")
                process.exit(1); 
            }else if(isNaN((new Date(query[2][0],query[2][1]-1,query[2][2])-new Date(2000, 0, 1))/86400000)){
                console.error("calcore_error:"+(i+1))
                console.error("引数は日付形式以外では指定できません")
                console.error("Argument must be a valid date.")
                process.exit(1); 
            }else{
            if(((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)<0){
                console.error("calcore_error:"+(i+1))
                console.error("引数1が指定した変数の場所は0未満の場所です")
                console.error("The variable location specified by argument 1 is negative.")
                process.exit(1); 
            }else if(((new Date(query[2][0],query[2][1]-1,query[2][2])-new Date(2000, 0, 1))/86400000)<0){
                console.error("calcore_error:"+(i+1))
                console.error("引数2が指定した変数の場所は0未満の場所です")
                console.error("The variable location specified by argument 2 is negative.")
                process.exit(1); 
            }else if(vari[((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)]==undefined){
                console.error("calcore_error:"+(i+1))
                console.error("引数1が指定した変数は値がありません")
                console.error("Variable specified by argument 1 has no value.")
                process.exit(1); 
            }else if(vari[((new Date(query[2][0],query[2][1]-1,query[2][2])-new Date(2000, 0, 1))/86400000)]==undefined){
                console.error("calcore_error:"+(i+1))
                console.error("引数2が指定した変数は値がありません")
                console.error("Variable specified by argument 2 has no value.")
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
                console.error("Argument 1 is not specified.")
                process.exit(1); 
            }else if(isNaN((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)){
                console.error("calcore_error:"+(i+1))
                console.error("引数は日付形式以外では指定できません")
                console.error("Argument must be a valid date.")
                process.exit(1); 
            }else if(query[2]==undefined){
                console.error("calcore_error:"+(i+1))
                console.error("引数2が指定されていません")
                console.error("Argument 2 is not specified.")
                process.exit(1); 
            }else if(isNaN((new Date(query[2][0],query[2][1]-1,query[2][2])-new Date(2000, 0, 1))/86400000)){
                console.error("calcore_error:"+(i+1))
                console.error("引数は日付形式以外では指定できません")
                console.error("Argument must be a valid date.")
                process.exit(1); 
            }else{
            if(((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)<0){
                console.error("calcore_error:"+(i+1))
                console.error("引数1が指定した変数の場所は0未満の場所です")
                console.error("The variable location specified by argument 1 is negative.")
                process.exit(1); 
            }else if(((new Date(query[2][0],query[2][1]-1,query[2][2])-new Date(2000, 0, 1))/86400000)<0){
                console.error("calcore_error:"+(i+1))
                console.error("引数2が指定した変数の場所は0未満の場所です")
                console.error("The variable location specified by argument 2 is negative.")
                process.exit(1); 
            }else if(vari[((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)]==undefined){
                console.error("calcore_error:"+(i+1))
                console.error("引数1が指定した変数は値がありません")
                console.error("Variable specified by argument 1 has no value.")
                process.exit(1); 
            }else if(vari[((new Date(query[2][0],query[2][1]-1,query[2][2])-new Date(2000, 0, 1))/86400000)]==undefined){
                console.error("calcore_error:"+(i+1))
                console.error("引数2が指定した変数は値がありません")
                console.error("Variable specified by argument 2 has no value.")
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
                console.error("Argument 1 is not specified.")
                process.exit(1); 
            }else if(isNaN((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)){
                console.error("calcore_error:"+(i+1))
                console.error("引数は日付形式以外では指定できません")
                console.error("Argument must be a valid date.")
                process.exit(1); 
            }else if(query[2]==undefined){
                console.error("calcore_error:"+(i+1))
                console.error("引数2が指定されていません")
                console.error("Argument 2 is not specified.")
                process.exit(1); 
            }else if(isNaN((new Date(query[2][0],query[2][1]-1,query[2][2])-new Date(2000, 0, 1))/86400000)){
                console.error("calcore_error:"+(i+1))
                console.error("引数は日付形式以外では指定できません")
                console.error("Argument must be a valid date.")
                process.exit(1); 
            }else{
            if(((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)<0){
                console.error("calcore_error:"+(i+1))
                console.error("引数1が指定した変数の場所は0未満の場所です")
                console.error("The variable location specified by argument 1 is negative.")
                process.exit(1); 
            }else if(((new Date(query[2][0],query[2][1]-1,query[2][2])-new Date(2000, 0, 1))/86400000)<0){
                console.error("calcore_error:"+(i+1))
                console.error("引数2が指定した変数の場所は0未満の場所です")
                console.error("The variable location specified by argument 2 is negative.")
                process.exit(1); 
            }else if(vari[((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)]==undefined){
                console.error("calcore_error:"+(i+1))
                console.error("引数1が指定した変数は値がありません")
                console.error("Variable specified by argument 1 has no value.")
                process.exit(1); 
            }else if(vari[((new Date(query[2][0],query[2][1]-1,query[2][2])-new Date(2000, 0, 1))/86400000)]==undefined){
                console.error("calcore_error:"+(i+1))
                console.error("引数2が指定した変数は値がありません")
                console.error("Variable specified by argument 2 has no value.")
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
                console.error("Argument 1 is not specified.")
                process.exit(1); 
            }else if(isNaN((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)){
                console.error("calcore_error:"+(i+1))
                console.error("引数は日付形式以外では指定できません")
                console.error("Argument must be a valid date.")
                process.exit(1); 
            }else if(query[2]==undefined){
                console.error("calcore_error:"+(i+1))
                console.error("引数2が指定されていません")
                console.error("Argument 2 is not specified.")
                process.exit(1); 
            }else if(isNaN((new Date(query[2][0],query[2][1]-1,query[2][2])-new Date(2000, 0, 1))/86400000)){
                console.error("calcore_error:"+(i+1))
                console.error("引数は日付形式以外では指定できません")
                console.error("Argument must be a valid date.")
                process.exit(1); 
            }else{
            if(((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)<0){
                console.error("calcore_error:"+(i+1))
                console.error("引数1が指定した変数の場所は0未満の場所です")
                console.error("The variable location specified by argument 1 is negative.")
                process.exit(1); 
            }else if(((new Date(query[2][0],query[2][1]-1,query[2][2])-new Date(2000, 0, 1))/86400000)<0){
                console.error("calcore_error:"+(i+1))
                console.error("引数2が指定した変数の場所は0未満の場所です")
                console.error("The variable location specified by argument 2 is negative.")
                process.exit(1); 
            }else if(vari[((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)]==undefined){
                console.error("calcore_error:"+(i+1))
                console.error("引数1が指定した変数は値がありません")
                console.error("Variable specified by argument 1 has no value.")
                process.exit(1); 
            }else if(vari[((new Date(query[2][0],query[2][1]-1,query[2][2])-new Date(2000, 0, 1))/86400000)]==undefined){
                console.error("calcore_error:"+(i+1))
                console.error("引数2が指定した変数は値がありません")
                console.error("Variable specified by argument 2 has no value.")
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
                console.error("Argument 1 is not specified.")
                process.exit(1); 
            }else if(isNaN((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)){
                console.error("calcore_error:"+(i+1))
                console.error("引数は日付形式以外では指定できません")
                console.error("Argument must be a valid date.")
                process.exit(1); 
            }else if(query[2]==undefined){
                console.error("calcore_error:"+(i+1))
                console.error("引数2が指定されていません")
                console.error("Argument 2 is not specified.")
                process.exit(1); 
            }else if(isNaN((new Date(query[2][0],query[2][1]-1,query[2][2])-new Date(2000, 0, 1))/86400000)){
                console.error("calcore_error:"+(i+1))
                console.error("引数は日付形式以外では指定できません")
                console.error("Argument must be a valid date.")
                process.exit(1); 
            }else{
            if(((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)<0){
                console.error("calcore_error:"+(i+1))
                console.error("引数1が指定した変数の場所は0未満の場所です")
                console.error("The variable location specified by argument 1 is negative.")
                process.exit(1); 
            }else if(((new Date(query[2][0],query[2][1]-1,query[2][2])-new Date(2000, 0, 1))/86400000)<0){
                console.error("calcore_error:"+(i+1))
                console.error("引数2が指定した変数の場所は0未満の場所です")
                console.error("The variable location specified by argument 2 is negative.")
                process.exit(1); 
            }else if(vari[((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)]==undefined){
                console.error("calcore_error:"+(i+1))
                console.error("引数1が指定した変数は値がありません")
                console.error("Variable specified by argument 1 has no value.")
                process.exit(1); 
            }else if(vari[((new Date(query[2][0],query[2][1]-1,query[2][2])-new Date(2000, 0, 1))/86400000)]==undefined){
                console.error("calcore_error:"+(i+1))
                console.error("引数2が指定した変数は値がありません")
                console.error("Variable specified by argument 2 has no value.")
                process.exit(1); 
            }
            else{
            vari[point]=[0,vari[((new Date(query[1][0],query[1][1]-1,query[1][2])-new Date(2000, 0, 1))/86400000)][1]%vari[((new Date(query[2][0],query[2][1]-1,query[2][2])-new Date(2000, 0, 1))/86400000)][1]]                    
            }
        }
        }

    return [point,vari,output,i]
}
function April(que,poi,va,out,line){
    var query=que
    var point=poi
    var vari=va
    var output=out
    var i=line


    if(query[0][2]==1){
        if(output!=""){
        output="";
        }
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
                result=January_first(query,point,vari,output,i,rl_input);
                    point=result[0]
                    vari=result[1]
                    output=result[2]
                    i=result[3]
                }else{
                result=January(query,point,vari,output,i);
                    point=result[0]
                    vari=result[1]
                    output=result[2]
                    i=result[3]
                }
                //ここまで
            }else if(query[0][1]==2){
                //2月
                result=February(query,point,vari,output,i);
                    point=result[0]
                    vari=result[1]
                    output=result[2]
                    i=result[3]
            }else if(query[0][1]==3){
                //3月
                
                result=March(query,point,vari,output,i);
                    point=result[0]
                    vari=result[1]
                    output=result[2]
                    i=result[3]
            }else if(query[0][1]==4){
                //4月
                
                result=April(query,point,vari,output,i);
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