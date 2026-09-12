import { useRef, useState } from 'react';

/**
 * React Bits-inspired Spotlight Card: the light follows the pointer and is
 * also available when the card receives keyboard focus.
 */
export const SpotlightCard = ({
  children,
  className = '',
  spotlightColor = 'rgba(82, 39, 255, 0.28)',
}) => {
  const cardRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const updatePosition = (clientX, clientY) => {
    const rect = cardRef.current?.getBoundingClientRect();

    if (!rect) return;

    setPosition({ x: clientX - rect.left, y: clientY - rect.top });
  };

  return (
    <article
      ref={cardRef}
      className={`relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] ${className}`}
      onMouseEnter={() => setOpacity(1)}
      onMouseMove={(event) => updatePosition(event.clientX, event.clientY)}
      onMouseLeave={() => setOpacity(0)}
      onFocus={() => {
        const rect = cardRef.current?.getBoundingClientRect();
        if (rect) setPosition({ x: rect.width / 2, y: rect.height / 2 });
        setOpacity(1);
      }}
      onBlur={() => setOpacity(0)}
      style={{
        backgroundImage: `radial-gradient(420px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 72%)`,
        transition: 'background-image 120ms ease-out',
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-linear-to-br from-white/[0.06] to-transparent transition-opacity duration-300"
        style={{ opacity }}
      />
      <div className="relative">{children}</div>
    </article>
  );
};
