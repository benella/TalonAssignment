import { TableDataStore } from '../../../table/infrastructure/table-data.store'
import { EventData } from '../event'
import { Injectable } from '@angular/core'

@Injectable()
export class EventsTableDataStore extends TableDataStore<EventData> {
  constructor () {
    super('event-store')
  }
}
