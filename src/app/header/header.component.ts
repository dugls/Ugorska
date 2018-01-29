import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes, query, group, AnimationFactory} from '@angular/animations';
import { TweenLite } from 'gsap'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('*', style({
        opacity: 1
      })),
      transition(':enter', [   // :enter is alias to 'void => *'
        style({opacity:0}),
        animate(250, style({opacity:1})) 
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(250, style({opacity:0})) 
      ])
  ]),
    trigger('navAnimate', [
      state('off',style({
          color: 'white',
      })),
      state('on', style({
          color: 'black'
      }
      )),
      transition('off => on', animate('300ms')),
      transition('on => off', animate('300ms'))
    ]),
    trigger('barsDivAnimation', [
       state('hide', style({
          background: 'white'
       })),
       state('show', style({
         background: 'black' 
       })),
      transition('off => on', animate('300ms')),
      transition('on => off', animate('300ms'))
      ])

  ]
})
export class HeaderComponent implements OnInit {

  state:boolean;
  tog = 'off'
  bars = 'hide'

  barsAnimate(){
    if(!this.state === true){
      let bar1 = document.getElementsByClassName('bar1');
      TweenLite.to(bar1, 0.1, {rotation:"-45deg",x: -12,y: 13,  yoyo:true})
      let bar2 = document.getElementsByClassName('bar2');
      TweenLite.to(bar2, 0.1, {opacity: 0})
      let bar3 = document.getElementsByClassName('bar3');
      TweenLite.to(bar3, 0.1, {rotation:"45deg", x:-12, y:-9})
      let list = document.getElementsByClassName('dropdown-list')
      TweenLite.fromTo(list, 1.0, {opacity: 0}, {opacity: 1})
    }
    else{
      let bar1 = document.getElementsByClassName('bar1');
      TweenLite.fromTo(bar1, 0.1, {rotation:"-45deg",x: -12,y: 13, yoyo:true}, {rotation: '0deg', x: -0, y: 0, yoyo:true})
      let bar2 = document.getElementsByClassName('bar2');
      TweenLite.fromTo(bar2, 0.1, {opacity: 0}, {opacity: 1})
      let bar3 = document.getElementsByClassName('bar3');
      TweenLite.fromTo(bar3, 0.1, {rotation:"45deg", x:-12, y:-9}, {rotation: '0deg', x: -0, y: 0, yoyo:true})
      let list = document.getElementsByClassName('dropdown-list')
      TweenLite.fromTo(list, 0.6, {opacity: 1}, {opacity: 0})
    }
  } 


  constructor(public el: ElementRef) {}

  @HostListener('window:scroll', ['$event'])
    checkNavScroll() {
      const componentPosition = this.el.nativeElement.offsetTop

      const scrollPosition = window.pageYOffset

      if(scrollPosition > 680){
        this.tog = 'on'
        this.bars = 'show'
      }
      else{
        this.tog = 'off'
        this.bars = 'hide'
      }
    }  

  toggle(){  
    this.state = !this.state
  }



    ngOnInit() {

    }

}


