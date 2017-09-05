var lines;
Array.prototype.removeItem = function(item){
    var pos = this.indexOf(item);
    if(pos > -1){
        this.splice(pos, 1);
    }
}; 
while(lines = readline()){
  var n = +lines;
  for(var i = 0;i<n;i++){
    var str = readline();
    var arr = str.split("");
    var numArr = [];
    while(arr.indexOf('G') > -1){   //有EIGHT
        numArr.push(0);
        arr.removeItem('E');
        arr.removeItem('I');
        arr.removeItem('G');
        arr.removeItem('H');
        arr.removeItem('T');
    }
    while(arr.indexOf('H') > -1){   //有THREE
        numArr.push(5);
        arr.removeItem('T');
        arr.removeItem('H');
        arr.removeItem('R');
        arr.removeItem('E');
        arr.removeItem('E');
    }
    while(arr.indexOf('Z') > -1){   //有ZERO
        numArr.push(2);
        arr.removeItem('Z');
        arr.removeItem('E');
        arr.removeItem('R');
        arr.removeItem('O');
    }
    while(arr.indexOf('X') > -1){   //有SIX
        numArr.push(8);
        arr.removeItem('S');
        arr.removeItem('I');
        arr.removeItem('X');
    }
    while(arr.indexOf('S') > -1){   //有SEVEN
        numArr.push(9);
        arr.removeItem('S');
        arr.removeItem('E');
        arr.removeItem('V');
        arr.removeItem('E');
        arr.removeItem('N');
     }
    while(arr.indexOf('V') > -1){   //有FIVE
        numArr.push(7);
        arr.removeItem('F');
        arr.removeItem('I');
        arr.removeItem('V');
        arr.removeItem('E');
    }
    while(arr.indexOf('F') > -1){   //有FOUR
        numArr.push(6);
        arr.removeItem('F');
        arr.removeItem('O');
        arr.removeItem('U');
        arr.removeItem('R');
    }
    while(arr.indexOf('I') > -1){   //有NINE
        numArr.push(1);
        arr.removeItem('N');
        arr.removeItem('I');
        arr.removeItem('N');
        arr.removeItem('E');
    }
    while(arr.indexOf('N') > -1){   //有ONE
        numArr.push(3);
        arr.removeItem('O');
        arr.removeItem('N');
        arr.removeItem('E');
    }
    while(arr.indexOf('T') > -1){   //有TWO
        numArr.push(4);
        arr.removeItem('T');
        arr.removeItem('W');
        arr.removeItem('O');
    }
    if (arr.length == 0) {
        numArr.sort();
    }
    console.log(numArr.join(""));
  }  
}  






/*
var readline = require('readline');
const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
});
var countLine = 0;
var tokens = [];
rl.on('line', function(line){
   tokens.push(line);
   if(countLine == parseInt(tokens[0])){
     for(var i = 1;i<tokens.length;i++){
        var str = tokens[i];
        var arr = str.split("");
        var numArr = [];
        while(arr.indexOf('G') > -1){   //有EIGHT
            numArr.push(0);
            removeItem('E',arr);
            removeItem('I',arr);
            removeItem('G',arr);
            removeItem('H',arr);
            removeItem('T',arr);
        }
        while(arr.indexOf('H') > -1){   //有THREE
            numArr.push(5);
            removeItem('T',arr);
            removeItem('H',arr);
            removeItem('R',arr);
            removeItem('E',arr);
            removeItem('E',arr);
        }
        while(arr.indexOf('Z') > -1){   //有ZERO
            numArr.push(2);
            removeItem('Z',arr);
            removeItem('E',arr);
            removeItem('R',arr);
            removeItem('O',arr);
        }
        while(arr.indexOf('X') > -1){   //有SIX
            numArr.push(8);
            removeItem('S',arr);
            removeItem('I',arr);
            removeItem('X',arr);
        }
        while(arr.indexOf('S') > -1){   //有SEVEN
            numArr.push(9);
            removeItem('S',arr);
            removeItem('E',arr);
            removeItem('V',arr);
            removeItem('E',arr);
            removeItem('N',arr);
        }
        while(arr.indexOf('V') > -1){   //有FIVE
            numArr.push(7);
            removeItem('F',arr);
            removeItem('I',arr);
            removeItem('V',arr);
            removeItem('E',arr);
        }
        while(arr.indexOf('F') > -1){   //有FOUR
            numArr.push(6);
            removeItem('F',arr);
            removeItem('O',arr);
            removeItem('U',arr);
            removeItem('R',arr);
        }
        while(arr.indexOf('I') > -1){   //有NINE
            numArr.push(1);
            removeItem('N',arr);
            removeItem('I',arr);
            removeItem('N',arr);
            removeItem('E',arr);
        }
        while(arr.indexOf('N') > -1){   //有ONE
            numArr.push(3);
            removeItem('O',arr);
            removeItem('N',arr);
            removeItem('E',arr);
        }
        while(arr.indexOf('T') > -1){   //有TWO
            numArr.push(4);
            removeItem('T',arr);
            removeItem('W',arr);
            removeItem('O',arr);
        }
        if (arr.length == 0) {
            numArr.sort();
        }
        function removeItem(item,array){        //数组根据值来删除对应元素 
            var pos = array.indexOf(item);
            if(pos > -1){
                array.splice(pos, 1);
            }
        }
        console.log(numArr.join(""));

     }
   }else{
       countLine++;
   }
});

*/





