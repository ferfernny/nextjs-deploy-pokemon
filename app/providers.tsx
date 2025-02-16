// app/providers.tsx
'use client';

import { ApolloProvider } from '@apollo/client';
import client from '../lib/apolloClient';
import { ReactNode } from 'react';

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default Providers;
