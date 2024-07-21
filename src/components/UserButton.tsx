import { shortenAddress } from '@utils/addresses';
import icAccount from '@assets/images/ic-account.png';
import c from 'classnames';
import { useAccount } from 'wagmi';

interface IUserButton {
	className?: string;
	avatarSize?: string;
	titleStyle?: string;
	subtitleStyle?: string;
}

export const UserButton: React.FC<IUserButton> = ({
	avatarSize,
	className,
	titleStyle,
	subtitleStyle,
}) => {
	const { address } = useAccount();
	return (
		<button
			className={c('flex items-center gap-4.55px', className)}
			type='button'
		>
			<img
				src={icAccount}
				alt='ic account'
				className={c('size-29.108px', avatarSize)}
			/>
			<div className='flex flex-col items-start text-container'>
				<div className={c('text-10.916px font-bold', titleStyle)}>John</div>
				<div className={c('text-7.277px font-normal', subtitleStyle)}>
					{shortenAddress(address, 5, 3)}
				</div>
			</div>
		</button>
	);
};
