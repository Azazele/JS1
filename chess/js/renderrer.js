let board = {
	words: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
	generate(){
		let board = "";
		for (let rows = 0; rows < config.rows; rows++){
			board += "<tr>";
			for(let cols = 0; cols <config.cols; cols++){
				if (rows == 0 && cols != 0) {
					board += `<td class="sub" data-x="${rows}" data-y="${cols}">${this.words[cols - 1]}</td>`;
				} else if(cols == 0 && rows !=0) {
					board += `<td class="sub" data-x="${rows}" data-y="${cols}"> ${rows}</td>`;
				} else {
					board += `<td class="main" data-x="${rows}" data-y="${cols}"></td>`;
				}
			}
			board += "</tr>";
		}
		let readyBoard = `<table>${board}</table>`;
		return readyBoard;
	},
	putBoard(){
		document.body.insertAdjacentHTML("afterbegin", this.generate());
	},
	putBlackFigurs(){
		let mainFigs = ["Ладья", "Конь", "Слон", "Ферзь", "Король", "Слон", "Конь", "Ладья"];
		let subFigs = ["Пешка", "Пешка", "Пешка", "Пешка", "Пешка", "Пешка", "Пешка", "Пешка"];
		for (let i = 0; i < config.rows-1; i++){
			let td = document.querySelector(`[data-x="${config.rows - (config.rows - 1)}"][data-y="${i+1}"]`); 
			console.log(td);
			td.innerHTML = "<span class='blackFig'>" + (mainFigs[i]) + "</span>";
		}
		for (let i = 0; i < config.rows-1; i++){
			let td = document.querySelector(`[data-x="${config.rows - (config.rows - 2)}"][data-y="${i+1}"]`); 
			console.log(td);
			td.innerHTML = "<span class='blackFig'>" + (subFigs[i]) + "</span>";
		}
	},
	putWhiteFigurs(){
		let mainFigs = ["Ладья", "Конь", "Слон", "Ферзь", "Король", "Слон", "Конь", "Ладья"];
		let subFigs = ["Пешка", "Пешка", "Пешка", "Пешка", "Пешка", "Пешка", "Пешка", "Пешка"];
		for (let i = 0; i < config.rows-1; i++){
			let td = document.querySelector(`[data-x="${config.rows - 1}"][data-y="${i+1}"]`); 
			console.log(td);
			td.innerHTML = "<span class='blackFig'>" + (mainFigs[i]) + "</span>";
		}
		for (let i = 0; i < config.rows-1; i++){
			let td = document.querySelector(`[data-x="${config.rows - 2}"][data-y="${i+1}"]`); 
			console.log(td);
			td.innerHTML = "<span class='blackFig'>" + (subFigs[i]) + "</span>";
		}
	}
}