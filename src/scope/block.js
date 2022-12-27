function fruits(){
    if(true){
        var fruit1 = "apple"; //function scope
        let fruit2 = "orange"; //block scope
        const fruit3 = "kiwi"; //block scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}