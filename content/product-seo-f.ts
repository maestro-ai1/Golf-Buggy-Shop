import type { ProductSEO } from '@/content/product-seo';

// Batch 5e: products that still had related keywords in the bank (N/I intent, long-tail, brand-page support) after Batches 5a to 5d.
// Facts are limited to the catalogue. Where a keyword is a "review" search we say plainly that we do not publish product reviews on the page.
const LI = '[lithium batteries](/parts-accessories/golf-buggy-parts/lithium-batteries/)';
const CH = '[chargers](/parts-accessories/golf-buggy-parts/chargers-conversion-kits/)';
const ACC = '[golf cart accessories](/parts-accessories/golf-cart-accessories/)';
const BAGS = '[bags, rain covers and eskies](/parts-accessories/golf-cart-accessories/bags-rain-covers-eskies/)';
const WHL = '[wheels, rims and tyres](/parts-accessories/golf-buggy-parts/wheels-rims-tyres/)';
const OFFP = '[off-road parts](/parts-accessories/off-road-parts/)';
const MGI = '[MGI range](/brands/mgi/)';
const SAFE = '[Safe Work Australia](https://www.safeworkaustralia.gov.au/safety-topic/hazards/quad-bikes)';
const PUSH = '[push and pull trolleys](/golf-buggies/push-pull-trolleys/)';
const BLOGLI = '[lithium vs lead-acid golf cart batteries](/blog/lithium-vs-lead-acid-golf-cart-batteries/)';

