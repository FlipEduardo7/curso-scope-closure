function saludar(){
    let userName = "lalo";

    function displayUserName(){
        return "Hello "+userName;
    }
    return displayUserName;
}

const g = saludar();
console.log(g);
console.log(g());