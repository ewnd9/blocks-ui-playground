/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from '@theme-ui/components';

export const HeaderOther = ({ justifyContent = 'space-between', ...props }) => {
  return (
    // @ts-ignore
    <header
      sx={{
        variant: 'styles.header',
        display: 'flex',
        alignItems: 'center',
        justifyContent
      }}
      {...props}
    />
  );
};

HeaderOther.Logo = props => {
  return (
    <Link
      sx={{
        variant: 'styles.navLink',
        p: 2
      }}
      {...props}
    />
  );
};

HeaderOther.Nav = props => {
  return <nav {...props} />;
};

HeaderOther.Link = props => {
  return (
    <Link
      sx={{
        variant: 'styles.navLink',
        p: 2
      }}
      {...props}
    />
  );
};
