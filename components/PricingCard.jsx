import { CheckCircle2, XCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

function PricingCard({ data }) {
  //   console.log(data);
  const { isRecommended } = data;
  return (
    <div className={`pricing-card ${isRecommended ? "recommended" : ""}`}>
      <div className="card-header">
        <div className="plan">
          <h2> {data.name}</h2>
          <small>{data.tagline}</small>
        </div>
        <div className="pricing">
          <h2>${data.price}</h2>
          <small>per month</small>
        </div>
      </div>
      <ul>
        {data.supportedFeatures.map((item, i) => {
          return (
            <li key={i} className="list-item">
              <CheckCircle2 />
              <span>{item}</span>
            </li>
          );
        })}
        {data.nonSupportedFeatures.map((item, i) => {
          return (
            <li key={i} className="list-item colo-gray">
              <XCircle />
              <span>{item}</span>
            </li>
          );
        })}
      </ul>
      <div className="cta">
        <Link className="get-started" href="#">
          Get Started
        </Link>
      </div>
    </div>
  );
}

export default PricingCard;
