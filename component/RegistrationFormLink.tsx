"use client";

import { useEffect, useState } from "react";

const registrationOpensAt = new Date("2026-09-14T12:00:00+08:00").getTime();

type RegistrationFormLinkProps = {
  href: string;
  className: string;
};

export default function RegistrationFormLink({
  href,
  className,
}: Readonly<RegistrationFormLinkProps>) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const updateOpenState = () => {
      setIsOpen(Date.now() >= registrationOpensAt);
    };

    updateOpenState();
    const timer = window.setInterval(updateOpenState, 30_000);

    return () => window.clearInterval(timer);
  }, []);

  if (!isOpen) {
    return (
      <span
        aria-disabled="true"
        className={`${className} cursor-not-allowed border border-white/20 bg-white/10 text-white/70 hover:bg-white/10`}
      >
        尚未開放報名
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      前往報名表單
    </a>
  );
}
