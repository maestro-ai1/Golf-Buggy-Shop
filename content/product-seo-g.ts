import type { ProductSEO } from '@/content/product-seo';

// Batch 5f: model keywords found in the keyword seed exports (zero-volume model searches with an intent label are allowed).
// Facts are limited to the catalogue. {price} is replaced by the live catalogue price.
const ACC = '[golf cart accessories](/parts-accessories/golf-cart-accessories/)';
const COST = '[what a golf cart costs in Australia](/blog/how-much-does-a-golf-cart-cost-in-australia/)';
const USEDG = '[buying a used golf cart](/blog/used-golf-carts-on-sale/)';

export const PART_G: Record<string, ProductSEO> = {
  'ecar-lithium-a2-2-seat-golf-cart': {
    primary: 'ecar lithium a2 golf cart', secondary: [],
    lead: `The ECAR Lithium A2 golf cart is a 2 seat electric cart with a 48V, 105Ah lithium battery at {price} including GST, delivered Australia-wide.`,
    sec: [
      [`ECAR Lithium A2 2 seat golf cart`, `The A2 is the entry two-seater in our ECAR A-Series. For four seats see the [ECAR Lithium A4](/products/ecar-lithium-a4-4-seat-golf-cart/) at $13,710.20, and compare all [electric golf carts](/golf-carts/electric/).`],
      [`Choosing a two seat cart`, `Think about where the cart will be stored and charged. Our guide to ${COST} explains the range, and the [ECAR page](/brands/ecar/) lists every ECAR cart.`],
    ],
    faq: [
      [`How much is the ECAR Lithium A2?`, `{price} including GST. Freight is confirmed before you pay.`],
      [`What battery does it have?`, `A 48V, 105Ah lithium battery per the listing.`],
      [`How many seats?`, `Two.`],
      [`Is there a utility A2?`, `Yes, the [A2 utility cart](/products/ecar-lithium-a2-2-seat-utility-golf-cart/) at $12,730.20.`],
      [`Do you deliver Australia-wide?`, `Yes. See our [delivery page](/delivery/).`],
    ],
  },
  'ecar-compass-4s-4-seat-golf-cart': {
    primary: 'ecar compass 4s golf cart', secondary: [],
    lead: `The ECAR Compass 4S golf cart seats four, runs on a 48V, 150Ah lithium battery and costs {price} including GST, delivered Australia-wide.`,
    sec: [
      [`ECAR Compass 4S 4 seat golf cart`, `The Compass 4S is the four-seat Compass. The two-seat [Compass 2S](/products/ecar-compass-2s-2-seat-golf-cart/) is $15,670.20. See all [electric golf carts](/golf-carts/electric/).`],
      [`Before you buy`, `Compare seats, battery and price, and read our guide to ${COST}. The [ECAR page](/brands/ecar/) lists the whole range.`],
    ],
    faq: [
      [`How much is the ECAR Compass 4S?`, `{price} including GST.`],
      [`What battery does it have?`, `48V and 150Ah per the listing.`],
      [`How many seats does it have?`, `Four.`],
      [`Is there a two seat Compass?`, `Yes, the Compass 2S at $15,670.20.`],
      [`Do you deliver Australia-wide?`, `Yes. Freight is confirmed before you pay.`],
    ],
  },
  'used-2021-tomberlin-gts-4-seat-yellow-golf-cart': {
    primary: '2021 tomberlin golf cart', secondary: [],
    lead: `This 2021 Tomberlin golf cart is a used GTS four seater in yellow, 48V with 14 inch wheels, at {price} including GST.`,
    sec: [
      [`Used 2021 Tomberlin GTS golf cart`, `As with any used cart, message us about condition, battery age and service history before you pay. Compare other [used golf carts](/golf-carts/used/) and our guide to ${USEDG}.`],
      [`New or used?`, `A new [Tomberlin E-Merge Revenge](/products/tomberlin-e-merge-revenge-4-seat-golf-cart/) is $18,610.20. See ${COST}.`],
    ],
    faq: [
      [`How much is the 2021 Tomberlin GTS?`, `{price} including GST.`],
      [`What year is it?`, `2021 per the listing.`],
      [`What are the wheels?`, `14 inch per the listing.`],
      [`Can I check condition first?`, `Yes. Message us before you pay.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'seat-belt-full-kit-assembly-2-seat': {
    primary: 'golf cart seat belt kits australia', secondary: [],
    lead: `Golf cart seat belt kits Australia buyers can order here include this full assembly for a 2 seat cart at {price} including GST.`,
    sec: [
      [`Seat belt full kit for 2 seat carts`, `The kit covers a two-seat cart. The [4 seat kit](/products/seat-belt-full-kit-assembly-4-seat/) is $293. Check your cart's fitting points and message us your model.`],
      [`More safety accessories`, `See ${ACC} and our [golf carts](/golf-carts/).`],
    ],
    faq: [
      [`How much is the 2 seat belt kit?`, `{price} including GST.`],
      [`Is there a 4 seat kit?`, `Yes, at $293.`],
      [`Is it a full assembly?`, `Yes, a full kit assembly.`],
      [`Will it fit my cart?`, `Message us your model.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'powerbug-drink-holder': {
    primary: 'golf cart drink holder', secondary: [],
    lead: `A drink holder for the PowerBug: this golf cart drink holder style accessory is {price} including GST.`,
    sec: [
      [`PowerBug drink holder`, `The holder keeps a drink within reach on a PowerBug buggy such as the [PowerBug NX](/products/powerbug-nx-lithium-electric-golf-buggy/). See [phone, umbrella and drink holders](/parts-accessories/golf-cart-accessories/phone-umbrella-drink-holders/).`],
      [`Check the fit`, `It is a PowerBug accessory, so message us your model. See the [Stinger and PowerBug page](/brands/stinger/) and ${ACC}.`],
    ],
    faq: [
      [`How much is the PowerBug drink holder?`, `{price} including GST.`],
      [`Does it fit my buggy?`, `It is a PowerBug accessory; message us your model.`],
      [`Is it a golf cart drink holder?`, `It is a buggy drink holder; for carts see the other holders.`],
      [`Where are more holders?`, `See [holders](/parts-accessories/golf-cart-accessories/phone-umbrella-drink-holders/).`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'club-car-tempo-refurbished-lithium-golf-cart': {
    primary: 'club car tempo', secondary: [],
    lead: `This refurbished Club Car Tempo is a lithium golf cart at {price} including GST, delivered Australia-wide.`,
    sec: [
      [`Refurbished Club Car Tempo lithium cart`, `A refurbished cart is cheaper than new: the [Tempo 2+2 lithium](/products/club-car-tempo-2-2-lithium-4-seat-golf-cart/) is $21,070. Message us about what was refurbished and the battery before you pay. See [used golf carts](/golf-carts/used/).`],
      [`Comparing Club Car carts`, `See the [Club Car page](/brands/club-car/) and our guide to ${USEDG}.`],
    ],
    faq: [
      [`How much is the refurbished Club Car Tempo?`, `{price} including GST.`],
      [`Is it lithium?`, `Yes per the name.`],
      [`Can I ask what was refurbished?`, `Yes. Message us before you pay.`],
      [`How does it compare with a new Tempo?`, `The new Tempo 2+2 lithium is $21,070.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'kayo-storm-70-kids-quad-bike': {
    primary: 'kayo kids sports quad bike', secondary: [],
    lead: `The Kayo Storm 70 is a Kayo kids sports quad bike at {price} including GST, delivered Australia-wide.`,
    sec: [
      [`Kayo Storm 70 kids quad bike`, `Compare the [Apollo Commander 70](/products/apollo-commander-70-kids-quad-bike/) at $1,567 and see [mini quads and ATVs](/off-road-buggies/mini-quads-atvs/).`],
      [`Safety first`, `Always supervise, use a helmet and follow age guidance: see the [Australian Government product safety site](https://www.productsafety.gov.au/) and our [kids ride-on buggy guide](/blog/kids-ride-on-buggy/).`],
    ],
    faq: [
      [`How much is the Kayo Storm 70?`, `{price} including GST.`],
      [`Is it a kids quad?`, `Yes, listed as a kids quad bike; check age guidance.`],
      [`Is there a Kayo kids buggy?`, `Yes, the [Kayo S70](/products/kayo-s70-kids-buggy-79cc-fully-automatic/).`],
      [`Is it road legal?`, `Generally not. Check your state rules.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'golf-skate-caddy-tourer-seat': {
    primary: 'golf skate caddy tourer accessories', secondary: [],
    lead: `Golf skate caddy tourer accessories include this fold-out seat at {price} including GST, delivered Australia-wide.`,
    sec: [
      [`Seat for the Golf Skate Caddy Tourer`, `The seat is an accessory for the [Golf Skate Caddy Tourer](/products/golf-skate-caddy-tourer-electric-golf-board/) at $4,101.30. Message us to confirm the fit. See [golf scooters and boards](/golf-buggies/golf-scooters/).`],
      [`More accessories`, `The [umbrella](/products/golf-skate-caddy-tourer-umbrella/) is $97. See ${ACC}.`],
    ],
    faq: [
      [`How much is the Tourer seat?`, `{price} including GST.`],
      [`What does it fit?`, `The Golf Skate Caddy Tourer; message us to confirm.`],
      [`Are there other Tourer accessories?`, `Yes, an umbrella at $97.`],
      [`Do you sell the Tourer itself?`, `Yes, the electric golf board.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'golf-skate-caddy-tourer-umbrella': {
    primary: 'golf skate caddy umbrella', secondary: [],
    lead: `A golf skate caddy umbrella for the Tourer costs {price} including GST, delivered Australia-wide.`,
    sec: [
      [`Umbrella for the Golf Skate Caddy Tourer`, `The umbrella suits the [Golf Skate Caddy Tourer](/products/golf-skate-caddy-tourer-electric-golf-board/). Message us to confirm the fit, and see [golf scooters and boards](/golf-buggies/golf-scooters/).`],
      [`More accessories`, `The [Tourer seat](/products/golf-skate-caddy-tourer-seat/) is $234.20. See ${ACC}.`],
    ],
    faq: [
      [`How much is the Tourer umbrella?`, `{price} including GST.`],
      [`What does it fit?`, `The Golf Skate Caddy Tourer; message us to confirm.`],
      [`Is there a Tourer seat?`, `Yes, at $234.20.`],
      [`Do you sell the Tourer itself?`, `Yes.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'bag-boy-nitron-golf-push-buggy': {
    primary: 'bag boy nitron buggy', secondary: [],
    lead: `The Bag Boy Nitron buggy is a golf push buggy at {price} including GST, delivered Australia-wide.`,
    sec: [
      [`Bag Boy Nitron golf push buggy`, `The Nitron is the Bag Boy model we list. Compare other [push and pull trolleys](/golf-buggies/push-pull-trolleys/) and see the [Bag Boy page](/brands/bag-boy/).`],
      [`Choosing a push buggy`, `Our guide to the [best golf push buggy in Australia](/blog/best-golf-push-buggy-australia/) explains what to compare, and the [push trolley guide](/blog/push-trolley/) covers weight and fold size.`],
    ],
    faq: [
      [`How much is the Bag Boy Nitron?`, `{price} including GST.`],
      [`Is it a push buggy?`, `Yes.`],
      [`Do you sell other Bag Boy models?`, `Message us.`],
      [`Does it fold?`, `Check the listing for folded size.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
};
