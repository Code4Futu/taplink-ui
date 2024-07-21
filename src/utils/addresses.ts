export const shortenAddress = (
	address: `0x${string}` | undefined,
	firstLength?: number,
	lastLength?: number
	// eslint-disable-next-line consistent-return
) => {
	if (address && address.length > 0) {
		if (firstLength === 0) {
			return `${address.substring(0, 0)}...${address.substring(
				address.length - (lastLength || 4),
				address.length
			)}`;
		}
		return `${address.substring(0, firstLength || 6)}...${address.substring(
			address.length - (lastLength || 4),
			address.length
		)}`;
	}
};
