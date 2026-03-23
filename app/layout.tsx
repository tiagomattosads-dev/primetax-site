import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'Primetax',
  description: 'Assessoria especializada em estratégia tributária para municípios, focada em IPM e aumento de arrecadação sustentável.',
  icons: {
    icon: 'https://res.cloudinary.com/dyzcc4ex0/image/upload/v1774297905/%C3%ADcone_c0ez4i.webp',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
