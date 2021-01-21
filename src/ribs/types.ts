export type Name = Readonly<string>;
export type Reducer = (state?: any, action?: any) => any;
export type Saga = any;

export interface Rib {
  readonly name: Name;
  readonly reducer?: Reducer;
  readonly saga?: Saga;
}

export interface Ribs {
  readonly [key: string]: Rib;
}

export interface RibsReducersEntries {
  readonly [key: string]: Reducer;
}

export type RibsSagas = Readonly<Saga[]>;