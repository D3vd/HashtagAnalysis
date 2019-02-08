<template>
  <div class="loading">
    <v-progress-circular indeterminate :size="100" color="primary"></v-progress-circular>
  </div>
</template>

<script>
export default {
  name: "loading"
};
</script>

<style scoped>
.loading {
  margin: 20%;
  text-align: center;
  position: relative;
}
</style>
