var readline = require('readline');

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
    for(var i=0;i<inp.length;i++){
        var token=inp[i].split(" ")//クエリとトークン逆や
        var query=[...Array(token.length)].map((_,j)=>(token[j].split("/")))
        //console.log(query)    
        //if(query[0][0]==2020){
            if(query[0][1]==1){
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
                        if(isNaN((new Date(query[4][0],query[4][1],query[4][2])-new Date(2000, 1, 1))/86400000)){
                        console.error("引数4は日付形式以外は指定できません")
                        }
                        else if(((new Date(query[4][0],query[4][1],query[4][2])-new Date(2000, 1, 1))/86400000)<0){
                            console.error("引数4が指定した変数の場所は0未満です。")
                        }else{
                            if(vari[((new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000)][1]==vari[((new Date(query[2][0],query[2][1],query[2][2])-new Date(2000, 1, 1))/86400000)][1]){
                                if((vari[(new Date(query[3][0],query[3][1],query[3][2])-new Date(2000, 1, 1))/86400000][1]-2)<-1){
                                console.error("ジャンプ先が1未満の場所です")
                                }else{
                                    i=vari[(new Date(query[3][0],query[3][1],query[3][2])-new Date(2000, 1, 1))/86400000][1]-2
                                }
                            }else{
                                if((vari[(new Date(query[4][0],query[4][1],query[4][2])-new Date(2000, 1, 1))/86400000][1]-2)<-1){
                                console.error("ジャンプ先が1未満の場所です")
                                }else{
                                    i=vari[(new Date(query[4][0],query[4][1],query[4][2])-new Date(2000, 1, 1))/86400000][1]-2
                                }
                            }
                        }
                    }else{
                        if(vari[((new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000)][1]==vari[((new Date(query[2][0],query[2][1],query[2][2])-new Date(2000, 1, 1))/86400000)][1]){
                            if((vari[(new Date(query[3][0],query[3][1],query[3][2])-new Date(2000, 1, 1))/86400000][1]-2)<-1){
                            console.error("ジャンプ先が1未満の場所です")
                            }else{
                                i=vari[(new Date(query[3][0],query[3][1],query[3][2])-new Date(2000, 1, 1))/86400000][1]-2
                            }
                        }
                    }
                }else if(query[0][2]==6){
                    //条件ジャンプ
                    if(((new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000)<0){
                        console.error("引数1が指定した変数の場所は0未満の場所です")
                    }else if(((new Date(query[2][0],query[2][1],query[2][2])-new Date(2000, 1, 1))/86400000)<0){
                        console.error("引数2が指定した変数の場所は0未満の場所です")
                    }else if(((new Date(query[3][0],query[3][1],query[3][2])-new Date(2000, 1, 1))/86400000)<0){
                        console.error("引数3が指定した変数の場所は0未満の場所です")
                    }else if(query[4]!=undefined){
                        if(((new Date(query[4][0],query[4][1],query[4][2])-new Date(2000, 1, 1))/86400000)<0){
                            console.error("引数4が指定した変数の場所は0未満です。")
                        }else{
                            if(vari[((new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000)][1]<vari[((new Date(query[2][0],query[2][1],query[2][2])-new Date(2000, 1, 1))/86400000)][1]){
                                if((vari[(new Date(query[3][0],query[3][1],query[3][2])-new Date(2000, 1, 1))/86400000][1]-2)<-1){
                                console.error("ジャンプ先が1未満の場所です")
                                }else{
                                    i=vari[(new Date(query[3][0],query[3][1],query[3][2])-new Date(2000, 1, 1))/86400000][1]-2
                                }
                            }else{
                                if((vari[(new Date(query[4][0],query[4][1],query[4][2])-new Date(2000, 1, 1))/86400000][1]-2)<-1){
                                console.error("ジャンプ先が1未満の場所です")
                                }else{
                                    i=vari[(new Date(query[4][0],query[4][1],query[4][2])-new Date(2000, 1, 1))/86400000][1]-2
                                }
                            }
                        }
                    }else{
                        if(vari[((new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000)][1]<vari[((new Date(query[2][0],query[2][1],query[2][2])-new Date(2000, 1, 1))/86400000)][1]){
                            if((vari[(new Date(query[3][0],query[3][1],query[3][2])-new Date(2000, 1, 1))/86400000][1]-2)<-1){
                            console.error("ジャンプ先が1未満の場所です")
                            }else{
                                i=vari[(new Date(query[3][0],query[3][1],query[3][2])-new Date(2000, 1, 1))/86400000][1]-2
                            }
                        }
                    }
                    
                }else if(query[0][2]==7){
                    //条件ジャンプ
                    if(((new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000)<0){
                        console.error("引数1が指定した変数の場所は0未満の場所です")
                    }else if(((new Date(query[2][0],query[2][1],query[2][2])-new Date(2000, 1, 1))/86400000)<0){
                        console.error("引数2が指定した変数の場所は0未満の場所です")
                    }else if(((new Date(query[3][0],query[3][1],query[3][2])-new Date(2000, 1, 1))/86400000)<0){
                        console.error("引数3が指定した変数の場所は0未満の場所です")
                    }else if(query[4]!=undefined){
                        if(((new Date(query[4][0],query[4][1],query[4][2])-new Date(2000, 1, 1))/86400000)<0){
                            console.error("引数4が指定した変数の場所は0未満です。")
                        }else{
                            if(vari[((new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000)][1]>vari[((new Date(query[2][0],query[2][1],query[2][2])-new Date(2000, 1, 1))/86400000)][1]){
                                if((vari[(new Date(query[3][0],query[3][1],query[3][2])-new Date(2000, 1, 1))/86400000][1]-2)<-1){
                                console.error("ジャンプ先が1未満の場所です")
                                }else{
                                    i=vari[(new Date(query[3][0],query[3][1],query[3][2])-new Date(2000, 1, 1))/86400000][1]-2
                                }
                            }else{
                                if((vari[(new Date(query[4][0],query[4][1],query[4][2])-new Date(2000, 1, 1))/86400000][1]-2)<-1){
                                console.error("ジャンプ先が1未満の場所です")
                                }else{
                                    i=vari[(new Date(query[4][0],query[4][1],query[4][2])-new Date(2000, 1, 1))/86400000][1]-2
                                }
                            }
                        }
                    }else{
                        if(vari[((new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000)][1]>vari[((new Date(query[2][0],query[2][1],query[2][2])-new Date(2000, 1, 1))/86400000)][1]){
                            if((vari[(new Date(query[3][0],query[3][1],query[3][2])-new Date(2000, 1, 1))/86400000][1]-2)<-1){
                            console.error("ジャンプ先が1未満の場所です")
                            }else{
                                i=vari[(new Date(query[3][0],query[3][1],query[3][2])-new Date(2000, 1, 1))/86400000][1]-2
                            }
                        }
                    }
                    
                }else if(query[0][2]==8){
                    //条件ジャンプ
                    if(((new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000)<0){
                        console.error("引数1が指定した変数の場所は0未満の場所です")
                    }else if(((new Date(query[2][0],query[2][1],query[2][2])-new Date(2000, 1, 1))/86400000)<0){
                        console.error("引数2が指定した変数の場所は0未満の場所です")
                    }else if(((new Date(query[3][0],query[3][1],query[3][2])-new Date(2000, 1, 1))/86400000)<0){
                        console.error("引数3が指定した変数の場所は0未満の場所です")
                    }else if(query[4]!=undefined){
                        if(((new Date(query[4][0],query[4][1],query[4][2])-new Date(2000, 1, 1))/86400000)<0){
                            console.error("引数4が指定した変数の場所は0未満です。")
                        }else{
                            if(vari[((new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000)][1]<=vari[((new Date(query[2][0],query[2][1],query[2][2])-new Date(2000, 1, 1))/86400000)][1]){
                                if((vari[(new Date(query[3][0],query[3][1],query[3][2])-new Date(2000, 1, 1))/86400000][1]-2)<-1){
                                console.error("ジャンプ先が1未満の場所です")
                                }else{
                                    i=vari[(new Date(query[3][0],query[3][1],query[3][2])-new Date(2000, 1, 1))/86400000][1]-2
                                }
                            }else{
                                if((vari[(new Date(query[4][0],query[4][1],query[4][2])-new Date(2000, 1, 1))/86400000][1]-2)<-1){
                                console.error("ジャンプ先が1未満の場所です")
                                }else{
                                    i=vari[(new Date(query[4][0],query[4][1],query[4][2])-new Date(2000, 1, 1))/86400000][1]-2
                                }
                            }
                        }
                    }else{
                        if(vari[((new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000)][1]<=vari[((new Date(query[2][0],query[2][1],query[2][2])-new Date(2000, 1, 1))/86400000)][1]){
                            if((vari[(new Date(query[3][0],query[3][1],query[3][2])-new Date(2000, 1, 1))/86400000][1]-2)<-1){
                            console.error("ジャンプ先が1未満の場所です")
                            }else{
                                i=vari[(new Date(query[3][0],query[3][1],query[3][2])-new Date(2000, 1, 1))/86400000][1]-2
                            }
                        }
                    }
                    
                }else if(query[0][2]==9){
                    //条件ジャンプ
                    if(((new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000)<0){
                        console.error("引数1が指定した変数の場所は0未満の場所です")
                    }else if(((new Date(query[2][0],query[2][1],query[2][2])-new Date(2000, 1, 1))/86400000)<0){
                        console.error("引数2が指定した変数の場所は0未満の場所です")
                    }else if(((new Date(query[3][0],query[3][1],query[3][2])-new Date(2000, 1, 1))/86400000)<0){
                        console.error("引数3が指定した変数の場所は0未満の場所です")
                    }else if(query[4]!=undefined){
                        if(((new Date(query[4][0],query[4][1],query[4][2])-new Date(2000, 1, 1))/86400000)<0){
                            console.error("引数4が指定した変数の場所は0未満です。")
                        }else{
                            if(vari[((new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000)][1]>=vari[((new Date(query[2][0],query[2][1],query[2][2])-new Date(2000, 1, 1))/86400000)][1]){
                                if((vari[(new Date(query[3][0],query[3][1],query[3][2])-new Date(2000, 1, 1))/86400000][1]-2)<-1){
                                console.error("ジャンプ先が1未満の場所です")
                                }else{
                                    i=vari[(new Date(query[3][0],query[3][1],query[3][2])-new Date(2000, 1, 1))/86400000][1]-2
                                }
                            }else{
                                if((vari[(new Date(query[4][0],query[4][1],query[4][2])-new Date(2000, 1, 1))/86400000][1]-2)<-1){
                                console.error("ジャンプ先が1未満の場所です")
                                }else{
                                    i=vari[(new Date(query[4][0],query[4][1],query[4][2])-new Date(2000, 1, 1))/86400000][1]-2
                                }
                            }
                        }
                    }else{
                        if(vari[((new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000)][1]>=vari[((new Date(query[2][0],query[2][1],query[2][2])-new Date(2000, 1, 1))/86400000)][1]){
                            if((vari[(new Date(query[3][0],query[3][1],query[3][2])-new Date(2000, 1, 1))/86400000][1]-2)<-1){
                            console.error("ジャンプ先が1未満の場所です")
                            }else{
                                i=vari[(new Date(query[3][0],query[3][1],query[3][2])-new Date(2000, 1, 1))/86400000][1]-2
                            }
                        }
                    }
                    
                }
            }else if(query[0][1]==2){
                if(query[0][2]==1){
                    vari[point]=[0,(new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000]
                }else if(query[0][2]==2){
                    vari[point]=[1,(new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000]
                }else if(query[0][2]==3){
                    if((new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000<0){
                        console.error("変数ポインタが0未満になってしまいます")
                    }else{
                        point=(new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000
                    }
                }else if(query[0][2]==4){
                    if((point+(new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000)<0){
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
            }else if(query[0][1]==3){
                if(query[0][2]==1){
                    if(((new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000)<0&&((new Date(query[2][0],query[2][1],query[2][2])-new Date(2000, 1, 1))/86400000)<0){
                        console.error("指定した1つ目の変数と2つ目の変数の場所は0未満の場所です")
                    }else{
                    if(((new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000)<0){
                        console.error("指定した1つ目の変数の場所は0未満の場所です")
                    }else if(((new Date(query[2][0],query[2][1],query[2][2])-new Date(2000, 1, 1))/86400000)<0){
                        console.error("指定した2つ目の変数の場所は0未満の場所です")
                    }else{
                    vari[point]=[0,vari[((new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000)][1]+vari[((new Date(query[2][0],query[2][1],query[2][2])-new Date(2000, 1, 1))/86400000)][1]]                    
                    }
                }
                }else if(query[0][2]==2){
                    if(((new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000)<0&&((new Date(query[2][0],query[2][1],query[2][2])-new Date(2000, 1, 1))/86400000)<0){
                        console.error("指定した1つ目の変数と2つ目の変数の場所は0未満の場所です")
                    }else{
                    if(((new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000)<0){
                        console.error("指定した1つ目の変数の場所は0未満の場所です")
                    }else if(((new Date(query[2][0],query[2][1],query[2][2])-new Date(2000, 1, 1))/86400000)<0){
                        console.error("指定した2つ目の変数の場所は0未満の場所です")
                    }else{
                    vari[point]=[0,vari[((new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000)][1]-vari[((new Date(query[2][0],query[2][1],query[2][2])-new Date(2000, 1, 1))/86400000)][1]]                    
                    }
                }
                }else if(query[0][2]==3){
                    if(((new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000)<0&&((new Date(query[2][0],query[2][1],query[2][2])-new Date(2000, 1, 1))/86400000)<0){
                        console.error("指定した1つ目の変数と2つ目の変数の場所は0未満の場所です")
                    }else{
                    if(((new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000)<0){
                        console.error("指定した1つ目の変数の場所は0未満の場所です")
                    }else if(((new Date(query[2][0],query[2][1],query[2][2])-new Date(2000, 1, 1))/86400000)<0){
                        console.error("指定した2つ目の変数の場所は0未満の場所です")
                    }else{
                    vari[point]=[0,vari[((new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000)][1]*vari[((new Date(query[2][0],query[2][1],query[2][2])-new Date(2000, 1, 1))/86400000)][1]]                    
                    }
                }
                }else if(query[0][2]==4){
                    if(((new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000)<0&&((new Date(query[2][0],query[2][1],query[2][2])-new Date(2000, 1, 1))/86400000)<0){
                        console.error("指定した1つ目の変数と2つ目の変数の場所は0未満の場所です")
                    }else{
                    if(((new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000)<0){
                        console.error("指定した1つ目の変数の場所は0未満の場所です")
                    }else if(((new Date(query[2][0],query[2][1],query[2][2])-new Date(2000, 1, 1))/86400000)<0){
                        console.error("指定した2つ目の変数の場所は0未満の場所です")
                    }else{
                    vari[point]=[0,vari[((new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000)][1]/vari[((new Date(query[2][0],query[2][1],query[2][2])-new Date(2000, 1, 1))/86400000)][1]]                    
                    }
                }
                }else if(query[0][2]==5){
                    if(((new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000)<0&&((new Date(query[2][0],query[2][1],query[2][2])-new Date(2000, 1, 1))/86400000)<0){
                        console.error("指定した1つ目の変数と2つ目の変数の場所は0未満の場所です")
                    }else{
                    if(((new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000)<0){
                        console.error("指定した1つ目の変数の場所は0未満の場所です")
                    }else if(((new Date(query[2][0],query[2][1],query[2][2])-new Date(2000, 1, 1))/86400000)<0){
                        console.error("指定した2つ目の変数の場所は0未満の場所です")
                    }else{
                    vari[point]=[0,vari[((new Date(query[1][0],query[1][1],query[1][2])-new Date(2000, 1, 1))/86400000)][1]%vari[((new Date(query[2][0],query[2][1],query[2][2])-new Date(2000, 1, 1))/86400000)][1]]                    
                    }
                }
                }
            }else if(query[0][1]==4){
                if(query[0][2]==1){
                    if(output!=""){
                    console.log(output)
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
                    vari[point]=[0,(new Date(today.getFullYear(),today.getMonth() + 1,today.getDate())-new Date(2000, 1, 1))/86400000]
                }
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