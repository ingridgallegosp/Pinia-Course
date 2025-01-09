import {defineStore}  from 'pinia';
import products from '../data/products.json';

//Definir la tienda necesita dos argumentos, el nombre o id de la tienda y las opciones
// defineStore ('name-or-ID',{options: state, actions, getters})

export const useProductStore= defineStore('ProductStore', {
    // state - funcion que retorna un estado inicial
    /*State: Es el estado centralizado de la tienda. Define las propiedades y datos que se almacenan en la tienda y que pueden ser accedidos y modificados por los componentes de Vue.*/
    state: () => {
        return{
            products,
        }
    },
    // actions
    /*Actions: Son funciones que permiten modificar el estado de la tienda. A diferencia de los mutations en Vuex, las actions en Pinia pueden ser asíncronas y pueden contener lógica de negocio compleja.*/

    // getters
    /*Getters: Son funciones que permiten derivar y calcular valores basados en el estado de la tienda. Son similares a las propiedades computadas de Vue y se utilizan para obtener datos procesados del estado.*/
})