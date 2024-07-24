import c from 'classnames';
import { ReactNode } from 'react';
import { useDropdown } from './DropdownContext';

export type DropdownMenuProps = {
	title?: string;
	children?: ReactNode;
	position?: 'right' | 'left';
	direction?: 'up' | 'down';
	className?: string;
};

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
	title,
	children,
	className,
	position = 'right',
	direction = 'down',
}) => {
	const { isOpen, toggle } = useDropdown();
	return (
		<div
			className={c(
				'absolute',
				'px-17px',
				'transition-all duration-200 ease-linear',
				isOpen ? 'scale-y-100 z-100 op-100' : 'scale-y-0 -z-1 op-0',
				{
					'top-0 -translate-y-100% origin-bottom': direction === 'up',
					'top-100% origin-top': direction === 'down',
					'left-0': position === 'left',
					'right-0': position === 'right',
				},
				{ 'pt-15px': title },
				className
			)}
			onClick={() => {
				toggle(false);
			}}
		>
			<div className='text-14px font-600 leading-21px'>{title}</div>
			{children}
		</div>
	);
};
