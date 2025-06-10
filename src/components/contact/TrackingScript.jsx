import { useEffect } from 'react';

const TrackingScript = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.id = '_bownow_ts';
    script.charset = 'utf-8';
    script.src = 'https://contents.bownow.jp/js/UTC_f230922e98225cbf55d1/trace.js';
    document.head.appendChild(script);
  }, []);

  return null; // không cần render gì ra giao diện
};

export default TrackingScript;
