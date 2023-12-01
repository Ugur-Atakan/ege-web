import FaqItem from './FaqItem';

const FaqsList = ({ t, faqs }) => {
  return (
    <dl className="space-y-6 divide-y divide-white divide-opacity-[0.2]">
      {faqs.map((faq) => (
        <FaqItem key={faq.id} t={t} faq={faq} />
      ))}
    </dl>
  );
}

export default FaqsList