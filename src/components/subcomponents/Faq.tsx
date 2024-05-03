import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

interface FaqProps {
  faq: string;
  desc: string;
}

const Faq = ({ faq, desc }: FaqProps) => {
  const [showDesc, setShowDesc] = useState(false);

  function toggleDesc() {
    setShowDesc(!showDesc);
  }
  return (
    <button
      className="faq-tab p-4 border-2 border-[#2258A1] rounded-lg text-left flex flex-col flex-start"
      onClick={toggleDesc}
      onKeyDown={toggleDesc}
    >
      <span className="font-light">{faq}</span>
      {showDesc && <ReactMarkdown className="font-light mt-4">{desc}</ReactMarkdown>}
    </button>
  );
};

export default Faq;
