import type { ProductSEO } from '@/content/product-seo';

// Batch 5g: model keywords found in the seed exports after the second, exact search (Stinger SG-1/2/3/5, carburettor, esky bracket, Tomberlin 48SS, PRO-Li Precedent packs).
// Facts are limited to the catalogue. {price} is replaced by the live catalogue price.
const PUSH = '[push and pull trolleys](/golf-buggies/push-pull-trolleys/)';
const GUIDE = '[best golf push buggy in Australia](/blog/best-golf-push-buggy-australia/)';
const ACC = '[golf cart accessories](/parts-accessories/golf-cart-accessories/)';
const LI = '[lithium batteries](/parts-accessories/golf-buggy-parts/lithium-batteries/)';
const BLOGLI = '[lithium vs lead-acid golf cart batteries](/blog/lithium-vs-lead-acid-golf-cart-batteries/)';

export const PART_H: Record<string, ProductSEO> = {
  'stinger-sg-1-golf-push-buggy': {
    primary: 'stinger sg-1 golf push buggy', secondary: [],
    lead: `The Stinger SG-1 golf push buggy is the entry model in the Stinger range at {price} including GST. It weighs 5.9 kg and is delivered Australia-wide.`,
    sec: [
      [`Stinger SG-1 golf push buggy`, `The SG-1 is the lowest-priced Stinger we list. Step up to the [SG-2 V2](/products/stinger-sg-2-v2-golf-push-buggy/) at $293 or the [SG-5 V2](/products/stinger-sg-5-v2-golf-push-buggy/) at $391, and see all ${PUSH}.`],
      [`Choosing a push buggy`, `Compare weight, folded size and extras. Our guide to the ${GUIDE} explains what to check, and the [Stinger page](/brands/stinger/) lists every model.`],
    ],
    faq: [
      [`How much is the Stinger SG-1?`, `{price} including GST.`],
      [`How heavy is it?`, `5.9 kg per the listing.`],
      [`Is it a push buggy?`, `Yes.`],
      [`Is there a model with a seat?`, `Seat kits are listed for other Stinger models.`],
      [`Do you deliver Australia-wide?`, `Yes. See our [delivery page](/delivery/).`],
    ],
  },
  'stinger-sg-2-v2-golf-push-buggy': {
    primary: 'stinger sg-2 compact golf push buggy', secondary: [],
    lead: `The Stinger SG-2 V2 is a golf push buggy at {price} including GST, delivered Australia-wide. Searches for the Stinger SG-2 compact golf push buggy find this model.`,
    sec: [
      [`Stinger SG-2 V2 golf push buggy`, `The SG-2 V2 sits between the [SG-1](/products/stinger-sg-1-golf-push-buggy/) at $234.20 and the [SG-3 VIII](/products/stinger-sg-3-viii-golf-push-buggy/) at $273.40. A version with a seat kit is $381.20.`],
      [`Comparing Stinger models`, `See all ${PUSH}, the [Stinger page](/brands/stinger/) and our guide to the ${GUIDE}.`],
    ],
    faq: [
      [`How much is the Stinger SG-2 V2?`, `{price} including GST.`],
      [`Is there a seat kit version?`, `Yes, at $381.20.`],
      [`Is it a push buggy?`, `Yes.`],
      [`How does it compare with the SG-1?`, `The SG-1 is $234.20.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'stinger-sg-3-viii-golf-push-buggy': {
    primary: 'stinger sg-3', secondary: [],
    lead: `The Stinger SG-3 VIII is a golf push buggy at {price} including GST, delivered Australia-wide. A version with a seat kit is $361.60.`,
    sec: [
      [`Stinger SG-3 VIII golf push buggy`, `The Stinger SG-3 is the mid-priced Stinger push buggy. Compare the [SG-2 V2](/products/stinger-sg-2-v2-golf-push-buggy/) at $293 and the [SG-4 Compact](/products/stinger-sg-4-compact-golf-push-buggy/) at $312.60.`],
      [`Choosing a push buggy`, `See all ${PUSH}, the [Stinger page](/brands/stinger/) and our guide to the ${GUIDE}.`],
    ],
    faq: [
      [`How much is the Stinger SG-3 VIII?`, `{price} including GST.`],
      [`Is there a seat kit version?`, `Yes, at $361.60.`],
      [`Is it a push buggy?`, `Yes.`],
      [`How does it compare with the SG-2?`, `The SG-2 V2 is $293.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'stinger-sg-5-v2-golf-push-buggy': {
    primary: 'stinger sg-5 golf buggy', secondary: [],
    lead: `The Stinger SG-5 golf buggy in its V2 form is a push buggy at {price} including GST. It weighs 6.9 kg and is delivered Australia-wide.`,
    sec: [
      [`Stinger SG-5 V2 golf push buggy`, `The SG-5 V2 is one of the higher models in the Stinger push range. A version with a seat kit is [$479.20](/products/stinger-sg-5-v2-golf-push-buggy-with-seat-kit/), and the top [SG-6](/products/stinger-sg-6-golf-push-buggy/) is $459.60.`],
      [`Choosing a push buggy`, `See all ${PUSH}, the [Stinger page](/brands/stinger/) and our guide to the ${GUIDE}.`],
    ],
    faq: [
      [`How much is the Stinger SG-5 V2?`, `{price} including GST.`],
      [`How heavy is it?`, `6.9 kg per the listing.`],
      [`Is there a seat kit version?`, `Yes, at $479.20.`],
      [`Is it a push buggy?`, `Yes.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'stinger-sg-5-v2-golf-push-buggy-with-seat-kit': {
    primary: 'stinger sg-5 golf push buggy', secondary: [],
    lead: `The Stinger SG-5 golf push buggy with a seat kit (V2) costs {price} including GST, delivered Australia-wide.`,
    sec: [
      [`Stinger SG-5 V2 with seat kit`, `This is the [SG-5 V2](/products/stinger-sg-5-v2-golf-push-buggy/) at $391 with a seat kit added. See all ${PUSH}.`],
      [`Choosing a push buggy`, `Our guide to the ${GUIDE} explains what to compare, and the [Stinger page](/brands/stinger/) lists every model.`],
    ],
    faq: [
      [`How much is the SG-5 V2 with seat kit?`, `{price} including GST.`],
      [`Is it cheaper without the seat?`, `Yes, the SG-5 V2 is $391.`],
      [`Is it a push buggy?`, `Yes.`],
      [`Do you sell other Stinger models?`, `Yes, the SG-1 to SG-6.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'carburettor-22mm-for-110cc-and-125cc-engines': {
    primary: 'kayo bull 125 carburetor', secondary: ['apollo rfz 125 carburetor', 'apollo rfz 110 carburetor'],
    lead: `This 22mm carburettor is listed for 110cc and 125cc engines at {price} including GST. Check the fit before you order, for example for a Kayo Bull 125 carburetor.`,
    sec: [
      [`Carburettor for 110cc and 125cc engines`, `The listing is for 110cc and 125cc engines. Owners of a Kayo Bull 125 sometimes search for a replacement carburetor, and owners of an Apollo RFZ 125 carburetor or Apollo RFZ 110 carburetor do the same: message us your model and engine so we can confirm the fit before you pay.`],
      [`More parts`, `See our [off-road parts](/parts-accessories/off-road-parts/) and [engines and carburettors](/parts-accessories/off-road-parts/engines-carburetors/). We also sell the [Kayo Bull 125](/products/kayo-bull-125-farm-quad-atv/) and [Apollo RFZ Commander 125](/products/apollo-rfz-commander-125-quad-bike/) quads.`],
    ],
    faq: [
      [`How much is the 22mm carburettor?`, `{price} including GST.`],
      [`What engines is it listed for?`, `110cc and 125cc engines per the listing.`],
      [`Does it fit a Kayo Bull 125?`, `Message us your model to confirm the fit.`],
      [`Does it fit an Apollo RFZ 125 or RFZ 110?`, `Message us your model to confirm the fit.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'club-car-precedent-metal-esky-bracket': {
    primary: 'golf cart esky bracket', secondary: [],
    lead: `A golf cart esky bracket in metal for the Club Car Precedent costs {price} including GST, delivered Australia-wide.`,
    sec: [
      [`Club Car Precedent metal esky bracket`, `The bracket mounts an esky on the cart. There is also an [ECAR passenger rail esky bracket](/products/ecar-passenger-rail-metal-esky-bracket/) at the same price.`],
      [`More accessories`, `See [bags, rain covers and eskies](/parts-accessories/golf-cart-accessories/bags-rain-covers-eskies/), ${ACC} and the [Club Car page](/brands/club-car/).`],
    ],
    faq: [
      [`How much is the Precedent esky bracket?`, `{price} including GST.`],
      [`What cart does it fit?`, `The Club Car Precedent per the name.`],
      [`Does it include an esky?`, `The listing is for the bracket.`],
      [`Is there an ECAR version?`, `Yes, for the ECAR passenger rail.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'used-2012-tomberlin-48ss-caddy-4-seat-blue-grey-golf-cart': {
    primary: 'tomberlin golf cart price', secondary: [],
    lead: `The Tomberlin golf cart price for this used 2012 48SS Caddy four seater in blue and grey, 48V with 14 inch wheels, is {price} including GST.`,
    sec: [
      [`Used 2012 Tomberlin 48SS Caddy`, `As with any used cart, message us about condition, battery age and service history before you pay. Compare other [used golf carts](/golf-carts/used/) and our guide to [buying a used golf cart](/blog/used-golf-carts-on-sale/).`],
      [`New or used?`, `A new [Tomberlin E-Merge Revenge](/products/tomberlin-e-merge-revenge-4-seat-golf-cart/) is $18,610.20. See [what a golf cart costs in Australia](/blog/how-much-does-a-golf-cart-cost-in-australia/).`],
    ],
    faq: [
      [`How much is this used Tomberlin?`, `{price} including GST.`],
      [`What year is it?`, `2012 per the listing.`],
      [`How many seats?`, `Four.`],
      [`Can I check condition first?`, `Yes. Message us before you pay.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'pro-li-core-48v-105ah-lithium-battery-package-for-club-car-precedent': {
    primary: '48v lithium golf cart battery', secondary: [],
    lead: `A 48V lithium golf cart battery for the Club Car Precedent: the PRO-Li Core 48V, 105Ah package costs {price} including GST.`,
    sec: [
      [`PRO-Li Core lithium battery for Club Car Precedent`, `The listing describes this as a lithium upgrade to replace tired lead-acid batteries in Club Car Precedent carts. The larger [Plus 150Ah package](/products/pro-li-plus-48v-150ah-lithium-battery-package-for-club-car-precedent/) is $4,115. See all ${LI} and read ${BLOGLI}.`],
      [`Check the fit`, `Message us your cart's year before you order. See the [Club Car page](/brands/club-car/).`],
    ],
    faq: [
      [`How much is the Precedent Core battery?`, `{price} including GST.`],
      [`What capacity is it?`, `48V and 105Ah per the listing.`],
      [`Is lithium better than lead-acid?`, `Read ${BLOGLI}.`],
      [`Does it fit my Precedent?`, `Message us your year to confirm.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'pro-li-plus-48v-150ah-lithium-battery-package-for-club-car-precedent': {
    primary: 'lithium ion golf cart batteries', secondary: [],
    lead: `Lithium ion golf cart batteries for the Club Car Precedent: the PRO-Li Plus 48V, 150Ah package costs {price} including GST.`,
    sec: [
      [`PRO-Li Plus lithium ion battery for Club Car Precedent`, `The Plus package has more capacity than the [Core 105Ah](/products/pro-li-core-48v-105ah-lithium-battery-package-for-club-car-precedent/) at $3,625. See all ${LI} and read ${BLOGLI}.`],
      [`Check the fit`, `Message us your cart's year before you order. See the [Club Car page](/brands/club-car/).`],
    ],
    faq: [
      [`How much is the Precedent Plus battery?`, `{price} including GST.`],
      [`What capacity is it?`, `48V and 150Ah per the listing.`],
      [`How does it compare with the Core?`, `The Core is 105Ah at $3,625.`],
      [`Does it fit my Precedent?`, `Message us your year to confirm.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
};
