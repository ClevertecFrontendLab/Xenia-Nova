export interface IMenuItem {
  label: string;
  path: string;
  dataTestId?: string;
  mobileDataTestId?: string;
}

export interface IMenuMainItem extends IMenuItem {
  nestedItems?: IMenuItem[];
}
