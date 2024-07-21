import { MenuItems } from './Mobile';
import IconSignOut from '@assets/svg/ic-sign-out.svg?react';

function MainNavigation() {
	return (
		<nav className='flex flex-col justify-between w-full h-full bg-container rounded-[30px] shadow-[0px,4px,20px,0px,rgba(0,0,0,0.20)] pb-38px pt-76px'>
			<div className='inline-flex w-full justify-center text-32px font-bold leading-48px'>
				<div>
					<span>Tap-</span>
					<span className='text-linear'>Link</span>
				</div>
			</div>
			<div className='inline-flex flex-col items-start gap-65px pl-67px'>
				{MenuItems.map((item, idx) => (
					<div
						key={idx}
						className='group flex items-center gap-22px cursor-pointer transition-all'
					>
						{item.image}
						<span className='text-18px font-medium leading-27px group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-[linear-gradient(90deg,_#754DFB_0.05%,_#F561C0_99.93%)]'>
							{item.title}
						</span>
					</div>
				))}
			</div>
			<div className='flex items-end justify-center'>
				<button className='inline-flex justify-center items-center py-14px px-7 rounded-100px bg-[rgba(102,108,129,0.25)] gap-3'>
					<IconSignOut className='size-32px' />
					<span className='text-18px font-medium leading-27px'>Logout</span>
				</button>
			</div>
		</nav>
	);
}

export default MainNavigation;
