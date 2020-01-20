<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <MainArea />
  </div>
</template>

<script>
// @ is an alias to /src
import MainArea from '@/components/MainArea.vue'

export default {
  name: 'home',
  components: {
    MainArea
  }
}
</script>
