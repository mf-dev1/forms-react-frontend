export * from './articleActions';
export * from './counterActions';
export * from './detailActions';
export * from './homeActions';

export interface Action {
  type: string;
  payload?: {};
  params?: {};
}
