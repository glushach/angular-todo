import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], search: string = ''): any[] {
    if(!search.trim()) {
      return items;
    }
    return items.filter(post => {
      return post.text.toLowerCase().includes(search.toLowerCase())
    })
  }

}
