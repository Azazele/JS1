let mover = {
  getDirection() {
    const avaliableDirections = [2, 4, 6, 8];
    while (true) {
      let direction = parseInt(prompt("Введите направление: 2, 4, 6, 8"));
      if(avaliableDirections.includes(direction)){
        statistic.directionStat.push(direction);
      } else {
        statistic.directionStat.push("В данном ходе были введены не корректные данные");
      }
      if (isNaN(direction)) {
        return null;
      }
      if (!avaliableDirections.includes(direction)) {
        alert("Для перемещение введите 2, 4, 6, 8");
        continue;
      }
      return direction;
    }
  },

  getNextPosition(direction) {
    const nextPosition = {
      x: player.x,
      y: player.y
    };
    switch (direction) {
      case 2:
        nextPosition.y--;
        break;
      case 4:
        nextPosition.x--;
        break;
      case 6:
        nextPosition.x++;
      case 8:
        nextPosition.y++;
      default:
        console.log("error");
    }
    return nextPosition;
  }
};
