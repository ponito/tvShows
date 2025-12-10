import {Component} from '@angular/core';
import {Show} from '../../model/show';
import {input} from '@angular/core';

@Component({
  selector: 'app-show-details',
  imports: [

  ],
  templateUrl: './show-details.html',
  styleUrl: './show-details.css',
})
export class ShowDetails {
  detailShow = input<Show>();
  errorMessage = input<string>();
}
