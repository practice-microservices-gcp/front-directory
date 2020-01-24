import {
  Component,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'ardi-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {}
