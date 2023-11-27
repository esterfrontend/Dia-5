const deepObject = {
  name: 'Main Object',
  age: 42,
  items: [
    'item1',
    'item2',
    {
      key: 'value',
      nestedArray: [
        'nestedItem1',
        'nestedItem2',
        {
          innerKey: 'inner@Value',
          deepObject: {
            propertyA: 'Nested Property A',
            propertyB: {
              subProperty: 'SubValue',
              subArray: [
                'subItem1',
                'subItem2',
                {
                  finalKey: 'Final Value',
                  finalArray: [
                    'finalItem1',
                    'finalItem2',
                    {
                      ultimateKey: 'Ultimate Value',
                    },
                  ],
                },
              ],
            },
          },
        },
      ],
    },
  ],
  booleanValue: true,
};
 /**
  * Dado el obj anterior se tiene que:
  * - modificar la propiedad "innerKey" para transformar "@" en " " (un espacio en blanco)
  * - añadir un punto (.) en la propiedad "ultimateKey"
  * - eliminar la segunda posición del array "nestedArray"
  */
