import { Component } from '@angular/core';

@Component({
  selector: 'ardi-table-people',
  templateUrl: './table-people.component.html',
  styleUrls: ['./table-people.component.css']
})
export class TablePeopleComponent {

  public config: { title: string, name: string}[];
  public tableData: { [key: string]: any }[];
  
  constructor() {
    this.config = [
      { title: 'Name', name: 'name' },
      { title: 'Surname', name: 'surname' },
      { title: 'Email', name: 'email' }
    ];

    this.tableData = [{
      id: 0,
      name: 'Juan',
      surname: 'Palomo',
      email: 'juan.palomo@email.com'
    }, {
      id: 1,
      name: 'Antonio',
      surname: 'Marzal',
      email: 'antonio.marzal@email.com'
    }, {
      id: 2,
      name: 'Maria',
      surname: 'Guitierrez',
      email: 'maria.guitierrez@email.com'
    }, {
      id: 3,
      name: 'Pablo',
      surname: 'Garcia',
      email: 'pablo.garcia@email.com'
    }, {
      id: 4,
      name: 'Enrique',
      surname: 'Sanz',
      email: 'enrique.sanz@email.com'
    }]
  }

  private onEvent(action: { type: string, payload?: any}) {
    console.log('Action: ', action);
  }

  public onRowClicked(id: number) {
    this.onEvent({
      type:'RowClicked',
      payload: id
    });
  }

  public goFirstPage() {
    this.onEvent({
      type: 'FirstPage'
    });
  }

  public goPreviousPage() {
    this.onEvent({
      type:'PreviusPage'
    });
  }

  public changeSize(size: number) {
    this.onEvent({
      type:'ChangeSize',
      payload: size
    });
  }

  public goNextPage() {
    this.onEvent({
      type: 'NextPage'
    });
  }

  public goLastPage() {
    this.onEvent({
      type: 'LastPage'
    });
  }
}
