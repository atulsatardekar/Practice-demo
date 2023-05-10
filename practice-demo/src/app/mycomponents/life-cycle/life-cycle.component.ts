import { Component } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent {
  public child:any;
onKeyup(data:any){
  console.log(data.value)
  this.child=data.value
}
}

