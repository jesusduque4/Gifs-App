import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
})
export class LazyImageComponent implements OnInit {

  @Input()
  public url!:String;

  @Input()
  public alt:String = '';

  public hasLoadded: Boolean = false;

  ngOnInit(): void {
    if (!this.url) throw new Error('URL property is required');
  }

  onLoad(){
    setTimeout(()=> {
      console.log('Image loadded');
      this.hasLoadded = true;
    },1000);
  }

}
