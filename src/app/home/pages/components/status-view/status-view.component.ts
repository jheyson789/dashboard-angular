import {Component, OnInit} from '@angular/core';
import {statusData} from 'src/app/shared/data/status-view.data';

@Component({
  selector: 'app-status-view',
  templateUrl: './status-view.component.html',
  styleUrls: ['./status-view.component.css'],
})
export class StatusViewComponent implements OnInit {
  public statusData = statusData;

  constructor() {}

  ngOnInit(): void {}
}
