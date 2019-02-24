let game = {
  //запускаем игру
  run() {
    console.log("игра начата");
    while (true) {
      const direction = mover.getDirection();
      if (direction === null) {
        console.log("Игра закончена");
        statistic.getDirectionStat();
        return;
      }
      const nextPoint = mover.getNextPosition(direction);
      renderer.clear();
      player.move(nextPoint);
      renderer.render();
    }
  },
  init() {
    //метод иницилизации
    console.log("Ваше положение - о");
    renderer.render();
    console.log("Для начала игры наберите game.run()");
  }
};

game.init();
