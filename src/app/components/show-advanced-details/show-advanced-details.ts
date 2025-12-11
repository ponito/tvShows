import {Component, inject, input, signal} from '@angular/core';
import {Show} from '../../model/show';
import {ActivatedRoute} from '@angular/router';
import {ApiService} from '../../services/api-service';
import {catchError, EMPTY} from 'rxjs';

@Component({
  selector: 'app-show-advanced-details',
  imports: [],
  templateUrl: './show-advanced-details.html',
  styleUrl: './show-advanced-details.css',
})
export class ShowAdvancedDetails {
  detailShow = signal<Show>(null);
  errorMessage = signal<string>("");
  route: ActivatedRoute = inject(ActivatedRoute);
  tvShowTitle: string = "";
  apiService: ApiService = inject(ApiService);

  constructor() {
    this.tvShowTitle= String(this.route.snapshot.params['title']);

    this.apiService.getDetailShow(this.tvShowTitle)
      .pipe(catchError((err) => {
        this.errorMessage.set(err.message);
        this.detailShow.set(null);
        return EMPTY;
      }))
      .subscribe((s) => {
        this.detailShow.set(s);
      });
  }
}
