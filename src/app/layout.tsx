'use client'
import Navigation from "./components/navigation/navbar";
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ConnectButton } from '@rainbow-me/rainbowkit';

// wallet connect
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
} from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';



const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { chains, publicClient } = configureChains(
    [mainnet, polygon, optimism],
    [
      alchemyProvider({ apiKey: process.env.ALCHEMY_ID! }),
      publicProvider()
    ]
  );
  
  const { connectors } = getDefaultWallets({
    appName: 'My RainbowKit App',
    projectId: '7e8d8f762a8ca7a802713c6cc8797c1b',
    chains
  });
  
  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient
  })

  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <Navigation />
        <ConnectButton/>
        {children}
    </RainbowKitProvider>
    </WagmiConfig>
  )
}
