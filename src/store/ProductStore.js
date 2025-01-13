import {defineStore}  from 'pinia';
import products from '../data/products.json';

//Definir la tienda necesita dos argumentos, el nombre o id de la tienda y las opciones
// defineStore ('name-or-ID',{options: state, actions, getters})

export const useProductStore= defineStore('ProductStore', {
    // state - funcion que retorna un estado inicial
    state: () => {
        return{
            products,
        }
    },
})