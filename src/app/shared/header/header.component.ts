import {Component, OnInit} from '@angular/core';
import {
  faBars,
  faUpload,
  faBell,
  faChartLine,
  faCommentDots,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public faUpload = faUpload;
  public faBars = faBars;
  public faBell = faBell;
  public faChartLine = faChartLine;
  public faCommentDots = faCommentDots;
  public faSearch = faSearch;

  public sidebarView = false;

  constructor() {}

  ngOnInit(): void {}
}
