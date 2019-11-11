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
  listData = [
    { id: 1, country: "Afghanistan", capital: "Kabul" },
    { id: 2, country: "Albania", capital: "Tirana" },
];


  constructor(service: Service) {
    this.veranstaltungen = service.getVeranstaltungen();
  }

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
