export function shortenAddress(address: string) {
  const lastIndex = address.length;
  return (
    address.substring(0, 6) +
    "..." +
    address.substring(lastIndex - 4, lastIndex)
  );
}
