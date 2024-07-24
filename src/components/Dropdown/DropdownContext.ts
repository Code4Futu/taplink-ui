import { createContext, useContext } from 'react';

export type DropdownContext = {
	toggle: (x: boolean | ((a: boolean) => boolean)) => void;
	isOpen: boolean;
};

const Context = createContext<DropdownContext | undefined>(undefined);

Context.displayName = 'DropdownContext';

export const useDropdown = () => {
	const context = useContext(Context);
	if (!context) {
		throw new Error(
			'No dropdown context found. Maybe you forgot to wrap all components within a <Dropdown />'
		);
	}

	return context;
};

export default Context.Provider;
