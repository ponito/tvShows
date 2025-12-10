import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {Show} from '../../model/show';
import {DataService} from '../../services/data.service';
import {FormsModule} from '@angular/forms';
import {AsyncPipe} from '@angular/common';
import {Observable} from 'rxjs';

@Component({
  selector:'app-show-list',
  imports: [FormsModule, AsyncPipe],
  templateUrl:'show-list.component.html'
})
export class ShowList {
  private _dataService = inject(DataService);
  @Input() shows$: Observable<Show[]>;
  @Output() selectedShow = new EventEmitter<Show>();
  editShow: Show;

  isToEdit(show: Show): boolean {
    if (!this.editShow || this.editShow !== show) {
      return false;
    }

    return true;
  }

  edit(show: Show): void {
    this.editShow = show;
  }

  saveEdit(): void {
    this._dataService.updateShow(this.editShow);
    this.editShow = null;
  }

  showDetails(show: Show) {
    this.selectedShow.emit(show);
  }

  delete(show: Show): void {
    this._dataService.deleteShow(show);
  }
}
