"use client";
import { config } from "../libs/wagmi";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query' 
import { WagmiProvider } from 'wagmi'

export interface WagmiContextProps {
  children: React.ReactNode;
}

const queryClient = new QueryClient() 

export default function WagmiContext({ children }: WagmiContextProps) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}> 
        {children}
      </QueryClientProvider> 
    </WagmiProvider>
  );
}