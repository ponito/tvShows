import { Show } from "../model/show";
import {Injectable, Signal} from '@angular/core';
import {Observable} from 'rxjs';
import {toSignal} from '@angular/core/rxjs-interop';
import {
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  Firestore,
  orderBy, query,
  updateDoc
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  shows$: Observable<Show[]>;
  showsSignal: Signal<Show[]>;
  private seriesCollection = 'table_show'

  constructor(private firestore: Firestore) {
    const showsRef = collection(this.firestore, this.seriesCollection);
    const showsQuery = query(showsRef, orderBy('id'));
    this.shows$ = collectionData(showsQuery, { idField: 'uid' }) as Observable<Show[]>;
    this.showsSignal = toSignal(this.shows$);
  }

  saveShow(show: Show): void {
    const showsRef = collection(this.firestore, this.seriesCollection);
    addDoc(showsRef, {
      id: show.id,
      title: show.title,
    });
  }

  updateShow(show: Show): void {
    const showDocRef = doc(this.firestore, `${this.seriesCollection}/${show.uid}`);
    updateDoc(showDocRef, {
      id: show.id,
      title: show.title,
    });
  }

  deleteShow(show: Show): void {
    const showDocRef = doc(this.firestore, `${this.seriesCollection}/${show.uid}`);
    deleteDoc(showDocRef);
  }
}
