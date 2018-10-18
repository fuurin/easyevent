<template>
  <main class="section columns is-centered">
    <form @submit.prevent="participate" class="column is-two-thirds">
      <div class="box">
        <div class="level">
          <div class="level-item">
            イベント参加
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">表示名<span class="has-text-danger">(必須)</span></label>
          </div>
          <div class="field-body">
            <input v-model="name" class="input" type="text" placeholder="田中 太郎" required autofocus>
          </div>
        </div>

        <div class="field file has-name">
          <div class="field-label is-normal">
            <label class="label">アイコン</label>
          </div>
          <div class="field-body">
            <label class="file-label">
              <input class="file-input" type="file" name="resume">
              <span class="file-cta">
                <span class="file-icon">
                  <i class="fas fa-upload"></i>
                </span>
                <span class="file-label">
                  ファイルを選択
                </span>
              </span>
              <span class="file-name">
                {{ filename }}
              </span>
            </label>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">イベント名<span class="has-text-danger">(必須)</span></label>
          </div>
          <div class="field-body">
            <input v-model="event" class="input" type="text" placeholder="イベント名" autocomplete="on" list="eventlist" required>
            <datalist id="eventlist">
              <option v-for="event in eventCandidates" :key="event">{{ event }}</option>
            </datalist>
          </div>
        </div>

        <div class="is-centered columns">
          <div class="column is-half">
            <input type="submit" class="button is-primary is-fullwidth" value="参加">
          </div>
        </div>

      </div>
    </form>
  </main>
</template>

<script>
export default {
  name: 'Participate',
  data () {
    return {
      name: '',
      event: '',
      filename: 'photo.png',
      // TODO: ルーム候補に画像つける
      eventCandidates: [
        'JPHACKS札幌',
        'JPHACKS仙台',
        'JPHACKS東京',
        'JPHACKS大阪'
      ]
    }
  },
  methods: {
    participate () {
      this.$router.push('/event')
    }
  }
}
</script>

<style>
</style>
