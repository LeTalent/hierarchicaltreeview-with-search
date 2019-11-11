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

const products: Product[] = [{
  "ProductID": 1,
  "ProductName": "Chai",
  "SupplierID": 1,
  "CategoryID": 1,
  "QuantityPerUnit": "10 boxes x 20 bags",
  "UnitPrice": 18.0000,
  "UnitsInStock": 39,
  "UnitsOnOrder": 0,
  "ReorderLevel": 10,
  "Discontinued": false,
  "Code": 'C1',
  "Category": {
      "CategoryID": 1,
      "CategoryName": "Beverages",
      "Description": "Soft drinks, coffees, teas, beers, and ales"
  }
}, {
  "ProductID": 2,
  "ProductName": "Chang",
  "SupplierID": 1,
  "CategoryID": 1,
  "QuantityPerUnit": "24 - 12 oz bottles",
  "UnitPrice": 19.0000,
  "UnitsInStock": 17,
  "UnitsOnOrder": 40,
  "ReorderLevel": 25,
  "Discontinued": false,
  "Code": 'C2',
  "Category": {
      "CategoryID": 1,
      "CategoryName": "Beverages",
      "Description": "Soft drinks, coffees, teas, beers, and ales"
  }
}, {
  "ProductID": 3,
  "ProductName": "Aniseed Syrup",
  "SupplierID": 1,
  "CategoryID": 2,
  "QuantityPerUnit": "12 - 550 ml bottles",
  "UnitPrice": 10.0000,
  "UnitsInStock": 13,
  "UnitsOnOrder": 70,
  "ReorderLevel": 25,
  "Discontinued": false,
  "Code": 'C3',
  "Category": {
      "CategoryID": 2,
      "CategoryName": "Condiments",
      "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
  }
}, {
  "ProductID": 4,
  "ProductName": "Chef Anton's Cajun Seasoning",
  "SupplierID": 2,
  "CategoryID": 2,
  "QuantityPerUnit": "48 - 6 oz jars",
  "UnitPrice": 22.0000,
  "UnitsInStock": 53,
  "UnitsOnOrder": 0,
  "ReorderLevel": 0,
  "Discontinued": false,
  "Code": 'C4',
  "Category": {
      "CategoryID": 2,
      "CategoryName": "Condiments",
      "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
  }
}, {
  "ProductID": 5,
  "ProductName": "Chef Anton's Gumbo Mix",
  "SupplierID": 2,
  "CategoryID": 2,
  "QuantityPerUnit": "36 boxes",
  "UnitPrice": 21.3500,
  "UnitsInStock": 0,
  "UnitsOnOrder": 0,
  "ReorderLevel": 0,
  "Discontinued": true,
  "Code": 'C5',
  "Category": {
      "CategoryID": 2,
      "CategoryName": "Condiments",
      "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
  }
}, {
  "ProductID": 6,
  "ProductName": "Grandma's Boysenberry Spread",
  "SupplierID": 3,
  "CategoryID": 2,
  "QuantityPerUnit": "12 - 8 oz jars",
  "UnitPrice": 25.0000,
  "UnitsInStock": 120,
  "UnitsOnOrder": 0,
  "ReorderLevel": 25,
  "Discontinued": false,
  "Code": 'C6',
  "Category": {
      "CategoryID": 2,
      "CategoryName": "Condiments",
      "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
  }
}, {
  "ProductID": 7,
  "ProductName": "Uncle Bob's Organic Dried Pears",
  "SupplierID": 3,
  "CategoryID": 7,
  "QuantityPerUnit": "12 - 1 lb pkgs.",
  "UnitPrice": 30.0000,
  "UnitsInStock": 15,
  "UnitsOnOrder": 0,
  "ReorderLevel": 10,
  "Discontinued": false,
  "Code": 'C7',
  "Category": {
      "CategoryID": 7,
      "CategoryName": "Produce",
      "Description": "Dried fruit and bean curd"
  }
}, {
  "ProductID": 8,
  "ProductName": "Northwoods Cranberry Sauce",
  "SupplierID": 3,
  "CategoryID": 2,
  "QuantityPerUnit": "12 - 12 oz jars",
  "UnitPrice": 40.0000,
  "UnitsInStock": 6,
  "UnitsOnOrder": 0,
  "ReorderLevel": 0,
  "Discontinued": false,
  "Code": 'C8',
  "Category": {
      "CategoryID": 2,
      "CategoryName": "Condiments",
      "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
  }
}, {
  "ProductID": 9,
  "ProductName": "Mishi Kobe Niku",
  "SupplierID": 4,
  "CategoryID": 6,
  "QuantityPerUnit": "18 - 500 g pkgs.",
  "UnitPrice": 97.0000,
  "UnitsInStock": 29,
  "UnitsOnOrder": 0,
  "ReorderLevel": 0,
  "Discontinued": true,
  "Code": 'C9',
  "Category": {
      "CategoryID": 6,
      "CategoryName": "Meat/Poultry",
      "Description": "Prepared meats"
  }
}, {
  "ProductID": 10,
  "ProductName": "Ikura",
  "SupplierID": 4,
  "CategoryID": 8,
  "QuantityPerUnit": "12 - 200 ml jars",
  "UnitPrice": 31.0000,
  "UnitsInStock": 31,
  "UnitsOnOrder": 0,
  "ReorderLevel": 0,
  "Discontinued": false,
  "Code": 'C10',
  "Category": {
      "CategoryID": 8,
      "CategoryName": "Seafood",
      "Description": "Seaweed and fish"
  }
}];

@Injectable()
export class Service {
  getVeranstaltungen(): Veranstaltung[] {
    return veranstaltungen;
  }
  getProducts(): Product[] {
  return products;
  }
}
