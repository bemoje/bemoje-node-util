import * as util from '../src/libs/datastructures';

describe('constructor', () => {
  it('creates a 1x1 table when no options passed', () => {
    const t = new util.Table();
    expect(t.rows).toBe(1);
    expect(t.cols).toBe(1);
  });
  it('creates empty table of given size', () => {
    const t = new util.Table({ rows: 3, cols: 4 });
    expect(t.rows).toBe(3);
    expect(t.cols).toBe(4);
  });
  it('accepts row headers', () => {
    const rowHeaders = ['A', 'B'];
    const t = new util.Table({ rowHeaders });
    expect(t.rows).toBe(2);
    expect(t.cols).toBe(1);
    expect(t.rowHeaders).toStrictEqual(rowHeaders);
    expect(t.toArray()).toStrictEqual([
      ['A', undefined],
      ['B', undefined],
    ]);
  });
  it('accepts col headers', () => {
    const colHeaders = ['A', 'B'];
    const t = new util.Table({ colHeaders });
    expect(t.rows).toBe(1);
    expect(t.cols).toBe(2);
    expect(t.colHeaders).toStrictEqual(colHeaders);
    expect(t.toArray()).toStrictEqual([
      ['A', 'B'],
      [undefined, undefined],
    ]);
  });
  it('accepts row and col headers simultaneously', () => {
    const colHeaders = ['#', 'A', 'B'];
    const rowHeaders = ['1', '2'];
    const t = new util.Table({ rowHeaders, colHeaders });
    expect(t.rows).toBe(2);
    expect(t.cols).toBe(2);
    expect(t.rowHeaders).toStrictEqual(rowHeaders);
    expect(t.colHeaders).toStrictEqual(colHeaders);
  });
  it('accepts col headers with rows dimension option', () => {
    const colHeaders = ['A', 'B'];
    const t = new util.Table({ colHeaders, rows: 8 });
    expect(t.rows).toBe(8);
    expect(t.cols).toBe(2);
    expect(t.colHeaders).toStrictEqual(colHeaders);
  });
  it('accepts data', () => {
    const colHeaders = ['#', 'A', 'B'];
    const rowHeaders = ['1', '2'];
    const data = [
      ['A1', 'B1'],
      ['A2', 'B2'],
    ];
    const t = new util.Table({ rowHeaders, colHeaders, data });
    expect(t.rows).toBe(2);
    expect(t.cols).toBe(2);
    expect(t.rowHeaders).toStrictEqual(rowHeaders);
    expect(t.colHeaders).toStrictEqual(colHeaders);
  });
  it('can extract col headers from data', () => {
    const t = new util.Table({
      data: [
        ['A', 'B'],
        ['A1', 'B1'],
        ['A2', 'B2'],
      ],
      extractColHeadersFromData: true,
    });
    expect(t.rows).toBe(2);
    expect(t.cols).toBe(2);
    expect(t.colHeaders).toStrictEqual(['A', 'B']);
  });
  it('can extract row headers from data', () => {
    const t = new util.Table({
      data: [
        ['1', 'A1', 'B1'],
        ['2', 'A2', 'B2'],
      ],
      extractRowHeadersFromData: true,
    });
    expect(t.rows).toBe(2);
    expect(t.cols).toBe(2);
    expect(t.rowHeaders).toStrictEqual(['1', '2']);
  });
  it('can extract row and col headers from data simultaneously', () => {
    const t = new util.Table({
      data: [
        ['#', 'A', 'B'],
        ['1', 'A1', 'B1'],
        ['2', 'A2', 'B2'],
      ],
      extractColHeadersFromData: true,
      extractRowHeadersFromData: true,
    });
    expect(t.rows).toBe(2);
    expect(t.cols).toBe(2);
    expect(t.colHeaders).toStrictEqual(['#', 'A', 'B']);
    expect(t.rowHeaders).toStrictEqual(['1', '2']);
  });
  it('ignores extractColHeadersFromData and extractRowHeadersFromData options if headers are provided', () => {
    const colHeaders = ['#', 'A', 'B'];
    const rowHeaders = ['1', '2'];
    const data = [
      ['A1', 'B1'],
      ['A2', 'B2'],
    ];
    const t = new util.Table({
      rowHeaders,
      colHeaders,
      data,
      extractColHeadersFromData: true,
      extractRowHeadersFromData: true,
    });
    expect(t.colHeaders).toStrictEqual(['#', 'A', 'B']);
    expect(t.rowHeaders).toStrictEqual(['1', '2']);
  });
  it('throws on less than 1 dimensions', () => {
    expect(() => {
      new util.Table({ rows: 0 });
    }).toThrowError('Expected rows to be integer larger than 0 but got: 0');
    expect(() => {
      new util.Table({ cols: 0 });
    }).toThrowError('Expected cols to be integer larger than 0 but got: 0');
  });
  it('throws on non-integer dimensions', () => {
    expect(() => {
      new util.Table({ rows: 1.1 });
    }).toThrowError('Expected rows to be integer and integer.');
    expect(() => {
      new util.Table({ cols: 1.1 });
    }).toThrowError('Expected cols to be integer and integer.');
  });
  it('throws on invalid data dimensions: missing extra col when using row headers', () => {
    expect(() => {
      const colHeaders = ['A', 'B'];
      const rowHeaders = ['1', '2'];
      const data = [
        ['A1', 'B1'],
        ['A2', 'B2'],
      ];
      new util.Table({ rowHeaders, colHeaders, data });
    }).toThrowError('Expected all rows to be of same length.');
  });
  it('throws on invalid data dimensions: number of cols in data do not match col headers', () => {
    expect(() => {
      const colHeaders = ['#', 'A', 'B'];
      const rowHeaders = ['1', '2'];
      const data = [['A1'], ['A2']];
      new util.Table({ rowHeaders, colHeaders, data });
    }).toThrowError('Expected all rows to be of same length.');
  });
  it('throws on invalid data dimensions: number of rows in data do not match row headers', () => {
    expect(() => {
      const colHeaders = ['#', 'A', 'B'];
      const rowHeaders = ['1', '2'];
      const data = [['A1', 'B1']];
      new util.Table({ rowHeaders, colHeaders, data });
    }).toThrowError('Expected a row header for each row.');
  });
});

