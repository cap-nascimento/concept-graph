import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphParamComponent } from './graph-param.component';

describe('GraphParamComponent', () => {
  let component: GraphParamComponent;
  let fixture: ComponentFixture<GraphParamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphParamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphParamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
