import { Inject, Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { TableDataStore } from './table-data.store'
import { map, Observable, tap } from 'rxjs'
import { TableDataResponse, TableState } from './table-state'
import { URL_SEGMENT } from '../table/table'

@Injectable()
export abstract class TableDataSourceService<T> {
  protected constructor (@Inject(URL_SEGMENT) protected urlSegment: string, protected readonly http: HttpClient, protected store: TableDataStore<T>) { }

  read (): Observable<TableState<T>> {
    this.store.setLoading(true)

    return this.http.get<TableDataResponse<T>>(`api/${this.urlSegment}`).pipe(tap((data: TableDataResponse<T>) => {
      this.store.update(state => ({
        objects: data.objects,
        total: data.total,
        offset: data.offset,
        pageSize: data.pageSize,
        filters: state.filters
      }
      ))
    }), map(data => {
      this.store.setLoading(false)

      return {
        objects: data.objects,
        total: data.total,
        offset: data.offset,
        pageSize: data.pageSize,
        filters: {}
      }
    }))
  }
}
