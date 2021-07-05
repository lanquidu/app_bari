/*La registraduría nacional del estado civil requiere de un sistema web el cual 
le permita calcular cuantos días calendario han transcurrido a partir de una 
fecha de nacimiento que se ingrese al sistema hasta el día de hoy.


Indicaciones:

- El sistema deberá recibir 2 parámetros: Número de identificación y fecha 
de nacimiento.

- Dicho sistema deberá contar con las validaciones necesarias para 
permitir ingresar solo fechas de nacimiento válidas (no debe ser superior a 
la fecha actual).

- El sistema deberá retornar un mensaje como este: "El ciudadano 
con identificación 12345 y con fecha de nacimiento 01/01/2021 tiene 151 
días de vida."*/

function born(cc, dateBorn){
    const  j= new Date(dateBorn);
    const g = new Date();
    
    let h = (g-j)
    z= Math.floor (h/(1000*60*60*24))

    

    if(j > g) return "La fecha de nacimiento no debe ser superior a la fecha actual";
    else{ 
    return `El ciudadano con identificación ${cc} y con fecha de nacimiento ${dateBorn} tiene ${z} días de vida`;
    }
}
    //prueba de programa
    console.log(born(26951026, "1989/04/30"))
    console.log(born(2695333, "2022/11/10"))