// формате чч.мм.сс
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
	selector: 'my-app',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

	timeNow = 0;
	timer: Observable<any> = Observable.timer(0, 1000);
	subs$: Subscription;
	isActive: boolean = false; // flag

	// converts number to "hh:mm:ss" format
	// convertToSeconds (num) {
	// 	var hrs = Math.floor(num / 3600);
	// 	var min = Math.floor((num - (hrs * 3600)) / 60);
	// 	var sec = num - (hrs * 3600) - (min * 60);
	// 	sec = Math.floor(sec * 100) / 100
	   
	// 	var result = (hrs < 10 ? "0" + hrs : hrs);
	// 	result += ":" + (min < 10 ? "0" + min : min);
	// 	result += ":" + (sec < 10 ? "0" + sec : sec);
	// 	return result;
	//  }

	// Timer subscription, flag check 
	ngOnInit() {
		this.subs$ = this.timer.subscribe( () => {
			if (this.isActive) {
				this.timeNow++;				
			}
		});
	}
	

	// Start/Stop button, switch flag to opposite state
	toggleTime() {
		this.isActive = !this.isActive;
	}

	// Reset button, stops the counting and erases the timer
	onReset() {
		this.isActive = false;
		this.timeNow = 0;
	}

	// Pause button
	onPause() {
		this.isActive = false;
	}

	// Unsubscribe in the end
	ngOnDestroy() {
		this.subs$.unsubscribe();
	}
}