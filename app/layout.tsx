import './global.css';
import clsx from 'clsx';
import { kaisei, grotesk, bricolage, bricolageSemi } from '@/lib/fonts';
import globalMetadata from './metadata';
export const metadata = globalMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="de"
      className={clsx(
        kaisei.variable,
        grotesk.variable,
        bricolage.variable,
        bricolageSemi.variable
      )}
    >
      {children}
    </html>
  );
}
