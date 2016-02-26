import {Component, Input, OnInit} from 'angular2/core';

@Component({
	selector : 'experience',
	templateUrl : './home/components/experience.html'
})
export class ExperienceComponent implements OnInit {
	@Input() title: string;
	@Input() from: number;
	@Input() to: string;
	@Input() name: string;
	@Input() description: string;

	ngOnInit() {
		if(this.to === '') {
			this.to = 'Present';
		}
	}
}
