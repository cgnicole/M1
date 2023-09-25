// no estamos guardando un objeto dentro de otro si no que estamos enlazandolos

// en a estamos guaradando un arefenria de otro objeto

//tengo una propiedad que apunto a otro objeto
// const objet1 = {
//   a: 1,
//   burros: 2,
// };

// const objet2 = {
//   anchoas: 3,
//   bultos: 4,
// };

// objet1.a = objet2;

// console.log(objet1);

// 🌳 ARBOLES BINARIOS DE BUSQUEDA

//CLAVES
// 1) entender que quiero que haga mi funcion
// 2) confiar en que mi funcion hace lo que tiene que hacer
// solo nos van a pasar un numeros , idenpendientemente si tenemos un array, string, booleanos. lo que se evalua el final es la suma de los datos

// ❗️ METODO INSERT -  sirve para insertar nodos al arbol

// PASOS

// 1) me pregunto si es mayor o menor, en base de eso de donde ubicarlo, si es menor a la izquierda si es mayor a la derecha

// 2) me pregunto si hay algo, si no hay nada inserto el nodo nuevo

// 3) si hay algo le pregunto al nodo siguiente si es mayor o menor para saber donde ubicar, cuando ya se donde ubicar le pregunto si hay algo, si no hay nada insserto

// 1. tenemos un arbolito que seria la BinariSearchTree

function BinariSearchTree(value) {
  // las propiedades que tiene ese arbolito son el valor, el valor que tiene el nodo (el arbol)
  this.value = value;
  // tiene un nodo hacia la izquierda vacio
  this.left = null;
  // tiene un nodo hacia la derecha vacio
  this.right = null;
}

BinariSearchTree.prototype.insert = function (value) {
  //cuando llega el valor que se pregunta? - si es mayor o menor.

  // si el value que nos llega como parametro en la funcion BinariSearchTree es menor que nuestro this.value = value;
  if (value < this.value) {
    // si esto es true es menor

    //como ya sabemos que los valores menores a value van a ser ubicados a la izquierda

    //me pregunro si this.left esta vacio, que this.left sea igual a un nuevo nodo

    if (!this.left) {
      this.left = new BinariSearchTree(value);
      return value;
    } /*si hay algo, es decir si hay un nodo*/ else {
      this.left.insert(value);
    }
  } else {
    // si esto es falso es mayor
  }
};

var miArbol = new BinariSearchTree(10);

console.log(miArbol);
miArbol.insert(7);
console.log(miArbol);
miArbol.insert(2);
console.log(miArbol);

// ❗️ METODO SIZE - cuenta la cantidad de nodos que tiene el arbol

//PASOS

// 1) retorna 1 (que es el miso, porque el es un nodo) + todo lo que tiene a la izquierda + todo lo que tiene a la derecha

BinariSearchTree.prototype.size = function (value) {
  // primero va tener una variable inicial donde se va almacenar el total de nodos que tiene, se va a inizializar en 1

  var count = 1;
  if (this.left) count += this.left.size();
  if (this.right) count += this.right.size();

  return count;
};
console.log(miArbol.size());

// ❗️FORMAS DE RECORRER UN ARBOL CON EL METODO depthFirstForEach

// estos metodos reciben una funcion y la ejecutan para todos los nodos de albol pero en un modo determinado

// quiero que ejecute una cb pasando como argumento el value de cada node en un orden determinado

function tukis(value) {
  console.log(value);
}

BinariSearchTree.prototype.depthFirstForEach = function (cb) {
  // ❎ PRE orden depthFirstForEach =>  nodo - izquierda - derecha
  // cb(this.value);
  // this.left.depthFirstForEach(cb);
  // this.right.depthFirstForEach(cb);
  // ❎ POST orden depthFirstForEach => izquierda - derecha - nodo;
  // this.left.depthFirstForEach(cb);
  // this.right.depthFirstForEach(cb);
  // cb(this.value);
  //❎ IN order depthFirstForEach => izquierda - nodo - derecha
  // this.left.depthFirstForEach(cb);
  // cb(this.value);
  // this.right.depthFirstForEach(cb);
};

// ❗️ FORMAS DE RECORRER UN ARBOL USANDO EL METODO breadthFirstForEach

// 1) ejecuto la cb para el valor del nodo actual
// 2) si tengo algo a la izquierda guardo ese nodo en un array
// 3) si tengo algo a la derecha guardo ese nodo en un array
// 4) mientras tengo algo en la fila pendiente, pepetir el proceso

miArbol.depthFirstForEach(tukis);

function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.insert = function (value) {
  if (value < this.value) {
    if (this.left) {
      return this.left.insert(value);
    } else {
      this.left = new BinarySearchTree(value);
      return value;
    }
  } else {
    if (this.right) {
      return this.right.insert(value);
    } else {
      this.right = new BinarySearchTree(value);
      return value;
    }
  }
};

//ALGORITMOS

//una serie de pasos precisos y rordenados a seguir para resolver un problema
// es compresible y eficiente: la capacidad de resolver un problema en un tiempi y espacio determiando
// dar menos pasos, menos tiempo

// algoritmos de ordenmaiento iterativo

//ORDENAR ELEMENTOS DE UN ARRAY - LOS ELEMNTOS SIEMPRE VAN A SER NUMEROS

//BUBBLE SORT: compara pares de elementos

// 1) comparacion de dos en dos
// 2) comparacion mayor que menor que
// 3) compara i con i+1
// 4) repetir hasta que este ordenado

//INSERTION SORT: saca el elemento y luego lo inserta en el lugar correcto

//TOMA EL ELEMENTO Y SE FIJA SI EL DE ADELANTE ES MAYOR, SI ES MAYOR SE MUEVE HACIA TRAS Y EL MENOR VA ADELANTE

// 1) empeiza en la segunda posicion
// 2) se encontro con uno menor
// 3) que llegue al final

// SELECTION SORT: busca el elemento mas pequeño de una lista, hace el recorrido hasta el final buscado el mas pequeño y luego lo itercambia con el primer elemento

// 1) empieza con dos recorridos, el primero que fija la posicion para intercabiar y luego avanzar y el segundo que va recorriendo hasta encontrar cual es el menor
// 2) buscar el mínimo elemento de la lista intercambiarlo con el primero
// 3) buscar el siguiente mínimo en el resto de la lista (del segundo elemento al último) intercambiarlo con el segundo
// 4) buscar el siguiente mínimo en el resto de la lista (del tercero al último) intercambiarlo con el tercero
// Repetir hasta el final de la lista

// esta es una prueba para ver si el repositorio del modulo 1 esta bien clonado
