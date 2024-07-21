import { http, createConfig } from 'wagmi';
import { sepolia } from 'wagmi/chains';
import { injected, metaMask, safe, walletConnect } from 'wagmi/connectors';

const projectId = '3fbb6bba6f1de962d911bb5b5c9dba88';

export const config = createConfig({
	chains: [sepolia],
	connectors: [injected(), walletConnect({ projectId }), metaMask(), safe()],
	transports: {
		[sepolia.id]: http(),
	},
});
