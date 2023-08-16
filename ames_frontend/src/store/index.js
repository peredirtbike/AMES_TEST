import { createStore } from 'vuex'
import axios from 'axios'

const API_BASE_URL = 'http://localhost:8080/clients';

export default createStore({
  state: {
    clients: [],
  },
  mutations: {
    setClients(state, clients) {
      state.clients = clients;
    },
    updateClient(state, updatedClient) {
      const index = state.clients.findIndex(client => client.id === updatedClient.id);
      if (index !== -1) {
        state.clients.splice(index, 1, updatedClient);
      }
    },
    addClient(state, newClient) {
      state.clients.push(newClient);
    },
  },
  actions: {
    async fetchClients({ commit }) {
      try {
        const response = await axios.get(`${API_BASE_URL}/getAllClients`);
        commit('setClients', response.data);
      } catch (error) {
        console.error('Error al obtener los clientes:', error);
      }
    },

    async updateClient({ commit }, client) {
      try {
        const response = await axios.put(`${API_BASE_URL}/updateClient/${client.id}`, client);
        commit('updateClient', response.data);
        return response.data;
      } catch (error) {
        console.error('Error al actualizar el cliente:', error);
        throw error;
      }
    },

    async createClient({ commit }, client) {
      try {
        const response = await axios.post(`${API_BASE_URL}/newClient`, client);
        commit('addClient', response.data);
        return response.data;
      } catch (error) {
        console.error('Error al crear el cliente:', error);
        throw error;
      }
    },

    async fetchClientData(_, clientId) {
      try {
        const response = await axios.get(`${API_BASE_URL}/${clientId}`);
        return response.data;
      } catch (error) {
        console.error('Error al obtener los datos del cliente:', error);
        throw error;
      }
    },
  },
  getters: {
    filteredClients: (state) => (searchTerm) => {
      if (!searchTerm) {
        return state.clients;
      } else {
        return state.clients.filter(client => {
          return (
            client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            client.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            client.phone.includes(searchTerm) ||
            client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            client.address.toLowerCase().includes(searchTerm.toLowerCase())
          );
        });
      }
    },
    getClientById: (state) => (id) => {
      return state.clients.find(client => client.id === id);
    },
  },
});