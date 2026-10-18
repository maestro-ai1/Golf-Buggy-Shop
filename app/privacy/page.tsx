import InfoPage from '@/components/InfoPage';
import { CONTACT, SITE } from '@/config/site';
import { meta } from '@/lib/seo';

export const metadata = meta({ title: 'Privacy Policy', description: 'How Buggies For Sale collects, uses and protects your personal information when you browse, enquire or order, in line with the Australian Privacy Principles.', path: '/privacy/' });

export default function Privacy() {
  return (
    <InfoPage crumb={{ name: 'Privacy policy', url: '/privacy/' }} title="Privacy policy" lead={`${SITE.legalName} (ABN ${CONTACT.abn}) respects your privacy.`}>
      <h2>What we collect</h2>
      <p>When you place an order or send an enquiry we collect the details you give us: name, email, phone number, delivery address, order contents and any message. We also record basic technical data such as pages visited, to keep the site working.</p>
      <h2>How we use it</h2>
      <ul><li>To process orders, arrange delivery and provide support</li><li>To reply to enquiries and send order and payment emails</li><li>To meet our legal and tax obligations</li></ul>
      <h2>Who we share it with</h2>
      <p>We share only what is needed with freight carriers, payment providers and our email and hosting providers. We do not sell your personal information.</p>
      <h2>Your choices</h2>
      <p>You can ask to access or correct your information, or ask us to delete it where the law allows, by emailing {CONTACT.email}. Under the Australian Privacy Principles you may also complain to the Office of the Australian Information Commissioner.</p>
      <h2>Security</h2>
      <p>We take reasonable steps to protect your information. We never take card details on this site: payment details are sent after your order is confirmed.</p>
    </InfoPage>
  );
}
