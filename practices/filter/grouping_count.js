'use strict';


//1. i: [1,1,1,1,2,3,1,3,4,2,3,1,3,4,2]; o: [1,2,3,4]
const findUniqueElement = collection => {return [...new Set(collection)]}


//2. i: [1,1,1,1,2,3,1,3,4,2,3,1,3,4,2],[1,2,3,4]; o: [6,3,4,2]
const CreateMapping = (collection,UniqueElement) => {
	return UniqueElement.map(e=>collection.filter(l=>l==e).length)
}


//3. i:[1,2,3,4],[6,3,4,2] ;o: {'1':6, '2':3, '3':4, '4':2}
const CreateDict = (UniqueElement,count) => {
	let dict ={}
	
	UniqueElement.map((e,index)=>dict[e]=count[index])
	return dict
}


const grouping_count = collection=>CreateDict(findUniqueElement(collection),CreateMapping(collection,findUniqueElement(collection)))
module.exports = grouping_count;



/*
const grouping_count = collection=>{
	let counts = {};
	collection.forEach(x=> { counts[x] = (counts[x] || 0)+1; });
	return counts;
}
*/
/*
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
*/


 