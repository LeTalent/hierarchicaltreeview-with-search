import {
  NgModule,
  Component,
} from '@angular/core';
import { Veranstaltung, Product, Employee, State, Service } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: '/app.component.html',
  styleUrls: ['/app.component.css']
})
export class AppComponent {
  veranstaltungen: Veranstaltung[];
  products: Product[];
  employees: Employee[];
  states: State[];
  newColumns: any[];
  lookupDataSource: any;
  changeMode: boolean;
  dataSrc: any[];

  constructor(service: Service) {
    this.veranstaltungen = service.getVeranstaltungen();
    this.products = service.getProducts();
    this.employees = service.getEmployees();
    this.states = service.geStates();
    this.newColumns = ['Region', 'Sector', 'Channel'];
    // this.dataSrc = this.employees.concat(this.states);
    this.lookupDataSource = {
      store: this.states,
    };
  }

  public colorCode(Code: string) {
    let result;

    switch (Code) {
      case 'C1':
        result = '#FFBA80';
        break;
      case 'C2':
        result = '#B2F699';
        break;
      case 'C3':
        result = '#FFBA80';
        break;
      case 'C4':
        result = 'blue';
        break;
      case 'C5':
        result = 'red';
        break;
      case 'C6':
        result = 'yellow';
        break;
      case 'C7':
        result = 'green';
        break;
      case 'C8':
        result = 'orange';
        break;
      case 'C9':
        result = 'brown';
        break;
      case 'C10':
        result = 'darkgrey';
        break;
      default:
        result = 'transparent';
        break;
    }
    return result;
  }
  public onCellPrepared(e: any) {
    if (
      (e.rowType === 'data' && e.column.dataField === 'ProductID') ||
      e.column.dataField === 'ProductName' ||
      e.column.dataField === 'UnitPrice' ||
      e.column.dataField === 'Code' ||
      e.column.dataField === 'QuantityPerUnit'
    ) {
      if (e.data.ProductID % 2 === 0) {
        e.cellElement.style.background = '#f2f2f2';
      }
      if (e.data.ProductID % 2 === 1) {
        e.cellElement.style.background = '#cccccc';
      }
      if (e.data.UnitPrice === 19) {
        e.cellElement.style.background = 'black';
      }
    }
  }
  public onCellPrepared1(e: any) {
    if (
      (e.rowType === 'data' && e.column.dataField === 'ProductID') ||
      e.column.dataField === 'ProductName' ||
      e.column.dataField === 'UnitPrice' ||
      e.column.dataField === 'Code' ||
      e.column.dataField === 'QuantityPerUnit'
    ) {
      if (e.data.Code === 'C1') {
        e.cellElement.style.background = 'lightblue';
      }
      if (e.data.Code === 'C2') {
        e.cellElement.style.background = 'lightgreen';
      }
      if (e.data.Code === 'C3') {
        e.cellElement.style.background = 'orange';
      }
      if (e.data.Code === 'C4') {
        e.cellElement.style.background = 'lightyellow';
      }
      if (e.data.Code === 'C5') {
        e.cellElement.style.background = 'lightgrey';
      }
      if (e.data.Code === 'C6') {
        e.cellElement.style.background = 'peru';
      }
      if (e.data.Code === 'C7') {
        e.cellElement.style.background = 'salmon';
      }
      if (e.data.Code === 'C8') {
        e.cellElement.style.background = 'lightpink';
      }
      if (e.data.Code === 'C9') {
        e.cellElement.style.background = 'yellowgreen';
      }
      if (e.data.Code === 'C10') {
        e.cellElement.style.background = 'Wheat';
      }
    }
  }
}
