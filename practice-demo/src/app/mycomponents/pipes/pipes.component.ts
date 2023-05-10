import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
public myData:string="Virat kohli"
public myNum:number=45
public date=new Date();
public object:any={
  name:'virat kohli',
  age:45,

}
}
