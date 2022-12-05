import { Component, OnInit } from '@angular/core'
import { EventsTableDataSourceService } from './infrastructure/events-table-data-source.service'
import { EventsTableDataStore } from './infrastructure/events-table-data.store'
import { EventsTableDataQuery } from './infrastructure/events-table-data.query'

@Component({
  selector: 'ta-events-table',
  templateUrl: './events-table.component.html',
  styleUrls: ['./events-table.component.scss'],
  providers: [EventsTableDataSourceService, EventsTableDataStore, EventsTableDataQuery]
})
export class EventsTableComponent implements OnInit {
  displayedColumns: string[] = ['eventType', 'severity', 'user', 'date']

  constructor (public query: EventsTableDataQuery, private service: EventsTableDataSourceService) { }

  ngOnInit (): void {
    this.service.read().subscribe()
  }
}
