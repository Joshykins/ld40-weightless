let keys = {};
let mouse = {};
window.addEventListener('keydown', function(e) {
	switch(e.keyCode) {
		case 68:keys.d=true;break;
		case 65:keys.a=true;break;
		case 87:keys.w=true;break;
		case 32:keys.s=true;break;
		};
});
window.addEventListener('keyup', function(e) {
	switch(e.keyCode) {

		case 68:keys.d=false;break;
		case 65:keys.a=false;break;
		case 87:keys.w=false;break;
		case 32:keys.s=false;break;
		};
});

window.addEventListener("mousemove", function(event) {
	mouse.x = event.x-adjustX;
	mouse.y = event.y-adjustY;
})
