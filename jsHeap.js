var $heap = (function(){
	
	heap = function(){
		heap_arr=[];
		heap_arr.push();
	}

	heap.prototype= {
		add: function(item) {
			heap_arr.push(item);
			if(heap_arr.length==1) {
				return;
			}
			else {
				child=heap_arr.length-1;
				parent=Math.ceil((child-1)/2);
				while(heap_arr[child]>heap_arr[parent]) {
					temp=heap_arr[child];
					heap_arr[child]=heap_arr[parent];
					heap_arr[parent]=temp;
					child=parent;
					parent=Math.ceil((child-1)/2);
				} 
			}
			console.log(heap_arr);
		}
	}




	return {
		create: function(){
			return new heap();
		}
	}
	
}());