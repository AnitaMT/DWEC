// Generador de números primos.

let numero1 = Number(prompt("Introduce un número: "));
let numero2 = Number(prompt("Introduce otro número: "));

console.log(`Los números primos entre ${numero1} y ${numero2} son: `)

    for(let i = numero1; i <= numero2; i++){
        let primo = true;
        for(j = 2; j < i; j++){
            if(i % j == 0){
                primo = false;
            }
        }
        if(primo){
            console.log(i);
        }
    }