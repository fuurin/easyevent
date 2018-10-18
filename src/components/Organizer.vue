<template>
  <main>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">{{ name }}のイベント</h1>
        </div>
      </div>
    </section>

    <section class="section columns">
      <div class="column is-3">
        <div class="panel box">
          <p class="panel-heading">
            {{ name }}
          </p>

          <div class="is-centered">
            <figure class="image is-5by4">
              <img src="https://bulma.io/images/placeholders/600x480.png">
            </figure>
          </div>

          <div class="menu section">
            <p class="menu-label">
              自己紹介
            </p>
            <ul class="menu-list">
              <li>
                人呼んでブロガー界の神。昨年はブログで年商1.5億円稼ぎました！
                高知県の山奥に住んでます。馴れ合ってる暇があるなら
                #ブログ書け profile-pic by @henmority
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="box">
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">イベントを検索</label>
            </div>
            <div class="field-body control has-icon">
              <input v-model="search" class="input has-icon" type="search" placeholder="イベント名" autocomplete="on" list="eventlist" autofocus required>
              <span class="icon is-small">
                <i class="fa fa-search"></i>
              </span>
              <datalist id="eventlist">
                <option v-for="event in eventCandidates" :key="event">{{ event }}</option>
              </datalist>
            </div>
          </div>
        </div>
        <div class="box">
          <router-link v-for="event in events" :key="event" to="/event" class="box">{{ event }}</router-link>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Organizer',
  data () {
    return {
      name: '新田さん',
      events: [
        'JPHACKS札幌',
        'JPHACKS仙台',
        'JPHACKS東京'
      ]
    }
  }
}
</script>

<style>
</style>
