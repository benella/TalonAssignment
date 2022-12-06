import { Inject, Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { TableDataStore } from './table-data.store'
import { map, Observable, tap } from 'rxjs'
import { FilterParam, TableDataResponse, TableState } from './table-state'
import { URL_SEGMENT } from '../table/table'

@Injectable()
export abstract class TableDataSourceService<T> {
  protected constructor (@Inject(URL_SEGMENT) protected urlSegment: string, protected readonly http: HttpClient, protected store: TableDataStore<T>) { }

  read (offset: number, pageSize: number, filters: FilterParam[] = []): Observable<TableState<T>> {
    this.store.setLoading(true)

    let params = new HttpParams().set('offset', offset).set('pageSize', pageSize)
    filters.forEach(f => (params = params.set(f.name, f.value)))

    return this.http.get<TableDataResponse<T>>(`api/${this.urlSegment}`, { params }).pipe(tap((data: TableDataResponse<T>) => {
      this.store.update(state => ({
        ...state,
        objects: data.objects,
        total: data.total
      }
      ))
    }), map(data => {
      this.store.setLoading(false)

      return {
        objects: data.objects,
        total: data.total,
        offset: data.offset,
        pageSize: data.pageSize,
        filters: []
      }
    }
    ))
  }
}
