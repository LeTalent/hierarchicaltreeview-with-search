import { NgModule, Component, enableProdMode } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { TreeviewModule } from "ngx-treeview";
import {
  DxTreeViewModule,
  DxSelectBoxModule,
  DxTemplateModule,
  DxListModule
} from "devextreme-angular";
import { Veranstaltung, Service } from "./app.service";
if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@Component({
  selector: "app-root",
  templateUrl: "/app.component.html",
  styleUrls: ["/app.component.css"]
})
export class AppComponent {
  veranstaltungen: Veranstaltung[];
  currentItem: Veranstaltung;


  constructor(service: Service) {
    this.veranstaltungen = service.getVeranstaltungen();
    // this.currentItem = this.veranstaltungen[0];

  }
  // selectItem(e) {
  //   this.currentItem = e.itemData;
  // }

}

@NgModule({
  imports: [
    BrowserModule,
    DxTreeViewModule,
    DxSelectBoxModule,
    DxListModule,
    DxTemplateModule,
    TreeviewModule.forRoot()
  ],
  providers: [Service],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
