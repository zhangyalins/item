<template>
  <div>
    <div class="tab">
      <i class="bar" :style="{left:leftWidth,width:liWidth}"></i>
      <ul>
        <li
          @click="tabClick($event,li,index,tabs)"
          :ref="'tab' + index"
          :class="{ on : li.on}"
          v-for="(li,index) in tabs"
          :key="index"
        >{{li.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
let arr = [];
export default {
  name: "",
  data() {
    return {
      tabs: [
        {
          name: "用户管理",
          on: true
        },
        {
          name: "配置管理",
          on: false
        },
        {
          name: "角色管理",
          on: false
        },
        {
          name: "定时任务补偿",
          on: false
        }
      ],
      liWidth: 64 + "px",
      leftWidth: 0
    };
  },
  mounted() {
    const obj = {
      a: 1,
      b: 2,
      c: {
        s: 3,
        q: [
          {
            w: 4,
            r: 5,
            y: [
              {
                z: 1,
                x: 1
              },
              {
                z: 2,
                x: 2
              }
            ]
          },
          {
            t: 6,
            y: 7
          }
        ]
      }
    };
    this.getObj(obj);
    let sum = 0;
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
  },
  methods: {
    getObj(obj) {
      for (let item in obj) {
        if (typeof obj[item] === "number") {
          arr.push(obj[item]);
        } else if (typeof obj[item] === "object") {
          this.getObj(obj[item]);
        }
      }
    },
    tabClick(e, item, i, list) {
      for (let it = 0; it < list.length; it++) {
        list[it].on = false;
        item.on = true;
      }
      const el = e.currentTarget;
      this.liWidth = el.offsetWidth + "px";
      this.leftWidth = el.offsetLeft + "px";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  padding-left: 20px;
}
.tab {
  width: 600px;

  position: relative;
  margin: 0 20px;
  border-bottom: 2px solid #f2f2f2;
}
.bar {
  position: absolute;
  left: 0;
  bottom: 0;
  content: "";
  display: inline-block;
  height: 2px;
  transition: left 0.2s;
  background-color: #409eff;
}
ul {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 35px;
  line-height: 35px;
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.tab li {
  cursor: pointer;
}
.tab li.on {
  color: #409eff;
}
</style>
