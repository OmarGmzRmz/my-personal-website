import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
    name: 'readTime'
})
export class ReadTimePipe implements PipeTransform {
    transform(value: any, ...args: any[]) {
        const duration = moment.duration(value, 'milliseconds');
        const seconds = duration.asSeconds();
        if (seconds >= 60 * 60) {
          let hours = duration.asHours();
          hours = Math.ceil(hours);
          return `${hours} hrs`;
        } else {
          let minutes = duration.asMinutes();
          minutes = Math.ceil(minutes);
          return `${minutes} minutes`;
        }
    }

}