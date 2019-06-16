import { Component, OnInit, AfterViewInit, ElementRef, Input } from '@angular/core';
import SimpleBar from 'simplebar';

@Component({
  selector: 'simplebar',
  templateUrl: './simplebar.component.html',
  styleUrls: ['./simplebar.component.scss']
})
export class SimplebarComponent implements OnInit, AfterViewInit {
  @Input() options: IScrollbarOptions;
  SimpleBar: any;
  constructor(private eleRef: ElementRef) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.SimpleBar = new SimpleBar(this.eleRef.nativeElement.firstChild, this.options ? this.options : {});
  }

}

export interface IScrollbarOptions {
  autoHide?: boolean;
  scrollbarMinSize?: number;
}
