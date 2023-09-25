"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

BinarySearchTree.prototype.size = function (value) {
  var count = 1;
  if (this.left) count += this.left.size(value);
  if (this.right) count += this.right.size(value);
  return count;
};

function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.insert = function (value) {
  if (value < this.value) {
    if (!this.left) {
      this.left = new BinarySearchTree(value);
      return value;
    } else {
      this.left.insert(value);
    }
  } else {
    if (!this.right) {
      this.right = new BinarySearchTree(value);
      return value;
    } else {
      this.right.insert(value);
    }
  }
};
// contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
BinarySearchTree.prototype.contains = function (value) {
  if (this.value === value) return true;
  if (this.left && this.left.contains(value)) return true;
  if (this.right && this.right.contains(value)) return true;
  return false;
};

BinarySearchTree.prototype.depthFirstForEach = function (cb, order) {
  switch (order) {
    case "post-order":
      this.left && this.left.depthFirstForEach(cb, order);
      this.right && this.right.depthFirstForEach(cb, order);
      cb(this.value);

      break;
    case "pre-order":
      cb(this.value);
      this.left && this.left.depthFirstForEach(cb, order);
      this.right && this.right.depthFirstForEach(cb, order);

      break;
    default:
      this.left && this.left.depthFirstForEach(cb, order);
      cb(this.value);
      this.right && this.right.depthFirstForEach(cb, order);
      break;
  }
};

BinarySearchTree.prototype.breadthFirstForEach = function (cb, pendiente) {
  var pendiente = [];

  cb(this.value);
  this.left && pendiente.push(this.left);
  this.right && pendiente.push(this.right);

  if (pendiente.length > 0) {
    pendiente.shift().breadthFirstForEach(cb, pendiente);
  }
};
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
