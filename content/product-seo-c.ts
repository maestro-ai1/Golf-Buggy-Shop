import type { ProductSEO } from '@/content/product-seo';

// Batch 5b (golf cart family). Only 14 of 45 carts have a related keyword left in the bank; the rest keep their existing copy.
// Facts are limited to the catalogue (name, price, listed specifications). {price} is replaced by the live catalogue price.
export const PART_C: Record<string, ProductSEO> = {
  'ecar-lithium-ikon-hd-4s-4-seat-golf-cart': {
    primary: '4 seat golf cart',
    secondary: [],
    lead: `A 4 seat golf cart from ECAR: the Lithium IKON HD 4S seats four, runs on a 48V, 105Ah lithium battery and costs {price} including GST, delivered Australia-wide.`,
    sec: [
      [`ECAR IKON HD 4S: a 4 seat golf cart in the lithium range`, `The IKON HD 4S is the lowest-priced four-seater in our ECAR IKON HD line. The [IKON HD 4UL](/products/ecar-lithium-ikon-hd-4ul-4-seat-golf-cart/) is $14,690.20, and the [A4](/products/ecar-lithium-a4-4-seat-golf-cart/) is $13,710.20 with a 150Ah battery. Compare them with all our [electric golf carts](/golf-carts/electric/).`],
      [`Choosing a four seater`, `Think about passengers, terrain and where the cart will be stored and charged. Our guide to [what a golf cart costs in Australia](/blog/how-much-does-a-golf-cart-cost-in-australia/) explains the price range, and the [ECAR page](/brands/ecar/) lists every ECAR cart, charger and accessory.`],
    ],
    faq: [
      [`How much is the ECAR IKON HD 4S 4 seat golf cart?`, `{price} including GST. Freight is confirmed before you pay.`],
      [`What battery does it have?`, `A 48V, 105Ah lithium battery per the listing.`],
      [`Do you sell other 4 seat golf carts?`, `Yes: see [electric golf carts](/golf-carts/electric/) and [petrol golf carts](/golf-carts/petrol/).`],
      [`Is a 4 seat golf cart road legal?`, `Rules vary by state. Read our guide to [driving a golf cart on the road](/blog/can-you-drive-a-golf-cart-on-the-road-in-australia/).`],
      [`Do you deliver Australia-wide?`, `Yes. See our [delivery page](/delivery/).`],
    ],
  },
  'ecar-compass-2s-2-seat-golf-cart': {
    primary: 'ecar compass golf cart',
    secondary: [],
    lead: `The ECAR Compass golf cart in its 2 seat form costs {price} including GST and runs on a 48V, 150Ah lithium battery.`,
    sec: [
      [`ECAR Compass 2S golf cart`, `The Compass 2S is the two-seat model of the ECAR Compass line. For four seats, see the [Compass 4S](/products/ecar-compass-4s-4-seat-golf-cart/) at $17,630.20, and compare all [electric golf carts](/golf-carts/electric/).`],
      [`ECAR Compass buyers guide`, `Check seats, battery size and the way you will use the cart. The [ECAR page](/brands/ecar/) lists the rest of the range, and our guide to [golf cart costs](/blog/how-much-does-a-golf-cart-cost-in-australia/) explains the market.`],
    ],
    faq: [
      [`How much is the ECAR Compass golf cart?`, `The 2S is {price} including GST; the 4S is $17,630.20.`],
      [`How many seats does the Compass 2S have?`, `Two.`],
      [`What battery does it have?`, `A 48V, 150Ah lithium battery per the listing.`],
      [`Do you deliver Australia-wide?`, `Yes. Freight is confirmed before you pay.`],
      [`Where can I compare other carts?`, `See [golf carts](/golf-carts/).`],
    ],
  },
  'ecar-lithium-magnum-6s-6-seat-golf-cart': {
    primary: '6 seat golf buggy',
    secondary: [],
    lead: `A 6 seat golf buggy for groups: the ECAR Lithium Magnum 6S seats six on a 48V, 150Ah lithium battery for {price} including GST.`,
    sec: [
      [`ECAR Magnum 6S six-seat lithium cart`, `The Magnum 6S is one of our larger ECAR carts. The [Magnum 8S](/products/ecar-lithium-magnum-8s-8-seat-golf-cart/) seats eight at $20,374.20, and the [6F](/products/ecar-lithium-magnum-6f-6-seat-golf-cart/) is $19,394.20. See all [electric golf carts](/golf-carts/electric/).`],
      [`Six seats: what to check`, `Check seating layout, storage and how the cart will be used. The [ECAR page](/brands/ecar/) lists the range, and our guide to [golf cart costs](/blog/how-much-does-a-golf-cart-cost-in-australia/) explains pricing.`],
    ],
    faq: [
      [`How much is the ECAR Magnum 6S?`, `{price} including GST.`],
      [`How many seats does it have?`, `Six.`],
      [`Is a 6 seat golf buggy electric?`, `This one is lithium electric: 48V, 150Ah.`],
      [`Do you deliver Australia-wide?`, `Yes. Freight is confirmed before you pay.`],
      [`Can I compare other large carts?`, `See the 8 seat and 6F models on the [ECAR page](/brands/ecar/).`],
    ],
  },
  'tomberlin-e-merge-revenge-2-seat-golf-cart': {
    primary: 'tomberlin e merge',
    secondary: ['tomberlin e merge price'],
    lead: `The Tomberlin E-Merge Revenge is a 2 seat electric golf cart with a 48V, 67Ah battery. The Tomberlin E-Merge price is {price} including GST.`,
    sec: [
      [`Tomberlin E-Merge price and models`, `The Tomberlin E-Merge price for this two-seat Revenge is {price} including GST. The [four-seat Revenge](/products/tomberlin-e-merge-revenge-4-seat-golf-cart/) is $18,610.20 and the [E-Merge SS](/products/tomberlin-e-merge-ss-4-seat-golf-cart/) is $28,410.20.`],
      [`Comparing carts`, `See our [golf carts](/golf-carts/), the [electric range](/golf-carts/electric/) and our guide to [golf cart costs](/blog/how-much-does-a-golf-cart-cost-in-australia/).`],
    ],
    faq: [
      [`How much is the Tomberlin E-Merge Revenge?`, `{price} including GST.`],
      [`What is the Tomberlin E-Merge price for the four seater?`, `The 4 seat Revenge is $18,610.20.`],
      [`How many seats does this one have?`, `Two.`],
      [`What battery does it have?`, `48V, 67Ah per the listing.`],
      [`Do you deliver Australia-wide?`, `Yes. Freight is confirmed before you pay.`],
    ],
  },
  'tomberlin-e-merge-revenge-4-seat-golf-cart': {
    primary: 'tomberlin golf cart',
    secondary: ['tomberlin golf cart for sale', 'tomberlin golf carts australia', 'tomberlin australia', 'tomberlin emerge golf cart'],
    lead: `This Tomberlin golf cart seats four: the E-Merge Revenge has a 48V, 67Ah battery and costs {price} including GST.`,
    sec: [
      [`Tomberlin golf cart for sale in Australia`, `This Tomberlin golf cart for sale is one of the Tomberlin golf carts Australia buyers can order here, and we deliver Tomberlin Australia-wide with freight confirmed before you pay. Some buyers search the spelling Tomberlin emerge golf cart: it is the same E-Merge line. The [two-seat Revenge](/products/tomberlin-e-merge-revenge-2-seat-golf-cart/) is $16,650.20.`],
      [`Which Tomberlin should you choose?`, `The E-Merge SS is $28,410.20 (see the [E-Merge SS](/products/tomberlin-e-merge-ss-4-seat-golf-cart/)). We also list used Tomberlin carts in our [used golf carts](/golf-carts/used/). Our guide to [what a golf cart costs](/blog/how-much-does-a-golf-cart-cost-in-australia/) covers the range.`],
    ],
    faq: [
      [`How much is this Tomberlin golf cart?`, `{price} including GST.`],
      [`Do you have a Tomberlin golf cart for sale?`, `Yes, several: see [golf carts](/golf-carts/).`],
      [`Do you sell Tomberlin golf carts in Australia?`, `Yes, delivered Australia-wide.`],
      [`Is Tomberlin Australia delivery free?`, `Orders over $1,000 ship free to major metro and depot corridors; other freight is confirmed first.`],
      [`Is the E-Merge the same as the Tomberlin emerge golf cart?`, `Yes, it is the same line spelled two ways.`],
    ],
  },
  'tomberlin-e-merge-ss-4-seat-golf-cart': {
    primary: 'tomberlin e merge ss',
    secondary: ['tomberlin golf buggy', 'tomberlin e-merge golf cart'],
    lead: `The Tomberlin E-Merge SS is a 4 seat golf cart with a 105Ah battery at {price} including GST.`,
    sec: [
      [`Tomberlin golf buggy and Tomberlin e-merge golf cart: the E-Merge SS`, `The Tomberlin E-Merge SS is the top Tomberlin we list. Buyers who search for a Tomberlin golf buggy or a Tomberlin e-merge golf cart usually mean this family: compare the [Revenge 4 seat](/products/tomberlin-e-merge-revenge-4-seat-golf-cart/) at $18,610.20.`],
      [`Comparing premium carts`, `See all [electric golf carts](/golf-carts/electric/) and our guide to [golf cart costs](/blog/how-much-does-a-golf-cart-cost-in-australia/).`],
    ],
    faq: [
      [`How much is the Tomberlin E-Merge SS?`, `{price} including GST.`],
      [`How many seats?`, `Four.`],
      [`What battery does it have?`, `105Ah per the listing.`],
      [`Is it a Tomberlin golf buggy?`, `It is a four seat Tomberlin golf cart.`],
      [`Do you deliver Australia-wide?`, `Yes. Freight is confirmed before you pay.`],
    ],
  },
  'used-2010-tomberlin-revenge-4-seat-blue-grey-golf-cart': {
    primary: 'tomberlin golf cart for sale used',
    secondary: ['2010 tomberlin golf cart'],
    lead: `This is a Tomberlin golf cart for sale used: a 2010 Revenge four seater, 48V with 10 inch wheels, at {price} including GST.`,
    sec: [
      [`2010 Tomberlin golf cart: what you get`, `This 2010 Tomberlin golf cart is a used four-seater in blue and grey. As with any used cart, message us about condition, battery age and service history before you pay. Compare other [used golf carts](/golf-carts/used/) and read our guide to [buying a used golf cart](/blog/used-golf-carts-on-sale/).`],
      [`New or used?`, `A new [Tomberlin Revenge](/products/tomberlin-e-merge-revenge-4-seat-golf-cart/) is $18,610.20. Our guide to the [cost of a golf cart](/blog/how-much-does-a-golf-cart-cost-in-australia/) explains the gap.`],
    ],
    faq: [
      [`How much is this used Tomberlin?`, `{price} including GST.`],
      [`What year is it?`, `2010 per the listing.`],
      [`How many seats?`, `Four.`],
      [`Can I check the condition before buying?`, `Yes. Message us before you pay.`],
      [`Do you deliver Australia-wide?`, `Yes. Freight is confirmed before you pay.`],
    ],
  },
  'club-car-onward-petrol-golf-cart': {
    primary: 'club car onward golf cart',
    secondary: ['club car onward price', 'club car onward for sale', 'club car onward gas for sale'],
    lead: `The Club Car Onward golf cart is a petrol model at {price} including GST, delivered Australia-wide.`,
    sec: [
      [`Club Car Onward price and Club Car Onward for sale`, `The Club Car Onward price here is {price} including GST. This Club Car Onward for sale listing is the petrol version, so a Club Car Onward gas for sale search finds the same cart. Compare the [Tempo petrol](/products/club-car-tempo-petrol-golf-cart/) at $14,690.20.`],
      [`Petrol golf carts`, `See all [petrol golf carts](/golf-carts/petrol/), the [Club Car page](/brands/club-car/) and our guide to [golf cart costs](/blog/how-much-does-a-golf-cart-cost-in-australia/).`],
    ],
    faq: [
      [`What is the Club Car Onward price?`, `{price} including GST.`],
      [`Is this Club Car Onward for sale a petrol cart?`, `Yes.`],
      [`Do you have a Club Car Onward gas for sale?`, `Gas means petrol: this is the petrol Onward.`],
      [`How does it compare with the Tempo?`, `The Tempo petrol is $14,690.20.`],
      [`Do you deliver Australia-wide?`, `Yes. Freight is confirmed before you pay.`],
    ],
  },
  'club-car-tempo-petrol-golf-cart': {
    primary: 'club car tempo golf buggy',
    secondary: [],
    lead: `The Club Car Tempo golf buggy here is a petrol cart with a 429cc engine at {price} including GST, delivered Australia-wide.`,
    sec: [
      [`Club Car Tempo petrol golf cart`, `The Tempo petrol is the lower-priced petrol Club Car we list. See the [Tempo Deluxe](/products/club-car-tempo-deluxe-petrol-golf-cart-metallic-green/) at $16,953 and the [Onward](/products/club-car-onward-petrol-golf-cart/) at $26,950.`],
      [`Comparing petrol carts`, `See all [petrol golf carts](/golf-carts/petrol/), the [Club Car page](/brands/club-car/) and our guide to [driving a golf cart on the road](/blog/can-you-drive-a-golf-cart-on-the-road-in-australia/).`],
    ],
    faq: [
      [`How much is the Club Car Tempo?`, `{price} including GST.`],
      [`What engine does it have?`, `429cc per the listing.`],
      [`Is it a petrol cart?`, `Yes.`],
      [`How does it compare with the Onward?`, `The Onward petrol is $26,950.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'used-2015-club-car-precedent-4-seat-blue-golf-cart': {
    primary: 'club car precedent',
    secondary: [],
    lead: `This used 2015 Club Car Precedent seats four, has 10 inch wheels and costs {price} including GST.`,
    sec: [
      [`Used Club Car Precedent four seater`, `The Club Car Precedent is a familiar cart, and this one is a used four-seater in blue. Message us about condition, battery and service history before you pay. See other [used golf carts](/golf-carts/used/) and read our guide to [buying a used golf cart](/blog/used-golf-carts-on-sale/).`],
      [`Upgrading a Precedent`, `We list lithium battery packages for the Club Car Precedent in [lithium batteries](/parts-accessories/golf-buggy-parts/lithium-batteries/). The [Club Car page](/brands/club-car/) lists new carts.`],
    ],
    faq: [
      [`How much is this Club Car Precedent?`, `{price} including GST.`],
      [`What year is it?`, `2015 per the listing.`],
      [`How many seats?`, `Four.`],
      [`Can I get a lithium battery for a Precedent?`, `Yes: see [lithium batteries](/parts-accessories/golf-buggy-parts/lithium-batteries/).`],
      [`Do you deliver Australia-wide?`, `Yes. Freight is confirmed before you pay.`],
    ],
  },
  'used-2017-ezgo-rxv-4-seat-black-golf-cart': {
    primary: 'ezgo rxv golf cart',
    secondary: ['ezgo rxv golf cart for sale', 'ezgo rxv golf cart price'],
    lead: `This EZGO RXV golf cart is a used 2017 four seater, 48V with a 67Ah battery and 12 inch wheels, at {price} including GST.`,
    sec: [
      [`EZGO RXV golf cart for sale and EZGO RXV golf cart price`, `This EZGO RXV golf cart for sale is a used black four-seater. The EZGO RXV golf cart price is {price} including GST. We also list a [2018 RXV in red](/products/used-2018-ezgo-rxv-4-seat-red-golf-cart/) at the same price. Message us about condition and battery age before you pay.`],
      [`More EZGO carts`, `See [used golf carts](/golf-carts/used/), the [EZGO page](/brands/ezgo/) and our guide to [buying a 2nd hand golf cart](/blog/2nd-hand-golf-carts/).`],
    ],
    faq: [
      [`What is the EZGO RXV golf cart price?`, `{price} including GST.`],
      [`Do you have an EZGO RXV golf cart for sale?`, `Yes, two used RXV carts are listed.`],
      [`What year is it?`, `2017 per the listing.`],
      [`What battery does it have?`, `48V, 67Ah per the listing.`],
      [`Do you deliver Australia-wide?`, `Yes. Freight is confirmed before you pay.`],
    ],
  },
  'used-2018-ezgo-rxv-4-seat-red-golf-cart': {
    primary: 'ezgo rxv price',
    secondary: [],
    lead: `The EZGO RXV price for this used 2018 red four seater is {price} including GST, with 12 inch wheels and a 48V system.`,
    sec: [
      [`Used 2018 EZGO RXV in red`, `This 2018 RXV is a used four-seater. We also list a [2017 RXV in black](/products/used-2017-ezgo-rxv-4-seat-black-golf-cart/) at the same price. Message us about condition and battery age before you pay.`],
      [`Buying used`, `See all [used golf carts](/golf-carts/used/), the [EZGO page](/brands/ezgo/) and our guide to [buying a used golf cart](/blog/used-golf-carts-on-sale/).`],
    ],
    faq: [
      [`What is the EZGO RXV price?`, `{price} including GST.`],
      [`What year is it?`, `2018 per the listing.`],
      [`How many seats?`, `Four.`],
      [`Can I check condition first?`, `Yes. Message us before you pay.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'used-2007-ezgo-txt-4-seat-black-golf-cart': {
    primary: 'golf cart ezgo txt',
    secondary: [],
    lead: `This golf cart EZGO TXT is a used 2007 four seater, 36v with 10 inch wheels, at {price} including GST.`,
    sec: [
      [`Used 2007 EZGO TXT golf cart`, `The TXT is a long-running EZGO model, and this one is a used black four-seater. Message us about condition and battery age before you pay. See [used golf carts](/golf-carts/used/) and the [EZGO page](/brands/ezgo/).`],
      [`Used cart buying advice`, `Our guide to [buying a 2nd hand golf cart](/blog/2nd-hand-golf-carts/) covers what to ask. The [electric range](/golf-carts/electric/) is the new alternative.`],
    ],
    faq: [
      [`How much is this EZGO TXT?`, `{price} including GST.`],
      [`What year is it?`, `2007 per the listing.`],
      [`What voltage is it?`, `36v per the listing.`],
      [`Can I check condition first?`, `Yes. Message us before you pay.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
};
