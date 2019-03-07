<template>
  <div class="twitter-card">
    <v-card class="mx-auto" color="#26c6da" dark>
      <v-card-actions>
        <v-list-tile class="grow card-title">
          <v-list-tile-avatar color="grey darken-3">
            <v-img class="elevation-6 profile-img" v-bind:src="this.profile_img"></v-img>
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>{{this.name}}</v-list-tile-title>
          </v-list-tile-content>

          <v-layout align-center justify-end>
            <i class="material-icons">share</i>
            <span class="subheading">{{this.rt}}</span>
          </v-layout>
        </v-list-tile>
      </v-card-actions>

      <v-card-text class="font-weight-bold tweet-content">"{{this.text}}"</v-card-text>
    </v-card>

    <div class="mobile">{{this.text}}</div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    text: String,
    rt: Number,
    name: String,
    profile_img: String
  }
};
</script>

<style scoped>
.card-title {
  height: 30px;
}

.tweet-content {
  font-size: 15px;
}

.mobile {
  display: none;
}

@media screen and (max-width: 767px) {
  .mx-auto {
    display: none;
  }

  .tweet-content {
    font-size: 10px;
    padding: 0;
    margin: 0;
  }

  .mobile {
    display: block;
    font-size: 10px;
    background-color: #26c6da;
    padding: 5px;
    font-weight: 600;
    color: aliceblue;
    border-radius: 5px;
  }
}
</style>


