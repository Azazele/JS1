let map = {
	makeMap(){
		let map = "";
			for (let col = 1; col < config.colsCount; col++ ){
				map += "<tr>";
				for(let row = 1; row < config.rowsCount; row++){
					map += `<td data-x="${row}" data-y="${col}"></td>`;
				}
			map += "</tr>";
			}
		let readymap = `<table>${map}<table>`;
		return readymap;

	},

	renderPlayer(){
		var user = document.querySelector(`[data-x="${player.x}"][data-y="${player.y}"]`);
		user.classList.add("user");
	},
	clearPlayer(){
		var user = document.querySelector(`[data-x="${mover.oldPosition(event).x}"][data-y="${mover.oldPosition(event).y}"]`);
		user.classList.remove("user");

	},

	putMap(){
		document.body.insertAdjacentHTML("afterbegin", this.makeMap());
	}
}