export const PART_F: Record<string, ProductSEO> = {
  'mgi-lithium-12v-299wh-battery': {
    primary: 'mgi zip navigator at battery', secondary: ['mgi zip navigator battery life', 'mgi golf buggy lithium battery'],
    lead: `This 12V, 299Wh MGI golf buggy lithium battery costs {price} including GST and may suit as a MGI ZIP Navigator AT battery; check the fit before you order.`,
    sec: [
      [`MGI ZIP Navigator AT battery and MGI golf buggy lithium battery`, `The listing says it fits MGI buggies. If you are after a MGI ZIP Navigator AT battery, message us your model so we can confirm the right voltage. See all ${LI} and the [MGI Zip 24V packs](/products/mgi-zip-24v-299wh-lithium-battery/).`],
      [`MGI ZIP Navigator battery life`, `MGI ZIP Navigator battery life depends on the course, the load and how the battery is cared for; the listing gives only the 299Wh energy figure, so ask us before you compare packs. Read ${BLOGLI} and see the ${MGI}.`],
    ],
    faq: [
      [`How much is this MGI lithium battery?`, `{price} including GST.`],
      [`Is it a MGI ZIP Navigator AT battery?`, `It fits MGI buggies per the listing. Message us your model to confirm.`],
      [`What is the MGI ZIP Navigator battery life?`, `The listing gives 12V and 299Wh. Real range varies, so ask us for guidance.`],
      [`Is it a MGI golf buggy lithium battery?`, `Yes, lithium.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'mgi-lithium-24v-13ah-battery': {
    primary: 'mgi zip navigator battery replacement', secondary: ['mgi zip navigator remote control battery replacement'],
    lead: `A MGI ZIP Navigator battery replacement option: the 24V, 13Ah lithium pack costs {price} including GST and is listed for MGI buggies.`,
    sec: [
      [`MGI ZIP Navigator remote control battery replacement`, `This pack is a 24V lithium upgrade for MGI buggies, so it suits a MGI ZIP Navigator remote control battery replacement where the voltage matches. Message us your model before you order. Compare the [Zip 250Wh](/products/mgi-zip-24v-250wh-lithium-battery/) pack and see ${LI}.`],
      [`Charging`, `Use the right ${CH}: the [MGI 24V smart charger](/products/mgi-lithium-24v-smart-charger-for-ai-and-zip-series/) is listed for Ai and Zip buggies.`],
    ],
    faq: [
      [`How much is the 24V 13Ah MGI battery?`, `{price} including GST.`],
      [`Is it a MGI ZIP Navigator battery replacement?`, `It is listed for MGI buggies; message us your model.`],
      [`What capacity is it?`, `24V and 13Ah.`],
      [`Which charger do I need?`, `See the MGI 24V smart charger.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'mgi-ai-gps-24v-380wh-lithium-battery': {
    primary: 'mgi ai navigator gps+ electric golf caddy', secondary: ['mgi ai navigator gps+ electric caddy golf cart'],
    lead: `This 24V, 380Wh lithium battery is the pack listed for the MGI Ai series, including the MGI Ai Navigator GPS+ electric golf caddy, at {price} including GST.`,
    sec: [
      [`Battery for the MGI Ai Navigator GPS+ electric caddy golf cart`, `The MGI Ai Navigator GPS+ electric caddy golf cart is our [remote golf buggy](/products/mgi-ai-navigator-gps-remote-control-golf-buggy/), which lists the same 24V, 380Wh battery. This is a spare or replacement pack, not a buggy. See ${LI}.`],
      [`Check the fit`, `The listing says MGI Ai series. Message us your model, and pair it with the [MGI smart charger](/products/mgi-lithium-24v-smart-charger-for-ai-and-zip-series/). See the ${MGI}.`],
    ],
    faq: [
      [`How much is the MGI Ai 380Wh battery?`, `{price} including GST.`],
      [`Does it fit the MGI Ai Navigator GPS+?`, `It is listed for the MGI Ai series; message us to confirm.`],
      [`What capacity is it?`, `24V and 380Wh.`],
      [`Is this the electric golf caddy itself?`, `No, it is the battery. The buggy is a separate listing.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'mgi-fireproof-charging-box': {
    primary: 'mgi zip navigator battery charging', secondary: [],
    lead: `MGI ZIP Navigator battery charging is safer in a box: the MGI fireproof charging box is {price} including GST.`,
    sec: [
      [`MGI fireproof charging box`, `A fireproof box gives you a safer place to leave a lithium battery on charge. Check the size against your pack, and see ${LI}, ${CH} and the ${MGI}.`],
      [`Check the fit`, `Message us your battery model so we can confirm it fits the box.`],
    ],
    faq: [
      [`How much is the MGI fireproof charging box?`, `{price} including GST.`],
      [`Is it for MGI ZIP Navigator battery charging?`, `It is an MGI charging accessory; check the size with us.`],
      [`Does it include a charger?`, `No. Chargers are separate: see ${CH}.`],
      [`Is lithium safe to charge indoors?`, `Follow the maker's charging instructions and ask us if unsure.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'golf-cart-mag-wheels-hexagon-14-inch-set-of-4-gloss-black': {
    primary: 'golf buggy mag wheels', secondary: [],
    lead: `Golf buggy mag wheels in the Hexagon design: a set of four 14 inch gloss black wheels at {price} including GST.`,
    sec: [
      [`Hexagon 14 inch mag wheels`, `This is the largest Hexagon set. The [12 inch set](/products/golf-cart-mag-wheels-hexagon-12-inch-set-of-4-gloss-black/) is $1,371. See ${WHL}.`],
      [`Check the fit`, `Check your cart's wheel size, offset and tyre fit, and message us your model. See ${ACC}.`],
    ],
    faq: [
      [`How much are the Hexagon 14 inch wheels?`, `{price} including GST for four.`],
      [`Are these golf buggy mag wheels?`, `They are listed for golf carts.`],
      [`What size are they?`, `14 inch.`],
      [`Will they fit my cart?`, `Message us your model.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'mgi-rear-wheels-for-buggies': {
    primary: 'mgi zip navigator rear wheel', secondary: ['mgi zip navigator rear wheel replacement', 'mgi zip navigator wheels', 'mgi buggy wheels'],
    lead: `A MGI ZIP Navigator rear wheel replacement option: MGI rear wheels for buggies cost {price} including GST.`,
    sec: [
      [`MGI ZIP Navigator rear wheel replacement and MGI buggy wheels`, `These MGI buggy wheels are listed as rear wheels for buggies. MGI ZIP Navigator wheels vary by version, so message us your model before you order. See ${WHL} and the ${MGI}.`],
      [`Before you order`, `Confirm the axle fit and size. Our guide to [electric buggies](/blog/what-is-the-best-electric-golf-buggy-australia/) explains the range.`],
    ],
    faq: [
      [`How much are the MGI rear wheels?`, `{price} including GST.`],
      [`Do they suit the MGI ZIP Navigator?`, `They are listed for buggies; message us your exact model.`],
      [`Are they a rear wheel replacement?`, `Yes, rear wheels.`],
      [`Where are other MGI parts?`, `See the ${MGI}.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'mgi-quad-cooler-storage-bag': {
    primary: 'mgi zip navigator bag', secondary: [],
    lead: `An MGI ZIP Navigator bag for drinks: the MGI quad cooler storage bag is {price} including GST.`,
    sec: [
      [`MGI quad cooler storage bag`, `An insulated bag keeps drinks and snacks cold on the course. For a larger one see the [XL cooler bag](/products/mgi-xl-cooler-bag-for-golf-buggies/) at $105.35, and browse ${BAGS}.`],
      [`Check the fit`, `Message us your MGI model before ordering. See the ${MGI}.`],
    ],
    faq: [
      [`How much is the MGI quad cooler bag?`, `{price} including GST.`],
      [`Is it an MGI ZIP Navigator bag?`, `It is an MGI accessory; message us your model.`],
      [`Is there a larger cooler bag?`, `Yes, the XL at $105.35.`],
      [`Is it insulated?`, `Yes per the listing.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'mgi-buggy-accessories-bag': {
    primary: 'mgi golf buggy accessories', secondary: ['mgi buggy accessories', 'best bag for mgi zip navigator'],
    lead: `MGI golf buggy accessories include this accessories bag, extra storage for your buggy and gear, at {price} including GST.`,
    sec: [
      [`MGI buggy accessories bag`, `The bag is one of several MGI buggy accessories we list: see the [travel bag](/products/mgi-buggy-travel-bag/), the [rain cover](/products/mgi-golf-bag-rain-cover/) and ${BAGS}.`],
      [`Best bag for MGI ZIP Navigator`, `The best bag for MGI ZIP Navigator owners depends on what you carry: this accessories bag is for small items, while the travel bag covers transport. Check the fit and message us your model.`],
    ],
    faq: [
      [`How much is the MGI accessories bag?`, `{price} including GST.`],
      [`What MGI buggy accessories do you sell?`, `Bags, a seat, holders, a cooler bag, a rain cover and more. See ${ACC}.`],
      [`Is it the best bag for the MGI ZIP Navigator?`, `It suits small items; the travel bag suits transport.`],
      [`Does it fit my buggy?`, `Message us your model.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'mgi-buggy-travel-bag': {
    primary: 'mgi zip navigator travel bag', secondary: ['best golf bag for mgi zip navigator'],
    lead: `The MGI buggy travel bag, the MGI ZIP Navigator travel bag option, is {price} including GST.`,
    sec: [
      [`MGI buggy travel bag`, `A travel bag protects the buggy when you move it. See the [accessories bag](/products/mgi-buggy-accessories-bag/) and ${BAGS}, plus the ${MGI}.`],
      [`Best golf bag for MGI ZIP Navigator`, `The best golf bag for MGI ZIP Navigator use is a cart or stand bag that sits securely on the buggy; this listing is a travel bag, not a golf bag. Check bag fit and ask us.`],
    ],
    faq: [
      [`How much is the MGI travel bag?`, `{price} including GST.`],
      [`Is it a MGI ZIP Navigator travel bag?`, `It is an MGI buggy travel bag; message us your model.`],
      [`Is it a golf bag?`, `No, it is a travel bag for the buggy.`],
      [`Where are other bags?`, `See ${BAGS}.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'mgi-golf-bag-rain-cover': {
    primary: 'mgi zip navigator rain cover', secondary: [],
    lead: `An MGI ZIP Navigator rain cover for your golf bag: the MGI golf bag rain cover is {price} including GST.`,
    sec: [
      [`MGI golf bag rain cover`, `The cover keeps your bag dry on wet rounds. See ${BAGS} and the ${MGI}.`],
      [`Check the fit`, `Check your bag size, and message us your model before ordering.`],
    ],
    faq: [
      [`How much is the MGI rain cover?`, `{price} including GST.`],
      [`Is it an MGI ZIP Navigator rain cover?`, `It is an MGI golf bag rain cover; check the fit with us.`],
      [`Does it cover the whole bag?`, `Check the listing, or message us.`],
      [`Where are other covers?`, `See ${BAGS}.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'buggy-bag-the-grocery-bag': {
    primary: 'buggy bag', secondary: [],
    lead: `This buggy bag, The Grocery Bag, adds extra storage and carry for your buggy and gear at {price} including GST.`,
    sec: [
      [`The Grocery Bag for your buggy`, `The listing describes extra storage and carry for your buggy and gear. See ${BAGS} and ${ACC}.`],
      [`Check the fit`, `Check your buggy model, and message us if unsure.`],
    ],
    faq: [
      [`How much is the Grocery Bag?`, `{price} including GST.`],
      [`Is it a golf bag accessory?`, `It is a buggy storage bag.`],
      [`Does it fit my buggy?`, `Message us your model.`],
      [`Where are more accessories?`, `See ${ACC}.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'sports-steering-wheel-black-apex-for-golf-carts': {
    primary: 'golf cart steering wheels and accessories', secondary: [],
    lead: `Golf cart steering wheels and accessories: the black Apex sports steering wheel is {price} including GST.`,
    sec: [
      [`Sports steering wheel Apex`, `The Apex is a sportier wheel. Compare the [Rally](/products/sports-steering-wheel-black-rally-for-golf-carts/), also $97, and see ${ACC}.`],
      [`Check the fit`, `Check your cart's column and adapter, and message us your model.`],
    ],
    faq: [
      [`How much is the Apex steering wheel?`, `{price} including GST.`],
      [`Is there another style?`, `Yes, the Rally at $97.`],
      [`Will it fit my cart?`, `Message us your model.`],
      [`Is it black?`, `Yes per the name.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'polaris-rzr-youth-half-windshield': {
    primary: 'polaris razor rzr', secondary: [],
    lead: `A half windshield for the Polaris RZR (sometimes spelled Polaris razor RZR): the youth model accessory is {price} including GST.`,
    sec: [
      [`Polaris RZR youth half windshield`, `The listing says it is a genuine accessory fitting Polaris RZR youth models. The [full windshield](/products/polaris-rzr-youth-full-windshield/) is $366.50. See ${OFFP}.`],
      [`Check the fit`, `Message us your youth model and year. See the [Polaris page](/brands/polaris/) and ${SAFE}.`],
    ],
    faq: [
      [`How much is the youth half windshield?`, `{price} including GST.`],
      [`What does it fit?`, `Polaris RZR youth models per the listing.`],
      [`Is there a full windshield?`, `Yes, at $366.50.`],
      [`Is it a genuine accessory?`, `The listing describes it as genuine.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'polaris-rzr-170-front-brushguard': {
    primary: 'rzr polaris buggy', secondary: [],
    lead: `A front brushguard for your RZR Polaris buggy: the Polaris RZR 170 front brushguard is {price} including GST.`,
    sec: [
      [`Polaris RZR 170 front brushguard`, `The listing says it fits the Polaris RZR 170. Read our [Polaris RZR 170 guide](/blog/polaris-rzr-170/) and see ${OFFP}.`],
      [`Check the fit`, `Message us your model. See the [Polaris page](/brands/polaris/) and ${SAFE}.`],
    ],
    faq: [
      [`How much is the RZR 170 brushguard?`, `{price} including GST.`],
      [`What does it fit?`, `The Polaris RZR 170 per the listing.`],
      [`Is it front only?`, `Yes, a front brushguard.`],
      [`Where are more parts?`, `See ${OFFP}.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'polaris-ranger-150-front-and-rear-brushguard-set': {
    primary: 'polaris ranger side by side', secondary: [],
    lead: `A brushguard set for a Polaris Ranger side by side: this front and rear set is listed for the Polaris Ranger 150 at {price} including GST.`,
    sec: [
      [`Polaris Ranger 150 front and rear brushguard set`, `This is an accessory for the youth Ranger 150, not for our full-size [Ranger XP 1000 HD](/products/polaris-ranger-xp-1000-hd-side-by-side/). See ${OFFP}.`],
      [`Check the fit`, `Message us your model. See the [Polaris page](/brands/polaris/) and ${SAFE}.`],
    ],
    faq: [
      [`How much is the Ranger 150 brushguard set?`, `{price} including GST.`],
      [`What does it fit?`, `The Polaris Ranger 150 per the listing.`],
      [`Does it fit a full-size Ranger?`, `No; it is for the Ranger 150.`],
      [`Is it front and rear?`, `Yes, a set.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'polaris-rzr-200-efi-rear-bumper': {
    primary: 'polaris rzr 200', secondary: [],
    lead: `A rear bumper for the Polaris RZR 200: the RZR 200 EFI rear bumper is {price} including GST.`,
    sec: [
      [`Polaris RZR 200 EFI rear bumper`, `The listing says it fits the Polaris RZR 200 EFI. See the [RZR 200 EFI youth buggy](/products/polaris-rzr-200-efi-youth-buggy/) and ${OFFP}.`],
      [`Check the fit`, `Message us your model. See the [Polaris page](/brands/polaris/).`],
    ],
    faq: [
      [`How much is the RZR 200 rear bumper?`, `{price} including GST.`],
      [`What does it fit?`, `The Polaris RZR 200 EFI per the listing.`],
      [`Do you sell the RZR 200 itself?`, `Yes, the youth buggy at $10,775.10.`],
      [`Is it a genuine accessory?`, `The listing says so.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'polaris-pro-armor-crawler-youth-tyre': {
    primary: 'polaris youth buggy', secondary: ['polaris youth buggy price'],
    lead: `A Pro Armor Crawler tyre for a Polaris youth buggy costs {price} including GST, listed for Polaris youth RZR and Ranger.`,
    sec: [
      [`Pro Armor Crawler youth tyre`, `The tyre is a replacement for Polaris youth RZR and Ranger models. See the [RZR 200 EFI youth buggy](/products/polaris-rzr-200-efi-youth-buggy/) and ${OFFP}.`],
      [`Polaris youth buggy price`, `The Polaris youth buggy price is $10,775.10 for the RZR 200 EFI; this tyre is $217.10. See the [Polaris page](/brands/polaris/) and ${SAFE}.`],
    ],
    faq: [
      [`How much is the Pro Armor Crawler tyre?`, `{price} including GST.`],
      [`What does it fit?`, `Polaris youth RZR and Ranger per the listing.`],
      [`What is the Polaris youth buggy price?`, `The RZR 200 EFI is $10,775.10.`],
      [`Is it a single tyre?`, `Check the listing, or message us.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'club-car-tempo-2-2-lithium-4-seat-golf-cart': {
    primary: 'club tempo', secondary: ['difference between club car tempo and onward'],
    lead: `The Club Car Tempo 2+2 Lithium is a 4 seat electric golf cart at {price} including GST, delivered Australia-wide. People searching Club Tempo usually mean the Club Car Tempo.`,
    sec: [
      [`Club Tempo 2+2 lithium four seater`, `The Tempo 2+2 is the electric Tempo we list. See the [Tempo petrol](/products/club-car-tempo-petrol-golf-cart/) at $14,690.20 and the [refurbished lithium Tempo](/products/club-car-tempo-refurbished-lithium-golf-cart/) at $12,740.`],
      [`Difference between Club Car Tempo and Onward`, `On our listings, the Tempo comes petrol or lithium from $12,740 to $21,070, while the [Onward petrol](/products/club-car-onward-petrol-golf-cart/) is $26,950. See the [Club Car page](/brands/club-car/) and all [electric golf carts](/golf-carts/electric/).`],
    ],
    faq: [
      [`How much is the Club Car Tempo 2+2 Lithium?`, `{price} including GST.`],
      [`How many seats does it have?`, `Four.`],
      [`Is it the Club Tempo?`, `Yes, the Club Car Tempo in 2+2 lithium form.`],
      [`What is the difference between the Tempo and the Onward?`, `We list the Onward as petrol at $26,950; compare listings.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'club-car-tempo-deluxe-petrol-golf-cart-metallic-green': {
    primary: 'club car petrol golf buggy', secondary: [],
    lead: `A Club Car petrol golf buggy in metallic green: the Tempo Deluxe is {price} including GST, delivered Australia-wide.`,
    sec: [
      [`Club Car Tempo Deluxe petrol golf cart`, `The Tempo Deluxe is the upgraded petrol Tempo. See the [standard Tempo](/products/club-car-tempo-petrol-golf-cart/) at $14,690.20 and all [petrol golf carts](/golf-carts/petrol/).`],
      [`Buying advice`, `See the [Club Car page](/brands/club-car/) and our guide to [golf cart costs](/blog/how-much-does-a-golf-cart-cost-in-australia/).`],
    ],
    faq: [
      [`How much is the Tempo Deluxe?`, `{price} including GST.`],
      [`Is it petrol?`, `Yes.`],
      [`Is it a Club Car petrol golf buggy?`, `It is a petrol golf cart.`],
      [`What colour is it?`, `Metallic green per the name.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'kawasaki-teryx4-h2-side-by-side': {
    primary: 'kawasaki h2 buggy', secondary: [],
    lead: `The Kawasaki Teryx4 H2 is a Kawasaki H2 buggy in side by side form at {price} including GST, delivered Australia-wide.`,
    sec: [
      [`Kawasaki Teryx4 H2 side by side`, `The Teryx4 H2 is the Kawasaki we list. See all [side by sides and UTVs](/off-road-buggies/side-by-sides-utvs/) and the [Kawasaki page](/brands/kawasaki/).`],
      [`Buying advice`, `Read our [UTV guide](/blog/what-is-a-utv-side-by-side-vs-atv-vs-dune-buggy/) and see ${SAFE}.`],
    ],
    faq: [
      [`How much is the Kawasaki Teryx4 H2?`, `{price} including GST.`],
      [`Is it a side by side?`, `Yes.`],
      [`Is it road legal?`, `Generally not. Check your state rules.`],
      [`Do you sell other Kawasaki models?`, `Not at present. Message us.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'polaris-ranger-500-side-by-side': {
    primary: 'polaris ranger 500', secondary: ['polaris ranger utv', 'polaris ranger utility vehicle'],
    lead: `The Polaris Ranger 500 is a 567cc side by side at {price} including GST, delivered Australia-wide.`,
    sec: [
      [`Polaris Ranger UTV and utility vehicle`, `This Polaris Ranger UTV is the smaller of our Ranger models. A Polaris Ranger utility vehicle is a working side by side; compare the [Ranger XP 1000 HD](/products/polaris-ranger-xp-1000-hd-side-by-side/) at $27,435.10. See all [side by sides and UTVs](/off-road-buggies/side-by-sides-utvs/).`],
      [`Buying advice`, `See the [Polaris page](/brands/polaris/), our [UTV guide](/blog/what-is-a-utv-side-by-side-vs-atv-vs-dune-buggy/) and ${SAFE}.`],
    ],
    faq: [
      [`How much is the Polaris Ranger 500?`, `{price} including GST.`],
      [`What engine does it have?`, `567cc per the listing.`],
      [`Is it a utility vehicle?`, `Yes, a Ranger side by side.`],
      [`Is it road legal?`, `Generally not. Check your state rules.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'polaris-ranger-crew-xp-1000-side-by-side': {
    primary: 'polaris ranger crew xp 1000 for sale', secondary: ['polaris ranger crew 1000 xp'],
    lead: `This Polaris Ranger Crew XP 1000 for sale is a 999cc crew-cab side by side at {price} including GST.`,
    sec: [
      [`Polaris Ranger Crew 1000 XP`, `The Polaris Ranger Crew 1000 XP adds rear seating to the working Ranger. Compare the [Ranger XP 1000 HD](/products/polaris-ranger-xp-1000-hd-side-by-side/) at $27,435.10 and see all [side by sides and UTVs](/off-road-buggies/side-by-sides-utvs/).`],
      [`Buying advice`, `See the [Polaris page](/brands/polaris/) and ${SAFE}. Freight is confirmed before you pay.`],
    ],
    faq: [
      [`How much is the Ranger Crew XP 1000?`, `{price} including GST.`],
      [`What engine does it have?`, `999cc per the listing.`],
      [`Is it the Ranger Crew 1000 XP?`, `Yes, the Crew XP 1000.`],
      [`Is it road legal?`, `Generally not. Check your state rules.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'stinger-sg-4-crossover-remote-control-golf-buggy-silver-edition-v3': {
    primary: 'stinger remote golf buggy', secondary: [],
    lead: `The Stinger SG-4 Crossover Silver Edition V3 is a Stinger remote golf buggy at {price} including GST. Classic and GT editions cost the same.`,
    sec: [
      [`Stinger SG-4 Crossover Silver Edition`, `Choose between the [Classic](/products/stinger-sg-4-crossover-remote-control-golf-buggy-classic-edition-v3/), this Silver and the [GT](/products/stinger-sg-4-crossover-remote-control-golf-buggy-gt-edition-v3/) editions, all {price}. See [remote control golf buggies](/golf-buggies/remote-control/).`],
      [`Buying advice`, `Read our [remote buggy buyers guide](/blog/remote-control-golf-buggy-buyers-guide/) and see the [Stinger page](/brands/stinger/).`],
    ],
    faq: [
      [`How much is the Silver Edition?`, `{price} including GST.`],
      [`Is it remote controlled?`, `Yes.`],
      [`What is the difference between editions?`, `Classic, Silver and GT are the same price; check each listing.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
      [`Where can I compare remote buggies?`, `See [remote control golf buggies](/golf-buggies/remote-control/).`],
    ],
  },
  'stinger-sg-4-crossover-remote-control-golf-buggy-gt-edition-v3': {
    primary: 'stinger sg 4 crossover review', secondary: [],
    lead: `Looking for a Stinger SG 4 Crossover review? The GT Edition V3 is {price} including GST; we do not publish product reviews on this page, so here is what the listing tells you.`,
    sec: [
      [`Stinger SG 4 Crossover review: what the listing says`, `The GT Edition is a remote control golf buggy and costs the same as the [Classic](/products/stinger-sg-4-crossover-remote-control-golf-buggy-classic-edition-v3/) and [Silver](/products/stinger-sg-4-crossover-remote-control-golf-buggy-silver-edition-v3/) editions. We do not claim performance figures beyond the listing; message us with questions.`],
      [`Comparing remote buggies`, `See [remote control golf buggies](/golf-buggies/remote-control/), our [buyers guide](/blog/remote-control-golf-buggy-buyers-guide/) and the [Stinger page](/brands/stinger/).`],
    ],
    faq: [
      [`How much is the GT Edition?`, `{price} including GST.`],
      [`Do you have a Stinger SG 4 Crossover review?`, `We do not publish product reviews on this page. See the listing and message us.`],
      [`Is it remote controlled?`, `Yes.`],
      [`How does it differ from Classic and Silver?`, `Same price; check each listing.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'stinger-sg-4-compact-golf-push-buggy-with-seat-kit': {
    primary: 'sg 4 compact golf push buggy', secondary: ['stinger sg 4 review'],
    lead: `The SG 4 compact golf push buggy with a seat kit costs {price} including GST, delivered Australia-wide.`,
    sec: [
      [`Stinger SG-4 Compact with seat kit`, `This is the [SG-4 Compact](/products/stinger-sg-4-compact-golf-push-buggy/) at $312.60 with a seat kit added. See ${PUSH}.`],
      [`Stinger SG 4 review: what the listing says`, `Looking for a Stinger SG 4 review? We do not publish product reviews on this page; the listing gives the price and that it is a push buggy with a seat kit. Message us with questions, and see the [Stinger page](/brands/stinger/).`],
    ],
    faq: [
      [`How much is the SG-4 Compact with seat kit?`, `{price} including GST.`],
      [`Is it a push buggy?`, `Yes.`],
      [`Is there a Stinger SG 4 review?`, `We do not publish product reviews on this page.`],
      [`Is it cheaper without the seat?`, `Yes, $312.60 without.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'apollo-rfz-commander-200-quad-bike': {
    primary: 'apollo commander 200', secondary: ['apollo commander'],
    lead: `The Apollo Commander 200 (RFZ Commander 200) is a quad bike at {price} including GST, delivered Australia-wide.`,
    sec: [
      [`Apollo RFZ Commander 200 quad bike`, `The Apollo Commander 200 is the largest RFZ Commander we list. Compare the [RFZ Commander 125](/products/apollo-rfz-commander-125-quad-bike/) at $2,449 and see [mini quads and ATVs](/off-road-buggies/mini-quads-atvs/).`],
      [`Buying advice`, `Read our [ATV buggy guide](/blog/atv-buggy/) and see ${SAFE}.`],
    ],
    faq: [
      [`How much is the Apollo RFZ Commander 200?`, `{price} including GST.`],
      [`Is it larger than the Commander 125?`, `Per the name, yes: 200 against 125.`],
      [`Is it road legal?`, `Generally not. Check your state rules.`],
      [`Do you sell other Apollo models?`, `Yes: the 70, 110, 125, 140 and Blazer.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'caddytek-caddylite-ez-fold-pro-3-wheel-golf-push-buggy-with-seat': {
    primary: 'caddytek 3-wheel buggy', secondary: [],
    lead: `A Caddytek 3-wheel buggy with a seat: the CaddyLite EZ-Fold Pro is {price} including GST, delivered Australia-wide.`,
    sec: [
      [`Caddytek CaddyLite EZ-Fold Pro 3 wheel with seat`, `This is the seated Caddytek. The [11.5 V3 Superlite Deluxe](/products/caddytek-11-5-v3-superlite-deluxe-3-wheel-golf-push-buggy/) is $165.60 without one. See [3 wheel golf buggies](/golf-buggies/3-wheel/).`],
      [`Buying advice`, `See ${PUSH} and the [Caddytek page](/brands/caddytek/).`],
    ],
    faq: [
      [`How much is the CaddyLite EZ-Fold Pro?`, `{price} including GST.`],
      [`Does it have a seat?`, `Yes per the name.`],
      [`Is it a 3 wheel buggy?`, `Yes.`],
      [`Is there a cheaper Caddytek?`, `Yes, the 11.5 V3 at $165.60.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'caddytek-11-5-v3-superlite-deluxe-3-wheel-golf-push-buggy': {
    primary: 'caddytek 11.5 v3 superlite deluxe 3 wheel golf buggy', secondary: [],
    lead: `The Caddytek 11.5 V3 Superlite Deluxe 3 Wheel Golf Buggy is a push buggy at {price} including GST, delivered Australia-wide.`,
    sec: [
      [`Caddytek 11.5 V3 Superlite Deluxe`, `This is the lower-priced Caddytek we list. The [CaddyLite EZ-Fold Pro with seat](/products/caddytek-caddylite-ez-fold-pro-3-wheel-golf-push-buggy-with-seat/) is $263.60. See [3 wheel golf buggies](/golf-buggies/3-wheel/).`],
      [`Buying advice`, `See ${PUSH}, the [Caddytek page](/brands/caddytek/) and our [push trolley guide](/blog/push-trolley/).`],
    ],
    faq: [
      [`How much is the Caddytek 11.5 V3?`, `{price} including GST.`],
      [`Is it a push buggy?`, `Yes.`],
      [`Does it have three wheels?`, `Yes.`],
      [`Is there a seated Caddytek?`, `Yes, the CaddyLite EZ-Fold Pro at $263.60.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'motocaddy-s1-dhc-electric-golf-buggy': {
    primary: 'motocaddy s1 electric golf buggy', secondary: [],
    lead: `The Motocaddy S1 DHC is a Motocaddy S1 electric golf buggy at {price} including GST, delivered Australia-wide.`,
    sec: [
      [`Motocaddy S1 DHC electric golf buggy`, `The S1 DHC is the lower-priced Motocaddy we list. For GPS and a remote see the [Motocaddy M7](/products/motocaddy-m7-gps-remote-electric-golf-buggy/) at $2,254, and compare all [electric golf buggies](/golf-buggies/motorised-electric/).`],
      [`Choosing a Motocaddy`, `The [Motocaddy range](/brands/motocaddy/) lists both models. Our guide to the [best electric golf buggy](/blog/what-is-the-best-electric-golf-buggy-australia/) explains what to compare.`],
    ],
    faq: [
      [`How much is the Motocaddy S1 DHC?`, `{price} including GST.`],
      [`What does DHC mean?`, `The model's descent feature name; check the listing.`],
      [`Is it remote controlled?`, `No. For remote see the M7.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
      [`Can I get Motocaddy accessories?`, `See [accessories](/parts-accessories/golf-cart-accessories/).`],
    ],
  },
};
