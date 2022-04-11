// function alerta() {
//     alert("¡JavaScript está funcionando correctamente!");
//   }

let variableSinValor
let booleano1= true;
let booleano2= false;
const PI= 3.14;
const TAU= 2 * PI;
const miNombre= "Gabriel";
const miNumeroFav=  777;
const boolean= true;
console.log(miNombre.length);
console.log(typeof miNumeroFav);
const ejercicio=  "Mi nombre es Euralio";
const ejercicio1=  "y mi numero favorito es ";
const ejercicio2=  7;
console.log(ejercicio + " " + ejercicio1+ejercicio2);
const ejercicio3=  "Seré un crack en JavaScript al terminar el bootcamp";
console.log(ejercicio3.toUpperCase());
let text = "Hola soy un crack";
console.log(text.slice(0, 5));
console.log(typeof String(miNumeroFav));
const dogName = 'Fluffy';
const tl="My dog, ${dogName}, is a great pet!";
console.log(tl); 
function decimals(n, d) {
    if ((typeof n !== 'number') || (typeof d !== 'number'))
      return false;
           n = parseFloat(n) || 0;
       return n.toFixed(d);
       }
console.log(decimals(PI, 2));
const arrayNumeros=  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrayNumeros2=  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const arrayNumerosPares=  [0, 2, 4, 6, 8];
const arrayNumerosNeg=  [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];
const holaMundo= ['Hola', 'Mundo'];
const loGuardoTodo= ['hola', 'que', 23, 42.33, 'tal'];
const arrayDeArrays=  [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']];
console.log(loGuardoTodo.length);
const nuevoElemento=  "elemento";
loGuardoTodo.push(nuevoElemento);
console.log(loGuardoTodo);
console.log(arrayNumeros.reverse());
console.log(arrayNumeros2);
console.log(loGuardoTodo[1]);
loGuardoTodo.push("Euralio");
console.log(loGuardoTodo);
const Coche = {
    marca: "Mustang",
    modelo: "Modelito",
    matricula: "5648415ASD"
};
const Casa = {
    codPostal: 46790,
    calle: "De laamargura",
    portal: 5,
    piso: 5
}
const FullStackDeveloper = {
    lenguajes: ["javascript", "brainfuck"],
    proyectos:["mi página personal", "los ejercicios de sofia ger y ivan"] 
}
const Perro = {
    raza: "york",
    color: "verde",
    nombre: "LMAO",
    edad: 5
}
const Noticia = {
    titular: "Por la calle",
    cuerpo: "De laamargura"
}
const Persona = {
    nombre: "Bugle",
    apellidos: "Rocks",
    edad: 25
}
console.log(Persona.nombre + FullStackDeveloper.lenguajes[0]);
const Portatil = {
    marca: "Slimbook"
}
console.log(Portatil.marca);
console.log(Portatil["marca"]);
const Concierto = {
    grupos: ["Sum 41", "ACDC"]
}
console.log(Concierto.grupos);
const Led = {
    rojo: 255,
    verde: 200,
    azul: 190
}
const RGB=[]
RGB.push(Led.rojo)&&RGB.push(Led.verde)&&RGB.push(Led.azul);
console.log(RGB);
const O_Error ={
    código:"0 Error"
}
console.log(O_Error.código);
const Grupo={
    integrantes:["bajo", "guitarra"]
}
const integrantes = Grupo.integrantes;
console.log(integrantes);
const Impresora={
    tinta: {rojo:"rojo", verde:"verde", azul:"azul"}
}
const nivelesTinta = Impresora.tinta;
console.log(nivelesTinta);
const Movil = {
    especificaciones: ["lol"]
}
const espe = Movil.especificaciones;
console.log(espe);
Portatil.marca ="MSI";
console.log(Portatil.marca);
console.log(Concierto.grupos.push("Guns N' Roses"));
Concierto.fecha = "Hoy";
Concierto.fecha = new Date();
console.log(Concierto.fecha);
delete Grupo.integrantes[0];
console.log(Grupo.integrantes.length);