describe('get', () => {
  let t: util.Table<string>;
  beforeEach(() => {
    const colHeaders = ['#', 'A', 'B'];
    const rowHeaders = ['1', '2'];
    const data = [
      ['A1', 'B1'],
      ['A2', 'B2'],
    ];
    t = new util.Table({ rowHeaders, colHeaders, data });
  });
  it('works with row and col indices.', () => {
    expect(t.get(0, 0)).toBe('A1');
    expect(t.get(1, 1)).toBe('B2');
  });
  it('works with row and col derived from header names.', () => {
    expect(t.get('A', '1')).toBe('A1');
    expect(t.get('B', '2')).toBe('B2');
  });
  it('works with spreadsheet notation', () => {
    const t2 = new util.Table({
      data: [
        [1, 2],
        [3, 4],
      ],
    });
    expect(t2.get('A', '1', true)).toBe(1);
    expect(t2.get('A', 1, true)).toBe(1);
    expect(t2.get('B', 2, true)).toBe(4);
  });
  it('throws on non-existent header name', () => {
    expect(() => {
      t.get('C', '1');
    }).toThrowError('Col not found in colHeaders.');
    expect(() => {
      t.get('A', '3');
    }).toThrowError('Row not found in rowHeaders.');
  });
  it('throws when using header lookup when no headers are defined', () => {
    expect(() => {
      t = new util.Table({
        data: [
          ['A1', 'B1'],
          ['A2', 'B2'],
        ],
      });
      t.get('A', 0);
    }).toThrowError(
      'Cannot pass col as string when no colHeaders are defined.',
    );
    expect(() => {
      t = new util.Table({
        data: [
          ['A1', 'B1'],
          ['A2', 'B2'],
        ],
      });
      t.get(0, '1');
    }).toThrowError(
      'Cannot pass row as string when no rowHeaders are defined.',
    );
  });
});

describe('set', () => {
  let t: util.Table<string>;
  beforeEach(() => {
    const colHeaders = ['#', 'A', 'B'];
    const rowHeaders = ['1', '2'];
    const data = [
      ['', 'B1'],
      ['A2', ''],
    ];
    t = new util.Table({ rowHeaders, colHeaders, data });
  });
  it('works with row and col indices.', () => {
    expect(t.set(0, 0, 'A1')).toBe(t);
    expect(t.set(1, 1, 'B2')).toBe(t);
    expect(t.get(0, 0)).toBe('A1');
    expect(t.get(1, 1)).toBe('B2');
  });
  it('works with spreadsheet notation', () => {
    const t2: util.Table<number> = new util.Table<number>({
      data: [
        [1, 2],
        [3, 4],
      ],
    });
    t2.set('A', '1', 0, true);
    expect(t2.get(0, 0)).toBe(0);
  });
});

