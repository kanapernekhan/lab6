
let text = "Hello, World!";


for (let i = 0; i < 4; i++){

    console.log (text);

}


function problem2 (a,b){
    return 2*a + 2*b;
}
let per = 0;
per = problem2 (2,4);
console.log (per);

let pi = 3.14
function problem3 (r){
    return 2* pi *r*r;
}
area = problem3(4);
console.log(area);

function problem4(name) {
  return `Hi, ${name}!`;
}
console.log(problem4("Kana"));

function problem5(c,d){
    return c/d;
}
ratio = problem5(7,4);
console.log(ratio);

function problem6 (a,b){
    return a*a+b*b;
}
sum = problem6(5,4);
console.log(sum);

function problem7(a,b,c){
    return a*b*c;
}
product = problem7 (1,2,3);
console.log(product);

function problem8 (a){
    return a * 449.95;
}
convertion = problem8 (10);
console.log(convertion);

function problem9 (a){
    if (a>0){
        console.log(a, "is a Positive number");
    }
    else 
        console.log(a, "is a Negative number -",);
}
posorneg = problem9 (100);

function problem10 (a,b){
    if (a == b){
        console.log ("they are equal");
    }
    else if (a>b){
        console.log(a,"a is greater than b");
    }
    else 
        console.log(a, "a is less than b");
}
lessormore = problem10(-10,4);
function problem11 (a){
    if (a % 2==0){
        console.log ("even number");
    }
    if (a % 2 != 0){
         console.log("odd number");
    } 
}
evenorodd = problem11(-1);

function problem12 (a){
    if (a > 0 && a < 1){
        console.log ("in range [0,1]");
    }
    else
        console.log ("not in range of [0,1]");
}
between = problem12(0.5);

function problem13 (a,b,c){
    if (a>=b && a>=c){
        return a;
    }
    else if (b >= a && b >= c){
        return b;
    }
    if (c>=a && c >= b){
        return c;
    }
}
three = problem13(10,10,10);
console.log(three);
function problem14 (a,b,c){
    if (a+b<=c){
        return c
    } else if (a >b) {
        return a;
    } else 
        return b;
}
three = problem14(40,7,8);
console.log(three);






