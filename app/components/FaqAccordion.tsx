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
    question: "What is KYC?",
    answer: "Know Your Customer (KYC) is a process whereby the project owner has shared their identification documents with PinkSale. KYC is used as a deterrent method to reduce illicit and deceptive behaviour."
  },
  {
    question: "What is an Audit?",
    answer: "The Audit badge details that the smart contract has been tested and analysed by a 3rd party service."
  },
  {
    question: "What is SAFU?",
    answer: "The SAFU badge demonstrates that the contract has been created by a PinkSale verified partner. SAFU benefits can be found via: https://docs.pinksale.finance/important/safu-contract"
  },
  {
    question: "What is Doxx?",
    answer: "Projects certified with the Doxx badge highlights that the projects owner has completed a video AMA within their community, and that their submission to PinkSale matches their KYC information."
  },
  {
    question: "What is DYOR?",
    answer: "DYOR aims to reduce the number of uninformed investors in cryptocurrency. It encourages them to research and understand a cryptocurrency before investing so that they can answer precisely why they are buying that currency and supporting that project. The term is also often used as a disclaimer when cryptocurrency traders and enthusiasts make public posts or share their market analyses on social media platforms."
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
