import React from 'react';
import Link from 'next/link';
import { Button, PropTypes } from '@material-ui/core';

interface Props {
  href: string;
  variant?: 'text' | 'outlined' | 'contained';
  color?: PropTypes.Color;
  children: React.ReactNode;
}

const HeaderLink: React.FC<Props> = ({ href, variant, color, children }: Props) => {
  return (
    <Link href={href} passHref>
      <Button component="a" variant={variant} color={color}>
        {children}
      </Button>
    </Link>
  );
};

export default HeaderLink;
