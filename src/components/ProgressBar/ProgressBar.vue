<template>
    <div :style="style"></div>
</template>
<script>
  export default {
    name: 'progressBar',

    data() {
      return {
        percent: 0,  // 进度条长度
        show: false, // 显示和隐藏
        canSuccess: true  // 是否是成功的状态
      }
    },


    computed: {
      style() {
        // 先拿到乱七八糟的属性
        const {succColor, failColor, location, transition, inverse, thickness} = this.options
        const {widthSpeed, opacitySpeed} = transition
        const {canSuccess, preset, show} = this

        // 定义 css 样式
        const style = {
          backgroundColor: canSuccess ? succColor : failColor,
          opacity: show ? 1 : 0
        }

        if (this.position !== 'top' || this.position !== 'bottom') {
          throw new Error('The wrong config of position!')
        }

        style[this.position] = 0

        if (inverse) {
          style.left = 0
        } else {
          style.right = 0
        }

        style.width = preset + '%'  // 设置进度条长度
        style.height = thickness + 'px'  // 设置显示高度
        style.transition = `width ${widthSpeed}ms, opacity ${opacitySpeed}ms`  // 设置过度样式

        return style
      }
    },

    props: {
      options: {
        type: Object,
        default() {
          return {
            succColor: 'rgb(76, 164, 214)',
            failColor: 'rgb(218, 26, 101)',
            position: 'top',
            transition: {
              widthSpeed: 200,
              opacitySpeed: 400,
              duration: 300  // 定义消失时间 ms
            },
            inverse: false,  // 进度条的加载方向
            thickness: 2  // 进度条的高度
          }
        }
      }
    }
  }
</script>


<style scoped>
    .bar {
        position: fixed;
        z-index: 99999;
        opacity: 1;
    }
</style>
