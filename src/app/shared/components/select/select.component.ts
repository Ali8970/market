import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  constructor() { }
  @Output() selection = new EventEmitter();
  @Input() options: any[] = [];
  @Input() title:string = ""
  ngOnInit(): void {
  }


  onChange(value: any){
    this.selection.emit(value);
  }

}
