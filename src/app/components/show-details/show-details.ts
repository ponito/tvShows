import {Component, Input} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {Show} from '../../model/show';
import {AsyncPipe} from '@angular/common';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-show-details',
  imports: [
    AsyncPipe
  ],
  templateUrl: './show-details.html',
  styleUrl: './show-details.css',
})
export class ShowDetails {
  @Input() detailShow$: BehaviorSubject<Show>;
  @Input() errorMessage$: Subject<string> = new Subject<string>();
}
