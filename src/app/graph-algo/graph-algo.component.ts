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
  conceptPaths:any;
  conceptInit:any = []
  conceptFinal:any = []
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
    for(let i=0;i<this.relations.length;i++){
      this.conceptInit.push(this.findConcept(
        this.relations[i].conceptU, 
        this.relations[i].connector, 
        this.relations[i].conceptV)
      );
    }
    console.log(this.conceptInit)
  }

  reset(){
    this.showMostImportant = false;
    this.showLeastImportant = false;
    this.showAllConcepts = false;
    this.showMostComplex = false;
    this.conceptInit = []
    for(let i=0;i<this.relations.length;i++){
      this.conceptInit.push(this.findConcept(
        this.relations[i].conceptU, 
        this.relations[i].connector, 
        this.relations[i].conceptV)
      );
    }
  }

  separateEdge(){
    //debugger
    let arr = []
    for(let i=0;i<this.relations.length;i++){
      let obj = {
        u: parseInt(this.relations[i].conceptU)+1,
        v: parseInt(this.relations[i].conceptV)+1,
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
    this.conceptPaths = this.dijkstraService.setGraph(this.separateEdge(), this.concepts.length);
    this.formatConcepts(this.conceptPaths);
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
  
  formatConcepts(arr){
    debugger
    this.conceptFinal = []
    arr.forEach(element => {
      let str = ""
      if(element.length >= 1){
        str += this.findRelation(1, element[0])
      }
      for(let i=0;i<element.length-1;i++){
        str += this.findRelation(element[i], element[i+1])
      }
      this.conceptFinal.push(str)
    });
    console.log(this.conceptFinal)
  }

  findRelation(id1, id2){
    let str = ""
    this.relations.forEach(element => {
      let cid1 = parseInt(element.conceptU)
      let cid2 = parseInt(element.conceptV)
      if(cid1 == id1-1 &&  cid2 == id2-1){
        str = this.findConcept(id1-1, element.connector, id2-1);
      }
    });
    return str;
  }

  findConcept(id1, connector, id2){
    let conc1 = ""
    let conc2 = ""
    this.concepts.forEach(element => {
      if(element.id == id1){
        conc1 = element.name;
      }
    });
    this.concepts.forEach(element => {
      if(element.id == id2){
        conc2 = element.name;
      }
    });

    let str = conc1 + " " + connector + " " + conc2 + ", "
    return str
  }

}
