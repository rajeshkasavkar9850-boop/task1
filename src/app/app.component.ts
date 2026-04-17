import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { 
  title1 = 'Skills';
  skills : Array<string> = ['HTML','JS','CSS','TS','Angular'];

title2 = 'Programming Languages';
languages: Array<string> = ['JavaScript','TypeScript','Python','Java','C++']

title3 = 'Hobbies';
hobbies: Array<string> = ['Reading','Gaming','Traveling','Music','Photography'];

title4 = 'Frameworks';
frameworks: Array<string> = ['Angular','React','Vue','Node.js','Express'];

title5 = 'Soft Skills';
softSkills: Array<string> = ['Communication','Teamwork','Problem Solving','Time Management','Leadership'];

title6 = 'Daily Tasks';
tasks: Array<string> = ['Wake up early','Exercise','Study Angular','Practice Coding','Sleep on time'];

}
