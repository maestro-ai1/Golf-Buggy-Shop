import type { ProductSEO } from '@/content/product-seo';

// Batch 5 (golf buggy and trolley family, part B): push buggies. Products with no related keyword in the bank
// (Stinger SG-1/2/3/5 and seat-kit variants, Bag Boy, Caddytek) are intentionally left on their existing copy.
export const PART_B: Record<string, ProductSEO> = {
  'stinger-sg-4-compact-golf-push-buggy': {
    primary: 'stinger sg-4',
    secondary: ['stinger sg 4 compact golf push buggy', 'stinger sg 4 golf push buggy'],
    lead: `The Stinger SG-4 Compact is a golf push buggy at {price} including GST, delivered Australia-wide.`,
    sec: [
      [`Stinger SG 4 compact golf push buggy`, `This Stinger SG 4 compact golf push buggy is a walking buggy you push by hand. It is also sold with a seat at $391 (see the [SG-4 with seat kit](/products/stinger-sg-4-compact-golf-push-buggy-with-seat-kit/)), and the remote-controlled [SG-4 Crossover](/products/stinger-sg-4-crossover-remote-control-golf-buggy-classic-edition-v3/) is $1,469.`],
      [`Stinger SG 4 golf push buggy compared`, `Compare a Stinger SG 4 golf push buggy with the rest of the [Stinger range](/brands/stinger/) and all [push and pull trolleys](/golf-buggies/push-pull-trolleys/). Our guide to the [best golf push buggy in Australia](/blog/best-golf-push-buggy-australia/) explains what to look for.`],
    ],
    faq: [
      [`How much is the Stinger SG-4?`, `{price} including GST.`],
      [`Is the Stinger SG-4 a push buggy?`, `Yes, you push it by hand.`],
      [`Does the SG-4 come with a seat?`, `A version with a seat kit is $391.`],
      [`Is there a remote SG-4?`, `The SG-4 Crossover is a remote control model at $1,469.`],
      [`Do you deliver Australia-wide?`, `Yes. Freight is confirmed before you pay.`],
    ],
  },
  'stinger-sg-4-crossover-remote-control-golf-buggy-classic-edition-v3': {
    primary: 'stinger sg 4 crossover',
    secondary: [],
    lead: `The Stinger SG-4 Crossover Classic Edition V3 is a remote control golf buggy at {price} including GST. Silver and GT editions are the same price.`,
    sec: [
      [`Stinger SG 4 Crossover remote control golf buggy`, `The Stinger SG 4 Crossover is the remote model in the Stinger line. Choose between this Classic, the [Silver](/products/stinger-sg-4-crossover-remote-control-golf-buggy-silver-edition-v3/) and the [GT](/products/stinger-sg-4-crossover-remote-control-golf-buggy-gt-edition-v3/) edition, all {price}.`],
      [`Comparing remote buggies`, `See all [remote control golf buggies](/golf-buggies/remote-control/), read the [remote buggy buyers guide](/blog/remote-control-golf-buggy-buyers-guide/) and visit the [Stinger page](/brands/stinger/).`],
    ],
    faq: [
      [`How much is the Stinger SG-4 Crossover?`, `{price} including GST.`],
      [`What is the difference between the editions?`, `Classic, Silver and GT are the editions listed, all at the same price. Check each listing.`],
      [`Is it remote controlled?`, `Yes, it is a remote control golf buggy.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
      [`How does it compare with push buggies?`, `See [push and pull trolleys](/golf-buggies/push-pull-trolleys/).`],
    ],
  },
  'stinger-sg-6-golf-push-buggy': {
    primary: 'stinger sg-6 review',
    secondary: ['stinger sg-6'],
    lead: `Looking for a Stinger SG-6 review? We do not publish product reviews on this page; the Stinger SG-6 is the top Stinger golf push buggy at {price} including GST, delivered Australia-wide.`,
    sec: [
      [`Stinger SG-6 review: what the listing says`, `We do not publish product reviews on this page, so we do not claim ratings or test results for the Stinger SG-6. The listing gives the model, the price and that it is a push buggy; message us with questions.`],
      [`Stinger SG-6 golf push buggy`, `The Stinger SG-6 sits at the top of the Stinger push range. Compare the lower-priced [SG-5 V2](/products/stinger-sg-5-v2-golf-push-buggy/) at $391 and the [Stinger range](/brands/stinger/).`],
      [`Choosing a push buggy`, `See all [push and pull trolleys](/golf-buggies/push-pull-trolleys/) and our guide to the [best golf push buggy in Australia](/blog/best-golf-push-buggy-australia/).`],
    ],
    faq: [
      [`How much is the Stinger SG-6?`, `{price} including GST.`],
      [`Is it a push buggy?`, `Yes.`],
      [`How does it compare with the SG-5?`, `The SG-5 V2 is $391.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
      [`Can I get a seat?`, `Ask us; seat kits are listed for other Stinger models.`],
    ],
  },
  'clicgear-model-4-0-golf-push-buggy': {
    primary: 'clicgear 4',
    secondary: ['clicgear australia', 'clicgear model 4.0', 'clicgear push cart'],
    lead: `The Clicgear 4 (Model 4.0) is a golf push buggy at {price} including GST, delivered Australia-wide.`,
    sec: [
      [`Clicgear Model 4.0 push cart`, `The Clicgear Model 4.0 is a Clicgear push cart with no motor or battery, and it folds for the boot. Compare other [push and pull trolleys](/golf-buggies/push-pull-trolleys/) and our guide to the [best golf push buggy in Australia](/blog/best-golf-push-buggy-australia/).`],
      [`Clicgear in Australia`, `We sell Clicgear Australia-wide with freight confirmed before you pay. The [Clicgear page](/brands/clicgear/) covers accessories and other models.`],
    ],
    faq: [
      [`How much is the Clicgear 4?`, `{price} including GST.`],
      [`Is the Clicgear Model 4.0 a push cart?`, `Yes.`],
      [`Do you sell Clicgear in Australia?`, `Yes, delivered Australia-wide.`],
      [`Does it fold?`, `Check the folded size on the listing.`],
      [`Do you sell Clicgear accessories?`, `Ask about fit; see the [Clicgear page](/brands/clicgear/).`],
    ],
  },
  'rovic-rv1s-swivel-2-0-golf-push-buggy': {
    primary: 'rovic rv1s',
    secondary: [],
    lead: `The Rovic RV1S Swivel 2.0 is a golf push buggy at {price} including GST, delivered Australia-wide.`,
    sec: [
      [`Rovic RV1S swivel golf push buggy`, `The Rovic RV1S has a swivel front wheel. Compare the [RV1C Compact](/products/rovic-rv1c-compact-2-0-golf-push-buggy/) at $332.20 and other [push and pull trolleys](/golf-buggies/push-pull-trolleys/).`],
      [`Rovic buyers guide`, `The [Rovic page](/brands/rovic/) lists both models. Our guide to the [best golf push buggy in Australia](/blog/best-golf-push-buggy-australia/) explains what to compare.`],
    ],
    faq: [
      [`How much is the Rovic RV1S?`, `{price} including GST.`],
      [`Does the RV1S have a swivel wheel?`, `It is the Swivel 2.0 model.`],
      [`How does it differ from the RV1C?`, `The RV1C Compact is $332.20.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
      [`Does it fold?`, `Check the listing for folded size.`],
    ],
  },
  'rovic-rv1c-compact-2-0-golf-push-buggy': {
    primary: 'rovic rv1c',
    secondary: [],
    lead: `The Rovic RV1C Compact 2.0 is a golf push buggy at {price} including GST, delivered Australia-wide.`,
    sec: [
      [`Rovic RV1C compact golf push buggy`, `The Rovic RV1C is the compact Rovic. Compare the [RV1S Swivel](/products/rovic-rv1s-swivel-2-0-golf-push-buggy/) at $347.90 and other [push and pull trolleys](/golf-buggies/push-pull-trolleys/).`],
      [`Rovic buyers guide`, `The [Rovic page](/brands/rovic/) lists both models, and our [push trolley guide](/blog/push-trolley/) explains what to compare.`],
    ],
    faq: [
      [`How much is the Rovic RV1C?`, `{price} including GST.`],
      [`Is it compact?`, `It is the Compact 2.0 model.`],
      [`How does it differ from the RV1S?`, `The RV1S Swivel is $347.90.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
      [`Does it fold?`, `Check the listing for folded size.`],
    ],
  },
  'big-max-iq2-360-golf-push-buggy': {
    primary: 'big max iq2 360',
    secondary: ['big max iq2 buggy', 'big max iq2'],
    lead: `The Big Max IQ2 360 is a golf push buggy at {price} including GST, delivered Australia-wide.`,
    sec: [
      [`Big Max IQ2 buggy`, `The Big Max IQ2 buggy is a walking push buggy. Compare other [push and pull trolleys](/golf-buggies/push-pull-trolleys/), and see the [Big Max page](/brands/big-max/).`],
      [`Is the Big Max IQ2 right for you?`, `If you would rather have a motor, see [electric golf buggies](/golf-buggies/motorised-electric/). Our guide to [electric vs push golf buggies](/blog/electric-vs-push-golf-buggy-which-should-you-buy/) covers the trade-offs.`],
    ],
    faq: [
      [`How much is the Big Max IQ2 360?`, `{price} including GST.`],
      [`Is the IQ2 a push buggy?`, `Yes.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
      [`Does it fold?`, `Check the listing for folded size.`],
      [`Do you sell other Big Max models?`, `Message us.`],
    ],
  },
  'triumph-gtx-plus-3-wheel-golf-push-buggy': {
    primary: 'triumph gtx plus golf buggy',
    secondary: ['triumph gtx plus buggy accessories'],
    lead: `The Triumph GTX Plus golf buggy is a 3 wheel golf push buggy with 5 inch wheels at {price} including GST, delivered Australia-wide.`,
    sec: [
      [`Triumph GTX Plus golf buggy`, `The Triumph GTX Plus golf buggy has three wheels. See the [3 wheel golf buggy](/golf-buggies/3-wheel/) range and the [Triumph page](/brands/triumph/).`],
      [`Triumph GTX Plus buggy accessories`, `Triumph GTX Plus buggy accessories such as holders are universal items in [golf cart accessories](/parts-accessories/golf-cart-accessories/); check the fit. Our guide to the [best golf push buggy in Australia](/blog/best-golf-push-buggy-australia/) helps you compare.`],
    ],
    faq: [
      [`How much is the Triumph GTX Plus?`, `{price} including GST.`],
      [`How many wheels does it have?`, `Three, with 5 inch wheels per the listing.`],
      [`Do you sell accessories?`, `Ask about fit; see [accessories](/parts-accessories/golf-cart-accessories/).`],
      [`Do you deliver Australia-wide?`, `Yes.`],
      [`Is it a push buggy?`, `Yes.`],
    ],
  },
  'tri-lite-deluxe-3-wheel-golf-push-buggy': {
    primary: 'tri lite buggy',
    secondary: ['tri lite deluxe golf buggy', 'tri lite deluxe buggy price', 'tri lite buggy australia', 'tri lite trolley', 'tri lite golf trolley'],
    lead: `The Tri-Lite Deluxe is a Tri Lite buggy: a 3 wheel golf push buggy at {price} including GST. It weighs 5.5 kg.`,
    sec: [
      [`Tri Lite deluxe golf buggy price`, `The Tri Lite deluxe buggy price is {price} including GST, and this Tri Lite buggy Australia buyers order online ships with freight confirmed before you pay.`],
      [`Tri Lite trolley and golf trolley comparison`, `A Tri Lite trolley or Tri Lite golf trolley is a push model: see [3 wheel golf buggies](/golf-buggies/3-wheel/), all [push and pull trolleys](/golf-buggies/push-pull-trolleys/) and the [Tri-Lite page](/brands/tri-lite/). Our [push trolley guide](/blog/push-trolley/) explains what to compare.`],
    ],
    faq: [
      [`What is the Tri Lite deluxe buggy price?`, `{price} including GST.`],
      [`How heavy is the Tri-Lite Deluxe?`, `5.5 kg per the listing.`],
      [`Do you sell the Tri Lite buggy in Australia?`, `Yes, delivered Australia-wide.`],
      [`Is a Tri Lite trolley a push buggy?`, `Yes, this one is a 3 wheel push buggy.`],
      [`Can I compare Tri Lite golf trolley options?`, `See [push and pull trolleys](/golf-buggies/push-pull-trolleys/).`],
    ],
  },
  'smoothy-micro-golf-push-buggy': {
    primary: 'smoothy micro golf buggy',
    secondary: [],
    lead: `The Smoothy Micro golf buggy is a push buggy at {price} including GST, delivered Australia-wide.`,
    sec: [
      [`Smoothy Micro golf buggy`, `The Smoothy Micro golf buggy is a compact push model. See other [push and pull trolleys](/golf-buggies/push-pull-trolleys/) and the [Smoothy page](/brands/smoothy/).`],
      [`Choosing a compact push buggy`, `Compare weight and folded size, and read our guide to the [best golf push buggy in Australia](/blog/best-golf-push-buggy-australia/).`],
    ],
    faq: [
      [`How much is the Smoothy Micro?`, `{price} including GST.`],
      [`Is it a push buggy?`, `Yes.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
      [`Does it fold?`, `Check the listing for folded size.`],
      [`Do you sell Smoothy parts?`, `Message us with the model.`],
    ],
  },
  'powakaddy-micra-push-golf-buggy': {
    primary: 'powakaddy micra',
    secondary: ['powakaddy micra push buggy', 'powakaddy micra push cart', 'powakaddy micra umbrella holder'],
    lead: `The PowaKaddy Micra is a golf push buggy at {price} including GST, delivered Australia-wide.`,
    sec: [
      [`PowaKaddy Micra push buggy and push cart`, `The PowaKaddy Micra push buggy, also searched as the PowaKaddy Micra push cart, has no motor. For a motor see the [PowaKaddy CT6](/products/powakaddy-ct6-electric-golf-buggy/) at $1,469, and compare [push and pull trolleys](/golf-buggies/push-pull-trolleys/).`],
      [`PowaKaddy Micra umbrella holder`, `A PowaKaddy Micra umbrella holder is a universal-fit accessory in [golf cart accessories](/parts-accessories/golf-cart-accessories/phone-umbrella-drink-holders/); check the fit. See the [PowaKaddy page](/brands/powakaddy/) for the range.`],
    ],
    faq: [
      [`How much is the PowaKaddy Micra?`, `{price} including GST.`],
      [`Is the Micra a push cart?`, `Yes, a push buggy with no motor.`],
      [`Do you sell a Micra umbrella holder?`, `See [holders](/parts-accessories/golf-cart-accessories/phone-umbrella-drink-holders/) and check the fit.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
      [`What about an electric PowaKaddy?`, `See the [CT6](/products/powakaddy-ct6-electric-golf-buggy/).`],
    ],
  },
};
