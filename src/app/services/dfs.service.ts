import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DfsService {

  graph: any = []

  constructor() { }

  setGraph(edges){
    for(let i=0;i<edges.length;i++){
      this.graph.push([]);
    }
    for(let i=0;i<edges.length;i++){
      let obj = {
        v: edges[i].v,
        w: edges[i].w
      };
      this.graph[edges[i].u].push(obj);
    }
    //console.log(edges)
  }
}
