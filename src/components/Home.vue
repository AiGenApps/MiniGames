<template>
  <div class="home">
    <h1>迷你游戏合集</h1>
    <div class="game-list">
      <router-link to="/2048" class="game-item">
        <div class="game-card">
          <h2>2048</h2>
          <p>经典数字益智游戏</p>
        </div>
      </router-link>
      <router-link to="/flappy-bird" class="game-item">
        <div class="game-card">
          <h2>Flappy Bird</h2>
          <p>考验反应的小鸟飞行游戏</p>
        </div>
      </router-link>
      <!-- 可以继续添加更多游戏入口 -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
}
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
}

h1 {
  margin-bottom: 20px;
  color: #2c3e50;
  font-size: 1.8rem;
}

.game-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  width: 100%;
}

.game-item {
  text-decoration: none;
  color: inherit;
}

.game-card {
  background-color: #ffffff;
  border-radius: 8px;
  padding: 12px;
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.game-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.game-card h2 {
  margin: 0 0 5px 0;
  font-size: 1.1rem;
  color: #2c3e50;
}

.game-card p {
  margin: 0;
  font-size: 0.75rem;
  color: #7f8c8d;
}

@media (max-width: 400px) {
  .home {
    padding: 10px;
  }

  h1 {
    font-size: 1.5rem;
    margin-bottom: 15px;
  }

  .game-list {
    gap: 10px;
  }

  .game-card {
    height: 80px;
    padding: 8px;
  }

  .game-card h2 {
    font-size: 0.9rem;
  }

  .game-card p {
    font-size: 0.65rem;
  }
}
</style>
