/**
 * 
 */


function changeContent(box, src, title, writer) {
	box.find('img').attr('src', src);
	box.find('.fiction-title').text(title);
	box.find('.fiction-writer').text(writer);
}

function addProduction(prods) {
	if (prods.length > 0) {
		// img 주소, 제목, 작가 총 3개 요소
		if (prods[0].length > 0 && prods[0].length < 4) {

			$.get("production.html", function(data) {
				let prodBox = $('.prod-box');
				let prod = prods[0];
				changeContent(prodBox, prod[0], prod[1], prod[2]);
				for (let i = 1; i < prods.length; i++) {
					prod = prods[i];
					let box = prodBox.clone();
					changeContent(box, prod[0], prod[1], prod[2]);
					$('main').append(box);
				}
			});
		}
	}
}


function addGenre(genre,) {

}