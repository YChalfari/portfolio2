import { useState, useEffect, useRef } from "react";
import "./ScrollIndicator.css";

const ScrollIndicator = ({ currentSectionId, isLastSection = false }) => {
  const [isVisible, setIsVisible] = useState(true);
  const indicatorRef = useRef(null);
  const sectionRef = useRef(null);

  // Section order in the page
  const sectionOrder = [
    "hero",
    "about",
    "experience",
    "projects",
    "references",
    "contact",
  ];

  useEffect(() => {
    if (isLastSection) {
      setIsVisible(false);
      return;
    }

    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const sectionRect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate section bottom position
      const sectionBottom = section.offsetTop + section.offsetHeight;
      const currentScrollBottom = window.scrollY + windowHeight;

      // Show indicator when:
      // - Section bottom is visible or near the viewport bottom (within 300px)
      // - Not scrolled past the section
      const visibilityThreshold = 300;
      const isBottomNearViewport =
        sectionRect.bottom <= windowHeight + visibilityThreshold;
      const isNotPastSection = currentScrollBottom < sectionBottom + 100;

      setIsVisible(isBottomNearViewport && isNotPastSection);
    };

    // Find the section element
    sectionRef.current = document.getElementById(currentSectionId);

    if (sectionRef.current) {
      window.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll(); // Check initial state
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentSectionId, isLastSection]);

  const scrollToNext = () => {
    const currentIndex = sectionOrder.indexOf(currentSectionId);
    if (currentIndex === -1 || currentIndex === sectionOrder.length - 1) return;

    const nextSectionId = sectionOrder[currentIndex + 1];
    const nextSection = document.getElementById(nextSectionId);

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (isLastSection || !isVisible) {
    return null;
  }

  return (
    <div
      ref={indicatorRef}
      className="scroll-indicator"
      onClick={scrollToNext}
      role="button"
      tabIndex={0}
      aria-label="Scroll to next section"
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          scrollToNext();
        }
      }}
    >
      <div className="scroll-arrow"></div>
    </div>
  );
};

export default ScrollIndicator;
