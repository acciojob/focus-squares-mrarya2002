//your JS code here. If required.
const square = document.querySelectorAll(".square");
square.forEach((sq)=>{
	sq.addEventListener("mouseenter",(e)=>{
		// e.target.style.backgroundColor="red";
		let length = square.length;
		for(let i=0;i<length;i++){
			if(square[i].id!=e.target.id){
				square[i].style.backgroundColor="#6F4E37"
			}
		}
		
	})
	// optional: reset when mouse leaves
	  sq.addEventListener("mouseleave", (e) => {
		    let length = square.length;
		for(let i=0;i<length;i++){
			if(square[i].id!=e.target.id){
				square[i].style.backgroundColor="#E6E6FA"
			}
		}
	  });
})