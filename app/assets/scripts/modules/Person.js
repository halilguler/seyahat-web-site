function Person(fullname,favColor){
    this.name = fullname;
    this.favoriteColor = favColor;
    this.greet = function(){
        console.log("Helloi my name is " + this.name + " and my favorite color is " + this.favoriteColor + ".")
    }
}