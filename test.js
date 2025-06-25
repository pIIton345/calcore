const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Promise ラップした question
function questionAsync(query) {
  return new Promise((resolve) => {
    rl.question(query, resolve);
  });
}
/*
async function main() {
  for (let i = 0; i < 3; i++) {
    console.log('なんか');
    const answer = await questionAsync('入力して: ');
    console.log(`あなたの入力: ${answer}`);
  }
  //rl.close();
  
    console.log('なんか');
    const answer = await questionAsync('入力して: ');
    console.log(`あなたの入力: ${answer}`);
}
*/
//main();
