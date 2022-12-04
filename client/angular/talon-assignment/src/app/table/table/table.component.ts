import { Component, OnInit } from '@angular/core'

export interface Event {
  eventType: string;
}

@Component({
  selector: 'ta-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  data: Event[] = [
    { eventType: 'login' },
    { eventType: 'login' },
    { eventType: 'login' },
    { eventType: 'login' },
    { eventType: 'login' },
    { eventType: 'login' }
  ]

  displayedColumns: string[] = ['eventType']

  constructor () { }

  ngOnInit (): void {
  }
}
