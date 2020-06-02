function timer(ms) {
	return new Promise(res => setTimeout(res, ms));
}

function bubblesort(list, delay){
	const length = list.length;
	for(var i = length - 1; i>=0; i--){
		for(var j = 1; j<length; j++){
			if(list[j-1].value > list[j].value){
				let temp = list[j-1];
				list[j-1] = list[j];
				list[j] = temp;
			}
			//await timer(1);
		}	
	}
	return list
}

export default bubblesort;
