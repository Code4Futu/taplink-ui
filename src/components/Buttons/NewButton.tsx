import IconPlus from '@assets/svg/ic-plus.svg?react';

interface INewButton {
	setOpenAddProduct: () => void;
}
const NewButton: React.FC<INewButton> = ({ setOpenAddProduct }) => {
	return (
		<div
			className='inline-flex items-center py-6.533px px-13.067px justify-center items-center rounded-46.667px primary-gradient max-h-28px hover:op-80 transition-all'
			onClick={() => setOpenAddProduct()}
		>
			<IconPlus className='size-14.933px' />
			<span className='text-7.467px font-500 text-center leading-11px mt-2px'>
				Add New
			</span>
		</div>
	);
};

export default NewButton;
