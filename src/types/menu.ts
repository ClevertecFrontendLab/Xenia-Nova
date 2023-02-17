export interface IMenuItem {
  name: string;
  path: string;
  dataTestId?: string;
  mobileDataTestId?: string;
  id: string | number;
}

export interface IMenuMainItem extends IMenuItem {
  nestedItems?: IMenuItem[];
}
