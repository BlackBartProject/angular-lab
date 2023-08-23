import { Component, OnInit } from '@angular/core';
import { DataStructure } from '../shared/classes/data-structure';

@Component({
  selector: 'app-typescript-lab',
  templateUrl: './typescript-lab.component.html',
  styleUrls: ['./typescript-lab.component.css'],
})
export class TypescriptLabComponent implements OnInit {
  dataStructure: DataStructure = new DataStructure();

  constructor() {}

  ngOnInit() {}
}
