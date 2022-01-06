/*Recorrer el arreglo definido en la opción anterior y mostrarlo aplicando un do-while.*/

/*Pasamos el arreglo*/
const { comida } = require("./Ejercicio 3");
/*Mi contador va a ser la variable x*/
let x = 0;
do{
    console.log("◉ Comida  "+ (x+1));
    console.log(comida[x]);
    x++;
}
while  (x< comida.length)