function suma(num){
    let n1 = num;

    function suma2(numb){
        let n2 = numb;

        function reSuma(){
            if(n1 === undefined){
                console.log(n2);
            }
            else if(n2 === undefined){
                console.log(n1);
            } else {
                console.log(n1 + n2);
            }

        }
        reSuma();
    }
    suma2(3);
}

suma(2);