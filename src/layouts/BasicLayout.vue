<template>
  <Layout class="site-page">
    <Header>
      <app-header />
    </Header>
    <Layout>
      <Sider class="site-side-menu">
        <app-side-menu />
      </Sider>
      <Content class="site-content">
        <router-view></router-view>
      </Content>
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
    .site-side-menu {
      background: white;
    }
    .site-content {
      background: #f5f5f5;
      padding: 24px;
      .page-content {
        min-height: 30em;
        background: white;
      }
    }
  }
</style>
