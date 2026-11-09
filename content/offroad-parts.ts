import type { PageCopy } from '@/content/pages';

// Batch 3 copy: clearance, the 6 off-road sub-categories and the 15 parts and accessories pages. Headings carry the mapped secondaries, real shopper searches
// are used or answered as FAQs, each page links to siblings, brands and guides and carries one high-authority source. Where we do not stock a product
// type the page says so plainly and invites an enquiry; nothing implies stock we do not hold. Prices and ranges come from the catalogue.
export const OFFROAD_PARTS: Record<string, PageCopy> = {
  '/clearance/': {
    intro: [
      `Looking for inexpensive golf carts for sale, a cheap golf buggy or cheap golf carts? Our clearance page highlights our lowest-priced buggies, push buggies and accessories so you can save without compromising on quality.`,
      `Cheap golf buggy for sale options start with push buggies from around $165, and a cheap golf cart starts higher because carts are larger vehicles. This page collects the best entry-level options.`,
    ],
    guides: [
      { h2: `Cheap golf buggy for sale: where the lowest prices are`, p: [
        `Start with [push golf buggies](/golf-buggies/push-pull-trolleys/) if you want the lowest cost: they have no motor or battery, and many fold small. A cheap golf buggy with a motor is next, and you can compare [electric golf buggies](/golf-buggies/motorised-electric/) from around $640. A cheap electric golf buggy is a good middle path.`,
        `Add accessories like umbrella holders and phone holders to reach free delivery over $1,000. Crypto payments (Bitcoin or USDT) receive an extra 10% discount at checkout.`,
      ] },
      { h2: `Cheap golf carts for sale and inexpensive golf carts for sale`, p: [
        `Cheap golf carts for sale and inexpensive golf carts for sale are relative: a new electric cart starts from around $10,800, and [used golf carts](/golf-carts/used/) start lower, from about $4,900. A cheap golf cart is worth it only when the batteries are in good condition, so compare the age and type of the battery as well as the price.`,
      ] },
      { h2: `Cheap golf cart or golf cart auction? What to watch for`, p: [
        `A golf cart auction or marketplace listing can look cheap but may not include warranty, support or a battery check. We do not run auctions: our prices are listed, include GST and come with manufacturer warranty on new products. For a general guide to your consumer rights when buying online, see the [ACCC consumer guide](https://www.accc.gov.au/consumers).`,
      ] },
      { h2: `Golf buggy clearance and getting the best price`, p: [
        `Golf buggy clearance shopping works best when you decide the type first, then compare the delivered price. Check the [delivery page](/delivery/) for freight costs, and read our guide to a [cheap buggy](/blog/cheap-buggy/) if you are comparing different kinds of buggy.`,
      ] },
    ],
    faqs: [
      [`Where can I find cheap golf buggies?`, `Browse the lowest-priced buggies and push buggies on this page, or start with our [push golf buggies](/golf-buggies/push-pull-trolleys/).`],
      [`Do you have cheap golf carts for sale?`, `Our new electric carts start from around $10,800, and our [used golf carts](/golf-carts/used/) start lower. For smaller budgets, a walking buggy is far cheaper.`],
      [`Is cheaper always better?`, `No. Check warranty, support and battery type, and compare the delivered price.`],
      [`Can I get a discount for paying with crypto?`, `Yes. Crypto payments (Bitcoin or USDT) receive an extra 10% discount at checkout.`],
      [`Do you offer bundles?`, `Contact us to put together a bundle with accessories.`],
      [`Do you run a golf cart auction or golf buggy auction?`, `No. Every price is listed on the product page. If you are comparing an auction listing, check warranty, battery condition and freight.`],
      [`Do you have a golf buggy clearance?`, `This page is our clearance: it shows the lowest-priced buggies, carts and accessories at any time.`],
    ],
  },

  '/off-road-buggies/dune-buggies/': {
    intro: [
      `Looking for a dune buggy for sale? Our dune buggy range includes Trailmaster Cheetah 175cc and 300cc buggies, the Challenger 200 and the Hammerhead Mudhead SE, built for sand, trails and farm tracks.`,
      `Prices run from around $3,400 to about $6,200. Choose by engine size, seat count and use, and we help with delivery, assembly questions and accessories.`,
    ],
    guides: [
      { h2: `Dune buggy for sale: choosing a dune buggy`, p: [
        `Engine size drives performance and price. A 175cc buggy suits lighter use, while a 300cc buggy has more power for hills and sand. Check seat count, suspension and brakes, then confirm assembly and delivery details. Our guide to [off-road dune buggies](/blog/off-road-dune-buggy/) and [Trailmaster dune buggies](/blog/trailmaster-dune-buggies/) goes into more detail.`,
      ] },
      { h2: `Beach dune buggy for sale: beach buggies for sale in Australia`, p: [
        `A beach dune buggy for sale suits sand and soft ground, and beach buggies for sale usually share the same light frame and wide tyres. If you want to buy a beach buggy, buy beach buggy Australia-wide from us and have it delivered to your door: a beach buggy for sale Australia buyers can order online is delivered by freight, with the cost confirmed before you pay. Read our [beach buggy for sale guide](/blog/beach-buggy-for-sale-au/) for types, prices and rules.`,
      ] },
      { h2: `Buy dune buggy NSW and dune buggy for sale Australia-wide`, p: [
        `If you want to buy dune buggy NSW, we are based in Sydney and deliver throughout NSW. A dune buggy for sale Australia-wide is delivered by freight, and a two seater buggy or 2 seater dune buggy is available where the model has two seats: check the seat count on each listing. Wondering about two seater petrol buggy options, or a 2 seater buggy for sale? The Trailmaster range is petrol; see the listings above.`,
      ] },
      { h2: `Dune buggy kits Australia: kits and parts`, p: [
        `Dune buggy kits Australia buyers ask about are usually frames and parts for a home build. We do not list complete kits at present, but our [off-road parts](/parts-accessories/off-road-parts/) include carburettors, clutches and brake parts, and you can message us about a kit. For the history of the vehicle, see [dune buggies on Wikipedia](https://en.wikipedia.org/wiki/Dune_buggy).`,
      ] },
    ],
    faqs: [
      [`What is a dune buggy?`, `A dune buggy is a light off-road vehicle built for sand and rough terrain.`],
      [`How much is a dune buggy?`, `Our dune buggies run from around $3,400 to about $6,200 depending on engine and specification, and every price includes GST.`],
      [`Can I buy a dune buggy in NSW?`, `Yes. We are Sydney-based and deliver Australia-wide including NSW.`],
      [`Can I register a dune buggy?`, `Rules vary by state. Check with your transport authority.`],
      [`Are dune buggy kits available?`, `We do not list complete kits at present. Message us about kits and parts, or see our [off-road parts](/parts-accessories/off-road-parts/).`],
      [`Do you sell a 2 seater dune buggy?`, `Check the seat count on each listing. See all [dune buggies](/off-road-buggies/dune-buggies/) above, or our [side by sides](/off-road-buggies/side-by-sides-utvs/) for larger seating.`],
      [`Can I buy a beach buggy in Australia?`, `Yes. Our dune buggies double as beach buggies, and we deliver Australia-wide. Read the [beach buggy guide](/blog/beach-buggy-for-sale-au/).`],
    ],
  },

  '/off-road-buggies/go-karts/': {
    intro: [
      `Shop an electric go kart or a petrol model from our range of go karts for sale. Our go karts from Kayo, GMX, Crazy Kart, Segway, Crossfire and HelmetKarts suit backyards, farms and private tracks, from around $1,420 to about $3,100.`,
      `Electric go karts are quiet and low-maintenance, while petrol go karts offer higher top speeds. Check engine, speed and assembly before ordering.`,
    ],
    guides: [
      { h2: `Electric go kart or petrol go kart?`, p: [
        `Electric karts are quiet and clean, with simpler maintenance. Petrol karts offer higher speeds and longer run times. The Segway Ninebot GoKart Pro 2 is our electric option; see our [Ninebot go kart guide](/blog/ninebot-go-kart-segway-gokart-pro-2-guide/) and the guide to [electric go karts](/blog/go-kart-electric-go-karts/). Always wear a helmet and use go karts where permitted.`,
      ] },
      { h2: `Go kart for sale, off road go kart and adult go kart`, p: [
        `A go kart for sale here is sized for either children or adults, so check the age and weight guidance on the listing. An off road go kart has stronger suspension and tyres than a track kart, and an adult go kart has a bigger frame and engine. Our guide to [electric go karts for adults](/blog/electric-go-kart-for-adults-australia/) explains the options. For kids models see [kids buggies](/off-road-buggies/kids-buggies/) and kiddies go kart searches on that page.`,
      ] },
      { h2: `Drift karts, drift go karts and the Crazy Kart`, p: [
        `Drift karts let the rear wheels slide for fun on smooth surfaces. We list the Crazy Kart Electric Drift Kart Drifta and the GMX Drift 200cc, so a Crazy Kart, a krazy kart or an electric drift kart for kids or adults is a search with real options here. Our guide to the [electric drifting go kart](/blog/electric-drifting-go-kart/) covers what to know before buying.`,
      ] },
      { h2: `Go kart price, petrol go kart and cheap go karts`, p: [
        `Go kart price depends on engine, brand and assembly. Cheap go karts start from around $1,400, and a petrol go kart such as the Kayo S125 sits at the top of the range. See the [how much is a go kart](/blog/how-much-is-a-go-kart/) guide, and for background on the sport and machines see [go karts on Wikipedia](https://en.wikipedia.org/wiki/Go-kart).`,
      ] },
      { h2: `Go karts for adults and electric go karts for sale`, p: [
        `Larger-engine karts such as the HelmetKarts HA-270X and the GMX Drift 200cc are the ones to look at if you want go karts for adults; check size, weight and age guidance on each listing. Electric go karts for sale include the Segway Ninebot GoKart Pro 2 and the Crazy Kart electric drift kart, and other go karts for sale include the Kayo S125. See our [Ninebot go kart guide](/blog/ninebot-go-kart-segway-gokart-pro-2-guide/) and always wear a helmet.`,
      ] },
    ],
    faqs: [
      [`How much is a go kart?`, `Our go karts run from around $1,420 to about $3,100 depending on engine and brand. All prices include GST.`],
      [`How fast does a go kart go?`, `Speed depends on engine size and design. Check each listing for the figures.`],
      [`Are go karts road legal?`, `Generally no. Use them on private land or tracks.`],
      [`Do I need to assemble it?`, `Many go karts arrive part-assembled; check the listing.`],
      [`Do you sell go kart parts?`, `We list a centrifugal clutch for go karts, carburettors and brake parts. See [go kart parts](/parts-accessories/off-road-parts/go-kart-parts-frames/).`],
      [`Do you sell an adult go kart or a drift kart?`, `Yes. The GMX Drift 200cc and the Kayo S125 suit adults; the Crazy Kart Drifta is our electric drift kart.`],
      [`Are cheap go karts any good?`, `Check the warranty, the parts support and the age and weight limit, and compare the delivered price rather than only the sticker price.`],
    ],
  },

  '/off-road-buggies/kids-buggies/': {
    intro: [
      `Looking for a kids go kart? Our kids buggies include youth buggies and electric quads sized for younger riders, from around $245 up to the Polaris RZR 200 youth buggy. Choose from Hammerhead Torpedo, Kayo S70, Crossfire, GO SKITZ and more.`,
      `Always supervise children, use helmets and gear, and follow the manufacturer age and weight guidance.`,
    ],
    guides: [
      { h2: `Kids buggy and kids off road buggy: choosing for a child`, p: [
        `A kids buggy or kids off road buggy should match your child's age, weight and experience. Start with a speed limiter and a safe, open area. Electric quads are quiet and simple to learn on, and petrol buggies offer more power for bigger kids. Our guide to [kids ride-on buggies](/blog/kids-ride-on-buggy/) and [a child's off road buggy](/blog/childs-off-road-buggy/) explains how to choose.`,
      ] },
      { h2: `Childrens electric go kart and kids electric go kart`, p: [
        `A childrens electric go kart or kids electric go kart is quiet and easy to maintain, and electric go kart for kids searches usually mean a small battery kart with a speed limiter. Our [go karts](/off-road-buggies/go-karts/) range includes kart-style buggies for older children, and the electric buggy for kids and childrens electric buggy range includes the GO SKITZ electric quads and ride-on buggies.`,
      ] },
      { h2: `Kids buggy petrol: kids petrol buggy and childrens petrol go kart`, p: [
        `A kids buggy petrol model gives more power for bigger kids, and a kids petrol buggy or childrens petrol buggy such as the Kayo S70 is automatic and easy to ride. A childrens petrol go kart, or a mini RZR style youth buggy like the Polaris RZR 200, suits older children. Always check the age guidance, and see [mini quads](/off-road-buggies/mini-quads-atvs/) for youth quads.`,
      ] },
      { h2: `Safety for kids on buggies`, p: [
        `Supervise children at all times, use helmets, gloves and sturdy shoes, and keep to private land. The [Australian Government product safety site](https://www.productsafety.gov.au/) publishes advice and recalls for children's products and is worth a look before you buy.`,
      ] },
      { h2: `Kids side by side and childrens UTV options`, p: [
        `A kids side by side or childrens UTV is a small off-road buggy sized for younger riders. Our Polaris RZR 200 EFI youth buggy is the closest to a kids side by side, and we list youth windshields, a bumper and a youth tyre for it in [off-road parts](/parts-accessories/off-road-parts/). Check age and weight guidance, always supervise and use a helmet. For an electric option see the [Can-Am Maverick 24V kids ride-on](/products/can-am-maverick-24v-kids-ride-on-buggy/) and our [kids ride-on buggy guide](/blog/kids-ride-on-buggy/).`,
      ] },
    ],
    faqs: [
      [`What kids buggy should I buy?`, `Choose by age and weight. Electric models suit younger kids, petrol models suit older kids.`],
      [`Are kids electric quads safe?`, `With supervision, helmets and sensible limits, they can be a safe first vehicle.`],
      [`How much is a kids buggy?`, `Our kids buggies start from around $245 for ride-ons and $420 for electric quads, and go up for petrol buggies. All prices include GST.`],
      [`Do I need to supervise?`, `Yes, always.`],
      [`What gear do I need?`, `A helmet, gloves and sturdy shoes at minimum.`],
      [`How fast can a 50cc go kart go?`, `Speed depends on the model and any speed limiter. Check each listing, and always start slowly.`],
      [`Can kids drive a dune buggy?`, `Our [dune buggies](/off-road-buggies/dune-buggies/) are sized for adults. For kids, choose a youth buggy or quad from this page.`],
    ],
  },

  '/off-road-buggies/electric-off-road-utvs/': {
    intro: [
      `Looking for an electric side by side or electric UTV? This page collects our electric off-road buggies and electric UTV options: the Segway Villain SX10 E side by side, the Crossfire E5 electric UTV, the Crazy Kart electric drift kart and kids electric quads.`,
      `Electric drive is quiet, clean and easy to maintain, and electric UTV Australia buyers can order any of these online.`,
    ],
    guides: [
      { h2: `Electric UTV for sale and electric UTV Australia`, p: [
        `An electric UTV for sale carries people and gear with low running costs and little servicing. Our electric UTV range runs from the Crossfire E5 two-seater at around $11,800 to the Segway Villain SX10 E at around $27,400. Browse the [side by sides](/off-road-buggies/side-by-sides-utvs/) for petrol options, and see our [UTV, ATV and dune buggy guide](/blog/what-is-a-utv-side-by-side-vs-atv-vs-dune-buggy/).`,
      ] },
      { h2: `Electric off road buggy and electric buggy off road`, p: [
        `An electric off road buggy or electric buggy off road is quiet, low-maintenance and easy to charge from a standard outlet. Electric farm buggy and electric buggies searches usually mean a work-ready model like the Crossfire E5, while kids models are smaller. For something lighter, see [go karts](/off-road-buggies/go-karts/) and [kids buggies](/off-road-buggies/kids-buggies/). See our [electric buggy guide](/blog/electric-buggy/).`,
      ] },
      { h2: `Electric ATV, electric side by side and electric quad`, p: [
        `An electric ATV or electric quad is ridden like a quad, and an electric side by side has seats and a steering wheel. Our kids electric quads are in [mini quads and ATVs](/off-road-buggies/mini-quads-atvs/). For background on how utility vehicles work, see [utility terrain vehicles on Wikipedia](https://en.wikipedia.org/wiki/Utility_terrain_vehicle).`,
      ] },
      { h2: `Electric or petrol off-road?`, p: [
        `Electric vehicles are quiet and cheap to run but have limited range. Petrol vehicles offer long range and quick refuelling. UTV Australia buyers who work a large property often choose petrol; others choose electric for low noise. Ask us if you are unsure.`,
      ] },
      { h2: `Electric side by side Australia and electric UTV price`, p: [
        `An electric side by side in Australia is quiet and has low running costs. Our electric UTV Australia price range runs from about $11,800 for the Crossfire E5 to over $27,000 for the Segway Villain SX10 E, so you can compare an electric utv australia price against petrol models. We do not rank electric UTVs, so the best electric UTV Australia buyers can choose depends on range, seats and load, which we list on each page. For smaller electric machines, our GO SKITZ electric quads are in [mini quads and ATVs](/off-road-buggies/mini-quads-atvs/).`,
      ] },
    ],
    faqs: [
      [`What is an electric UTV?`, `It is a utility vehicle with electric drive, built for work or recreation.`],
      [`How far do electric off-road vehicles go?`, `Range depends on battery and terrain. Check each listing.`],
      [`Are electric UTVs available in Australia?`, `Yes. We list the Crossfire E5 electric UTV and the Segway Villain SX10 E side by side.`],
      [`Do you sell electric kids quads?`, `Yes. See the listings above and [mini quads](/off-road-buggies/mini-quads-atvs/).`],
      [`How do I charge?`, `Most charge from a standard wall outlet. Check each model.`],
      [`How do I choose between a petrol and electric buggy?`, `Think about range, noise and running costs. Electric suits short, frequent use; petrol suits long days.`],
    ],
  },

  '/off-road-buggies/side-by-sides-utvs/': {
    intro: [
      `Looking for a UTV for sale? Shop side by side buggies and UTVs from Kayo, Hammerhead, Polaris, Honda, Kubota, Kawasaki, CFMOTO, Yamaha and Segway. A side by side buggy is a two-seat or larger off-road vehicle for property work, trails and recreation.`,
      `Prices run from around $3,400 to over $57,000. Compare engine size, drive type and assembly details, and ask us about freight to your location.`,
    ],
    guides: [
      { h2: `What is a side by side? UTV and side by side vehicle explained`, p: [
        `A side by side (UTV) seats people beside each other and usually has a load bed. A UTV vehicle handles rough terrain, farm tracks and work duties, and a side by side ATV is the same type of machine. Check engine, transmission and seating before you buy, and read our guide to [UTVs, ATVs and dune buggies](/blog/what-is-a-utv-side-by-side-vs-atv-vs-dune-buggy/).`,
      ] },
      { h2: `UTV side by side for sale and side by side buggy for sale`, p: [
        `A utv side by side for sale, or any other UTV for sale here, ranges from the Kayo S150 at around $4,200 to premium machines such as the Polaris RZR Pro R. A side by side buggy for sale here is delivered Australia-wide, and you can find the cheapest side by side Australia stocks by sorting the listings by price. Browse [Polaris](/brands/polaris/), [Honda](/brands/honda/), [Kubota](/brands/kubota/) and [Kawasaki](/brands/kawasaki/) models.`,
      ] },
      { h2: `UTV and side by side: farm buggies, used UTV for sale and accessories`, p: [
        `A farm buggy for sale is usually a four-wheel drive side by side with a load bed. We list new UTVs with warranty, which can be better value than a used UTV for sale or a second hand UTV for sale; if you are considering a used utv for sale, check the service history and compare against the new price. UTV accessories such as windshields and brushguards are in our [off-road parts](/parts-accessories/off-road-parts/), and our guide to [UTV accessories](/blog/utv-accessories/) explains what to add.`,
      ] },
      { h2: `Safety, rules and delivery for a side by side`, p: [
        `Wear a helmet and use seat belts, keep passengers to the number of seats and keep to private land and permitted areas. [Safe Work Australia](https://www.safeworkaustralia.gov.au/safety-topic/hazards/quad-bikes) publishes safety guidance for quad bikes and similar vehicles. Freight is confirmed to your postcode before you pay.`,
      ] },
      { h2: `Small utility vehicle for sale and utility vehicles for sale`, p: [
        `A small utility vehicle for sale is usually a compact UTV with a load bed, and utility vehicles for sale in Australia range from the Kayo S150 to the Polaris Ranger, Kubota RTV and Honda Pioneer. A utility vehicle Australia buyers order here is delivered by freight with the cost confirmed before you pay, and utility vehicles for sale Australia-wide include the Crossfire 600GT utility model and the 400GT farm model. A utility side by side or utility quad such as the Crossfire X600 is built for work, not just recreation.`,
      ] },
      { h2: `Farm vehicles, side by side all terrain vehicles and 4x4 side by sides`, p: [
        `Farm vehicles for sale and farm utility vehicles are usually four-wheel drive with a load bed: look at the Crossfire 400GT 400cc EFI farm model or the Polaris Ranger. A 4x4 side by side or terrain vehicle is the same family of machine, and a farm side by side is another name for it. Electric options exist too: see the Crossfire E5 and Segway Villain in [electric off-road UTVs](/off-road-buggies/electric-off-road-utvs/). Side by side Australia buyers can ask for the best side by side for their use: compare engine, seats and load rating, and read our [UTV guide](/blog/what-is-a-utv-side-by-side-vs-atv-vs-dune-buggy/).`,
      ] },
    ],
    faqs: [
      [`What is a UTV?`, `A UTV (utility task vehicle) is a work vehicle with seats, a steering wheel and a load bed for work and recreation.`],
      [`What is a side by side UTV and what is the difference between a UTV and an ATV?`, `ATVs are ridden like a quad. UTVs and side by sides have seats and a steering wheel. See [ATV vs UTV](/blog/atv-vs-utv/).`],
      [`How much is a side by side?`, `Our UTVs run from around $3,400 to over $57,000 depending on engine and brand, and every price includes GST.`],
      [`Are they road legal?`, `Generally not. Check your state rules.`],
      [`Do they come assembled?`, `Check each listing for assembly notes.`],
      [`Do you sell a used UTV for sale or second hand UTV?`, `We list new UTVs with warranty. If you are considering a used UTV, message us and we can talk through what to check.`],
      [`Do you sell UTV accessories?`, `Yes. See our [off-road parts](/parts-accessories/off-road-parts/) for windshields, brushguards and bumpers for Polaris models.`],
    ],
  },

  '/off-road-buggies/mini-quads-atvs/': {
    intro: [
      `Looking for quad bikes for sale, such as a 50cc quad bike? Our mini quads and small ATVs include Kayo, Apollo, Crossfire and GO SKITZ quad bikes suited to farm tracks and younger riders, from around $420 to about $9,800. Compare engine size, automatic or manual and age guidance.`,
      `Always use a helmet and follow age and weight guidance.`,
    ],
    guides: [
      { h2: `Quad bike for sale: quad bikes for sale in Australia`, p: [
        `A quad bike or ATV bike 50cc is a small four-wheel bike ridden astride. Our quad bikes for sale range from kids models to farm quads such as the Kayo Bull 125 and the Crossfire X600 4WD utility ATV, and quad bikes Australia-wide ship by freight with the cost confirmed before you pay. For background on how quads differ, see [quad bikes on Wikipedia](https://en.wikipedia.org/wiki/Quad_bike) and our [ATV buggies guide](/blog/atv-buggy/).`,
      ] },
      { h2: `Kids quad bike, quad bike for kids and childrens quad`, p: [
        `A kids quad bike, a quad bike for kids or a childrens quad should have an automatic transmission and a speed limiter. We list the Kayo Storm 70 and Apollo Commander 70 kids quad bikes, the Crossfire Rover 125 youth ATV and the GO SKITZ electric quads. A kids ATV, childrens electric quad bike or electric quad bike is the quietest option for younger children. See also [kids buggies](/off-road-buggies/kids-buggies/).`,
      ] },
      { h2: `Electric quad bike, 4 wheeler and four wheeler options`, p: [
        `An electric quad bike or electric quad suits beginners, and a 4 wheeler or four wheeler is another name for a quad. An all terrain quad or atv quad bike has more suspension and power, and a mini quad bike or 49cc quad bike is the smallest class. Larger engines suit adults and property work.`,
      ] },
      { h2: `Choosing a small quad and staying safe`, p: [
        `Choose automatic quads for beginners and younger riders, and check reverse gear, speed limiter and braking. [Safe Work Australia](https://www.safeworkaustralia.gov.au/safety-topic/hazards/quad-bikes) publishes quad bike safety guidance. Need parts? See [quad bike spare parts](/parts-accessories/off-road-parts/).`,
      ] },
      { h2: `All terrain vehicle, ATV bike for sale and quads for sale`, p: [
        `An all terrain vehicle (ATV) or atv bike is another name for a quad bike. An atv bike for sale here, or any of the quads for sale on this page, is delivered Australia-wide with freight confirmed before you pay. If you want to buy a quad bike, compare the small kids models with the Kayo Bull 125, an atv farm bike with a 124cc engine, and the larger Crossfire X600 and X400 quads. For a quick overview of the types, see our [ATV buggies guide](/blog/atv-buggy/).`,
      ] },
      { h2: `Kids quad, childrens ATV and childs 4 wheeler options`, p: [
        `A kids quad, childrens quad bike or childrens ATV should be sized to the rider. We list kids quad bikes for sale in petrol, such as the Apollo Commander 70 and the Kayo Storm 70, and kids electric quad bike options from GO SKITZ, the quietest choice for younger children. A childrens electric quad, childrens electric atv, kids 4 wheeler or childs 4 wheeler is the same idea in a different name, and a childrens petrol quad or kids quad bike petrol model suits older kids on farm tracks. Check age and weight guidance for every listing, and see our [kids buggies](/off-road-buggies/kids-buggies/) range and the [kids ride-on buggy guide](/blog/kids-ride-on-buggy/). If you are shopping for an atv for kids, always supervise and use a helmet.`,
      ] },
      { h2: `Farm quad, farm ATV and quad bikes and ATVs for adults`, p: [
        `A farm quad or farm atv needs power, a load rack and reliable brakes. The Kayo Bull 125 and Crossfire X600 4WD utility ATV are our farm quad models, and the Crossfire X400 has a 500cc engine. Adult quad bikes, 125cc quad bike, 250cc quad bike and 250cc atv quad bike searches are covered by the 125cc quads from Kayo, Apollo and Crossfire and the 250cc X600. Compare quad bikes and atvs by engine size, drive type and weight, and see [Safe Work Australia](https://www.safeworkaustralia.gov.au/safety-topic/hazards/quad-bikes) for safety guidance. Four wheelers for sale and 4 wheelers for sale are listed with prices from about $420.`,
      ] },
    ],
    faqs: [
      [`What age is a 50cc quad for?`, `It depends on the model. Check manufacturer guidance.`],
      [`Which quad is best for kids?`, `Choose an automatic with a speed limiter, and supervise at all times.`],
      [`How much do quads cost?`, `Our quads run from around $420 to about $9,800 depending on size and brand. All prices include GST.`],
      [`Can I use a quad on the road?`, `Generally no. Check state rules.`],
      [`Do you sell quad parts?`, `Yes. See our [off-road parts](/parts-accessories/off-road-parts/) for carburettors, brake parts and ramps.`],
      [`Do you sell quad bikes for sale in Australia and electric quad bikes?`, `Yes. We list petrol quads and the GO SKITZ electric quad bikes, delivered Australia-wide.`],
      [`Is a 4 wheeler the same as a quad bike?`, `Yes. Quad bike, ATV, four wheeler and 4 wheeler describe the same type of vehicle.`],
    ],
  },

  '/parts-accessories/golf-cart-accessories/': {
    intro: [
      `Upgrade your cart with golf cart accessories: phone and umbrella holders, bags and eskies, seat covers, floor mats, lights, speakers and more, from around $19. We stock golf cart accessories Australia-wide for ECAR, Club Car, EZGO, Yamaha and Tomberlin carts and for MGI and Stinger buggies.`,
      `Small accessories are the easiest way to make a cart or buggy your own.`,
    ],
    guides: [
      { h2: `Popular golf cart accessories`, p: [
        `Seat belts and grab rails add safety. LED kits add visibility. Floor mats and seat covers protect your cart. Holders keep phones, drinks and umbrellas within reach. Browse [holders](/parts-accessories/golf-cart-accessories/phone-umbrella-drink-holders/), [bags and covers](/parts-accessories/golf-cart-accessories/bags-rain-covers-eskies/) and [seat covers and comfort](/parts-accessories/golf-cart-accessories/seat-covers-comfort/). Check fitment notes on each listing.`,
      ] },
      { h2: `Golf buggy accessories and golf buggy accessories Australia`, p: [
        `Golf buggy accessories fit walking buggies: umbrella holders, drink holders, phone holders and bags from MGI, PowerBug and Stinger. Golf buggy accessories Australia buyers order from us ship with the order. Our [push buggies](/golf-buggies/push-pull-trolleys/) and [electric golf buggies](/golf-buggies/motorised-electric/) list compatible accessories.`,
      ] },
      { h2: `Golf cart equipment and golf cart golf accessories`, p: [
        `Golf cart equipment ranges from a steering wheel and mirrors to speakers and lighting, and golf cart golf accessories are the items that suit golfers: bag racks, cooler holders and rain covers. We list golf cart accessories for every seat count, and you can see the full [golf cart parts](/parts-accessories/golf-buggy-parts/) too. For an overview, see [golf carts on Wikipedia](https://en.wikipedia.org/wiki/Golf_cart).`,
      ] },
    ],
    faqs: [
      [`What accessories do golf carts need?`, `Most owners add holders, mats, seat covers, lights and a bag rack.`],
      [`Do you sell golf buggy accessories?`, `Yes, for MGI, Stinger and PowerBug, plus universal holders and bags.`],
      [`Are accessories universal?`, `Some are universal, others model-specific. Check the fitment note on each listing.`],
      [`Do you sell accessories Australia-wide?`, `Yes. Delivery is free over $1,000 to major metro and depot corridors.`],
      [`Can you fit accessories?`, `Ask us for installation advice.`],
      [`Do you sell a golf cart steering wheel?`, `Yes. See the sports steering wheels in our accessories range.`],
    ],
  },

  '/parts-accessories/golf-cart-accessories/phone-umbrella-drink-holders/': {
    intro: [
      `Keep your phone, umbrella and drinks within reach with a golf cart phone holder, from around $19. Our holders fit golf carts and golf buggies and include magnetic and cup-holder style phone mounts, umbrella sets, and sand bottle and drink holders.`,
      `Most holders are simple to fit and suit a wide range of carts and buggies. Check the fitment note on each listing.`,
    ],
    guides: [
      { h2: `Golf cart phone holder and golf cart iphone holder`, p: [
        `A golf cart phone holder or golf cart iphone holder keeps your phone visible for scoring and GPS. Choose the magnetic style for quick on and off, or the cup-holder style if you want it in a drinks slot. An iphone holder for golf cart use should hold the phone firmly over bumps, and a golf phone holder with a case-friendly mount avoids removing the case.`,
      ] },
      { h2: `Golf buggy phone holder and phone holder for golf buggy`, p: [
        `A golf buggy phone holder or phone holder for golf buggy fits a push buggy handle or frame. We list the MGI Buggy Phone Holder and the PowerBug Smart Phone and GPS Holder, and a mobile phone holder for golf buggy searches usually point to these. See our [push golf buggies](/golf-buggies/push-pull-trolleys/) for compatible frames.`,
      ] },
      { h2: `Golf cart umbrella holder, golf buggy umbrella holder and drink holders`, p: [
        `A golf cart umbrella holder or golf buggy umbrella holder keeps the umbrella hands-free; we list umbrella sets and the MGI Telescopic Umbrella. A golf umbrella holder fits most frames, and a golf cart drink holder, golf buggy drink holder or sand bottle holder keeps your drink and divot mix handy. For general golf gear background, see [golf equipment on Wikipedia](https://en.wikipedia.org/wiki/Golf_equipment).`,
      ] },
    ],
    faqs: [
      [`Which golf cart phone holder should I buy?`, `Choose a magnetic style for quick use or a cup-holder style for stability. Check fitment on the listing.`],
      [`Is there a usb charging socket on a golf buggy?`, `Some buggies have one; check the specification table. A phone holder does not charge your phone.`],
      [`Do phone holders fit golf buggies and golf carts?`, `Yes. We list holders for both; check the fitment note.`],
      [`Do you sell a golf buggy umbrella holder?`, `Yes. See the umbrella holder sets and MGI and PowerBug holders above.`],
      [`How much does a holder cost?`, `Holders run from around $19 to about $97. All prices include GST.`],
      [`Do you sell a golf cart drink holder?`, `Yes. See the drink holders above, and our [bags and eskies](/parts-accessories/golf-cart-accessories/bags-rain-covers-eskies/).`],
    ],
  },

  '/parts-accessories/golf-cart-accessories/bags-rain-covers-eskies/': {
    intro: [
      `Carry and protect your gear with a golf buggy bag, from around $48. Our range includes cooler bags, travel and accessories bags, rain covers and bag racks for golf carts and buggies.`,
      `Choose the size and fit for your buggy or cart and check the fitment note on each listing.`,
    ],
    guides: [
      { h2: `Golf buggy bag, golf bag and buggy and golf bag buggy options`, p: [
        `A golf buggy bag keeps valuables and spares in one place, and a golf bag buggy or golf bag and buggy set should suit your frame and your golf bag. We list the MGI Buggy Accessories Bag, the MGI Buggy Travel Bag and a grocery bag. A golf bag accessories search usually points to these, and a golf bag caddy like our rear bag carrier holds a bag on a cart. See [push golf buggies](/golf-buggies/push-pull-trolleys/) for compatible frames.`,
      ] },
      { h2: `Golf buggy rain cover and golf cart rain cover`, p: [
        `A golf buggy rain cover or golf cart rain cover protects your bag and clubs in wet rounds; a rain cover for golf buggy use should fit over the bag and attach securely. A golf cart cover for rain is the same idea for a cart bag. We list the MGI Golf Bag Rain Cover.`,
      ] },
      { h2: `Golf buggy esky, cooler bag and storage bag`, p: [
        `A golf buggy esky or golf buggy cooler bag keeps drinks cold: see the MGI XL Cooler Bag and the esky brackets for ECAR and Club Car Precedent carts. A golf buggy storage bag holds spare gear. For golf gear background see [golf equipment on Wikipedia](https://en.wikipedia.org/wiki/Golf_equipment).`,
      ] },
    ],
    faqs: [
      [`What golf bag should I use with a buggy?`, `Choose a bag that fits your buggy's bag holder, and check the fitment note. Cart and stand bags suit most buggies.`],
      [`Do you sell a golf buggy rain cover?`, `Yes. See the MGI Golf Bag Rain Cover above.`],
      [`Do you sell a golf buggy esky or cooler bag?`, `Yes. We list the MGI XL Cooler Bag and esky brackets for ECAR and Club Car Precedent carts.`],
      [`Do you sell a rear golf bag carrier?`, `Yes. See the rear golf bag carrier and the universal rear bag rack for four seat golf carts.`],
      [`How much do bags and covers cost?`, `They run from around $48 to about $390. All prices include GST.`],
      [`Do you sell a golf bag and buggy combo?`, `Our buggies and bags are sold separately. See [golf buggies](/golf-buggies/) and the bags above.`],
    ],
  },

  '/parts-accessories/golf-cart-accessories/seat-covers-comfort/': {
    intro: [
      `Golf cart accessories for comfort: seat covers, floor mats, seat belts and buggy seats, from around $110. We stock Yamaha G29 padded seat covers, ECAR floor mats, seat belt kits and fold-out buggy seats.`,
      `Comfort upgrades make cart and buggy rides more enjoyable.`,
    ],
    guides: [
      { h2: `Golf cart seat covers, golf buggy seat covers and seat protectors`, p: [
        `Golf cart seat covers and golf cart seat protectors protect and refresh your seats, and golf buggy seat covers suit a buggy seat. We list the Yamaha G29 Luxury Padded Seat Covers, and golf cart seat covers Australia-wide ship by freight. Check the model and year before you order. For buggies, see the MGI Buggy Seat and the PowerBug Seat Kit, and our [golf buggy with seat](/golf-buggies/ride-on-seated/) page.`,
      ] },
      { h2: `Seat belts, floor mats and cabin comfort`, p: [
        `Seat belts add safety on slopes; our seat belt kits fit two and four seat carts. Floor mats protect the floor, and the ECAR floor mats are cut for their models. For background on how seat belts work, see [seat belts on Wikipedia](https://en.wikipedia.org/wiki/Seat_belt).`,
      ] },
      { h2: `Golf cart esky and fan golf cart comfort`, p: [
        `A golf cart esky keeps drinks cold: see the esky brackets in our [bags and eskies](/parts-accessories/golf-cart-accessories/bags-rain-covers-eskies/). We do not list a fan for golf carts at present; ask us if you need one. Browse all [golf cart accessories](/parts-accessories/golf-cart-accessories/).`,
      ] },
    ],
    faqs: [
      [`Do you sell golf cart seat covers?`, `Yes. We list the Yamaha G29 Luxury Padded Seat Covers; ask us for other models.`],
      [`Do you sell seat belts for golf carts?`, `Yes. Seat belt kits are available for two and four seat carts.`],
      [`Do you sell floor mats?`, `Yes. We list ECAR 627 and Magnum floor mats.`],
      [`Do you sell a fan for a golf cart?`, `We do not list one at present. Message us and we can check availability.`],
      [`How much do comfort accessories cost?`, `They run from around $110 to about $490. All prices include GST.`],
      [`Do you sell a golf cart esky?`, `Yes. See the esky brackets in our [bags and eskies](/parts-accessories/golf-cart-accessories/bags-rain-covers-eskies/).`],
    ],
  },

  '/parts-accessories/golf-buggy-parts/': {
    intro: [
      `Shop golf buggy parts: lithium batteries, chargers, wheels, seats and more for golf buggies and golf carts. Our catalogue lists fitment so you can order with confidence, and golf cart parts Australia-wide ship by freight.`,
      `Need a part that is not listed? Contact us and we will help you find it.`,
    ],
    guides: [
      { h2: `Golf cart parts Australia and golf buggy parts Australia`, p: [
        `Golf cart parts Australia buyers need most are batteries, chargers and wheels, and golf buggy parts Australia-wide include batteries, chargers and rear wheels for buggies. Our parts are listed by type: [lithium batteries](/parts-accessories/golf-buggy-parts/lithium-batteries/), [chargers and conversion kits](/parts-accessories/golf-buggy-parts/chargers-conversion-kits/), [wheels, rims and tyres](/parts-accessories/golf-buggy-parts/wheels-rims-tyres/) and [trailers](/parts-accessories/golf-buggy-parts/trailers/).`,
      ] },
      { h2: `Golf carts and parts, and golf cart repair parts`, p: [
        `Golf carts and parts go together: when a cart ages, the battery, charger and wheels are the first parts to replace, and golf cart repair parts such as motors and controllers vary by model. Tell us your make, model and year, and see our [repairs and servicing](/parts-accessories/repairs-servicing/) page for what we can help with. For background on how golf carts work, see [golf carts on Wikipedia](https://en.wikipedia.org/wiki/Golf_cart).`,
      ] },
      { h2: `Club Car golf buggy parts and parts for other brands`, p: [
        `Club Car golf buggy parts start with batteries: we list PRO-Li lithium packages for the Club Car Precedent, plus packages for EZGO RXV, Yamaha and ECAR carts. See our [Club Car](/brands/club-car/) page, and our guide to [lithium batteries for golf carts](/blog/lithium-batteries-for-golf-carts/) explains upgrades.`,
      ] },
    ],
    faqs: [
      [`Do you sell golf buggy parts?`, `Yes. We list lithium batteries, chargers, wheels and more, with fitment notes.`],
      [`How do I know a part will fit?`, `Send us your make, model and year and we will confirm fitment before you order.`],
      [`How do I make a golf buggy go faster?`, `Most speed changes depend on the model and are best discussed with a qualified installer. A lithium upgrade can improve power delivery; see [lithium batteries](/parts-accessories/golf-buggy-parts/lithium-batteries/).`],
      [`Do you sell Club Car golf buggy parts?`, `Yes. We list PRO-Li lithium packages for the Club Car Precedent; ask us for other parts.`],
      [`Do you sell golf cart repair parts?`, `We list batteries, chargers and wheels, and can advise on other parts. Message us with your model.`],
      [`Is there a minimum order?`, `Our minimum order is $250, and delivery is free over $1,000.`],
    ],
  },

  '/parts-accessories/golf-buggy-parts/lithium-batteries/': {
    intro: [
      `Shop golf cart batteries: PRO-Li lithium packages for Club Car Precedent, EZGO RXV, Yamaha and ECAR carts, MGI lithium batteries for buggies and Trojan deep-cycle batteries, from around $320 to about $4,100.`,
      `Check voltage, capacity and fitment before you order, and message us your model if you are unsure.`,
    ],
    guides: [
      { h2: `Golf buggy batteries, golf buggy battery lithium and golf cart battery options`, p: [
        `Golf buggy batteries and a golf buggy battery lithium upgrade save weight and give steady power. A golf cart battery or li ion golf cart battery in lithium needs a compatible charger, so see our [chargers](/parts-accessories/golf-buggy-parts/chargers-conversion-kits/). MGI buggy batteries run from around $510 to $590, and PRO-Li packages are $3,625 for the 105Ah Core and $4,115 for the 150Ah Plus.`,
      ] },
      { h2: `Lithium or lead-acid: Trojan golf cart batteries`, p: [
        `Lead-acid batteries cost less but need watering. We list Trojan golf cart batteries (T-105 6V and T-875 8V) and trojan batteries for golf cart sets, including the 48V set of six. Read our guide to [lithium vs lead-acid golf cart batteries](/blog/lithium-vs-lead-acid-golf-cart-batteries/) and [lithium batteries for golf carts](/blog/lithium-batteries-for-golf-carts/). See [lithium iron phosphate batteries on Wikipedia](https://en.wikipedia.org/wiki/Lithium_iron_phosphate_battery) for the chemistry.`,
      ] },
      { h2: `Golf cart batteries Australia: 48 volt, 8 volt and more`, p: [
        `Golf cart batteries Australia-wide ship by freight. 48 volt golf cart batteries and golf cart batteries 48 volt are the common size for ECAR, Club Car and EZGO carts, and 8 volt golf cart batteries are the lead-acid option. A 12 volt buggy battery suits golf buggies; see [12 volt golf cart batteries](/blog/12-volt-golf-cart-batteries/). Batteries for golf cars follow the same fitment rules: send us your model.`,
      ] },
    ],
    faqs: [
      [`How long do golf buggy batteries last?`, `Lithium batteries typically last longer than lead-acid and keep steady power through the round. Care and charging habits matter.`],
      [`Can I use any battery in an electric golf buggy?`, `No. Voltage, capacity and connectors must match. Send us your model and we will confirm fitment.`],
      [`What amp hours do I need for a golf buggy?`, `It depends on how far you walk and the motor. Check the battery spec on your buggy, and see the capacity on each listing.`],
      [`Are lithium golf cart batteries worth it?`, `They are lighter, charge faster and typically last longer than lead-acid, though they cost more up front. See our [lithium vs lead-acid guide](/blog/lithium-vs-lead-acid-golf-cart-batteries/).`],
      [`Do you sell Trojan batteries?`, `Yes. We list the Trojan T-105 and T-875 deep-cycle batteries and a 48V set of six.`],
      [`How much do golf cart batteries cost?`, `From around $320 for a single lead-acid battery to about $4,100 for a 48V lithium package. All prices include GST.`],
    ],
  },

  '/parts-accessories/golf-buggy-parts/chargers-conversion-kits/': {
    intro: [
      `Shop a golf cart battery charger: MGI lithium chargers, ECAR charger plugs and receptacles and the Lester Summit2 48V on-board charger, from around $97. Match the charger to your battery voltage and chemistry.`,
      `Not sure? Send us your cart or buggy model and battery type and we will confirm the right charger.`,
    ],
    guides: [
      { h2: `Golf cart charger and golf buggy charger`, p: [
        `A golf cart charger or golf buggy charger must suit the battery voltage and type. The MGI Lithium 24V Smart Charger suits Ai and Zip series buggies, and the Lester Summit2 is a 48V on-board charger for golf carts. See our [lithium batteries](/parts-accessories/golf-buggy-parts/lithium-batteries/), and [battery chargers on Wikipedia](https://en.wikipedia.org/wiki/Battery_charger) for background.`,
      ] },
      { h2: `Golf cart batteries and charger, battery replacement and 48V conversion kits`, p: [
        `Golf cart batteries and charger bundles make a battery replacement simple: golf buggy battery replacement means matching voltage and capacity, and a 48v golf cart lithium battery conversion kit Australia buyers ask about is usually a lithium package plus a compatible charger. We list lithium packages for common carts; recharge golf cart batteries only with the correct charger, and message us for a conversion.`,
      ] },
      { h2: `Charging safely`, p: [
        `Charge in a dry, ventilated place and use the charger made for the battery. The MGI Fireproof Charging Box adds protection when charging lithium packs. See our [golf cart accessories](/parts-accessories/golf-cart-accessories/) for other items.`,
      ] },
    ],
    faqs: [
      [`Which golf cart battery charger do I need?`, `The one that matches your battery voltage and chemistry. Send us your model and we will confirm.`],
      [`Do you sell a lithium charger?`, `Yes. See the MGI Lithium 24V Smart Charger for Ai and Zip series.`],
      [`Do you sell an on-board charger?`, `Yes. See the Lester Summit2 48V Golf Cart On-Board Charger.`],
      [`Can I convert a cart to lithium?`, `Yes. We stock lithium packages for common carts; see [lithium batteries](/parts-accessories/golf-buggy-parts/lithium-batteries/).`],
      [`How much does a charger cost?`, `From around $97 to about $590. All prices include GST.`],
      [`Is there a fireproof charging box?`, `Yes. The MGI Fireproof Charging Box is listed above.`],
    ],
  },

  '/parts-accessories/golf-buggy-parts/wheels-rims-tyres/': {
    intro: [
      `Shop golf buggy tires, golf buggy wheels and golf cart wheels, rims and tyres. We stock mag wheel sets in 10, 12 and 14 inch sizes, single wheels and a tyre and rim, from around $126.`,
      `Mag wheels upgrade the look and feel of your cart.`,
    ],
    guides: [
      { h2: `Golf cart wheels, golf cart rims and golf cart wheels and rims`, p: [
        `Golf cart wheels and golf cart rims set the look of the cart. Golf cart wheels and rims in a set of four give a custom look and a firmer stance; we list the REX 10 inch, BULLDOG 10 inch, HEXAGON 12 and 14 inch and TORQUE 12 inch sets. Check wheel size, offset and bolt pattern against your cart before ordering.`,
      ] },
      { h2: `Golf cart tyres, golf cart tires and golf buggy tyres`, p: [
        `Golf cart tyres and golf cart tires wear with use: match the tyre size to the wheel and to your cart. We list a golf cart tyre and new rim in 8 inch, and golf cart wheels and tyres together as a set. Golf buggy tyres and golf buggy tyres wheels for walking buggies include the MGI Rear Wheels for Buggies. For background, see [tyres on Wikipedia](https://en.wikipedia.org/wiki/Tire).`,
      ] },
      { h2: `Choosing wheels for your cart`, p: [
        `Check wheel size, offset and bolt pattern, then ask us for fitment advice. See our [golf cart accessories](/parts-accessories/golf-cart-accessories/) for other upgrades, and [golf buggy parts](/parts-accessories/golf-buggy-parts/) for batteries and chargers.`,
      ] },
    ],
    faqs: [
      [`What size wheels do I need for my golf cart?`, `It depends on the cart. Our sets come in 10, 12 and 14 inch; check wheel size, offset and bolt pattern, or send us your model.`],
      [`Do you sell golf cart tyres?`, `Yes. We list a tyre and new rim in 8 inch and mag wheel sets.`],
      [`Are mag wheels worth it?`, `They upgrade the look and feel of a cart. Check fitment first.`],
      [`How much do golf cart wheels cost?`, `Single wheels start from around $126 and mag wheel sets run up to about $1,570. All prices include GST.`],
      [`Do you sell wheels for golf buggies?`, `Yes. See the MGI Rear Wheels for Buggies.`],
      [`Can I get golf buggy wheels and tyres together?`, `Yes. Our sets include the wheels; for tyres, ask us about the size you need.`],
    ],
  },

  '/parts-accessories/golf-buggy-parts/trailers/': {
    intro: [
      `Need a golf cart trailer? We do not list golf cart trailers online at present, but we can help you work out the size you need and point you to loading and tie-down gear.`,
      `Message us with your cart model and how you plan to tow it, and we will advise.`,
    ],
    guides: [
      { h2: `Golf cart trailer and golf cart trailers for sale`, p: [
        `A golf cart trailer for sale needs the right deck length, load rating and ramp. Golf cart trailers for sale vary a lot in quality, so check the load rating and the ramp length before you buy elsewhere. We list loading ramps and tie-down gear: see our [trailers and tie-downs](/parts-accessories/off-road-parts/trailers-tie-downs/). Our guide to [trailering a golf cart](/blog/trailering-a-golf-cart/) covers sizes, ramps and tie-down points.`,
      ] },
      { h2: `Golf cart and trailer, and golf cart and trailer for sale`, p: [
        `A golf cart and trailer package makes it easy to move a cart between a property and a course. A golf cart and trailer for sale listing should state the trailer load rating against the weight of the cart; golf buggy trailer and golf buggy and trailer for sale searches usually mean a smaller trailer for a walking or ride-on buggy. Weigh the cart first, and tow within your vehicle's limits. For background, see [vehicle trailers on Wikipedia](https://en.wikipedia.org/wiki/Trailer_%28vehicle%29).`,
      ] },
      { h2: `What size trailer do I need for a golf cart?`, p: [
        `Measure the cart's length, width and weight, add the ramp, and choose a deck with some margin. Tie the cart down at the frame points, never the body. Message us your cart model and we will advise.`,
      ] },
    ],
    faqs: [
      [`Do you sell golf cart trailers?`, `We do not list them online at present. Message us with your cart model and we can advise; see also [trailers and tie-downs](/parts-accessories/off-road-parts/trailers-tie-downs/).`],
      [`What size trailer do I need for a golf cart?`, `Measure the length, width and weight of the cart, then choose a deck and load rating with margin. See our [trailering guide](/blog/trailering-a-golf-cart/).`],
      [`How do I tow a golf cart?`, `Load it with rated ramps, tie it down at the frame points and tow within your vehicle's limits. Our [trailering guide](/blog/trailering-a-golf-cart/) has the steps.`],
      [`Do you sell loading ramps?`, `Yes. See the folding loading ramps in [trailers and tie-downs](/parts-accessories/off-road-parts/trailers-tie-downs/).`],
      [`Do you sell a golf buggy trailer?`, `Not at present. Message us if you want one sourced.`],
    ],
  },

  '/parts-accessories/repairs-servicing/': {
    intro: [
      `Searching for golf cart repair near me or golf buggy repairs near me? Tell us your cart or buggy model and the fault, and we will advise on parts and next steps. Golf cart repair near me and golf cart repairs near me searches usually mean you want a local workshop, so ask us what is available in your area.`,
      `Regular servicing keeps carts reliable, and the right parts make a repair last.`,
    ],
    guides: [
      { h2: `Golf buggy service, golf buggy repairs and what to do first`, p: [
        `Note the symptoms, cart model and age, check battery health and chargers, and contact us with photos if possible. A golf buggy service usually covers brakes, tyres, steering, battery and charger. Our [golf buggy parts](/parts-accessories/golf-buggy-parts/) cover the parts we list, and golf buggy repairs often start with a battery or charger fault.`,
      ] },
      { h2: `Golf cart repair near me and golf cart repairs near me`, p: [
        `We sell parts online and deliver Australia-wide, so for hands-on work a local mechanic is usually quickest. Send us the model and fault and we will confirm which parts you may need, including golf car parts and repairs advice. For consumer rights on repairs, see the [ACCC consumer guide](https://www.accc.gov.au/consumers).`,
      ] },
      { h2: `Parts that fix common faults`, p: [
        `A flat range often means a tired battery: see [lithium batteries](/parts-accessories/golf-buggy-parts/lithium-batteries/). A cart that will not charge may need a new charger: see [chargers](/parts-accessories/golf-buggy-parts/chargers-conversion-kits/). Worn tyres or damaged wheels are in [wheels, rims and tyres](/parts-accessories/golf-buggy-parts/wheels-rims-tyres/).`,
      ] },
    ],
    faqs: [
      [`How do I fix my golf buggy?`, `Start with the battery and charger, which cause most faults, then check tyres, brakes and connections. Send us the model and fault and we will advise.`],
      [`Do you repair golf buggies and golf carts?`, `We sell parts online and advise on faults. For hands-on repairs, a local mechanic is best; tell us your area and we will help where we can.`],
      [`Where can I find golf buggy repairs near me?`, `Ask a local golf cart or small-engine mechanic, or message us your postcode and model.`],
      [`Do you service electric golf buggies?`, `We advise on parts and faults. For a service, use a local workshop and tell us what parts you need.`],
      [`Do you have a golf buggy repairs Sydney service?`, `We are Sydney-based but sell parts online and deliver Australia-wide. Message us and we will advise.`],
    ],
  },

  '/parts-accessories/off-road-parts/': {
    intro: [
      `Shop for a quad atv accessory or quad bike spare parts for sale: carburettors, a front brake master cylinder, a centrifugal clutch for go karts, an air filter for the Trailmaster 175 to 300 buggy, loading ramps, a carrier with a tow hitch mount, and brushguards, windshields and bumpers for Polaris youth buggies.`,
      `Prices run from around $29 to about $890. Check fitment on each listing and message us if you are unsure.`,
    ],
    guides: [
      { h2: `Quad atv accessory and atv parts Australia`, p: [
        `A quad atv accessory such as a loading ramp or carrier makes transport easier, and ATV parts Australia buyers need most often are carburettors, clutches and brake parts. We list three carburettors for different engine sizes and a quad front brake master cylinder. See [trailers and tie-downs](/parts-accessories/off-road-parts/trailers-tie-downs/) and [engines and carburettors](/parts-accessories/off-road-parts/engines-carburetors/).`,
      ] },
      { h2: `Go kart kit and go kart replacement parts`, p: [
        `Go kart kit and go kart replacement parts searches usually mean frames, engines and wheels. We list a centrifugal clutch for go karts and carburettors, and can look at other go kart replacement parts if you message us; see [go kart parts](/parts-accessories/off-road-parts/go-kart-parts-frames/). We do not list complete go kart kits at present.`,
      ] },
      { h2: `Buggy spare parts and quad bike parts`, p: [
        `Buggy spare parts include the Trailmaster air filter and Polaris brushguards, windshields and bumpers. Quad parts, quad bike parts Australia buyers ask about, Chinese quad bike parts and side by side parts depend on the model, so send us your make and model. Browse [side by sides](/off-road-buggies/side-by-sides-utvs/) and [mini quads](/off-road-buggies/mini-quads-atvs/). [Safe Work Australia](https://www.safeworkaustralia.gov.au/safety-topic/hazards/quad-bikes) publishes safety guidance for quad bikes.`,
      ] },
    ],
    faqs: [
      [`Do you sell quad bike spare parts?`, `Yes. We list carburettors, a brake master cylinder, a centrifugal clutch and an air filter; message us for others.`],
      [`Do you sell go kart kits?`, `We do not list complete kits at present. We list some parts; message us for others.`],
      [`How do I know a part fits my quad?`, `Send us the make, model, year and engine size and we will confirm.`],
      [`Do you sell side by side parts and accessories?`, `Yes. We list brushguards, windshields and bumpers for Polaris youth buggies.`],
      [`Do you sell ATV accessories Australia-wide?`, `Yes. Loading ramps and a carrier with a tow hitch mount are listed, and we deliver Australia-wide.`],
      [`Do you sell Chinese quad bike parts?`, `Our carburettors suit common Chinese quad and mini bike engines; check the engine size and send us your model.`],
    ],
  },

  '/parts-accessories/off-road-parts/go-kart-parts-frames/': {
    intro: [
      `Looking for a go kart frame? We do not list go kart frames or chassis at present, but we do list go kart parts: a centrifugal clutch for go karts, a front brake master cylinder and carburettors.`,
      `Message us with your kart and what you need, and we will tell you what we can source.`,
    ],
    guides: [
      { h2: `Go kart frame and chassis for go kart`, p: [
        `A go kart frame or chassis for go kart builds sets the wheelbase, seat position and engine mount. We do not list frames today, so if you want a frame, message us the size and engine type. For complete karts see our [go karts](/off-road-buggies/go-karts/), and see [go karts on Wikipedia](https://en.wikipedia.org/wiki/Go-kart) for how karts are built.`,
      ] },
      { h2: `Go kart engine, go kart motor and go kart parts`, p: [
        `Go kart parts include the engine or go kart motor, clutch, brakes and wheels. We list the 25mm centrifugal clutch for go karts and carburettors for several engine sizes: see [engines and carburettors](/parts-accessories/off-road-parts/engines-carburetors/). A motor for go kart builds should match the frame and the clutch.`,
      ] },
      { h2: `Go kart wheels and go kart steering wheel`, p: [
        `Go kart wheels and a go kart steering wheel depend on the kart; kart wheels go kart searches usually want a matched set. We do not list these at present. See our [off-road parts](/parts-accessories/off-road-parts/) for what we stock, including Polaris youth buggy parts and the Trailmaster air filter.`,
      ] },
    ],
    faqs: [
      [`Do you sell go kart frames?`, `Not at present. Message us your kart and what you need and we will tell you what we can source.`],
      [`Do you sell a go kart engine or motor?`, `We list carburettors and a centrifugal clutch. For an engine or go kart motor, message us.`],
      [`What go kart parts do you stock?`, `A 25mm centrifugal clutch, a quad front brake master cylinder, carburettors and an air filter for a Trailmaster buggy.`],
      [`Do you sell go kart wheels?`, `Not at present. Message us your kart size.`],
      [`How do I choose a go kart chassis?`, `Match the frame to the engine, clutch and driver size. Message us your plan.`],
    ],
  },

  '/parts-accessories/off-road-parts/engines-carburetors/': {
    intro: [
      `Looking for a go kart engine sale? We do not list engines at present, but we do list carburettors: a 49cc carburettor for 2 stroke mini bikes and quads, a 22mm carburettor for 110cc and 125cc engines and a 250cc ATV carburettor with cable choke, from around $29.`,
      `Match the carburettor to your engine size and message us if you are unsure.`,
    ],
    guides: [
      { h2: `Go kart engine sale and electric go kart engine`, p: [
        `A go kart engine sale search usually means a petrol engine, and an electric go kart engine means a motor and controller. We do not list either today, so message us what you need. For complete karts see [go karts](/off-road-buggies/go-karts/).`,
      ] },
      { h2: `Motorised buggy, motor buggy and golf buggy electric motor`, p: [
        `A motorised buggy or motor buggy has an engine or motor to move it, and a golf buggy electric motor or motor golf buggy replacement depends on the buggy model. We list [electric golf buggies](/golf-buggies/motorised-electric/) with motors fitted, and can look into parts for them: message us your model.`,
      ] },
      { h2: `Carburettors for quads and mini bikes`, p: [
        `A carburettor mixes air and fuel for the engine; see [carburettors on Wikipedia](https://en.wikipedia.org/wiki/Carburetor). Check the engine size and the mounting size, and fit it with the right jets and gaskets. See our [off-road parts](/parts-accessories/off-road-parts/) for other parts.`,
      ] },
    ],
    faqs: [
      [`Do you sell go kart engines?`, `Not at present. We list carburettors. Message us if you want an engine sourced.`],
      [`Which carburettor do I need?`, `Match it to your engine size: we list 49cc, 22mm (110 to 125cc) and 250cc ATV types.`],
      [`Do you sell an electric go kart engine or motor?`, `Not at present. Message us your kart and the voltage.`],
      [`Do you sell a golf buggy electric motor?`, `We list complete buggies. Message us your model for replacement motor advice.`],
      [`How much does a carburettor cost?`, `From around $29 to about $68. All prices include GST.`],
    ],
  },

  '/parts-accessories/off-road-parts/wheels-tyres/': {
    intro: [
      `Shop buggy wheels, including wheels for a 4 wheel buggy: we list the Polaris Pro Armor Crawler Youth Tyre at around $217 for Polaris youth buggies. Other buggy wheel sizes can be sourced on request.`,
      `Message us your buggy make, model and tyre size and we will confirm what we can supply.`,
    ],
    guides: [
      { h2: `Wheels for buggy and buggy wheels`, p: [
        `Wheels for buggy models depend on the bolt pattern, rim width and tyre size. Buggy wheels and a single buggy wheel can be sourced on request; message us with your measurements. For walking and golf buggies, see [golf buggy wheels](/parts-accessories/golf-buggy-parts/wheels-rims-tyres/). For background on vehicles built for rough ground, see [all-terrain vehicles on Wikipedia](https://en.wikipedia.org/wiki/All-terrain_vehicle).`,
      ] },
      { h2: `4 wheel buggy, wheel buggy and big wheel buggy`, p: [
        `A 4 wheel buggy or wheel buggy is any four-wheeled off-road buggy, and a big wheel buggy has larger tyres for ground clearance. Four wheel buggy and 4 wheel drive buggies, four seater and 4 seat dune buggy searches usually mean complete vehicles: see our [dune buggies](/off-road-buggies/dune-buggies/) and [side by sides](/off-road-buggies/side-by-sides-utvs/).`,
      ] },
      { h2: `Buggy tyres and buggy on wheels`, p: [
        `Buggy tyres should suit the terrain: sand, mud and rock each reward different tread. A buggy on wheels with the wrong tyres loses grip, so tell us the use and we will suggest a size. See [off-road parts](/parts-accessories/off-road-parts/).`,
      ] },
    ],
    faqs: [
      [`Do you sell buggy wheels and tyres?`, `We list the Polaris Pro Armor Crawler Youth Tyre. Message us for other sizes.`],
      [`What size wheels does my buggy need?`, `Check the bolt pattern, rim width and tyre size, or send us your model.`],
      [`Do you sell a 4 wheel buggy?`, `Yes. See our [dune buggies](/off-road-buggies/dune-buggies/) and [side by sides](/off-road-buggies/side-by-sides-utvs/).`],
      [`Do you sell wheels for golf buggies?`, `Yes. See [golf buggy wheels](/parts-accessories/golf-buggy-parts/wheels-rims-tyres/).`],
      [`How much do buggy tyres cost?`, `The Polaris youth tyre is around $217. All prices include GST.`],
    ],
  },

  '/parts-accessories/off-road-parts/trailers-tie-downs/': {
    intro: [
      `Shop buggy trailer gear: folding loading ramps from around $150 to about $890 and an aluminium motorcycle carrier with a tow hitch mount at around $396. We do not list complete buggy trailers at present, so message us if you need one.`,
      `Move your buggy, quad or kart safely with rated ramps and a secure hitch.`,
    ],
    guides: [
      { h2: `Buggy trailer and buggy trailer for sale`, p: [
        `A buggy trailer for sale needs the right deck length and load rating for the vehicle. We list loading ramps and a hitch-mounted carrier, and can look into trailers on request: see our guide to [trailering a golf cart](/blog/trailering-a-golf-cart/) for sizes, ramps and tie-down points. For background on trailers, see [vehicle trailers on Wikipedia](https://en.wikipedia.org/wiki/Trailer_%28vehicle%29).`,
      ] },
      { h2: `Dune buggy trailer, dune buggy and trailer, and dune buggy with trailer`, p: [
        `A dune buggy trailer, dune buggy and trailer package or dune buggy with trailer setup should carry the buggy's full weight with margin. A dune buggy trike with trailer or trike trailer needs its own checks. Our [dune buggies](/off-road-buggies/dune-buggies/) list weights where available, and a buggy with trailer is easiest to load with rated ramps.`,
      ] },
      { h2: `Ramps, tie-downs and safe loading`, p: [
        `Use rated ramps, tie the vehicle down at the frame points and check straps before you drive. We list the ATV Folding Ramp (680kg), the Folding Aluminium Loading Ramp (2.3m) and the Folding Loading Ramps (800kg pair). For safety guidance on quad bikes, see [Safe Work Australia](https://www.safeworkaustralia.gov.au/safety-topic/hazards/quad-bikes).`,
      ] },
    ],
    faqs: [
      [`Do you sell a buggy trailer?`, `Not at present. We list ramps and a hitch-mounted carrier. Message us if you want a trailer sourced.`],
      [`What ramps do you sell?`, `The ATV Folding Ramp (680kg), the Folding Aluminium Loading Ramp (2.3m) and the Folding Loading Ramps (800kg pair).`],
      [`Can I carry a buggy with trailer behind my car?`, `Check the trailer load rating against the buggy's weight and your vehicle's towing limit.`],
      [`Do you sell tie-downs?`, `Message us for tie-down advice and options.`],
      [`How much do ramps cost?`, `From around $150 to about $890. All prices include GST.`],
    ],
  },

  '/parts-accessories/off-road-parts/winches-tow-bars/': {
    intro: [
      `Looking for a buggy winch or ATV winch? We do not list winches at present, but we do list an aluminium motorcycle carrier with a tow hitch mount, and can look into winches and a dune buggy tow bar on request.`,
      `Message us your vehicle and the load you need to pull and we will tell you what we can supply.`,
    ],
    guides: [
      { h2: `ATV winch and buggy winch`, p: [
        `An ATV winch or buggy winch should be rated for the vehicle's weight with margin, and mounted on a solid bracket. For background, see [winches on Wikipedia](https://en.wikipedia.org/wiki/Winch). We do not list one today, so message us with the vehicle, the rating you need and your budget.`,
      ] },
      { h2: `Tow bars, dune buggy tow bar and hitch carriers`, p: [
        `A dune buggy tow bar or hitch carrier lets you move a vehicle or carry a bike. We list the aluminium motorcycle carrier with a tow hitch mount: see [trailers and tie-downs](/parts-accessories/off-road-parts/trailers-tie-downs/). For other towing gear, message us.`,
      ] },
      { h2: `Recovery and safety`, p: [
        `Use rated recovery gear, keep clear of the line when winching and follow the winch maker's guidance. See our [off-road parts](/parts-accessories/off-road-parts/) for other items.`,
      ] },
    ],
    faqs: [
      [`Do you sell an ATV winch?`, `Not at present. Message us your vehicle and the rating you need.`],
      [`Do you sell a dune buggy tow bar?`, `Not at present. We list a hitch-mounted carrier; message us for tow bar options.`],
      [`What do you sell for towing?`, `An aluminium motorcycle carrier with a tow hitch mount, and loading ramps.`],
      [`How do I choose a winch rating?`, `Choose a rating well above the vehicle's weight, and follow the maker's guidance.`],
      [`Can you source a buggy winch?`, `Message us and we will check availability.`],
    ],
  },
};
