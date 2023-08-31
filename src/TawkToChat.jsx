import { useEffect } from 'react';

function TawkToChat() {
  useEffect(() => {
    const s1 = document.createElement('script');
    const s0 = document.getElementsByTagName('script')[0];

    s1.async = true;
    s1.src = 'https://embed.tawk.to/64f0461da91e863a5c10ced9/1h9593ppa';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');

    s0.parentNode.insertBefore(s1, s0);

    return () => {
      s1.remove();
    };
  }, []);

  return null;
}

export default TawkToChat;
