
class overlodaingExample{
    displayValue(value){
        console.log(`value :`, value);
    }
    displayValue(value,date){
        console.log(`value :`,value,`date :`,date);
    }
}
var obj= new overlodaingExample();
obj.displayValue(`test`);
obj.displayValue(`test`,`123`);