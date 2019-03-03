let name = document.getElementById("name");
let mail = document.getElementById("mail");

let erorName = document.getElementById("eror-div-name");
let erorMail = document.getElementById("eror-div-mail");



function isNameValid(){
	if(!name.value){
		name.classList.add("eror-animation");
		return erorName.innerHTML = 'Пустое поле :('
	}
};
function isMailValid(){
	var regexp = /^([a-z\d!#$%&'*+\-\/=?^_'{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_'{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
	if(!mail.value){
		mail.classList.add("eror-animation");
		return erorMail.innerHTML = 'Пустое поле :('
	} else if(!regexp.test(mail.value)){
		mail.classList.add("eror-animation");
		return erorMail.innerHTML = 'Введите корректный e-mail'
	}
};
function clearErors(){
	erorName.innerHTML = "";
	erorMail.innerHTML = "";
};

function clearErorStyles(){
	name.classList.remove("eror-animation");
	mail.classList.remove("eror-animation");
};



let form = document.getElementById("reg-form");
form.addEventListener("submit", function (event) {
	clearErors();
	isNameValid();
	isMailValid();
	event.preventDefault();
});

document.addEventListener("click", function (event) {
clearErorStyles();
});