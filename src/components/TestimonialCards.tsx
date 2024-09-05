"use client";
import { CardStack } from "@/components/ui/card-stack";
import { cn } from "@/lib/utils";

export function TestimonialCard() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center py-20">
      <div className="flex justify-center flex-1">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100">
          Trusted by the expert of Different Industries
        </h2>
      </div>
      <div className="min-h-min py-28 flex items-center justify-center w-full flex-1">
        <CardStack items={CARDS} />
      </div>
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className,
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Manu Arora",
    designation: "Senior Software Engineer",
    content: (
      <p>
        Their animated explainer video simplified our complex product in a way
        that was both visually stunning and easy for our customers to
        understand. <Highlight>Engagement has skyrocketed!</Highlight>
      </p>
    ),
  },
  {
    id: 1,
    name: "Elon Musk",
    designation: "Senior Shitposter",
    content: (
      <p>
        WebTo transformed our outdated website into a modern, user-friendly
        masterpiece. The intuitive design and seamless navigation have not only
        improved the customer experience but also boosted our online
        conversions. <Highlight>Highly recommended.</Highlight>
      </p>
    ),
  },
  {
    id: 2,
    name: "Tyler Durden",
    designation: "Manager Project Mayhem",
    content: (
      <p>
        WebTo&apos;s targeted digital marketing strategies brought a massive
        influx of qualified leads to our website. Their expertise has{" "}
        <Highlight>increased our online visibility and sales.</Highlight>
      </p>
    ),
  },
];
