let a=10;
let b=10;
let c=10;
console.log(a+b);
console.log(a+b+c);
console.log(typeof(a));
let name;
console.log(name);
let n=null;
console.log(n);
let k=4.567;
console.log(k);
console.log(typeof(k));
let n1=123445678789767;
let n2=456;
console.log(n1*n2);
let d=n1*n2;
let d2=BigInt(d);
console.log(n1+n2);

console.log(typeof(d2));

console.log(BigInt(d));//implicit type casting.
console.log(typeof(d));//to find the data type of variable. 
let s="12345";
console.log(s);
console.log(typeof(s));
console.log(10+s);//concatenation.
console.log(10*s);//implicit type conversion.

function sum(a,b) {//simple function.
    return (a+b);
    
}
console.log(sum(2,4));

function multy(a,b) { 
    return (a*b);
    
}
console.log(multy(3,4));

let tapu = (name)=>{
    console.log("This is my name:"+ name); //ARROW Function
}
tapu("NAMAN");

let goli =(n,m) => {
    return n+m;

}
console.log(goli(2,3));


// function multy2(c,d) {
//     console.log((c*d));
    
// }
// multy2(10,4); STACK OVERFLOW PRBLM CREATED.

function multy2(c,d) {
    console.log((c*d));
    
}
multy2(10,4);

// (function greet(){  console.log(greet("hello"));
// })

(function greet(){ console.log("hi hello"); //IIFE function
})()
// (function name(argumets){})() //syntax of IIFE function.

var sum=(a,b)=>{ //ARROW FUNCTION.
    return a+b;
}
console.log(sum(10,10));

let ab=8;
let p=9;
                                    //    control flow statement
if(ab>p){                      
    console.log("a is greater");
    
}
else{
    console.log("b is greater");
}

let x=10;
let y=10;
let z=10;

// use of &&, ||, ! operators in control flow statement.

if(x>y && x>z){console.log("x is greater");
}
else if(y>z && y>x){console.log("y is greatest");
}
else{
    console.log("z is greatest");
    
}

for(let i=1;i<5;i++){
    console.log("this is value of i:" + i);
    
}

for(l=2;l<=20;l=l+2){
    console.log(l);
}

let sa=1;
while(sa<5){
    console.log(sa);
    sa++;
}
let da=5

//do while loop exaample.
do{
    console.log("da");
    da--;
}while(da>2);

let arr=["a", 2,3,6.7,"b"]
console.log(arr);

(function multy(nm,mn){
    console.log(nm*mn);
})(3,6)

console.log((function multy2(n1,m1){ //IIFE Function with RETURN statement
    return (n1*m1);
})(4,5));

// Math. is a class in JS which has many pre defined functions like random, PI, SQRT2, max, min, sin, cos etc.

console.log(Math.random()); //PRE defined Function
console.log(Math.PI);
console.log(Math.SQRT2);
console.log(Math.max(2,4));
console.log(Math.min(2,4));
console.log(Math.sin(90));
console.log(Math.cos(0));



let big=10;
var small=20;
const ll=30;

function values() {
    let small=40;
    var big=80;
    // ll=100;
    console.log(small);
    console.log(big);
    console.log(ll);
}
values();

// let p=prompt("This is Gokul Dham Society");
// console.log(p);

 let arr1=[1,2,3,4,5,6,7,8];
 let arr2=[1,2,3,4,5,"tapu","sonu"];
 console.log(arr1);
 console.log(typeof(arr1));
 console.log(typeof(arr2));

 console.log(typeof(NaN));

 console.log(typeof(null));

//  rest and spread operator

// Example of rest.

 let[abc,bac,...rest]=arr1   
 console.log(abc);
 console.log(bac);
 console.log(rest);

//  SPREAD operator.

let f1=["mango","banana"]
let f2=[...f1,"apple","kiwi"]
console.log(f2);

// REST AND SPREAD COMBINED.

let tapusena=["sonu","gogi","goli","pinku","tapu"];
let gokuldham=[...tapusena,"bhide","jethalal"]
console.log(gokuldham);

let [nm,mn,db,...rest1]= gokuldham;
console.log(nm);
console.log(mn);
console.log(db);
console.log(rest1);

//Array destructuring
let ray=[2,4,5,6,7,8];
let[hj,hk]=ray;
console.log(hj);
hk=10;
console.log(hk);
console.log(ray);

let[x1, ,y1, , , , , , , , , , , , , ,d1 , , , , , , ,z1]=ray;
console.log(x1);
console.log(y1);
console.log(d1);
console.log(z1);

let a2=1;
let b2="1";

console.log(a2==b2);   
console.log(a2===b2);

let arr3=Array(20).fill(0); //all the elements in the array arr3 are 0, because fill function put the element in all indexed values.  
console.log(arr3);

let arr4=Array(12).fill("hello"); //all the elements in the array arr3 are 0, because fill function put the string in all indexed values.  
console.log(arr4);

arr3.push(3,4,5,6);
console.log(arr3);

arr3.unshift(-2,-1); //unshift-> used to push the elements at the front of the array. 
console.log(arr3);

