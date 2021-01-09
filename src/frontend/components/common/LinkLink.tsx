import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import MuiLink, { LinkProps as MuiLinkProps } from '@material-ui/core/Link';

interface Props {
  nextLinkProps: NextLinkProps;
  muiLinkProps: MuiLinkProps<'a'>;
  children: React.ReactNode;
}

export const LinkLink: React.FC<Props> = ({ nextLinkProps, muiLinkProps, children }: Props) => {
  return (
    <NextLink {...nextLinkProps} passHref>
      <MuiLink {...muiLinkProps} component="a">
        {children}
      </MuiLink>
    </NextLink>
  );
};
