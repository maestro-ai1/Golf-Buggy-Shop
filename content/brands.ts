import type { PageCopy } from '@/content/pages';

// Batch 4 copy for the 28 brand pages. Every statement about a brand is limited to what we list (product names, prices and specifications from the catalogue);
// nothing is claimed about a brand's history or origin. Where searchers ask for models we do not list, the page says so and invites an enquiry.
// Headings carry the mapped secondaries; support searches are used or answered as FAQs; each page links to categories and guides and carries one authority source.
const GOLF = '[Golf Australia](https://www.golf.org.au/)';
const CART = '[the golf cart overview on Wikipedia](https://en.wikipedia.org/wiki/Golf_cart)';
const SAFE = '[Safe Work Australia](https://www.safeworkaustralia.gov.au/safety-topic/hazards/quad-bikes)';
const KIDS = '[Australian Government product safety site](https://www.productsafety.gov.au/)';

export const BRANDS: Record<string, PageCopy> = {
  '/brands/mgi/': {
    intro: [
      `Looking for an MGI golf buggy? Shop MGI electric and remote control golf buggies, lithium batteries, chargers and accessories: 27 products from around $38 to $3,184, delivered Australia-wide.`,
      `Our MGI range runs from the ZIP X1, ZIP X3 and ZIP X5 electric buggies to the ZIP Navigator and Ai remote control models, plus the E-Boost pushcart and everything that goes with them.`,
    ],
    guides: [
      { h2: `MGI electric golf buggy range: ZIP X1, ZIP X3 and ZIP X5`, p: [
        `An MGI electric golf buggy takes the effort out of every round. The MGI ZIP X1 starts at around $1,270, the ZIP X3 sits at about $1,520 and the ZIP X5 at about $1,760. Compare them in our [electric golf buggies](/golf-buggies/motorised-electric/) range, and see the [MGI E-Boost pushcart](/products/mgi-e-boost-golf-pushcart/) if you prefer to push.`,
      ] },
      { h2: `MGI remote control golf buggy: ZIP Navigator and Ai Navigator`, p: [
        `The MGI ZIP Navigator, the ZIP Navigator AT all terrain, the Ai 500 and the Ai Navigator GPS+ and Halo models follow your commands hands-free, from around $2,150 to about $3,180. See all [remote control golf buggies](/golf-buggies/remote-control/) and our [buyers guide](/blog/remote-control-golf-buggy-buyers-guide/).`,
      ] },
      { h2: `MGI golf buggies Melbourne and MGI golf buggy Australia delivery`, p: [
        `We deliver MGI golf buggies Melbourne buyers order online, and an MGI golf buggy Australia-wide ships by freight with the cost confirmed before you pay. MGI golf buggies for sale here include GST in every price.`,
      ] },
      { h2: `MGI golf cart, MGI buggy and MGI accessories`, p: [
        `People who search MGI golf cart usually want an MGI buggy: we list MGI buggies, not full-size carts, and our [golf carts](/golf-carts/) are other brands. MGI accessories include a seat, umbrella, cooler bag, travel bag, rain cover and phone holder, MGI batteries run from around $490 to $590 and the lithium charger is about $166. Check the fit for your model, such as the ZIP or the Ai series. See [lithium batteries](/parts-accessories/golf-buggy-parts/lithium-batteries/) and ${GOLF} for club rules on powered buggies.`,
      ] },
      { h2: `MGI battery replacement and MGI zip navigator accessories`, p: [
        `For MGI battery replacement, match the MGI golf buggy battery to your model: the lithium packs we list suit the ZIP and Ai ranges. MGI ZIP Navigator accessories and MGI ZIP Navigator all terrain fittings vary by version, so check the listing or message us. An MGI Ai Navigator GPS+ buggy owner can also ask about the charger. Every MGI electric golf buggy Australia buyers order from us ships with freight confirmed before payment, and questions about MGI golf Australia orders can go to sales@buggiesforsale.com.au.`,
      ] },
    ],
    faqs: [
      [`Which MGI golf buggy should I buy?`, `Choose the ZIP X range for an electric buggy you steer, or the ZIP Navigator and Ai models for hands-free remote control. Compare weight, battery and GPS on each listing.`],
      [`How much is an MGI golf buggy?`, `MGI buggies run from around $880 for the E-Boost pushcart to about $3,180 for the Ai Navigator Halo. All prices include GST.`],
      [`Do you sell MGI batteries and chargers?`, `Yes. MGI lithium batteries are from around $490 to $590, and the Lithium 24V Smart Charger fits the Ai and Zip series.`],
      [`Do you sell MGI golf buggy accessories?`, `Yes: a seat, umbrella, cooler bag, travel bag, rain cover, sand bottle holder and phone holder. See [golf cart accessories](/parts-accessories/golf-cart-accessories/).`],
      [`Do you deliver MGI golf buggies to Melbourne?`, `Yes. We deliver Australia-wide, and freight is confirmed before you pay. See our [delivery page](/delivery/).`],
      [`Do you sell an MGI golf cart?`, `We list MGI buggies and accessories. For ride-in carts see our [golf carts](/golf-carts/).`],
    ],
  },

  '/brands/polaris/': {
    intro: [
      `Looking for a Polaris side by side? We list the Polaris RZR Trail S 1000, RZR XP 1000 Sport, RZR Pro R, Ranger 500, Ranger XP 1000 HD and Ranger Crew XP 1000 side by sides, the RZR 200 EFI youth buggy and a range of Polaris parts.`,
      `Prices run from around $130 for parts to over $56,000 for the RZR Pro R, and every price includes GST.`,
    ],
    guides: [
      { h2: `Polaris buggy and Polaris RZR: sport and youth models`, p: [
        `A Polaris buggy or Polaris RZR is a sport side by side: the RZR Trail S 1000, the RZR XP 1000 Sport EPS and the RZR Pro R. The RZR 200 EFI youth buggy suits younger riders, and our parts include brushguards, bumpers, youth windshields and a Pro Armor youth tyre. See all [side by sides and UTVs](/off-road-buggies/side-by-sides-utvs/).`,
      ] },
      { h2: `Polaris Ranger, Polaris UTV and Polaris side by side UTV`, p: [
        `The Polaris Ranger 500, Ranger XP 1000 HD and Ranger Crew XP 1000 are working side by sides: a Polaris UTV or Polaris side by side UTV with a load bed and room for passengers. Polaris Ranger for sale here comes with the price shown, and Polaris SXS freight is confirmed to your postcode before you pay. Our guide to [UTVs, ATVs and dune buggies](/blog/what-is-a-utv-side-by-side-vs-atv-vs-dune-buggy/) explains the differences.`,
      ] },
      { h2: `Polaris Ranger 1000, Ranger XP 1000 and Ranger side by side models`, p: [
        `The polaris ranger 1000 line is led by the Ranger XP 1000 HD, a polaris ranger utility vehicle with a load bed, and the Crew XP 1000 adds rear seats. Searches for a polaris ranger side by side, polaris ranger utv or polaris ranger for sale land on these listings. For sport driving, a polaris rzr 1000 buyer should look at the RZR XP 1000 Sport and RZR Trail S 1000; the RZR1000S and the polaris razor spelling mean the same family. A polaris kids buggy is the RZR 200 EFI, and a polaris buggy for sale or polaris SXS search finds the whole range.`,
      ] },
      { h2: `Polaris parts, youth buggies and safety`, p: [
        `Browse [off-road parts](/parts-accessories/off-road-parts/) for Polaris brushguards, bumpers and windshields. We do not list Polaris quads or dune buggies. Our guide to the [Polaris RZR 170](/blog/polaris-rzr-170/) covers the youth model, and [Safe Work Australia](https://www.safeworkaustralia.gov.au/safety-topic/hazards/quad-bikes) publishes safety guidance for vehicles like these.`,
      ] },
    ],
    faqs: [
      [`Which Polaris should I buy?`, `Choose a Ranger for work and passengers, or a RZR for sport. The RZR 200 EFI is the youth model.`],
      [`How much is a Polaris side by side?`, `Our Polaris side by sides run from around $10,800 for the youth RZR 200 to over $56,000 for the RZR Pro R. All prices include GST.`],
      [`Do you sell the Polaris Ranger?`, `Yes. We list the Ranger 500, Ranger XP 1000 HD and Ranger Crew XP 1000.`],
      [`Do you sell Polaris parts?`, `Yes: brushguards, bumpers, youth windshields and a youth tyre. See [off-road parts](/parts-accessories/off-road-parts/).`],
      [`Do you sell Polaris quads or dune buggies?`, `Not at present. Message us if you want one sourced.`],
      [`Are Polaris side by sides road legal?`, `Generally not. Check your state rules.`],
    ],
  },

  '/brands/can-am/': {
    intro: [
      `Looking for a Can Am dune buggy or Can Am buggy? We list the Can-Am Maverick 24V Kids Ride-On Buggy at around $685, delivered Australia-wide with GST included.`,
      `We do not list full-size Can-Am machines at present. If you want a Can-Am side by side or Can-Am ATV, message us and we can talk through options.`,
    ],
    guides: [
      { h2: `Can Am buggy and Can Am kids buggy`, p: [
        `The Can-Am Maverick 24V Kids Ride-On Buggy is a can am kids buggy for younger children, with a 24V battery. A can am buggy for kids should be used with supervision, a helmet and a safe open area. See all [kids buggies](/off-road-buggies/kids-buggies/) and our guide to [kids ride-on buggies](/blog/kids-ride-on-buggy/).`,
      ] },
      { h2: `Can Am side by side, Can Am ATV and canam buggy searches`, p: [
        `Searches for a Can Am side by side, Can Am ATV or canam buggy usually mean full-size vehicles. We do not list those, but you can compare similar machines in our [side by sides and UTVs](/off-road-buggies/side-by-sides-utvs/) and [mini quads and ATVs](/off-road-buggies/mini-quads-atvs/).`,
      ] },
      { h2: `Can Am buggy price, Can Am quad and Can Am electric buggy`, p: [
        `The can am buggy price for the kids model is shown on the listing, and a can am electric buggy search means this 24V ride-on, which is a kids buggy for sale. A can am quad, can am quad bikes, can am atv bike or canam atv search is for full-size machines, which we do not list. Kids can am buggy and can am buggy for sale searches point to the Maverick ride-on, and atv quad can am buyers can compare [mini quads and ATVs](/off-road-buggies/mini-quads-atvs/).`,
      ] },
      { h2: `Can Am dune buggy: what we can help with`, p: [
        `If you want a can am dune buggy, see our [dune buggies](/off-road-buggies/dune-buggies/). For product safety guidance on ride-on toys, see the ${KIDS}.`,
      ] },
    ],
    faqs: [
      [`Do you sell Can-Am buggies?`, `We list the Can-Am Maverick 24V Kids Ride-On Buggy. We do not list full-size Can-Am vehicles at present.`],
      [`How much is the Can-Am kids buggy?`, `Around $685, including GST.`],
      [`Do you sell a Can-Am side by side or ATV?`, `Not at present. Message us and we will check what we can source, and see our [side by sides](/off-road-buggies/side-by-sides-utvs/).`],
      [`What age is the kids ride-on for?`, `Check the manufacturer's age and weight guidance on the listing, and always supervise.`],
      [`Do you deliver Australia-wide?`, `Yes. Freight is confirmed before you pay.`],
    ],
  },

  '/brands/clicgear/': {
    intro: [
      `Looking for a Clicgear buggy? We list the Clicgear Model 4.0 Golf Push Buggy at around $381, delivered Australia-wide with GST included.`,
      `Ask us about other Clicgear models, accessories and attachments, and we will check availability and freight.`,
    ],
    guides: [
      { h2: `Clicgear golf buggy: the Clicgear Model 4.0 buggy`, p: [
        `The Clicgear golf buggy we list is the Clicgear Model 4.0, also searched as the clicgear 4.0 buggy or clicgear model 4 buggy. A push buggy has no motor or battery and folds for the boot: see all [push and pull trolleys](/golf-buggies/push-pull-trolleys/).`,
      ] },
      { h2: `Golf buggy Clicgear shoppers: the Clicgear 4.0 buggy and other models`, p: [
        `We list the Model 4.0 only. If you want a Clicgear 3.5 golf buggy or Clicgear 4.5, message us and we will check availability. A golf buggy Clicgear shopper should compare folded size and weight.`,
      ] },
      { h2: `Clicgear buggy accessories and Clicgear attachments`, p: [
        `Clicgear buggy accessories and Clicgear attachments, such as a Clicgear umbrella holder, depend on the model. We list universal [umbrella, phone and drink holders](/parts-accessories/golf-cart-accessories/phone-umbrella-drink-holders/); check the fit for a Clicgear and ask us if unsure. A Clicgear golf cart search usually means this walking buggy; for ride-in carts see [golf carts](/golf-carts/). See also ${GOLF} for club information.`,
      ] },
    ],
    faqs: [
      [`Do you sell the Clicgear Model 4.0?`, `Yes, at around $381 including GST.`],
      [`Do you sell the Clicgear 3.5 or 4.5?`, `We list the 4.0. Message us about other models.`],
      [`Do you sell Clicgear accessories and attachments?`, `Ask us about fit. We list universal holders in [golf cart accessories](/parts-accessories/golf-cart-accessories/).`],
      [`Is a Clicgear a golf cart?`, `No. It is a push golf buggy. For ride-in carts see our [golf carts](/golf-carts/).`],
      [`Do you deliver Australia-wide?`, `Yes. See our [delivery page](/delivery/).`],
    ],
  },

  '/brands/motocaddy/': {
    intro: [
      `Shop Motocaddy Australia: the Motocaddy M7 GPS Remote Electric Golf Buggy at around $2,250 and the Motocaddy S1 DHC Electric Golf Buggy at around $1,180, delivered Australia-wide with GST included.`,
      `Compare the Motocaddy golf buggy range with our other electric and remote buggies.`,
    ],
    guides: [
      { h2: `Motocaddy M7 and Motocaddy M7 remote`, p: [
        `The Motocaddy M7 is a GPS remote electric golf buggy, so a Motocaddy M7 remote search points here. See [remote control golf buggies](/golf-buggies/remote-control/) for similar models.`,
      ] },
      { h2: `Motocaddy golf buggy and Motocaddy electric golf buggy`, p: [
        `A Motocaddy golf buggy or Motocaddy electric golf buggy moves under its own power, and the S1 DHC adds down-hill control. Compare our [electric golf buggies](/golf-buggies/motorised-electric/), and see the guide to [caddies for golf](/blog/caddies-for-golf/).`,
      ] },
      { h2: `Motocaddy golf carts and where to buy Motocaddy`, p: [
        `Motocaddy golf carts searches usually mean these electric buggies: we do not list ride-in carts under this brand, so see our [golf carts](/golf-carts/) for those. For golf gear background, see [golf equipment on Wikipedia](https://en.wikipedia.org/wiki/Golf_equipment). Message us for Motocaddy accessories.`,
      ] },
    ],
    faqs: [
      [`Which Motocaddy do you sell?`, `The M7 GPS Remote and the S1 DHC electric golf buggies.`],
      [`How much is the Motocaddy M7?`, `Around $2,250, including GST.`],
      [`Does the Motocaddy M7 have remote control?`, `Yes, the M7 is listed as a GPS remote electric golf buggy. Check the listing for details.`],
      [`Do you sell Motocaddy accessories?`, `Message us with your model; we list universal [accessories](/parts-accessories/golf-cart-accessories/).`],
      [`Do you deliver Motocaddy buggies Australia-wide?`, `Yes. Freight is confirmed before you pay.`],
    ],
  },

  '/brands/yamaha/': {
    intro: [
      `Looking for a Yamaha buggy? We list the Yamaha Viking SE 3 Seat Side by Side at around $23,800, plus Yamaha G29 seat covers, a Yamaha G29 LED light kit and lithium battery packages for Yamaha G19, G22 and G29 golf carts.`,
      `We do not list new Yamaha golf carts at present, but we can help with Yamaha golf cart parts and upgrades.`,
    ],
    guides: [
      { h2: `Yamaha Viking and Yamaha side by side UTV`, p: [
        `The Yamaha Viking SE is a three-seat Yamaha side by side UTV with a 686cc engine. A Yamaha buggy for property work or trails is covered in our [side by sides and UTVs](/off-road-buggies/side-by-sides-utvs/), and the Viking 700 searches usually mean this machine. Check the Viking SE specification on the listing.`,
      ] },
      { h2: `Yamaha golf carts, Yamaha golf cart parts and Yamaha golf buggy accessories`, p: [
        `Yamaha golf carts for sale are not listed here, but Yamaha golf cart accessories and parts are: the G29 Luxury Padded Seat Covers, the G29 LED Deluxe Light Kit and PRO-Li lithium packages for Yamaha G19, G22 and G29 carts. A Yamaha golf cart parts Australia search starts with [golf buggy parts](/parts-accessories/golf-buggy-parts/) and our [lithium batteries](/parts-accessories/golf-buggy-parts/lithium-batteries/). Yamaha golf carts Brisbane and Australia-wide buyers can order parts for delivery.`,
      ] },
      { h2: `Yamaha buggy for sale, Yamaha buggy price and Yamaha 1000 buggy searches`, p: [
        `A yamaha buggy for sale here is the Viking SE, and the yamaha buggy price is shown on the listing with GST included. The Viking is a yamaha viking buggy, and yamaha buggy 4x4 searches usually mean a side by side like it (check the drive details on the listing); we do not list a yamaha 1000 buggy or a petrol yamaha golf buggy, and the yamaha side by side price starts at the Viking. Yamaha golf carts Australia-wide and yamaha golf cart prices Australia buyers ask about are for sourced carts, so message us.`,
      ] },
      { h2: `Yamaha golf buggy parts and prices`, p: [
        `Yamaha golf buggy parts Australia buyers need most are batteries and accessories. Yamaha golf cart prices vary with model and age, so message us if you want a cart sourced. Read about the [used golf carts](/golf-carts/used/) we list, and see ${CART}.`,
      ] },
    ],
    faqs: [
      [`Do you sell Yamaha golf carts?`, `Not new carts at present. We list Yamaha G29 accessories and lithium packages for G19, G22 and G29 carts. Message us if you want a cart sourced.`],
      [`Do you sell the Yamaha Viking?`, `Yes. The Viking SE 3 Seat Side by Side is around $23,800 including GST.`],
      [`What Yamaha golf cart parts do you sell?`, `Seat covers, an LED light kit and lithium battery packages. See [golf buggy parts](/parts-accessories/golf-buggy-parts/).`],
      [`Do you deliver Yamaha parts to Brisbane and Australia-wide?`, `Yes. Freight is confirmed before you pay.`],
      [`How much is a Yamaha side by side?`, `The Viking SE is around $23,800. All prices include GST.`],
      [`Are Yamaha side by sides road legal?`, `Generally not. Check your state rules.`],
    ],
  },

  '/brands/rovic/': {
    intro: [
      `Shop a Rovic golf buggy: the Rovic RV1S Swivel 2.0 at around $348 and the Rovic RV1C Compact 2.0 at around $332, both push buggies delivered Australia-wide with GST included.`,
      `Choose the RV1S for swivel steering or the RV1C for a compact fold.`,
    ],
    guides: [
      { h2: `Rovic RV1S swivel golf buggy and Rovic RV1S 2.0`, p: [
        `The Rovic RV1S Swivel 2.0, also searched as the rovic rv1s swivel golf buggy or rovic rv1s 2.0, has a swivel front wheel for easy steering. See all [push and pull trolleys](/golf-buggies/push-pull-trolleys/) to compare.`,
      ] },
      { h2: `Rovic RV1C and Rovic golf cart searches`, p: [
        `The Rovic RV1C Compact 2.0 folds smaller. A Rovic golf cart search usually means a Rovic push buggy: these are walking buggies, not ride-in carts, which are in our [golf carts](/golf-carts/). Rovic buyers also add [umbrella and drink holders](/parts-accessories/golf-cart-accessories/phone-umbrella-drink-holders/).`,
      ] },
      { h2: `Rovic buyers guide`, p: [
        `Compare weight, folded size and features across brands, and read our guide to the [best golf push buggy in Australia](/blog/best-golf-push-buggy-australia/). For background on trolleys and bags, see [golf equipment on Wikipedia](https://en.wikipedia.org/wiki/Golf_equipment).`,
      ] },
    ],
    faqs: [
      [`Which Rovic should I buy?`, `Choose the RV1S for swivel steering or the RV1C for a compact fold.`],
      [`How much is a Rovic golf buggy?`, `Around $332 to $348, including GST.`],
      [`Do Rovic buggies fold?`, `Yes. Check the folded size on each listing.`],
      [`Is a Rovic a golf cart?`, `No. It is a push golf buggy. For ride-in carts see [golf carts](/golf-carts/).`],
      [`Do you deliver Australia-wide?`, `Yes. See our [delivery page](/delivery/).`],
    ],
  },

  '/brands/trailmaster/': {
    intro: [
      `Looking for a Trailmaster dune buggy? We list the Trailmaster Cheetah 175cc and 300cc dune buggies and the Challenger 200 buggy, from around $4,560 to $6,220, plus an air filter for the Trailmaster 175 to 300 buggy.`,
      `Every price includes GST and delivery is Australia-wide.`,
    ],
    guides: [
      { h2: `Trailmaster buggy and Trailmaster dune buggy models`, p: [
        `A Trailmaster buggy or Trailmaster dune buggy here is the petrol Cheetah in 175cc or 300cc, or the Challenger 200. Read our [Trailmaster dune buggies guide](/blog/trailmaster-dune-buggies/) and see all [dune buggies](/off-road-buggies/dune-buggies/).`,
      ] },
      { h2: `Trailmaster off road buggy and Trailmaster offroad buggy`, p: [
        `A Trailmaster off road buggy, Trailmaster offroad buggy or Trailmaster cheetah off road buggies search means the same machines. They suit farm tracks, sand and bush trails; check seats and assembly on each listing. See the [off-road buggies](/off-road-buggies/) hub and our [Trailmaster Cheetah Australia guide](/blog/trailmaster-cheetah-australia/).`,
      ] },
      { h2: `Trailmaster buggy for sale, Trailmaster Cheetah for sale and NSW delivery`, p: [
        `A Trailmaster buggy for sale or Trailmaster Cheetah for sale here is delivered by freight, including to NSW, with the cost confirmed before you pay. Trailmaster Cheetah go karts and Trailmaster Cheetah off road carts are other names for the same Cheetah buggy. For safety guidance, see ${SAFE}.`,
      ] },
    ],
    faqs: [
      [`Which Trailmaster should I buy?`, `The Cheetah 175 for lighter use, the Cheetah 300 for more power, or the Challenger 200. Compare each listing.`],
      [`How much is a Trailmaster Cheetah?`, `Around $4,560 for the 175cc and $5,880 for the 300cc. All prices include GST.`],
      [`Do you sell Trailmaster parts?`, `Yes. We list an air filter for the Trailmaster 175 to 300 buggy.`],
      [`Do you deliver a Trailmaster Cheetah to NSW?`, `Yes. We are Sydney-based and deliver Australia-wide.`],
      [`Is a Trailmaster Cheetah a go kart?`, `It is a dune buggy; some people search for it as a go kart. See our [go karts](/off-road-buggies/go-karts/) for karts.`],
    ],
  },

  '/brands/triumph/': {
    intro: [
      `Shop a Triumph golf buggy: the Triumph GTX Plus 3 Wheel Golf Push Buggy at around $353, delivered Australia-wide with GST included.`,
      `It is a push buggy with a three-wheel design that folds for the boot.`,
    ],
    guides: [
      { h2: `Triumph GTX Plus buggy and Triumph golf cart searches`, p: [
        `The Triumph GTX Plus buggy is a 3 wheel push buggy; a Triumph golf cart search usually means this walking buggy, and ride-in carts are in our [golf carts](/golf-carts/). See the [3 wheel golf buggy](/golf-buggies/3-wheel/) page.`,
      ] },
      { h2: `Triumph Outset 2 buggy and Triumph Voyager Deluxe buggy`, p: [
        `We list the GTX Plus. If you are after the Triumph Outset 2 buggy or Triumph Voyager Deluxe buggy, message us and we will check availability. Compare other [push buggies](/golf-buggies/push-pull-trolleys/) in the meantime.`,
      ] },
      { h2: `Triumph golf buggy accessories`, p: [
        `Triumph golf buggy accessories such as holders are universal items in our [accessories](/parts-accessories/golf-cart-accessories/); check the fit. See [golf equipment on Wikipedia](https://en.wikipedia.org/wiki/Golf_equipment) for background.`,
      ] },
    ],
    faqs: [
      [`Do you sell the Triumph GTX Plus?`, `Yes, at around $353 including GST.`],
      [`Do you sell the Triumph Outset 2 or Voyager Deluxe?`, `Message us and we will check availability.`],
      [`Is it a three wheel buggy?`, `Yes, the GTX Plus is a 3 wheel push golf buggy.`],
      [`Do you sell Triumph accessories?`, `Ask us about fit; see [accessories](/parts-accessories/golf-cart-accessories/).`],
      [`Do you deliver Australia-wide?`, `Yes. See our [delivery page](/delivery/).`],
    ],
  },

  '/brands/club-car/': {
    intro: [
      `Looking for a Club Car golf buggy? We list Club Car Tempo and Onward petrol golf carts, the Tempo 2+2 lithium four seater, a refurbished Tempo lithium cart and a used Club Car Precedent, from around $9,800 to $26,950.`,
      `Every price includes GST and delivery is Australia-wide.`,
    ],
    guides: [
      { h2: `Club Car golf buggy for sale and Club Car golf carts for sale`, p: [
        `A Club Car golf buggy for sale or Club Car golf carts for sale here include the Tempo petrol, the Tempo Deluxe, the Onward petrol and a refurbished lithium Tempo. See our [petrol golf carts](/golf-carts/petrol/) and [used golf carts](/golf-carts/used/).`,
      ] },
      { h2: `Club Car electric cart, Club Car Tempo and Club Car Precedent`, p: [
        `A Club Car electric cart option is the Tempo 2+2 Lithium four seater at around $21,070. The Club Car Tempo comes petrol or lithium, and the used 2015 Club Car Precedent four seater is about $9,790. The golf club tempo and club tempo searches usually mean the Club Car Tempo.`,
      ] },
      { h2: `Club Car golf cart parts, charger and Onward`, p: [
        `Club Car golf cart parts and Club Car parts start with batteries: we list PRO-Li lithium packages for the Club Car Precedent and a Club Car esky bracket. A Club Car charger depends on the cart's voltage; message us your model. For Club Car Onward golf cart price and accessories, see the listing and ask us. See [lithium batteries](/parts-accessories/golf-buggy-parts/lithium-batteries/) and ${CART}.`,
      ] },
    ],
    faqs: [
      [`Which Club Car do you sell?`, `The Tempo petrol, Tempo Deluxe, Onward petrol, Tempo 2+2 lithium, a refurbished Tempo lithium and a used Precedent.`],
      [`How much is a Club Car golf cart?`, `From around $9,800 for the used Precedent to $26,950 for the Onward. All prices include GST.`],
      [`Do you sell Club Car parts?`, `Yes. We list lithium packages for the Precedent and an esky bracket; ask for others.`],
      [`Do you sell a Club Car charger?`, `Message us your model and voltage, and see our [chargers](/parts-accessories/golf-buggy-parts/chargers-conversion-kits/).`],
      [`What is the Club Car Onward price?`, `The Onward petrol is around $26,950 including GST.`],
      [`Do you deliver Club Car carts Australia-wide?`, `Yes. Freight is confirmed before you pay.`],
    ],
  },

  '/brands/kubota/': {
    intro: [
      `Looking for a Kubota buggy? We list the Kubota RTV-XG850 Sidekick at around $28,400 and the Kubota RTV520 at around $19,100, both side by sides, delivered Australia-wide with GST included.`,
      `Compare the two Kubota RTV models, built for property work.`,
    ],
    guides: [
      { h2: `Kubota RTV and Kubota side by side`, p: [
        `A Kubota RTV or Kubota side by side is a working utility vehicle. The RTV-XG850 has an 851cc engine and a 64 km/h top speed, and the RTV520 has a 514cc engine and a 40 km/h top speed. See all [side by sides and UTVs](/off-road-buggies/side-by-sides-utvs/).`,
      ] },
      { h2: `Kubota UTV, Kubota RTV for sale and Kubota buggy for sale`, p: [
        `A Kubota UTV, Kubota RTV for sale or Kubota buggy for sale here is a new machine with the price shown, including GST. Kubota side by side for sale searches, Kubota side by side utv searches and Kubota RTV prices are answered by the two listings above. We do not list the Kubota RTV 900; message us if you want one sourced.`,
      ] },
      { h2: `Kubota side by side prices and safety`, p: [
        `Kubota side by side prices start from around $19,100. For safety guidance on vehicles like these see ${SAFE}, and see our guide to [UTVs, ATVs and dune buggies](/blog/what-is-a-utv-side-by-side-vs-atv-vs-dune-buggy/).`,
      ] },
    ],
    faqs: [
      [`Which Kubota RTV do you sell?`, `The RTV-XG850 Sidekick and the RTV520.`],
      [`How much is a Kubota RTV?`, `Around $19,100 for the RTV520 and $28,400 for the RTV-XG850. All prices include GST.`],
      [`How fast is a Kubota RTV?`, `The RTV-XG850 has a 64 km/h top speed and the RTV520 40 km/h, per the listings.`],
      [`Is a Kubota RTV a UTV?`, `Yes. A Kubota RTV is a utility side by side.`],
      [`Do you sell the Kubota RTV 900?`, `Not at present. Message us.`],
    ],
  },

  '/brands/hammerhead/': {
    intro: [
      `Shop Hammerhead buggies: the Hammerhead Mudhead SE Off-Road Buggy at around $3,430 and the Hammerhead Torpedo Kids Buggy 6.5HP at around $2,250, delivered Australia-wide with GST included.`,
      `Choose the Mudhead for adults or the Torpedo for kids.`,
    ],
    guides: [
      { h2: `Hammerhead dune buggy and Hammerhead Mudhead`, p: [
        `The Hammerhead Mudhead SE is a Hammerhead dune buggy style off-road buggy: see our [dune buggies](/off-road-buggies/dune-buggies/) and [side by sides](/off-road-buggies/side-by-sides-utvs/). Mudhead 208 searches usually mean this model.`,
      ] },
      { h2: `Hammerhead buggy for kids: the Torpedo`, p: [
        `The Hammerhead Torpedo Kids Buggy has a 208cc engine and suits older children with supervision: see [kids buggies](/off-road-buggies/kids-buggies/). A Hammerhead torpedo go kart search points here. For safety, see the ${KIDS}.`,
      ] },
      { h2: `Buggy Hammerhead buyers guide`, p: [
        `A buggy Hammerhead shopper should check age and weight limits, assembly and helmets. See our guide to the [off-road buggy](/blog/offroad-buggy/).`,
      ] },
    ],
    faqs: [
      [`Which Hammerhead should I buy?`, `The Mudhead SE for adults or the Torpedo for children.`],
      [`How much is a Hammerhead buggy?`, `Around $2,250 to $3,430, including GST.`],
      [`Is the Torpedo safe for kids?`, `With supervision, helmets and the manufacturer's age guidance. See [kids buggies](/off-road-buggies/kids-buggies/).`],
      [`Do you sell Hammerhead parts?`, `Message us with your model.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },

  '/brands/ezgo/': {
    intro: [
      `Shop EZGO golf buggies and carts: we list used EZGO RXV four seaters (2017 and 2018) and a used EZGO TXT (2007), from around $7,800 to $11,750, plus lithium battery packages for EZGO RXV carts.`,
      `Every price includes GST and delivery is Australia-wide.`,
    ],
    guides: [
      { h2: `EZGO golf buggy and EZGO golf cart: RXV and TXT`, p: [
        `An EZGO golf buggy or EZGO golf cart here is a used four seater: the RXV is 48V and the TXT is 36V. See our [used golf carts](/golf-carts/used/) and our guide to [used golf carts on sale](/blog/used-golf-carts-on-sale/).`,
      ] },
      { h2: `EZGO golf cart for sale, EZGO golf carts Australia and EZ GO electric cart`, p: [
        `An EZGO golf cart for sale, EZGO golf carts Australia-wide or EZ GO electric cart is delivered by freight, with the cost confirmed before you pay. An EZGO RXV golf cart on this site is electric; ask about the age and the battery on the listing.`,
      ] },
      { h2: `EZGO golf buggy parts and EZGO golf cart parts`, p: [
        `EZGO golf buggy parts and EZGO golf cart parts start with batteries: we list PRO-Li lithium packages for the EZGO RXV and an RXV LED light kit. See [golf buggy parts](/parts-accessories/golf-buggy-parts/), [lithium batteries](/parts-accessories/golf-buggy-parts/lithium-batteries/) and EZGO golf cart accessories in [accessories](/parts-accessories/golf-cart-accessories/). For background see ${CART}.`,
      ] },
    ],
    faqs: [
      [`Do you sell EZGO golf carts?`, `Yes, used EZGO RXV and TXT four seaters.`],
      [`How much is an EZGO golf cart?`, `From around $7,800 to $11,750 for the used carts we list. All prices include GST.`],
      [`Do you sell EZGO parts?`, `Yes: lithium packages and an LED light kit for the RXV; ask for others.`],
      [`Are the carts electric?`, `Yes. The RXV is 48V and the TXT is 36V per the listings.`],
      [`Do you deliver EZGO carts Australia-wide?`, `Yes. Freight is confirmed before you pay.`],
    ],
  },

  '/brands/caddytek/': {
    intro: [
      `Shop a Caddytek golf buggy: the Caddytek 11.5 V3 Superlite Deluxe 3 Wheel at around $166 and the CaddyLite EZ-Fold Pro 3 Wheel with Seat at around $264, delivered Australia-wide with GST included.`,
      `Both are three-wheel push buggies; the Pro adds a seat.`,
    ],
    guides: [
      { h2: `Caddytek CaddyLite EZ fold Pro 3 wheel golf buggy`, p: [
        `The Caddytek CaddyLite EZ-Fold Pro 3 Wheel Golf Push Buggy with Seat is a three-wheel push buggy with a seat. See our [3 wheel golf buggy](/golf-buggies/3-wheel/) page to compare.`,
      ] },
      { h2: `Caddytek push cart and Caddytek buggy options`, p: [
        `A Caddytek push cart or Caddytek buggy is a walking buggy: the 11.5 V3 Superlite Deluxe is the lower-priced option. See [push and pull trolleys](/golf-buggies/push-pull-trolleys/) and the [clearance page](/clearance/).`,
      ] },
      { h2: `Caddytek buyers guide`, p: [
        `Compare weight and folded size, and read our guide to [push trolleys](/blog/push-trolley/). For golf background see [Golf Australia](https://www.golf.org.au/).`,
      ] },
    ],
    faqs: [
      [`Which Caddytek should I buy?`, `The 11.5 V3 Superlite Deluxe for the lowest price, or the CaddyLite EZ-Fold Pro for a seat.`],
      [`How much is a Caddytek buggy?`, `Around $166 to $264, including GST.`],
      [`Do Caddytek buggies fold?`, `Yes. Check the folded size on each listing.`],
      [`Do you sell Caddytek accessories?`, `Ask us about fit; see [accessories](/parts-accessories/golf-cart-accessories/).`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },

  '/brands/john-deere/': {
    intro: [
      `Looking for a John Deere buggy? We list the John Deere 12V Gator XUV Kids Ride-On at around $1,225, delivered Australia-wide with GST included.`,
      `We do not list full-size John Deere vehicles at present.`,
    ],
    guides: [
      { h2: `John Deere kids buggy: the Gator XUV ride-on`, p: [
        `The John Deere Gator XUV kids ride-on is a john deere kids buggy with a 12V battery. See all [kids buggies](/off-road-buggies/kids-buggies/) and the guide to [kids ride-on buggies](/blog/kids-ride-on-buggy/).`,
      ] },
      { h2: `Buggy John Deere and John Deere gator buggy searches`, p: [
        `A buggy John Deere search, John Deere gator buggy, John Deere electric buggy or John Deere buggy for sale usually means the full-size Gator. We do not list those; see our [side by sides](/off-road-buggies/side-by-sides-utvs/) for working vehicles, and message us if you want a Gator sourced.`,
      ] },
      { h2: `Safety for kids ride-ons`, p: [`Supervise children and follow the age guidance. See the ${KIDS}.`] },
    ],
    faqs: [
      [`Do you sell John Deere buggies?`, `We list the Gator XUV kids ride-on. We do not list full-size John Deere vehicles.`],
      [`How much is the kids Gator?`, `Around $1,225, including GST.`],
      [`What age is it for?`, `Check the manufacturer's guidance on the listing.`],
      [`Do you sell a full-size John Deere Gator?`, `Not at present. Message us.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },

  '/brands/cfmoto/': {
    intro: [
      `Looking for a CF Moto buggy for sale? We list the CFMOTO UFORCE 800 EPS XL Side by Side at around $19,590, delivered Australia-wide with GST included.`,
      `Compare it with our other side by sides.`,
    ],
    guides: [
      { h2: `CFMOTO side by side and CF Moto UTV: the UFORCE 800`, p: [
        `The CFMOTO UFORCE 800 EPS XL is a CFMOTO side by side and CF Moto UTV with electric power steering. See all [side by sides and UTVs](/off-road-buggies/side-by-sides-utvs/). A CF Moto UFORCE or CFMOTO UFORCE side by side search points here.`,
      ] },
      { h2: `CFMOTO buggy, CF Moto 1000cc buggy and CFMOTO electric buggy`, p: [
        `A CFMOTO buggy is a side by side. We list the 800 and not a CF Moto 1000cc buggy or UFORCE 600; message us if you want one sourced. We do not list a CFMOTO electric buggy; see [electric UTVs](/off-road-buggies/electric-off-road-utvs/).`,
      ] },
      { h2: `CF Moto buggy for sale: delivery and safety`, p: [
        `A CF Moto buggy for sale here ships by freight with the cost confirmed before you pay. For safety see ${SAFE}.`,
      ] },
    ],
    faqs: [
      [`Which CFMOTO do you sell?`, `The UFORCE 800 EPS XL side by side.`],
      [`How much is a CFMOTO side by side?`, `Around $19,590, including GST.`],
      [`Do you sell the UFORCE 1000 or 600?`, `Not at present. Message us.`],
      [`Is it road legal?`, `Generally not. Check your state rules.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },

  '/brands/segway/': {
    intro: [
      `Looking for a Segway buggy? We list the Segway Villain SX10 E Side by Side at around $27,430 and the Segway Ninebot GoKart Pro 2 electric go kart at around $2,840, delivered Australia-wide with GST included.`,
      `We do not list Segway scooters: this page covers the Villain and the GoKart.`,
    ],
    guides: [
      { h2: `Segway go kart: GoKart Pro 2 and Ninebot GoKart Pro`, p: [
        `The Segway Ninebot GoKart Pro 2 is a Segway go kart with a 450W motor, a top speed of 43 km/h and up to 25 km of range. Segway gokart pro 2, ninebot gokart pro and ninebot gokart pro 2 searches all describe this kart. See our [Ninebot go kart guide](/blog/ninebot-go-kart-segway-gokart-pro-2-guide/) and all [go karts](/off-road-buggies/go-karts/).`,
      ] },
      { h2: `Segway buggy: the Villain SX10 E side by side`, p: [
        `The Segway Villain SX10 E is an electric side by side, the Segway buggy of our range. See [electric UTVs](/off-road-buggies/electric-off-road-utvs/). For vehicle safety guidance see ${SAFE}.`,
      ] },
      { h2: `Segway Ninebot GoKart for sale`, p: [
        `A Segway Ninebot GoKart for sale here includes GST and ships Australia-wide. Check the age and weight guidance, and always wear a helmet.`,
      ] },
    ],
    faqs: [
      [`Which Segway do you sell?`, `The Villain SX10 E side by side and the Ninebot GoKart Pro 2.`],
      [`How fast is the Segway GoKart Pro 2?`, `The listing gives a top speed of 43 km/h and a range of up to 25 km.`],
      [`Do you sell Segway scooters?`, `No. We sell the Villain and the GoKart.`],
      [`How much is the Segway GoKart?`, `Around $2,840, including GST.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },

  '/brands/bag-boy/': {
    intro: [
      `Shop a Bag Boy golf buggy: the Bag Boy Nitron Golf Push Buggy at around $374, delivered Australia-wide with GST included.`,
      `It is a push buggy you can compare with our other brands.`,
    ],
    guides: [
      { h2: `Bag Boy Nitron buggy and Bagboy Nitron golf buggy`, p: [
        `The Bag Boy Nitron, also searched as the bag boy nitron buggy or bagboy nitron golf buggy, is a push golf buggy. See all [push and pull trolleys](/golf-buggies/push-pull-trolleys/).`,
      ] },
      { h2: `Bagboy golf buggy and Bag Boy buggy`, p: [
        `A bagboy golf buggy or bag boy buggy shopper should compare weight and folded size. We list the Nitron only; message us about other Bag Boy models. See our guide to the [best golf push buggy in Australia](/blog/best-golf-push-buggy-australia/).`,
      ] },
      { h2: `Bag Boy buyers guide`, p: [`See [golf equipment on Wikipedia](https://en.wikipedia.org/wiki/Golf_equipment) for background, and our [accessories](/parts-accessories/golf-cart-accessories/) for holders.`] },
    ],
    faqs: [
      [`Do you sell the Bag Boy Nitron?`, `Yes, at around $374 including GST.`],
      [`Do you sell other Bag Boy models?`, `Message us.`],
      [`Does it fold?`, `Check the folded size on the listing.`],
      [`Do you sell Bag Boy accessories?`, `Ask about fit; see [accessories](/parts-accessories/golf-cart-accessories/).`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },

  '/brands/big-max/': {
    intro: [
      `Shop a Big Max golf buggy: the Big Max IQ2 360 Golf Push Buggy at around $470, delivered Australia-wide with GST included.`,
      `It is a push buggy with a 360 degree design.`,
    ],
    guides: [
      { h2: `Big Max IQ 360 buggy and Big Max IQ2 360`, p: [
        `The Big Max IQ2 360, also searched as the big max iq 360 buggy, big max iq2 buggy or big max iq2 360, is a push golf buggy. See [push and pull trolleys](/golf-buggies/push-pull-trolleys/).`,
      ] },
      { h2: `Big Max golf cart and Big Max buggy searches`, p: [
        `A Big Max golf cart or Big Max buggy search usually means this walking buggy; ride-in carts are in our [golf carts](/golf-carts/). See our guide to [push trolleys](/blog/push-trolley/).`,
      ] },
      { h2: `Big Max buyers guide`, p: [`Compare weight, folded size and features before you buy. The IQ2 360 is a single model in our range, so decide whether you want a walking push buggy or a motorised option, and compare it against the [electric golf buggies](/golf-buggies/motorised-electric/) if you would rather not push. Delivery is Australia-wide, with freight confirmed before you pay. For club information see [Golf Australia](https://www.golf.org.au/).`] },
    ],
    faqs: [
      [`Do you sell the Big Max IQ2 360?`, `Yes, at around $470 including GST.`],
      [`Is a Big Max a golf cart?`, `No. It is a push golf buggy.`],
      [`Does it fold?`, `Check the folded size on the listing.`],
      [`Do you sell Big Max accessories?`, `Message us; see [accessories](/parts-accessories/golf-cart-accessories/).`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },

  '/brands/honda/': {
    intro: [
      `Looking for a Honda 1000 buggy? We list the Honda Pioneer 1000-6 Side by Side at around $42,900, delivered Australia-wide with GST included.`,
      `Compare it with our other side by sides.`,
    ],
    guides: [
      { h2: `Honda side by side and Honda Pioneer`, p: [
        `The Honda Pioneer 1000-6 is a six-seat Honda side by side, also searched as the Honda 1000 buggy, Honda pioneer 1000 for sale, Honda UTV or Honda SXS. See all [side by sides and UTVs](/off-road-buggies/side-by-sides-utvs/).`,
      ] },
      { h2: `Honda buggy for sale and Honda buggy price`, p: [
        `A Honda buggy for sale here has the price shown, including GST: Honda side by side price is around $42,900, and freight is confirmed before you pay. We do not list other Pioneer sizes such as the 700; message us if you want one sourced.`,
      ] },
      { h2: `Honda Odyssey buggy: what we list`, p: [
        `The Honda Odyssey is a different, older type of Honda buggy. A honda odyssey buggy for sale in Australia, a honda odyssey dune buggy or a honda odyssey dirt buggy is not something we list. For a Honda buggy today, the Pioneer is our model; see ${SAFE} for safety guidance.`,
      ] },
      { h2: `Honda 1000 buggy price and how to compare`, p: [
        `The honda 1000 buggy price is shown on the Pioneer listing, with GST included, and freight is confirmed before you pay. A honda buggy 1000 buyer should compare seats, cargo bed and towing figures against the other machines in our [side by sides and UTVs](/off-road-buggies/side-by-sides-utvs/).`,
      ] },
      { h2: `Honda side by side Australia, Honda SXS and Honda side by side for sale`, p: [
        `A Honda side by side for sale in Australia is the Pioneer 1000-6 here: the Honda side by side price is $42,923 including GST, and Honda side by side utv prices and Honda SXS searches land on the same listing. Freight to your postcode is confirmed before you pay. Compare it with other [side by sides and UTVs](/off-road-buggies/side-by-sides-utvs/).`,
      ] },
    ],
    faqs: [
      [`Which Honda do you sell?`, `The Pioneer 1000-6 side by side.`],
      [`How much is a Honda side by side?`, `Around $42,900, including GST.`],
      [`Do you sell the Honda Odyssey?`, `Not at present. We list the Pioneer.`],
      [`Do you sell other Pioneer models?`, `Message us.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },

  '/brands/powakaddy/': {
    intro: [
      `Shop a PowaKaddy golf buggy in Australia: the PowaKaddy CT6 Electric Golf Buggy at around $1,470 and the PowaKaddy Micra Push Golf Buggy at around $391, delivered Australia-wide with GST included.`,
      `Choose the CT6 for a motor or the Micra for a push buggy.`,
    ],
    guides: [
      { h2: `PowaKaddy CT6 Australia: motor, battery and wheels`, p: [
        `The PowaKaddy CT6 has a 230W motor, a 30V battery and 8 inch wheels. A PowaKaddy CT6 Australia order is delivered by freight; PowaKaddy CT6 accessories, such as umbrella holders, depend on the buggy, so check the fit. See [electric golf buggies](/golf-buggies/motorised-electric/).`,
      ] },
      { h2: `PowaKaddy CT6 accessories and the PowaKaddy Micra`, p: [
        `A PowaKaddy golf buggy can be electric or push: the Micra is the push option. See [push and pull trolleys](/golf-buggies/push-pull-trolleys/) and the guide to [caddies for golf](/blog/caddies-for-golf/).`,
      ] },
      { h2: `PowaKaddy Australia: buying the PowaKaddy golf buggy`, p: [
        `A PowaKaddy golf buggy can be electric or push, and PowaKaddy buyers can order online with freight confirmed before paying. For club information see [Golf Australia](https://www.golf.org.au/).`,
      ] },
    ],
    faqs: [
      [`Which PowaKaddy do you sell?`, `The CT6 electric and the Micra push buggy.`],
      [`How much is the PowaKaddy CT6?`, `Around $1,470, including GST.`],
      [`What are the CT6 specifications?`, `A 230W motor, 30V battery and 8 inch wheels per the listing.`],
      [`Do you sell PowaKaddy accessories?`, `Ask about fit; see [accessories](/parts-accessories/golf-cart-accessories/).`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },

  '/brands/ecar/': {
    intro: [
      `Looking for an ECAR golf cart? Shop ECAR lithium golf carts in two, four, six and eight seat layouts, the Compass, S-Series, IKON and Magnum ranges, plus chargers and accessories: 36 products from around $48 to over $20,000.`,
      `Every price includes GST and delivery is Australia-wide.`,
    ],
    guides: [
      { h2: `ECAR golf buggy, e car golf buggy and ECAR golf cart`, p: [
        `An ECAR golf buggy, e car golf buggy or e car golf cart is a lithium electric cart. See the full [electric golf cart](/golf-carts/electric/) range and our [utility four seater carts](/golf-carts/utility-4-seater/).`,
      ] },
      { h2: `ECAR Compass 4S golf cart and the ECAR range`, p: [
        `The ECAR Compass 4S golf cart is a four-seat cart; the Compass 2S is the two-seat model. The IKON HD suits heavy duty use and the Magnum range goes to eight seats. Compare them in [golf carts](/golf-carts/) and read our guide to [how much a golf cart costs](/blog/how-much-does-a-golf-cart-cost-in-australia/).`,
      ] },
      { h2: `ECAR accessories, chargers and batteries`, p: [
        `ECAR chargers include an orange receptacle and plug, and accessories include floor mats, mirrors and an esky bracket. See [chargers](/parts-accessories/golf-buggy-parts/chargers-conversion-kits/) and ${CART}.`,
      ] },
    ],
    faqs: [
      [`Which ECAR should I buy?`, `Choose by seats and use: Compass and S-Series for resort and estate, IKON HD for heavy duty, Magnum for premium and large groups.`],
      [`How much is an ECAR golf cart?`, `New carts start from around $10,800. All prices include GST.`],
      [`Are ECAR carts lithium?`, `Our ECAR carts are lithium electric.`],
      [`Do you sell ECAR parts and accessories?`, `Yes: chargers, floor mats, mirrors and an esky bracket.`],
      [`Do you deliver ECAR carts Australia-wide?`, `Yes. Freight is confirmed before you pay.`],
    ],
  },

  '/brands/kawasaki/': {
    intro: [
      `Looking for a Kawasaki Teryx? We list the Kawasaki Teryx4 H2 Side by Side at around $57,240, delivered Australia-wide with GST included.`,
      `It is a four-seat Kawasaki side by side for property work and recreation.`,
    ],
    guides: [
      { h2: `Kawasaki side by side: the Teryx4`, p: [
        `The Teryx4 is a Kawasaki side by side. See all [side by sides and UTVs](/off-road-buggies/side-by-sides-utvs/) to compare with other brands.`,
      ] },
      { h2: `Kawasaki buggy for sale, Kawasaki 4x4 buggy and Kawasaki farm buggy`, p: [
        `A Kawasaki buggy for sale here is the Teryx4 H2. A Kawasaki 4x4 buggy or Kawasaki farm buggy search describes the same type of machine, and a Kawasaki buggy 2 seater is a different configuration that we do not list. Freight is confirmed before you pay.`,
      ] },
      { h2: `Kawasaki off road buggy buyers guide`, p: [
        `A Kawasaki off road buggy should suit your terrain, your load and the number of people you carry; the Teryx4 seats four, so check cargo space and towing against the other brands in our range before you decide. Read our guide to [UTVs, ATVs and dune buggies](/blog/what-is-a-utv-side-by-side-vs-atv-vs-dune-buggy/), and see ${SAFE}.`,
      ] },
    ],
    faqs: [
      [`Which Kawasaki do you sell?`, `The Teryx4 H2 side by side.`],
      [`How much is the Kawasaki Teryx?`, `Around $57,240, including GST.`],
      [`Do you sell a 2 seater Kawasaki buggy?`, `Not at present. Message us.`],
      [`Is it road legal?`, `Generally not. Check your state rules.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },

  '/brands/stinger/': {
    intro: [
      `Looking for a Stinger golf buggy? Shop Stinger push buggies from the SG-1 to the SG-6, the SG-4 Crossover remote control buggies and PowerBug electric buggies, seats and accessories: 20 products from around $30 to $1,470.`,
      `Every price includes GST and delivery is Australia-wide.`,
    ],
    guides: [
      { h2: `Stinger golf buggies and Stinger buggy range`, p: [
        `Stinger golf buggies run from the SG-1 at around $234 to the SG-6 at around $460, and several come with a seat kit. See all [push and pull trolleys](/golf-buggies/push-pull-trolleys/) and the [3 wheel golf buggy](/golf-buggies/3-wheel/) page. The Stinger SG-4 and SG-5 are popular models.`,
      ] },
      { h2: `Stinger electric golf buggy: SG-4 Crossover remote`, p: [
        `A Stinger electric golf buggy is the SG-4 Crossover Remote Control Golf Buggy, in Classic, Silver and GT editions at around $1,470. See [remote control golf buggies](/golf-buggies/remote-control/). Our listings also include PowerBug NX electric buggies and accessories.`,
      ] },
      { h2: `Stinger golf buggy review: what to compare`, p: [
        `Before you read a Stinger golf buggy review, compare weight, folded size and seat options on each listing. See our guide to the [best golf push buggy in Australia](/blog/best-golf-push-buggy-australia/) and [golf equipment on Wikipedia](https://en.wikipedia.org/wiki/Golf_equipment).`,
      ] },
    ],
    faqs: [
      [`Which Stinger should I buy?`, `The SG-1 for the lowest price, the SG-4 or SG-5 for features, or the SG-4 Crossover for remote control.`],
      [`How much is a Stinger golf buggy?`, `Push buggies are around $234 to $480 and the remote Crossover is around $1,470. All prices include GST.`],
      [`Do Stinger buggies come with a seat?`, `Some are listed with a seat kit, for example the SG-5 V2.`],
      [`Do you sell Stinger accessories?`, `Yes, including a sand bucket holder kit.`],
      [`Is PowerBug the same brand?`, `PowerBug is a separate brand; its buggies and accessories are listed here for now.`],
    ],
  },

  '/brands/tri-lite/': {
    intro: [
      `Shop a Trilite golf buggy: the Tri-Lite Deluxe 3 Wheel Golf Push Buggy at around $234, a light 5.5 kg three-wheel push buggy delivered Australia-wide with GST included.`,
      `Compare it with our other push buggies.`,
    ],
    guides: [
      { h2: `Tri lite golf buggy and Tri Lite deluxe buggy`, p: [
        `The Tri-Lite Deluxe, also searched as the tri lite golf buggy, tri lite deluxe buggy or trilite deluxe buggy, folds small and weighs 5.5 kg. See the [3 wheel golf buggy](/golf-buggies/3-wheel/) page.`,
      ] },
      { h2: `Trilite golf cart and Trilite buggy searches`, p: [
        `A trilite golf cart or trilite buggy search usually means this walking buggy; ride-in carts are in our [golf carts](/golf-carts/). Tri-Lite accessories such as an umbrella holder are universal; see [holders](/parts-accessories/golf-cart-accessories/phone-umbrella-drink-holders/).`,
      ] },
      { h2: `Tri Lite accessories, umbrella holder and spare parts`, p: [
        `Tri lite golf buggy accessories and trilite golf buggy accessories, including a trilite umbrella holder or trilite golf buggy umbrella holder, are universal items: check the fit on the handle. Trilite golf buggy parts depend on the model, and a tri lite golf buggy review or tri lite deluxe buggy review is best read against weight and fold size on the listing.`,
      ] },
      { h2: `Tri Lite buyers guide`, p: [
        `Compare weight and fold size, and read our [push trolley guide](/blog/push-trolley/). For golf information see [Golf Australia](https://www.golf.org.au/).`,
      ] },
    ],
    faqs: [
      [`Do you sell the Tri-Lite Deluxe?`, `Yes, at around $234 including GST.`],
      [`How much does it weigh?`, `5.5 kg per the listing.`],
      [`Is the Deluxe a three wheel buggy?`, `Yes.`],
      [`Do you sell Tri-Lite accessories?`, `Ask about fit; see [accessories](/parts-accessories/golf-cart-accessories/).`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },

  '/brands/smoothy/': {
    intro: [
      `Shop a golf buggy Smoothy style: the Smoothy Micro Golf Push Buggy at around $244, delivered Australia-wide with GST included.`,
      `It is a compact push buggy.`,
    ],
    guides: [
      { h2: `Smoothy golf buggy and Golf buggy Smoothy`, p: [
        `The Smoothy Micro is a compact push buggy. A golf buggy Smoothy search points here. See [push and pull trolleys](/golf-buggies/push-pull-trolleys/).`,
      ] },
      { h2: `Smoothy golf buggy with seat, price and for sale`, p: [
        `We list the Micro only. A Smoothy golf buggy with seat is not listed; message us if you want one. A Smoothy golf buggy for sale and Smoothy golf buggy price are answered by the listing: around $244 including GST. Compare [3 wheel golf buggies](/golf-buggies/3-wheel/) for seated options.`,
      ] },
      { h2: `Smoothy golf buggy accessories, parts and spare parts`, p: [
        `Smoothy golf buggy accessories, Smoothy golf buggy parts and Smoothy golf buggy spare parts depend on the model, and the Micro is a simple push design with few fittings, so message us with what you need and we will check what we can supply. Wheels, handles and holders differ between buggies, so never assume a part from another brand will fit. See [accessories](/parts-accessories/golf-cart-accessories/) and ${GOLF}.`,
      ] },
    ],
    faqs: [
      [`Do you sell the Smoothy Micro?`, `Yes, at around $244 including GST.`],
      [`Do you sell a Smoothy with a seat?`, `Not at present. Message us.`],
      [`Do you sell Smoothy parts?`, `Message us with the model.`],
      [`Does it fold?`, `Check the folded size on the listing.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },

  '/brands/thomson/': {
    intro: [
      `Shop a Thomson electric golf buggy: the Thomson E5000 Pro Lithium Electric Golf Buggy at around $636, a 12 kg lithium buggy delivered Australia-wide with GST included.`,
      `It is a low-priced electric option.`,
    ],
    guides: [
      { h2: `Thomson E5000 electric golf buggy`, p: [
        `The Thomson E5000 Pro is a lithium electric golf buggy, also searched as the thomson e5000 electric golf buggy. See all [electric golf buggies](/golf-buggies/motorised-electric/) and our guide to the [best electric golf buggy in Australia](/blog/what-is-the-best-electric-golf-buggy-australia/).`,
      ] },
      { h2: `Thomson golf buggy spare parts online`, p: [
        `Thomson golf buggy spare parts online, Thomson golf buggy parts and Thomson golf buggy battery searches: message us with your model and we will check what we can supply. See [lithium batteries](/parts-accessories/golf-buggy-parts/lithium-batteries/).`,
      ] },
      { h2: `Thomson golf buggy and electric trolley options`, p: [
        `A Thomson golf buggy is an electric trolley: it carries the bag and moves under its own power, so a Thomson golf buggy electric trolley search points to the E5000 Pro. Thomson golf buggy accessories such as holders are universal items in our [accessories](/parts-accessories/golf-cart-accessories/). See [electric trolleys](/golf-buggies/caddies-electric-trolleys/) and ${GOLF}.`,
      ] },
    ],
    faqs: [
      [`Do you sell the Thomson E5000?`, `Yes, at around $636 including GST.`],
      [`How much does it weigh?`, `12 kg per the listing.`],
      [`Do you sell Thomson batteries and parts?`, `Message us with your model.`],
      [`Is it lithium?`, `Yes, the E5000 Pro is a lithium electric golf buggy.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },

  '/brands/parmaker/': {
    intro: [
      `Shop a Parmaker golf buggy: the Parmaker Spirit Ride-On Golf Buggy at around $4,060 and the Parmaker Explorer Ghia Ride-On Golf Buggy at around $4,750, delivered Australia-wide with GST included.`,
      `Both are ride-on buggies that seat the golfer.`,
    ],
    guides: [
      { h2: `Parmaker golf buggies: Spirit and Explorer Ghia`, p: [
        `Parmaker golf buggies are ride-on electric buggies; the Spirit has a 12V 38Ah battery. A Parmaker electric golf buggy or Parmaker plus golf buggy search points to these. See [golf buggies with seat](/golf-buggies/ride-on-seated/).`,
      ] },
      { h2: `Parmaker golf cart and Parmaker golf buggies for sale`, p: [
        `A Parmaker golf cart or Parmaker ride on golf buggies for sale search means the same ride-on buggies: they are smaller and cheaper than a [golf cart](/golf-carts/). Read our [single seat golf cart guide](/blog/single-seat-golf-cart/).`,
      ] },
      { h2: `Parmaker buyers guide`, p: [
        `Check range, seat and bag mount, and club rules for powered buggies at [Golf Australia](https://www.golf.org.au/).`,
      ] },
    ],
    faqs: [
      [`Which Parmaker do you sell?`, `The Spirit and the Explorer Ghia ride-on golf buggies.`],
      [`How much is a Parmaker?`, `Around $4,060 to $4,750, including GST.`],
      [`Is it electric?`, `Yes, the Spirit lists a 12V 38Ah battery.`],
      [`Do you sell Parmaker parts?`, `Message us with your model.`],
      [`Do you deliver Australia-wide?`, `Yes.`],
    ],
  },
};
