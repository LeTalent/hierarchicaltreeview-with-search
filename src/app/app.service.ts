import { Injectable } from '@angular/core';

export class Veranstaltung {
  id: string;
  text: string;
  expanded?: boolean;
  selected?: boolean;
  items?: Veranstaltung[];
}

export class Category {
  CategoryID: number;
  CategoryName: string;
  Description: string;
}
export class State {
  ID: number;
  Name: string;
}

export class Product {
  ProductID: number;
  ProductName: string;
  SupplierID: number;
  CategoryID: number;
  QuantityPerUnit: string;
  UnitPrice: number;
  UnitsInStock: number;
  UnitsOnOrder: number;
  ReorderLevel: number;
  Discontinued: boolean;
  Code: string;
  Category: Category;
}

export class Employee {
  ID: number;
  FirstName: string;
  LastName: string;
  Position: string;
  Address: string;
  Region: string;
  Sector: string;
  Channel: string;
}

const states: State[] = [
  { ID: 1, Name: 'Alabama' },
  { ID: 2, Name: 'Alaska'},
  { ID: 3, Name: 'Arizona' },
  { ID: 4, Name: 'Arkansas' },
  { ID: 5, Name: 'California' },
  { ID: 6, Name: 'Colorado' },
  { ID: 7, Name: 'Connectictu' },
  { ID: 8, Name: 'Delaware' },
  { ID: 9, Name: 'District of Columbia' },
  { ID: 10, Name: 'Florida' }
];

const veranstaltungen: Veranstaltung[] = [
  {
    id: '1',
    text: 'Veranstaltungen',
    expanded: true,
    items: [
      {
        id: '1_1',
        text: 'Mathematik',
        expanded: true,
        items: [
          {
            id: '1_1_1',
            text: 'Algebra',
            expanded: true,
            items: [
              {
                id: '1_1_1_1',
                text: 'Anfänger'
              },
              {
                id: '1_1_1_2',
                text: 'Fortgeschrittene'
              },
              {
                id: '1_1_1_3',
                text: 'Profis'
              }
            ]
          },
          {
            id: '1_1_2',
            text: 'Statistik'
          },
          {
            id: '1_1_3',
            text: 'Angewandte Mathematik'
          },
          {
            id: '1_1_4',
            text: 'Vektorraum'
          }
        ]
      },
      {
        id: '1_2',
        text: 'Physik',
        items: [
          {
            id: '1_2_1',
            text: 'Optik'
          },
          {
            id: '1_2_2',
            text: 'Mechanik'
          },
          {
            id: '1_2_3',
            text: 'Hitzestudie'
          }
        ]
      },
      {
        id: '1_3',
        text: 'Chemie',
        items: [
          {
            id: '1_3_1',
            text: 'Molekular Biologie'
          },
          {
            id: '1_3_3',
            text: 'Quantium'
          }
        ]
      },
      {
        id: '1_4',
        text: 'Seminar',
        expanded: true,
        items: [
          {
            id: '1_4_1',
            text: 'Soft Skills',
            expanded: true,
            items: [
              {
                id: '1_4_1_1',
                text: 'Anfänger'
              },
              {
                id: '1_4_1_2',
                text: 'Fortgeschrittene'
              },
              {
                id: '1_4_1_3',
                text: 'Profis'
              }
            ]
          },
          {
            id: '1_4_2',
            text: 'Rhetorik'
          },
          {
            id: '1_4_3',
            text: 'Presentation'
          },
          {
            id: '1_4_4',
            text: 'Vortrag Techniken'
          }
        ]
      }
    ]
  }
];

