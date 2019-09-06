<template>
  <div class='Main'>
    <div class='container'>
      <div class='sideBar'>
        <ul>
          <li
            :class='{on : li.on}'
            v-for='(li,index) in nav'
            :key='index'
            @click='tabNav(li,index)'
          >
            <router-link :to='li.url'>{{li.name}}</router-link>
          </li>
        </ul>
      </div>
      <div class='box'>
        <div class='content'>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      nav: [
        {
          name: '选项卡',
          url: '/tab',
          on: true
        },
        {
          name: '折叠面板',
          url: '/collapse',
          on: false
        },
        {
          name: '进度条',
          url: { name: 'progressBar' },
          on: false
        },
        {
          name: '筛选',
          url: '/shop',
          on: false
        },
        {
          name: '穿梭框',
          url: { name: 'transfer' },
          on: false
        }
      ]
    };
  },
  methods: {
    tabNav(item, index) {
      for (let i = 0; i < this.nav.length; i++) {
        this.nav[i].on = false;
      }
      item.on = true;
    }
  }
};
</script>
<style scoped>
.Main {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
}
.container {
  flex: 1;
  display: flex;
  flex-direction: row;
}
.sideBar {
  width: 250px;
}
.sideBar li {
  padding-left: 48px;
  height: 50px;
  line-height: 50px;
  font-size: 14px;
}
.sideBar li a {
  display: block;
}
.sideBar li.on {
  position: relative;
  background-color: #e6fffb;
}
.sideBar li.on a {
  color: #13c2c2;
}
.sideBar li.on:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-right: 3px solid #13c2c2;
}
.box {
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: #f0f2f5;
}
.content {
  flex: 1;
  margin: 16px;
  padding: 16px;
  background-color: #fff;
}
</style>