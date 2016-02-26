import {Component, Input, OnInit} from 'angular2/core';

@Component({
	selector: 'skill',
	template: `
	<div class="item">
			<h3 class="level-title">{{title}}</h3>
			<div class="level-bar">
				<div class="level-bar-inner" [style.width] = "relativeSkillValue + '%'">
				</div>
			</div>
			<!--//level-bar-->
		</div>`
})
export class SkillComponent implements OnInit {
	@Input('current') currentSkillValue : number;
	@Input('total') maxSkillValue : number;
	@Input() title : string;
	public relativeSkillValue : number;

	ngOnInit() {
		this.relativeSkillValue = (this.currentSkillValue / this.maxSkillValue) * 100;
	}
}
