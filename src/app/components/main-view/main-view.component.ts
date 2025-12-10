import {Component, inject, signal, Signal, WritableSignal} from '@angular/core';
import {ShowList} from '../show-list/show-list.component';
import {Show} from '../../model/show';
import {DataService} from '../../services/data.service';
import {ShowForm} from '../show-form/show-form';
import {ApiService} from '../../services/api-service';
import {ShowDetails} from '../show-details/show-details';
import {catchError, EMPTY} from 'rxjs';

@Component({
  selector: 'app-main-view',
  imports: [ShowList, ShowForm, ShowDetails],
  templateUrl: './main-view.component.html'
})
export class MainView {
  private dataService: DataService = inject(DataService);
  private apiService: ApiService = inject(ApiService);
  selectedShow: WritableSignal<Show>;
  errorMessage: WritableSignal<string>;
  isShowSelected = false;

  get shows(): Signal<Show[]> {
    return this.dataService.showsSignal;
  }

  constructor() {
    this.selectedShow = signal<Show>(null);
    this.errorMessage = signal<string>('');
  }

  onSelectedShow(show: Show) {
    this.apiService.getDetailShow(show.title)
      .pipe(catchError((err) => {
        this.errorMessage.set(err.message);
        this.selectedShow.set(null);
        return EMPTY;
      }))
      .subscribe((s) => {
      this.selectedShow.set(s);
    });
    this.isShowSelected = true;
  }
}
