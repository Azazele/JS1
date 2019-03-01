let mover = {
	newPosition(event){
	switch (event.key) {
        case "ArrowUp":
            return {x: player.x, y: player.y - 1};
        case "ArrowDown":
            return {x: player.x, y: player.y + 1};
        case "ArrowLeft":
            return {x: player.x - 1, y: player.y};
        case "ArrowRight":
            return {x: player.x + 1, y: player.y};
        default:
            return {x: player.x, y: player.y};
    }
	},
	oldPosition(event){
		switch (event.key) {
            case "ArrowUp":
                return {x: player.x, y: player.y + 1};
            case "ArrowDown":
                return {x: player.x, y: player.y - 1};
            case "ArrowLeft":
                return {x: player.x + 1, y: player.y};
            case "ArrowRight":
                return {x: player.x - 1, y: player.y};
            default:
                return {x: player.x, y: player.y};
        }
	}
}