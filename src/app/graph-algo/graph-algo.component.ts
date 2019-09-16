import { Component, OnInit, Input } from '@angular/core';
import { DijkstraService } from '../services/dijkstra.service';
import { DfsService } from '../services/dfs.service';

@Component({
  selector: 'app-graph-algo',
  templateUrl: './graph-algo.component.html',
  styleUrls: ['./graph-algo.component.css']
})
export class GraphAlgoComponent implements OnInit {

  @Input() relations:any = []
  @Input() concepts:any = []
  showRelations:boolean = true;
  showMostImportant:boolean = false;
  showLeastImportant:boolean = false;
  showAllConcepts:boolean = false;
  showMostComplex:boolean = false;


  constructor(
    private dijkstraService: DijkstraService
    , private dfsService: DfsService
  ) { }

  ngOnInit() {
  }

  reset(){
    this.showMostImportant = false;
    this.showLeastImportant = false;
    this.showAllConcepts = false;
    this.showMostComplex = false;
  }

  separateEdge(){
    let arr = []
    for(let i=0;i<this.relations.length;i++){
      let obj = {
        u: this.relations[i].conceptU+1,
        v: this.relations[i].conceptV+1,
        w: this.relations[i].relevance
      };
      arr.push(obj);
    }
    return arr;
  }

  longestPath(){
    this.showMostImportant = true;
    this.showLeastImportant = false;
    this.showAllConcepts = false;
    this.showMostComplex = false;
  }

  shortestPath(){
    this.showMostImportant = false;
    this.showLeastImportant = true;
    this.showAllConcepts = false;
    this.showMostComplex = false;
    this.dijkstraService.setGraph(this.separateEdge(), this.concepts.length);
  }

  dfs(){
    this.showMostImportant = false;
    this.showLeastImportant = false;
    this.showAllConcepts = true;
    this.showMostComplex = false;
    this.dfsService.setGraph(this.separateEdge());
  }

  biggestCC(){
    this.showMostImportant = false;
    this.showLeastImportant = false;
    this.showAllConcepts = false;
    this.showMostComplex = true;
  }
  

}
