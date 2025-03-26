import React, { useState } from 'react';
import { FaPlus, FaMinus } from "react-icons/fa6";
import { Collapse } from 'react-collapse';

function FaqCard({ faq }) {
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <div className="border-b border-gray-300 py-4">
      <div className="flex justify-between items-center cursor-pointer" onClick={() => toggle(faq.id)}>
        <h3 className="text-xl font-semibold text-gray-800">{faq.question}</h3>
        {open === faq.id ? <FaMinus className="text-green-700" /> : <FaPlus className="text-green-700" />}
      </div>
      <Collapse isOpened={open === faq.id}>
        <p className="text-gray-600 mt-2 text-lg">{faq.answer}</p>
      </Collapse>
    </div>
  );
}

export default FaqCard;
