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
    hasLoops(){
        for (let i = 0; i < this.adj.length; i++) {
            for (let j = 0; j < this.adj[j].length; j++) {
                let number = this.adj[i][j];
                if(number === this.adj[i][j+1] && number != undefined){
                    print("¿Has loops? true");
                    return true;
                }
            }
        }
        print("¿Has loops? false");
        return false;
    }
}

function ejemplo(){
    g = new Graph(5);
    g.addEdge(0,1);
    g.addEdge(0,2);
    g.addEdge(1,3);
    g.addEdge(2,4);
    g.addEdge(2,2);
    g.showGraph();
    g.hasLoops();
}
ejemplo();