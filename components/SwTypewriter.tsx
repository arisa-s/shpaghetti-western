"use client";

import { useState, useEffect } from "react";

interface SwTypewriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenWords?: number;
  delayAfterLastWord?: number;
  className?: string;
}

export default function SwTypewriter({
  words,
  typingSpeed = 150,
  deletingSpeed = 100,
  delayBetweenWords = 2000,
  delayAfterLastWord = 4000,
  className = "",
}: SwTypewriterProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const isLastWord = currentWordIndex === words.length - 1;

    if (isPaused) {
      // Use longer delay for the last word
      const delay = isLastWord ? delayAfterLastWord : delayBetweenWords;
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, delay);
      return () => clearTimeout(pauseTimeout);
    }

    if (!isDeleting && currentText === currentWord) {
      // Finished typing, pause before deleting
      setIsPaused(true);
      return;
    }

    if (isDeleting && currentText === "") {
      // Finished deleting, move to next word
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        if (isDeleting) {
          // Delete one character
          setCurrentText(currentText.slice(0, -1));
        } else {
          // Add one character
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [
    currentText,
    isDeleting,
    isPaused,
    currentWordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    delayBetweenWords,
    delayAfterLastWord,
  ]);

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
}

