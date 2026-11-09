import { useState } from "react";

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="accordion">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div className={`accordion-item ${isOpen ? "is-open" : ""}`} key={item.question}>
            <button
              className="accordion-trigger"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              {item.question}
              <span className="accordion-icon" aria-hidden="true">
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen && <div className="accordion-panel">{item.answer}</div>}
          </div>
        );
      })}
    </div>
  );
}
