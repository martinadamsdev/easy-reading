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
              :themeList="themeList"
              :defaultTheme="defaultTheme"
              @setTheme="setTheme"
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
        defaultFontSize: 16,
        themeList: [
          {
            name: 'default',
            style: {
              body: {
                'color': '#000', 'background': '#fff'
              }
            }
          },
          {
            name: 'eye',
            style: {
              body: {
                'color': '#000', 'background': '#ceeaba'
              }
            }
          },
          {
            name: 'night',
            style: {
              body: {
                'color': '#fff', 'background': '#000'
              }
            }
          },
          {
            name: 'gold',
            style: {
              body: {
                'color': '#000', 'background': 'rgba(241, 236, 226)'
              }
            }
          }
        ],
        defaultTheme: 0
      }
    },
    methods: {
      setTheme (index) {
        this.themes.select(this.themeList[index].name)
        this.defaultTheme = index
      },
      registerTheme () {
        this.themeList.forEach(theme => {
          // console.log(theme);
          this.themes.register(theme.name, theme.style)
        })
      },
      setFontSize (fontSize) {
        this.defaultFontSize = fontSize
        if (this.themes) {
          this.themes.fontSize(fontSize + 'px')
        }
      },
      toggleTitleAndMenu () {
        this.ifTitleAndMenuShow = !this.ifTitleAndMenuShow
        if(!this.ifTitleAndMenuShow) {
          this.$refs.menuBar.hideSetting()
        }
      },
      prevPage () {
        if (this.rendition) {
          this.rendition.prev()
        }
      },
      nextPage () {
        if (this.rendition) {
          this.rendition.next()
        }
      },
      // 电子书的解析和渲染
      showEpub () {
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
        this.themes = this.rendition.themes
        // 设置默认字体
        this.setFontSize(this.defaultFontSize)
        // this.themes.register(name, styles)
        // this.themes.select(name)
        this.registerTheme()
        this.setTheme(this.defaultTheme)
        // 获取 Locations 对象
        // 通过 epubjs 的钩子函数来实现
        this.book.ready.then(() => {
          this.book.locations.generate()
        }).then(result => {
          console.log(result);
        })
        // console.log(this.book.locations);
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
          flex: 0 0 px2rem(100)
        .center
          height: 100%
          flex: 1
        .right
          height: 100%
          flex: 0 0 px2rem(100)
</style>