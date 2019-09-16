<template>
  <div class="home">
    <div id="read"></div>
  </div>
</template>

<script>
  import Epub from 'epubjs'

  global.epub = Epub

  export default {
    name: 'home',
    // components: {
    // }
    mounted() {
      this.book = new Epub('/static/图解物联网.epub')
      this.book.renderTo('read', {
        width: window.innerWidth,
        height: window.innerHeight
      }).display()
    }
  }
</script>
