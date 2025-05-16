/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 브랜드 색상
        'brand-primary': '#E6007E',
        'brand-secondary': '#E30084',

        // 텍스트 색상
        'text-primary': '#181A1B',
        'text-secondary': '#66707A',
        'text-tooltip': '#3B4044',  // 툴팁 텍스트 색상 추가

        // 배경 색상
        'background-primary': '#FFFFFF',
        'background-secondary': '#F3F5F6',  // 툴팁 배경 색상 추가

        // 경계선 색상
        'border-primary': '#DCE0E5',
        'border-secondary': '#A8B3BD',  // 추가
        'border-divider': '#E5E7EF',
        'border-divider-light': '#E7EBEE',

        // 아이콘 색상
        'icon-arrow': '#7F8A94',  // 화살표 아이콘 색상 추가
        'icon-inactive': '#A8B3BD',

        // 서비스 배너 컬러
        'banner-primary': '#938CEE',
        'banner-secondary': '#817BDA',

        // 딤 배경
        'dim-background': 'rgba(24, 26, 27, 0.42)',

        // 카드 배경
        'card-dark': '#3B4044',
      },

      boxShadow: {
        'card': '3px 6px 28px rgba(0, 0, 0, 0.08)',
        'fab': '0px 10px 16px rgba(0, 0, 0, 0.12)',
      },

      fontSize: {
        'xs': ['12px', { lineHeight: '18px' }],
        'sm': ['14px', { lineHeight: '21px' }],
        'base': ['16px', { lineHeight: '22.4px' }],
        'lg': ['18px', { lineHeight: '25.2px' }],
        'xl': ['20px', { lineHeight: '28px' }],
      },

      fontWeight: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },

      borderRadius: {
        'none': '0',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        'full': '9999px',
      },
    },
  },
  plugins: [],
}