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

