/*
Crear una función que reciba N como parámetro y genere la tabla de multiplicar por consola utilizando
recursividad.
*/

function tabla(N)
{
    let n = 11;
    for(let i = 1; i < n; i++)
    {
        console.log(N + " x " + i + " = "+ (N * i ));
    }
}
tabla(9);
