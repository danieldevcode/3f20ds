class Node {
    constructor(data){
        this.data = data;
        this.children = [];
    }
}

class Tree {
    constructor() {
      this.root = null;
    }
  
    addNode(data, toNodeData)  {
      const node = new Node(data);
  
      const parent = toNodeData ? this.findBFS(toNodeData) : null;
  
      if(parent)
        parent.children.push(node);
      else
        if(!this.root)
          this.root = node;
        else
          return 'Tried to store node at root, root already exists.'
    }
    
    findBFS(data) {
      const queue = [this.root];
      let _node = null;
  
      this.traverseBFS((node) => {
        if (node.data == data)
          _node = node;
      })
  
      return _node;
    }
  
    traverseBFS(cb) {
      const queue = [this.root]
  
      if(cb)
        while(queue.length) {
          const node = queue.shift();
  
          cb(node)
  
          for(const child of node.children)
            queue.push(child)
        }
    }
}

function ejemplo(){
    let tree = new Tree();
    tree.addNode('Carlos');
    tree.addNode('Daniel', 'Carlos');
    tree.addNode('Sara', 'Carlos');
    tree.addNode('Carlitos', 'Daniel');
    tree.traverseBFS((node) => {console.log('Current Node: ', node)});
    tree.findBFS("Node 1")
}
ejemplo();