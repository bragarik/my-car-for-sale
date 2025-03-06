declare module 'swiper/css';
declare module 'swiper/css/navigation';
declare module 'swiper/css/pagination';
declare module 'swiper/css/scrollbar';

interface TawkAPI {
    maximize: () => void;
    minimize: () => void;
    toggle: () => void;
    hideWidget: () => void;
    showWidget: () => void;
    onLoaded?: () => void;
    [key: string]: any; // Permite outras funções se necessário
  }
  
  interface Window {
    Tawk_API?: TawkAPI;
  }