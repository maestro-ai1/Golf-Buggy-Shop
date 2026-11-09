import type { ProductSEO } from '@/content/product-seo';

// Batch 5d (off-road, kids, go kart, quad and side by side family). Facts are limited to the catalogue: name, price and listed specifications.
// No road-legal, age, power or performance claims beyond the listing. {price} is replaced by the live catalogue price.
const SS = '[side by sides and UTVs](/off-road-buggies/side-by-sides-utvs/)';
const DB = '[dune buggies](/off-road-buggies/dune-buggies/)';
const GK = '[go karts](/off-road-buggies/go-karts/)';
const KB = '[kids buggies](/off-road-buggies/kids-buggies/)';
const MQ = '[mini quads and ATVs](/off-road-buggies/mini-quads-atvs/)';
const SAFE = '[Safe Work Australia](https://www.safeworkaustralia.gov.au/safety-topic/hazards/quad-bikes)';
const GUIDE = '[UTVs, ATVs and dune buggies](/blog/what-is-a-utv-side-by-side-vs-atv-vs-dune-buggy/)';
const OFF = '[off-road buggy guide](/blog/offroad-buggy/)';
const KIDG = '[kids ride-on buggy guide](/blog/kids-ride-on-buggy/)';
const DEL = '[delivery page](/delivery/)';

