<template>
  <div id="overview" class="page">
    <el-image :src="banner" fit="cover"></el-image>

    <div :class="['content', $i18n.locale]">
      <h1>{{ $t('nav.about_us') }}</h1>

      <template v-if="$i18n.locale === 'zh'">

        <p>细胞与基因治疗创新中心（ Cell and Gene Therapy Innovation Center，CGTIC）是北京清华工业开发研究院与英国Catapult细胞与基因治疗创新中心、日本神户细胞疗法研发中心等国际顶尖科研机构合作，建设的国际领先的细胞与基因治疗创新平台，面向临床前至临床早期的细胞与基因治疗创新药研发 ，打造符合GMP规范的关键技术研究、核心工艺研发、中试与工业化生产的研发支撑体系，培育孵化创新药创业企业，构建前沿生物医药产业新生态。</p>
        <p>北京荷塘生华医药科技有限公司（简称“荷塘生华”）是清华工研院与行业领军企业共同发起设立的科技公司，负责CGTIC的建设和运营。荷塘生华与中关村生命科学园合作，在中关村生命科学园医药科技中心1号楼，按照国际生物制药GMP标准，建设符合中国NMPA、美国FDA、欧盟EMA生产质量管理规范的7000平米的细胞与基因治疗研发与中试平台以及3000 平米的硬科技孵化器，面前全球细胞与基因治疗科技企业开展创新药物的研发和临床研究提供产品的CDMO服务。</p>
        <p>荷塘生华在全球率先将合成生物技术、结构生物技术、高通量单细胞筛选和高通量发酵工程应用于生物工程服务领域，加速细胞与基因治疗元件、载体和结构的工艺开发与生产应用。创新性的融合人工智能、智能机器人与5G工业互联网等技术，打造具有自主知识产权的洁净物流系统，解决细胞与基因治疗产品生产的瓶颈问题，建设生物医药领域的智能制造“新基建”平台，助力细胞与基因治疗产业跨越式发展，
致力于打造生物药智能生产的新范式。</p>

        <ul>
          <li>核心价值观：认知世界、敬畏生命、试错前行、创造未来</li>
        </ul>
        <el-image :src="about_us" fit="cover"></el-image>
      </template>

    </div>
  </div>
</template>

<script>
export default {
  name: 'overview',
  data () {
    return {
      banner: require('@/assets/banner-3.jpg'),
      about_us: require('@/assets/about_us.png')
    }
  },
  computed: {
    title () {
      return this.$t('nav.about_us') + ' | ' + this.$t('title')
    }
  },
  created () {
    document.title = this.title
    this.$emit('nav-index', 'overview')
  },
  watch: {
    '$i18n.locale' () {
      document.title = this.title
    }
  }
}
</script>
