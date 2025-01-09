# Pinia, The Enjoyable Vue Store 
## Boilerplate Code

![Course Feature Image](https://vueschool.io/media/bc6229f7525d1df7f87bd22604eaa468/Pinia_not-transparent.png)

## How to Use

```
npx degit  vueschool/pinia-course-boilerplate 
```
```
npm install
npm run dev
```

[Checkout the course!](https://vueschool.io/courses/pinia-the-enjoyable-vue-store)

## Fundamentals

En Pinia, una biblioteca de gestión de estado para Vue.js, los conceptos de state, getters y actions son fundamentales para manejar el estado de la aplicación de manera estructurada y eficiente.  

### State
Es el estado centralizado de la tienda. Define las propiedades y datos que se almacenan en la tienda y que pueden ser accedidos y modificados por los componentes de Vue.  

### Getters
Son funciones que permiten derivar y calcular valores basados en el estado de la tienda. Son similares a las propiedades computadas de Vue y se utilizan para obtener datos procesados del estado.  

### Actions
Son funciones que permiten modificar el estado de la tienda. A diferencia de los mutations en Vuex, las actions en Pinia pueden ser asíncronas y pueden contener lógica de negocio compleja.