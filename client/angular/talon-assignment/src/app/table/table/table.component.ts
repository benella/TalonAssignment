import { AfterContentInit, Component, ContentChildren, Input, QueryList, ViewChild } from '@angular/core'
import { MatTable, MatColumnDef } from '@angular/material/table'
import { PageEvent } from '@angular/material/paginator'

@Component({
  selector: 'ta-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent<T> implements AfterContentInit {
  @Input() title?: string
  @Input() dataSource: T[] | null = []
  @Input() headers: string[] = []

  @ViewChild(MatTable, { static: true }) table!: MatTable<T>
  @ContentChildren(MatColumnDef) columnDefs?: QueryList<MatColumnDef>

  ngAfterContentInit (): void {
    if (this.columnDefs) {
      this.columnDefs.forEach(col => this.table.addColumnDef(col))
    }
  }

  onPaginate (event: PageEvent): void {
    console.log('paginate', event)
  }
}
