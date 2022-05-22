import { useEffect, useRef } from 'react';

/**
 * @type { (Function)=> import('react').MutableRefObject<HTMLInputElement>}
 */
export const useOutSideClickHandler = (handler) => {
  const domRef = useRef(null);

  useEffect(() => {
    const _handler = (e) => {
      if (domRef.current && !domRef.current.contains(e.target)) handler();
    };

    document.addEventListener('click', _handler);
    return () => document.removeEventListener('click', _handler);
  }, [handler]);

  return domRef;
};
