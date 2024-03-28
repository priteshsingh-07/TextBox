let text = document.getElementById("text");
		let textInfo = document.getElementById("textinfo");
		let clr ;

		function transformUpperCase(){
			text.value = text.value.toUpperCase();
		}

		function transformLowerCase(){
			text.value = text.value.toLowerCase();
		}
		function findText(){
			let searchText = prompt("Enter the text : ");
			if (text.value.includes(searchText)) {
				alert(`Search text ${searchText} is present`);
			}
			else{
				alert(`Search text ${searchText} is not present`)
			}
		}
		function changeColor(){
			clr = prompt(("Enter your fav color : ").toLowerCase())
			text.style.color=clr;
		}
		function textUnderline(){
			text.style.textDecoration=`underline 2px solid ${clr}`
		}
		function updateInfo() {
			let numberOfWords = text.value.trim().split(" ").length

			textInfo.innerHTML = `This text contains ${numberOfWords}
			 words and ${text.value.length} charcters`
		}