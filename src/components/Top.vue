<template>
  <main class="section">
    <div id="sitelogo" class="section">
      <figure class="image is-4by3">
        <img src="https://bulma.io/images/placeholders/640x480.png">
      </figure>
    </div>

    <div class="columns section">
      <div class="column">
        <router-link to="/event-create" class="box">
          イベントを開く
        </router-link>
      </div>
      <div class="column">
        <router-link to="/participate" class="box">
          イベントに参加する
        </router-link>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Top',
  data () {
    return {
      msg: 'No message'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#sitelogo {
  width: 640px;
  height: 480px;
  margin: 0 auto;
}
</style>
