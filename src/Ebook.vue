<template>
  <div class="ebook">
    <title-bar :ifTitleAndMenuShow="ifTitleAndMenuShow"></title-bar>
    <div class="read-wrapper">
      <div id="read"></div>
      <div class="mask">
        <div class="left" @click="prevPage"></div>
        <div class="center" @click="toggleTitleAndMenu"></div>
        <div class="right" @click="nextPage"></div>
      </div>
    </div>
    <menu-bar :ifTitleAndMenuShow="ifTitleAndMenuShow"
              :fontSizeList="fontSizeList"
              :defaultFontSize="defaultFontSize"
              @setFontSize="setFontSize"
              ref="menuBar"></menu-bar>
  </div>
</template>

<script>
  import TitleBar from "@/components/TitleBar"
  import MenuBar from "@/components/MenuBar"
  import Epub from 'epubjs'
  const DOWNLOAD_URL = '/static/test.epub'
  export default {
    name: "Ebook",
    components: {MenuBar, TitleBar},
    comments: {
      TitleBar,
      MenuBar
    },
    data () {
      return {
        ifTitleAndMenuShow: false,
        fontSizeList: [
          { fontSize: 12 },
          { fontSize: 14 },
          { fontSize: 16 },
          { fontSize: 18 },
          { fontSize: 20 },
          { fontSize: 22 },
          { fontSize: 24 }
        ],
        defaultFontSize: 16
      }
    },
    methods: {
      setFontSize (fontSize) {
        this.defaultFontSize = fontSize
        if (this.themes) {
          this.theme.fontSize(fontSize + 'px')
        }
      },
      toggleTitleAndMenu () {
        this.ifTitleAndMenuShow = !this.ifTitleAndMenuShow
        if(!this.ifTitleAndMenuShow) {
          this.$refs.menuBar.hideSetting()
        }
      },
      prevPage () {
        if (this.redetion) {
          this.redetion.prev()
        }
      },
      nextPage () {
        if (this.redetion) {
          this.redetion.next()
        }
      },
      // 电子书的解析和渲染
      showEpub() {
        // 生成 Ebook
        this.book = new Epub(DOWNLOAD_URL)
        // 生成 Rendtion
        this.rendition = this.book.renderTo('read', {
          width: window.innerWidth,
          height: window.innerHeight
        });
        // 通过 Rendtion.display 渲染电子书
        this.rendition.display()
        // 获取 Theme 对象
        this.theme = this.rendition.themes
        // 设置默认字体
        this.setFontSize(this.defaultFontSize)
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
        z-index: 50
        display: flex
        width: 100%
        height: 100%
        .left
          height: 100%
          flex: 0 0 px2rem(100)
        .center
          height: 100%
          flex: 1
        .right
          height: 100%
          flex: 0 0 px2rem(100)
</style>