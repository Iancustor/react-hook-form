"use client";
import PricingCard from "@/components/PricingCard";
import { Check, CheckCircle2, XCircle } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa6";
function Pricing() {
  const [pricingPlan, setPricingPlan] = useState("yearly");

  const packages = [
    {
      name: "Basic",
      tagline: "Most Popular",
      price: pricingPlan === "monthly" ? 4.9 : 3.9,
      supportedFeatures: [
        "Lorem ipsum dolor sit amet consectetur.",
        "Lorem ipsum dolor sit amet consectetur.",
        "Lorem ipsum dolor sit amet consectetur.",
      ],
      nonSupportedFeatures: [
        "Lorem ipsum dolor sit amet consectetur.",
        "Lorem ipsum dolor sit amet consectetur.",
        "Lorem ipsum dolor sit amet consectetur.",
      ],
      isRecommended: false,
    },
    {
      name: "Profesional",
      tagline: "Recommended",
      price: pricingPlan === "monthly" ? 9.9 : 5.9,
      supportedFeatures: [
        "Lorem ipsum dolor sit amet consectetur.",
        "Lorem ipsum dolor sit amet consectetur.",
        "Lorem ipsum dolor sit amet consectetur.",
      ],
      nonSupportedFeatures: [
        "Lorem ipsum dolor sit amet consectetur.",
        "Lorem ipsum dolor sit amet consectetur.",
        "Lorem ipsum dolor sit amet consectetur.",
      ],
      isRecommended: true,
    },
    {
      name: "Ultimate",
      tagline: "Best Value",
      price: pricingPlan === "monthly" ? 14.9 : 10.9,
      supportedFeatures: [
        "Lorem ipsum dolor sit amet consectetur.",
        "Lorem ipsum dolor sit amet consectetur.",
        "Lorem ipsum dolor sit amet consectetur.",
      ],
      nonSupportedFeatures: [
        "Lorem ipsum dolor sit amet consectetur.",
        "Lorem ipsum dolor sit amet consectetur.",
        "Lorem ipsum dolor sit amet consectetur.",
      ],
      isRecommended: false,
    },
  ];
  // console.log(packages);
  function changePricingPlan(plan) {
    setPricingPlan(plan);
    // console.log(plan);
  }

  // console.log(pricingPlan);
  return (
    <div>
      <h2>Pricing Page</h2>
      <div className="buttons">
        <button
          onClick={() => changePricingPlan("monthly")}
          className={pricingPlan === "monthly" ? "selected" : ""}
        >
          Monthly
        </button>
        <button
          onClick={() => changePricingPlan("yearly")}
          className={pricingPlan === "yearly" ? "selected" : ""}
        >
          Yearly
        </button>
      </div>

      <div className="pricing-cards">
        {packages.map((item, i) => {
          return <PricingCard data={item} key={i} />;
        })}
      </div>
      <p>
        The Selected Plan is <span>{pricingPlan}</span>
      </p>
    </div>
  );
}

export default Pricing;
