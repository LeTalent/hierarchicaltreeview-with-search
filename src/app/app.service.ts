import { Injectable } from '@angular/core';

export class Veranstaltung {
  id: string;
  text: string;
  expanded?: boolean;
  selected?: boolean;
  items?: Veranstaltung[];
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

@Injectable()
export class Service {
  getVeranstaltungen(): Veranstaltung[] {
    return veranstaltungen;
  }
}
