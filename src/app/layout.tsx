import { ReactElement, ReactNode } from 'react';

const RootLayout = ({ children }: { children: ReactNode }): ReactElement => (
  <html lang='fr'>
    <body>{children}</body>
  </html>
);

export default RootLayout;
