import NextLink from 'next/link';
import Button, { ButtonProps } from '@material-ui/core/Button';

interface Props {
  href: string;
}

export const LinkButton: React.FC<ButtonProps<'a', Props>> = ({
  href,
  children,
  ...otherProps
}: ButtonProps<'a', Props>) => {
  return (
    <NextLink href={href} passHref>
      <Button {...otherProps} component="a">
        {children}
      </Button>
    </NextLink>
  );
};
