$linkedList = (function() {

	node = function(val) {
		this.next=null;
		//this.last=null
		this.value=typeof val==undefined?null:val;
	}

	LinkedList = function() {
		this.head= new node();
	}

	LinkedList.prototype= {
		add: function(val) {
			n= new node(val);
			if(!this.head.value) {
				this.head=n;
			}
			else{
				trav= this.head;
				while(trav.next) {
					trav=trav.next;
				}
				trav.next=n;
			}
			return this;
		}
	}

	return {
		create: function() {
			return new LinkedList;
		}
	}
}());