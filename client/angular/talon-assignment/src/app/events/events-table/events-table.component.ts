import { Component } from '@angular/core'
import { EventsTableDataSourceService } from './infrastructure/events-table-data-source.service'
import { EventsTableDataStore } from './infrastructure/events-table-data.store'
import { EventsTableDataQuery } from './infrastructure/events-table-data.query'
import { TABLE_DATA_QUERY, TABLE_DATA_SOURCE, TABLE_DATA_STORE } from '../../table/table/table'

@Component({
  selector: 'ta-events-table',
  templateUrl: './events-table.component.html',
  styleUrls: ['./events-table.component.scss'],
  providers: [
    { provide: TABLE_DATA_SOURCE, useClass: EventsTableDataSourceService },
    { provide: TABLE_DATA_STORE, useClass: EventsTableDataStore },
    { provide: TABLE_DATA_QUERY, useClass: EventsTableDataQuery }
  ]
})
export class EventsTableComponent {
  displayedColumns: string[] = ['eventType', 'severity', 'user', 'date']
  filters: string[] = ['eventType']
}
