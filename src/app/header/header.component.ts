import { Component, OnInit, } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes, query, group } from '@angular/animations';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
  	trigger('menuAnimate',[
        state('off', style({})),

        state('on', style({

        })),
  			transition('off <=> on', [
                query(".bar1", [
                    animate("100ms", style({
                      transform: "rotate(-45deg) translate(-9px, 6px)",
                    }))
                  ], ), 
                query(".bar2", [
                    animate(10, style({
                     opacity: 0
                    }))
                  ],),
                query(".bar3", [
                    animate(200, style({
                      transform: "rotate(45deg) translate(-8px, -8px)"
                    }))
                  ]),
          ]),

  		]),
    trigger('child', [
        state('on', style({
           transform: '{{ transform }}'
          }), {params: {}}
        )
      ])
  ]
})
export class HeaderComponent implements OnInit {
	logo: string = "Угорська";
	slogan: string = 'Слоган сасний і прикольний і доладний, маленькая, сука, мишка';
	off: string = 'off';

	menuAnimate(){
		this.off = (this.off === 'off' ? 'on' : 'off');
	}

  	constructor() {}

 	 ngOnInit() {

  	}

}
