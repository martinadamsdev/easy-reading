<template>
  <transition name="slide-right">
    <div class="content">
      <div class="content-wrapper" v-if="bookAvailable">
        <div class="content-item"
             v-for="(item, index) in navigation.toc"
             :key="index"
             @click="jumpTo(item.href)">
          <span class="text">{{item.label}}</span>
        </div>
      </div>
      <div class="empty" v-else>加载中...</div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: "Content",
    props: {
      ifShowContent: Boolean,
      navigation: Object,
      bookAvailable: Boolean
    },
    methods: {
      jumpTo (href) {
        console.log(this.navigation);
        this.$emit('jumpTo', href)
      }
    }
  }
</script>

<style scoped lang="sass">
  @import "assets/styles/global"
  .content
    width: 100%
    height: 100%
    background: white
    .content-wrapper /*目录样式*/
      position: absolute
      z-index: 100
      width: 100%
      height: 100%
      .content-item
        flex: 0
        position: absolute
        top: 0
        left: 0
        z-index: 101
        display: flex
        width: 100%
        height: 100%
        background: white
        .text
          position: absolute
          width: 100%
          height: 10%
          top: px2rem(50)
          @include center
          font-size: px2rem(12)


</style>