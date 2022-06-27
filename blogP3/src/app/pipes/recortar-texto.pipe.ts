import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recortarTexto'
})
export class RecortarTextoPipe implements PipeTransform {

  transform(value: string): string {
    return `${value.split(" ").slice(0, 50).join(" ")}` + `...`;
  }

}
