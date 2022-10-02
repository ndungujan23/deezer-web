import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortNumber'
})
export class ShortNumberPipe implements PipeTransform {

  transform(value?: number, ...args: any[]): any {
    value = value || 0;
    if (isNaN(value) || !value) {
      return null;
    }

    let key = '';
    let abs = Math.abs(value);
    for (const i of this.powers()) {
      const reduced = Math.round((abs / i.value) * Math.pow(10, 1)) / Math.pow(10, 1);
      if (reduced >= 1) {
        abs = reduced;
        key = i.key;
        break;
      }
    }

    return String().concat(value < 0 ? '-' : '', abs.toString(), key);
  }

  private powers(): { key: string; value: number }[] {
    return [
      { key: 'Q', value: Math.pow(10, 15) },
      { key: 'T', value: Math.pow(10, 12) },
      { key: 'B', value: Math.pow(10, 9) },
      { key: 'M', value: Math.pow(10, 6) },
      { key: 'K', value: 1000 },
    ];
  }
}
