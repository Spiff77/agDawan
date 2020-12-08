import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent implements OnInit {

  @Input('aname') theName;

  constructor() { }

  ngOnInit(): void {
  }

}
