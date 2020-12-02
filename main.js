let data = ["car", "maroon", "country", "metro", "city", "mafia", "menu", "camera", "map", "make"];
let list = document.getElementById("list");

function createElem(item) {
	let div = document.createElement("div");
	let br = document.createElement("br");
	div.innerHTML = item;
	list.append(div);
	div.after(br);
}

(function() {
	list.innerHTML = "";
	data.forEach((item) => createElem(item));
})();

function filterFunc(e) {
	list.innerHTML = "";
	let str = e.target.value.toLowerCase();

	data.forEach(function(item) {
		if (str.length == 0) createElem(item);
		else if (item.includes(str) == true) {

			let div = document.createElement("div");
			let br = document.createElement("br");

			for (i = 0; i < str.length; i++) {
				if (str[i] == item[i]) {
					let new_word = [];
					for (k = 0; k < item.length; k++) new_word.push(item[k]);
					
					let string1 = new_word.slice(0, str.length);
					let string2 = new_word.slice(str.length, item.length);
					let newStr1 = string1.join("");
					let newStr2 = string2.join("");

					div.innerHTML = `<mark>${newStr1}</mark>${newStr2}`;
					list.append(div);
					div.after(br);
				} else return;
			}
		}
	});
}

document.getElementById('inp-main').addEventListener("input", (e) => filterFunc(e));

