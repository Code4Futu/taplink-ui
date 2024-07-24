import { useOnClickOutside } from '@hooks/useOnClickOutside';
import { ReactNode, useMemo, useRef, useState } from 'react';
import DropdownContextProvider from './DropdownContext';

export const DropdownProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [open, setOpen] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	const contextValue = useMemo(() => {
		return {
			isOpen: open,
			toggle: setOpen,
		};
	}, [open]);

	useOnClickOutside(ref, () => {
		setOpen(false);
	});

	return (
		<div className='w-full relative inline-block' ref={ref}>
			<DropdownContextProvider value={contextValue}>
				{children}
			</DropdownContextProvider>
		</div>
	);
};
