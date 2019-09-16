import { Component, OnInit, Input } from '@angular/core';
import { Concept } from '../classes/concept';
import { Relation } from '../classes/relation';

@Component({
  selector: 'app-graph-canvas',
  templateUrl: './graph-canvas.component.html',
  styleUrls: ['./graph-canvas.component.css']
})
export class GraphCanvasComponent implements OnInit {

  constructor() { }

  @Input() concepts: any = [];
  relations:any = [];
  relationWindow: boolean = false;
  graphWindow:boolean = false;
  showAlert:boolean = false;
  showAlert2:boolean = false;
  showAlert3:boolean = false;

  model = new Relation(null, null, null, null);

  ngOnInit() {
  }

  removeConcept(event, concept){
    //console.log(this.concepts)
    let i=0;
    for(;i<this.concepts.length;i++){
      if(concept.id == this.concepts[i].id){
        break;
      }
    }
    this.concepts.splice(i, 1);
    let timestoerase = 0
    for(let j=0;j<this.relations.length;j++){
      if(this.relations[j].conceptV === concept.id.toString(10) ||
        this.relations[j].conceptU === concept.id.toString(10)){
          timestoerase++
        }
    }
    if(timestoerase!=0){
      this.removeRelation(timestoerase, concept.id.toString(10))
    }
    //console.log(this.relations)
  }

  removeRelation(times, id){
    if(times == 0){
      return;
    }else{
      let i = 0;
      for(;i<this.relations.length;i++){
        if(this.relations[i].conceptV == id ||
          this.relations[i].conceptU == id){
          break;
        }
      }
      this.relations.splice(i, 1);
      this.removeRelation(times-1, id);
    }
    
  }

  showRelationWindow(){
    this.relationWindow = !this.relationWindow; 
  }

  validateRelation(){
    if(this.model.conceptU == this.model.conceptV){
      this.showAlert = true;
      this.showAlert2 = false;
      this.showAlert3 = false;
    }else if(this.model.connector == null || this.model.connector == "" || 
            this.model.relevance == null || (this.model.relevance < 0 || this.model.relevance > 10) ){
      this.showAlert = false;
      this.showAlert2 = true;
      this.showAlert3 = false;
    }else{
      this.showAlert = false;
      this.showAlert2 = false;
      if(this.relations.length == 0){
        this.relations.push(Object.assign({}, this.model));
      }else{
        for(let i=0;i<this.relations.length;i++){
          let x = this.relations[i];
          if(x.conceptU == this.model.conceptU &&
             x.conceptV == this.model.conceptV){
            this.showAlert3 = true;
            return;
          }
        }
       this.relations.push(Object.assign({}, this.model));
      }
    }
    //console.log(this.relations)
  }

  mountGraph(){
    this.graphWindow = !this.graphWindow;
  }

}