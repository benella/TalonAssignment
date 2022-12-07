import { MatPaginatorIntl } from '@angular/material/paginator'

export function TablePaginatorConfiguration () {
  const customPaginatorIntl = new MatPaginatorIntl()

  customPaginatorIntl.itemsPerPageLabel = 'Rows per page:'

  return customPaginatorIntl
}
