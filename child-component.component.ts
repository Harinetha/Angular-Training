import { Component, OnInit ,Input} from '@angular/core';;
@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {
  // @Input() hero: Hero;
  @Input()hero:any;
  dataModel:object;
  
  config = {
      displayKey:"name",
      search:true,
      limitTo: 5
    }
    options: any[] = [];

  constructor() {
    
   }
  ngOnInit() {
  }
  disp(){
  console.log("Displaymodel"+JSON.stringify(this.dataModel));
  }
}

