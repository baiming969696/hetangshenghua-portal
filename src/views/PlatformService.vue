<template>
  <div id="PlatformService" class="page">
    <el-image :src="banner" fit="cover"></el-image>

    <div :class="['content', $i18n.locale]">
      <h1>{{ $t('nav.platform_service') }}</h1>

      <template v-if="$i18n.locale === 'zh'">

        <p>CGTIC拥有一支来自全球产业领域的顶尖专家和资深顾问专家可协同为全球客户提供从企业孵化、生产技术研发、生产外包服务、质量控制、药物申报与转化等全方位的创新服务。</p>
        <p>CGTIC建设了3000平米的创新孵化空间和7000平米的符合中美欧GMP要求的DNA、病毒、细胞生产设施设备。CGTIC旨在提供从临床前到临床阶段的CGT创新药物的研发和中试生产服务。CGTIC将提供质粒、 腺相关病毒(AAV)、慢病毒(LV)、腺病毒(AD)和逆转录病毒生产及其灌装服务，主要用于神经科学、肿瘤、代谢和心血管疾病的实验、临床前和临床研究。建成包括高通量反应器、多条200L采用一次反应工艺的病毒生产平台和高速全自动制剂平台。同时，CGTIC将为客户提供模块化B级细胞治疗GMP车间。</p>
        <p>CGTIC建设了自主知识产权的洁净物流系统、全自动物流系统。期待通过集成柔性机械臂和机器人，配合5G工业互联网，打造适应CGT产业特点的柔性工厂和敏捷工厂，打造智能与细胞工厂新范式。</p>

        <ul>
            <li>核酸与病毒反应与分离工艺技术开发服务</li>
            <li>基因治疗临床样品与商业化GMP生产服务</li>
            <li>细胞治疗生产平台（B级GMP厂房）服务</li>
            <li>非注册临床研究用样品生产服务</li>
            <li>基因治疗创新药物临床申报整体解决方案</li>
            <li>细胞与基因治疗产品洁净物流与管理服务</li>
        </ul>
      </template>
      <el-image :src="require('@/assets/platform_service.png')" fit="cover"></el-image>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlatformService',
  data () {
    return {
      banner: require('@/assets/banner-3.png')
    }
  },
  computed: {
    title () {
      return this.$t('nav.platform_service') + ' | ' + this.$t('title')
    }
  },
  created () {
    document.title = this.title
    this.$emit('nav-index', 'PlatformService')
  },
  watch: {
    '$i18n.locale' () {
      document.title = this.title
    }
  }
}
</script>
