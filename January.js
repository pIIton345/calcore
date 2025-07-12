var readline = require('readline');

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

async function January(que,poi,va,out,line){
    var query=que
    var point=poi
    var vari=va
    var output=out
    var i=line
                if(query[0][2]==1){
                    //入力
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
                }else if(query[0][2]==2){
                    //出力
                    //console.log(vari[point])
                    if(vari[point]!=undefined){
                    if(vari[point][0]==0){
                        output+=vari[point][1]
                    }else{
                        //Unicode表を見よう！
                        output+=String.fromCodePoint(vari[point][1])
                    }
                    }else{
                        console.error("ポインタ先の変数に値はありません")
                    }
                }else if(query[0][2]==3){
                    //出力改行
                    console.log(output)
                    output="";
                }else if(query[0][2]==4){
                    //ジャンプ
                    if(query[1]!=undefined){
                        if(isNaN((new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000)){
                            console.error("指定1は日付形式以外は指定できません。")
                        }else{
                        if((new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000<0){
                        console.error("指定した変数の場所は0未満の場所です")
                        }else{
                        if(vari[(new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000]==undefined){
                            console.error("指定した変数に値はありません")
                        }else{
                        if((vari[(new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000][1]-2)<-1){
                            console.error("ジャンプ先が1未満の場所です")
                        }else{
                            i=vari[(new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000][1]-2
                        }
                        }
                    }
                    }
                    }else{
                        console.error("指定1が指定されていません")
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
                    if(query[1]==undefined){
                        console.error("変数1が指定されていません")
                    }else if(query[2]==undefined){
                        console.error("指定2が指定されていません")
                    }else if(query[3]==undefined){
                        console.error("指定3が指定されていません")
                    }else if(isNaN((new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000)){
                        console.error("引数1は日付形式以外は指定できません")
                    }else if(isNaN((new Date(query[2][0],query[2][1],query[2][2])-new Date(2000, 1, 1))/86400000)){
                        console.error("引数2は日付形式以外は指定できません")
                    }else if(isNaN((new Date(query[3][0],query[3][1],query[3][2])-new Date(2000, 1, 1))/86400000)){
                        console.error("引数3は日付形式以外は指定できません")
                    }else if(((new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000)<0){
                        console.error("引数1が指定した変数の場所は0未満の場所です")
                    }else if(((new Date(query[2][0],query[2][1],query[2][2])-new Date(2000, 1, 1))/86400000)<0){
                        console.error("引数2が指定した変数の場所は0未満の場所です")
                    }else if(((new Date(query[3][0],query[3][1],query[3][2])-new Date(2000, 1, 1))/86400000)<0){
                        console.error("引数3が指定した変数の場所は0未満の場所です")
                    }else if(query[4]!=undefined){
                        //引数4がある場合
                        if(isNaN((new Date(query[4][0],query[4][1],query[4][2])-new Date(2000, 1, 1))/86400000)){
                        console.error("引数4は日付形式以外は指定できません")
                        }
                        else if(((new Date(query[4][0],query[4][1],query[4][2])-new Date(2000, 1, 1))/86400000)<0){
                            console.error("引数4が指定した変数の場所は0未満です。")
                        }else{
                            if(vari[((new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000)]==undefined&&vari[((new Date(query[2][0],query[2][1],query[2][2])-new Date(2000, 1, 1))/86400000)]==undefined){
                                //true
                                if((vari[(new Date(query[3][0],query[3][1],query[3][2])-new Date(2000, 1, 1))/86400000][1]-2)<-1){
                                console.error("ジャンプ先が1未満の場所です")
                                }else{
                                    i=vari[(new Date(query[3][0],query[3][1],query[3][2])-new Date(2000, 1, 1))/86400000][1]-2
                                }
                            }else if(vari[((new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000)]==undefined||vari[((new Date(query[2][0],query[2][1],query[2][2])-new Date(2000, 1, 1))/86400000)]==undefined){
                                //false
                                if((vari[(new Date(query[4][0],query[4][1],query[4][2])-new Date(2000, 1, 1))/86400000][1]-2)<-1){
                                console.error("ジャンプ先が1未満の場所です")
                                }else{
                                    i=vari[(new Date(query[4][0],query[4][1],query[4][2])-new Date(2000, 1, 1))/86400000][1]-2
                                }
                            }else if(vari[((new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000)][1]==vari[((new Date(query[2][0],query[2][1],query[2][2])-new Date(2000, 1, 1))/86400000)][1]){
                                //true
                                if((vari[(new Date(query[3][0],query[3][1],query[3][2])-new Date(2000, 1, 1))/86400000][1]-2)<-1){
                                console.error("ジャンプ先が1未満の場所です")
                                }else{
                                    i=vari[(new Date(query[3][0],query[3][1],query[3][2])-new Date(2000, 1, 1))/86400000][1]-2
                                }
                            }else{
                                //false
                                if((vari[(new Date(query[4][0],query[4][1],query[4][2])-new Date(2000, 1, 1))/86400000][1]-2)<-1){
                                console.error("ジャンプ先が1未満の場所です")
                                }else{
                                    i=vari[(new Date(query[4][0],query[4][1],query[4][2])-new Date(2000, 1, 1))/86400000][1]-2
                                }
                            }
                        }
                    }else{
                        //引数4がない場合
                        if(vari[((new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000)]==undefined&&vari[((new Date(query[2][0],query[2][1],query[2][2])-new Date(2000, 1, 1))/86400000)]==undefined){
                            //true
                            if((vari[(new Date(query[3][0],query[3][1],query[3][2])-new Date(2000, 1, 1))/86400000][1]-2)<-1){
                            console.error("ジャンプ先が1未満の場所です")
                            }else{
                                i=vari[(new Date(query[3][0],query[3][1],query[3][2])-new Date(2000, 1, 1))/86400000][1]-2
                            }
                        }else if(vari[((new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000)]==undefined||vari[((new Date(query[2][0],query[2][1],query[2][2])-new Date(2000, 1, 1))/86400000)]==undefined){
                            //false
                        }
                        else if(vari[((new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000)][1]==vari[((new Date(query[2][0],query[2][1],query[2][2])-new Date(2000, 1, 1))/86400000)][1]){
                            //true
                            if((vari[(new Date(query[3][0],query[3][1],query[3][2])-new Date(2000, 1, 1))/86400000][1]-2)<-1){
                            console.error("ジャンプ先が1未満の場所です")
                            }else{
                                i=vari[(new Date(query[3][0],query[3][1],query[3][2])-new Date(2000, 1, 1))/86400000][1]-2
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
                    if(query[1]==undefined){
                        console.error("変数1が指定されていません")
                    }else if(query[2]==undefined){
                        console.error("指定2が指定されていません")
                    }else if(query[3]==undefined){
                        console.error("指定3が指定されていません")
                    }else if(isNaN((new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000)){
                        console.error("引数1は日付形式以外は指定できません")
                    }else if(isNaN((new Date(query[2][0],query[2][1],query[2][2])-new Date(2000, 1, 1))/86400000)){
                        console.error("引数2は日付形式以外は指定できません")
                    }else if(isNaN((new Date(query[3][0],query[3][1],query[3][2])-new Date(2000, 1, 1))/86400000)){
                        console.error("引数3は日付形式以外は指定できません")
                    }else if(((new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000)<0){
                        console.error("引数1が指定した変数の場所は0未満の場所です")
                    }else if(((new Date(query[2][0],query[2][1],query[2][2])-new Date(2000, 1, 1))/86400000)<0){
                        console.error("引数2が指定した変数の場所は0未満の場所です")
                    }else if(((new Date(query[3][0],query[3][1],query[3][2])-new Date(2000, 1, 1))/86400000)<0){
                        console.error("引数3が指定した変数の場所は0未満の場所です")
                    }else if(query[4]!=undefined){
                        //引数4がある場合
                        if(isNaN((new Date(query[4][0],query[4][1],query[4][2])-new Date(2000, 1, 1))/86400000)){
                        console.error("引数4は日付形式以外は指定できません")
                        }
                        else if(((new Date(query[4][0],query[4][1],query[4][2])-new Date(2000, 1, 1))/86400000)<0){
                            console.error("引数4が指定した変数の場所は0未満です。")
                        }else{
                            if(vari[((new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000)]==undefined&&vari[((new Date(query[2][0],query[2][1],query[2][2])-new Date(2000, 1, 1))/86400000)]==undefined){
                                //false
                                if((vari[(new Date(query[4][0],query[4][1],query[4][2])-new Date(2000, 1, 1))/86400000][1]-2)<-1){
                                console.error("ジャンプ先が1未満の場所です")
                                }else{
                                    i=vari[(new Date(query[4][0],query[4][1],query[4][2])-new Date(2000, 1, 1))/86400000][1]-2
                                }
                            }else if(vari[((new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000)]==undefined||vari[((new Date(query[2][0],query[2][1],query[2][2])-new Date(2000, 1, 1))/86400000)]==undefined){
                                //false
                                if((vari[(new Date(query[4][0],query[4][1],query[4][2])-new Date(2000, 1, 1))/86400000][1]-2)<-1){
                                console.error("ジャンプ先が1未満の場所です")
                                }else{
                                    i=vari[(new Date(query[4][0],query[4][1],query[4][2])-new Date(2000, 1, 1))/86400000][1]-2
                                }
                            }else if(vari[((new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000)][1]<vari[((new Date(query[2][0],query[2][1],query[2][2])-new Date(2000, 1, 1))/86400000)][1]){
                                //true
                                if((vari[(new Date(query[3][0],query[3][1],query[3][2])-new Date(2000, 1, 1))/86400000][1]-2)<-1){
                                console.error("ジャンプ先が1未満の場所です")
                                }else{
                                    i=vari[(new Date(query[3][0],query[3][1],query[3][2])-new Date(2000, 1, 1))/86400000][1]-2
                                }
                            }else{
                                //false
                                if((vari[(new Date(query[4][0],query[4][1],query[4][2])-new Date(2000, 1, 1))/86400000][1]-2)<-1){
                                console.error("ジャンプ先が1未満の場所です")
                                }else{
                                    i=vari[(new Date(query[4][0],query[4][1],query[4][2])-new Date(2000, 1, 1))/86400000][1]-2
                                }
                            }
                        }
                    }else{
                        //引数4がない場合
                        if(vari[((new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000)]==undefined&&vari[((new Date(query[2][0],query[2][1],query[2][2])-new Date(2000, 1, 1))/86400000)]==undefined){
                            //false
                        }else if(vari[((new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000)]==undefined||vari[((new Date(query[2][0],query[2][1],query[2][2])-new Date(2000, 1, 1))/86400000)]==undefined){
                            //false
                        }
                        else if(vari[((new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000)][1]<vari[((new Date(query[2][0],query[2][1],query[2][2])-new Date(2000, 1, 1))/86400000)][1]){
                            //true
                            if((vari[(new Date(query[3][0],query[3][1],query[3][2])-new Date(2000, 1, 1))/86400000][1]-2)<-1){
                            console.error("ジャンプ先が1未満の場所です")
                            }else{
                                i=vari[(new Date(query[3][0],query[3][1],query[3][2])-new Date(2000, 1, 1))/86400000][1]-2
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
                    if(query[1]==undefined){
                        console.error("変数1が指定されていません")
                    }else if(query[2]==undefined){
                        console.error("指定2が指定されていません")
                    }else if(query[3]==undefined){
                        console.error("指定3が指定されていません")
                    }else if(isNaN((new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000)){
                        console.error("引数1は日付形式以外は指定できません")
                    }else if(isNaN((new Date(query[2][0],query[2][1],query[2][2])-new Date(2000, 1, 1))/86400000)){
                        console.error("引数2は日付形式以外は指定できません")
                    }else if(isNaN((new Date(query[3][0],query[3][1],query[3][2])-new Date(2000, 1, 1))/86400000)){
                        console.error("引数3は日付形式以外は指定できません")
                    }else if(((new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000)<0){
                        console.error("引数1が指定した変数の場所は0未満の場所です")
                    }else if(((new Date(query[2][0],query[2][1],query[2][2])-new Date(2000, 1, 1))/86400000)<0){
                        console.error("引数2が指定した変数の場所は0未満の場所です")
                    }else if(((new Date(query[3][0],query[3][1],query[3][2])-new Date(2000, 1, 1))/86400000)<0){
                        console.error("引数3が指定した変数の場所は0未満の場所です")
                    }else if(query[4]!=undefined){
                        //引数4がある場合
                        if(isNaN((new Date(query[4][0],query[4][1],query[4][2])-new Date(2000, 1, 1))/86400000)){
                        console.error("引数4は日付形式以外は指定できません")
                        }
                        else if(((new Date(query[4][0],query[4][1],query[4][2])-new Date(2000, 1, 1))/86400000)<0){
                            console.error("引数4が指定した変数の場所は0未満です。")
                        }else{
                            if(vari[((new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000)]==undefined&&vari[((new Date(query[2][0],query[2][1],query[2][2])-new Date(2000, 1, 1))/86400000)]==undefined){
                                //false
                                if((vari[(new Date(query[4][0],query[4][1],query[4][2])-new Date(2000, 1, 1))/86400000][1]-2)<-1){
                                console.error("ジャンプ先が1未満の場所です")
                                }else{
                                    i=vari[(new Date(query[4][0],query[4][1],query[4][2])-new Date(2000, 1, 1))/86400000][1]-2
                                }
                            }else if(vari[((new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000)]==undefined||vari[((new Date(query[2][0],query[2][1],query[2][2])-new Date(2000, 1, 1))/86400000)]==undefined){
                                //false
                                if((vari[(new Date(query[4][0],query[4][1],query[4][2])-new Date(2000, 1, 1))/86400000][1]-2)<-1){
                                console.error("ジャンプ先が1未満の場所です")
                                }else{
                                    i=vari[(new Date(query[4][0],query[4][1],query[4][2])-new Date(2000, 1, 1))/86400000][1]-2
                                }
                            }else if(vari[((new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000)][1]>vari[((new Date(query[2][0],query[2][1],query[2][2])-new Date(2000, 1, 1))/86400000)][1]){
                                //true
                                if((vari[(new Date(query[3][0],query[3][1],query[3][2])-new Date(2000, 1, 1))/86400000][1]-2)<-1){
                                console.error("ジャンプ先が1未満の場所です")
                                }else{
                                    i=vari[(new Date(query[3][0],query[3][1],query[3][2])-new Date(2000, 1, 1))/86400000][1]-2
                                }
                            }else{
                                //false
                                if((vari[(new Date(query[4][0],query[4][1],query[4][2])-new Date(2000, 1, 1))/86400000][1]-2)<-1){
                                console.error("ジャンプ先が1未満の場所です")
                                }else{
                                    i=vari[(new Date(query[4][0],query[4][1],query[4][2])-new Date(2000, 1, 1))/86400000][1]-2
                                }
                            }
                        }
                    }else{
                        //引数4がない場合
                        if(vari[((new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000)]==undefined&&vari[((new Date(query[2][0],query[2][1],query[2][2])-new Date(2000, 1, 1))/86400000)]==undefined){
                            //false
                        }else if(vari[((new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000)]==undefined||vari[((new Date(query[2][0],query[2][1],query[2][2])-new Date(2000, 1, 1))/86400000)]==undefined){
                            //false
                        }
                        else if(vari[((new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000)][1]>vari[((new Date(query[2][0],query[2][1],query[2][2])-new Date(2000, 1, 1))/86400000)][1]){
                            //true
                            if((vari[(new Date(query[3][0],query[3][1],query[3][2])-new Date(2000, 1, 1))/86400000][1]-2)<-1){
                            console.error("ジャンプ先が1未満の場所です")
                            }else{
                                i=vari[(new Date(query[3][0],query[3][1],query[3][2])-new Date(2000, 1, 1))/86400000][1]-2
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
                    if(query[1]==undefined){
                        console.error("変数1が指定されていません")
                    }else if(query[2]==undefined){
                        console.error("指定2が指定されていません")
                    }else if(query[3]==undefined){
                        console.error("指定3が指定されていません")
                    }else if(isNaN((new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000)){
                        console.error("引数1は日付形式以外は指定できません")
                    }else if(isNaN((new Date(query[2][0],query[2][1],query[2][2])-new Date(2000, 1, 1))/86400000)){
                        console.error("引数2は日付形式以外は指定できません")
                    }else if(isNaN((new Date(query[3][0],query[3][1],query[3][2])-new Date(2000, 1, 1))/86400000)){
                        console.error("引数3は日付形式以外は指定できません")
                    }else if(((new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000)<0){
                        console.error("引数1が指定した変数の場所は0未満の場所です")
                    }else if(((new Date(query[2][0],query[2][1],query[2][2])-new Date(2000, 1, 1))/86400000)<0){
                        console.error("引数2が指定した変数の場所は0未満の場所です")
                    }else if(((new Date(query[3][0],query[3][1],query[3][2])-new Date(2000, 1, 1))/86400000)<0){
                        console.error("引数3が指定した変数の場所は0未満の場所です")
                    }else if(query[4]!=undefined){
                        //引数4がある場合
                        if(isNaN((new Date(query[4][0],query[4][1],query[4][2])-new Date(2000, 1, 1))/86400000)){
                        console.error("引数4は日付形式以外は指定できません")
                        }
                        else if(((new Date(query[4][0],query[4][1],query[4][2])-new Date(2000, 1, 1))/86400000)<0){
                            console.error("引数4が指定した変数の場所は0未満です。")
                        }else{
                            if(vari[((new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000)]==undefined&&vari[((new Date(query[2][0],query[2][1],query[2][2])-new Date(2000, 1, 1))/86400000)]==undefined){
                                //false
                                if((vari[(new Date(query[4][0],query[4][1],query[4][2])-new Date(2000, 1, 1))/86400000][1]-2)<-1){
                                console.error("ジャンプ先が1未満の場所です")
                                }else{
                                    i=vari[(new Date(query[4][0],query[4][1],query[4][2])-new Date(2000, 1, 1))/86400000][1]-2
                                }
                            }else if(vari[((new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000)]==undefined||vari[((new Date(query[2][0],query[2][1],query[2][2])-new Date(2000, 1, 1))/86400000)]==undefined){
                                //false
                                if((vari[(new Date(query[4][0],query[4][1],query[4][2])-new Date(2000, 1, 1))/86400000][1]-2)<-1){
                                console.error("ジャンプ先が1未満の場所です")
                                }else{
                                    i=vari[(new Date(query[4][0],query[4][1],query[4][2])-new Date(2000, 1, 1))/86400000][1]-2
                                }
                            }else if(vari[((new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000)][1]<=vari[((new Date(query[2][0],query[2][1],query[2][2])-new Date(2000, 1, 1))/86400000)][1]){
                                //true
                                if((vari[(new Date(query[3][0],query[3][1],query[3][2])-new Date(2000, 1, 1))/86400000][1]-2)<-1){
                                console.error("ジャンプ先が1未満の場所です")
                                }else{
                                    i=vari[(new Date(query[3][0],query[3][1],query[3][2])-new Date(2000, 1, 1))/86400000][1]-2
                                }
                            }else{
                                //false
                                if((vari[(new Date(query[4][0],query[4][1],query[4][2])-new Date(2000, 1, 1))/86400000][1]-2)<-1){
                                console.error("ジャンプ先が1未満の場所です")
                                }else{
                                    i=vari[(new Date(query[4][0],query[4][1],query[4][2])-new Date(2000, 1, 1))/86400000][1]-2
                                }
                            }
                        }
                    }else{
                        //引数4がない場合
                        if(vari[((new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000)]==undefined&&vari[((new Date(query[2][0],query[2][1],query[2][2])-new Date(2000, 1, 1))/86400000)]==undefined){
                            //false
                        }else if(vari[((new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000)]==undefined||vari[((new Date(query[2][0],query[2][1],query[2][2])-new Date(2000, 1, 1))/86400000)]==undefined){
                            //false
                        }
                        else if(vari[((new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000)][1]<=vari[((new Date(query[2][0],query[2][1],query[2][2])-new Date(2000, 1, 1))/86400000)][1]){
                            //true
                            if((vari[(new Date(query[3][0],query[3][1],query[3][2])-new Date(2000, 1, 1))/86400000][1]-2)<-1){
                            console.error("ジャンプ先が1未満の場所です")
                            }else{
                                i=vari[(new Date(query[3][0],query[3][1],query[3][2])-new Date(2000, 1, 1))/86400000][1]-2
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
                    if(query[1]==undefined){
                        console.error("変数1が指定されていません")
                    }else if(query[2]==undefined){
                        console.error("指定2が指定されていません")
                    }else if(query[3]==undefined){
                        console.error("指定3が指定されていません")
                    }else if(isNaN((new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000)){
                        console.error("引数1は日付形式以外は指定できません")
                    }else if(isNaN((new Date(query[2][0],query[2][1],query[2][2])-new Date(2000, 1, 1))/86400000)){
                        console.error("引数2は日付形式以外は指定できません")
                    }else if(isNaN((new Date(query[3][0],query[3][1],query[3][2])-new Date(2000, 1, 1))/86400000)){
                        console.error("引数3は日付形式以外は指定できません")
                    }else if(((new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000)<0){
                        console.error("引数1が指定した変数の場所は0未満の場所です")
                    }else if(((new Date(query[2][0],query[2][1],query[2][2])-new Date(2000, 1, 1))/86400000)<0){
                        console.error("引数2が指定した変数の場所は0未満の場所です")
                    }else if(((new Date(query[3][0],query[3][1],query[3][2])-new Date(2000, 1, 1))/86400000)<0){
                        console.error("引数3が指定した変数の場所は0未満の場所です")
                    }else if(query[4]!=undefined){
                        //引数4がある場合
                        if(isNaN((new Date(query[4][0],query[4][1],query[4][2])-new Date(2000, 1, 1))/86400000)){
                        console.error("引数4は日付形式以外は指定できません")
                        }
                        else if(((new Date(query[4][0],query[4][1],query[4][2])-new Date(2000, 1, 1))/86400000)<0){
                            console.error("引数4が指定した変数の場所は0未満です。")
                        }else{
                            if(vari[((new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000)]==undefined&&vari[((new Date(query[2][0],query[2][1],query[2][2])-new Date(2000, 1, 1))/86400000)]==undefined){
                                //false
                                if((vari[(new Date(query[4][0],query[4][1],query[4][2])-new Date(2000, 1, 1))/86400000][1]-2)<-1){
                                console.error("ジャンプ先が1未満の場所です")
                                }else{
                                    i=vari[(new Date(query[4][0],query[4][1],query[4][2])-new Date(2000, 1, 1))/86400000][1]-2
                                }
                            }else if(vari[((new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000)]==undefined||vari[((new Date(query[2][0],query[2][1],query[2][2])-new Date(2000, 1, 1))/86400000)]==undefined){
                                //false
                                if((vari[(new Date(query[4][0],query[4][1],query[4][2])-new Date(2000, 1, 1))/86400000][1]-2)<-1){
                                console.error("ジャンプ先が1未満の場所です")
                                }else{
                                    i=vari[(new Date(query[4][0],query[4][1],query[4][2])-new Date(2000, 1, 1))/86400000][1]-2
                                }
                            }else if(vari[((new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000)][1]>=vari[((new Date(query[2][0],query[2][1],query[2][2])-new Date(2000, 1, 1))/86400000)][1]){
                                //true
                                if((vari[(new Date(query[3][0],query[3][1],query[3][2])-new Date(2000, 1, 1))/86400000][1]-2)<-1){
                                console.error("ジャンプ先が1未満の場所です")
                                }else{
                                    i=vari[(new Date(query[3][0],query[3][1],query[3][2])-new Date(2000, 1, 1))/86400000][1]-2
                                }
                            }else{
                                //false
                                if((vari[(new Date(query[4][0],query[4][1],query[4][2])-new Date(2000, 1, 1))/86400000][1]-2)<-1){
                                console.error("ジャンプ先が1未満の場所です")
                                }else{
                                    i=vari[(new Date(query[4][0],query[4][1],query[4][2])-new Date(2000, 1, 1))/86400000][1]-2
                                }
                            }
                        }
                    }else{
                        //引数4がない場合
                        if(vari[((new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000)]==undefined&&vari[((new Date(query[2][0],query[2][1],query[2][2])-new Date(2000, 1, 1))/86400000)]==undefined){
                            //false
                        }else if(vari[((new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000)]==undefined||vari[((new Date(query[2][0],query[2][1],query[2][2])-new Date(2000, 1, 1))/86400000)]==undefined){
                            //false
                        }
                        else if(vari[((new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000)][1]>=vari[((new Date(query[2][0],query[2][1],query[2][2])-new Date(2000, 1, 1))/86400000)][1]){
                            //true
                            if((vari[(new Date(query[3][0],query[3][1],query[3][2])-new Date(2000, 1, 1))/86400000][1]-2)<-1){
                            console.error("ジャンプ先が1未満の場所です")
                            }else{
                                i=vari[(new Date(query[3][0],query[3][1],query[3][2])-new Date(2000, 1, 1))/86400000][1]-2
                            }
                        }
                    }
                    
                }
            }