<template>
  <div class="side-menu">
    {{menuData}}
  </div>
</template>

<script>
export default {
  data () {
    const menuData = this.getMenuData(this.$router.options.routes)
    return {
      menuData
    }
  },
  created () {
  },
  methods: {
    getMenuData (routes = []) {
      const result = []
      routes.map(route => {
        if (route.name) {
          result.push(route)
        } else {
          if (route.children && route.children.length > 0) {
            this.getMenuData(route.children)
          }
        }
      })
      return result
    }
  }
}
</script>

<style lang="less" scoped>
  .site-header {
    height: 60px;
    line-height: 60px;
    background: #333;
    font-size: 20px;
    color: white;
  }
</style>
