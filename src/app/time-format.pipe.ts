import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeFormat'
})
export class TimeFormatPipe implements PipeTransform {

  // converts number to "hh:mm:ss" format
  
  transform(num: number) {
    var hrs = Math.floor(num / 3600);
		var min = Math.floor((num - (hrs * 3600)) / 60);
		var sec = num - (hrs * 3600) - (min * 60);
		sec = Math.floor(sec * 100) / 100
	   
		var result = (hrs < 10 ? "0" + hrs : hrs);
		result += ":" + (min < 10 ? "0" + min : min);
		result += ":" + (sec < 10 ? "0" + sec : sec);
		return result;
  }

}
