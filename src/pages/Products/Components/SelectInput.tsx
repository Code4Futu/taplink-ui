import {
	DropdownMenu,
	DropdownProvider,
	DropdownToggle,
	Toggle,
} from '@components/Dropdown';
import { MarketDropdownItem } from '@components/MarketDropdownItem';
import React from 'react';

export const SelectInput: React.FC = () => {
	return (
		<>
			<div className='flex items-center w-full h-55.415px rd-39.024px b-1.561px b-solid b-border pl-23.41px py-7.62px pr-12.98px'>
				<div className='z-3 flex items-center w-full'>
					<DropdownProvider>
						<DropdownToggle>
							<Toggle
								className='!p-0 !b-none h-auto gap-9px'
								width={10}
								height={5}
							>
								<div className='flex items-center cursor-pointer'>Test</div>
							</Toggle>
						</DropdownToggle>
						<DropdownMenu
							position='left'
							className='mt-15px ml--14px overflow-hidden rd-5px min-w-502px shadow-[0_4px_24px_0_rgba(0,0,0,0.25)] !px-0 !pt-0'
						>
							<div className='pt-18px pb-14px bg-section'>
								<MarketDropdownItem />
							</div>
						</DropdownMenu>
					</DropdownProvider>
				</div>
			</div>
		</>
	);
};
