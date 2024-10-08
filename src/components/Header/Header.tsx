import IconMenu from '@assets/svg/ic-menu.svg?react';
import NewButton from '@components/Buttons/NewButton';
import ButtonConnect from '@components/Connect/ButtonConnect';
import MenuMobile from '@components/Sidebar/Mobile';
import { useCallback, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useAccount } from 'wagmi';

const headerClass =
	'sticky flex flex-col justify-start flex-shrink-0 top-0 left-0 right-0 w-full z-40 py-3 px-[22px] md:py-6 lg:hidden';

interface IHeader {
	setOpenAddProduct: () => void;
	setOpenAddAdmin: () => void;
}
const Header: React.FC<IHeader> = ({ setOpenAddProduct, setOpenAddAdmin }) => {
	const { address } = useAccount();
	const [selected, setSelected] = useState('');
	const [menuVisible, setMenuVisible] = useState(false);
	const { pathname } = useLocation();

	const onMenuItemMouseEnter = useCallback((key: string) => {
		setSelected(key);
	}, []);

	const onMenuItemMouseLeave = useCallback(() => {
		setSelected('');
	}, []);

	const onMenuItemClick = useCallback((key: string) => {
		setSelected((s) => {
			if (s === key) {
				return '';
			}
			return key;
		});
	}, []);

	const toggleMenu = (visible: boolean) => {
		setMenuVisible(visible);
		const body = document.body || document.querySelector('body');
		if (body) {
			if (visible) {
				body.classList.add('no-scroll');
			} else {
				body.classList.remove('no-scroll');
			}
		}
	};

	const checkTitle = (pathname: string) => {
		switch (pathname) {
			case '/':
				return 'Dashboard';
			case '/products':
				return 'Products';
			case '/admins':
				return 'Admins';
			case '/profile':
				return 'Profile';
			case '/subscription':
				return 'Subscriptions';
			default:
				return 'Dashboard';
		}
	};

	return (
		<>
			<div id={'header'} className={headerClass}>
				<div className='relative flex items-center justify-between flex-1'>
					<div className='absolute flex items-center justify-center w-full text-base font-bold text-background z--1'>
						<span>{checkTitle(pathname)}</span>
					</div>
					<div className='flex justify-end'>
						<IconMenu
							className='size-6 c-black'
							onClick={() => toggleMenu(true)}
						/>
					</div>
					{(pathname === '/' ||
						pathname === '/profile' ||
						pathname === '/subscription') && <ButtonConnect />}
					{pathname === '/products' && (
						<NewButton setOpenAddProduct={setOpenAddProduct} />
					)}
					{pathname === '/admins' && (
						<NewButton setOpenAddProduct={setOpenAddAdmin} />
					)}
				</div>
			</div>
			{menuVisible && (
				<div
					className='fixed top-0 left-0 w-full h-full z-[996] bg-[rgba(0,0,0,0.75)]'
					onClick={() => toggleMenu(false)}
				/>
			)}
			<MenuMobile visible={menuVisible} onDismiss={() => toggleMenu(false)} />
		</>
	);
};

export default Header;
