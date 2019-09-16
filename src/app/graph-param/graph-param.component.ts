import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Concept } from '../classes/concept'

@Component({
  selector: 'app-graph-param',
  templateUrl: './graph-param.component.html',
  styleUrls: ['./graph-param.component.css']
})
export class GraphParamComponent implements OnInit {

  constructor() { }

  @Output() sendParams = new EventEmitter<any>();

  concepts:any = []
  model = new Concept("", "", 0);
  showAlert:boolean = false;

  ngOnInit() {
  }

  ngAfterViewInit(){
    
  }

  addConcept(){
    var size = this.concepts.length;
    if(size > 0){
      this.model.id = this.concepts[size-1].id+1;
    }

    if(this.verifyEquality()){
      this.showAlert = false;
      var x = Object.assign({}, this.model);
      this.concepts.push(x);
      this.sendParams.emit(this.concepts);
      this.showConcepts();
    }else{
      this.showAlert = true;
    }
    
  }

  verifyEquality(){
    for(var i=0;i<this.concepts.length;i++){
      if(this.concepts[i].name.length == this.model.name.length){
        var eq = 0
        for(var j=0;j<this.concepts[i].name.length;j++){
          if(this.concepts[i].name[j] == this.model.name[j]){
            eq++;
          }
        }
        if(eq == this.model.name.length){
          return false;
        }
      }
    }
    return true;
  }

  showConcepts(){
    //console.log(this.concepts)
  }

}
