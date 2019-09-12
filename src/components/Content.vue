<template>
  <transition name="slide-right">
    <div class="content">
      <div class="content-wrapper" v-if="bookAivalabe">
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
      bookAivalabe: Boolean
    },
    methods: {
      jumpTo (href) {
        this.$emit('jumpTo', href)
      }
    }
  }
</script>

<style scoped lang="sass">
  @import "assets/styles/global"
  /*.content*/


</style>