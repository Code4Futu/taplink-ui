import checkIcon from '@assets/svg/ic-checkbox-checked.svg';
import c from 'classnames';

export interface CheckBoxProps {
	checked?: boolean;
	size?: number;
	title?: string | React.ReactNode;
	titleStyle?: string;
	className?: string;
	onCheckChanged?: (checked: boolean) => unknown;
}

export const CheckBox = ({
	checked,
	size = 16,
	title,
	titleStyle,
	onCheckChanged,
	className,
}: CheckBoxProps) => {
	return (
		<div
			className={c(
				'flex cursor-pointer hover:op-80 transition-all mt--2px',
				className
			)}
			onClick={() => {
				onCheckChanged?.(!checked);
			}}
		>
			<div
				className={c(
					'flex items-center justify-center b-1 b-solid rd-3px h-full',
					{ 'b-transparent primary-gradient': checked },
					{ 'b-lightgrey bg-transparent': !checked }
				)}
				style={{ height: `${size}px`, width: `${size}px` }}
			>
				<img
					src={checkIcon}
					className={c(
						'duration-30 ease-out',
						{ block: checked },
						{ hidden: !checked }
					)}
					height={size / 2}
					width={size / 2}
				/>
			</div>
			{typeof title === 'string' ? (
				<div className={c('ml-5px text-xl c-container', titleStyle)}>
					{title}
				</div>
			) : (
				title
			)}
		</div>
	);
};
