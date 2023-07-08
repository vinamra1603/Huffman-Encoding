// let  display = require("./display");

function HuffManAlgo(charfreq){

    class HuffmanNode
    {
        constructor()
        {
            this.data = 0;
            this.c = '';
            this.left = this.right = null;
            this.treeData={
            "name": "",
            "value": "5",
            "type": "gray",
            "level": "red",
            "children": []
            };
        }
    }
    
        // to print and store length according to their char value print function made
        function printCode(root,s)
        {
            // if node is leaf its mean it is traversed and our previous node is found 
            if (root.left == null
                && root.right == null
                && (root.c).toLowerCase() != (root.c).toUpperCase()) {
                console.log(root.c+":"+s);
               
                let node = new ecl();
                node.code=s;
                node.elem=root.c;
                node.length=s.length;
                displayarr.push(node);
                return;
            }
            // call to left add 0 to left area
            // call to  right add 1 to right area
            printCode(root.left, s + "0");
            printCode(root.right, s + "1");
        }
            // n is length of array of passed to execute
            let n = charfreq.length;
            let charArray=[];
            for(let i=0;i<n;i++){
                charArray.push(`s${i+1}`);
            }
            // console.log(charArray);
       
            // queue data structure used to create tree
            let q = [];
            for (let i = 0; i < n; i++) {
                let hn = new HuffmanNode();
       
                hn.c = charArray[i];
                hn.data = charfreq[i]
                hn.treeData.name=hn.data + " : "+'s'+`${i+1}`;;
                hn.treeData.level=getDarkColor();
                hn.left = null;
                hn.right = null;
    
                q.push(hn);
            }
       
            // create a root node
            let root = null;
              q.sort(function(a,b){return b.data-a.data;});
    
            while (q.length > 1) {
       
                // first min extract.
    
                let x = q[q.length-1];
                q.pop();
       
                // second min extract.
                let y = q[q.length-1];
                q.pop();
       
                // new node f which is equal
                let f = new HuffmanNode();

                let xvalue = x.treeData.value;
                let yvalue = y.treeData.value;
                // to the sum of the frequency of the two nodes
                // assigning values to the f node.
                let val = x.data + y.data;
                val = val.toFixed(4);
            
                f.data = Number(val);
                f.c = '-';
                f.treeData.name=f.data;
                f.treeData.value = Number(xvalue)+Number(yvalue);
                f.treeData.children.push(y.treeData);
                f.treeData.children.push(x.treeData);
                f.treeData.level=getDarkColor();
                // first extracted node as left child.
                f.left = y;
       
                // second extracted node as the right child.
                f.right = x;
       
                // marking the f node as the root node.
                
                root = f;
    
                // add this node to the priority-queue.
                // q.push(f);
                q.sort(function(a,b){return b.data-a.data;});
                let i=0;
                while(i<q.length && f.data<q[i].data){
                    i++;
                }
                q.splice(i,0,f);
            }
       
            // print the codes by traversing the tree
            console.log(root.treeData);
             display(root.treeData);
            printCode(root, "");  
}


// module.exports={
//     HuffManAlgo:HuffManAlgo
// }    