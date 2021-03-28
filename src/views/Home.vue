<template>
  <div id="home">
    <video id="home-video" muted loop :poster="video.poster">
      <source :src="video.webm" type="video/webm">
      <source :src="video.mp4" type="video/mp4">
    </video>

    <div class="dimmer">
      <div class="title">创新技术赋能生物工业</div>
      <div class="subtitle">清华工研院细胞与基因治疗创新中心</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      video: {
        poster: require('@/assets/curiosity.png'),
        webm: require('@/assets/curiosity.webm'),
        mp4: require('@/assets/curiosity.mp4')
      }
    }
  },
  computed: {
    title () {
      return '荷塘生华'
    }
  },
  created () {
    document.title = this.title
    this.$emit('nav-index', 'home')
  },
  mounted () {
    this.onResize()
    document.getElementById('home-video')
      .addEventListener('canplay', () => this.onResize())
    window.addEventListener('resize', () => this.onResize())
  },
  watch: {
    '$i18n.locale' () {
      document.title = this.title
    }
  },
  methods: {
    onResize () {
      let ratio = 596 / 336 // resolution ratio of the video
      let video = document.getElementById('home-video')
      if (video === null) return

      video.style.minWidth = window.innerWidth + 'px'
      video.style.minHeight = window.innerHeight + 'px'
      if (window.innerWidth / window.innerHeight > ratio) {
        video.style.left = '0px'
        video.style.top = ((window.innerHeight - window.innerWidth / ratio) / 2) + 'px'
      } else {
        video.style.left = ((window.innerWidth - window.innerHeight * ratio) / 2) + 'px'
        video.style.top = '0px'
      }

      video[window.innerWidth < 600 ? 'pause' : 'play'].bind(video)()
    }
  }
}
</script>

<style lang="scss">
#home {
  width: 100%;
  height: 100%;

  video {
    position: fixed;
    z-index: -1;
  }

  .dimmer {
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 100%;
    height: 100%;

    background-color: rgba(0, 0, 0, 0.382);
  }

  .title {
    padding-top: 1em;
    color: #efefef;
    font-size: 3.2rem;
    line-height: 1.1em;
    text-shadow: 0px 0px 5px #999;
  }

  .subtitle {
    padding-top: 0.5em;
    color: #aaaaaa;
    font-size: 1.6rem;
  }

  .title, .subtitle {
    text-align: center;
    font-family: titleFont;
  }
}
</style>
