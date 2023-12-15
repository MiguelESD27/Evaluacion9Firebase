<template>
  <v-container>
    <v-row>
      <v-col v-for="hero in heroes" :key="hero.Nombre">
        <v-card @click="showDetails(hero)">
          <v-img :src="hero.Imagen" aspect-ratio="2.75" class="rounded-image"></v-img>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog v-model="dialog" max-width="600">
      <v-card>
        <v-img :src="selectedHero.Imagen" aspect-ratio="2.75" class="rounded-image"></v-img>
        <v-card-title>{{ selectedHero.Nombre }}</v-card-title>
        <v-card-subtitle>{{ selectedHero.Funcion }}</v-card-subtitle>
        <v-card-text>Ataque: {{ selectedHero.Ataque }}</v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import { auth } from '@/config/firebase';

export default {
  data() {
    return {
      heroes: [
          {
            Nombre: "Artanis",
            Funcion: "Agresor",
            Titulo: "Jerarca de los daelaam",
            Ataque: 111,
            Imagen: "https://static.heroesofthestorm.com/heroes/yrel/skins/light-of-hope-800.jpg"
          },
          {
            Nombre: "D.va",
            Funcion: "Guerrero",
            Titulo: "Piloto de MEKA",
            Ataque: "22 (meca) 55 (piloto)",
            Imagen: "https://static.heroesofthestorm.com/heroes/dva/skins/meka-pilot-800.jpg"
          },
{
  Nombre: "Ragnaros",
  Funcion: "Agresor",
  Titulo: "El señor del fuego",
  Ataque: 180,
  Imagen: "https://static.heroesofthestorm.com/heroes/ragnaros/skins/the-firelord-800.jpg"
},
{
  Nombre: "Yrel",
  Funcion: "Guerrero",
  Titulo: "Luz de la esperanza",
  Ataque: 155,
  Imagen: "https://static.heroesofthestorm.com/heroes/yrel/skins/light-of-hope-800.jpg"
},
{
  Nombre: "Ana",
  Funcion: "Sanadora",
  Titulo: "Francotiradora veterana",
  Ataque: 30,
  Imagen: "https://static.heroesofthestorm.com/heroes/ana/skins/veteran-sniper-800.jpg"
},
{
  Nombre: "Auriel",
  Funcion: "Sanadora",
  Titulo: "Arcángel de la esperanza",
  Ataque: 64,
  Imagen: "https://static.heroesofthestorm.com/heroes/ana/skins/veteran-sniper-800.jpg"
},
{
  Nombre: "Malfurion",
  Funcion: "Sanadora",
  Titulo: "Archidruida",
  Ataque: 60,
  Imagen: "https://static.heroesofthestorm.com/heroes/malfurion/skins/archdruid-800.jpg"
},
{
  Nombre: "Arthas",
  Funcion: "Tanque",
  Titulo: "El rey Exánime",
  Ataque: 95,
  Imagen: "https://static.heroesofthestorm.com/heroes/arthas/skins/the-lich-king-800.jpg"
},
{
  Nombre: "Johanna",
  Funcion: "Tanque",
  Titulo: "Cruzada de Zakarum",
  Ataque: 99,
  Imagen: "https://static.heroesofthestorm.com/heroes/johanna/skins/crusader-of-zakarum-800.jpg"
},
{
  Nombre: "Muradin",
  Funcion: "Tanque",
  Titulo: "Rey de la montaña",
  Ataque: 88,
  Imagen: "https://static.heroesofthestorm.com/heroes/muradin/skins/mountain-king-800.jpg"
},
{
  Nombre: "Illidan",
  Funcion: "Asesino cuerpo a cuerpo",
  Titulo: "El traidor",
  Ataque: 87,
  Imagen: "https://static.heroesofthestorm.com/heroes/illidan/skins/the-betrayer-800.jpg"
},
{
  Nombre: "Maiev",
  Funcion: "Asesino cuerpo a cuerpo",
  Titulo: "La celadora",
  Ataque: 145,
  Imagen: "https://static.heroesofthestorm.com/heroes/maiev/skins/the-warden-800.jpg"
},
{
  Nombre: "Zeratul",
  Funcion: "Asesino cuerpo a cuerpo",
  Titulo: "Prelado tétrico",
  Ataque: 131,
  Imagen: "https://static.heroesofthestorm.com/heroes/zeratul/skins/dark-prelate-800.jpg"
},
{
  Nombre: "Abathur",
  Funcion: "Apoyo",
  Titulo: "Maestro de evolución",
  Ataque: 27,
  Imagen: "https://static.heroesofthestorm.com/heroes/abathur/skins/evolution-master-800.jpg"
},
{
  Nombre: "Medivh",
  Funcion: "Apoyo",
  Titulo: "El último guardián",
  Ataque: 83,
  Imagen: "https://www.hellofriki.com/wpcontent/uploads/2016/05/medivh.jpg"
},
{
  Nombre: "Zarya",
  Funcion: "Apoyo",
  Titulo: "Defensora de Rusia",
  Ataque: 22,
  Imagen: "https://static.heroesofthestorm.com/heroes/zarya/skins/defender-of-russia-800.jpg"
},
{
  Nombre: "Nazeebo",
  Funcion: "Asesino a distancia",
  Titulo: "Médico brujo",
  Ataque: 92,
  Imagen: "https://static.heroesofthestorm.com/heroes/nazeebo/skins/heretic-witch-doctor-800.jpg"
},
{
  Nombre: "Genji",
  Funcion: "Asesino a distancia",
  Titulo: "Ninja cibernético",
  Ataque: 44,
  Imagen: "https://static.heroesofthestorm.com/heroes/genji/skins/cybernetic-ninja-800.jpg"
},
{
  Nombre: "Zagara",
  Funcion: "Asesino a distancia",
  Titulo: "Madre de la prole del enjambre",
  Ataque: 85,
  Imagen: "https://static.heroesofthestorm.com/heroes/zagara/skins/broodmother-of-the-swarm-800.jpg"
},
],
      dialog: false,
      selectedHero: {},
    };
  },
  methods: {
    showDetails(hero) {
      this.selectedHero = hero;
      this.dialog = true;
    },
  },
};
</script>

<style scoped>
.v-card {
  margin-bottom: 20px;
}

.v-card-title {
  font-size: 18px;
  font-weight: bold;
}

.v-card-subtitle {
  font-size: 14px;
  color: #888;
}

.v-card-text {
  font-size: 16px;
  color: #333;
}
</style>
