import React from 'react';

const Accordion = ({ blog }) => {
  return (
    <div>
      <details className="collapse bg-base-100 border border-base-300" name="my-accordion-det-1" open>
  <summary className="collapse-title font-semibold">{blog.question}</summary>
  <div className="collapse-content text-sm">{blog.answer}</div>
</details>

    </div>
  );
};

export default Accordion;