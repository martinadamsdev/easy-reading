<template>
  <div>

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
        console.log(this.book);
        // 生成 Rendtion
        this.book.renderTo();
        // 通过 Rendtion.display 渲染电子书

      }

    },
    mounted() {
      this.showEpub()
    }

  }
</script>

<style scoped lang="sass">
  @import "assets/styles/global"

</style>