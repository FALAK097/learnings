import { faqs } from './faqs';
import FaqItem from './faq-item.jsx';

const Faq = () => {
  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      {faqs.map((faq, index) => {
        return <FaqItem key={index} index={index} faq={faq} />;
      })}
    </div>
  );
};

export default Faq;
