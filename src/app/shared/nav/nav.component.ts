import { Component, OnInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @ViewChild("navIcon", { static: false }) navIcon: ElementRef;
  constructor(private renderer: Renderer2, private router: Router) { }

  private count = 0;

  ngOnInit(): void {
  }

  activeClass() {
    this.count++;
    console.log(this.count);
    if (this.count % 2 == 0) {
      console.log("entra");
      this.renderer.removeClass(this.navIcon.nativeElement, "active");
    }
    else {
      this.renderer.addClass(this.navIcon.nativeElement, "active");
    }
    
  }
  goToDash(){
    this.router.navigate(['client']);
  }
  goToTicket(){
    this.router.navigate(['client/ticket']);
  }
}
