import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class ModalService {
  public modalSource = new BehaviorSubject(false);
  modalStatus = this.modalSource.asObservable();

  public refreshDataSource = new BehaviorSubject(false);
  refreshDataStatus = this.refreshDataSource.asObservable();

  public itemSource = new BehaviorSubject(null || undefined || {});
  itemStatus = this.refreshDataSource.asObservable();

  // For Calendar view appointment
  public appointmentDateChangedSource = new BehaviorSubject("");
  appointmentDateChangedStatus = this.appointmentDateChangedSource.asObservable();

  public eventsSource = new BehaviorSubject(null);
  eventsStatus = this.eventsSource.asObservable();

  close(data: null | undefined | {} = null) {
    if (data) {
      this.itemSource.next(data);
    }

    this.modalSource.next(true);
  }

  refreshData() {
    this.refreshDataSource.next(true);
  }
}
