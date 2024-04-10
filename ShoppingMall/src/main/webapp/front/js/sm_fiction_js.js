/**
 * 
 */

let imgPath = '../../img/';
let productionPath = '../html/production.html';

function changeContent(box, src, title, writer) {
	box.find('img').attr('src', src);
	box.find('.fiction-title').text(title);
	box.find('.fiction-writer').text(writer);
}

function addProduction(prods) {
	if (prods.length > 0) {
		// img 주소, 제목, 작가 총 3개 요소
		if (prods[0].length > 0 && prods[0].length < 4) {

			$.get(productionPath, function(data) {
				let prodBox = $(data);
				let prod = prods[0];
				for (let i = 0; i < prods.length; i++) {
					prod = prods[i];
					let box = prodBox.clone();
					changeContent(box, imgPath + prod[0], prod[1], prod[2]);
					$('main').append(box);
				}
			});
		}
	}
}