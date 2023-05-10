import { Component, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-life-cycle-child',
  templateUrl: './life-cycle-child.component.html',
  styleUrls: ['./life-cycle-child.component.css']
})
export class LifeCycleChildComponent {
@Input()myInput:any

constructor(){}

ngOnChanges(changes:SimpleChange){
console.log (changes)
}
ngOnIt(){
  
}
}
