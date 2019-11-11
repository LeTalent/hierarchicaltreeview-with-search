import { BrowserModule } from "@angular/platform-browser";
import { NgModule, enableProdMode } from "@angular/core";
import { TreeviewModule } from "ngx-treeview";
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}
import {
  DxTreeViewModule,
  DxSelectBoxModule,
  DxTemplateModule,
  DxListModule,
  DxDataGridModule,
} from "devextreme-angular";
import { AppComponent } from "./app.component";
import { Veranstaltung, Service } from "./app.service";


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    TreeviewModule,
    DxTreeViewModule,
    DxSelectBoxModule,
    DxTemplateModule,
    DxListModule,
    DxDataGridModule
  ],
  providers: [Service, Veranstaltung],
  bootstrap: [AppComponent]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
