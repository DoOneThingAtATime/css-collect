<template>
  <Layout class="site-page">
    <Header>
      <app-header />
    </Header>
    <Layout>
      <i-content class="site-content">
        <h2 class="title">Examples</h2>
        <router-view></router-view>
      </i-content>
      <Sider class="site-side-menu">
        <app-side-menu />
      </Sider>
    </Layout>
  </Layout>
</template>

<script>
import AppHeader from './Header'
import AppSideMenu from './SideMenu'

export default {
  components: {
    AppHeader,
    AppSideMenu
  }
}
</script>

<style lang="less" scoped>
  .site-page {
    min-height: 100vh;
    background-color: #f5f7fb;
    .site-side-menu {
      background: white;
    }
    .title {
      font-size: 1.5rem;
      font-weight: 400;
    }
    .site-content {
      padding: 24px;
      .page-content {
        min-height: 30em;
        background: white;
      }
    }
  }
</style>
