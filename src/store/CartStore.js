import {defineStore} from 'pinia';
import { groupBy } from 'lodash';
import { useAuthStore } from '@/store/AuthUserStore';

export const useCartStore = defineStore('CartStore', {
    // state - funcion que retorna un estado inicial
    state: () => {
        return {
            cart: {
                items: [],
            },
        }
    },
    //getters - funcion que retorna un valor calculado
    getters:{
        /*count(){
            return this.cart.items.length;
        },
        isEmpty(){
            return this.count === 0;
        },*/

        // using arrow functions is possible, but it´s necessary to pass the state as an argument
        count: (state) => state.cart.items.length,
        isEmpty: (state) => state.count === 0,
        groupedItems: (state) => {
            const grouped = groupBy(state.cart.items, (item) => item.name);
            const sorted = Object.keys(grouped).sort();
            let inOrder= {};
            sorted.forEach((key) => inOrder[key] = grouped[key]);
            return inOrder;
        },
        groupCount:state => name => state.groupedItems[name].length,
        totalSum: (state) => state.cart.items.reduce((prevoiusItem, currentItem) => prevoiusItem + currentItem.price, 0),
    },
    //actions
    actions:{
        checkout(){
            const authUserStore = useAuthStore();
            alert(`${authUserStore.username} just bought ${this.count} worth of items at a total of $ ${this.totalSum}`);
            },
        addItem(count, item){
            count= parseInt(count);
            for (let i = 0; i < count; i++) {
                this.cart.items.push({ ...item });
            }
        },
        removeItem(name){
            this.cart.items = this.cart.items.filter(item => item.name !== name);
        },
        setItemCount(item, count){
           this.removeItem(item.name);
           this.addItem(count, item);
        },
    },
});