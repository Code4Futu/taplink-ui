import { Connect } from '@components/Connect';
import Header from '@components/Header';
import Layout from '@components/Layout/Layout';
import MainNavigation from '@components/Sidebar/Desktop';
import Admin from '@pages/Admins';
import Dashboard from '@pages/Dashboard';
import Products from '@pages/Products';
import Profile from '@pages/Profile';
import Subscription from '@pages/Subcription';
import c from 'classnames';
import { observer } from 'mobx-react-lite';
import { Suspense, useState } from 'react';
import {
	Routes as BRoutes,
	Route,
	BrowserRouter as Router,
} from 'react-router-dom';
import { useAccount } from 'wagmi';

const Routes = observer(function Routes() {
	const { address } = useAccount();
	const [openAddProduct, setOpenAddProduct] = useState<boolean>(false);
	const [openAddAdmin, setOpenAddAdmin] = useState<boolean>(false);

	return (
		<Suspense fallback={<div>loading...</div>}>
			<div className='relative min-h-100vh'>
				<Router>
					{address && (
						<Header
							setOpenAddProduct={() => setOpenAddProduct(true)}
							setOpenAddAdmin={() => setOpenAddAdmin(true)}
						/>
					)}
					<Suspense fallback={<div>loading...</div>}>
						<BRoutes>
							<Route element={<Layout />}>
								<Route
									path='/'
									element={
										address ? (
											<div
												className={c(
													'px-22px pt-40px pb-16px',
													'xl:(grid grid-cols-[277px_auto] gap-86px pl-11px pr-97px pt-14px pb-13px)'
												)}
											>
												<div className='hidden xl:block fixed w-full max-w-277px h-[calc(100vh-22px)]'>
													<MainNavigation />
												</div>
												<div className='op-0 h-0'></div>
												<Dashboard />
											</div>
										) : (
											<Connect />
										)
									}
								/>
								<Route
									path='/products'
									element={
										address ? (
											<div
												className={c(
													'px-22px pt-11px pb-96px',
													'xl:(grid grid-cols-[277px_auto] gap-86px pl-11px pr-97px pt-14px pb-13px))'
												)}
											>
												<div className='hidden xl:block fixed w-full max-w-277px h-[calc(100vh-22px)]'>
													<MainNavigation />
												</div>
												<div className='op-0 h-0'></div>
												<Products
													openAddProduct={openAddProduct}
													setOpenAddProduct={setOpenAddProduct}
												/>
											</div>
										) : (
											<Connect />
										)
									}
								/>
								<Route
									path='/dashboard'
									element={
										address ? (
											<div
												className={c(
													'px-22px pt-40px pb-16px',
													'xl:(grid grid-cols-[277px_auto] gap-86px pl-11px pr-97px pt-14px pb-13px)'
												)}
											>
												<div className='hidden xl:block fixed w-full max-w-277px h-[calc(100vh-22px)]'>
													<MainNavigation />
												</div>
												<div className='op-0 h-0'></div>
												<Dashboard />
											</div>
										) : (
											<Connect />
										)
									}
								/>
								<Route
									path='/admins'
									element={
										address ? (
											<div
												className={c(
													'px-22px pt-40px pb-16px',
													'xl:(grid grid-cols-[277px_auto] gap-86px pl-11px pr-97px pt-14px pb-13px)'
												)}
											>
												<div className='hidden xl:block fixed w-full max-w-277px h-[calc(100vh-22px)]'>
													<MainNavigation />
												</div>
												<div className='op-0 h-0'></div>
												<Admin
													openAddAdmin={openAddAdmin}
													setOpenAddAdmin={setOpenAddAdmin}
												/>
											</div>
										) : (
											<Connect />
										)
									}
								/>
								<Route
									path='/profile'
									element={
										address ? (
											<div
												className={c(
													'px-22px pt-40px pb-16px',
													'xl:(grid grid-cols-[277px_auto] gap-86px pl-11px pr-97px pt-14px pb-13px)'
												)}
											>
												<div className='hidden xl:block fixed w-full max-w-277px h-[calc(100vh-22px)]'>
													<MainNavigation />
												</div>
												<div className='op-0 h-0'></div>
												<Profile />
											</div>
										) : (
											<Connect />
										)
									}
								/>
								<Route
									path='/subscription'
									element={
										address ? (
											<div
												className={c(
													'px-22px pt-40px pb-16px',
													'xl:(grid grid-cols-[277px_auto] gap-86px pl-11px pr-97px pt-14px pb-13px)'
												)}
											>
												<div className='hidden xl:block fixed w-full max-w-277px h-[calc(100vh-22px)]'>
													<MainNavigation />
												</div>
												<div className='op-0 h-0'></div>
												<Subscription />
											</div>
										) : (
											<Connect />
										)
									}
								/>
								<Route
									path='*'
									element={
										address ? (
											<div
												className={c(
													'px-22px pt-40px pb-16px',
													'xl:(grid grid-cols-[277px_auto] gap-86px pl-11px pr-97px pt-14px pb-13px)'
												)}
											>
												<div className='hidden xl:block fixed w-full max-w-277px h-[calc(100vh-22px)]'>
													<MainNavigation />
												</div>
												<div className='op-0 h-0'></div>
												<Dashboard />
											</div>
										) : (
											<Connect />
										)
									}
								/>
							</Route>
						</BRoutes>
					</Suspense>
				</Router>
			</div>
		</Suspense>
	);
});
export default Routes;