const products: Product[] = [
  {
    ProductID: 1,
    ProductName: 'Chai',
    SupplierID: 1,
    CategoryID: 1,
    QuantityPerUnit: '10 boxes x 20 bags',
    UnitPrice: 18.0,
    UnitsInStock: 39,
    UnitsOnOrder: 0,
    ReorderLevel: 10,
    Discontinued: false,
    Code: 'C1',
    Category: {
      CategoryID: 1,
      CategoryName: 'Beverages',
      Description: 'Soft drinks, coffees, teas, beers, and ales'
    }
  },
  {
    ProductID: 2,
    ProductName: 'Chang',
    SupplierID: 1,
    CategoryID: 1,
    QuantityPerUnit: '24 - 12 oz bottles',
    UnitPrice: 19.0,
    UnitsInStock: 17,
    UnitsOnOrder: 40,
    ReorderLevel: 25,
    Discontinued: false,
    Code: 'C2',
    Category: {
      CategoryID: 1,
      CategoryName: 'Beverages',
      Description: 'Soft drinks, coffees, teas, beers, and ales'
    }
  },
  {
    ProductID: 3,
    ProductName: 'Aniseed Syrup',
    SupplierID: 1,
    CategoryID: 2,
    QuantityPerUnit: '12 - 550 ml bottles',
    UnitPrice: 10.0,
    UnitsInStock: 13,
    UnitsOnOrder: 70,
    ReorderLevel: 25,
    Discontinued: false,
    Code: 'C3',
    Category: {
      CategoryID: 2,
      CategoryName: 'Condiments',
      Description: 'Sweet and savory sauces, relishes, spreads, and seasonings'
    }
  },
  {
    ProductID: 4,
    ProductName: 'Chef Anton\'s Cajun Seasoning',
    SupplierID: 2,
    CategoryID: 2,
    QuantityPerUnit: '48 - 6 oz jars',
    UnitPrice: 22.0,
    UnitsInStock: 53,
    UnitsOnOrder: 0,
    ReorderLevel: 0,
    Discontinued: false,
    Code: 'C4',
    Category: {
      CategoryID: 2,
      CategoryName: 'Condiments',
      Description: 'Sweet and savory sauces, relishes, spreads, and seasonings'
    }
  },
  {
    ProductID: 5,
    ProductName: 'Chef Anton\'s Gumbo Mix',
    SupplierID: 2,
    CategoryID: 2,
    QuantityPerUnit: '36 boxes',
    UnitPrice: 21.35,
    UnitsInStock: 0,
    UnitsOnOrder: 0,
    ReorderLevel: 0,
    Discontinued: true,
    Code: 'C5',
    Category: {
      CategoryID: 2,
      CategoryName: 'Condiments',
      Description: 'Sweet and savory sauces, relishes, spreads, and seasonings'
    }
  },
  {
    ProductID: 6,
    ProductName: 'Grandma\'s Boysenberry Spread',
    SupplierID: 3,
    CategoryID: 2,
    QuantityPerUnit: '12 - 8 oz jars',
    UnitPrice: 25.0,
    UnitsInStock: 120,
    UnitsOnOrder: 0,
    ReorderLevel: 25,
    Discontinued: false,
    Code: 'C6',
    Category: {
      CategoryID: 2,
      CategoryName: 'Condiments',
      Description: 'Sweet and savory sauces, relishes, spreads, and seasonings'
    }
  },
  {
    ProductID: 7,
    ProductName: 'Uncle Bob\'s Organic Dried Pears',
    SupplierID: 3,
    CategoryID: 7,
    QuantityPerUnit: '12 - 1 lb pkgs.',
    UnitPrice: 30.0,
    UnitsInStock: 15,
    UnitsOnOrder: 0,
    ReorderLevel: 10,
    Discontinued: false,
    Code: 'C7',
    Category: {
      CategoryID: 7,
      CategoryName: 'Produce',
      Description: 'Dried fruit and bean curd'
    }
  },
  {
    ProductID: 8,
    ProductName: 'Northwoods Cranberry Sauce',
    SupplierID: 3,
    CategoryID: 2,
    QuantityPerUnit: '12 - 12 oz jars',
    UnitPrice: 40.0,
    UnitsInStock: 6,
    UnitsOnOrder: 0,
    ReorderLevel: 0,
    Discontinued: false,
    Code: 'C8',
    Category: {
      CategoryID: 2,
      CategoryName: 'Condiments',
      Description: 'Sweet and savory sauces, relishes, spreads, and seasonings'
    }
  },
  {
    ProductID: 9,
    ProductName: 'Mishi Kobe Niku',
    SupplierID: 4,
    CategoryID: 6,
    QuantityPerUnit: '18 - 500 g pkgs.',
    UnitPrice: 97.0,
    UnitsInStock: 29,
    UnitsOnOrder: 0,
    ReorderLevel: 0,
    Discontinued: true,
    Code: 'C9',
    Category: {
      CategoryID: 6,
      CategoryName: 'Meat/Poultry',
      Description: 'Prepared meats'
    }
  },
  {
    ProductID: 10,
    ProductName: 'Ikura',
    SupplierID: 4,
    CategoryID: 8,
    QuantityPerUnit: '12 - 200 ml jars',
    UnitPrice: 31.0,
    UnitsInStock: 31,
    UnitsOnOrder: 0,
    ReorderLevel: 0,
    Discontinued: false,
    Code: 'C10',
    Category: {
      CategoryID: 8,
      CategoryName: 'Seafood',
      Description: 'Seaweed and fish'
    }
  }
];

