import {Component, Input, OnInit} from 'angular2/core';

@Component({
  moduleId: module.id,
	selector : 'experience',
  template : `
<div class="item">
	<div class="meta">
		<div class="upper-row">
			<h3 class="job-title">{{title}}</h3>
			<div class="time">{{from}} - {{to}}</div>
		</div>
		<!--//upper-row-->
		<div class="company">{{name}}</div>
	</div>
	<!--//meta-->
	<div class="details">
		<p>{{description}}</p>
	</div>
	<!--//details-->
</div>
<!--//item-->`
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
