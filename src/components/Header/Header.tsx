import ButtonConnect from '@components/Connect/ButtonConnect';
import { useCallback, useState } from 'react';
import { useAccount } from 'wagmi';
import IconMenu from '@assets/svg/ic-menu.svg?react';
import MenuMobile from '@components/Sidebar/Mobile';

const headerClass =
	'sticky flex flex-col justify-start flex-shrink-0 top-0 left-0 right-0 w-full z-40 py-3 px-[22px] md:py-6 lg:hidden';

const Header = () => {
	const { address } = useAccount();
	const [selected, setSelected] = useState('');
	const [menuVisible, setMenuVisible] = useState(false);

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

	return (
		<>
			<div id={'header'} className={headerClass}>
				<div className='relative flex items-center justify-between flex-1'>
					<div className='absolute flex items-center justify-center w-full text-base font-bold text-background z--1'>
						<span>Dashboard</span>
					</div>
					<div className='flex justify-end'>
						<IconMenu
							className='size-6 c-black'
							onClick={() => toggleMenu(true)}
						/>
					</div>
					<ButtonConnect />
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
