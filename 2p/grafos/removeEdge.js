function print(element){
    return console.log(element);
}

class Graph {
    constructor(v){
        this.vertices = v;
        this.edges = 0;
        this.adj = [];
        for(let i = 0; i < this.vertices; i++){
            this.adj[i] = [];
        }
    }
    //Methods
    addEdge(v, w){
        this.adj[v].push(w);
        this.adj[w].push(v);
        this.edges++;
    }
    showGraph(){
        for(let i = 0; i < this.vertices; ++i){
            let string = ""; 
            string += ("|" + i + "| -> ");
            for (let j = 0; j < this.vertices; ++j) {
                if (this.adj[i][j] != undefined){
                    string += (this.adj[i][j] + " ");
                }
            }
            print(string);
        }
    }
    removeEdge(source, destination){
        this.adj[source] = this.adj[source].filter(vertex => vertex !== destination);
        this.adj[destination] = this.adj[destination].filter(vertex => vertex !== source);
        return print(`Edge |${source}-${destination}| removed`);
    }
}

function ejemplo(){
    g = new Graph(5);
    g.addEdge(0,1);
    g.addEdge(0,2);
    g.addEdge(1,3);
    g.addEdge(2,4);
    g.showGraph();
    g.removeEdge(0,2);
    g.showGraph();
}
ejemplo();