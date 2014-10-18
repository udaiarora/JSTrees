var $tree= (function(){
	node = function(v) {
		this.left=null;
		this.right=null;
		this.value= typeof v==undefined?null:v;
	}

	tree = function(v) {
		this.root= new node(v);
	}

	tree.prototype = {
		insert: function(val) {
			insertIntoTree.apply(this,[this.root,val]);
			return this;
		},

		height: function() {
			return ht(this.root);
		}

	}

	//Helper Functions
	function insertIntoTree(root, val){
		if(!root || !root.value){
			this.root= new node(val);
			return;
		}
		else if(val<root.value) {
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

	function ht(root) {
			if(root==null) {
				return 0;
			}
			else {
				var leftHeight=ht(root.left);
				var rightHeight=ht(root.right);
				if(leftHeight>rightHeight)
					return 1+leftHeight;
				return 1+rightHeight;
			}
		}

	
	
	return {
		create: function(v) {
			return new tree(v);
		},

	}

}());




