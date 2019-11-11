import {
  NgModule,
  Component,
  enableProdMode,
  ViewEncapsulation
} from '@angular/core';
import { Veranstaltung, Product, Service } from './app.service';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: '/app.component.html',
  styleUrls: ['/app.component.css']
})
export class AppComponent {
  veranstaltungen: Veranstaltung[];
  products: Product[];

  constructor(service: Service) {
    this.veranstaltungen = service.getVeranstaltungen();
    this.products = service.getProducts();
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
  public onCellPrepared(e) {
    if (
      (e.rowType === 'data' && e.column.dataField === 'ProductID') ||
      e.column.dataField === 'ProductName' ||
      e.column.dataField === 'UnitPrice' ||
      e.column.dataField === 'Code' ||
      e.column.dataField === 'QuantityPerUnit'
    ) {
      if (e.data.ProductID % 2 === 0) {
        e.cellElement.style.background = '#f2f2f2';
      } else {
        e.cellElement.style.background = '#cccccc';
      }
    }
  }
}
