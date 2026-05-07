'use client'

import { useEffect } from 'react';

export function ScrollToTop() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;

      if (!hash) {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    }
  }, []);

  return null;
}