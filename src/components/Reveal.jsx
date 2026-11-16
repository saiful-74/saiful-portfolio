import { useEffect, useRef, useState } from "react";

/*
  Reveal
  Wraps content and fades it in softly the first time it scrolls into view.
  The animation itself is in index.css (.reveal and .reveal.is-visible).
  Users with "reduce motion" turned on see the content immediately.

  Usage: <Reveal delay={100}> ... </Reveal>
*/
export default function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Very old browsers: skip the animation and just show the content
    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    // The observer tells us when the element enters the screen
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // animate once only
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
