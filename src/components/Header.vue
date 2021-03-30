<template>
  <div :class="['header', mode]">
    <div class="content">
      <router-link to="/">
        <div v-if="mode == 'dark'" class="logo-dark" :style="logoStyle"></div>
        <div v-if="mode == 'light'" class="logo-light" :style="logoStyle"></div>
      </router-link>

      <el-menu-wrapper
        mode="horizontal" :default-active="index"
        :text-color="textColor" :active-text-color="activeTextColor"
        menu-trigger="click" unique-opened router
      >
        <el-menu-item index="AboutUs">关于我们</el-menu-item>
        <el-menu-item index="PlatformService">平台服务</el-menu-item>
        <el-menu-item index="JoinUs">加入我们</el-menu-item>
        <el-menu-item index="ContactUs">联系我们</el-menu-item>
      </el-menu-wrapper>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  props: ['index'],
  computed: {
    mode () {
      return this.index === 'home' ? 'dark' : 'light'
    },
    logoStyle () {
      return { backgroundImage: 'url(' + ({
        dark: require('@/assets/logo-homepage.jpeg'),
        light: require('@/assets/header-logo.png')
      })[this.mode] + ')' }
    },
    textColor () {
      return ({ dark: '#efefef', light: '#111111' })[this.mode]
    },
    activeTextColor () {
      return ({ dark: '#39b9e6', light: '#90268e' })[this.mode]
    }
  },
  components: {
    'el-menu-wrapper': Vue.component('el-menu-wrapper', {
      render (createElement) {
        return createElement('div', { attrs: { class: 'el-menu-wrapper' } }, [
          createElement('el-menu', { props: this.$attrs, on: this.$listeners },
            this.$slots.default
          ),
          createElement('el-menu', { props: this.$attrs, on: this.$listeners }, [
            createElement('el-submenu', { props: { index: 'nav', popperClass: this.$parent.mode } },
              this.$slots.default.concat(createElement('i', {
                slot: 'title', attrs: { class: 'el-icon-menu' }
              }))
            )
          ])
        ])
      }
    })
  }
}
</script>

<style scoped lang="scss">
@import "@/utils.scss";

.header {
  width: 100%;
  height: calc(2rem + 20px);
  background-color: white;

  @include for-desktop-up {
    height: 80px;
  }

  &.dark {
    position: fixed;
    top: 0;
    z-index: 2;
    background-color: transparent;
  }

  .content {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;

    padding: 10px;

    @include for-desktop-up {
      padding: 20px;
    }
  }

  &.dark .content { max-width: inherit; }

  .logo-dark {
    height: 2rem;
    width: 2rem;
    cursor: pointer;

    background-size: cover;
    background-position: left;
    background-repeat: no-repeat;

    @include for-desktop-up {
      height: 45px;
      width: 166px;
    }
  }

  .logo-light {
    height: 2rem;
    width: 2rem;
    cursor: pointer;

    background-size: cover;
    background-position: left;
    background-repeat: no-repeat;

    @include for-desktop-up {
      height: 45px;
      width: 225px;
    }
  }

  .el-menu-wrapper {
    ::v-deep .el-menu:first-child { display: none; }
    ::v-deep .el-menu:last-child { display: inherit; }

    @include for-tablet-up {
      ::v-deep .el-menu:first-child { display: inherit; }
      ::v-deep .el-menu:last-child { display: none; }
    }

    ::v-deep .el-menu {
      background-color: transparent;
      border: 0 solid transparent;
    }

    ::v-deep .el-menu-item,
    ::v-deep .el-submenu__title {
      height: 2rem;
      padding: 0 5px;
      margin: 0 5px;

      font-size: 0.9rem;
      font-weight: bold;
      line-height: 2rem;

      a { text-decoration: none; }
    }
  }
}
</style>

<!-- Menu popups will be appended to html body  -->
<style lang="scss">
.el-menu--popup,
.el-submenu .el-menu-item {
  min-width: 0 !important;
}

.el-menu--popup {
  width: 160px;
}

.el-menu-item,
.el-submenu__title {
  &, &:focus, &:hover {
    background-color: transparent !important;
  }

  i {
    color: inherit !important;
  }
}

.el-menu--horizontal.dark .el-menu--popup {
  background-color: rgba(0, 0, 0, 0.2) !important;
}
</style>
