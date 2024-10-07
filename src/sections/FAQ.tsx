import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/Accordion";


interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What is AI Lawyer?",
    answer:
      "AI Lawyer is a cutting-edge platform that transforms law market using artificial intelligence. It automates research, simplifies complex terms, and handles documents efficiently. Ideal for individuals seeking affordable consultation and for professionals and students aiming to streamline their work. It offers personalized customization, multi-platform access, and prioritizes privacy, making it a valuable tool in LegalTech market.",
    value: "item-1",
  },
  {
    question: "How to start using AI Lawyer?",
    answer:
      "To begin using it, simply sign up with your Google/Apple account or any other email. We provide a free trial for all new users, allowing you to experience the full range of features and benefits of the platform without any initial investment.",
    value: "item-2",
  },
  {
    question: "Can I receive a refund if I'm not satisfied?",
    answer:
      "Yes. If you're not happy with us, you can get your money back easily, no questions asked. To receive your money, please contact us at alia@abogado.ai",
    value: "item-3",
  },
  {
    question: "Will AI replace lawyers?",
    answer:
      "We are not here to replace human lawyers but to assist them. AI can handle some of the more time-consuming parts of work, but it doesn't have the human judgment and empathy that real lawyers provide. We support professionals by taking care of the repetitive tasks, allowing them to focus more on the critical aspects of their work that require human insight and compassion.",
    value: "item-4",
  },
  {
    question: "How to get 'Students & teachers' discount?",
    answer:
      "If you're a student or teacher, you can get half off the price. Open our app (Web, iOS or Android), click on 'Activate Pro' and choose the 'Students and Teachers' option above. While we don't check your student or teacher status right away, we may ask for some verification later to confirm your educational affiliation.",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="text-center py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-cyan-700 bg-clip-text">
          Questions
        </span>
      </h2>
      <div className="mx-auto w-[70%]"> 
        <Accordion type="single" collapsible className="w-full AccordionRoot">
          {FAQList.map(({ question, answer, value }: FAQProps) => (
            <AccordionItem key={value} value={value}>
              <AccordionTrigger className="text-left">
                {question}
              </AccordionTrigger>

              <AccordionContent>{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          rel="noreferrer noopener"
          href="#"
          className="text-cyan-700 transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};