describe('deleteColumn', () => {
  it('can delete col', () => {
    const t = new util.Table({
      data: [
        ['A1', 'B1'],
        ['A2', 'B2'],
      ],
    });
    t.deleteColumn(1);
    expect(t.toArray()).toStrictEqual([['A1'], ['A2']]);
  });
  it('can delete col from table with col headers', () => {
    const t = new util.Table({
      data: [
        ['A', 'B'],
        ['A1', 'B1'],
        ['A2', 'B2'],
      ],
      extractColHeadersFromData: true,
    });
    t.deleteColumn(0);
    expect(t.toArray()).toStrictEqual([['B'], ['B1'], ['B2']]);
  });
  it('can delete col from table with col and row headers', () => {
    const t = new util.Table({
      data: [
        ['#', 'A', 'B'],
        ['1', 'A1', 'B1'],
        ['2', 'A2', 'B2'],
      ],
      extractColHeadersFromData: true,
      extractRowHeadersFromData: true,
    });
    t.deleteColumn(0);
    expect(t.toArray()).toStrictEqual([
      ['#', 'B'],
      ['1', 'B1'],
      ['2', 'B2'],
    ]);
  });
});

describe('deleteRow', () => {
  it('can delete row', () => {
    const t = new util.Table({
      data: [
        ['A1', 'B1'],
        ['A2', 'B2'],
      ],
    });
    t.deleteRow(1);
    expect(t.toArray()).toStrictEqual([['A1', 'B1']]);
  });
  it('can delete row from table with row headers', () => {
    const t = new util.Table({
      data: [
        ['1', 'A1', 'B1'],
        ['2', 'A2', 'B2'],
      ],
      extractRowHeadersFromData: true,
    });
    t.deleteRow(0);
    expect(t.toArray()).toStrictEqual([['2', 'A2', 'B2']]);
  });
  it('can delete row from table with row and col headers', () => {
    const t = new util.Table({
      data: [
        ['#', 'A', 'B'],
        ['1', 'A1', 'B1'],
        ['2', 'A2', 'B2'],
      ],
      extractColHeadersFromData: true,
      extractRowHeadersFromData: true,
    });
    t.deleteRow(0);
    expect(t.toArray()).toStrictEqual([
      ['#', 'A', 'B'],
      ['2', 'A2', 'B2'],
    ]);
  });
});

describe('indexOfColHeader', () => {
  it('finds column header index with no row headers defined', () => {
    const t = new util.Table({
      data: [
        ['A', 'B'],
        ['A1', 'B1'],
        ['A2', 'B2'],
      ],
      extractColHeadersFromData: true,
    });
    expect(t.indexOfColHeader('A')).toBe(0);
    expect(t.indexOfColHeader('B')).toBe(1);
    expect(t.indexOfColHeader('C')).toBe(-1);
  });
  it('finds column header index with row headers defined', () => {
    const t = new util.Table({
      data: [
        ['#', 'A', 'B'],
        ['1', 'A1', 'B1'],
        ['2', 'A2', 'B2'],
      ],
      extractColHeadersFromData: true,
      extractRowHeadersFromData: true,
    });
    expect(t.indexOfColHeader('A')).toBe(0);
    expect(t.indexOfColHeader('B')).toBe(1);
    expect(t.indexOfColHeader('#')).toBe(-1);
  });
  it('throws when no col headers are defined', () => {
    const t = new util.Table({
      data: [
        ['A1', 'B1'],
        ['A2', 'B2'],
      ],
    });
    expect(() => {
      t.indexOfColHeader('A1');
    }).toThrowError('No column headers are defined for this table.');
  });
});

describe('indexOfRowHeader', () => {
  it('finds row header index with no column headers defined', () => {
    const t = new util.Table({
      data: [
        ['1', 'A1', 'B1'],
        ['2', 'A2', 'B2'],
      ],
      extractRowHeadersFromData: true,
    });
    expect(t.indexOfRowHeader('1')).toBe(0);
    expect(t.indexOfRowHeader('2')).toBe(1);
    expect(t.indexOfRowHeader('3')).toBe(-1);
  });
  it('finds row header index with column headers defined', () => {
    const t = new util.Table({
      data: [
        ['#', 'A', 'B'],
        ['1', 'A1', 'B1'],
        ['2', 'A2', 'B2'],
      ],
      extractColHeadersFromData: true,
      extractRowHeadersFromData: true,
    });
    expect(t.indexOfRowHeader('1')).toBe(0);
    expect(t.indexOfRowHeader('2')).toBe(1);
    expect(t.indexOfRowHeader('#')).toBe(-1);
  });
  it('throws when no col headers are defined', () => {
    const t = new util.Table({
      data: [
        ['A1', 'B1'],
        ['A2', 'B2'],
      ],
    });
    expect(() => {
      t.indexOfRowHeader('A1');
    }).toThrowError('No row headers are defined for this table.');
  });
});

