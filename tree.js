/** TreeNode: node for a general tree. */

class TreeNode {
    constructor(val, children = []) {
      this.val = val;
      this.children = children;
    }
  }
  
  class Tree {
    constructor(root = null) {
      this.root = root;
    }
  
    /** sumValues(): add up all of the values in the tree. */
  
    sumValues() {
        if(!this.root) return 0;

        let total = this.root.val;

        function sumHelper(node){
            for(let child of node.children){
                total += child.val;
                if(child.children.length > 0){
                    sumHelper(child);
                }
            }
        }

        sumHelper(this.root);
         return total;

        }
      
    
  
    /** countEvens(): count all of the nodes in the tree with even values. */
  
    countEvens() {
        if(!this.root) return 0;
        let count = this.root.val % 2 === 0 ? 1 : 0;
       
        function countHelper(){
            for(let child of node.children){
                if(child.val % 2 === 0) count++;
                if(child.children.length > 0){
                    countHelper(child);
                }
            }
        }
        countHelper(this.root);
        return count;

    }
  
    /** numGreater(lowerBound): return a count of the number of nodes
     * whose value is greater than lowerBound. */
  
    numGreater(lowerBound) {
        if(!this.root) return 0;
        let numCount = this.root.val > lowerBound ? 1: 0;

        function numGreaterHelper(){
            for(let child of node.children){
                if(child.val > lowerBound) numCount++;
                if(child.children.length > 0){
                    numGreaterHelper(child);
                }
            }
        }

        numGreaterHelper(this.root);
        return numCount;

  
    }
  }
  
  module.exports = { Tree, TreeNode };
  