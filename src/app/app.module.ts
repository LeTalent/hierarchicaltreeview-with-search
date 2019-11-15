import { BrowserModule } from '@angular/platform-browser';
import { NgModule, enableProdMode } from '@angular/core';
import { TreeviewModule } from 'ngx-treeview';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}
import {
  DxTreeViewModule,
  DxSelectBoxModule,
  DxTemplateModule,
  DxListModule,
  DxDataGridModule
} from 'devextreme-angular';
import { AppComponent } from './app.component';
import { Veranstaltung, Service, Product, State, Employee, Category } from './app.service';
import { RrsoftwareTableComponent } from './rrsoftware-table/rrsoftware-table.component';

@NgModule({
  declarations: [AppComponent, RrsoftwareTableComponent],
  imports: [
    BrowserModule,
    TreeviewModule,
    DxTreeViewModule,
    DxSelectBoxModule,
    DxTemplateModule,
    DxListModule,
    DxDataGridModule
  ],
  providers: [Service, Veranstaltung, Product, State, Employee, Category],
  bootstrap: [AppComponent]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
