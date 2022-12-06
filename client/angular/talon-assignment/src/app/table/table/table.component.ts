import {
  AfterContentInit,
  Component,
  ContentChildren,
  Inject,
  Input,
  OnDestroy,
  QueryList,
  ViewChild
} from '@angular/core'
import { MatTable, MatColumnDef } from '@angular/material/table'
import { PageEvent } from '@angular/material/paginator'
import { TABLE_DATA_QUERY, TABLE_DATA_SOURCE, TABLE_DATA_STORE } from './table'
import { TableDataSourceService } from '../infrastructure/table-data-source.service'
import { TableDataStore } from '../infrastructure/table-data.store'
import { TableDataQuery } from '../infrastructure/table-data.query'
import { Subject, switchMap, takeUntil } from 'rxjs'

@Component({
  selector: 'ta-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent<T> implements AfterContentInit, OnDestroy {
  @Input() title?: string
  @Input() headers: string[] = []
  @Input() filters: string[] = []

  @ViewChild(MatTable, { static: true }) table!: MatTable<T>
  @ContentChildren(MatColumnDef) columnDefs?: QueryList<MatColumnDef>

  destroy$ = new Subject<void>()

  constructor (@Inject(TABLE_DATA_SOURCE) readonly dataSource: TableDataSourceService<T>,
              @Inject(TABLE_DATA_STORE) readonly store: TableDataStore<T>,
              @Inject(TABLE_DATA_QUERY) readonly query: TableDataQuery<T>) {
    this.dataSource.getFilterOptions().subscribe()
    this.query.pageQuery$.pipe(
      switchMap(([offset, pageSize, filters]) => {
        return this.dataSource.read(offset, pageSize, filters)
      }),
      takeUntil(this.destroy$)).subscribe()
  }

  ngAfterContentInit (): void {
    if (this.columnDefs) {
      this.columnDefs.forEach(col => this.table.addColumnDef(col))
    }
  }

  onPaginate (event: PageEvent): void {
    this.store.update(state => {
      return { ...state, pageSize: event.pageSize, offset: event.pageIndex * event.pageSize }
    })
  }

  onFilterValueChange (newFilterOptions: [string, string[]]): void {
    this.store.update(state => {
      return { ...state, filters: [{ name: newFilterOptions[0], value: newFilterOptions[1].join(',') }] }
    })
  }

  ngOnDestroy (): void {
    this.destroy$.next()
  }
}
