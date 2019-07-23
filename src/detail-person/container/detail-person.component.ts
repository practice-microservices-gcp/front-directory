import { Component, Input } from '@angular/core';

import { ConfigListProperties, DataListProperties } from '../../components';

@Component({
  selector: 'ardi-detail-person',
  templateUrl: './detail-person.component.html',
  styleUrls: ['./detail-person.component.css']
})
export class DetailPersonComponent {

  public config: ConfigListProperties[] = [
    { title: 'phone', value: 'phone' },
    { title: 'email', value: 'email' }
  ]

  public data: DataListProperties = {
    name: 'Adrian Ferreres',
    phone: '666666666',
    email: 'adrian.ferreres@mail.com'
  }
}
