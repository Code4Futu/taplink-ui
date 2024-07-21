import ErrorBoundary from '@components/ErrorBoundary';
import { config } from '@configs/wagmi';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import Routes from '@routes/index';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';

// import Web3Provider from '@contexts/web3Context';

const queryClient = new QueryClient();

function App() {
	return (
		<ErrorBoundary>
			<WagmiProvider config={config}>
				<QueryClientProvider client={queryClient}>
					<RainbowKitProvider>
						<Routes />
					</RainbowKitProvider>
				</QueryClientProvider>
			</WagmiProvider>
		</ErrorBoundary>
	);
}

export default App;
