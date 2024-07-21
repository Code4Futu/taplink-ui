import { observer } from 'mobx-react-lite';
import { Suspense } from 'react';
import {
	Routes as BRoutes,
	Route,
	BrowserRouter as Router,
} from 'react-router-dom';

// stores
// import { useWeb3 } from '@contexts/web3Context';

// components
import { Connect } from '@components/Connect';
import Header from '@components/Header';
import Layout from '@components/Layout/Layout';
import Dashboard from '@pages/Dashboard';
import { useAccount } from 'wagmi';

const Routes = observer(function Routes() {
	const { address } = useAccount();
	// const web3store = useWeb3();

	return (
		<Suspense fallback={<div>loading...</div>}>
			<div className='relative'>
				<Router>
					{address && <Header />}
					<Suspense fallback={<div>loading...</div>}>
						<BRoutes>
							<Route element={<Layout />}>
								{address ? (
									<>
										<Route
											path='/'
											// element={web3store ? <Home /> : <div>loading...</div>}
											element={
												<div className='px-22px pt-40px pb-16px'>
													<Dashboard />
												</div>
											}
										/>
										<Route path='*' element={<div>Not found!</div>} />
									</>
								) : (
									<Route path='*' element={<Connect />} />
								)}
							</Route>
						</BRoutes>
					</Suspense>
				</Router>
			</div>
		</Suspense>
	);
});
export default Routes;
