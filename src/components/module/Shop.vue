<template>
  <div>
    <div class="shop">
      <dl v-for=" (li,index) in shopList" :key="index">
        <dt>{{li.name}}：</dt>
        <dd
          :class="{ on: type.on}"
          v-for="(type,i) in li.type"
          :key="i"
          @click="clickOn(li,type,index)"
        >{{type.title}}</dd>
      </dl>
      <div class="data">
        <label>已选条件：</label>
        <div>
          <span v-for="(p,index) in pitchOn" :key="index">{{p.title}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
let lastNum = null;
export default {
  data() {
    return {
      shopList: [
        {
          name: "品牌",
          key: 0,
          type: [
            {
              title: "惠普",
              on: false,
              num: 1
            },
            {
              title: "联想",
              on: false,
              num: 2
            },
            {
              title: "戴尔",
              on: false,
              num: 3
            },
            {
              title: "三星",
              on: false,
              num: 4
            },
            {
              title: "宏基",
              on: false,
              num: 5
            },
            {
              title: "苹果",
              on: false,
              num: 6
            },
            {
              title: "神舟",
              on: false,
              num: 7
            },
            {
              title: "华硕",
              on: false,
              num: 8
            },
            {
              title: "方正",
              on: false,
              num: 9
            }
          ]
        },
        {
          name: "价格",
          key: 1,
          type: [
            {
              title: "3000-3999",
              on: false,
              num: 10
            },
            {
              title: "4000-4999",
              on: false,
              num: 11
            },
            {
              title: "5000-5999",
              on: false,
              num: 12
            },
            {
              title: "6000-6999",
              on: false,
              num: 13
            },
            {
              title: "7000-7999",
              on: false,
              num: 14
            },
            {
              title: "8000-8999",
              on: false,
              num: 15
            },
            {
              title: "9000-9999",
              on: false,
              num: 16
            },
            {
              title: "10000以上",
              on: false,
              num: 17
            }
          ]
        },
        {
          name: "尺寸",
          key: 2,
          type: [
            {
              title: "8.9英寸以及以下",
              on: false,
              num: 18
            },
            {
              title: "11英寸",
              on: false,
              num: 19
            },
            {
              title: "12英寸",
              on: false,
              num: 20
            },
            {
              title: "13英寸",
              on: false,
              num: 21
            },
            {
              title: "14英寸",
              on: false,
              num: 22
            },
            {
              title: "15英寸",
              on: false,
              num: 23
            },
            {
              title: "16英寸",
              on: false,
              num: 24
            }
          ]
        },
        {
          name: "显卡",
          key: 3,
          type: [
            {
              title: "独立显卡",
              on: false,
              num: 25
            },
            {
              title: "集成显卡",
              on: false,
              num: 26
            },
            {
              title: "核芯显卡",
              on: false,
              num: 27
            }
          ]
        }
      ],
      pitchOn: [],
      key: []
    };
  },
  methods: {
    // to crh
    clickOn(list, item, index) {
      for (let i = 0; i < list.type.length; i++) {
        list.type[i].on = false;
      }
      item.on = true;

      let commonkey = [];
      for (let c = 0; c < this.pitchOn.length; c++) {
        if (this.pitchOn[c].num === list.key) {
          commonkey.push(c);
        }
      }
      // commonkey == 0则直接push当前数据 不等于0 则
      if (commonkey.length != 0) {
        //反过来删除 pitchOn 中同一行的所有数据
        for (let i = commonkey.length - 1; i >= 0; i--) {
          this.pitchOn.splice(commonkey[i], 1, {
            title: item.title,
            on: item.on,
            num: list.key
          });
        }
      } else {
        this.pitchOn.push({
          title: item.title,
          on: item.on,
          num: list.key
        });
      }
    }
  }
};
</script>

<style scoped>
.shop {
  border: 1px solid #e9e9e9;
  border-radius: 5px;
  padding: 0 10px;
}
.shop dl {
  display: flex;
  flex-direction: row;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px dashed #e9e9e9;
}
.shop dl:last-child {
  border-bottom: 0;
}
.shop dl dt {
  color: #999;
}
.shop dl dd {
  cursor: pointer;
}
.shop dl dd.on {
  color: #c4284d;
}
.data {
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  height: 50px;
  line-height: 50px;
  background-color: #efefef;
}
.data label {
  color: #666;
}
.data span {
  margin-right: 16px;
}
</style>