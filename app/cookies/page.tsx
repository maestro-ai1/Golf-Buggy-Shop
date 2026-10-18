import InfoPage from '@/components/InfoPage';
import { meta } from '@/lib/seo';

export const metadata = meta({ title: 'Cookies Policy', description: 'How Buggies For Sale uses cookies and local storage to keep your cart and improve the site, and how you can control them in your browser.', path: '/cookies/' });

export default function Cookies() {
  return (
    <InfoPage crumb={{ name: 'Cookies', url: '/cookies/' }} title="Cookies policy" lead="We keep tracking to a minimum.">
      <p>This site stores your shopping cart in your browser&apos;s local storage so it is still there when you return. It does not need cookies to browse or buy. We may use privacy-friendly analytics to understand which pages are useful.</p>
      <h2>Controlling storage</h2>
      <p>You can clear or block local storage and cookies in your browser settings. Clearing storage will empty your cart.</p>
    </InfoPage>
  );
}
