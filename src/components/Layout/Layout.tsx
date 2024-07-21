import { Outlet } from 'react-router-dom';
import { useAccount } from 'wagmi';

const Layout = () => {
	const { address } = useAccount();

	return (
		<main className='flex flex-col items-stretch flex-1 min-h-full'>
			<Outlet />
		</main>
	);
};

export default Layout;
