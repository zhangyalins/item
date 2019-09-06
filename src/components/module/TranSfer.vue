<template>
  <div>
    <div class="content">
      <div class="left-box box">
        <h3>
          <label class="checkbox" :class="{ on : allCheck}" @click="checkedAll"></label>
          水果列表
        </h3>
        <ul class="list">
          <li v-for="(li,index) in fruitsList" :key="index" @click="checked(li)">
            <label class="checkbox" :class="{ on : li.on }"></label>
            <span>{{li.name}}</span>
          </li>
        </ul>
      </div>
      <div class="cen-handle">
        <button class="left-btn btn" :class="{ on : tabLeft}" type="button" @click="toLeft"></button>
        <button class="right-btn btn" :class="{ on : tabRight}" type="button" @click="toRight"></button>
      </div>
      <div class="right-box box">
        <h3>购物车</h3>
        <ul class="list">
          <li v-for="(li,index) in pichOn" :key="index">
            <label class="checkbox" :class="{ on : li.on }"></label>
            <span>{{li.name}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fruitsList: [
        {
          name: "苹果",
          key: 1,
          on: false
        },
        {
          name: "枇杷",
          key: 2,
          on: false
        },
        {
          name: "山楂",
          key: 3,
          on: false
        },
        {
          name: "樱桃",
          key: 4,
          on: false
        },
        {
          name: "水蜜桃",
          key: 5,
          on: false
        },
        {
          name: "草莓",
          key: 6,
          on: false
        },
        {
          name: "菠萝",
          key: 7,
          on: false
        },
        {
          name: "橙子",
          key: 8,
          on: false
        },
        {
          name: "西瓜",
          key: 9,
          on: false
        },
        {
          name: "哈密瓜",
          key: 10,
          on: false
        },
        {
          name: "青枣",
          key: 11,
          on: false
        },
        {
          name: "香蕉",
          key: 12,
          on: false
        }
      ],
      shopList: [],
      pichOn: [],
      allCheck: false,
      tabLeft: false,
      tabRight: false
    };
  },
  watch: {
    shopList(val) {
      if (val.length !== 0) {
        this.tabRight = true;
      } else {
        this.tabRight = false;
      }
    }
  },
  methods: {
    checked(item) {
      if (!item.on) {
        item.on = true;
        this.shopList.push(item);
      } else {
        item.on = false;
        for (let i = this.shopList.length - 1; i >= 0; i--) {
          if (this.shopList[i].key === item.key) {
            this.shopList.splice(i, 1);
          }
        }
      }
      if (this.fruitsList.length === this.shopList.length + 1) {
        this.allCheck = true;
      }
    },
    checkedAll() {
      if (!this.allCheck) {
        this.allCheck = true;
        for (let i = 0; i < this.fruitsList.length; i++) {
          this.shopList.push({
            name: this.fruitsList[i].name,
            key: this.fruitsList[i].key,
            on: this.fruitsList[i].on
          });
          this.fruitsList[i].on = true;
        }
      } else {
        this.allCheck = false;
        this.shopList = [];
        for (let i = 0; i < this.fruitsList.length; i++) {
          this.fruitsList[i].on = false;
        }
      }
    },
    toLeft() {},
    toRight() {
      this.pichOn = this.shopList;
    }
  }
};
</script>
<style scoped>
.content {
  width: 600px;
  height: 288px;
  display: flex;
  flex-direction: row;
}
.box {
  overflow: hidden;
  border: 1px solid #e9e9e9;
  border-radius: 5px;
}
.box h3 {
  padding-left: 16px;
  height: 40px;
  line-height: 40px;
  font-weight: normal;
  font-size: 16px;
  color: #333;
  background-color: #f5f7fa;
}
.box h3 input {
  margin-right: 10px;
}
.left-box {
  flex: 1;
}
.cen-handle {
  width: 100px;
}
.right-box {
  flex: 1;
}
.list {
  height: 288px;
  overflow: auto;
}
.list li {
  font-size: 14px;
  padding: 10px 16px;
  cursor: pointer;
}
.checkbox {
  position: relative;
  display: inline-block;
  width: 14px;
  height: 14px;
  vertical-align: middle;
  margin-top: -4px;
  margin-right: 8px;
  border: 1px solid #dcdfe6;
  border-radius: 3px;
  cursor: pointer;
}
.checkbox.on:before {
  display: inline-block;
  box-sizing: content-box;
  content: "";
  border: 1px solid #fff;
  border-left: 0;
  border-top: 0;
  height: 7px;
  left: 5px;
  position: absolute;
  top: 1px;
  transform: rotate(45deg) scaleY(1);
  width: 3px;
  z-index: 9;
  transition: transform 0.15s ease-in 0.05s;
  transform-origin: center;
}
.checkbox.on:after {
  position: absolute;
  top: -1px;
  left: -1px;
  right: -1px;
  bottom: -1px;
  content: "";
  border-radius: 3px;
  background-color: #409eff;
  border-color: #409eff;
}
.cen-handle {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.btn {
  display: block;
  width: 36px;
  height: 36px;
  margin: 0 auto 16px;
  border-radius: 100px;
  border: 1px solid #dcdfe6;
  cursor: pointer;
  outline: none;
}
.left-btn {
  background: #f5f7fa url("../../assets/images/left_gray.png") no-repeat center;
  background-size: 16px;
}
.left-btn.on {
  background: #409eff url("../../assets/images/left_white.png") no-repeat center;
  background-size: 16px;
}
.right-btn {
  background: #f5f7fa url("../../assets/images/right_gray.png") no-repeat center;
  background-size: 16px;
}
.right-btn.on {
  background: #409eff url("../../assets/images/right_white.png") no-repeat
    center;
  background-size: 16px;
}
</style>