arr3.unshift('goli',-2,'tapusena'); //unshift-> used to also push the strings at the front of the array. 
console.log(arr3);

let arr5=[1,2,3,4,5,6,7]
arr5.pop(); //to remove the element from the last.
console.log(arr5);

arr5.push(108); //to push the element from the last.
console.log(arr5);

arr5.shift();//to remove the element from the starting of the array.
console.log(arr5);

console.log(arr5.includes(2)); //includes function -> helps you to find whether the number is present in the array or not, and return true or false.

let arr6=[8,3,6.7,0,2, 11]
console.log(arr5.at(4)); // to find the element at a particular index.
console.log(arr5.concat(arr2)); //to join 2 arrays together.
console.log(arr5.indexOf(6)); //to find the index of an element.
console.log(arr5.length); //to find length of array.
console.log(arr5.reverse()); //to reverse an array.
console.log(arr6.sort()); //sort an array.

let obj={
    name:"tapu",
    age:"20",
    address:"gokuldham",
    obj1:{
        branch:"cs",
        cycle:'blue atlas'
    },
    color:{ obj3:["blue","red","green","pink"]}, //array inside object.
    bike:{
        goli:(param)=>{                          //Example of Function inside the object, undefined is in the terminal because there is no return statement in the function.
            console.log("This is a function inside the object " + param);
        },
        bhide:(param1)=>{                          //Example of Function inside the object.
            return ("This is a return function inside the object " + param1);
        },
        hathi:(param2)=>{   
            console.log("hathi family");                       //Example of Function inside the object.
            return ("This is a return function inside the object " + param2);
        }
    }
};

console.log(obj.name);
console.log(obj.name="jethalal"); //way to change the value of key value pair using command line statement
console.log(obj.age);
console.log(obj.address);
console.log(obj.color);
console.log(obj["color"]["obj3"]);  //another way to access value of object.
console.log(obj.obj1.branch);
console.log(obj.obj1.cycle);
console.log(obj.color.obj3);
console.log(obj.color);
console.log(typeof(obj));
console.log(obj.bike.goli("Hello ji")); 
console.log(obj.bike.bhide("leader"));
console.log(obj.bike.hathi("doctor"))



//  json{                                       EXAMPLE of JSON FILE.
//   "profileId": 10243,
//   "isActive": true,
//   "username": "tapu_99",
//   "fullName": "Tapu Sena",
//   "bio": null,
//   "accountBalance": 1500.75,
//   "contactInfo": {
//     "email": "tapu@gokuldham.com",
//     "phoneNumber": "+91 9876543210"
//   },
//   "skills": [
//     "JavaScript",
//     "HTML",
//     "CSS",
//     "Node.js"
//   ]
// }

//REST and SPREAD with OBJECTS.

let obj5={
    car:"bmw",
    color:"black",
    model:"M340i"
}
let obj6={
    ...obj5,   //SPREAD
    car1:"mercedes",
    color1:"blue",
    model1:"gle 4matic"
}

let {
    x2,...REST2   //REST
}=obj

console.log(x2);
console.log(REST2);
console.log(obj6);

let jsonconvert=JSON.stringify(obj6); //STRINGIFY-> to convert the objects into JSON file
console.log(jsonconvert); //PARSE-> to convert the JSON file into objects


//DATE operator IST(INDIAN STANDARD TIME ZONE)

let mydate=new Date()
console.log(mydate);
console.log(mydate.getDate());
console.log(mydate.getMonth());
console.log(mydate.getTime());
console.log(mydate.getHours());
console.log(mydate.getTimezoneOffset());
console.log(mydate.getMinutes());
console.log(mydate.getMilliseconds());
console.log(mydate.getUTCDate());
console.log(mydate.getUTCMonth());

console.log(Object.getOwnPropertyDescriptor(Math,"PI")); // predefiend object in JS-> ES6
console.log(Object.getOwnPropertyDescriptor(obj5,"car")); //my defined object in JS -> which can be writable, enumerable, and configurable.

//higher order function -> ex. map , reduce ,filter.

let num4=[1,2,3,4,5,6,7,8];

let num5=num4.map((indx)=>{ //map is a higher order function and arrow function inside is called call back function , indx is iterator.
    return indx*10;
})

console.log(num5);

let num6=num4.map((value, index ,array)=>{  //map is used to iterate in the array to find the value , index and array (original) 
    console.log(value);
    console.log(index);
    console.log(array);
})

let num7=num4.filter((val)=>{  //filter is used to print/filter the values from a certain number. ,also uses 3 paramateres value , index , array.
    return val>5;
})
console.log(num7);

let num8=num4.reduce((acc,val)=>{ //Reduce condenses an array of elements into a single final value by adding them up. and uses prevalue,inital value=0(always) and accumulator as parameters.
    return acc+val;
},0);
console.log(num8);

let d12=20;   //swapping 2 no.s without using 3rd varibale.
let e1=10;

d12=d12+e1;
e1=d12-e1;
d12=d12-e1;

console.log("d12 ki value " + d12,"e1 ki value "+ e1);





























 
 
 
 
 
 
 

















    