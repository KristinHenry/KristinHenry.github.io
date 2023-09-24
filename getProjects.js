console.log("testing testing")


//  This is an example of the html for a 'card'
//
// <div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">
//    <div class="card h-100">
//       <a href="http://underground-lab.com/page6.html"><img class="card-img-top" src="imgs/hiv.jpg" alt=""></a>
//       <div class="card-body">
//           <h4 class="card-title">
//             <a href="http://underground-lab.com/page6.html">Molecular Biology of HIV</a>
//           </h4>
//           <p class="card-text">Animation of the Molecular Biology of an HIV infection.</p>
//       </div>
//    </div>
// </div>
//


// ToDo: figure out appending new project to page
//	* abstract this into a data structure for projects
//  * add alt-text to images?
//  * create some sort of unique id for each project/card
//  * append div with this data


// ToDo: load csv file with projects, and append cards for each
// * ...


// var myproject = {
// 		id: "0001",
// 		img: {
// 				src: "imgs/hiv.jpg",
// 				img_link: "../page6.html",
// 				alt_txt: "should be alt-text for image"
// 		},
// 		title: "Molecular Biology of HIV",
// 		title_link: "../page6.html",
// 		text: "Animation of the Molecular Biology of an HIV infection."
// 	}


// console.log(myproject)



// var cards = document.getElementsByClassName("row");

// console.log("cards", cards)


function appendCard(targ, card_data){

	console.log("appendeding card")
	
	// console.log("test")

	var t = document.createElement('div')

	// console.log("class ", t)
	t.className += " col-lg-3 col-md-4 col-sm-6 portfolio-item"
	t.innerHTML = '<div class="card h-100">'+ 
		'<a href="' + card_data.img_link + '"><img class="card-img-top" src="imgs/' + card_data.img_src + '" alt="'+ card_data.img_alt_txt  +'"></a>' +
		'<div class="card-body">' +
		'<h4 class="card-title">' +
            '<a href="'+ card_data.title_link +'">'+ card_data.title +'</a>' +
        '</h4>' +
        '<p class="card-text">' + card_data.text  +'</p>'
		+ '</div>'
		+ '</div>'
	 	+ '</div>' ;
	

	targ.appendChild(t);

}


