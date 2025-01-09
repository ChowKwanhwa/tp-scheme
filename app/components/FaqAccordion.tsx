import React from 'react';
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Toad?",
    answer: "Toad is a community-driven meme token inspired by PEPE, featuring 0% tax, 100% LP burned at launch, and 0% team tokens. The project follows the tradition of anonymous development, similar to Bitcoin's creator Satoshi Nakamoto."
  },
  {
    question: "How can I participate in the presale?",
    answer: "You can participate in the presale by connecting your wallet and sending BNB to the presale contract. The minimum contribution is 0.1 BNB and the maximum is 2 BNB per wallet."
  },
  {
    question: "When does the presale start and end?",
    answer: "The presale starts on February 22, 2024, at 13:00 UTC and ends on February 22, 2024, at 14:00 UTC."
  },
  {
    question: "What happens to unsold tokens?",
    answer: "All unsold tokens will be burned (🔥), ensuring that the token supply remains limited and potentially increasing value for holders."
  },
  {
    question: "Where will Toad be listed?",
    answer: "Toad will be listed on Pancakeswap immediately after the presale ends, with 51% of the tokens locked for liquidity."
  },
  {
    question: "Is the liquidity locked?",
    answer: "Yes, 51% of the tokens will be locked for liquidity until February 21, 2025 (approximately 1 month from now)."
  },
  {
    question: "What is the presale and listing rate?",
    answer: "Both the presale and listing rate are 1 BNB = 4,800,000 BabyTrump tokens, ensuring there is no price difference between presale and listing."
  }
];

const FaqAccordion = () => {
  return (
    <Card className="w-full">
      <CardContent className="pt-6">
        <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default FaqAccordion;
