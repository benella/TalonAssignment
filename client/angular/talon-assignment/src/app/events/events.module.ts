import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { EventsTableComponent } from './events-table/events-table.component'
import { URL_SEGMENT } from '../table/table/table'
import { TableModule } from '../table/table.module'
import { MatTableModule } from '@angular/material/table'
import { SharedModule } from '../common/shared.module'

@NgModule({
  declarations: [
    EventsTableComponent
  ],
  exports: [
    EventsTableComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    MatTableModule,
    SharedModule
  ],
  providers: [{ provide: URL_SEGMENT, useValue: 'events' }]
})
export class EventsModule { }