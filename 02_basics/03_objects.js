//singleton
//object.create -constructor method
//object literals
const mysym=Symbol("key1")
const jsuser={
    name:"hitesh",[mysym]:"mykey1",age:18,location:"jaipur",email:"hitesh@google.com",isloggedin:false,lastloggedindays:["monday","Saturday"]
    //tw isme apn kuch bhi add kr skte array ,boolean,number,symbol

}
// console.log(jsuser.email)
// console.log(jsuser["email"])
// console.log(jsuser[mysym])
jsuser.email="hitesh12@gmail.com"   
//Object.freeze(jsuser)
jsuser.email="ch@google.com"
// console.log(jsuser)
jsuser.greeting=function(){
    console.log("hello")
}
jsuser.greetingtwo=function(){
    console.log('hello,${this.name}');
}
console.log(jsuser.greeting())
console.log(jsuser.greetingtwo())
