'use strict';


const loopApproach = collection=>{
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
const filterMapApproach = () => {

	//3. o: {'1':6, '2':3, '3':4, '4':2}
}


const grouping_count = collection=>{
	let counts = {};
	collection.forEach(x=> { counts[x] = (counts[x] || 0)+1; });
	return counts;
}
const grouping_count = loopApproach
module.exports = grouping_count;

//1. i: [1,1,1,1,2,3,1,3,4,2,3,1,3,4,2]; o: [1,2,3,4]
const findUniqueElement = collection => {return [...new Set(collection)]} 