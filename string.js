//String indexOf()
// let text = "Please locate where 'locate' occurs!";
// let index = text.indexOf("locate");
// console.log(index);


//In we have first create the object inside the object we called the function which is nothing but methods 

//method can be called in two ways one is dot and secong is bracket
function standard (){
    console.log("MCA")
}

let student = {
    name:"Gayatri",
    key:function add(a,b){
        return c= a+b;
    }
}
console.log(student.key(10,80));


//methods by dot to call the function from object
const myObject = {
    myMethod: function() {
      console.log("Hello, I am a method by dot!");
    }
  };
  myObject.myMethod();

   //method by bracket to call the function
   const myObject1 = {
    myMethod: function() {
      console.log("Hello, I am a method by bracket!");
    }
  };
   myObject1['myMethod']();

   //String Length

   let text ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   let Length = text.length;
   console.log(Length);

  //String charAt()

  let text1 = "Hello Object";
  let char =text1.charAt(2);
  console.log(char);

  //String charCodeAt()

  let text2 = "I will become the developer";
  let char1 = text2.charCodeAt(0);
  console.log(char1);

  //string at()

  const name  = "Gayatri"
  let letter = name.at(2);
  console.log(letter);

  //String slice()

  //String.slice(startIndex, endIndex);
  let originalString = "Hello, World!";

  let slicedString = originalString.slice(0,8);
  console.log(slicedString);


  //string substring()

  let str = "Apple, Banana, Kiwi";
  let fruit = str.substring(7,13);
  console.log(fruit);

  //string substr()

  let str1 = "Pecock, Cuckoo, crow";
  let bird = str1.substr(7);
  console.log(bird);

  //string concat()

  let fname = "Gayatri";
  let lname ="Pallan"
  let mname = "Vinayagam";
  let fullname = fname + " " + mname + " "+ lname;
  console.log(fullname);

  

  //String trimStart() >>>>It will remove the space the present in the value of key know as word 

  let word = "     Hello Coders !.......        ";
  let result = word.trimStart();
  console.log(result);

  