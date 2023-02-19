import React, { FC, SVGProps } from 'react';
import classNames from 'classnames';

import styles from './button.module.scss';

interface IButtonProps {
  title: string;
  onClick: () => void;
  variant: 'primary' | 'secondary' | 'text';
  size: 'large' | 'small';
  isSubmit?: boolean;
  disabled?: boolean;
  icon?: FC<SVGProps<SVGSVGElement>>;
}

export const Button: FC<IButtonProps> = ({
  title,
  onClick,
  variant,
  isSubmit = false,
  size,
  disabled = false,
  icon: Icon,
}) => (
  <button
    className={classNames(styles.button, styles[variant], styles[size])}
    type={isSubmit ? 'submit' : 'button'}
    disabled={disabled}
    onClick={onClick}
  >
    {title}
    {Icon && <Icon />}
  </button>
);
