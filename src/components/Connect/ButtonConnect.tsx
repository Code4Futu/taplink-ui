import IconAccount from '@assets/svg/ic-account.svg?react';
import IconConnect from '@assets/svg/ic-connect.svg?react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { shortenAddress } from '@utils/addresses';
import c from 'classnames';

const ButtonConnect = ({
	className,
	styleTitle,
	styleIcon,
}: {
	className?: string;
	styleTitle?: string;
	styleIcon?: string;
}) => {
	return (
		<ConnectButton.Custom>
			{({
				account,
				chain,
				openAccountModal,
				openChainModal,
				openConnectModal,
				authenticationStatus,
				mounted,
			}) => {
				// Note: If your app doesn't use authentication, you
				// can remove all 'authenticationStatus' checks
				const ready = mounted && authenticationStatus !== 'loading';
				const connected =
					ready &&
					account &&
					chain &&
					(!authenticationStatus || authenticationStatus === 'authenticated');
				return (
					<div
						{...(!ready && {
							'aria-hidden': true,
							style: {
								opacity: 0,
								pointerEvents: 'none',
								userSelect: 'none',
							},
						})}
					>
						{(() => {
							if (!connected) {
								return (
									<button
										onClick={openConnectModal}
										type='button'
										className={c(
											'flex items-center bg-container h-6 py-1 pl-14.8px pr-1 rounded-46.319px gap-2',
											'lg:h-50px lg:py-2 lg:pr-2 lg:pl-8 lg:gap-18px',
											className
										)}
									>
										<span
											className={c(
												'text-xs font-400',
												'lg:text-2xl',
												styleTitle
											)}
										>
											Connect Wallet
										</span>
										<IconConnect
											className={c('size-16px', 'lg:size-41.48px', styleIcon)}
										/>
									</button>
								);
							}
							if (chain.unsupported) {
								return (
									<button
										onClick={openChainModal}
										type='button'
										className='flex items-center !bg-container h-6 py-1 pl-14.8px pr-1 rounded-46.319px'
									>
										Wrong network
									</button>
								);
							}
							return (
								<>
									<button
										className='flex items-center gap-4.55px'
										type='button'
									>
										<IconAccount className='size-29.108px' />
										<div className='flex flex-col items-start ml-4.55px text-container'>
											<div className='text-10.916px font-bold'>John</div>
											<div className='text-7.277px font-normal'>
												{shortenAddress(account.address as `0x${string}`, 5, 3)}
											</div>
										</div>
									</button>
								</>
							);
						})()}
					</div>
				);
			}}
		</ConnectButton.Custom>
	);
};

export default ButtonConnect;
