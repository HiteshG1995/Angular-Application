import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, searchTearm: any): any {

    return value.filter(function(searchh: any) {

      return searchh.name.toLowerCase().indexOf(searchTearm.toLowerCase()) > - 1
    });
  }

  // transform(value1: any, searchTearm1: any): any {

  //   return value1.filter(function(searchh) {

  //     return searchh.name.toLowerCase().indexOf(searchTearm1.toLowerCase()) > - 1
  //   });
  // }

}