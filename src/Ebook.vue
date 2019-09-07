<template>
  <div class="ebook">
    <div class="title-wrapper" v-show="ifTitleAndMenuShow">
      <div class="left">
        <span class="icon-back icon"></span>
      </div>
      <div class="right">
        <div class="icon-wrapper">
          <span class="icon-cart icon"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-person icon"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-more icon"></span>
        </div>
      </div>
    </div>
    <div id="read"></div>
    <div class="read-wrapper">
      <div class="mask">
        <div class="left" @click="prevPage"></div>
        <div class="center" @click="toggleTitleAndMenu">

        </div>
        <div class="right" @click="nextPage"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import Epub from 'epubjs'
  const DOWNLOAD_URL = '/static/test.epub'
  export default {
    name: "Ebook",
    data () {
      return {
        ifTitleAndMenuShow: false
      }
    },
    methods: {
      toggleTitleAndMenu () {
        this.ifTitleAndMenuShow = !this.ifTitleAndMenuShow
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

<style lang="sass">
  @import "assets/styles/global"
  .ebook
    position: relative
    .title-wrapper
      position: absolute
      top: 0
      left: 0
      z-index: 101
      display: flex
      width: 100%
      height: px2rem(48)
      background: white
      box-shadow: 0 px2rem(8) px2rem(8) rgba(0, 0, 0, .15)
      .left
        flex: 0 0 px2rem(60)
      .right
        flex: 1
        display: flex
        justify-content: flex-end
        .icon-wrapper
          flex: 0 0 px2rem(40)
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
          /*background: yellow */
        .center
          height: 100%
          flex: 1
          /*background: red*/
        .right
          height: 100%
          flex: 0 0 px2rem(100)
          /*background: orange   */
</style>