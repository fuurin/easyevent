<template>
  <main class="section columns is-centered">
    <div class="column is-two-thirds">
      <form @submit.prevent="createEvent" class="box">
        <div class="level">
          <div class="level-item title">
            イベント作成
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label">
            <label class="label">イベント名<span class="has-text-danger">(必須)</span></label>
          </div>
          <div class="field-body">
            <input v-model="name" class="input" type="text" placeholder="イベント名" autofocus required maxlength=50>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label">
            <label class="label">概要<span class="has-text-danger">(必須)</span></label>
          </div>
          <div class="field-body">
            <textarea v-model="description" class="textarea" placeholder="イベントの概要" required maxlength=200></textarea>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label">
            <label class="label">イベント画像<span class="has-text-danger">(必須)</span></label>
          </div>
          <div class="field-body">
            <div class="file has-name">
              <label class="file-label">
                <input class="file-input" type="file" name="resume">
                <span class="file-cta">
                  <span class="file-icon">
                    <i class="fas fa-upload"></i>
                  </span>
                  <span class="file-label">
                    画像を選択
                  </span>
                </span>
                <span class="file-name">
                  {{ filename }}
                </span>
              </label>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label">
            <label class="label">場所</label>
          </div>
          <div class="field-body">
            <input v-model="place" class="input" type="text" placeholder="開催場所" maxlength=50>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label">
            <label class="label">開始</label>
          </div>
          <div class="field-body">
            <input v-model="start" class="input" type="text" placeholder="開始日時" maxlength=30>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label">
            <label class="label">終了</label>
          </div>
          <div class="field-body">
            <input v-model="end" class="input" type="text" placeholder="終了日時" maxlength=30>
          </div>
        </div>

        <div class="is-centered columns">
          <div class="column is-half">
            <input type="submit" class="button is-primary is-fullwidth" value="イベント作成">
          </div>
        </div>
      </form>
    </div>
  </main>
</template>

<script>
export default {
  name: 'EventCreate',
  data () {
    return {
      name: '',
      description: '',
      filename: 'JPHACKS2018.png',
      place: '',
      start: '',
      end: ''
    }
  },
  methods: {
    createEvent () {
      alert('create event: ' + this.name)
      this.$router.push('/organizer')
    }
  }
}
</script>

<style>
</style>
