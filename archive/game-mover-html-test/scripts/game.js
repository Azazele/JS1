map.putMap();
window.addEventListener('keyup', function(event){
	player.changePosition(mover.newPosition(event));
	map.clearPlayer();
	map.renderPlayer();

});
