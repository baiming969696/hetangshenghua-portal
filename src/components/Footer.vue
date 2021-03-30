<template>
  <div :class="['footer', mode]">
    <div class="content">
      <hr v-if="mode === 'default'">
      <div v-if="mode === 'default'">
        <span class="el-icon-phone-outline">15600638856</span>
        <span class="el-icon-message">s.tan@cgtic.cn</span>
        <span class="el-icon-place">北京市昌平区医科路9号院1号楼</span>
      </div>
      <div v-html="message"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['index'],
  data () {
    return {
      message: '版权所有 © 北京荷塘生华医疗科技有限公司 <a href="http://beian.miit.gov.cn" target="_blank">京ICP备2021009103号-1</a>'
    }
  },
  computed: {
    mode () {
      return this.index === 'Home' || this.index === 'blank' ? 'simple' : 'default'
    }
  },
  methods: {
    setLocale (locale) {
      this.$parent.$i18n.locale = locale
      document.getElementsByClassName('header')[0].scrollIntoView()
    }
  }
}
</script>

<style scoped lang="scss">
.footer {
  padding: 0.5em;

  color: #888;
  font-size: 0.8rem;
  text-align: center;

  &.simple {
    position: fixed;
    bottom: 0;
    width: 100%;

    color: #aaa;
  }

  hr {
    border: 0;
    height: 1px;
    background-color: #888;
  }

  // Override
  div { padding: 1px; }
  span { margin: 5px; }

  ::v-deep a           { color: #888; }
  &.simple  ::v-deep a { color: #aaa; }
}
</style>
