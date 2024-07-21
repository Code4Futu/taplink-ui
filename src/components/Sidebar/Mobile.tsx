import IconAccount from '@assets/svg/ic-account.svg?react';
import IconSubscription from '@assets/svg/ic-cart.svg?react';
import IconDashboard from '@assets/svg/ic-dashboard.svg?react';
import IconMenu from '@assets/svg/ic-menu.svg?react';
import IconProduct from '@assets/svg/ic-product.svg?react';
import IconSetting from '@assets/svg/ic-setting.svg?react';
import IconSignOut from '@assets/svg/ic-sign-out.svg?react';
import IconUser from '@assets/svg/ic-user.svg?react';
import { shortenAddress } from '@utils/addresses';
import c from 'classnames';
import { NavLink } from 'react-router-dom';
import { useAccount } from 'wagmi';

export const MenuItems = [
	{
		title: 'Dashboard',
		url: '/dashboard',
		matchedUrl: [],
		items: [],
		image: (
			<IconDashboard className='text-white size-21.423px lg:size-24px group-hover:text-[#F561C0]' />
		),
	},
	{
		title: 'Products',
		url: '/products',
		matchedUrl: ['trade', 'spot'],
		items: [],
		image: (
			<IconProduct className='text-white size-21.423px lg:size-24px group-hover:text-[#F561C0]' />
		),
	},

	{
		title: 'Users',
		url: '/users',
		matchedUrl: [],
		items: [],
		image: (
			<IconUser className='text-white size-21.423px lg:size-24px group-hover:text-[#F561C0]' />
		),
	},
	{
		title: 'Subscription',
		url: '/subscription',
		matchedUrl: [],
		items: [],
		image: (
			<IconSubscription className='text-white size-21.423px lg:size-24px group-hover:text-[#F561C0]' />
		),
	},
	{
		title: 'Settings',
		url: '/settings',
		matchedUrl: [],
		items: [],
		image: (
			<IconSetting className='text-white size-21.423px lg:size-24px group-hover:text-[#F561C0]' />
		),
	},
];

export const MenuMobile: React.FC<{
	visible?: boolean;
	onDismiss: () => void;
}> = ({ visible, onDismiss }) => {
	const { address } = useAccount();
	return (
		<nav
			className={c(
				'block lg:hidden p-0 m-0 fixed top-0 left-0 w-259px h-full max-h-100vh z-100 transition-transform bg-transparent',
				'[&_ul]:(m-0 list-none)',
				'[&li]:float-left',
				visible
					? 'translate-x-0 lg:translate-none fixed z-997'
					: 'translate-x-[-100%] lg:translate-none'
			)}
		>
			<nav className='flex flex-col h-full bg-container shadow-[0px,4px,20px,0px,rgba(0,0,0,0.25)] rounded-r-30px'>
				<div className='flex items-center py-5 pl-5 pr-6'>
					<NavLink className='flex items-center' to='/'>
						<IconMenu className='w-6 h-6 text-white' />
					</NavLink>
					<div className='flex items-center justify-center flex-1 w-full'>
						<span className='text-base font-bold'>Menu</span>
					</div>
				</div>
				<div className='flex flex-col justify-center items-center gap-[9.56px]'>
					<IconAccount className='size-57px' />
					<div className='flex flex-col gap-9.56px items-center justify-center'>
						<span className='text-base font-bold'>John</span>
						<span className='text-xs'>
							{address && shortenAddress(address as `0x${string}`, 5, 3)}
						</span>
					</div>
				</div>
				<div className={c('flex w-full')}>
					<div className='flex h-full w-full flex-col [&>div:first-child]:pt-48.88px gap-10'>
						{MenuItems.map((item, idx) => (
							<div key={idx}>
								<div className={c('group text-base leading-24px pl-22px')}>
									<NavLink to={item.url ?? '/'} onClick={onDismiss}>
										<div className='flex items-center gap-5 group'>
											{item.image}
											<div className='group-hover:text-linear'>
												{item.title}
											</div>
										</div>
									</NavLink>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className='flex items-end justify-center flex-1 h-full mb-1'>
					<button className='inline-flex justify-center items-center py-9.1px px-18.2px rounded-65px bg-[rgba(102,108,129,0.25)] gap-2'>
						<IconSignOut className='size-20.8px' />
						<span className='text-xs font-medium'>Logout</span>
					</button>
				</div>
			</nav>
		</nav>
	);
};

export default MenuMobile;
