import IconArrowLeft from '@assets/svg/ic-arrow-left.svg?react';
import SearchInput from '@components/Inputs/SearchInput';
import { SelectInput } from '../SelectInput';

interface ISecondStep {
	handleDecTab: () => void;
}
export const SecondStep: React.FC<ISecondStep> = ({ handleDecTab }) => {
	return (
		<>
			<div className='relative flex justify-center items-center lg:hidden'>
				<IconArrowLeft
					className='absolute left-0'
					onClick={() => handleDecTab()}
				/>
				<span className='text-base font-bold leading-24px'>Add Product</span>
			</div>
			<div className='hidden lg:flex justify-center items-center text-32px font-bold'>
				Add New Product
			</div>
			<div className='flex flex-col gap-18.73px mt-33px lg:gap-4'>
				<div className='flex flex-col gap-10.93px'>
					<span className='text-15.61px font-500 leading-23px'>Title*</span>
					<SearchInput
						placeholder='Title'
						containerStyle='h-55.415px rd-39.024px b-1.561px !b-border bg-transparent pl-23.41px lg:!min-w-0'
						inputType='text'
						isHiddenIcon
					/>
				</div>
				<div className='flex flex-col gap-10.93px'>
					<span className='text-15.61px font-500 leading-23px'>Brand*</span>
					<SearchInput
						placeholder='Brand'
						containerStyle='h-55.415px rd-39.024px b-1.561px !b-border bg-transparent pl-23.41px lg:!min-w-0'
						inputType='text'
						isHiddenIcon
					/>
				</div>
				<div className='flex flex-col gap-10.93px'>
					<span className='text-15.61px font-500 leading-23px'>Type</span>
					<SearchInput
						placeholder='Shirt / Shoes / etc'
						containerStyle='h-55.415px rd-39.024px b-1.561px !b-border bg-transparent pl-23.41px lg:!min-w-0'
						inputType='text'
						isHiddenIcon
					/>
				</div>
				<div className='flex flex-col gap-10.93px'>
					<span className='text-15.61px font-500 leading-23px'>Quantity</span>
					<SearchInput
						placeholder='Shirt / Shoes / etc'
						containerStyle='h-55.415px rd-39.024px b-1.561px !b-border bg-transparent pl-23.41px lg:!min-w-0'
						inputType='number'
						isHiddenIcon
					/>
				</div>
				<div className='flex flex-col gap-10.93px'>
					<span className='text-15.61px font-500 leading-23px'>
						Country/Region
					</span>
					<SelectInput />
				</div>
				<div className='flex flex-col gap-10.93px'>
					<span className='text-15.61px font-500 leading-23px'>
						Manufacturing Date
					</span>
					<input
						className='flex items-center w-full h-55.415px rd-39.024px b-1.561px b-solid b-border pl-23.41px py-7.62px pr-12.98px bg-transparent focus:outline-none c-boldgrey'
						type='date'
					/>
				</div>
				<div className='flex flex-col gap-10.93px'>
					<span className='text-15.61px font-500 leading-23px'>
						Description*
					</span>
					<textarea
						className='flex items-center w-full h-103px rd-23.415px b-1.561px b-solid b-border pt-14.83px pl-23.41px pr-12.98px bg-transparent c-boldgrey focus:outline-none placehoder:!c-boldgrey'
						rows={4}
						placeholder='Description'
					/>
				</div>
			</div>
		</>
	);
};
