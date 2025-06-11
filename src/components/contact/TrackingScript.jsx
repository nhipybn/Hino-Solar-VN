import { useEffect } from 'react';

const BowNowForm = () => {
  useEffect(() => {
    const scriptId = '_bownow_cs_sid_fcffccc68aa102d77cc0';

    // Ngăn chặn thêm lại nếu đã có script
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.charset = 'utf-8';
      script.src = 'https://contents.bownow.jp/forms/sid_fcffccc68aa102d77cc0/trace.js';
      document.head.appendChild(script);
    }
  }, []);

  return <div id="_bownow_form_container" className="min-h-[500px]" />;
};

export default BowNowForm;