export const PART_E: Record<string, ProductSEO> = {
  'trailmaster-cheetah-175cc-dune-buggy': {
    primary: 'trailmaster cheetah', secondary: ['trailmaster cheetah for sale'],
    lead: `The Trailmaster Cheetah 175cc is a petrol dune buggy at {price} including GST, delivered Australia-wide.`,
    sec: [
      [`Trailmaster Cheetah for sale: the 175cc`, `This Trailmaster Cheetah for sale is the 175cc model. The [Cheetah 300cc](/products/trailmaster-cheetah-300cc-dune-buggy/) is $5,879. Read our [Trailmaster Cheetah Australia guide](/blog/trailmaster-cheetah-australia/) and see all ${DB}.`],
      [`Before you buy`, `Check seats, assembly and local rules. See ${SAFE} for safety guidance and the [Trailmaster page](/brands/trailmaster/).`],
    ],
    faq: [
      [`How much is the Trailmaster Cheetah 175cc?`, `{price} including GST.`],
      [`What engine does it have?`, `175cc per the listing.`],
      [`Do you have a Trailmaster Cheetah for sale in a bigger engine?`, `Yes, the 300cc at $5,879.`],
      [`Is it road legal?`, `Generally not. Check your state rules.`],
      [`Do you deliver Australia-wide?`, `Yes. See our ${DEL}.`],
    ],
  },
  'trailmaster-cheetah-300cc-dune-buggy': {
    primary: 'trailmaster cheetah 300', secondary: [],
    lead: `The Trailmaster Cheetah 300 is a 300cc petrol dune buggy at {price} including GST, delivered Australia-wide.`,
    sec: [
      [`Trailmaster Cheetah 300cc dune buggy`, `The Cheetah 300 is the larger-engine Cheetah. Compare the [175cc](/products/trailmaster-cheetah-175cc-dune-buggy/) at $4,557 and all ${DB}.`],
      [`Buying advice`, `Read our [Trailmaster dune buggies guide](/blog/trailmaster-dune-buggies/) and see ${SAFE}. The [Trailmaster page](/brands/trailmaster/) lists parts.`],
    ],
    faq: [
      [`How much is the Trailmaster Cheetah 300?`, `{price} including GST.`],
      [`What engine does it have?`, `300cc per the listing.`],
      [`How does it compare with the 175cc?`, `The 175cc is $4,557.`],
      [`Is it road legal?`, `Generally not. Check your state rules.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'trailmaster-challenger-200-buggy': {
    primary: 'trailmaster buggy for sale', secondary: [],
    lead: `This Trailmaster buggy for sale is the Challenger 200: a 200cc buggy with a 12V system at {price} including GST.`,
    sec: [
      [`Trailmaster Challenger 200 buggy`, `The Challenger 200 sits above the [Cheetah 175cc](/products/trailmaster-cheetah-175cc-dune-buggy/) in price. See all ${DB} and the [Trailmaster page](/brands/trailmaster/).`],
      [`Buying advice`, `Read our ${OFF} and see ${SAFE}.`],
    ],
    faq: [
      [`How much is the Trailmaster Challenger 200?`, `{price} including GST.`],
      [`What engine does it have?`, `200cc per the listing.`],
      [`Is it road legal?`, `Generally not. Check your state rules.`],
      [`Do you sell Trailmaster parts?`, `Yes, such as an air filter. See the [Trailmaster page](/brands/trailmaster/).`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'kayo-s150-side-by-side-buggy': {
    primary: 'kayo buggy', secondary: [],
    lead: `The Kayo S150 is a Kayo buggy in side by side form, at {price} including GST, delivered Australia-wide.`,
    sec: [
      [`Kayo S150 side by side buggy`, `Compare the larger [Kayo S350 side by side](/products/kayo-s350-side-by-side/) at $8,819 and all ${SS}.`],
      [`Buying advice`, `Read our ${GUIDE} and see ${SAFE}.`],
    ],
    faq: [
      [`How much is the Kayo S150?`, `{price} including GST.`],
      [`Is it a side by side?`, `Yes, a side by side buggy.`],
      [`Is there a larger Kayo?`, `Yes, the S350 at $8,819.`],
      [`Is it road legal?`, `Generally not. Check your state rules.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'kayo-s70-kids-buggy-79cc-fully-automatic': {
    primary: 'kayo buggy s70', secondary: ['kayo s70 for sale', 'kayo moto s70'],
    lead: `The Kayo buggy S70 is a kids buggy with a 79cc fully automatic engine and a 40 kg weight, at {price} including GST.`,
    sec: [
      [`Kayo S70 for sale: kids buggy`, `This Kayo S70 for sale is a kids buggy, also searched as the Kayo Moto S70. See all ${KB} and our ${KIDG}.`],
      [`Safety first`, `Always supervise, use a helmet and follow the manufacturer's age guidance: see the [Australian Government product safety site](https://www.productsafety.gov.au/).`],
    ],
    faq: [
      [`How much is the Kayo S70?`, `{price} including GST.`],
      [`What engine does it have?`, `79cc, fully automatic, per the listing.`],
      [`How heavy is it?`, `40 kg per the listing.`],
      [`Is it the Kayo Moto S70?`, `Yes, it is the S70 kids buggy.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'kayo-s125-go-kart': {
    primary: 'kayo go kart', secondary: ['kayo go kart for sale'],
    lead: `The Kayo S125 is a Kayo go kart at {price} including GST, delivered Australia-wide.`,
    sec: [
      [`Kayo go kart for sale`, `This Kayo go kart for sale is the S125. See all ${GK} and our guide to [electric go karts](/blog/go-kart-electric-go-karts/).`],
      [`Safety`, `Wear a helmet and follow age guidance. See ${SAFE}.`],
    ],
    faq: [
      [`How much is the Kayo S125?`, `{price} including GST.`],
      [`Is it a go kart?`, `Yes.`],
      [`Do you sell other Kayo models?`, `Yes: quads, buggies and a kids buggy.`],
      [`Is it road legal?`, `Generally not. Check your state rules.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'kayo-predator-125-quad-bike': {
    primary: 'kayo quad bike', secondary: ['kayo quad'],
    lead: `The Kayo Predator 125 is a Kayo quad bike at {price} including GST, delivered Australia-wide.`,
    sec: [
      [`Kayo quad: Predator 125 quad bike`, `This Kayo quad is a 125 quad bike. Compare the [Kayo Bull 125 farm quad](/products/kayo-bull-125-farm-quad-atv/) at the same price and see ${MQ}.`],
      [`Buying advice`, `Read our [ATV buggy guide](/blog/atv-buggy/) and see ${SAFE}.`],
    ],
    faq: [
      [`How much is the Kayo Predator 125?`, `{price} including GST.`],
      [`Is it a quad bike?`, `Yes.`],
      [`Is there a farm quad?`, `Yes, the Kayo Bull 125.`],
      [`Is it road legal?`, `Generally not. Check your state rules.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'kayo-bull-125-farm-quad-atv': {
    primary: 'kayo bull 125', secondary: ['kayo bull 125 price'],
    lead: `The Kayo Bull 125 is a farm quad ATV with a 124cc engine at {price} including GST.`,
    sec: [
      [`Kayo Bull 125 price`, `The Kayo Bull 125 price is {price} including GST. Compare the [Predator 125](/products/kayo-predator-125-quad-bike/) at the same price and see ${MQ}.`],
      [`Buying advice`, `Read our [ATV buggy guide](/blog/atv-buggy/) and see ${SAFE}.`],
    ],
    faq: [
      [`What is the Kayo Bull 125 price?`, `{price} including GST.`],
      [`What engine does it have?`, `124cc per the listing.`],
      [`Is it a farm quad?`, `Yes, listed as a farm quad ATV.`],
      [`Is it road legal?`, `Generally not. Check your state rules.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'hammerhead-mudhead-se-off-road-buggy': {
    primary: 'hammerhead mudhead', secondary: ['hammerhead mudhead se'],
    lead: `The Hammerhead Mudhead SE is an off-road buggy at {price} including GST, delivered Australia-wide.`,
    sec: [
      [`Hammerhead Mudhead SE off-road buggy`, `The Hammerhead Mudhead SE is the adult Hammerhead we list. For children see the [Torpedo](/products/hammerhead-torpedo-kids-buggy-6-5hp/) at $2,253. See ${DB} and the [Hammerhead page](/brands/hammerhead/).`],
      [`Buying advice`, `Read our ${OFF} and see ${SAFE}.`],
    ],
    faq: [
      [`How much is the Hammerhead Mudhead SE?`, `{price} including GST.`],
      [`Is it for adults?`, `It is the adult off-road buggy in our Hammerhead range.`],
      [`Is it road legal?`, `Generally not. Check your state rules.`],
      [`Is there a kids Hammerhead?`, `Yes, the Torpedo.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'hammerhead-torpedo-kids-buggy-6-5hp': {
    primary: 'hammerhead torpedo', secondary: ['hammerhead torpedo buggy'],
    lead: `The Hammerhead Torpedo is a kids buggy with a 208cc, 6.5HP engine at {price} including GST.`,
    sec: [
      [`Hammerhead Torpedo buggy for kids`, `The Hammerhead Torpedo buggy is the kids model in our Hammerhead range. See all ${KB}, the [Mudhead SE](/products/hammerhead-mudhead-se-off-road-buggy/) and our ${KIDG}.`],
      [`Safety first`, `Always supervise, use a helmet and follow age guidance: see the [Australian Government product safety site](https://www.productsafety.gov.au/).`],
    ],
    faq: [
      [`How much is the Hammerhead Torpedo?`, `{price} including GST.`],
      [`What engine does it have?`, `208cc, 6.5HP.`],
      [`Is the Torpedo for kids?`, `Yes, listed as a kids buggy; check age guidance.`],
      [`Is there an adult Hammerhead?`, `Yes, the Mudhead SE.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'go-skitz-adventure-kids-electric-quad-bike': {
    primary: 'go skitz adventure electric quad bike', secondary: ['go skitz quad bike'],
    lead: `The Go Skitz Adventure electric quad bike is a kids model at {price} including GST. It weighs 30 kg and lists a 7 km/h top speed.`,
    sec: [
      [`Go Skitz quad bike for kids`, `This Go Skitz quad bike is the smaller of our two Go Skitz electric quads; the [Go Skitz 2.5](/products/go-skitz-2-5-kids-electric-quad-bike/) is $783. See all ${KB}.`],
      [`Safety first`, `Always supervise and follow age guidance: see the [Australian Government product safety site](https://www.productsafety.gov.au/) and our ${KIDG}.`],
    ],
    faq: [
      [`How much is the Go Skitz Adventure?`, `{price} including GST.`],
      [`How fast is it?`, `7 km/h per the listing.`],
      [`Is it electric?`, `Yes, a kids electric quad bike.`],
      [`Is there a bigger Go Skitz?`, `Yes, the 2.5 at $783.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'go-skitz-2-5-kids-electric-quad-bike': {
    primary: 'go skitz', secondary: ['go skitz 2.5 e-quad bike'],
    lead: `Go Skitz makes the kids electric quad bike we list here: the 2.5 has a 250W motor, 6 inch wheels, a 50 kg weight and an 11 km/h top speed, at {price} including GST.`,
    sec: [
      [`Go Skitz 2.5 e-quad bike`, `The Go Skitz 2.5 e-quad bike is the larger Go Skitz we list. The smaller [Adventure](/products/go-skitz-adventure-kids-electric-quad-bike/) is $420.40. See all ${KB}.`],
      [`Safety first`, `Always supervise and follow age guidance: see our ${KIDG}.`],
    ],
    faq: [
      [`How much is the Go Skitz 2.5?`, `{price} including GST.`],
      [`What motor does it have?`, `250W per the listing.`],
      [`How fast is it?`, `11 km/h per the listing.`],
      [`Is there a smaller Go Skitz?`, `Yes, the Adventure at $420.40.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'gmx-drift-200cc-electric-start-go-kart': {
    primary: 'drift go kart', secondary: ['drift karts', 'drift cart', 'drifting cart'],
    lead: `A drift go kart with a 196cc engine, electric start and a 25 km/h top speed: the GMX Drift 200cc is {price} including GST.`,
    sec: [
      [`GMX drift karts and drift cart options`, `Drift karts like this GMX run on drift wheels so the rear slides. People search drift cart or drifting cart for the same machine. It weighs 110 kg. Compare the [electric Crazy Kart Drifta](/products/crazy-kart-electric-drift-kart-drifta/) at $1,861 and see all ${GK}.`],
      [`Safety and use`, `Drift karts are for closed, safe areas: wear a helmet. See ${SAFE} and our guide to [electric go karts](/blog/go-kart-electric-go-karts/).`],
    ],
    faq: [
      [`How much is the GMX drift go kart?`, `{price} including GST.`],
      [`What engine does it have?`, `196cc with electric start per the listing.`],
      [`How fast is it?`, `25 km/h per the listing.`],
      [`Is there an electric drift cart?`, `Yes, the Crazy Kart Drifta.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'crazy-kart-electric-drift-kart-drifta': {
    primary: 'crazy kart', secondary: ['electric drift kart', 'electric drift go kart', 'electric drift cart', 'crazy karts for sale'],
    lead: `This Crazy Kart is the electric drift kart Drifta at {price} including GST, delivered Australia-wide.`,
    sec: [
      [`Electric drift kart and electric drift go kart`, `The Drifta is an electric drift kart: an electric drift go kart that slides with no engine noise or fuel. Some buyers call it an electric drift cart. Compare the petrol [GMX drift go kart](/products/gmx-drift-200cc-electric-start-go-kart/) at $1,469.`],
      [`Crazy karts for sale: what we list`, `This is the Crazy Kart we list, so crazy karts for sale here means the Drifta. See all ${GK} and our guide to [electric go karts](/blog/go-kart-electric-go-karts/).`],
    ],
    faq: [
      [`How much is the Crazy Kart Drifta?`, `{price} including GST.`],
      [`Is it electric?`, `Yes, an electric drift kart.`],
      [`Do you have other Crazy Karts for sale?`, `This is the one we list; message us about others.`],
      [`How does it compare with a petrol drift kart?`, `See the GMX at $1,469.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'apollo-commander-110cc-automatic-quad-bike': {
    primary: 'apollo commander 110cc', secondary: [],
    lead: `The Apollo Commander 110cc is an automatic quad bike at {price} including GST. It weighs 78 kg and lists a 35 km/h top speed.`,
    sec: [
      [`Apollo Commander 110cc automatic quad`, `Compare the larger [RFZ Commander 125](/products/apollo-rfz-commander-125-quad-bike/) at $2,449 and see ${MQ}.`],
      [`Buying advice`, `Read our [ATV buggy guide](/blog/atv-buggy/) and see ${SAFE}.`],
    ],
    faq: [
      [`How much is the Apollo Commander 110cc?`, `{price} including GST.`],
      [`How fast is it?`, `35 km/h per the listing.`],
      [`Is it automatic?`, `Yes per the name.`],
      [`How heavy is it?`, `78 kg per the listing.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'apollo-rfz-commander-125-quad-bike': {
    primary: '125cc apollo rfz', secondary: ['125 apollo rfz', 'apollo rfz 125 price'],
    lead: `The 125cc Apollo RFZ Commander is a quad bike at {price} including GST, delivered Australia-wide.`,
    sec: [
      [`Apollo RFZ 125 price and models`, `The Apollo RFZ 125 price is {price} including GST. This 125 Apollo RFZ sits between the [110cc Commander](/products/apollo-commander-110cc-automatic-quad-bike/) and the [RFZ Commander 200](/products/apollo-rfz-commander-200-quad-bike/). See ${MQ}.`],
      [`Buying advice`, `Read our [ATV buggy guide](/blog/atv-buggy/) and see ${SAFE}.`],
    ],
    faq: [
      [`What is the Apollo RFZ 125 price?`, `{price} including GST.`],
      [`What engine does it have?`, `125cc per the listing.`],
      [`Is there a larger RFZ?`, `Yes, the RFZ Commander 200.`],
      [`Is it road legal?`, `Generally not. Check your state rules.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'apollo-rfz-falcon-140cc-automatic-quad-bike': {
    primary: 'apollo rfz 140', secondary: ['apollo rfz 140cc'],
    lead: `The Apollo RFZ 140 Falcon is an automatic quad bike with a 140cc engine, a 100 kg weight and a 55 km/h top speed, at {price} including GST.`,
    sec: [
      [`Apollo RFZ 140cc Falcon quad`, `The Apollo RFZ 140cc Falcon is the faster-rated Apollo in our range. Compare the [RFZ Commander 125](/products/apollo-rfz-commander-125-quad-bike/) and see ${MQ}.`],
      [`Buying advice`, `Read our [ATV buggy guide](/blog/atv-buggy/) and see ${SAFE}.`],
    ],
    faq: [
      [`How much is the Apollo RFZ 140?`, `{price} including GST.`],
      [`How fast is it?`, `55 km/h per the listing.`],
      [`Is it automatic?`, `Yes per the name.`],
      [`How heavy is it?`, `100 kg per the listing.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'apollo-blazer-125cc-quad-bike': {
    primary: 'apollo blazer 125cc', secondary: ['apollo blazer'],
    lead: `The Apollo Blazer 125cc is a quad bike with a 12V system at {price} including GST, delivered Australia-wide.`,
    sec: [
      [`Apollo Blazer quad bike`, `The Apollo Blazer is another 125cc option beside the [RFZ Commander 125](/products/apollo-rfz-commander-125-quad-bike/) at $2,449. See ${MQ}.`],
      [`Buying advice`, `Read our [ATV buggy guide](/blog/atv-buggy/) and see ${SAFE}.`],
    ],
    faq: [
      [`How much is the Apollo Blazer 125cc?`, `{price} including GST.`],
      [`What engine does it have?`, `125cc per the listing.`],
      [`Is it road legal?`, `Generally not. Check your state rules.`],
      [`How does it compare with the RFZ?`, `The RFZ Commander 125 is $2,449.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'apollo-commander-70-kids-quad-bike': {
    primary: 'apollo quad bike', secondary: [],
    lead: `This Apollo quad bike is the Commander 70 for kids: a 70cc quad with a 75 kg weight and a 40 km/h top speed at {price} including GST.`,
    sec: [
      [`Apollo Commander 70 kids quad bike`, `See all ${KB} and ${MQ}. For older riders see the [Apollo RFZ Commander 125](/products/apollo-rfz-commander-125-quad-bike/).`],
      [`Safety first`, `Always supervise, use a helmet and follow age guidance: see our ${KIDG}.`],
    ],
    faq: [
      [`How much is the Apollo Commander 70?`, `{price} including GST.`],
      [`How fast is it?`, `40 km/h per the listing.`],
      [`Is it for kids?`, `It is listed as a kids quad bike; check age guidance.`],
      [`Is there a larger Apollo?`, `Yes, the RFZ range.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'crossfire-blazer-200r-200cc-kids-go-kart-buggy': {
    primary: 'crossfire blazer 200r', secondary: [],
    lead: `The Crossfire Blazer 200R is a 200cc kids go kart buggy at {price} including GST. It weighs 130 kg.`,
    sec: [
      [`Crossfire Blazer 200R kids go kart buggy`, `See all ${GK} and ${KB}. Our ${KIDG} explains what to check.`],
      [`Safety`, `Always supervise, use a helmet and follow age guidance. See ${SAFE}.`],
    ],
    faq: [
      [`How much is the Crossfire Blazer 200R?`, `{price} including GST.`],
      [`What engine does it have?`, `200cc per the listing.`],
      [`How heavy is it?`, `130 kg per the listing.`],
      [`Is it for kids?`, `It is listed as a kids go kart buggy; check age guidance.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'crossfire-600gt-4wd-utility-side-by-side': {
    primary: 'crossfire utv', secondary: ['crossfire side by side'],
    lead: `The Crossfire 600GT is a 4WD utility Crossfire UTV at {price} including GST, with 25 inch wheels.`,
    sec: [
      [`Crossfire side by side: the 600GT`, `This Crossfire side by side is a utility model. Compare the [400GT farm side by side](/products/crossfire-400gt-400cc-efi-farm-side-by-side/) at $11,230.80 and see ${SS}.`],
      [`Buying advice`, `Read our ${GUIDE} and see ${SAFE}.`],
    ],
    faq: [
      [`How much is the Crossfire 600GT?`, `{price} including GST.`],
      [`Is it 4WD?`, `Yes per the name.`],
      [`Is it a Crossfire UTV?`, `Yes, a utility side by side.`],
      [`Is it road legal?`, `Generally not. Check your state rules.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'crossfire-400gt-400cc-efi-farm-side-by-side': {
    primary: 'crossfire buggy', secondary: [],
    lead: `The Crossfire 400GT is a 400cc EFI farm Crossfire buggy at {price} including GST, delivered Australia-wide.`,
    sec: [
      [`Crossfire 400GT farm side by side`, `Compare the [600GT utility](/products/crossfire-600gt-4wd-utility-side-by-side/) at $14,298.20 and see ${SS}.`],
      [`Buying advice`, `Read our ${GUIDE} and see ${SAFE}.`],
    ],
    faq: [
      [`How much is the Crossfire 400GT?`, `{price} including GST.`],
      [`What engine does it have?`, `400cc EFI per the name.`],
      [`Is it a farm model?`, `Yes, a farm side by side.`],
      [`Is it road legal?`, `Generally not. Check your state rules.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'crossfire-x400-atv-quad-bike': {
    primary: 'crossfire atv', secondary: [],
    lead: `The Crossfire X400 is a Crossfire ATV with a 500cc engine at {price} including GST, delivered Australia-wide.`,
    sec: [
      [`Crossfire X400 ATV quad bike`, `Compare the [X600 4WD utility ATV](/products/crossfire-x600-4wd-utility-atv/) at $9,789.20 and see ${MQ}.`],
      [`Buying advice`, `Read our [ATV buggy guide](/blog/atv-buggy/) and see ${SAFE}.`],
    ],
    faq: [
      [`How much is the Crossfire X400?`, `{price} including GST.`],
      [`What engine does it have?`, `500cc per the listing.`],
      [`Is it a quad bike?`, `Yes, an ATV quad bike.`],
      [`Is it road legal?`, `Generally not. Check your state rules.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'crossfire-x600-4wd-utility-atv': {
    primary: 'crossfire x600', secondary: [],
    lead: `The Crossfire X600 is a 4WD utility ATV at {price} including GST. It weighs 288 kg.`,
    sec: [
      [`Crossfire X600 4WD utility ATV`, `Compare the [X400](/products/crossfire-x400-atv-quad-bike/) at $7,839 and see ${MQ}.`],
      [`Buying advice`, `Read our [ATV buggy guide](/blog/atv-buggy/) and see ${SAFE}.`],
    ],
    faq: [
      [`How much is the Crossfire X600?`, `{price} including GST.`],
      [`How heavy is it?`, `288 kg per the listing.`],
      [`Is it 4WD?`, `Yes per the name.`],
      [`Is it road legal?`, `Generally not. Check your state rules.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'crossfire-rover-125-youth-atv': {
    primary: 'crossfire quad bike', secondary: ['crossfire quad'],
    lead: `The Crossfire Rover 125 is a youth Crossfire quad bike with a 125cc engine at {price} including GST.`,
    sec: [
      [`Crossfire quad bike: Rover 125 youth quad`, `This Crossfire quad is a youth ATV. See ${MQ} and ${KB}, and read our ${KIDG}.`],
      [`Safety first`, `Always supervise, use a helmet and follow age guidance. See ${SAFE}.`],
    ],
    faq: [
      [`How much is the Crossfire Rover 125?`, `{price} including GST.`],
      [`What engine does it have?`, `125cc per the listing.`],
      [`Is it a youth quad?`, `Yes, a youth ATV; check age guidance.`],
      [`Is it road legal?`, `Generally not. Check your state rules.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  '50cc-2-stroke-mini-quad-bike': {
    primary: 'mini quad bike', secondary: ['50cc quad', 'mini quad', '50cc childs quad bike', '50cc quad bike for sale'],
    lead: `A mini quad bike with a 50cc 2-stroke engine and 6 inch wheels: this one is {price} including GST.`,
    sec: [
      [`50cc quad bike for sale: mini quad for kids`, `This 50cc quad bike for sale is a mini quad, also searched as a 50cc childs quad bike. See all ${MQ} and ${KB}.`],
      [`Safety and use`, `Supervise children, use a helmet and follow age guidance. See our ${KIDG} and ${SAFE}.`],
    ],
    faq: [
      [`How much is the 50cc mini quad?`, `{price} including GST.`],
      [`What engine does it have?`, `50cc 2-stroke per the listing.`],
      [`Is it a 50cc childs quad bike?`, `It is a mini quad; check age guidance with us.`],
      [`Is it road legal?`, `Generally not. Check your state rules.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'kids-24v-electric-golf-cart-ride-on-with-canopy': {
    primary: 'ride on golf cart', secondary: [],
    lead: `A kids ride on golf cart with a 24V system and a canopy costs {price} including GST.`,
    sec: [
      [`Kids 24V electric golf cart ride-on`, `This ride on golf cart is a kids electric toy. See all ${KB} and our ${KIDG}.`],
      [`Safety`, `Supervise children and follow the age guidance: see the [Australian Government product safety site](https://www.productsafety.gov.au/).`],
    ],
    faq: [
      [`How much is the kids golf cart ride-on?`, `{price} including GST.`],
      [`What voltage is it?`, `24V per the listing.`],
      [`Does it have a canopy?`, `Yes.`],
      [`Is it a real golf cart?`, `No, it is a kids ride-on. See our [golf carts](/golf-carts/) for real carts.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'can-am-maverick-24v-kids-ride-on-buggy': {
    primary: 'can am electric buggy', secondary: [],
    lead: `The Can-Am Maverick is a Can Am electric buggy for kids with a 24V system, at {price} including GST.`,
    sec: [
      [`Kids Can Am buggy: Maverick 24V ride-on`, `This kids Can Am buggy is a ride-on, not a full-size machine. See all ${KB}, the [Can-Am page](/brands/can-am/) and our ${KIDG}.`],
      [`Safety`, `Supervise children and follow age guidance: see the [Australian Government product safety site](https://www.productsafety.gov.au/).`],
    ],
    faq: [
      [`How much is the Can-Am Maverick ride-on?`, `{price} including GST.`],
      [`Is it electric?`, `Yes, 24V.`],
      [`Is it a real Can-Am?`, `It is a kids ride-on buggy.`],
      [`Do you sell full-size Can-Am?`, `Not at present. Message us.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'john-deere-12v-gator-xuv-kids-ride-on': {
    primary: 'john deere electric buggy', secondary: [],
    lead: `The John Deere Gator XUV ride-on is a John Deere electric buggy for kids with a 12V system, at {price} including GST.`,
    sec: [
      [`John Deere Gator XUV kids ride-on`, `This is a kids ride-on, not a full-size Gator. See all ${KB}, the [John Deere page](/brands/john-deere/) and our ${KIDG}.`],
      [`Safety`, `Supervise children and follow age guidance: see the [Australian Government product safety site](https://www.productsafety.gov.au/).`],
    ],
    faq: [
      [`How much is the John Deere Gator ride-on?`, `{price} including GST.`],
      [`Is it electric?`, `Yes, 12V.`],
      [`Is it a full-size Gator?`, `No, a kids ride-on.`],
      [`Do you sell a full-size Gator?`, `Not at present. Message us.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'segway-ninebot-gokart-pro-2-electric-go-kart': {
    primary: 'segway ninebot gokart pro', secondary: ['segway ninebot gokart pro 2', 'ninebot go cart'],
    lead: `The Segway Ninebot GoKart Pro (the Pro 2 model) is an electric go kart with a 450W motor, 43 km/h top speed and up to 25 km of range, at {price} including GST.`,
    sec: [
      [`Segway Ninebot GoKart Pro 2`, `The Segway Ninebot GoKart Pro 2 weighs 48 kg and has a 432Wh battery. Searches for a Ninebot go cart or a Ninebot go kart find this kart. Read our [Ninebot go kart guide](/blog/ninebot-go-kart-segway-gokart-pro-2-guide/).`],
      [`Compare go karts`, `See all ${GK} and the [Segway page](/brands/segway/). Always wear a helmet: see ${SAFE}.`],
    ],
    faq: [
      [`How much is the Ninebot GoKart Pro 2?`, `{price} including GST.`],
      [`How fast is it?`, `43 km/h per the listing.`],
      [`How far does it go?`, `Up to 25 km per the listing.`],
      [`Is it the Segway Ninebot GoKart Pro?`, `It is the Pro 2 model.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'segway-villain-sx10-e-side-by-side': {
    primary: 'segway villain', secondary: [],
    lead: `The Segway Villain SX10 E is an electric side by side at {price} including GST, delivered Australia-wide.`,
    sec: [
      [`Segway Villain SX10 E electric side by side`, `The Segway Villain is the electric side by side in our Segway range. See [electric UTVs](/off-road-buggies/electric-off-road-utvs/) and the [Segway page](/brands/segway/).`],
      [`Buying advice`, `Read our ${GUIDE} and see ${SAFE}.`],
    ],
    faq: [
      [`How much is the Segway Villain SX10 E?`, `{price} including GST.`],
      [`Is it electric?`, `Yes per the name.`],
      [`Is it road legal?`, `Generally not. Check your state rules.`],
      [`Do you sell Segway scooters?`, `No, we list the Villain and the GoKart.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'honda-pioneer-1000-6-side-by-side': {
    primary: 'honda pioneer 1000 for sale', secondary: ['honda pioneer 1000 price australia', 'pioneer 1000'],
    lead: `This Honda Pioneer 1000 for sale is the 1000-6 side by side at {price} including GST, delivered Australia-wide.`,
    sec: [
      [`Honda Pioneer 1000 price in Australia`, `The Honda Pioneer 1000 price Australia buyers pay here is {price} including GST. The Pioneer 1000-6 is a six-seat model. Freight is confirmed before you pay.`],
      [`Comparing side by sides`, `See all ${SS}, the [Honda page](/brands/honda/) and our ${GUIDE}. For safety see ${SAFE}.`],
    ],
    faq: [
      [`What is the Honda Pioneer 1000 price?`, `{price} including GST.`],
      [`Is this the Pioneer 1000-6?`, `Yes, the six-seat model per the name.`],
      [`Do you sell other Pioneer models?`, `Not at present. Message us.`],
      [`Is it road legal?`, `Generally not. Check your state rules.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'kubota-rtv-xg850-sidekick-side-by-side': {
    primary: 'kubota rtv 850 sidekick', secondary: [],
    lead: `The Kubota RTV 850 Sidekick (RTV-XG850) has an 851cc engine, a 64 km/h top speed and a 799 kg weight, at {price} including GST.`,
    sec: [
      [`Kubota RTV XG850 Sidekick side by side`, `Compare the [Kubota RTV520](/products/kubota-rtv520-side-by-side/) at $19,105.10 and see ${SS} and the [Kubota page](/brands/kubota/).`],
      [`Buying advice`, `Read our ${GUIDE} and see ${SAFE}.`],
    ],
    faq: [
      [`How much is the Kubota RTV-XG850 Sidekick?`, `{price} including GST.`],
      [`How fast is it?`, `64 km/h per the listing.`],
      [`What engine does it have?`, `851cc per the listing.`],
      [`Is it road legal?`, `Generally not. Check your state rules.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'kubota-rtv520-side-by-side': {
    primary: 'kubota rtv 520 price', secondary: ['kubota rtv 520'],
    lead: `The Kubota RTV 520 price is {price} including GST for a side by side with a 514cc engine, a 40 km/h top speed and a 625 kg weight.`,
    sec: [
      [`Kubota RTV 520 side by side`, `The Kubota RTV 520 is the lower-priced Kubota we list. Compare the [RTV-XG850 Sidekick](/products/kubota-rtv-xg850-sidekick-side-by-side/) at $28,410.20 and see ${SS}.`],
      [`Buying advice`, `See the [Kubota page](/brands/kubota/), our ${GUIDE} and ${SAFE}.`],
    ],
    faq: [
      [`What is the Kubota RTV 520 price?`, `{price} including GST.`],
      [`How fast is it?`, `40 km/h per the listing.`],
      [`What engine does it have?`, `514cc per the listing.`],
      [`Is it road legal?`, `Generally not. Check your state rules.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'polaris-ranger-xp-1000-hd-side-by-side': {
    primary: 'polaris ranger 1000', secondary: ['polaris ranger xp 1000', 'polaris ranger for sale'],
    lead: `The Polaris Ranger 1000 range includes the XP 1000 HD, a 999cc side by side at {price} including GST, delivered Australia-wide.`,
    sec: [
      [`Polaris Ranger 1000: the XP 1000 HD`, `The Polaris Ranger 1000 line here is the XP 1000 HD, a working side by side. For more seats see the [Ranger Crew XP 1000](/products/polaris-ranger-crew-xp-1000-side-by-side/) at $31,355.10.`],
      [`Polaris Ranger for sale`, `This Polaris Ranger for sale ships with freight confirmed before you pay. See all ${SS}, the [Polaris page](/brands/polaris/) and ${SAFE}.`],
    ],
    faq: [
      [`How much is the Polaris Ranger XP 1000 HD?`, `{price} including GST.`],
      [`What engine does it have?`, `999cc per the listing.`],
      [`Is there a crew model?`, `Yes, the Ranger Crew XP 1000.`],
      [`Is it road legal?`, `Generally not. Check your state rules.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'polaris-rzr-xp-1000-sport-eps-side-by-side': {
    primary: 'polaris rzr 1000', secondary: [],
    lead: `The Polaris RZR XP 1000 Sport EPS is a Polaris RZR 1000 sport side by side at {price} including GST.`,
    sec: [
      [`Polaris RZR XP 1000 Sport EPS`, `Compare the [RZR Trail S 1000](/products/polaris-rzr-trail-s-1000-side-by-side/) at $27,435.10 and the [RZR Pro R](/products/polaris-rzr-pro-r-side-by-side/). See ${SS} and the [Polaris page](/brands/polaris/).`],
      [`Buying advice`, `Read our ${GUIDE} and see ${SAFE}.`],
    ],
    faq: [
      [`How much is the RZR XP 1000 Sport?`, `{price} including GST.`],
      [`Is it a sport model?`, `Yes per the name.`],
      [`Is it road legal?`, `Generally not. Check your state rules.`],
      [`Do you sell the RZR Pro R?`, `Yes, at $56,835.10.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'polaris-rzr-trail-s-1000-side-by-side': {
    primary: 'polaris rzr1000s', secondary: [],
    lead: `The Polaris RZR1000S (RZR Trail S 1000) is a 999cc side by side at {price} including GST.`,
    sec: [
      [`Polaris RZR Trail S 1000`, `The Polaris RZR1000S Trail is the trail model. Compare the [RZR XP 1000 Sport](/products/polaris-rzr-xp-1000-sport-eps-side-by-side/) at $29,395.10 and see ${SS}.`],
      [`Buying advice`, `See the [Polaris page](/brands/polaris/), our ${GUIDE} and ${SAFE}.`],
    ],
    faq: [
      [`How much is the RZR Trail S 1000?`, `{price} including GST.`],
      [`What engine does it have?`, `999cc per the listing.`],
      [`Is it road legal?`, `Generally not. Check your state rules.`],
      [`Is there a sport model?`, `Yes, the RZR XP 1000 Sport.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'polaris-rzr-200-efi-youth-buggy': {
    primary: 'polaris kids buggy', secondary: [],
    lead: `The Polaris RZR 200 EFI is a Polaris kids buggy for youth riders, with a 180cc engine and 24 inch wheels, at {price} including GST.`,
    sec: [
      [`Polaris RZR 200 EFI youth buggy`, `This youth buggy suits younger riders; we also list youth windshields and a youth tyre in [off-road parts](/parts-accessories/off-road-parts/). Read our [Polaris RZR 170 guide](/blog/polaris-rzr-170/) and see ${KB}.`],
      [`Safety first`, `Always supervise, use a helmet and follow age guidance: see ${SAFE}.`],
    ],
    faq: [
      [`How much is the Polaris RZR 200 EFI?`, `{price} including GST.`],
      [`What engine does it have?`, `180cc per the listing.`],
      [`Is it a youth buggy?`, `Yes; check age guidance.`],
      [`Do you sell parts for it?`, `Yes: youth windshields, a bumper and a tyre.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'yamaha-viking-se-3-seat-side-by-side': {
    primary: 'yamaha viking', secondary: ['yamaha viking for sale', 'yamaha viking buggy'],
    lead: `The Yamaha Viking SE is a 3 seat side by side with a 686cc engine at {price} including GST, delivered Australia-wide.`,
    sec: [
      [`Yamaha Viking for sale`, `This Yamaha Viking for sale is the SE three-seater. Yamaha Viking buggy searches find this machine; see ${SS} and the [Yamaha page](/brands/yamaha/).`],
      [`Buying advice`, `Read our ${GUIDE} and see ${SAFE}.`],
    ],
    faq: [
      [`How much is the Yamaha Viking SE?`, `{price} including GST.`],
      [`How many seats does it have?`, `Three per the listing.`],
      [`What engine does it have?`, `686cc per the listing.`],
      [`Is it road legal?`, `Generally not. Check your state rules.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
  'cfmoto-uforce-800-eps-xl-side-by-side': {
    primary: 'cfmoto uforce 800', secondary: ['cf moto uforce', 'cfmoto uforce side by side'],
    lead: `The CFMOTO UFORCE 800 EPS XL is a CFMOTO UFORCE side by side at {price} including GST, delivered Australia-wide.`,
    sec: [
      [`CF Moto UFORCE 800 EPS XL`, `The CF Moto UFORCE here is the 800 with electric power steering. As a CFMOTO UFORCE side by side it sits in ${SS}; see the [CFMOTO page](/brands/cfmoto/).`],
      [`Buying advice`, `Read our ${GUIDE} and see ${SAFE}.`],
    ],
    faq: [
      [`How much is the CFMOTO UFORCE 800?`, `{price} including GST.`],
      [`Does it have power steering?`, `EPS per the name.`],
      [`Do you sell the UFORCE 1000 or 600?`, `Not at present. Message us.`],
      [`Is it road legal?`, `Generally not. Check your state rules.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
};
