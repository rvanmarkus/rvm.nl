import {Component} from 'angular2/core';
import {ExperienceComponent} from './experiences.component';
import {SkillComponent} from './skill.component';
import {ProfileService} from '../../profile.service';
import {FirebaseArray} from 'firebase-angular2/core';
import {Observable} from 'rxjs/rx';

@Component({
  selector: 'home',
  directives : [ExperienceComponent, SkillComponent],
  templateUrl: './home.html',
  moduleId: module.id
})
export class HomeComponent {
  public experiences : FirebaseArray;
  public welcomeText : Observable<string>;
  public skills : FirebaseArray;

  constructor(private profile : ProfileService) {
    this.experiences = profile.getExperiences();
    this.skills = profile.getSkills();
    this.welcomeText = profile.getWelcomeText();
  }
}
