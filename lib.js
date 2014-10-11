var $tree= (function(){
	node = function(v) {
		this.left=null;
		this.right=null;
		this.value= v==undefined?null:v;
	}

	tree = function(v) {
		this.root= new node(v);
	}

	tree.prototype = {
		insert: function(val) {
			insertIntoTree.apply(this,[this.root,val]);

		}
	}

	//Helper Functions
	function insertIntoTree(root, val){
		if(!root || !root.value){
			this.root= new node(val);
			return;
		}
		else if(val<root) {
			if(root.left==null) {
				root.left=new node(val);
				return;
			}
			return insertIntoTree(root.left,val)
		}
		else {
			if(root.right==null) {
				root.right=new node(val);
				return;
			}
			return insertIntoTree(root.right,val)
		}

	}
	
	
	return {
		create: function(v) {
			return new tree(v);
		},

	}

}());




