import iconArrowDown from '@assets/svg/ic-dropdown.svg';
import c from 'classnames';
import React from 'react';
import { DropdownProvider } from './Dropdown';
import { useDropdown } from './DropdownContext';
import { DropdownMenu, DropdownMenuProps } from './DropdownMenu';
import { DropdownToggle } from './DropdownToggle';

export type BasicDropdownOption<T> = {
	title: string;
	value: T;
};
export type BasicDropdownProps<T> = {
	value: T;
	menuConfig?: Exclude<DropdownMenuProps, 'children'>;
	options: BasicDropdownOption<T>[];
	renderToggle?: (option?: BasicDropdownOption<T>) => React.ReactElement;
	renderOption?: (option: BasicDropdownOption<T>) => React.ReactElement;
	onSelect: (value: T) => void;
	comparator?: (a: T, b: T) => boolean;
	className?: string;
};
export const BasicDropdown = <T,>({
	value,
	menuConfig,
	renderOption,
	renderToggle,
	options,
	onSelect,
	comparator,
	className,
}: BasicDropdownProps<T>) => {
	if (!comparator) {
		comparator = (a, b) => a === b;
	}
	if (!renderToggle) {
		renderToggle = (option) => (
			<Toggle className={className}>
				<span className='text-14px font-500'>{option?.title}</span>
			</Toggle>
		);
	}
	if (!renderOption) {
		renderOption = (option) => (
			<div
				className={c(
					'px-14px py-10px cursor-pointer text-13px',
					{
						'c-grey': !comparator?.(option.value, value),
					},
					'hover:(bg-#46464b c-#fff)'
				)}
			>
				{option.title}
			</div>
		);
	}
	const selected = options.find((c) => comparator?.(c.value, value));

	return (
		<DropdownProvider>
			<DropdownToggle>{renderToggle(selected)}</DropdownToggle>
			<DropdownMenu position='left' direction='down' {...menuConfig}>
				<div className='bg-section w-100% overflow-hidden'>
					{options.map((option, index) => (
						<div key={index} onClick={() => onSelect(option.value)}>
							{renderOption?.(option)}
						</div>
					))}
				</div>
			</DropdownMenu>
		</DropdownProvider>
	);
};

type ToggleProps = {
	children: React.ReactNode;
	className?: string;
	isHiddenIcon?: boolean;
	width?: number;
	height?: number;
};
export const Toggle = ({
	children,
	className,
	isHiddenIcon,
	width,
	height,
}: ToggleProps) => {
	const { isOpen } = useDropdown();
	return (
		<DropdownToggle>
			<div
				className={c(
					'w-full h-16px flex items-center justify-between cursor-pointer gap-4px c-boldgrey',
					{
						'[&>img]:rotate-180deg': isOpen,
					},
					className
				)}
			>
				{children}
				{!isHiddenIcon && (
					<img
						src={iconArrowDown}
						alt='icon drop down'
						className={c(
							'ease-linear duration-125 transition-transform',
							width && `w-${width}px`,
							height && `h-${height}px`
						)}
					/>
				)}
			</div>
		</DropdownToggle>
	);
};
