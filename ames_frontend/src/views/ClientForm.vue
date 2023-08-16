<template>
  <div class="flex card justify-content-center align-items-center" style="height: 100vh;">
    <div class="card p-5 shadow-8 border-round">

      <div class="flex align-items-center justify-content-between mb-4">
        <span class="text-xl text-900 font-bold">{{ isUpdating ? 'Actualitzar' : 'Crear' }} Client</span>
        <Button class="hidden-sm hidden-xs" @click="redirectToClientsPage"> <i class="pi pi-home mr-2"></i>Tornar</Button>
        <Button class="hidden-md hidden-lg" @click="redirectToClientsPage"> <i class="pi pi-home"></i></Button>
      </div>

      <form @submit.prevent="saveClient" class="formgrid grid max-w-30rem">
        <div class="field col-12 md:col-12 mb-3">
          <label for="name">Nom</label>
          <InputText v-model="client.name" id="name" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" required />
        </div>
        <div class="field col-12 md:col-12 mb-3">
          <label for="lastName">Cognoms</label>
          <InputText v-model="client.lastName" id="lastName" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" required />
        </div>
        <div class="field col-12 md:col-7 mb-3">
          <label for="email">Email</label>
          <InputText v-model="client.email" id="email" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" required />
        </div>
        <div class="field col-12 md:col-5 mb-3">
          <label for="phone">Telèfon</label>
          <InputText v-model="client.phone" id="phone" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" required />
        </div>
        <div class="field col-12 mb-3">
          <label for="address">Adreça</label>
          <InputText v-model="client.address" id="address" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" required />
        </div>

        <div class="card flex flex-wrap gap-4 ml-2 py-4 mb-3">
          <div class="flex align-items-center">
            <Checkbox v-model="client.preferential" inputId="preferential" name="preferential" :binary="true" />
            <label for="preferential" class="ml-2">És un client preferencial?</label>
          </div>
          <div class="flex align-items-center">
            <Checkbox v-model="client.hasDiscount" inputId="hasDiscount" name="hasDiscount" :binary="true" />
            <label for="hasDiscount" class="ml-2">Té descompte?</label>
          </div>
        </div>

        <div class="col-12">
          <Button type="submit">
            <i v-if="!isUpdating" class="pi pi-user-plus mr-2"></i>
            <i v-else class="pi pi-check mr-2"></i>
            {{ isUpdating ? 'Actualizar' : 'Crear' }}
          </Button>
        </div>
      </form>
    </div>
  </div>
</template>

<style>
@media (max-width: 767px) {
  .hidden-xs {
    display: none !important;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .hidden-sm {
    display: none !important;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .hidden-md {
    display: none !important;
  }
}
@media (min-width: 1200px) {
  .hidden-lg {
    display: none !important;
  }
}
</style>

<script>
import { mapActions, mapGetters } from 'vuex';


export default {
  name: 'ClientForm',
  data() {
    return {
      client: {
        name: '',
        lastName: '',
        phone: '',
        email: '',
        address: '',
        preferential: false,
        hasDiscount: false,
      },
    };
  },
  computed: {
    ...mapGetters(['getClientById']),
    isUpdating() {
      return !!this.$route.params.id; 
    },
  },
  methods: {
    ...mapActions(['fetchClientData', 'updateClient', 'createClient']),
    saveClient() {
      const action = this.isUpdating ? this.updateClient : this.createClient;
      action(this.client)
        .then(response => {
          console.log(this.isUpdating ? 'Cliente actualizado' : 'Nuevo cliente creado', response);
          this.$router.push('/clients');
        })
        .catch(error => {
          console.error(this.isUpdating ? 'Error al actualizar el cliente:' : 'Error al crear el cliente:', error);
        });
    },

    redirectToClientsPage() {
      this.$router.push('/clients');
    }
    // Resto de los métodos
  },
  mounted() {
    if (this.$route.params.id) {
      const clientId = this.$route.params.id;
      this.fetchClientData(clientId).then(client => {
        this.client = client;
      });
    }
  },
};
</script>