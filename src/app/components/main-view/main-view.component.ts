import {Component, inject} from '@angular/core';
import {ShowList} from '../show-list/show-list.component';
import {Show} from '../../model/show';
import {DataService} from '../../services/data.service';
import {ShowForm} from '../show-form/show-form';
import {BehaviorSubject, catchError, EMPTY, Subject} from 'rxjs';
import {ApiService} from '../../services/api-service';
import {ShowDetails} from '../show-details/show-details';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-main-view',
  imports: [ShowList, ShowForm, ShowDetails],
  templateUrl: './main-view.component.html'
})
export class MainView {
  private dataService: DataService = inject(DataService);
  private apiService: ApiService = inject(ApiService);
  selectedShow$: BehaviorSubject<Show>;
  errorMessage$: Subject<string>;
  isShowSelected = false;

  get shows$(): Observable<Show[]> {
    return this.dataService.shows$;
  }

  constructor() {
    this.selectedShow$ = new BehaviorSubject<Show>(null);
    this.errorMessage$ = new Subject<string>();
  }

  onSelectedShow(show: Show) {
    this.apiService.getDetailShow(show.title)
      .pipe(catchError((err) => {
        this.errorMessage$.next(err.message);
        this.selectedShow$.next(null);
        return EMPTY;
      }))
      .subscribe((s) => {
      this.selectedShow$.next(s);
    });
    this.isShowSelected = true;
  }
}
