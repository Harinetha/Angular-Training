import { Component, OnInit ,Input} from '@angular/core';
@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {

  data = [
    {name: 'Mr. IQ',id:'1'},
    {name: 'Magneta',id:'2'},
    {name: 'Bombasto',id:'3'},
    {name: 'Hari',id:'4'},
    {name: 'priya',id:'5'},
    {name: 'Anu',id:'6'},
    {name: 'Arun',id:'7'},
    {name: 'Aravind',id:'8'},
    {name: 'Jothi',id:'9'},
    {name: 'Yamini',id:'10'},
    {name: 'Priya',id:'11'},
    {name: 'vimala',id:'12'},
    {name: 'Harinetha',id:'13'},
    {name: 'Vinothini',id:'14'},
    {name: 'Kumar',id:'15'},
    {name: 'Karthikeyan',id:'16'},
    {name: 'Saravanan',id:'17'},
    {name: 'JayaSri',id:'18'},
    {name: 'Janu',id:'19'},
    {name: 'Nandhini',id:'20'},
    {name: 'Raja',id:'21'},
    {name: 'Ravi',id:'22'},
    {name: 'Deepak',id:'23'},
    {name: 'Kavipriya',id:'24'}
  ];
  constructor() { }
  

  ngOnInit() {
  }

}

