import { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../../../constants/theme';

const withThemes =
  (WrappedComponent: FC): FC =>
  (props) =>
    (
      <ThemeProvider theme={defaultTheme}>
        <WrappedComponent {...props} />
      </ThemeProvider>
    );

export default withThemes;
