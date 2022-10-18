
class vehicle{
    colour;
    type;
    no_of_tyre;

    constructor(colour,type,no_of_tyre){
        this.colour=colour;
        this.type=type;
        this.no_of_tyre=no_of_tyre;
    }
}
var bike= new vehicle(`Red`,`Electric`,`2`);
console.log(bike);
console.log(bike.colour);



