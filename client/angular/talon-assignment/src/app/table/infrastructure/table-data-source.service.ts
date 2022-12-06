import { Inject, Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { TableDataStore } from './table-data.store'
import { Observable, of, switchMap, tap } from 'rxjs'
import { FilterParam, TableDataResponse } from './table-state'
import { URL_SEGMENT } from '../table/table'

@Injectable()
export abstract class TableDataSourceService<T> {
  protected constructor (@Inject(URL_SEGMENT) protected urlSegment: string, protected readonly http: HttpClient, protected store: TableDataStore<T>) { }

  read (offset: number, pageSize: number, filters: FilterParam[] = []): Observable<void> {
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
    }), switchMap(() => of(undefined)))
  }

  getFilterOptions (): Observable<void> {
    return this.http.get<Record<string, string[]>>(`api/${this.urlSegment}/filter-options`).pipe(tap(filters => {
      this.store.update(state => ({
        ...state,
        filterOptions: filters
      }))
    }), switchMap(() => of(undefined)))
  }
}
