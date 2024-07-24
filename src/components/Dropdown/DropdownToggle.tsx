import React from 'react';
import { useDropdown } from './DropdownContext';

export type DropdownToggleProps = {
	children: React.ReactElement;
};

export const DropdownToggle: React.FC<DropdownToggleProps> = ({ children }) => {
	const { toggle } = useDropdown();

	return React.cloneElement(children, {
		onClick: (ev: MouseEvent) => {
			ev.stopPropagation();
			toggle((x) => !x);
		},
	});
};
