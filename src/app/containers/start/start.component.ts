import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  @Input() name: string
  @Input() status: string
  @Input() image: string

  constructor() { }

  ngOnInit(): void {
  }

}
