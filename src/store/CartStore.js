import {defineStore} from 'pinia';

export const useCartStore = defineStore('CartStore', {
    //state
    state: () => {
        return {
            cart: {
                items: [],
            },
        }
    },
    //actions
    actions:{
        addItem(count, item){
            count= parseInt(count);
            for (let i = 0; i < count; i++) {
                this.cart.items.push(item);
            }
        },
    },
});