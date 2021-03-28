<template>
  <div id="overview" class="page">
    <el-image :src="banner" fit="cover"></el-image>

    <div :class="['content', $i18n.locale]">
      <h1>{{ $t('nav.join_us') }}</h1>

      <template v-if="$i18n.locale === 'zh'">
        <p>荷塘生华致力于以：认知世界、敬畏生命、试错前行、创造未来的核心价值观吸引来自全球的顶级研发、生产、工程、质量、信息、自动化、高通量和商务人才，打造面向生物工业特别是细胞与基因治疗领域的专业化人才队伍，期待为中国细胞与基因治疗产业发展贡献一份力量。</p>
        <p>荷塘生华以下领域面向全球招募高级管理人才和工程师：</p>
        <ul>
            <li>信息/自动化</li>
            <li>研发/生产反应（上游）</li>
            <li>研发/生产分离（下游）</li>
            <li>研发/生产制剂</li>
            <li>研发/生产QC</li>
            <li>质量QA</li>
            <li>仓储物流管理</li>
            <li>工程系统管理</li>
            <li>商务/市场</li>
        </ul>
        <p>电话：18515296956</p>
        <p>邮箱：z.liang@cgtic.cn</p>
      </template>

    </div>
  </div>
</template>

<script>
export default {
  name: 'join_us',
  data () {
    return {
      banner: require('@/assets/banner-3.jpg')
    }
  },
  computed: {
    title () {
      return this.$t('nav.join_us') + ' | ' + this.$t('title')
    }
  },
  created () {
    document.title = this.title
    this.$emit('nav-index', 'join_us')
  },
  watch: {
    '$i18n.locale' () {
      document.title = this.title
    }
  }
}
</script>
