import React, { FC, SVGProps, SyntheticEvent } from 'react';
import classNames from 'classnames';

import styles from './icon-button.module.scss';

interface IIconButtonProps {
  icon: FC<SVGProps<SVGSVGElement>>;
  onClick: (event: SyntheticEvent<HTMLButtonElement>) => void;
  isActive?: boolean;
  title?: string;
  value: string;
  testId: string;
}

export const IconButton: FC<IIconButtonProps> = ({ icon: Icon, onClick, isActive, title, value, testId }) => (
  <button
    data-test-id={testId}
    type='button'
    className={classNames(styles.iconButton, { [styles.active]: isActive })}
    onClick={onClick}
    value={value}
  >
    <Icon />
    {title && <span>{title}</span>}
  </button>
);
