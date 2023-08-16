
<template>
  <div>
    <DataTable  :value="filteredClients(searchTerm)" sortMode="multiple" tableStyle="min-width: 50rem">
      <template #header>
          <div class="flex flex-wrap align-items-center justify-content-between gap-1 grid">
              <span class="text-xl text-900 font-bold">Clients</span>
              <span class="p-input-icon-left">
                <i class="pi pi-search" />
                <InputText class="max-w-30rem" size="small" v-model="searchTerm" placeholder="Cerca un client" />
              </span>
                <Button class="hidden-xs hidden-sm" @click="redirectToNewClientForm"><i class="pi pi-user-plus mr-2"></i> Crear Client</Button>
                <Button class="hidden-md hidden-lg" @click="redirectToNewClientForm"><i class="pi pi-user-plus"></i></Button>
          </div>

      </template>
      <Column sortable field="name" header="Nom"></Column>
      <Column sortable field="lastName" header="Cognoms"></Column>
      <Column sortable field="phone" header="Telèfon"></Column>
      <Column sortable field="email" header="Email"></Column>
      <Column sortable field="address" header="Adreça"></Column>
      <Column sortable field="hasDiscount" header="Descompte">
        <template #body="rowData">
          <i :class="{'pi pi-check': rowData.data.preferential, 'pi pi-times': !rowData.data.preferential}"></i>
        </template>
      </Column>
      <Column sortable field="preferential" header="Preferencial">
        <template #body="rowData">
          <i :class="{'pi pi-check': rowData.data.preferential, 'pi pi-times': !rowData.data.preferential}"></i>
        </template></Column>
      <Column header="Accions">
        <template #body="rowData">
          <Button class="hidden-xs hidden-sm" @click="editClient(rowData.data.id)"> <i class="pi pi-user-edit mr-2"></i>Editar</Button>
          <Button class="hidden-md hidden-lg" @click="editClient(rowData.data.id)"> <i class="pi pi-user-edit"></i></Button>
        </template>
      </Column>

      <template #footer> En total hi ha {{ clients ? clients.length : 0 }} clients. </template>
  </DataTable>
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
import { mapActions, mapGetters, mapState } from 'vuex';

export default {
  name: 'ClientList',
  computed: {
    ...mapGetters(['filteredClients']),
    ...mapState(['clients']),
  },
  methods: {
    ...mapActions(['fetchClients']),
    editClient(clientId) {
      this.$router.push(`/clients/${clientId}`);
    },
    redirectToNewClientForm() {
      this.$router.push('/clients/new');
    },
  },
  data() {
    return {
      searchTerm: '',
    };
  },
  watch: {
    searchTerm: {
      handler(newTerm) {
        this.filteredClients(newTerm);
      },
      immediate: true,
    },
  },      
  mounted() {
    this.fetchClients();
  },
};
</script>