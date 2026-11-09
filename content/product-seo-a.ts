import type { ProductSEO } from '@/content/product-seo';

// Batch 5 (golf buggy and trolley family, part A): electric, remote and ride-on buggies.
// Only facts from the catalogue are stated (name, price, listed specifications). {price} is replaced by the live catalogue price.
export const PART_A: Record<string, ProductSEO> = {
  'mgi-zip-x1-electric-golf-buggy': {
    primary: 'mgi zip x1',
    secondary: ['mgi zip x1 vs x3', 'mgi zip x1 vs x3 vs x5', 'mgi zip x1 vs x5'],
    lead: `The MGI ZIP X1 is a 24V, 250Wh electric golf buggy at {price} including GST, delivered Australia-wide. It is the entry model of the MGI ZIP X range.`,
    sec: [
      [`MGI ZIP X1 vs X3 vs X5: how the range compares`, `The MGI ZIP X1 vs X3 choice comes down to budget and features: the X1 is {price}, the [ZIP X3](/products/mgi-zip-x3-electric-golf-buggy/) is $1,518 and the [ZIP X5](/products/mgi-zip-x5-electric-golf-buggy/) is $1,763. The three share the listed 24V, 250Wh battery, so compare the full listings for the differences. In an MGI ZIP X1 vs X3 vs X5 comparison the X1 is the lowest-priced way into the range, and an MGI ZIP X1 vs X5 comparison is mostly a question of whether the extra $490 buys features you will use.`],
      [`Is the MGI ZIP X1 the right electric buggy for you?`, `An electric buggy suits golfers who want to keep walking but not carry the bag. If you would rather steer less, see the [MGI remote control buggies](/golf-buggies/remote-control/). Our guide to [electric vs push golf buggies](/blog/electric-vs-push-golf-buggy-which-should-you-buy/) covers the trade-offs, and the [MGI range](/brands/mgi/) lists every model, battery and accessory.`],
    ],
    faq: [
      [`How much is the MGI ZIP X1?`, `The MGI ZIP X1 is {price} including GST. See all [electric golf buggies](/golf-buggies/motorised-electric/).`],
      [`What is the difference in an MGI ZIP X1 vs X3?`, `The X3 is $1,518 against {price} for the X1. Both list a 24V, 250Wh battery; check each listing for the other differences, or message us.`],
      [`How does the MGI ZIP X1 compare with the X3 and X5 together?`, `The three models step up in price from {price} to $1,518 to $1,763. We can talk through MGI ZIP X1 vs X3 vs X5 for your course.`],
      [`Is the ZIP X1 or the ZIP X5 better value?`, `An MGI ZIP X1 vs X5 decision is $490 apart. Choose the X5 only if you want its extra features.`],
      [`Do you deliver the MGI ZIP X1 Australia-wide?`, `Yes. Freight is confirmed before you pay. See our [delivery page](/delivery/).`],
    ],
  },
  'mgi-zip-x3-electric-golf-buggy': {
    primary: 'mgi zip x3',
    secondary: ['mgi zip x3 accessories', 'mgi zip x3 battery', 'mgi zip x3 electric golf cart', 'mgi zip x3 motorised golf buggy', 'mgi zip x3 vs x5'],
    lead: `The MGI ZIP X3 is a 24V, 250Wh motorised golf buggy at {price} including GST. It sits in the middle of the MGI ZIP X range, between the X1 and the X5.`,
    sec: [
      [`MGI ZIP X3 motorised golf buggy and electric golf cart searches`, `A motor drives the wheels of this MGI ZIP X3 motorised golf buggy while you steer with the handle. People who search MGI ZIP X3 electric golf cart usually mean this buggy: it carries your clubs, not you, and ride-in carts are in our [golf carts](/golf-carts/). The frame folds for the boot.`],
      [`MGI ZIP X3 battery, accessories and MGI ZIP X3 vs X5`, `The MGI ZIP X3 battery is listed at 24V, 250Wh, and replacement and spare [lithium batteries](/parts-accessories/golf-buggy-parts/lithium-batteries/) are in our parts range. MGI ZIP X3 accessories include a seat, umbrella, cooler bag and phone holder: see [golf cart accessories](/parts-accessories/golf-cart-accessories/) and the [MGI range](/brands/mgi/). In an MGI ZIP X3 vs X5 comparison, the [ZIP X5](/products/mgi-zip-x5-electric-golf-buggy/) is $245 more at $1,763.`],
    ],
    faq: [
      [`How much is the MGI ZIP X3?`, `{price} including GST, with freight confirmed before you pay.`],
      [`Does the MGI ZIP X3 have a remote?`, `No. You steer the ZIP X3 with the handle. For remote control see the [MGI ZIP Navigator](/products/mgi-zip-navigator-remote-control-golf-buggy/).`],
      [`Is the MGI ZIP X3 an electric golf cart?`, `It is an electric golf buggy for walking golfers, not a ride-in cart. See our [golf carts](/golf-carts/) for those.`],
      [`What battery does the MGI ZIP X3 use?`, `The listing gives 24V and 250Wh. Spare packs are in [lithium batteries](/parts-accessories/golf-buggy-parts/lithium-batteries/).`],
      [`Should I buy the MGI ZIP X3 or X5?`, `The X5 is $1,763 against $1,518. Compare the listings or message us.`],
    ],
  },
  'mgi-zip-x5-electric-golf-buggy': {
    primary: 'mgi zip x5',
    secondary: ['mgi zip x5 golf buggy', 'mgi zip x5 accessories', 'mgi zip x5 battery', 'mgi zip x5 price', 'mgi zip x5 best price'],
    lead: `The MGI ZIP X5 golf buggy is a 24V, 250Wh electric buggy at {price} including GST, the top model of the MGI ZIP X range.`,
    sec: [
      [`MGI ZIP X5 price and best price in Australia`, `The MGI ZIP X5 price is {price} including GST with no hidden extras, and that is our MGI ZIP X5 best price: freight is confirmed before you pay, and orders over $1,000 ship free to major metro and depot corridors. Compare it with the [ZIP X3](/products/mgi-zip-x3-electric-golf-buggy/) at $1,518.`],
      [`MGI ZIP X5 golf buggy battery and accessories`, `This MGI ZIP X5 golf buggy lists a 24V, 250Wh battery; MGI ZIP X5 battery spares and a [charger](/parts-accessories/golf-buggy-parts/chargers-conversion-kits/) are in our parts range. MGI ZIP X5 accessories such as a seat, umbrella and cooler bag are in [golf cart accessories](/parts-accessories/golf-cart-accessories/). The [MGI range](/brands/mgi/) lists everything.`],
    ],
    faq: [
      [`What is the MGI ZIP X5 price?`, `{price} including GST.`],
      [`Does the MGI ZIP X5 have a remote?`, `The ZIP X5 is steered by hand. Remote models are the [ZIP Navigator](/products/mgi-zip-navigator-remote-control-golf-buggy/) and Ai range.`],
      [`Is this the best MGI ZIP X5 price?`, `It is our price, GST included, with freight confirmed before you pay.`],
      [`What MGI ZIP X5 accessories do you sell?`, `A seat, umbrella, cooler bag, travel bag and more. See [accessories](/parts-accessories/golf-cart-accessories/).`],
      [`How do I replace the MGI ZIP X5 battery?`, `Message us with your model and we will confirm the right [lithium battery](/parts-accessories/golf-buggy-parts/lithium-batteries/).`],
    ],
  },
  'mgi-zip-navigator-remote-control-golf-buggy': {
    primary: 'mgi zip navigator',
    secondary: ['mgi zip navigator remote control', 'mgi zip navigator accessories', 'mgi zip navigator battery', 'mgi zip navigator golf buggy', 'mgi zip navigator buggy'],
    lead: `The MGI ZIP Navigator is a remote control golf buggy at {price} including GST. Send it ahead to the green or call it back to your ball.`,
    sec: [
      [`MGI ZIP Navigator remote control golf buggy`, `The MGI ZIP Navigator remote control buggy follows commands from a handheld remote, so you walk the course with nothing to push. Compare it with the other [remote control golf buggies](/golf-buggies/remote-control/), including the [all terrain ZIP Navigator AT](/products/mgi-zip-navigator-at-all-terrain-remote-golf-buggy/), and read our [remote buggy buyers guide](/blog/remote-control-golf-buggy-buyers-guide/).`],
      [`MGI ZIP Navigator battery and accessories`, `An MGI ZIP Navigator golf buggy needs a charged battery for every round: see our [lithium batteries](/parts-accessories/golf-buggy-parts/lithium-batteries/) and [chargers](/parts-accessories/golf-buggy-parts/chargers-conversion-kits/). MGI ZIP Navigator accessories, from cooler bags to holders, are in [golf cart accessories](/parts-accessories/golf-cart-accessories/), and the [MGI range](/brands/mgi/) lists the rest. Every MGI ZIP Navigator buggy ships Australia-wide with freight confirmed first.`],
    ],
    faq: [
      [`How much is the MGI ZIP Navigator?`, `{price} including GST.`],
      [`Is the MGI ZIP Navigator remote controlled?`, `Yes, it is listed as a remote control golf buggy. Read the [buyers guide](/blog/remote-control-golf-buggy-buyers-guide/).`],
      [`What MGI ZIP Navigator accessories can I buy?`, `Cooler bags, holders and more in [accessories](/parts-accessories/golf-cart-accessories/).`],
      [`Which battery does the MGI ZIP Navigator take?`, `Message us your version; see [lithium batteries](/parts-accessories/golf-buggy-parts/lithium-batteries/).`],
      [`Is the ZIP Navigator or the all terrain model better?`, `The AT is built for rougher ground at $2,547. Compare both listings.`],
    ],
  },
  'mgi-zip-navigator-at-all-terrain-remote-golf-buggy': {
    primary: 'mgi zip navigator all terrain',
    secondary: ['mgi zip navigator at', 'mgi zip navigator all terrain best price', 'mgi zip navigator at electric golf cart', 'mgi zip navigator all terrain motorised golf buggy', 'mgi zip navigator all terrain for sale'],
    lead: `The MGI ZIP Navigator All Terrain, also called the ZIP Navigator AT, is a remote golf buggy for rougher courses at {price} including GST.`,
    sec: [
      [`MGI ZIP Navigator AT all terrain motorised golf buggy`, `The MGI ZIP Navigator all terrain motorised golf buggy, or AT, is one you control by remote, listed for rougher ground than the standard ZIP Navigator. A MGI ZIP Navigator AT electric golf cart search usually means this buggy rather than a ride-in cart, which you will find in our [golf carts](/golf-carts/).`],
      [`MGI ZIP Navigator all terrain for sale: best price`, `This MGI ZIP Navigator all terrain for sale listing is {price} with GST included, which is our MGI ZIP Navigator all terrain best price, and freight is confirmed before you pay. Compare the standard [ZIP Navigator](/products/mgi-zip-navigator-remote-control-golf-buggy/) at $2,239.30, browse [remote control golf buggies](/golf-buggies/remote-control/) or see the [MGI range](/brands/mgi/).`],
    ],
    faq: [
      [`How much is the MGI ZIP Navigator all terrain?`, `{price} including GST.`],
      [`What is the MGI ZIP Navigator AT?`, `It is the all terrain version of the ZIP Navigator remote buggy.`],
      [`Is it an electric golf cart?`, `It is a motorised golf buggy for walking golfers. Ride-in carts are in [golf carts](/golf-carts/).`],
      [`What is the MGI ZIP Navigator all terrain best price?`, `{price}, GST included, with delivery confirmed before payment.`],
      [`Do you have the MGI ZIP Navigator all terrain for sale now?`, `Yes, it is listed here. Message us to confirm stock and freight.`],
    ],
  },
  'mgi-ai-500-remote-control-golf-buggy': {
    primary: 'mgi ai 500',
    secondary: ['mgi ai 500 vs ai navigator'],
    lead: `The MGI Ai 500 is a remote control golf buggy at {price} including GST, delivered Australia-wide.`,
    sec: [
      [`MGI Ai 500 remote control golf buggy`, `The MGI Ai 500 is part of the Ai range of remote buggies. See all [remote control golf buggies](/golf-buggies/remote-control/) and our [buyers guide](/blog/remote-control-golf-buggy-buyers-guide/) before you choose.`],
      [`MGI Ai 500 vs Ai Navigator`, `In an MGI Ai 500 vs Ai Navigator comparison, the Ai 500 is {price}, while the [Ai Navigator GPS+](/products/mgi-ai-navigator-gps-remote-control-golf-buggy/) is $2,792 and the [Ai Navigator Halo](/products/mgi-ai-navigator-halo-remote-control-golf-buggy/) is $3,184. The [MGI range](/brands/mgi/) lists the details.`],
    ],
    faq: [
      [`How much is the MGI Ai 500?`, `{price} including GST.`],
      [`Is the MGI Ai 500 remote controlled?`, `Yes, it is listed as a remote control golf buggy.`],
      [`What is the difference in the MGI Ai 500 vs Ai Navigator?`, `The Ai Navigator GPS+ is $2,792 and lists a 24V, 380Wh battery; compare the listings.`],
      [`Do you deliver Australia-wide?`, `Yes. Freight is confirmed before you pay.`],
      [`Can I buy a spare battery?`, `See [lithium batteries](/parts-accessories/golf-buggy-parts/lithium-batteries/) and message us your model.`],
    ],
  },
  'mgi-ai-navigator-gps-remote-control-golf-buggy': {
    primary: 'mgi ai navigator gps+',
    secondary: ['mgi ai navigator gps+ buggy', 'mgi ai navigator gps+ accessories', 'mgi ai navigator gps+ remote golf buggy', 'mgi ai navigator gps+ motorised buggy', 'mgi ai navigator gps+ follow me'],
    lead: `The MGI Ai Navigator GPS+ is a remote control golf buggy with a 24V, 380Wh battery at {price} including GST.`,
    sec: [
      [`MGI Ai Navigator GPS+ remote golf buggy and motorised buggy`, `This MGI Ai Navigator GPS+ motorised buggy is one you control by remote, with a follow me style of walking that keeps it beside you down the fairway. An MGI Ai Navigator GPS+ buggy is a remote golf buggy for golfers who want an easier round: compare it in [remote control golf buggies](/golf-buggies/remote-control/).`],
      [`MGI Ai Navigator GPS+ accessories and range`, `MGI Ai Navigator GPS+ accessories, such as bags and holders, are in [golf cart accessories](/parts-accessories/golf-cart-accessories/). The cheaper [Ai 500](/products/mgi-ai-500-remote-control-golf-buggy/) is $2,155, and the [Ai Navigator Halo](/products/mgi-ai-navigator-halo-remote-control-golf-buggy/) is $3,184. See the [MGI range](/brands/mgi/).`],
    ],
    faq: [
      [`How much is the MGI Ai Navigator GPS+?`, `{price} including GST.`],
      [`What battery does the Ai Navigator GPS+ have?`, `24V and 380Wh per the listing.`],
      [`Is it a remote golf buggy?`, `Yes. Read our [remote buggy guide](/blog/remote-control-golf-buggy-buyers-guide/).`],
      [`Does the MGI Ai Navigator GPS+ follow me?`, `It is sold as a remote control buggy; check the listing for the follow functions, or message us.`],
      [`What MGI Ai Navigator GPS+ accessories are there?`, `See [accessories](/parts-accessories/golf-cart-accessories/).`],
    ],
  },
  'mgi-ai-navigator-halo-remote-control-golf-buggy': {
    primary: 'mgi ai navigator halo',
    secondary: ['mgi halo buggy', 'mgi ai navigator halo electric golf caddy'],
    lead: `The MGI Ai Navigator Halo is the top MGI remote control golf buggy at {price} including GST.`,
    sec: [
      [`MGI Halo buggy: the Ai Navigator Halo`, `The MGI Halo buggy is the premium model in our MGI remote range. Compare the [Ai Navigator GPS+](/products/mgi-ai-navigator-gps-remote-control-golf-buggy/) at $2,792 and see all [remote control golf buggies](/golf-buggies/remote-control/).`],
      [`MGI Ai Navigator Halo electric golf caddy`, `Some golfers search for an MGI Ai Navigator Halo electric golf caddy: it is the same remote electric buggy. Our [remote buggy buyers guide](/blog/remote-control-golf-buggy-buyers-guide/) explains what to compare, and the [MGI range](/brands/mgi/) lists accessories.`],
    ],
    faq: [
      [`How much is the MGI Ai Navigator Halo?`, `{price} including GST.`],
      [`What is the MGI Halo buggy?`, `It is the Ai Navigator Halo, a remote control golf buggy.`],
      [`Is it an electric golf caddy?`, `Yes: an MGI Ai Navigator Halo electric golf caddy is a remote electric buggy.`],
      [`Do you deliver Australia-wide?`, `Yes. Freight is confirmed before you pay.`],
      [`How does it compare with the Ai Navigator GPS+?`, `The GPS+ is $2,792. Compare both listings.`],
    ],
  },
  'mgi-e-boost-golf-pushcart': {
    primary: 'mgi e boost',
    secondary: [],
    lead: `The MGI E-Boost is a golf pushcart at {price} including GST, delivered Australia-wide.`,
    sec: [
      [`MGI E-Boost golf pushcart`, `The MGI E-Boost is a pushcart you steer by hand. Compare it with other [push and pull trolleys](/golf-buggies/push-pull-trolleys/) and with the motorised [MGI ZIP X range](/brands/mgi/).`],
      [`Choosing between push and electric`, `If you want a motor, see [electric golf buggies](/golf-buggies/motorised-electric/); our guide to [electric vs push golf buggies](/blog/electric-vs-push-golf-buggy-which-should-you-buy/) covers the trade-offs.`],
    ],
    faq: [
      [`How much is the MGI E-Boost?`, `{price} including GST.`],
      [`Is the MGI E-Boost a pushcart?`, `Yes, it is listed as a golf pushcart.`],
      [`Do you deliver Australia-wide?`, `Yes. Freight is confirmed before you pay.`],
      [`Can I compare it with electric models?`, `See [electric golf buggies](/golf-buggies/motorised-electric/).`],
      [`Do you sell MGI accessories?`, `Yes. See [accessories](/parts-accessories/golf-cart-accessories/).`],
    ],
  },
  'powerbug-nx-lithium-electric-golf-buggy': {
    primary: 'powerbug nx',
    secondary: ['powerbug nx lithium golf buggy', 'powerbug nx lithium', 'powerbug electric golf buggy', 'powerbug golf trolley', 'powerbug electric golf trolleys'],
    lead: `The PowerBug NX is a lithium electric golf buggy at {price} including GST. It weighs 9.5 kg and runs on 28v.`,
    sec: [
      [`PowerBug NX lithium golf buggy`, `A PowerBug NX lithium golf buggy uses a rechargeable lithium battery, listed here at 28v with a 9.5 kg weight. Compare it with other [electric golf buggies](/golf-buggies/motorised-electric/).`],
      [`PowerBug electric golf buggy and golf trolley`, `A PowerBug electric golf buggy is also searched as a PowerBug golf trolley or PowerBug electric golf trolleys. The [NX DHC](/products/powerbug-nx-dhc-lithium-electric-golf-buggy/) is $1,273. PowerBug accessories are on our [Stinger page](/brands/stinger/), and our guide to [electric buggies](/blog/what-is-the-best-electric-golf-buggy-australia/) helps you choose.`],
    ],
    faq: [
      [`How much is the PowerBug NX?`, `{price} including GST.`],
      [`Is the PowerBug NX lithium?`, `Yes, it is a lithium electric golf buggy.`],
      [`How heavy is the PowerBug NX?`, `9.5 kg per the listing.`],
      [`Is a PowerBug a golf trolley?`, `Yes. A PowerBug golf trolley is an electric buggy.`],
      [`Do you sell PowerBug accessories?`, `Yes. See the [Stinger page](/brands/stinger/).`],
    ],
  },
  'powerbug-nx-dhc-lithium-electric-golf-buggy': {
    primary: 'powerbug nx dhc',
    secondary: ['powerbug nx lithium electric golf trolley', 'powerbug golf', 'powerbug'],
    lead: `The PowerBug NX DHC is a lithium electric golf buggy at {price} including GST. It weighs 10.0 kg.`,
    sec: [
      [`PowerBug NX lithium electric golf trolley with DHC`, `The PowerBug NX DHC is a PowerBug NX lithium electric golf trolley with the DHC feature (check the listing for what DHC covers). Compare it with the [standard NX](/products/powerbug-nx-lithium-electric-golf-buggy/) at $861.60.`],
      [`PowerBug golf buggies in Australia`, `PowerBug golf buggies are electric trolleys: see all [electric golf buggies](/golf-buggies/motorised-electric/) and the [Stinger and PowerBug page](/brands/stinger/). Our [electric buggy guide](/blog/what-is-the-best-electric-golf-buggy-australia/) helps you decide.`],
    ],
    faq: [
      [`How much is the PowerBug NX DHC?`, `{price} including GST.`],
      [`What does DHC mean?`, `DHC is the model's descent feature name. Check the listing for details, or message us.`],
      [`How heavy is it?`, `10.0 kg per the listing.`],
      [`Do you deliver PowerBug buggies Australia-wide?`, `Yes. Freight is confirmed before you pay.`],
      [`Is PowerBug golf equipment lithium powered?`, `The NX models are lithium electric buggies.`],
    ],
  },
  'qod-q1-all-terrain-electric-golf-buggy': {
    primary: 'qod golf buggy',
    secondary: ['qod electric golf buggy', 'qod electric golf buggy price', 'qod golf buggy australia', 'qod electric buggy', 'qod golf buggy for sale'],
    lead: `The QOD Q1 is a QOD golf buggy built for all terrain: an electric model at {price} including GST, delivered Australia-wide.`,
    sec: [
      [`QOD electric golf buggy price and QOD golf buggy for sale`, `The QOD electric golf buggy price for the Q1 is {price} including GST. This QOD golf buggy for sale is a QOD electric buggy built for all terrain. See the [remote Q2](/products/qod-q2-remote-control-all-terrain-electric-golf-buggy/) at $2,254 and all [electric golf buggies](/golf-buggies/motorised-electric/).`],
      [`QOD golf buggy Australia: delivery and choosing`, `We list this QOD golf buggy in Australia with freight confirmed before you pay. Read our guide to [electric vs push golf buggies](/blog/electric-vs-push-golf-buggy-which-should-you-buy/) before you decide.`],
    ],
    faq: [
      [`How much is the QOD Q1?`, `{price} including GST.`],
      [`Is the QOD Q1 an electric golf buggy?`, `Yes, an all terrain electric golf buggy.`],
      [`Do you sell the QOD golf buggy in Australia?`, `Yes, delivered Australia-wide.`],
      [`Is there a remote QOD?`, `Yes, the [QOD Q2](/products/qod-q2-remote-control-all-terrain-electric-golf-buggy/).`],
      [`Where can I see QOD electric buggy options?`, `In [electric golf buggies](/golf-buggies/motorised-electric/).`],
    ],
  },
  'qod-q2-remote-control-all-terrain-electric-golf-buggy': {
    primary: 'qod golf',
    secondary: ['qod electric golf trolley', 'qod golf trolley'],
    lead: `QOD golf in remote control form: the QOD Q2 is an all terrain electric golf buggy at {price} including GST. It weighs 35 kg and lists a 360W motor, an 8 km/h top speed and a range of up to 20 km.`,
    sec: [
      [`QOD golf buggies: the Q2 remote control model`, `Among QOD golf buggies, the Q2 adds remote control to the all terrain design. Compare the [Q1](/products/qod-q1-all-terrain-electric-golf-buggy/) at $1,421 and the [remote control golf buggies](/golf-buggies/remote-control/).`],
      [`QOD electric golf trolley and QOD golf trolley`, `A QOD electric golf trolley or QOD golf trolley search means these buggies. Our [remote buggy buyers guide](/blog/remote-control-golf-buggy-buyers-guide/) explains what to compare.`],
    ],
    faq: [
      [`How much is the QOD Q2?`, `{price} including GST.`],
      [`How far does the QOD Q2 go?`, `Up to 20 km per the listing.`],
      [`How fast is the QOD Q2?`, `8 km/h top speed per the listing.`],
      [`How heavy is it?`, `35 kg per the listing.`],
      [`Is the QOD Q2 a golf trolley?`, `Yes, a remote electric golf trolley.`],
    ],
  },
  'concourse-vogue-remote-control-power-golf-buggy': {
    primary: 'concourse buggy',
    secondary: [],
    lead: `The Concourse Vogue is a Concourse buggy with remote control and power at {price} including GST, delivered Australia-wide.`,
    sec: [
      [`Concourse Vogue remote control power golf buggy`, `The Concourse Vogue is a remote power buggy. Compare it with other [remote control golf buggies](/golf-buggies/remote-control/) and our [buyers guide](/blog/remote-control-golf-buggy-buyers-guide/).`],
      [`Concourse buggy delivery and support`, `Freight is confirmed before you pay. See all [golf buggies](/golf-buggies/) or message us for help choosing.`],
    ],
    faq: [
      [`How much is the Concourse Vogue?`, `{price} including GST.`],
      [`Is it remote controlled?`, `Yes, it is listed as a remote control power golf buggy.`],
      [`Do you deliver the Concourse buggy Australia-wide?`, `Yes.`],
      [`How do I compare it?`, `See [remote control golf buggies](/golf-buggies/remote-control/).`],
      [`Can I check suitability?`, `Message us and we will help.`],
    ],
  },
  'i-motioncaddys-im4-ride-on-electric-golf-buggy': {
    primary: 'im4 golf buggy for sale',
    secondary: ['im4 golf buggy price', 'im4 golf buggy australia', 'im4 golf buggy batteries', 'im4 golf buggy spare parts'],
    lead: `This IM4 golf buggy for sale is the i-MotionCaddys IM4 ride-on electric golf buggy at {price} including GST. It lists a 1200W motor, 36V and 50Ah battery, a 19 km/h top speed and a range of up to 50 km.`,
    sec: [
      [`IM4 golf buggy for sale: price and Australia delivery`, `This IM4 golf buggy for sale is {price} including GST. The IM4 golf buggy price covers delivery over $1,000 to major metro and depot corridors, and we ship the IM4 golf buggy Australia-wide with freight confirmed first. It weighs 178 kg. See other [ride-on golf buggies](/golf-buggies/ride-on-seated/).`],
      [`IM4 golf buggy batteries and spare parts`, `For IM4 golf buggy batteries and IM4 golf buggy spare parts, message us your serial details and we will check what we can supply; see [golf buggy parts](/parts-accessories/golf-buggy-parts/). For a ride-in alternative see [golf carts](/golf-carts/), and our guide to [single seat golf carts](/blog/single-seat-golf-cart/).`],
    ],
    faq: [
      [`How much is the IM4 golf buggy?`, `{price} including GST.`],
      [`How far does the IM4 go?`, `Up to 50 km per the listing.`],
      [`Do you sell IM4 batteries and spare parts?`, `Message us; we will check what we can supply.`],
      [`Do you deliver the IM4 Australia-wide?`, `Yes. Freight is confirmed before you pay.`],
      [`What is the IM4 top speed?`, `19 km/h per the listing.`],
    ],
  },
  'golf-skate-caddy-tourer-electric-golf-board': {
    primary: 'golf skate caddy tourer',
    secondary: ['golf skate caddy price', 'golf skate caddy price australia', 'golf skate caddy for sale australia', 'golf skate caddy cost', 'buy golf skate caddy'],
    lead: `The Golf Skate Caddy Tourer is an electric golf board at {price} including GST. It lists a 1000W motor, 48V and 12Ah battery, an 18 km/h top speed and a weight of 120 kg.`,
    sec: [
      [`Golf skate caddy price in Australia and golf skate caddy cost`, `The golf skate caddy price Australia golfers pay for the Tourer is {price} including GST, so the golf skate caddy cost is shown in full, and delivery is confirmed before you pay. Golf skate caddy for sale Australia buyers can order online: buy golf skate caddy stock here is the Tourer.`],
      [`Is a golf skate caddy right for you?`, `A golf skate caddy lets you ride the course standing up, which is quite different to walking with a buggy. See our [golf scooters and boards](/golf-buggies/golf-scooters/), compare [ride-on golf buggies](/golf-buggies/ride-on-seated/), and check your club allows one: see [Golf Australia](https://www.golf.org.au/).`],
    ],
    faq: [
      [`What is the golf skate caddy price?`, `The Tourer is {price} including GST.`],
      [`What is the golf skate caddy price Australia buyers pay?`, `The same {price}, GST included.`],
      [`Can I buy a golf skate caddy for sale Australia-wide?`, `Yes, delivery is Australia-wide.`],
      [`How fast is the Tourer?`, `18 km/h per the listing.`],
      [`Do clubs allow a golf skate caddy?`, `Rules differ by club, so ask yours first.`],
    ],
  },
  'motocaddy-m7-gps-remote-electric-golf-buggy': {
    primary: 'motocaddy m7 remote',
    secondary: ['motocaddy m7 gps remote', 'motocaddy m7 for sale', 'motocaddy m7 price', 'motocaddy m7 australia', 'motocaddy m7 accessories'],
    lead: `The Motocaddy M7 remote (GPS Remote model) is an electric golf buggy at {price} including GST, with Motocaddy M7 Australia delivery.`,
    sec: [
      [`Motocaddy M7 GPS remote: price and Motocaddy M7 for sale`, `The Motocaddy M7 price is {price} including GST. This Motocaddy M7 for sale in Australia is the M7 GPS remote model, and freight is confirmed before you pay. The [S1 DHC](/products/motocaddy-s1-dhc-electric-golf-buggy/) is $1,176 if you do not need GPS or a remote.`],
      [`Motocaddy M7 accessories and remote buggies`, `Motocaddy M7 accessories such as holders are in [golf cart accessories](/parts-accessories/golf-cart-accessories/). Compare other [remote control golf buggies](/golf-buggies/remote-control/), see the [Motocaddy range](/brands/motocaddy/) and read our guide to [caddies for golf](/blog/caddies-for-golf/).`],
    ],
    faq: [
      [`How much is the Motocaddy M7?`, `{price} including GST.`],
      [`Does the Motocaddy M7 have a remote?`, `Yes, this is the Motocaddy M7 GPS remote model.`],
      [`Do you have the Motocaddy M7 for sale in Australia?`, `Yes, it is listed here with delivery Australia-wide.`],
      [`What Motocaddy M7 accessories do you sell?`, `See [accessories](/parts-accessories/golf-cart-accessories/) and ask about fit.`],
      [`How does it compare with the S1 DHC?`, `The S1 DHC is $1,176 and not a GPS remote model.`],
    ],
  },
  'powakaddy-ct6-electric-golf-buggy': {
    primary: 'powakaddy ct6 price',
    secondary: ['powakaddy ct6 for sale', 'powakaddy ct6 best price', 'powakaddy ct6 best price australia', 'powakaddy ct6 battery', 'powakaddy ct6 dimensions'],
    lead: `The PowaKaddy CT6 price is {price} including GST for an electric golf buggy. It lists a 230W motor, a 30v battery and 8 inch wheels.`,
    sec: [
      [`PowaKaddy CT6 price, best price and for sale`, `The PowaKaddy CT6 price is {price} including GST. As a PowaKaddy CT6 for sale listing it carries our PowaKaddy CT6 best price, including the PowaKaddy CT6 best price Australia buyers see: freight is confirmed before you pay.`],
      [`PowaKaddy CT6 battery and dimensions`, `The PowaKaddy CT6 battery is listed at 30v; ask us about spares and see [lithium batteries](/parts-accessories/golf-buggy-parts/lithium-batteries/). For PowaKaddy CT6 dimensions, check the folded size with us before you order. Compare the [Micra push buggy](/products/powakaddy-micra-push-golf-buggy/), see the [PowaKaddy range](/brands/powakaddy/) and the [electric golf buggies](/golf-buggies/motorised-electric/).`],
    ],
    faq: [
      [`What is the PowaKaddy CT6 price?`, `{price} including GST.`],
      [`Do you have the PowaKaddy CT6 for sale?`, `Yes, delivered Australia-wide.`],
      [`What is the PowaKaddy CT6 best price in Australia?`, `{price}, GST included.`],
      [`What battery does it use?`, `30v per the listing. Spares: [lithium batteries](/parts-accessories/golf-buggy-parts/lithium-batteries/).`],
      [`What are the PowaKaddy CT6 dimensions?`, `Message us for folded size before you order.`],
    ],
  },
  'thomson-e5000-pro-lithium-electric-golf-buggy': {
    primary: 'thomson golf buggy electric trolley',
    secondary: ['thomson electric golf buggy accessories'],
    lead: `The Thomson E5000 Pro is a Thomson golf buggy electric trolley with a lithium battery at {price} including GST. It weighs 12 kg.`,
    sec: [
      [`Thomson golf buggy electric trolley`, `A Thomson golf buggy electric trolley carries your bag while a motor does the pushing. At 12 kg this lithium model is easy to lift. Compare other [electric trolleys](/golf-buggies/caddies-electric-trolleys/) and [electric golf buggies](/golf-buggies/motorised-electric/).`],
      [`Thomson electric golf buggy accessories`, `Thomson electric golf buggy accessories such as holders are in [golf cart accessories](/parts-accessories/golf-cart-accessories/). See the [Thomson page](/brands/thomson/) and our [electric buggy guide](/blog/what-is-the-best-electric-golf-buggy-australia/).`],
    ],
    faq: [
      [`How much is the Thomson E5000 Pro?`, `{price} including GST.`],
      [`How heavy is it?`, `12 kg per the listing.`],
      [`Is it lithium?`, `Yes, a lithium electric golf buggy.`],
      [`Do you sell Thomson electric golf buggy accessories?`, `Ask about fit; see [accessories](/parts-accessories/golf-cart-accessories/).`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'parmaker-spirit-ride-on-golf-buggy': {
    primary: 'parmaker spirit',
    secondary: ['parmaker spirit golf buggy', 'parmaker spirit for sale'],
    lead: `The Parmaker Spirit is a ride-on golf buggy at {price} including GST. It lists a 12V, 38Ah battery.`,
    sec: [
      [`Parmaker Spirit golf buggy for sale`, `This Parmaker Spirit golf buggy seats the golfer. A Parmaker Spirit for sale listing here includes GST and Australia-wide freight confirmed before you pay. Compare the [Explorer Ghia](/products/parmaker-explorer-ghia-ride-on-golf-buggy/) at $4,748.`],
      [`Ride-on buggy or golf cart?`, `A ride-on buggy is smaller than a [golf cart](/golf-carts/). See [ride-on golf buggies](/golf-buggies/ride-on-seated/), the [Parmaker page](/brands/parmaker/) and our [single seat golf cart guide](/blog/single-seat-golf-cart/).`],
    ],
    faq: [
      [`How much is the Parmaker Spirit?`, `{price} including GST.`],
      [`What battery does it have?`, `12V and 38Ah per the listing.`],
      [`Do you have the Parmaker Spirit for sale?`, `Yes, delivered Australia-wide.`],
      [`Is it a golf cart?`, `It is a ride-on golf buggy. See [golf carts](/golf-carts/).`],
      [`How does it compare with the Ghia?`, `The Explorer Ghia is $4,748.`],
    ],
  },
  'parmaker-explorer-ghia-ride-on-golf-buggy': {
    primary: 'parmaker ride on golf buggy',
    secondary: [],
    lead: `The Parmaker Explorer Ghia is a Parmaker ride on golf buggy at {price} including GST, delivered Australia-wide.`,
    sec: [
      [`Parmaker Explorer Ghia ride-on`, `The Explorer Ghia is the higher-priced of our two Parmaker buggies. Compare the [Parmaker Spirit](/products/parmaker-spirit-ride-on-golf-buggy/) at $4,062 and all [ride-on golf buggies](/golf-buggies/ride-on-seated/).`],
      [`Before you buy a ride-on buggy`, `Check your club allows powered buggies: see [Golf Australia](https://www.golf.org.au/). Our [Parmaker page](/brands/parmaker/) lists both models, and a [golf cart](/golf-carts/) is the alternative.`],
    ],
    faq: [
      [`How much is the Parmaker Explorer Ghia?`, `{price} including GST.`],
      [`Is it a ride-on buggy?`, `Yes, a Parmaker ride on golf buggy.`],
      [`Do you deliver Australia-wide?`, `Yes. Freight is confirmed before you pay.`],
      [`How does it compare with the Spirit?`, `The Spirit is $4,062 and lists a 12V, 38Ah battery.`],
      [`Can clubs restrict ride-on buggies?`, `Yes, so ask yours first.`],
    ],
  },
};
