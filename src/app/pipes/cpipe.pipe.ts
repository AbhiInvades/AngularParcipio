import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpipe'
})
export class CpipePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return value%2 == 0
  }

}
