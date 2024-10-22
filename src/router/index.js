import Vue from 'vue'
import VueRouter from 'vue-router'
import Game2048 from '@/games/2048/Game2048.vue'
import FlappyBird from '@/games/flappy-bird/FlappyBird.vue'
import Home from '@/components/Home.vue'  // 需要创建这个组件

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/2048',
    name: '2048',
    component: Game2048
  },
  {
    path: '/flappy-bird',
    name: 'FlappyBird',
    component: FlappyBird
  }
]

const router = new VueRouter({
  mode: 'history',  // 使用 HTML5 历史模式
  routes
})

export default router
