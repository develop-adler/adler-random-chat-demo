import localFont from "next/font/local";

export const pretendardFontSetting = localFont({
  src: [
    {
      path: '../public/assets/fonts/PretendardVariable.woff2',
      weight: '200',
    },
    {
      path: '../public/assets/fonts/PretendardVariable.woff2',
      weight: '400',
    },
    {
      path: '../public/assets/fonts/PretendardVariable.woff2',
      weight: '500',
    },
    {
      path: '../public/assets/fonts/PretendardVariable.woff2',
      weight: '700',
    },
    {
      path: '../public/assets/fonts/PretendardVariable.woff2',
      weight: '800',
    },
  ],
  variable: '--pretendard',
});
