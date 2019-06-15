import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import SimpleBar from 'simplebar';

@Component({
  selector: 'simplebar',
  templateUrl: './simplebar.component.html',
  styleUrls: ['./simplebar.component.scss']
})
export class SimplebarComponent implements OnInit, AfterViewInit {
  SimpleBar: any;
  constructor(private eleRef: ElementRef) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.SimpleBar = new SimpleBar(this.eleRef.nativeElement.firstChild)
  }

}
