import type { ProductSEO } from '@/content/product-seo';

// Batch 5c (parts and accessories family). Facts are limited to the catalogue: name, price, listed specifications and "Fits" lines.
// We never claim a fit beyond the listing; buyers are told to message us with the cart model. {price} is replaced by the live price.
const LI = '[lithium batteries](/parts-accessories/golf-buggy-parts/lithium-batteries/)';
const CH = '[chargers](/parts-accessories/golf-buggy-parts/chargers-conversion-kits/)';
const ACC = '[golf cart accessories](/parts-accessories/golf-cart-accessories/)';
const HOLD = '[phone, umbrella and drink holders](/parts-accessories/golf-cart-accessories/phone-umbrella-drink-holders/)';
const WHL = '[wheels, rims and tyres](/parts-accessories/golf-buggy-parts/wheels-rims-tyres/)';
const BLOGLI = '[lithium vs lead-acid golf cart batteries](/blog/lithium-vs-lead-acid-golf-cart-batteries/)';
const COST = '[what a golf cart costs in Australia](/blog/how-much-does-a-golf-cart-cost-in-australia/)';
const DEL = '[delivery page](/delivery/)';

export const PART_D: Record<string, ProductSEO> = {
  'pro-li-core-48v-105ah-lithium-battery-package-for-ezgo-rxv': {
    primary: 'ezgo rxv lithium battery', secondary: ['ezgo rxv golf cart battery'],
    lead: `This EZGO RXV lithium battery is the PRO-Li Core 48V, 105Ah package at {price} including GST, a lithium upgrade for EZGO RXV carts.`,
    sec: [
      [`EZGO RXV golf cart battery upgrade`, `The listing describes this Core package as a lithium upgrade to replace tired lead-acid batteries in EZGO RXV carts, so it suits an EZGO RXV golf cart battery change. The [Plus 150Ah package](/products/pro-li-plus-48v-150ah-lithium-battery-package-for-ezgo-rxv/) is $4,115 for a larger capacity. See all ${LI} and the guide to ${BLOGLI}.`],
      [`Check the fit before you order`, `The listing says it fits EZGO RXV carts. Message us your cart's year and current batteries so we can confirm, and see our [used EZGO carts](/brands/ezgo/) if you are choosing a cart.`],
    ],
    faq: [
      [`How much is the EZGO RXV lithium battery?`, `The Core 105Ah package is {price} including GST.`],
      [`What capacity does it have?`, `48V and 105Ah per the listing.`],
      [`Is it an EZGO RXV golf cart battery replacement?`, `Yes, it replaces lead-acid packs in EZGO RXV carts. Message us to confirm your cart.`],
      [`Is lithium better than lead-acid?`, `Read ${BLOGLI}.`],
      [`Do you deliver Australia-wide?`, `Yes. See our ${DEL}.`],
    ],
  },
  'pro-li-plus-48v-150ah-lithium-battery-package-for-ezgo-rxv': {
    primary: 'lithium battery for ezgo rxv', secondary: [],
    lead: `A lithium battery for EZGO RXV carts: the PRO-Li Plus 48V, 150Ah package costs {price} including GST.`,
    sec: [
      [`PRO-Li Plus lithium battery for EZGO RXV`, `The Plus package has more capacity than the [Core 105Ah](/products/pro-li-core-48v-105ah-lithium-battery-package-for-ezgo-rxv/) at $3,625. Compare both in ${LI}.`],
      [`Before you buy`, `Message us your cart details so we can confirm the fit. Read ${BLOGLI} for the trade-offs, and see the [EZGO page](/brands/ezgo/).`],
    ],
    faq: [
      [`How much is the lithium battery for EZGO RXV carts?`, `The Plus 150Ah package is {price} including GST.`],
      [`What capacity is it?`, `48V and 150Ah per the listing.`],
      [`Does it fit my cart?`, `The listing says EZGO RXV. Message us to confirm.`],
      [`How does it compare with the Core?`, `The Core is 105Ah at $3,625.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'pro-li-core-48v-105ah-lithium-battery-package-for-ecar-627-and-yamaha-g29': {
    primary: 'yamaha g29 battery', secondary: [],
    lead: `A Yamaha G29 battery upgrade: the PRO-Li Core 48V, 105Ah lithium package fits ECAR 627 and Yamaha G29 carts and costs {price} including GST.`,
    sec: [
      [`PRO-Li Core Yamaha G29 battery package`, `This lithium package is listed as an upgrade for a Yamaha G29 battery change. It also fits the ECAR 627 per the listing. See ${LI} and ${BLOGLI}.`],
      [`Confirm your cart first`, `Message us your cart's year before you order. We list other Yamaha parts on the [Yamaha page](/brands/yamaha/).`],
    ],
    faq: [
      [`How much is the Yamaha G29 battery package?`, `{price} including GST.`],
      [`What does it fit?`, `ECAR 627 and Yamaha G29 per the listing.`],
      [`What capacity is it?`, `48V and 105Ah.`],
      [`Is lithium worth it?`, `Read ${BLOGLI}.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'mgi-zip-24v-250wh-lithium-battery': {
    primary: 'mgi battery', secondary: [],
    lead: `This MGI battery is a 24V, 250Wh lithium pack for the MGI Zip series at {price} including GST.`,
    sec: [
      [`MGI Zip 250Wh lithium battery`, `The 250Wh pack matches the battery listed on the [MGI ZIP X3](/products/mgi-zip-x3-electric-golf-buggy/) and its siblings. A [299Wh pack](/products/mgi-zip-24v-299wh-lithium-battery/) is also available. See all ${LI}.`],
      [`Charging and care`, `Pair the battery with the [MGI 24V smart charger](/products/mgi-lithium-24v-smart-charger-for-ai-and-zip-series/) and see the [MGI range](/brands/mgi/).`],
    ],
    faq: [
      [`How much is this MGI battery?`, `{price} including GST.`],
      [`Which MGI buggies does it fit?`, `The listing says the MGI Zip series.`],
      [`What capacity is it?`, `24V and 250Wh.`],
      [`Is there a larger MGI Zip battery?`, `Yes, a 299Wh pack at $538.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'mgi-zip-24v-299wh-lithium-battery': {
    primary: 'mgi golf buggy battery', secondary: [],
    lead: `This MGI golf buggy battery is a 24V, 299Wh lithium pack for the MGI Zip series at {price} including GST.`,
    sec: [
      [`MGI 299Wh golf buggy battery`, `A larger-capacity option than the [250Wh pack](/products/mgi-zip-24v-250wh-lithium-battery/) at $508.60. See all ${LI} and the [MGI range](/brands/mgi/).`],
      [`Charging`, `Use the matching [MGI smart charger](/products/mgi-lithium-24v-smart-charger-for-ai-and-zip-series/), and see ${CH}.`],
    ],
    faq: [
      [`How much is this MGI golf buggy battery?`, `{price} including GST.`],
      [`What does it fit?`, `The MGI Zip series per the listing.`],
      [`What capacity is it?`, `24V and 299Wh.`],
      [`How does it compare with the 250Wh pack?`, `The 250Wh is $508.60.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'mgi-lithium-12v-20ah-battery': {
    primary: 'mgi battery replacement', secondary: [],
    lead: `An MGI battery replacement for MGI buggies: the lithium 12V, 20Ah pack costs {price} including GST.`,
    sec: [
      [`MGI 12V 20Ah lithium battery replacement`, `The listing says it fits MGI buggies. For 24V models see the [Zip 250Wh](/products/mgi-zip-24v-250wh-lithium-battery/) pack, and browse ${LI}.`],
      [`Check the fit`, `Message us your buggy model before ordering. See the [MGI range](/brands/mgi/).`],
    ],
    faq: [
      [`How much is the MGI battery replacement?`, `{price} including GST.`],
      [`Which buggies does it fit?`, `MGI buggies per the listing; message us your model.`],
      [`What capacity is it?`, `12V and 20Ah.`],
      [`Is it lithium?`, `Yes.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'trojan-t-875-8v-golf-cart-battery-set-of-6-48v': {
    primary: 'trojan golf cart batteries', secondary: ['trojan batteries for golf cart'],
    lead: `These Trojan golf cart batteries are a set of six T-875 8V deep-cycle batteries for a 48V cart at {price} including GST.`,
    sec: [
      [`Trojan batteries for golf cart: T-875 set of 6`, `Trojan batteries for golf cart use in this form are flooded lead-acid, 170Ah each. The listing says they suit 48V golf carts that take six 8V batteries. Compare a [single T-875](/products/trojan-t-875-8v-170ah-deep-cycle-golf-cart-battery/) at $338.10.`],
      [`Lead-acid or lithium?`, `A lithium upgrade costs more but suits some carts better: read ${BLOGLI} and see ${LI}.`],
    ],
    faq: [
      [`How much is the set of Trojan golf cart batteries?`, `{price} including GST for six.`],
      [`What cart does the set suit?`, `48V carts that take six 8V batteries per the listing.`],
      [`Are these Trojan batteries for golf cart use lead-acid?`, `Yes, flooded deep-cycle.`],
      [`Should I choose lithium?`, `Read ${BLOGLI}.`],
      [`Do you deliver Australia-wide?`, `Yes. Heavy freight is confirmed before you pay.`],
    ],
  },
  'trojan-t-875-8v-170ah-deep-cycle-golf-cart-battery': {
    primary: 'trojan golf buggy batteries', secondary: ['trojan t 875'],
    lead: `A Trojan T-875 8V, 170Ah deep-cycle battery costs {price} including GST. It is one of the Trojan golf buggy batteries we list and weighs 29 kg.`,
    sec: [
      [`Trojan T-875 8V golf buggy battery`, `The Trojan T-875 is a flooded lead-acid battery for golf carts with 8V packs. For a full 48V set see the [set of six](/products/trojan-t-875-8v-golf-cart-battery-set-of-6-48v/) at $1,979.60.`],
      [`Replacing golf cart batteries`, `See ${LI} for the lithium alternative and read ${BLOGLI}. Message us your cart model to confirm.`],
    ],
    faq: [
      [`How much is the Trojan T-875?`, `{price} including GST each.`],
      [`How heavy is it?`, `29 kg per the listing.`],
      [`Are Trojan golf buggy batteries lead-acid?`, `This one is flooded deep-cycle lead-acid.`],
      [`How many do I need?`, `A 48V cart that takes 8V batteries needs six; see the set.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'trojan-t-105-6v-225ah-deep-cycle-golf-cart-battery': {
    primary: 'trojan batteries', secondary: [],
    lead: `This Trojan T-105 is one of our Trojan batteries: a 6V, 225Ah deep-cycle battery at {price} including GST that weighs 28.5 kg.`,
    sec: [
      [`Trojan T-105 deep-cycle battery`, `The Trojan T-105 is a flooded lead-acid battery for golf carts with 6V packs. For 8V packs see the [Trojan T-875](/products/trojan-t-875-8v-170ah-deep-cycle-golf-cart-battery/).`],
      [`Lead-acid or lithium?`, `See ${LI} and read ${BLOGLI}. Message us your cart model to confirm the right battery.`],
    ],
    faq: [
      [`How much is the Trojan T-105?`, `{price} including GST.`],
      [`How heavy is it?`, `28.5 kg per the listing.`],
      [`What carts does it fit?`, `Golf carts with 6V flooded packs per the listing.`],
      [`Are these Trojan batteries lead-acid?`, `Yes, flooded deep-cycle.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'lester-summit2-48v-golf-cart-on-board-charger': {
    primary: 'lester golf cart charger', secondary: ['lester golf cart battery charger', 'lester electrical golf cart charger'],
    lead: `The Lester Summit II is a 48V on-board Lester golf cart charger at {price} including GST.`,
    sec: [
      [`Lester golf cart battery charger: Summit II`, `This Lester golf cart battery charger is an on-board 48V charger for 48V golf carts. A Lester electrical golf cart charger stays in the cart, so you plug in wherever there is power. See all ${CH}.`],
      [`Before you order`, `Confirm your cart's voltage and plug. Message us your model. See also ${LI}.`],
    ],
    faq: [
      [`How much is the Lester Summit II?`, `{price} including GST.`],
      [`What cart does it suit?`, `48V golf carts per the listing.`],
      [`Is it an on-board charger?`, `Yes.`],
      [`Is this a Lester electrical golf cart charger?`, `Yes, the Lester Summit II.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'mgi-lithium-24v-smart-charger-for-ai-and-zip-series': {
    primary: 'mgi zip navigator charger', secondary: [],
    lead: `This MGI ZIP Navigator charger is the lithium 24V smart charger for MGI Ai and Zip buggies at {price} including GST.`,
    sec: [
      [`MGI 24V smart charger for Ai and Zip buggies`, `The listing says it fits MGI Ai and Zip buggies. Pair it with the [Zip 250Wh battery](/products/mgi-zip-24v-250wh-lithium-battery/) or the [Ai 380Wh battery](/products/mgi-ai-gps-24v-380wh-lithium-battery/).`],
      [`More chargers`, `See all ${CH} and the [MGI range](/brands/mgi/).`],
    ],
    faq: [
      [`How much is the MGI smart charger?`, `{price} including GST.`],
      [`What does it fit?`, `MGI Ai and Zip buggies per the listing.`],
      [`Is it for lithium batteries?`, `Yes, a lithium 24V smart charger.`],
      [`Is it the MGI ZIP Navigator charger?`, `It suits the Zip series; message us to confirm your model.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'ecar-orange-receptacle-charger': {
    primary: 'golf cart charger receptacle', secondary: [],
    lead: `This golf cart charger receptacle is the ECAR orange receptacle at {price} including GST, listed for ECAR carts.`,
    sec: [
      [`ECAR orange receptacle charger`, `The orange receptacle is the cart-side socket. The matching [charger plug with 3m cord](/products/ecar-orange-charger-plug-with-3m-cord/) is also $97.`],
      [`More charging gear`, `See all ${CH} and the [ECAR page](/brands/ecar/).`],
    ],
    faq: [
      [`How much is the ECAR receptacle?`, `{price} including GST.`],
      [`What does it fit?`, `ECAR carts per the listing.`],
      [`Do I need the plug as well?`, `The plug with cord is a separate item.`],
      [`Is it a golf cart charger receptacle?`, `Yes.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'ecar-orange-charger-plug-with-3m-cord': {
    primary: 'golf cart charger plug', secondary: [],
    lead: `This golf cart charger plug comes with a 3m cord: the ECAR orange plug is {price} including GST, listed for ECAR carts.`,
    sec: [
      [`ECAR orange charger plug with 3m cord`, `The plug connects the charger to the cart's [receptacle](/products/ecar-orange-receptacle-charger/). Both are $97.`],
      [`More charging gear`, `See all ${CH} and the [ECAR page](/brands/ecar/).`],
    ],
    faq: [
      [`How much is the ECAR charger plug?`, `{price} including GST.`],
      [`How long is the cord?`, `3m per the listing.`],
      [`What does it fit?`, `ECAR carts per the listing.`],
      [`Is it a golf cart charger plug?`, `Yes.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'golf-cart-mag-wheels-rex-10-inch-set-of-4-gloss-black': {
    primary: 'golf cart mag wheels', secondary: [],
    lead: `Golf cart mag wheels in the Rex design: a set of four 10 inch gloss black wheels at {price} including GST.`,
    sec: [
      [`Rex 10 inch mag wheels for golf carts`, `The Rex is one of several mag wheel designs. Compare the [Bulldog in silver](/products/golf-cart-mag-wheels-bulldog-10-inch-set-of-4-silver/) at $685 and see ${WHL}.`],
      [`Check wheel size and fit`, `Confirm your cart's wheel size and bolt pattern before ordering, and message us your model. See ${ACC}.`],
    ],
    faq: [
      [`How much are the Rex mag wheels?`, `{price} including GST for a set of four.`],
      [`What size are they?`, `10 inch per the listing.`],
      [`Do they fit my cart?`, `Message us your cart model to confirm.`],
      [`Do they come with tyres?`, `Check the listing, or message us.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'golf-cart-mag-wheels-bulldog-10-inch-set-of-4-silver': {
    primary: 'golf cart mag wheels australia', secondary: [],
    lead: `Golf cart mag wheels Australia buyers can order here include the Bulldog: a set of four 10 inch silver wheels at {price} including GST.`,
    sec: [
      [`Bulldog 10 inch silver mag wheels`, `The Bulldog is the lowest-priced mag wheel set we list. Compare the [Rex in gloss black](/products/golf-cart-mag-wheels-rex-10-inch-set-of-4-gloss-black/) at $979 and see ${WHL}.`],
      [`Fit and delivery`, `Message us your cart model to confirm fit. Freight is confirmed before you pay: see our ${DEL}.`],
    ],
    faq: [
      [`How much are the Bulldog mag wheels?`, `{price} including GST for four.`],
      [`What size are they?`, `10 inch, silver.`],
      [`Do you sell golf cart mag wheels in Australia?`, `Yes, delivered Australia-wide.`],
      [`Do they fit my cart?`, `Message us to confirm.`],
      [`Are tyres included?`, `Check the listing, or message us.`],
    ],
  },
  'golf-cart-mag-wheels-hexagon-12-inch-set-of-4-gloss-black': {
    primary: 'golf cart mag wheels for sale', secondary: [],
    lead: `These golf cart mag wheels for sale are the Hexagon: a set of four 12 inch gloss black wheels at {price} including GST.`,
    sec: [
      [`Hexagon 12 inch gloss black mag wheels`, `The Hexagon also comes in [14 inch](/products/golf-cart-mag-wheels-hexagon-14-inch-set-of-4-gloss-black/) at $1,567. See ${WHL} for the full range.`],
      [`Fit and delivery`, `Check your cart's wheel size and message us the model. See ${ACC}.`],
    ],
    faq: [
      [`How much are the Hexagon 12 inch wheels?`, `{price} including GST for four.`],
      [`Are these golf cart mag wheels for sale in a set?`, `Yes, a set of four.`],
      [`What size are they?`, `12 inch.`],
      [`Is there a larger Hexagon?`, `Yes, 14 inch at $1,567.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'golf-cart-mag-wheels-torque-12-inch-set-of-4-silver': {
    primary: 'mag wheels for golf carts', secondary: [],
    lead: `Mag wheels for golf carts in a silver Torque design: a set of four 12 inch wheels at {price} including GST.`,
    sec: [
      [`Torque 12 inch silver mag wheels`, `The Torque matches the price of the [Hexagon 12 inch](/products/golf-cart-mag-wheels-hexagon-12-inch-set-of-4-gloss-black/) in silver. See ${WHL}.`],
      [`Before you order`, `Confirm wheel size, bolt pattern and tyre fit by messaging us your cart model.`],
    ],
    faq: [
      [`How much are the Torque wheels?`, `{price} including GST for four.`],
      [`What size are they?`, `12 inch, silver.`],
      [`Do they fit my cart?`, `Message us to confirm.`],
      [`Are they mag wheels for golf carts only?`, `They are listed for golf carts.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'golf-cart-phone-holder-magnetic-style': {
    primary: 'iphone holder for golf cart', secondary: [],
    lead: `A magnetic-style iPhone holder for golf cart use is {price} including GST, to keep your phone in view on the cart.`,
    sec: [
      [`Magnetic phone holder for your golf cart`, `This magnetic-style holder keeps a phone on hand. Compare the [cup holder style](/products/golf-cart-phone-holder-cup-holder-style/) at $18.60 and see ${HOLD}.`],
      [`Check the fit`, `Check the mounting spot on your cart. See ${ACC} for other fittings.`],
    ],
    faq: [
      [`How much is the magnetic phone holder?`, `{price} including GST.`],
      [`Does it suit an iPhone?`, `It holds a phone; check the listing for size limits.`],
      [`Is there a cheaper holder?`, `The cup holder style is $18.60.`],
      [`Will it fit my cart?`, `Message us your model.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'golf-cart-phone-holder-cup-holder-style': {
    primary: 'phone holder for golf cart', secondary: [],
    lead: `A phone holder for golf cart cup holders: this cup-holder style costs {price} including GST.`,
    sec: [
      [`Cup holder style phone holder`, `It sits in a cup holder so you do not need to drill. Compare the [magnetic style](/products/golf-cart-phone-holder-magnetic-style/) at $48 and see ${HOLD}.`],
      [`More accessories`, `See ${ACC} for umbrella and drink holders.`],
    ],
    faq: [
      [`How much is the cup holder phone holder?`, `{price} including GST.`],
      [`Does it need drilling?`, `It is a cup-holder style, so check the listing.`],
      [`Is there a magnetic option?`, `Yes, at $48.`],
      [`Will it fit my cart?`, `Message us your model.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'golf-cart-umbrella-holder-set': {
    primary: 'golf umbrella holder', secondary: ['umbrella holder for golf cart'],
    lead: `A golf umbrella holder set for your cart costs {price} including GST.`,
    sec: [
      [`Umbrella holder for golf cart: the set`, `This umbrella holder for golf cart use keeps an umbrella up and your hands free. See ${HOLD} and ${ACC}.`],
      [`Other holders`, `We also list [PowerBug](/products/powerbug-umbrella-holder/) and MGI holders for buggies. Message us if you are unsure of the fit.`],
    ],
    faq: [
      [`How much is the umbrella holder set?`, `{price} including GST.`],
      [`Is it a golf umbrella holder for carts?`, `Yes, a set for golf carts.`],
      [`Does it fit buggies?`, `See buggy-specific holders such as the [PowerBug umbrella holder](/products/powerbug-umbrella-holder/).`],
      [`Will it fit my cart?`, `Message us your model.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'mgi-sand-bottle-holder': {
    primary: 'mgi zip navigator sand bottle', secondary: [],
    lead: `The MGI ZIP Navigator sand bottle holder, which also suits other MGI buggies, is {price} including GST.`,
    sec: [
      [`MGI ZIP Navigator sand bottle holder`, `The MGI ZIP Navigator sand bottle fitting keeps a divot sand bottle on the buggy. See the [MGI range](/brands/mgi/) and ${HOLD}.`],
      [`Check the fit`, `Check the MGI model you own and message us if unsure. See [MGI buggy accessories](/products/mgi-buggy-accessories-bag/).`],
    ],
    faq: [
      [`How much is the MGI sand bottle holder?`, `{price} including GST.`],
      [`Does it fit the MGI ZIP Navigator?`, `It is an MGI accessory; message us your model to confirm.`],
      [`Does it include a bottle?`, `Check the listing.`],
      [`Where are more holders?`, `See ${HOLD}.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'stinger-sand-bucket-holder-kit-complete': {
    primary: 'sand bucket hook for golf buggy', secondary: [],
    lead: `A sand bucket hook for golf buggy use: the Stinger sand bucket holder kit is {price} including GST, listed as complete.`,
    sec: [
      [`Stinger sand bucket holder kit`, `The kit is a Stinger accessory. See the [Stinger range](/brands/stinger/) and ${HOLD}.`],
      [`Check the fit`, `Check your buggy model and message us if unsure. See ${ACC}.`],
    ],
    faq: [
      [`How much is the sand bucket holder kit?`, `{price} including GST.`],
      [`Is it complete?`, `The listing calls it a complete kit.`],
      [`Does it fit my buggy?`, `It is a Stinger accessory; message us your model.`],
      [`Where are other accessories?`, `See ${ACC}.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'powerbug-smart-phone-and-gps-holder': {
    primary: 'golf phone holder', secondary: [],
    lead: `A golf phone holder for your PowerBug: the smart phone and GPS holder is {price} including GST.`,
    sec: [
      [`PowerBug smart phone and GPS holder`, `The holder keeps a phone or GPS on the PowerBug handle. See the [PowerBug NX](/products/powerbug-nx-lithium-electric-golf-buggy/) and ${HOLD}.`],
      [`Check the fit`, `It is a PowerBug accessory, so message us your model. See the [Stinger and PowerBug page](/brands/stinger/).`],
    ],
    faq: [
      [`How much is the PowerBug phone and GPS holder?`, `{price} including GST.`],
      [`Does it hold a GPS device?`, `Yes, a phone or GPS per the name.`],
      [`Does it fit my buggy?`, `It is a PowerBug accessory; message us.`],
      [`Where are more holders?`, `See ${HOLD}.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'powerbug-umbrella-holder': {
    primary: 'powerbug umbrella holder', secondary: ['umbrella holder for golf buggy'],
    lead: `The PowerBug umbrella holder is {price} including GST, an umbrella holder for golf buggy handles.`,
    sec: [
      [`Umbrella holder for golf buggy handles: the PowerBug holder`, `The PowerBug umbrella holder is made for PowerBug buggies such as the [PowerBug NX](/products/powerbug-nx-lithium-electric-golf-buggy/). An umbrella holder for golf buggy use keeps your hands free in the rain.`],
      [`More holders`, `See ${HOLD}, the [Stinger and PowerBug page](/brands/stinger/) and ${ACC}.`],
    ],
    faq: [
      [`How much is the PowerBug umbrella holder?`, `{price} including GST.`],
      [`Does it fit other buggies?`, `It is a PowerBug accessory; message us about other models.`],
      [`Is it an umbrella holder for golf buggy handles?`, `Yes, for PowerBug.`],
      [`Is there a universal option?`, `See the [golf cart umbrella holder set](/products/golf-cart-umbrella-holder-set/).`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'mgi-buggy-phone-holder': {
    primary: 'mgi phone holder', secondary: [],
    lead: `The MGI phone holder is {price} including GST and keeps a phone on your MGI buggy.`,
    sec: [
      [`MGI buggy phone holder`, `This MGI phone holder is an MGI accessory. See the [MGI range](/brands/mgi/) and ${HOLD}.`],
      [`Check the fit`, `Message us your MGI model. See ${ACC} for other MGI fittings.`],
    ],
    faq: [
      [`How much is the MGI phone holder?`, `{price} including GST.`],
      [`Does it fit my MGI buggy?`, `Message us your model to confirm.`],
      [`Are there cheaper phone holders?`, `Yes, see the [cup holder style](/products/golf-cart-phone-holder-cup-holder-style/) at $18.60.`],
      [`Where are more MGI accessories?`, `See the [MGI range](/brands/mgi/).`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'mgi-xl-cooler-bag-for-golf-buggies': {
    primary: 'golf buggy cooler bag', secondary: ['mgi zip navigator cooler bag'],
    lead: `A golf buggy cooler bag that keeps drinks and snacks cold: the MGI XL cooler bag weighs 4 kg and costs {price} including GST.`,
    sec: [
      [`MGI ZIP Navigator cooler bag: the XL golf buggy cooler bag`, `This is the larger of our MGI cooler bags. A MGI ZIP Navigator cooler bag search finds this item for buggies; see the [quad cooler storage bag](/products/mgi-quad-cooler-storage-bag/) at $53.90 as a smaller option.`],
      [`More bags and accessories`, `See [bags, rain covers and eskies](/parts-accessories/golf-cart-accessories/bags-rain-covers-eskies/) and the [MGI range](/brands/mgi/).`],
    ],
    faq: [
      [`How much is the MGI XL cooler bag?`, `{price} including GST.`],
      [`How heavy is it?`, `4 kg per the listing.`],
      [`Does it fit the MGI ZIP Navigator?`, `It is made for golf buggies; message us your model.`],
      [`Is there a smaller option?`, `Yes, the quad cooler storage bag at $53.90.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'ecar-passenger-rail-metal-esky-bracket': {
    primary: 'golf cart esky and bracket', secondary: [],
    lead: `A golf cart esky and bracket combination starts with this ECAR passenger rail metal esky bracket at {price} including GST.`,
    sec: [
      [`ECAR passenger rail esky bracket`, `The bracket mounts an esky on the cart rail. There is also a [Club Car Precedent esky bracket](/products/club-car-precedent-metal-esky-bracket/) at the same price.`],
      [`More accessories`, `See [bags, rain covers and eskies](/parts-accessories/golf-cart-accessories/bags-rain-covers-eskies/) and the [ECAR page](/brands/ecar/).`],
    ],
    faq: [
      [`How much is the ECAR esky bracket?`, `{price} including GST.`],
      [`Does it include an esky?`, `The listing is for the bracket; check for an esky.`],
      [`What cart does it fit?`, `ECAR passenger rails; message us your model.`],
      [`Is there a Club Car version?`, `Yes, for the Precedent.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'mgi-buggy-seat': {
    primary: 'golf buggy seat', secondary: [],
    lead: `A golf buggy seat that folds out: the MGI buggy seat is {price} including GST.`,
    sec: [
      [`MGI fold-out golf buggy seat`, `The MGI seat adds a place to rest between shots on an MGI buggy. A PowerBug has its own [seat kit](/products/powerbug-seat-kit/) at $109.70.`],
      [`Check the fit`, `Check your MGI model, and message us if unsure. See ${ACC} and the [MGI range](/brands/mgi/).`],
    ],
    faq: [
      [`How much is the MGI buggy seat?`, `{price} including GST.`],
      [`Does it fold?`, `The listing describes a fold-out seat.`],
      [`Does it fit my buggy?`, `Message us your model.`],
      [`Is there a PowerBug seat?`, `Yes, the PowerBug seat kit.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'powerbug-seat-kit': {
    primary: 'golf buggy seat kit', secondary: [],
    lead: `A golf buggy seat kit for the PowerBug: the fold-out seat kit costs {price} including GST.`,
    sec: [
      [`PowerBug seat kit`, `The kit adds a fold-out seat to a [PowerBug NX](/products/powerbug-nx-lithium-electric-golf-buggy/). An [MGI buggy seat](/products/mgi-buggy-seat/) is $183.75 for MGI.`],
      [`Check the fit`, `Message us your model before ordering. See ${ACC} and the [Stinger and PowerBug page](/brands/stinger/).`],
    ],
    faq: [
      [`How much is the PowerBug seat kit?`, `{price} including GST.`],
      [`Does it fold out?`, `Yes per the listing.`],
      [`Does it fit my PowerBug?`, `Message us your model.`],
      [`Is there an MGI seat?`, `Yes, at $183.75.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'yamaha-g29-luxury-padded-seat-covers': {
    primary: 'yamaha golf cart seat covers', secondary: [],
    lead: `Yamaha golf cart seat covers in a luxury padded style: the Yamaha G29 set covers four seats and costs {price} including GST.`,
    sec: [
      [`Yamaha G29 luxury padded seat covers`, `The set suits a four-seat Yamaha G29 per the listing. See [seat covers and comfort](/parts-accessories/golf-cart-accessories/seat-covers-comfort/) and the [Yamaha page](/brands/yamaha/).`],
      [`Other Yamaha upgrades`, `Add a [G29 LED light kit](/products/yamaha-g29-led-deluxe-light-kit/) or a [lithium battery](/products/pro-li-core-48v-105ah-lithium-battery-package-for-ecar-627-and-yamaha-g29/).`],
    ],
    faq: [
      [`How much are the Yamaha G29 seat covers?`, `{price} including GST.`],
      [`How many seats do they cover?`, `Four per the listing.`],
      [`Do they fit other Yamaha carts?`, `They are for the G29; message us about others.`],
      [`Are they padded?`, `Yes, luxury padded.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'ecar-627-golf-cart-floor-mat': {
    primary: 'golf cart floor mat', secondary: [],
    lead: `A golf cart floor mat made for the ECAR 627 costs {price} including GST.`,
    sec: [
      [`ECAR 627 golf cart floor mat`, `The mat protects the cabin floor of an ECAR 627. For the Magnum, see the [ECAR Magnum floor mat](/products/ecar-magnum-golf-cart-floor-mat/) at the same price.`],
      [`More accessories`, `See ${ACC} and the [ECAR page](/brands/ecar/).`],
    ],
    faq: [
      [`How much is the ECAR 627 floor mat?`, `{price} including GST.`],
      [`What cart does it fit?`, `The ECAR 627 per the name.`],
      [`Is there a Magnum mat?`, `Yes, at the same price.`],
      [`Is it a custom-fit mat?`, `The listing describes custom floor protection.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'seat-belt-full-kit-assembly-4-seat': {
    primary: 'golf cart seat belt kit', secondary: [],
    lead: `A golf cart seat belt kit for four seats: the full assembly costs {price} including GST.`,
    sec: [
      [`Seat belt full kit for 4 seat carts`, `The kit covers a four-seat cart. A [2 seat kit](/products/seat-belt-full-kit-assembly-2-seat/) is $195. Check your cart's fitting points and message us your model.`],
      [`More safety accessories`, `See the [passenger grab rail](/products/passenger-safety-grab-rail-for-4-seat-golf-carts/) and ${ACC}.`],
    ],
    faq: [
      [`How much is the 4 seat belt kit?`, `{price} including GST.`],
      [`Is there a 2 seat kit?`, `Yes, at $195.`],
      [`Is it a full assembly?`, `Yes, a full kit assembly.`],
      [`Will it fit my cart?`, `Message us your model.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'ezgo-rxv-led-deluxe-light-kit': {
    primary: 'ezgo rxv light kit', secondary: ['light kit for ezgo rxv', 'ezgo rxv headlight kit'],
    lead: `The EZGO RXV light kit is an LED deluxe set with lighting, indicators and a horn at {price} including GST.`,
    sec: [
      [`Light kit for EZGO RXV carts`, `This light kit for EZGO RXV carts brightens day and night driving, and the EZGO RXV headlight kit includes indicators and a horn. See ${ACC} and the [EZGO page](/brands/ezgo/).`],
      [`Other cart light kits`, `Compare the [Yamaha G29 kit](/products/yamaha-g29-led-deluxe-light-kit/) and the [Club Car Precedent kit](/products/club-car-precedent-led-deluxe-light-kit/), both $391.`],
    ],
    faq: [
      [`How much is the EZGO RXV light kit?`, `{price} including GST.`],
      [`What does the kit include?`, `Lighting, indicators and a horn per the listing.`],
      [`Is it a headlight kit for EZGO RXV?`, `Yes: an LED deluxe kit.`],
      [`Does it fit my RXV?`, `Message us the year.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'yamaha-g29-led-deluxe-light-kit': {
    primary: 'yamaha g29 light kit', secondary: ['yamaha g29 headlight kit'],
    lead: `The Yamaha G29 light kit is an LED deluxe set with lighting, indicators and a horn at {price} including GST.`,
    sec: [
      [`Yamaha G29 headlight kit`, `This Yamaha G29 headlight kit gives brighter lighting and indicators. See ${ACC} and the [Yamaha page](/brands/yamaha/).`],
      [`Other Yamaha upgrades`, `Add [luxury seat covers](/products/yamaha-g29-luxury-padded-seat-covers/) or a [lithium battery package](/products/pro-li-core-48v-105ah-lithium-battery-package-for-ecar-627-and-yamaha-g29/).`],
    ],
    faq: [
      [`How much is the Yamaha G29 light kit?`, `{price} including GST.`],
      [`What is included?`, `Lighting, indicators and a horn per the listing.`],
      [`Is it a headlight kit for the G29?`, `Yes, an LED deluxe kit.`],
      [`Does it fit my cart?`, `Message us your model.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'club-car-precedent-led-deluxe-light-kit': {
    primary: 'golf cart led light kit', secondary: [],
    lead: `A golf cart LED light kit for the Club Car Precedent: lighting, indicators and a horn at {price} including GST.`,
    sec: [
      [`Club Car Precedent LED deluxe light kit`, `This LED kit brightens day and night driving. Compare the [EZGO RXV kit](/products/ezgo-rxv-led-deluxe-light-kit/) and [Yamaha G29 kit](/products/yamaha-g29-led-deluxe-light-kit/), both $391.`],
      [`Precedent upgrades`, `See [lithium batteries for the Precedent](/products/pro-li-core-48v-105ah-lithium-battery-package-for-club-car-precedent/), ${ACC} and the [Club Car page](/brands/club-car/).`],
    ],
    faq: [
      [`How much is the Precedent LED light kit?`, `{price} including GST.`],
      [`What is included?`, `Lighting, indicators and a horn per the listing.`],
      [`Is it a golf cart LED light kit for other carts?`, `This one is for the Club Car Precedent.`],
      [`Does it fit my cart?`, `Message us the year.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  '12v-bluetooth-stereo-speaker-system-for-golf-carts': {
    primary: 'golf cart bluetooth speaker', secondary: ['golf cart bluetooth speaker system'],
    lead: `A golf cart Bluetooth speaker system that runs on 12V: this stereo system is {price} including GST.`,
    sec: [
      [`Golf cart Bluetooth speaker system: 12V stereo for golf carts`, `This golf cart Bluetooth speaker system adds music to the cart over Bluetooth. Check your cart's 12V supply, and see ${ACC}.`],
      [`Install and fit`, `Message us your cart model before ordering. See the [golf carts](/golf-carts/) range for new carts.`],
    ],
    faq: [
      [`How much is the speaker system?`, `{price} including GST.`],
      [`What voltage is it?`, `12V per the listing.`],
      [`Does it use Bluetooth?`, `Yes.`],
      [`Will it fit my cart?`, `Message us your model.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'rear-golf-bag-carrier': {
    primary: 'golf bag rack for golf cart', secondary: [],
    lead: `A golf bag rack for golf cart rear ends: the rear golf bag carrier is {price} including GST, listed for four-seat carts.`,
    sec: [
      [`Rear golf bag carrier`, `The carrier holds bags and gear at the back of the cart. A cheaper option is the [universal rear bag rack](/products/universal-rear-bag-rack-for-4-seat-golf-carts/) at $195.`],
      [`More accessories`, `See ${ACC} and our [golf carts](/golf-carts/).`],
    ],
    faq: [
      [`How much is the rear bag carrier?`, `{price} including GST.`],
      [`What cart does it suit?`, `Four-seat carts per the listing.`],
      [`Is there a cheaper rack?`, `Yes, the universal rack at $195.`],
      [`Will it fit my cart?`, `Message us your model.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'universal-rear-bag-rack-for-4-seat-golf-carts': {
    primary: 'golf cart golf bag rack', secondary: [],
    lead: `A golf cart golf bag rack in a universal fit for four-seat carts costs {price} including GST.`,
    sec: [
      [`Universal rear bag rack for 4 seat golf carts`, `The rack carries bags at the back. Compare the [rear golf bag carrier](/products/rear-golf-bag-carrier/) at $391.`],
      [`More accessories`, `See ${ACC} and our [golf carts](/golf-carts/).`],
    ],
    faq: [
      [`How much is the universal bag rack?`, `{price} including GST.`],
      [`What carts does it suit?`, `Four-seat carts per the listing.`],
      [`How does it compare with the carrier?`, `The carrier is $391.`],
      [`Will it fit my cart?`, `Message us your model.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'passenger-safety-grab-rail-for-4-seat-golf-carts': {
    primary: 'golf cart rear seat grab bar', secondary: ['golf cart grab bar', 'golf cart back seat grab bar'],
    lead: `A golf cart rear seat grab bar for passengers: the safety grab rail for four-seat carts is {price} including GST.`,
    sec: [
      [`Golf cart grab bar: passenger safety grab rail for 4 seat carts`, `A golf cart grab bar gives passengers something to hold. This golf cart back seat grab bar suits four-seat carts per the listing. Add a [seat belt kit](/products/seat-belt-full-kit-assembly-4-seat/) for more safety.`],
      [`More accessories`, `See ${ACC} and our [golf carts](/golf-carts/).`],
    ],
    faq: [
      [`How much is the grab rail?`, `{price} including GST.`],
      [`What carts does it suit?`, `Four-seat carts per the listing.`],
      [`Is it a rear seat grab bar?`, `Yes, for passengers.`],
      [`Can I add seat belts?`, `Yes, see the 4 seat belt kit.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'ecar-627-driver-side-mirror': {
    primary: 'golf cart rear view mirror', secondary: [],
    lead: `A golf cart rear view mirror for the ECAR 627 driver side costs {price} including GST.`,
    sec: [
      [`ECAR 627 driver side mirror`, `A replacement mirror for better visibility on the driver side. Pair it with the [passenger side mirror](/products/ecar-627-passenger-side-mirror/), also $48.`],
      [`More accessories`, `See ${ACC} and the [ECAR page](/brands/ecar/).`],
    ],
    faq: [
      [`How much is the driver side mirror?`, `{price} including GST.`],
      [`What cart does it fit?`, `The ECAR 627 per the name.`],
      [`Is there a passenger side mirror?`, `Yes, also $48.`],
      [`Is it a replacement?`, `The listing describes a replacement mirror.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'ecar-627-passenger-side-mirror': {
    primary: 'golf cart side mirrors', secondary: [],
    lead: `Golf cart side mirrors for the ECAR 627: the passenger side mirror costs {price} including GST.`,
    sec: [
      [`ECAR 627 passenger side mirror`, `A replacement mirror for better visibility on the passenger side. Pair it with the [driver side mirror](/products/ecar-627-driver-side-mirror/), also $48.`],
      [`More accessories`, `See ${ACC} and the [ECAR page](/brands/ecar/).`],
    ],
    faq: [
      [`How much is the passenger side mirror?`, `{price} including GST.`],
      [`What cart does it fit?`, `The ECAR 627 per the name.`],
      [`Is there a driver side mirror?`, `Yes, also $48.`],
      [`Is it a replacement?`, `The listing describes a replacement mirror.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'sports-steering-wheel-black-rally-for-golf-carts': {
    primary: 'golf cart steering wheel', secondary: [],
    lead: `A sports golf cart steering wheel in black: the Rally upgrades the feel of the wheel and costs {price} including GST.`,
    sec: [
      [`Sports steering wheel Rally for golf carts`, `The Rally is a sportier steering wheel. Compare the [Apex](/products/sports-steering-wheel-black-apex-for-golf-carts/), also $97.`],
      [`Check the fit`, `Confirm your cart's column and adapter before you order, and message us your model. See ${ACC}.`],
    ],
    faq: [
      [`How much is the Rally steering wheel?`, `{price} including GST.`],
      [`Is there another style?`, `Yes, the Apex at $97.`],
      [`Will it fit my cart?`, `Message us your model.`],
      [`Is it black?`, `Yes per the name.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
};
