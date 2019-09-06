<template>
  <div class="bar">
    <div class="progressbar">
      <div class="wrap">
        <div class="bar" :style="{'width':barWidth + '%','backgroundColor':barCol}"></div>
      </div>
      <div class="btn">
        <button @click="toggleBar(0)" class="minus" type="button">-</button>
        <button @click="toggleBar(1)" class="add" type="button">+</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      barWidth: 0,
      barCol: "#409EFF"
    };
  },
  methods: {
    toggleBar(type) {
      if (type === 0) {
        if (this.barWidth !== 0) {
          this.barWidth -= 10;
        }
      } else {
        if (this.barWidth !== 100) {
          this.barWidth += 10;
        }
      }
      // 根据不同值切换颜色
      if (this.barWidth < 40) {
        return (this.barCol = "#E6A23C");
      } else if (this.barWidth < 80) {
        return (this.barCol = "#F56C6C");
      } else {
        return (this.barCol = "#409EFF");
      }
    }
  }
};
</script>

<style scoped>
.progressbar {
  margin-left: 20px;
}
.progressbar .wrap {
  position: relative;
  width: 600px;
  height: 6px;
  overflow: hidden;
  border-radius: 10px;
  background-color: #ebeef5;
}
.progressbar .bar {
  height: 6px;
  transition: width 0.2s;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}
.progressbar .btn {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 600px;
  margin-top: 20px;
}
.progressbar .btn button {
  width: 30px;
  height: 30px;
  font-size: 14px;
  background: none;
  border: 1px solid #e9e9e9;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
}
</style>