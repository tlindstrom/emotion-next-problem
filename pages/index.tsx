import React from "react";
import { css } from "@emotion/react";

const Page = () => {
  const [input, setInput] = React.useState("");

  return (
    <>
      <div
        css={css`
          background-color: pink;
          padding: 100px;
        `}
      >
        <div>
          <p>
            Type into the input box. In dev mode it will be really slow, while in production it's fast.
          </p>
          <input
            type="text"
            value={input}
            onChange={(ev) => setInput(ev.target.value)}
          />
        </div>
        {new Array(1000).fill(0).map((_, i) => {
          return (
            <div
              key={i}
              css={css`
                margin: 30px;
                background-color: green;
                color: white;
              `}
            >
              Lorem ipsum dolor sit amet.
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Page;
