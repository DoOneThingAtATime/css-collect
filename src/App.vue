<template>
  <Layout class="site-page">
    <Header class="site-header">
      <span class="logo">logo</span>
      CSS Playground
    </Header>
    <Layout>
      <Sider class="site-sider">
        sider
      </Sider>
      <Content class="site-content">
        <div class="page-content">content</div>
      </Content>
    </Layout>
  </Layout>
</template>

<style lang="less" scoped>
.site-page {
  min-height: 100vh;
  .site-header {
    .logo {
      border: 1px solid #f46258;
      padding: 16px;
    }
    height: 60px;
    line-height: 60px;
    background: #333;
    font-size: 20px;
    color: white;
  }
  .site-sider {
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
