import { useEffect, useRef } from 'react';

interface AdBannerProps {
  className?: string;
  slot?: string;
  format?: string;
  responsive?: boolean;
  style?: React.CSSProperties;
}

export default function AdBanner({ 
  className = "", 
  slot = "1234567890",
  format = "auto",
  responsive = true,
  style 
}: AdBannerProps) {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      // Only load ads in production environment
      if (import.meta.env.PROD && typeof window !== 'undefined' && (window as any).adsbygoogle) {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
      }
    } catch (error) {
      console.error('AdSense error:', error);
    }
  }, []);

  // Show placeholder in development
  if (!import.meta.env.PROD) {
    return (
      <div className={`ad-container ${className} bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center`} style={style}>
        <span className="text-gray-500 text-sm">Ad Placeholder (Dev Mode)</span>
      </div>
    );
  }

  return (
    <div className={`ad-container ${className}`} style={style}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block', ...style }}
        data-ad-client={import.meta.env.VITE_ADSENSE_CLIENT_ID || "ca-pub-4231271863101355"}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? "true" : "false"}
      />
    </div>
  );
}
