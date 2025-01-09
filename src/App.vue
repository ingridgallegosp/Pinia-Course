<script setup>
import TheHeader from "@/components/TheHeader.vue";
import ProductCard from "@/components/ProductCard.vue";
import { useProductStore }  from '@/store/ProductStore';
import { useCartStore } from '@/store/CartStore';

const { products } = useProductStore()
const { addItem } = useCartStore()

//const productStore = useProductStore()
//const cartStore = useCartStore()

/* Added to CartStore methods
const addToCart = (count, product) => {
    count = parseInt(count)
    //direct mutations- $patch - se puede reemplazar implementando un metodo actions en el store
    cartStore.$patch((state) => {
        for (let i = 0; i < count; i++) {
            state.cart.items.push(product)
        }
    })
}
*/

</script>

<template>
  <div class="container">
    <TheHeader />
    <ul class="sm:flex flex-wrap lg:flex-nowrap gap-5">
      <ProductCard
        v-for="product in products"
        :key="product.name"
        :product="product"
        @add-to-cart="addItem($event, product)"
      />
    </ul>
    
  </div>
</template>
