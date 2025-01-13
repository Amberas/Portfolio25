"use client";

import { useEffect, useState } from "react";
import styles from "./../css/partnerList.css";

export default function PartnerList() {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const res = await fetch("http://localhost:1337/api/partners?populate=*");
        const data = await res.json();
        setPartners(data.data);
      } catch (error) {
        console.error("Failed to fetch partners:", error);
      }
    };

    fetchPartners();
  }, []); // Fetch partners only once on component mount

  useEffect(() => {
    const scroller = document.querySelector(".scroller");

    if (scroller && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      scroller.setAttribute("data-animated", true);
    }
    
  }, []); // Run animation logic only once

  useEffect(() => {
    if (partners.length > 0) {
      const scroller = document.querySelector(".scroller");
      const scrollerInner = scroller.querySelector(".scroller__inner");
      const scrollerContent = Array.from(scrollerInner.children);

      scrollerContent.forEach(item => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute('aria-hidden', true);
        scrollerInner.appendChild(duplicatedItem);
      })
    }
  }, [partners]);


  return (
    <div className="scroller">
      <ul className="tag-list scroller__inner">
        {partners.map((partner) => (
          <li key={partner.id}> {/* Ensure a unique key for each list item */}
            <img
              className="slide-image"
              src={partner.attributes.logo.data[0].attributes.formats.small.url}
              alt={partner.attributes.name}
              style={{ width: "100px", height: "auto" }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}