const employees: Employee[] = [
  {
    ID: 1,
    FirstName: 'John',
    LastName: 'Heart',
    Position: 'CEO',
    Address: '351 S Hill St.',
    Region: 'Bonn',
    Sector: 'Nordstadt',
    Channel: 'puma'
  },
  {
    ID: 2,
    FirstName: 'Olivia',
    LastName: 'Peyton',
    Position: 'Sales Assistant',
    Address: '807 W Paseo Del Mar',
    Region: 'Umma',
    Sector: 'alabama',
    Channel: 'internet'
  },
  {
    ID: 3,
    FirstName: 'Robert',
    LastName: 'Reagan',
    Position: 'CMO',
    Address: '4 Westmoreland Pl.',
    Region: 'Ingolstadt',
    Sector: 'west',
    Channel: 'computer'
  },
  {
    ID: 4,
    FirstName: 'Greta',
    LastName: 'Sims',
    Position: 'HR Manager',
    Address: '1700 S Grandview Dr.',
    Region: 'Braunchweig',
    Sector: 'Westcost',
    Channel: 'zeitung'
  },
  {
    ID: 5,
    FirstName: 'Brett',
    LastName: 'Wade',
    Position: 'IT Manager',
    Address: '1120 Old Mill Rd.',
    Region: 'Bonn',
    Sector: 'Nordstadt',
    Channel: 'puma'
  },
  {
    ID: 6,
    FirstName: 'Sandra',
    LastName: 'Johnson',
    Position: 'Controller',
    Address: '4600 N Virginia Rd.',
    Region: 'Bonn',
    Sector: 'Nordstadt',
    Channel: 'puma'
  },
  {
    ID: 7,
    FirstName: 'Kevin',
    LastName: 'Carter',
    Position: 'Shipping Manager',
    Address: '424 N Main St.',
    Region: 'Bonn',
    Sector: 'Nordstadt',
    Channel: 'puma'
  },
  {
    ID: 8,
    FirstName: 'Cynthia',
    LastName: 'Stanwick',
    Position: 'HR Assistant',
    Address: '2211 Bonita Dr.',
    Region: 'Bonn',
    Sector: 'Nordstadt',
    Channel: 'puma'
  },
  {
    ID: 9,
    FirstName: 'Kent',
    LastName: 'Samuelson',
    Position: 'Ombudsman',
    Address: '12100 Mora Dr',
    Region: 'Bonn',
    Sector: 'Nordstadt',
    Channel: 'puma'
  },
  {
    ID: 10,
    FirstName: 'Taylor',
    LastName: 'Riley',
    Position: 'Network Admin',
    Address: '7776 Torreyson Dr',
    Region: 'Bonn',
    Sector: 'Nordstadt',
    Channel: 'puma'
  }
];
@Injectable()
export class Service {
  getVeranstaltungen(): Veranstaltung[] {
    return veranstaltungen;
  }
  getProducts(): Product[] {
    return products;
  }
  getEmployees(): Employee[] {
    return employees;
  }
  geStates(): State[] {
    return states;
  }
}
