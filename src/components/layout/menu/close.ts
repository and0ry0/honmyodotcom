import { useEffect } from 'react';

export const useOnClickOutside = (ref, handler) => {
  // ref以外クリックで閉じる
  // https://codepen.io/maximakymenko/pen/aboWJpX
  useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  },
  [ref, handler],
  );
};