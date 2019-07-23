import { Component, Input } from '@angular/core';
import { ConfigListProperties } from './config.entity';
import { DataListProperties } from './data.entity';

@Component({
  selector: 'ardi-list-properties',
  templateUrl: './list-properties.component.html',
  styleUrls: ['./list-properties.component.css']
})
export class ListPropertiesComponent {

  @Input()
  public config: ConfigListProperties[];

  @Input()
  public data: DataListProperties;
}
