import Vue from 'vue'
import Router from 'vue-router'
import Element from 'element-ui'
import I18n from 'vue-i18n'
import App from '@/App'
import router from '@/router'
import 'element-ui/lib/theme-chalk/index.css'
import BaiduMap from 'vue-baidu-map'

Vue.config.productionTip = false

Vue.use(Router)
Vue.use(I18n)
Vue.use(Element, { i18n: (key, value) => i18n.t(key, value) })
Vue.use(BaiduMap, { ak: 'YWTtGlSDmFSwjfGlkGjNpwCrROnhWj9M' })

const i18n = new I18n({
  locale: /^zh/.test(navigator.language || navigator.userLanguage) ? 'zh' : 'en',
  silentFallbackWarn: true
})

new Vue({
  i18n,
  router,
  render: h => h(App)
}).$mount('#app')
