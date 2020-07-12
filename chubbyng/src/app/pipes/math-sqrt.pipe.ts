import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mathSqrt'
})
export class MathSqrtPipe implements PipeTransform {

  transform(val : any) : string {
    return Math.sqrt(val.val1)+'--'+Math.sqrt(val.val2);
 }
 
}
