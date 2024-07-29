import IconSearch from '@assets/svg/ic-search.svg?react';
import c from 'classnames';

interface ISearchInput {
	placeholder: string;
	containerStyle?: string;
	inputStyle?: string;
	isHiddenIcon?: boolean;
	inputType: React.HTMLInputTypeAttribute | undefined;
}
const SearchInput: React.FC<ISearchInput> = ({
	placeholder,
	containerStyle,
	inputStyle,
	isHiddenIcon,
	inputType,
}) => {
	return (
		<div
			className={c(
				'flex items-center h-34px rounded-58.621px b-1.172px b-solid b-grey bg-[rgba(217,217,217,0.15)] w-full gap-2 py-7.62px pl-21.5px',
				'lg:(h-59px rounded-100px !b-2px min-w-727px p-3)',
				containerStyle
			)}
		>
			{!isHiddenIcon && <IconSearch className='size-18.759px lg:size-32px' />}
			<input
				autoComplete='false'
				type={inputType}
				className={c(
					'h-14px w-full placeholder:(text-xs text-boldgrey) bg-transparent flex-1 min-w-0 focus:outline-none caret-grey',
					'lg:(h-6 placeholder:text-base)',
					inputStyle
				)}
				placeholder={placeholder}
			/>
		</div>
	);
};

export default SearchInput;
