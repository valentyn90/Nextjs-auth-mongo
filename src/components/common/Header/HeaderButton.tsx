import Link from 'next/link';
import { Button, ButtonProps } from '@material-ui/core';

interface Props {
  href: string;
  component: 'a';
}

const HeaderButton: React.FC<ButtonProps<'a', Props>> = ({
  href,
  children,
  ...otherProps
}: ButtonProps<'a', Props>) => {
  return (
    <Link href={href} passHref>
      <Button {...otherProps}>{children}</Button>
    </Link>
  );
};

export default HeaderButton;
