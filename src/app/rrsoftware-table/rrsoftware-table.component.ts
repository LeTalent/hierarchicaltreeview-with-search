import { Component, Input } from "@angular/core";

@Component({
  selector: "rrsoftware-table",
  templateUrl: "./rrsoftware-table.component.html",
  styleUrls: ["./rrsoftware-table.component.css"]
})
export class RrsoftwareTableComponent {
  @Input() gridColumns: Array<string>;
  @Input() dataSource: any;
  constructor() {}
}
