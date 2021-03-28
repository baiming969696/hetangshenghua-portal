import Vue from 'vue'
import Router from 'vue-router'
import Element from 'element-ui'
import I18n from 'vue-i18n'
import elementLocaleEn from 'element-ui/lib/locale/lang/en'
import elementLocaleZh from 'element-ui/lib/locale/lang/zh-CN'
import App from '@/App'
import router from '@/router'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(Router)
Vue.use(I18n)
Vue.use(Element, { i18n: (key, value) => i18n.t(key, value) })

const i18n = new I18n({
  locale: /^zh/.test(navigator.language || navigator.userLanguage) ? 'zh' : 'en',
  messages: {
    zh: {
      title: '荷塘生华',
      nav: {
        home: '首页',
        about_us: '关于我们',
        platform_service: '平台服务',
        join_us: '加入我们',
        contact_us: '联系我们'
      },
      ...elementLocaleZh
    }
  },
  silentFallbackWarn: true
})

new Vue({
  i18n,
  router,
  render: h => h(App)
}).$mount('#app')
