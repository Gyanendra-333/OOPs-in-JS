
class thisDemo{
    msg = "this is the keyword demo";
    getMsg (){
        return this.msg;
    }
}
console.log(new thisDemo().getMsg());

// var demo =this;
// console.log(demo);


"use strict";
function demo(){
    return this;
}
console.log(demo());

