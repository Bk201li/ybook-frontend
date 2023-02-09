import React from "react";

export default function MessagesInput({
  send,
}: {
  send: (val: string) => void;
}) {
  const [value, setValue] = React.useState<string>("");
  return (
    <>
      <input
        onChange={(e) => setValue(e.target.value)}
        placeholder="Ecrire un message..."
        value={value}
      />
      <button onClick={() => send(value)}>Send</button>
    </>
  );
}
