import { Inject, Injectable } from '@angular/core'
import { TableDataSourceService } from '../../../table/infrastructure/table-data-source.service'
import { EventData } from '../event'
import { TABLE_DATA_STORE, URL_SEGMENT } from '../../../table/table/table'
import { HttpClient } from '@angular/common/http'
import { EventsTableDataStore } from './events-table-data.store'

@Injectable()
export class EventsTableDataSourceService extends TableDataSourceService<EventData> {
  constructor (
    @Inject(URL_SEGMENT) protected override urlSegment: string,
    protected override readonly http: HttpClient,
    @Inject(TABLE_DATA_STORE) protected override store: EventsTableDataStore
  ) {
    super(urlSegment, http, store)
  }
}
