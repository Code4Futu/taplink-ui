import { RefObject, useEffect } from 'react';

// Hook
export function useOnClickOutside<TElement extends HTMLElement>(
	ref: RefObject<TElement>,
	handler: (event: Event) => void
) {
	useEffect(() => {
		const listener = (event: Event) => {
			// Do nothing if clicking ref's element or descendent elements
			if (!(event.target instanceof HTMLElement)) {
				return;
			}

			if (
				!ref.current ||
				(event.target != null && ref.current.contains(event.target))
			) {
				return;
			}
			handler(event);
		};

		document.addEventListener('mousedown', listener);
		document.addEventListener('touchstart', listener);

		return () => {
			document.removeEventListener('mousedown', listener);
			document.removeEventListener('touchstart', listener);
		};
	}, [ref, handler]);
}
