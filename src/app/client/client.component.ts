import { Component, OnInit, ViewChild, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  @ViewChild( 'navBar' ,{static: false} ) nav : ElementRef;
  // https://www.techiediaries.com/angular/angular-9-dom-queries-viewchild-viewchildren-example/

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }
  @HostListener("window:scroll", ['$event'])
  doSomethingOnWindowsScroll($event:Event){
    if(window.scrollY>10){
      this.renderer.addClass(this.nav.nativeElement, "active");
    }
    else{
      this.renderer.removeClass(this.nav.nativeElement, "active");
    }
    
  }

}
