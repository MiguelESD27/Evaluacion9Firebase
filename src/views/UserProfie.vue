<template>
    <v-container>
      <v-row v-if="user">
        <v-col>
          <p>{{ user.email }}</p>
          <v-btn @click="signOut">Cerrar Sesión</v-btn>
        </v-col>
      </v-row>
      <v-row v-else>
        <v-col>
          <p>Por favor, inicia sesión para ver el perfil.</p>
          <v-btn @click="signIn">Iniciar Sesión</v-btn>
        </v-col>
      </v-row>
      <v-row v-if="selectedHero">
        <v-col>
          <v-img :src="selectedHero.Imagen" aspect-ratio="2.75" class="rounded-image"></v-img>
          <v-card-title>{{ selectedHero.Nombre }}</v-card-title>
          <v-card-subtitle>{{ selectedHero.Funcion }}</v-card-subtitle>
          <v-card-text>Ataque: {{ selectedHero.Ataque }}</v-card-text>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import { auth, database } from '@/config/firebase';
  
  export default {
    data() {
      return {
        user: null,
        selectedHero: null,
      };
    },
    mounted() {
      auth.onAuthStateChanged((user) => {
        this.user = user;
  
        if (user) {
          this.loadSelectedHero();
        }
      });
    },
    methods: {
      signIn() {
        const email = 'tu@email.com';
        const password = 'tuContraseña';
  
        auth.signInWithEmailAndPassword(email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            this.user = user;
            this.loadSelectedHero();
          })
          .catch((error) => {
            console.error('Error al iniciar sesión:', error.message);
          });
      },
      signOut() {
        auth.signOut()
          .then(() => {
            this.user = null;
          })
          .catch((error) => {
            console.error('Error al cerrar sesión:', error.message);
          });
      },
      loadSelectedHero() {
        const heroId = 'idDelHeroe';
        database.ref(`heroes/${heroId}`).once('value')
          .then((snapshot) => {
            const hero = snapshot.val();
            this.selectedHero = hero;
          })
          .catch((error) => {
            console.error('Error al cargar el héroe:', error.message);
          });
      },
    },
  };
  </script>
  
  <style scoped>
  .rounded-image {
    border-radius: 50%;
  }
  </style>
  