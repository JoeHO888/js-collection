'use strict';


const grouping_count = collection=>{
	let dict = {}
	let counted_array = []
	
	collection.filter(e=>{
		if(counted_array.includes(e)){
			dict[e]+=1
		}else{
			counted_array.push(e)
			dict[e]=1
		}
	})
	
	return dict
	
}
module.exports = grouping_count;
