process.stdin.resume();
process.stdin.setEncoding('utf8');
// Your code here!

/*===== ランダム =====*/
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

/*===== 表示 =====*/
function print(array){
    for(var i = 0; i < array.length; i++){
        console.log("num[" + i + "]=" + array[i]);
    }
}

/*===== バブルソートアルゴリズム =====*/
function sort(array){
    for(var j = 0; j < array.length; j++){
        for(var i = 1; i < array.length; i++){
            if(array[i-1] > array[i]){
                var z = array[i-1];
                array[i-1] = array[i];
                array[i] = z
            }
        }
    }
    return array;
}

/*===== メイン関数 =====*/
function main(){
    let num = [];
    
    for(var i = 0; i < 10; i++){
        num[i] = getRandomInt(100);
    }
    
    console.log("rand");
    print(num);
    num = sort(num);
    console.log("sort");
    print(num);
}

main();