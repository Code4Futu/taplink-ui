import c from 'classnames';
import React from 'react';

interface MarketDropdownItemProps {}
export const MarketDropdownItem: React.FC = () => {
	return (
		<div
			className={c(
				'cursor-pointer',
				'table-row [&>div]:table-cell',
				'[&>div]:px-14px [&>div]:py-6px',
				'[&>div]:vertical-mid [&>div]:text-14px',
				'[&:hover>div]:bg-disabled'
			)}
		>
			Test
		</div>
	);
};
