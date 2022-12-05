import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'humanize'
})
export class HumanizePipe implements PipeTransform {
  transform (value: string): unknown {
    value = value.split(/(?=[A-Z])/).join(' ')
    return value[0].toUpperCase() + value.slice(1)
  }
}
