import { InjectionToken } from '@angular/core'
import { TableDataSourceService } from '../infrastructure/table-data-source.service'
import { TableDataStore } from '../infrastructure/table-data.store'
import { TableDataQuery } from '../infrastructure/table-data.query'

export const URL_SEGMENT = new InjectionToken<string>('__URL_SEGMENT__')
export const TABLE_DATA_SOURCE = new InjectionToken<TableDataSourceService<any>>('__TABLE_DATA_SOURCE__')
export const TABLE_DATA_STORE = new InjectionToken<TableDataStore<any>>('__TABLE_DATA_STORE__')
export const TABLE_DATA_QUERY = new InjectionToken<TableDataQuery<any>>('__TABLE_DATA_QUERY__')
