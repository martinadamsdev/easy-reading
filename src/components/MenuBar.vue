<template>
  <div class="menu-bar">
    <transition name="slide-up">
      <div class="menu-wrapper" :class="{'hide-box-shadow': ifSettingShow || !ifTitleAndMenuShow}" v-show="ifTitleAndMenuShow">
        <div class="icon-wrapper">
          <span class="icon-menu icon"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-progress icon" @click="showSetting(2)"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-bright icon" @click="showSetting(1)"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-a icon" @click="showSetting(0)">A</span>
        </div>
      </div>
    </transition>
    <transition name="slide-up">
      <div class="setting-wrapper" v-show="ifSettingShow">
        <div class="setting-font-size" v-if="showTag === 0" :fontSizeList="fontSizeList">
          <div class="preview" :style="{fontSize: fontSizeList[0].fontSize + 'px'}">A</div>
          <div class="select">
            <div class="select-wrapper"
                 v-for="(item, index) in fontSizeList"
                 :key="index"
                 @click="setFontSize(item.fontSize)">
              <div class="line"></div>
              <div class="point-wrapper">
                <div class="point" v-show="defaultFontSize === item.fontSize">
                  <div class="small-point" ></div>
                </div>
              </div>
              <div class="line"></div>
            </div>
          </div>
          <div class="preview" :style="{fontSize: fontSizeList[fontSizeList.length - 1].fontSize + 'px'}">A</div>
        </div>
        <div class="setting-theme" v-else-if="showTag === 1">
            <div class="setting-theme-item"
                 v-for="(item, index) in themeList"
                :key="index" @click="setTheme(index)">
              <div class="preview"
                   :style="{background: item.style.body.background}"
                   :class="{'no-border': item.style.body.background !== '#fff'}"

              ></div>
              <div class="text" :class="{'selected': index === defaultTheme }">{{item.name}}</div>
            </div>
        </div>
        <div class="setting-progress" v-else-if="showTag === 2">
          <div class="progress-wrapper">
            <input class="progress"
                   type="range"
                   max="100"
                   min="0"
                   step="1"
                   @change="onProgressChange($event.target.value)"
                   @input="onProgressInput($event.target.value)"
                   :value="progress"
                   :disabled="!bookAvailable"
                   ref="progress">
          </div>
          <div class="text-wrapper">
            <span>{{bookAvailable ? progress + '%' : '加载中...'}}</span>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: "MenuBar",
    data () {
      return {
        ifSettingShow: false,
        showTag: 0,
        progress: 0,
        // bookAvailable: false
      }
    },
    props: {
      ifTitleAndMenuShow: {
        type: Boolean,
        default: false
      },
      fontSizeList: Array,
      defaultFontSize: Number,
      themeList: Array,
      defaultTheme: Number,
      bookAvailable: Boolean
    },
    methods: {
      onProgressInput (progress) {
        this.progress = progress
        this.$refs.progress.style.backgroundSize = `${this.progress}% 100%`
      },
      onProgressChange (progress) {
        this.$emit('onProgressChange', progress)
      },
      setTheme (index) {
        this.$emit('setTheme', index)
      },
      setFontSize (fontSize) {
        this.$emit('setFontSize', fontSize)
      },
      showSetting (tag) {
        this.ifSettingShow = true
        this.showTag = tag
      },
      hideSetting () {
        this.ifSettingShow = false
      }
    }
  }
</script>

<style scoped lang="sass">
  @import "assets/styles/global"
  .menu-bar
    .menu-wrapper
      position: absolute
      bottom: 0
      left: 0
      z-index: 101
      display: flex
      width: 100%
      height: px2rem(48)
      background: white
      box-shadow: 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, .15)
      &.hide-box-shadow
        box-shadow: none
      .icon-wrapper
        flex: 1
        @include center()
        .icon-progress
          font-size: px2rem(28)
        .icon-bright
          font-size: px2rem(24)
    .setting-wrapper
      position: absolute
      bottom: px2rem(48)
      left: 0
      z-index: 101
      width: 100%
      height: px2rem(60)
      box-shadow: 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, .15)
      background: white
      .setting-font-size
        display: flex
        height: 100%
        .preview
          flex: 0 0 px2rem(40)
          @include center
        .select
          display: flex
          flex: 1
          .select-wrapper
            flex: 1
            display: flex
            align-items: center
            &:first-child
              .line
                &:first-child
                  border-top: none
              .point-wrapper
                border-left: none
            &:last-child
              .line
                &:last-child
                  border-top: none
              .point-wrapper
                border-left: none
            .line
              flex: 1
              height: 0
              justify-content: center
              border-top: px2rem(1) solid #ccc
            .point-wrapper
              position: relative
              flex: 0 0 0
              width: 0
              height: px2rem(7)
              border-left: px2rem(1) solid #ccc
              .point
                position: absolute
                top: px2rem(-8)
                left: px2rem(-10)
                width: px2rem(20)
                height: px2rem(20)
                border-radius: 50%
                background: white
                border: px2rem(1) solid #ccc
                box-shadow: 0 px2rem(4) px2rem(4) rgba(0, 0, 0, .15)
                @include center
                .small-point
                  width: px2rem(5)
                  height: px2rem(5)
                  background: black
                  border-radius: 50%
      .setting-theme
        height: 100%
        display: flex
        .setting-theme-item
          flex: 1
          display: flex
          flex-direction: column
          padding: px2rem(5)
          box-sizing: border-box
          .preview
            flex: 1
            border: px2rem(1) solid #ccc
            box-sizing: border-box
            &.no-border
              border: none
          .text
            flex: 0 0 px2rem(20)
            font-size: px2rem(11)
            color: #ccc
            @include center
            &.selected
              color: #333
      .setting-progress
        position: relative
        width: 100%
        height: 100%
        .progress-wrapper
          width: 100%
          height: 100%
          @include center
          padding: 0 px2rem(30)
          box-sizing: border-box
          .progress
            width: 100%
            -webkit-appearance: none
            outline: none
            height: px2rem(2)
            background: -webkit-linear-gradient(#999, #999) no-repeat, #ddd
            background-size: 0 100%
            &.focus
              outline: none
            &::-webkit-slider-thumb
              -webkit-appearance: none
              height: px2rem(20)
              width: px2rem(20)
              border-radius: 50%
              background: white
              box-shadow: 0 4px 4px 0 rgba(0, 0, 0, .15)
              border: px2rem(1) solid #ddd
        .text-wrapper
          position: absolute
          width: 100%
          height: 10%
          top: px2rem(50)
          @include center
          font-size: px2rem(12)



</style>