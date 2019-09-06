<template>
  <div>
    <div class="collapse">
      <div class="item" :class="{on : col.on}" v-for="(col,index) in collapse" :key="index">
        <h3 @click="toggleBox(col)">
          {{col.title}}
          <i class="icon"></i>
        </h3>
        <div class="box">{{col.desc}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      collapse: [
        {
          title: "一致性 Consistency",
          desc:
            "与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。",
          on: true
        },
        {
          title: "反馈 Feedback",
          desc:
            "控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。",
          on: false
        },
        {
          title: "效率 Efficiency",
          desc:
            "简化流程：设计简洁直观的操作流程；清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。",
          on: false
        },
        {
          title: "可控 Controllability",
          desc:
            "用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。",
          on: false
        }
      ]
    };
  },
  methods: {
    toggleBox(item) {
      item.on = !item.on;
    }
  }
};
</script>

<style scoped>
.collapse {
  margin-left: 20px;
  padding: 0 10px;
  width: 600px;
  border-radius: 5px;
  box-shadow: 0 0 5px #cccccc;
}
.collapse .item {
  overflow: hidden;
  border-bottom: 1px solid #e9e9e9;
}
.icon {
  display: block;
  margin-right: 5px;
  width: 13px;
  height: 13px;
  transition: transform 0.2s;
  background: url("../../assets/images/right.png") no-repeat;
  background-size: 13px 13px;
}
.collapse .item h3 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 0;
  margin: 0;
  height: 48px;
  line-height: 48px;
  font-weight: normal;
  font-size: 14px;
  cursor: pointer;
}
.collapse .item .box {
  height: 0px;
  transition: height 0.2s;
  font-size: 14px;
  color: #666666;
}
.item.on .box {
  padding: 10px 0;
  height: 40px;
  border-top: 1px solid #e9e9e9;
}
.item.on .box:last-child,
.item:last-child {
  border-bottom: 0;
}
.item.on .icon {
  transform: rotate(90deg);
}
</style>