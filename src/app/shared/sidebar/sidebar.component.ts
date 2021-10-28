import {Component, Input, OnInit} from '@angular/core';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {itemsSide} from '../data/sidebar-home.data';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  @Input('view') view: boolean = false;
  public itemsSide = itemsSide;
  public faAngleRight = faAngleRight;

  constructor() {}

  ngOnInit(): void {}
}
