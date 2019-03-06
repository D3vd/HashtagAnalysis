<template>
  <v-card class="mx-auto" color="#26c6da" dark>
    <v-card-actions>
      <v-list-tile class="grow card-title">
        <v-list-tile-avatar color="grey darken-3">
          <v-img
            class="elevation-6 profile-img"
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          ></v-img>
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title>Evan You</v-list-tile-title>
        </v-list-tile-content>

        <v-layout align-center justify-end>
          <i class="material-icons">share</i>
          <span class="subheading">45</span>
        </v-layout>
      </v-list-tile>
    </v-card-actions>

    <v-card-text
      class="font-weight-bold tweet-content"
    >"Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well."</v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "Card"
};
</script>

<style scoped>
.card-title {
  height: 30px;
}

.tweet-content {
  font-size: 20px;
}
</style>


