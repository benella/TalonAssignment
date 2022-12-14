import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TableComponent } from './table/table.component'
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatChipsModule } from '@angular/material/chips'
import { MultiSelectFilterComponent } from './multi-select-filter/multi-select-filter.component'
import { SharedModule } from '../common/shared.module'
import { MatSelectModule } from '@angular/material/select'
import { ReactiveFormsModule } from '@angular/forms'
import { MatIconModule } from '@angular/material/icon'
import { TablePaginatorConfiguration } from './paginator/paginator-configuration'

@NgModule({
  declarations: [
    TableComponent,
    MultiSelectFilterComponent
  ],
  exports: [
    TableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatChipsModule,
    SharedModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  providers: [{ provide: MatPaginatorIntl, useValue: TablePaginatorConfiguration() }]
})
export class TableModule { }
