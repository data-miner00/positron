export function shortenAddress(address: string, showLength: number = 4) {
  const lastIndex = address.length;
  return (
    address.substring(0, showLength + 2) +
    "..." +
    address.substring(lastIndex - showLength, lastIndex)
  );
}
