import { Component, OnDestroy } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'app';
  people: any[];
  subscription: Subscription;

  constructor(db: AngularFireDatabase) {      //Proof of concept where data from friebase db under key "people'
					      //is being extracted and displayed to the UI
    this.subscription = db.list('/people')
      .subscribe(people => {
        this.people = people;
        console.log(this.people);
      })

    db.list('/people').valueChanges().subscribe(num => {
      this.intensity = num;
      console.log(this.intensity);
    });
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
