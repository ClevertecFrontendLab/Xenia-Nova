import { ReactElement } from 'react';

export interface IComponentProps {
    title?: string
}

export interface IRoute {
  path: string;
  title?: string;
  component: ({ title }: IComponentProps) => ReactElement<any, any> | null;
}

export interface IRoutes extends IRoute {
  nestedRoutes: IRoute[];
}
