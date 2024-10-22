<template>
  <div id="app">
    <!-- 主界面 -->
    <div v-if="showHome" class="home-screen">
      <h1>小游戏合集</h1>
      <nav>
        <button @click="selectGame('2048')">2048</button>
        <button @click="selectGame('flappy-bird')">Flappy Bird</button>
      </nav>
    </div>

    <!-- 游戏界面 -->
    <div v-else class="game-screen">
      <router-view></router-view>
      <transition name="fade">
        <div v-if="showHomeButton" class="home-button" @click="returnHome">
          返回主界面
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      showHome: true,
      showHomeButton: false,
      touchStartY: 0,
    }
  },
  methods: {
    selectGame(game) {
      if (this.$route.path !== `/${game}`) {
        this.showHome = false;
        this.$router.push(`/${game}`).catch(err => {
          if (err.name !== 'NavigationDuplicated') {
            throw err;
          }
        });
      }
    },
    returnHome() {
      if (this.$route.path !== '/') {
        this.showHome = true;
        this.$router.push('/').catch(err => {
          if (err.name !== 'NavigationDuplicated') {
            throw err;
          }
        });
      }
    },
    handleTouchStart(event) {
      if (event.touches.length === 2) {
        this.touchStartY = event.touches[0].clientY;
      }
    },
    handleTouchMove(event) {
      if (event.touches.length === 2) {
        const touchEndY = event.touches[0].clientY;
        if (touchEndY - this.touchStartY > 50) { // 下滑超过50像素
          this.showHomeButton = true;
          this.hideHomeButtonAfterDelay();
        }
      }
    },
    handleContextMenu(event) {
      event.preventDefault(); // 阻止默认的右键菜单
      this.showHomeButton = true;
      this.hideHomeButtonAfterDelay();
    },
    hideHomeButtonAfterDelay() {
      setTimeout(() => {
        this.showHomeButton = false;
      }, 3000); // 3秒后隐藏
    },
    updateShowHome() {
      this.showHome = this.$route.path === '/';
    }
  },
  mounted() {
    this.updateShowHome();
    this.$router.afterEach(() => {
      this.updateShowHome();
    });
    document.addEventListener('touchstart', this.handleTouchStart);
    document.addEventListener('touchmove', this.handleTouchMove);
    document.addEventListener('contextmenu', this.handleContextMenu);
  },
  beforeUnmount() {
    document.removeEventListener('touchstart', this.handleTouchStart);
    document.removeEventListener('touchmove', this.handleTouchMove);
    document.removeEventListener('contextmenu', this.handleContextMenu);
  },
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.home-screen, .game-screen {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: auto;
}

.home-button {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 10px 20px;
  border-radius: 0 0 10px 10px;
  cursor: pointer;
}

button {
  margin: 10px;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
}

/* 添加过渡动画 */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateY(-100%) translateX(-50%);
}
.fade-enter-to, .fade-leave {
  opacity: 1;
  transform: translateY(0) translateX(-50%);
}
</style>
