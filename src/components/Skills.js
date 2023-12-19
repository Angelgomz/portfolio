import React from "react";

export default function Skills({children }) {
  return (
    <section>
        <div className="flex justify-content-start align-items-end">
          <div className="left-side">
          I wanna be defined by the things that I love. Not the things I hate. Not the things that I'm afraid of, I'm afraid of.
          - Mrs. Taylor Swift
          </div>
          <div className="right-side">
          {children}
          </div>
        </div>
    </section>
  );
}