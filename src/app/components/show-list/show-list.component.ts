import {Component, inject, input, output} from '@angular/core';
import {Show} from '../../model/show';
import {DataService} from '../../services/data.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector:'app-show-list',
  imports: [FormsModule],
  templateUrl:'show-list.component.html'
})
export class ShowList {
  private _dataService = inject(DataService);
  shows = input.required<Show[]>();
  selectedShow = output<Show>();
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
