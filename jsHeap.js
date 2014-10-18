var $heap = (function(){
	
	heap = function(){
		heap_arr=[];
	}
	
	heap.prototype= {
		add: function(item) {
			heap_arr.push(item);
			if(heap_arr.length==1) {
				return;
			}
			var child=heap_arr.length-1;
			var parent=Math.ceil((child-1)/2);
			while(heap_arr[child]>heap_arr[parent]) {
				var temp=heap_arr[child];
				heap_arr[child]=heap_arr[parent];
				heap_arr[parent]=temp;
				child=parent;
				parent=Math.ceil((child-1)/2);
			} 
			
			console.log(heap_arr);
		},

		peak: function() {
			return heap_arr[0];
		},

		remove: function() {
			heap_arr[0]=heap_arr[heap_arr.length-1];
			delete heap_arr[heap_arr.length-1];
			if(heap_arr.length==1 || heap_arr.length==0) {
				return;
			}
			var parent=0;
			var child=heap_arr[2]==undefined?heap_arr[1]:heap_arr[1]==undefined?0:heap_arr[1]>heap_arr[2]?1:2;
			while(heap_arr[child]>heap_arr[parent]) {
				var temp=heap_arr[child];
				heap_arr[child]=heap_arr[parent];
				heap_arr[parent]=temp;
				parent=child;
				child=heap_arr[parent*2+1]>heap_arr[parent*2+2]?parent*2+1:parent*2+1;
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