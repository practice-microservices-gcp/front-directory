import { Component, Input } from '@angular/core';

@Component({
  selector: 'ardi-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css']
})
export class FrameComponent {
  @Input()
  public header: string;
}
