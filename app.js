// 1からコマンドラインの引数で与えられた数までを合計するプログラム

'use strict';     // JavaScript を strictモードにするという意味
const number = process.argv[2] || 0;     
// ↑コマンドライン引数が指定されていればその値、
// そうでなければ0を変数numberに代入する
let sum = 0;
for (let i = 1; i <= number; i++){
    sum = sum + i;
}
console.log(sum);