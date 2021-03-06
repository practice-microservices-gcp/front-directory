import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';

import { ConfigTable } from './config.entity';
import { DataTable } from './data.entity';

@Component({
  selector: 'ardi-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent {

  @Input()
  public config: ConfigTable[];

  @Input()
  public tableData: DataTable[];

  @Output()
  public rowClick: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  public firstPage: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  public prevPage: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  public sizeChange: EventEmitter<number> = new EventEmitter<number>();
  @Output()
  public nextPage: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  public lastPage: EventEmitter<any> = new EventEmitter<any>();

  public clickOnRow(item: { [key: string]: string }) {
    this.rowClick.emit(item.id);
  }

  public clickOnFirstBtn() {
    this.firstPage.emit();
  }

  public clickOnPrevBtn() {
    this.prevPage.emit();
  }

  public changeSizePage(size: number) {
    this.sizeChange.emit(size);
  }

  public clickOnNextPage() {
    this.nextPage.emit();
  }

  public clickOnLastPage() {
    this.lastPage.emit();
  }
}