describe('toArray', () => {
  it('works on empty 1x1 table', () => {
    const t = new util.Table();
    expect(t.toArray()).toStrictEqual([[undefined]]);
  });
  it('works on empty 2x2 table', () => {
    const t = new util.Table({ rows: 2, cols: 2 });
    expect(t.toArray()).toStrictEqual([
      [undefined, undefined],
      [undefined, undefined],
    ]);
  });
  it('works with headers and data', () => {
    const colHeaders = ['#', 'A', 'B'];
    const rowHeaders = ['1', '2'];
    const data = [
      ['A1', 'B1'],
      ['A2', 'B2'],
    ];
    const t = new util.Table({ rowHeaders, colHeaders, data });
    expect(t.toArray()).toStrictEqual([
      ['#', 'A', 'B'],
      ['1', 'A1', 'B1'],
      ['2', 'A2', 'B2'],
    ]);
  });
});

describe('toArrayDataOnly', () => {
  it('works on empty 1x1 table', () => {
    const t = new util.Table();
    expect(t.toArrayDataOnly()).toStrictEqual([[undefined]]);
  });
  it('works on empty 2x2 table', () => {
    const t = new util.Table({ rows: 2, cols: 2 });
    expect(t.toArrayDataOnly()).toStrictEqual([
      [undefined, undefined],
      [undefined, undefined],
    ]);
  });
  it('works with headers and data', () => {
    const colHeaders = ['#', 'A', 'B'];
    const rowHeaders = ['1', '2'];
    const data = [
      ['A1', 'B1'],
      ['A2', 'B2'],
    ];
    const t = new util.Table({ rowHeaders, colHeaders, data });
    expect(t.toArrayDataOnly()).toStrictEqual([
      ['A1', 'B1'],
      ['A2', 'B2'],
    ]);
  });
});

describe('toCSV', () => {
  it('works', () => {
    const colHeaders = ['#', 'A', 'B'];
    const rowHeaders = ['1', '2'];
    const data = [
      ['A1', 'B1'],
      ['A2', 'B2'],
    ];
    const t = new util.Table({ rowHeaders, colHeaders, data });
    expect(t.toCSV(',')).toBe(['#,A,B', '1,A1,B1', '2,A2,B2'].join('\n'));
  });
});
describe('fromCSV', () => {
  it('works', () => {
    const csv = ['#,A,B', '1,A1,B1', '2,A2,B2'].join('\n');
    expect(util.Table.fromCSV(csv, ',').toArray()).toStrictEqual([
      ['#', 'A', 'B'],
      ['1', 'A1', 'B1'],
      ['2', 'A2', 'B2'],
    ]);
  });
});

describe('toJSON', () => {
  it('gives identical output to JSON.stringify', () => {
    const colHeaders = ['#', 'A', 'B'];
    const rowHeaders = ['1', '2'];
    const data = [
      ['A1', 'B1'],
      ['A2', 'B2'],
    ];
    const t = new util.Table({ rowHeaders, colHeaders, data });
    expect(t.serialize()).toStrictEqual(JSON.stringify(t));
  });
});

describe('serialize', () => {
  it('produces expected json', () => {
    const colHeaders = ['#', 'A'];
    const rowHeaders = ['1'];
    const data = [['A1']];
    const t = new util.Table({ rowHeaders, colHeaders, data });
    const expectedJSON =
      '{"colHeaders":["#","A"],"rowHeaders":["1"],"data":[["A1"]]}';
    expect(t.serialize()).toBe(expectedJSON);
  });
});

describe('fromJSON', () => {
  it('correctly revives instance', () => {
    const colHeaders = ['#', 'A', 'B'];
    const rowHeaders = ['1', '2'];
    const data = [
      ['A1', 'B1'],
      ['A2', 'B2'],
    ];
    const t1 = new util.Table({ rowHeaders, colHeaders, data });
    const t2 = util.Table.fromJSON(t1.serialize());
    expect(t1).toStrictEqual(t2);
    expect(t1.toArray()).toStrictEqual(t2.toArray());
  });
});
