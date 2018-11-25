export * from './detailActions';
export * from './homeActions';

export interface Action {
  type: string;
  payload?: {};
  params?: {};
}
