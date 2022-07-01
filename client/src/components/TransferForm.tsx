import React from "react";

function TransferForm() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(event);
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input type="text" placeholder="Address To" />
      <input type="text" placeholder="Amount (ETH)" />
      <input type="text" placeholder="Keyword (GIF)" />
      <input type="text" placeholder="Enter Message" />
      <button>Send Now</button>
    </form>
  );
}

export default TransferForm;
