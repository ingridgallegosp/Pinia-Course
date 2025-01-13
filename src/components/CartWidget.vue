<script setup>
// imports
import { ref } from "vue";
import CartItem from "./CartItem.vue";
import { useCartStore } from '@/store/CartStore';

// data
const active = ref(false);
const cartStore = useCartStore();
</script>

<template>
    <div class="relative">
        <!-- Icon that always shows -->
        <div class="cursor-pointer" @click="active = true">
          <fa icon="shopping-cart" size="lg" class="text-gray-700" />
          <div class="cart-count absolute"> {{ cartStore.count }}</div>
        </div>
    <!-- Modal Overlay only shows when cart is clicked on -->
        <AppModalOverlay  :active="active" @close="active = false">
            <div v-if="!cartStore.isEmpty">
                <ul class="items-in-cart">
                    <CartItem
                        v-for="(items, name) in cartStore.groupedItems"
                        :key="name"
                        :product="items[0]"
                        :count="cartStore.groupCount(name)"
                        @updateCount="cartStore.setItemCount(items[0], $event )"
                        @clear="cartStore.removeItem(name)"
                    />
                </ul>
                <div class="flex justify-end text-2xl mb-5">
                    Total: <strong> ${{cartStore.totalSum}}</strong>
                </div>
                <div class="flex justify-end">
                    <AppButton class="secondary mr-2" @click="cartStore.$reset()" >Clear Cart</AppButton>
                    <AppButton class="primary" @click="cartStore.checkout()">Checkout</AppButton>
                </div>
            </div>
            <div v-else> Cart is Empty</div>
        </AppModalOverlay>
    </div>
</template>

<style lang="pcss" scoped>
.items-in-cart{
  @apply mb-5;
}
.items-in-cart li{
  @apply flex justify-between p-2;
}
.items-in-cart li:nth-of-type(even){
  @apply bg-gray-300;
}
</style>
