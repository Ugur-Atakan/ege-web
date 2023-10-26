import FaqItem from './FaqItem';

const FaqsList = ({ faqs }) => {
  return (
    <dl className="mt-12 space-y-6 divide-y divide-white divide-opacity-[0.2]">
      {faqs.map((faq) => (
        <FaqItem key={faq.id} faq={faq} />
      ))}
    </dl>
  );
}

export default FaqsList