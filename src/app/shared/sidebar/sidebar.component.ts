import {
  AfterViewInit,
  Component,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {itemsSide} from '../data/sidebar-home.data';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit, AfterViewInit {
  @Input('view') view: boolean = false;
  public topPos: number = 0;

  public itemsSide = itemsSide;
  public faAngleRight = faAngleRight;

  constructor() {}

  ngOnInit(): void {}

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.ngAfterViewInit();
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    setTimeout(() => {
      this.topPos = (<HTMLInputElement>(
        document.getElementById('header')
      )).offsetHeight;
    }, 100);
  }
}
