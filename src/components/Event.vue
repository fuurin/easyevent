<template>
  <main>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">JPHACKS札幌</h1>
          <h2 class="subtitle">主催者： 新田さん</h2>
        </div>
      </div>
    </section>

    <section class="section columns">
      <div class="column is-3">
        <div class="panel box">
          <p class="panel-heading">
            イベント情報
          </p>

          <div class="is-centered">
            <figure class="image is-5by4">
              <img src="https://bulma.io/images/placeholders/600x480.png">
            </figure>
          </div>

          <div class="menu section">
            <p class="menu-label">
              概要
            </p>
            <ul class="menu-list">
              <li>
                ハッカソン（英語: hackathon 、別名:hack day ,hackfest ,codefest ）
                とはソフトウェア開発分野のプログラマやグラフィックデザイナー、ユーザインタフェース設計者、
                プロジェクトマネージャらが集中的に作業をするソフトウェア関連プロジェクトのイベントである。
              </li>
            </ul>
            <p class="menu-label">
              開催場所
            </p>
            <ul class="menu-list">
              <li>札幌ドーム</li>
            </ul>
            <p class="menu-label">
              開始日時
            </p>
            <ul class="menu-list">
              <li>2018/10/20(土) 09:00</li>
            </ul>
            <p class="menu-label">
              終了日時
            </p>
            <ul class="menu-list">
              <li>2018/10/21(日) 21:00</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="box">
          <div class="title is-5">
            ようこそ {{ name }} さん！
          </div>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">ルーム名を検索</label>
            </div>
            <div class="field-body control has-icon">
              <input v-model="search" class="input has-icon" type="search" placeholder="ルーム名" autocomplete="on" list="eventlist" autofocus required>
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
          <router-link v-for="room in rooms" :key="room" to="/room" class="box">{{ room }}</router-link>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Event',
  data () {
    return {
      name: '田中 太郎',
      search: '',
      rooms: [
        'Room1',
        'Room2',
        'Room3'
      ]
    }
  }
}
</script>

<style>
</style>
