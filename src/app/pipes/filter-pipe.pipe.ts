import { Pipe, PipeTransform } from '@angular/core';
import { Article } from '../Models/article';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: Article[], filterText: string): Article[] {
    filterText = filterText?filterText.toLocaleLowerCase():""
    return filterText?value
    .filter((p:Article)=>p.articleTitle.toLocaleLowerCase().indexOf(filterText)!==-1)
    :value;
  }
  
}
