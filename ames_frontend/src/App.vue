<template>
  <div id="app">
    <!-- Aquí va el contenido común a todas las vistas, como encabezado, barra de navegación, etc. -->

    <!-- El componente router-view mostrará la vista asociada a la ruta actual -->
    <router-view></router-view>

    <!-- Aquí va el contenido común a todas las vistas, como pie de página, etc. -->
  </div>
</template>

<style>
  
</style>

<script>
// Importa Vue Router para poder utilizarlo en App.vue
import { useRouter } from 'vue-router';

export default {
  name: 'App',
  setup() {
    // Obtiene la instancia de Vue Router para utilizarla en el setup de la aplicación
    const router = useRouter();

    return {
      router 
    };
  }
};
</script>
