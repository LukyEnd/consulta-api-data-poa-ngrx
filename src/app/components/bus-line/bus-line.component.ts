import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { ServiceService } from 'src/app/services/service.service';
import { ApiBusLine } from './../../models/bus-line.model';

@Component({
  selector: 'app-bus-line',
  templateUrl: './bus-line.component.html',
  styleUrls: [
    './bus-line.component.scss',
    '../base-page/base-page.component.scss',
  ],
})
export class BusLineComponent implements OnInit, OnDestroy {
  dtOptions: DataTables.Settings = {};
  busLine!: ApiBusLine[];
  busLineErro!: string;
  isLoading = false;
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private serv: ServiceService, private router: Router) {}

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
    };
    this.busLineInfo();
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  busLineInfo() {
    this.isLoading = true;
    this.serv.apiBusLine().subscribe(
      (data) => {
        this.busLine = data;
        this.dtTrigger.next();
      },
      (erro) => {
        this.busLineErro = 'Não foi Possivel Consultar';
      },
      () => (this.isLoading = false)
    );
  }

  setNumberId(id: number) {
    this.router.navigate(['/itinerary', id]);
  }
}
