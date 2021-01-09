import Typography from '@material-ui/core/Typography';

interface Props {
  children: string;
}

export const PageTitle: React.FC<Props> = ({ children }: Props) => {
  return (
    <Typography variant="h4" component="h1" gutterBottom>
      {children}
    </Typography>
  );
};
