<template>
  <main class="">
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">JPHACKS札幌</h1>
          <h2 class="subtitle">主催者： 新田さん</h2>
        </div>
      </div>
    </section>

    <div class="section columns">
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
          <div class="field">
            <label class="label">投稿内容</label>
            <div class="control">
              <textarea v-model="postText" class="textarea" placeholder="Textarea"></textarea>
            </div>
          </div>

          <div class="field file has-name">
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

          <div class="field is-grouped">
            <div class="control">
              <button class="button is-link">投稿</button>
            </div>
          </div>
        </div>

        <div class="box">
          <article class="media">
            <figure class="media-left">
              <p class="image is-64x64">
                <img src="https://bulma.io/images/placeholders/128x128.png">
              </p>
            </figure>
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>Barbara Middleton</strong>
                  <br>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta eros lacus, nec ultricies elit blandit non. Suspendisse pellentesque mauris sit amet dolor blandit rutrum. Nunc in tempus turpis.
                  <br>
                  <small><a>Like</a> · <a>Reply</a> · 3 hrs</small>
                </p>
              </div>

              <article class="media">
                <figure class="media-left">
                  <p class="image is-48x48">
                    <img src="https://bulma.io/images/placeholders/96x96.png">
                  </p>
                </figure>
                <div class="media-content">
                  <div class="content">
                    <p>
                      <strong>Sean Brown</strong>
                      <br>
                      Donec sollicitudin urna eget eros malesuada sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam blandit nisl a nulla sagittis, a lobortis leo feugiat.
                      <br>
                      <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
                    </p>
                  </div>

                  <article class="media">
                    Vivamus quis semper metus, non tincidunt dolor. Vivamus in mi eu lorem cursus ullamcorper sit amet nec massa.
                  </article>

                  <article class="media">
                    Morbi vitae diam et purus tincidunt porttitor vel vitae augue. Praesent malesuada metus sed pharetra euismod. Cras tellus odio, tincidunt iaculis diam non, porta aliquet tortor.
                  </article>
                </div>
              </article>

              <article class="media">
                <figure class="media-left">
                  <p class="image is-48x48">
                    <img src="https://bulma.io/images/placeholders/96x96.png">
                  </p>
                </figure>
                <div class="media-content">
                  <div class="content">
                    <p>
                      <strong>Kayli Eunice </strong>
                      <br>
                      Sed convallis scelerisque mauris, non pulvinar nunc mattis vel. Maecenas varius felis sit amet magna vestibulum euismod malesuada cursus libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus lacinia non nisl id feugiat.
                      <br>
                      <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </article>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Room',
  data () {
    return {
      postText: '',
      filename: 'photo.png'
    }
  }
}
</script>

<style>
</style>
