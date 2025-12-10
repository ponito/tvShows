import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {DataService} from '../../services/data.service';
import {Show} from '../../model/show';

@Component({
  selector: 'app-show-form',
  imports: [FormsModule],
  templateUrl: './show-form.html',
  styleUrl: './show-form.css',
})
export class ShowForm {
  private _dataService = inject(DataService);
  show;

  constructor() {
    this.show = new Show(null, null, null);
  }

  save(): void {
    this._dataService.saveShow(this.show);

    this.show = new Show(null, null, null);
  }
}
