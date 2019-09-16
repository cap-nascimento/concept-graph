import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DijkstraService {

  graph: any = []

  constructor() { }

  setGraph(edges, n){
    this.graph = []
    for(let i=0;i<n;i++){
      this.graph.push([]);
      for(let j=0;j<n;j++){
        this.graph[i].push(0)
      }
    }
    for(let i=0;i<edges.length;i++){
      this.graph[edges[i].u][edges[i].v] = edges[i].w;
    }
    //console.log(this.graph)
    return this.dijkstra(n);
  }

  dijkstra(n){
    debugger
    let dist = new Array(n+1)
    let sset = new Array(n+1)
    for(let i=0;i<=n;i++){
      dist[i] = Math.max();
      sset[i] = false
    }
    let parent = new Array(n+1)
    parent[1] = -1
    dist[1] = 0
    for(let i=1;i<n;i++){
      let u = this.minDistance(dist, sset, n);
      sset[u] = true;
      for(let v=1;v<=n;v++){
        if(!sset[v] && this.graph[u][v] && dist[u]!=Math.max() &&
           dist[u] + this.graph[u][v] < dist[v]){
          dist[v] = dist[u] + this.graph[u][v];
          parent[v] = u;
        }
      }
    }
    for(let i=1;i<n;i++)
    console.log("Shortest path: ", this.printPath(parent, i))
  }

  printPath(parent, j){
    if(parent[j] == -1){
      return
    }
    this.printPath(parent, parent[j])
    console.log(j, " ")
  }

  minDistance(dist, sset, n){
    let min = Math.max(), min_index
    for(let v=1;v<=n;v++){
      if(!sset[v] && dist[v] <= min){
        min = dist[v]
        min_index = v
      }
    }
    return min_index;
  }

}
