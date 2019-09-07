<template>
  <div class="ebook">
    <div class="read-wrapper">
      <div id="read"></div>
      <div class="mask"></div>
        <div class="left"></div> 
        <div class="center"></div>
        <div class="right"></div>
    </div>
  </div>
</template>

<script>
  import Epub from 'epubjs'
  const DOWNLOAD_URL = '/static/test.epub'
  export default {
    name: "Ebook",
    methods: {
      // 电子书的解析和渲染
      showEpub() {
        // 生成 Ebook
        this.book = new Epub(DOWNLOAD_URL)
        // 生成 Rendtion
        this.redetion = this.book.renderTo('read', {
          width: window.innerWidth,
          height: window.innerHeight
        });
        // 通过 Rendtion.display 渲染电子书
        this.redetion.display()
      }
    },
    mounted() {
      this.showEpub()
    }

  }
</script>

<style scoped lang="sass">
  @import "assets/styles/global"
  .ebook
    position: relative
    .read-wrapper
      .mask
        position: absolute
        top: 0
        left: 0
        z-index: 100 
        display: flex
        width: 100%
        height: 100%
        .left
          height: 100%
          flex: 0 0 pe2rem(100)
          background: yellow 
        .center
          height: 100%
          flex: 1
          background: red
        .right
          height: 100%
          flex: 0 0 ps2rem(100)
          background: orange   
</style>