import {FirebaseService} from 'firebase-angular2/core';
import {Injectable} from 'angular2/core';

@Injectable()
export class ProfileService {

    private service: FirebaseService;

    constructor(firebaseService: FirebaseService) {
        this.service = firebaseService;
    }

    getSkills() {
        return this.service.child('skills').asArray();
    }

	getExperiences() {
		return this.service.child('experience').asArray();
	}

	getEducation() {
		return this.service.child('education').asArray();
	}

	getInterests() {
		return this.service.child('interests').asArray();
	}

	getLanguages() {
		return this.service.child('languages').asArray();
	}

	getWelcomeText() {
		return this.service.child('welcome').value;
	}
}
