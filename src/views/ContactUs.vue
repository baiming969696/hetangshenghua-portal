<template>
  <div id="overview" class="page">
    <el-image :src="banner" fit="cover"></el-image>

    <div :class="['content', $i18n.locale]">
      <h1>{{ $t('nav.contact_us') }}</h1>

      <template v-if="$i18n.locale === 'zh'">
        <p>荷塘生华位于中国生命科技创新高地-中关村生命科学园，处在中国(北京)自由贸易试验区科技创新区内，具备生命科学技术创新产业发展得天独厚的区位优势和国际商贸合作优势。</p>
        <ul>
            <li>5min交通可到达北京生命科学研究所和北京大学国际医院。</li>
            <li>30min交通可覆盖包括清华大学、北京大学在内的中国TOP30顶尖生命科学高校和研究院所的1/3以上。</li>
            <li>60min交通可到达包括中国TOP50三甲医院1/3以上。</li>
            <li>90min交通可到达4个高铁站和2个国际机场。</li>
        </ul>
        <div class="imageBox">
            <el-image :src="contact_us_1" style="width: 400px; padding: 10px"></el-image>
            <el-image :src="contact_us_2" style="width: 400px; padding: 10px"></el-image>
        </div>
        <ul>
            <li>联系地址：北京市昌平区医科路9号院1号楼</li>
            <li>联系电话：15600638856</li>
            <li>联系邮箱：s.tan@cgtic.cn</li>
        </ul>
        <baidu-map class="bm-view" :center="center" :zoom="zoom" @ready="handler">
            <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>
            <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
            <bm-marker :position="center" :dragging="true">
                <bm-label content="荷塘生华" :labelStyle="{color: 'red', fontSize : '12px'}" :offset="{width: -20, height: 30}"/>
            </bm-marker>
        </baidu-map>
      </template>

    </div>
  </div>
</template>

<script>
export default {
  name: 'contact_us',
  data () {
    return {
      banner: require('@/assets/banner-3.jpg'),
      contact_us_1: require('@/assets/contact_us_1.jpg'),
      contact_us_2: require('@/assets/contact_us_2.jpg'),
      center: { lng: 0, lat: 0 },
      zoom: 3
    }
  },
  computed: {
    title () {
      return this.$t('nav.contact_us') + ' | ' + this.$t('title')
    }
  },
  created () {
    document.title = this.title
    this.$emit('nav-index', 'contact_us')
  },
  watch: {
    '$i18n.locale' () {
      document.title = this.title
    }
  },
  methods: {
    handler ({ BMap, map }) {
      console.log(BMap, map)
      this.center.lng = 116.278261
      this.center.lat = 40.110199
      this.zoom = 15
    }
  }
}
</script>

<style lang="scss">
    el-image {
        display: inline;
    }

    .bm-view {
        width: 100%;
        height: 300px
    }
</style>
