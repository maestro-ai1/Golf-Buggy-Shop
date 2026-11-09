import type { PageCopy } from '@/content/pages';

// Batch 1 copy for the four category hubs and the Brands hub. Every mapped secondary appears in a heading or in the text, support keywords that are real
// shopper searches are used (or answered as FAQs), and each page links to its sub-pages, brand pages and guides plus one high-authority source.
// [text](url) is rendered as a link on the page; structured data and meta descriptions carry the plain text.
export const HUBS: Record<string, PageCopy> = {
  '/golf-buggies/': {
    intro: [
      `Looking for a golf buggy that suits the way you play? Our golf buggy range covers every budget and style: simple push buggies, motorised electric buggies, hands-free remote models and seated ride-on buggies, all from brands Australian golfers already trust.`,
      `Every golf buggy on this page includes GST and ships Australia-wide, free over $1,000 to major metro areas and depot corridors. Browse the collections below, compare specifications side by side, or message us and we will help you match a buggy to your course, your bag and your budget.`,
    ],
    guides: [
      { h2: `Which buggy for golf suits you? Push, electric, remote or ride-on`, p: [
        `Buggies for golf come in four main types. [Push buggies and trolleys](/golf-buggies/push-pull-trolleys/) are the lightest and cheapest and need no charging. [Motorised electric buggies](/golf-buggies/motorised-electric/) add a motor so you simply steer. [Remote control golf buggies](/golf-buggies/remote-control/) follow your commands so you can walk completely unburdened, while [ride-on seated buggies](/golf-buggies/ride-on-seated/) carry you as well as your clubs for long rounds or mobility needs.`,
        `Think about the hills on your usual course, how far you carry the buggy to the car, and whether you want GPS. Those three questions narrow the choice quickly. If you are still comparing, our guide to [electric versus push golf buggies](/blog/electric-vs-push-golf-buggy-which-should-you-buy/) walks through the trade-offs.`,
      ] },
      { h2: `Golf buggies for every budget: the brands we stock`, p: [
        `You will find [MGI](/brands/mgi/), [Stinger](/brands/stinger/), [Motocaddy](/brands/motocaddy/), [PowaKaddy](/brands/powakaddy/), [Clicgear](/brands/clicgear/), [Rovic](/brands/rovic/) and more on this page, from budget push buggies to premium GPS models. The QOD golf buggy range adds all-terrain remote control models, and the [Parmaker](/brands/parmaker/) and i-MotionCaddys ride-on buggies seat the golfer.`,
        `Every listing shows the real price including GST, the key specifications and delivery details, so you can compare like with like.`,
      ] },
      { h2: `Golf buggy dimensions and golf buggy width: will it fit your boot?`, p: [
        `Before you buy, check the folded size, the weight and the golf buggy width in the specification table on each listing, then compare them with your boot space and the way you store the buggy. Push buggies fold the smallest, while motorised and remote buggies are heavier because of the battery and motor.`,
        `Golf buggy dimensions differ a lot between models, so do not assume. If a size is not listed, message us and we will check it for you.`,
      ] },
      { h2: `What to check before you buy`, p: [
        `Check that the buggy folds small enough for your boot, that your golf bag suits the bag holder, and that the battery type matches how often you play. Lithium batteries are lighter and last longer between charges than older lead-acid packs, and you can see our [lithium batteries](/parts-accessories/golf-buggy-parts/lithium-batteries/) and [golf buggy accessories](/parts-accessories/golf-cart-accessories/) if you want to upgrade later.`,
        `Not sure? Call us on 0420 128 746 or use WhatsApp and tell us your course and your bag type.`,
      ] },
      { h2: `Golf buggy Australia: delivery, payment and support`, p: [
        `We ship golf buggies Australia-wide from our depots, with freight confirmed before you pay. You can pay by bank transfer (Osko or EFT) or PayID, or choose Bitcoin or USDT for an extra 10% off at checkout. Our Sydney team can answer questions by phone, WhatsApp or email.`,
        `Most clubs welcome powered buggies, but rules differ by course, so check with your club first. [Golf Australia](https://www.golf.org.au/) is a good starting point for general information about the game and finding a club.`,
      ] },
    ],
    faqs: [
      [`What is a golf buggy?`, `A golf buggy is a wheeled carrier for your golf bag. Push buggies are pushed by hand, electric and remote buggies have a motor, and ride-on buggies carry the golfer as well.`],
      [`Which golf buggy should I buy?`, `Choose a push buggy for the lowest cost, an electric or remote buggy for a hands-free round, and a ride-on buggy if you need to sit. Start with your budget, your course terrain and how you transport the buggy, or read our [electric versus push buggy guide](/blog/electric-vs-push-golf-buggy-which-should-you-buy/).`],
      [`How much does a golf buggy cost in Australia?`, `Push buggies start from a few hundred dollars, electric and remote buggies run from around $1,200 up to $3,300, and ride-on buggies cost more. Every price on this site includes GST.`],
      [`Do you deliver golf buggies Australia-wide?`, `Yes. Orders over $1,000 ship free to major metro and depot corridors, and a flat $95 freight fee applies below that threshold. See our [delivery page](/delivery/) for details.`],
      [`Is a golf buggy the same as a golf cart?`, `In Australia people use the words loosely. A golf buggy usually means the smaller walking buggy that carries your bag. A [golf cart](/golf-carts/) is the larger vehicle you ride in.`],
      [`How wide is a golf buggy and what are typical golf buggy dimensions?`, `It depends on the model. Check the folded size and the golf buggy width in each listing, or message us and we will confirm a size before you order. Push buggies fold the smallest.`],
      [`What is a golf chariot?`, `Golf chariot is a name some golfers use for a push buggy or trolley. You can browse them in our [push and pull trolleys](/golf-buggies/push-pull-trolleys/) range.`],
      [`Do you sell the QOD golf buggy?`, `Yes. We list the QOD Q1 and Q2 all-terrain golf buggies, including a remote control model. See all [remote control golf buggies](/golf-buggies/remote-control/).`],
    ],
  },

  '/golf-carts/': {
    intro: [
      `Shop golf carts for new, electric and lithium models. Our golf cart range includes ECAR and Tomberlin carts in two, four, six and eight seat layouts for golf clubs, resorts, estates, farms and private properties.`,
      `Whether you search for a golf cart Australia-wide, golf cars or even a golf kart, every cart here includes GST and is delivered across the country. Compare models, accessories and lithium upgrades in one place.`,
    ],
    guides: [
      { h2: `Choosing the right golf cart`, p: [
        `Start with the number of seats, then the job: golf, resort transport, estate use or utility work. Then look at battery type. Lithium carts are lighter, need less maintenance and typically hold their performance better than lead-acid. See the full [ECAR range](/brands/ecar/) for two to eight seat lithium carts.`,
        `Ask about warranty, servicing and how parts are supported in your area.`,
      ] },
      { h2: `Golf carts and golf cars: what is the difference?`, p: [
        `Golf car and golf cart describe the same family of vehicles: golf car is the industry term and golf cart is what most Australians say. Golf walking carts are different. They are the push or electric trolleys that carry only your clubs, and you will find them in our [golf buggies range](/golf-buggies/push-pull-trolleys/). Our guide to [golf cars, golf carts and golf buggies](/blog/golf-cars-vs-golf-carts-vs-golf-buggies/) explains the terms in detail.`,
      ] },
      { h2: `Buy a golf car online in Australia`, p: [
        `When you buy a golf car from us, a person checks every order before you pay: we confirm stock, freight and options such as roof, windscreen and seat layout. [New electric golf carts](/golf-carts/electric/), [used golf carts](/golf-carts/used/) and [petrol golf carts](/golf-carts/petrol/) each have their own page, and our [utility four-seater carts](/golf-carts/utility-4-seater/) suit estates and farms. Golf cars Australia-wide ship by insured freight, with delivery costs confirmed before you pay.`,
      ] },
      { h2: `Golf cart size and golf cart dimensions`, p: [
        `Golf cart size depends on the seat count and body style. A two-seat cart is the most compact, while four, six and eight-seat carts are longer. Check the golf cart dimensions in the specification table on each listing, and measure the gate, shed or trailer the cart must fit through before you order. If a dimension is missing, message us and we will check it.`,
      ] },
      { h2: `New, used or petrol?`, p: [
        `New electric carts offer the lowest running cost and full warranty. Used carts cost less up front but need inspection of batteries and electrics. Petrol carts suit long days and heavy duty work. Ask us what we can source.`,
      ] },
      { h2: `Road rules and safety for golf carts`, p: [
        `Golf carts are generally made for the course and private land. For background on how golf carts work, see [the golf cart overview on Wikipedia](https://en.wikipedia.org/wiki/Golf_cart), and read our guide on [driving a golf cart on the road in Australia](/blog/can-you-drive-a-golf-cart-on-the-road-in-australia/) before you plan any public road use.`,
      ] },
    ],
    faqs: [
      [`Can you drive a golf cart on the road in Australia?`, `Rules differ by state and territory. Golf carts are generally for private property and the course unless registered and compliant. Check with your state transport authority, and read our [road rules guide](/blog/can-you-drive-a-golf-cart-on-the-road-in-australia/).`],
      [`How much is a golf cart?`, `New electric golf carts start around $11,000 and go up for larger and premium models. All prices on this site include GST. See [golf carts for sale](/golf-carts/for-sale/) for current prices.`],
      [`Are golf carts electric or petrol?`, `Most new carts are electric, and lithium is now the standard for quality models. Petrol carts exist for heavy duty use; see our [petrol golf carts](/golf-carts/petrol/).`],
      [`What are golf cart dimensions and what size is a golf cart?`, `Dimensions vary by model and seat count. Check the specification table on each listing for length and width, or ask us for a size sheet before you order.`],
      [`Do you sell golf cart accessories and parts?`, `Yes. Browse our [lithium batteries](/parts-accessories/golf-buggy-parts/lithium-batteries/), wheels, lighting, seat belts, mats and [golf cart accessories](/parts-accessories/golf-cart-accessories/).`],
      [`What is a cart in golf?`, `A cart in golf is the vehicle golfers ride in, usually electric. Golf walking carts, also called push buggies, carry only the bag. Browse both in our [golf buggies range](/golf-buggies/).`],
      [`Is a golf buggy the same as a cart?`, `In Australia the names overlap. Buggy usually means the smaller walking buggy, cart means the vehicle you ride in, and trolley means a push buggy. Our [guide to the terms](/blog/golf-cars-vs-golf-carts-vs-golf-buggies/) explains more.`],
    ],
  },

  '/off-road-buggies/': {
    intro: [
      `Explore an off road buggy for farms, trails and weekend adventures. Our range includes Trailmaster Cheetah dune buggies, Kayo, Hammerhead and Polaris side by side buggies, kids buggies, go karts and quads.`,
      `Every off road buggy for sale on this page includes GST and is delivered Australia-wide, so ask us about off road buggy Australia freight to your property. Compare engines, seating and age guidance before you buy.`,
    ],
    guides: [
      { h2: `Off road buggies: dune buggies, side by sides, go karts and quads`, p: [
        `Off road buggies cover several machines. [Dune buggies](/off-road-buggies/dune-buggies/) are light and built for sand and trails. [Side by sides and UTVs](/off-road-buggies/side-by-sides-utvs/) carry people and gear, and [electric off-road UTVs](/off-road-buggies/electric-off-road-utvs/) run quietly with low running costs. [Go karts](/off-road-buggies/go-karts/) suit backyards and private tracks, [kids buggies](/off-road-buggies/kids-buggies/) are sized for younger riders and [mini quads and ATVs](/off-road-buggies/mini-quads-atvs/) suit farm tracks and beginners. Our guide to [UTVs, ATVs and dune buggies](/blog/what-is-a-utv-side-by-side-vs-atv-vs-dune-buggy/) explains the differences.`,
      ] },
      { h2: `Choose by use: farm buggy or recreation buggy?`, p: [
        `For farm and property work choose a farm buggy such as a side by side or quad with load capacity. For recreation choose a dune buggy or go kart. For younger riders choose a youth buggy with age-appropriate power. Our [4x4 farm buggy guide](/blog/4x4-farm-buggy/) covers what to look for on a working property.`,
        `Check state rules for registration and use on public land.`,
      ] },
      { h2: `Used off road buggy: what to check`, p: [
        `Thinking about a used off road buggy? Inspect the engine, chassis, brakes, tyres and paperwork, and compare the price with a new machine, because a new buggy comes with a warranty and parts support. We list new off-road buggies with clear prices; message us if you want to talk through a used purchase.`,
      ] },
      { h2: `Off road buggy for sale in Australia: safety, rules and delivery`, p: [
        `Wear a helmet, eye protection, gloves and sturdy boots on every ride, keep passengers to the number of seats and keep young riders supervised. [Safe Work Australia](https://www.safeworkaustralia.gov.au/safety-topic/hazards/quad-bikes) publishes safety guidance for quad bikes and similar vehicles.`,
        `Delivery is by freight across Australia, free over $1,000 to major metro areas and depot corridors, and we confirm the cost to your postcode before you pay. Many buggies arrive part-assembled, so check the listing for what is needed.`,
      ] },
    ],
    faqs: [
      [`What is a buggy?`, `An off-road buggy (also written offroad buggy) is a small open vehicle for recreation and property work. Types include dune buggies, side by sides, go karts and quads.`],
      [`What is the difference between a dune buggy and an off road buggy?`, `A dune buggy is built for sand and recreation. Off-road buggy is a broader term that also covers side by sides and utility models. See our [dune buggies](/off-road-buggies/dune-buggies/).`],
      [`Are off-road buggies legal on public roads?`, `Generally no. They are for private land and permitted areas. Check your state rules.`],
      [`Do they come assembled?`, `Many arrive part-assembled. Check the listing and ask us.`],
      [`Do you sell safety gear?`, `Ask us about helmets and protective gear.`],
      [`Can I buy an off road buggy for sale online and have it delivered?`, `Yes. We deliver off road buggies Australia-wide, with freight confirmed before you pay. See our [delivery page](/delivery/).`],
      [`What is a farm buggy?`, `A farm buggy is an off-road buggy used for property work, usually a side by side or quad with a load bed and four-wheel drive. Browse [side by sides and UTVs](/off-road-buggies/side-by-sides-utvs/).`],
      [`Do you sell a used off road buggy?`, `We list new off-road buggies online. If you are considering a used off road buggy, message us and we can talk through what to check.`],
    ],
  },

  '/parts-accessories/': {
    intro: [
      `Need quad bike spare parts NSW or anywhere in Australia? Find golf cart accessories, golf buggy parts, lithium batteries, chargers, wheels, trailers and off-road parts in one place. Everything on this page is chosen for Australian golf carts, golf buggies and off-road buggies.`,
      `Use the category tiles to jump straight to what you need, and message us if you are unsure about fitment. Looking for golf cart parts or golf car parts? Start with batteries, chargers and wheels.`,
    ],
    guides: [
      { h2: `Quad bike spare parts NSW and Australia-wide`, p: [
        `We deliver quad bike spare parts across NSW and the rest of Australia. Our universal [off-road parts](/parts-accessories/off-road-parts/) include carburettors in several sizes, a front brake master cylinder, a centrifugal clutch for go karts and an air filter for the Trailmaster 175 to 300 buggy.`,
      ] },
      { h2: `ATV parts, quad bike parts and ATV accessories`, p: [
        `ATV parts and quad bike parts that wear out first are usually the carburettor, clutch and brake components, so keep a spare filter and basic tools on hand. For ATV accessories we stock folding loading ramps and a motorcycle carrier with a tow hitch mount, and you can see more in [trailers and tie-downs](/parts-accessories/off-road-parts/trailers-tie-downs/) and [winches and tow bars](/parts-accessories/off-road-parts/winches-tow-bars/).`,
      ] },
      { h2: `Golf cart parts and golf car parts: batteries, chargers and wheels`, p: [
        `Golf cart parts start with the battery. Our [lithium batteries](/parts-accessories/golf-buggy-parts/lithium-batteries/) include PRO-Li packages for Club Car Precedent, EZGO RXV, Yamaha and ECAR carts, and you can read how [lithium iron phosphate batteries work on Wikipedia](https://en.wikipedia.org/wiki/Lithium_iron_phosphate_battery). Golf car parts also include [chargers](/parts-accessories/golf-buggy-parts/chargers-conversion-kits/), [wheels, rims and tyres](/parts-accessories/golf-buggy-parts/wheels-rims-tyres/) and [golf cart accessories](/parts-accessories/golf-cart-accessories/) such as holders, seat covers, mats and lighting.`,
      ] },
      { h2: `Make sure it fits`, p: [
        `Check your cart or buggy make, model and year. Many parts are model-specific. Our listings show compatibility, and our team can confirm fit before you order.`,
        `Add accessories to your order to reach free delivery over $1,000.`,
      ] },
    ],
    faqs: [
      [`Do you sell golf cart parts in Australia?`, `Yes. We stock batteries, chargers, wheels, lighting, seats and accessories. Start with our [golf buggy parts](/parts-accessories/golf-buggy-parts/).`],
      [`How do I know a part will fit?`, `Send us your cart make, model and year and we will confirm fitment before you order.`],
      [`Do you sell quad bike spare parts?`, `Yes. We stock universal quad and go kart parts and can advise on others. See our [off-road parts](/parts-accessories/off-road-parts/).`],
      [`Do you install parts?`, `Contact us for installation advice. Some items need a qualified installer.`],
      [`Is there a minimum order?`, `Our minimum order is $250, and delivery is free over $1,000.`],
      [`Do you sell ATV parts and ATV accessories?`, `Yes. We list ATV and quad bike parts such as carburettors and brake components, plus loading ramps and carriers. Browse [trailers and tie-downs](/parts-accessories/off-road-parts/trailers-tie-downs/).`],
      [`Do you sell golf car parts?`, `Yes. Golf car parts and golf cart parts are the same range here: batteries, chargers, wheels and accessories. See [golf cart accessories](/parts-accessories/golf-cart-accessories/).`],
    ],
  },

  '/brands/': {
    intro: [
      `Looking for an Australian owned golf buggy brand? Buggies For Sale is a Sydney-based Australian retailer, not a manufacturer, and we stock many brands of golf buggies, golf carts, off-road buggies and parts in one place.`,
      `Choose a brand below to see its models, prices and delivery details. If country of origin or local support matters to you, ask us and we will check the details for the model you are considering.`,
    ],
    guides: [
      { h2: `Golf cart brands and golf buggy manufacturers we stock`, p: [
        `Our golf cart brands include [ECAR](/brands/ecar/), [Club Car](/brands/club-car/), [EZGO](/brands/ezgo/) and [Yamaha](/brands/yamaha/), alongside Tomberlin. Our golf buggy manufacturers include [MGI](/brands/mgi/), [Stinger](/brands/stinger/), [Motocaddy](/brands/motocaddy/), [PowaKaddy](/brands/powakaddy/), [Clicgear](/brands/clicgear/), [Rovic](/brands/rovic/) and [Parmaker](/brands/parmaker/).`,
      ] },
      { h2: `Off road buggy brands`, p: [
        `[Polaris](/brands/polaris/), [Honda](/brands/honda/), [Kubota](/brands/kubota/), [Kawasaki](/brands/kawasaki/), [CFMOTO](/brands/cfmoto/), [Segway](/brands/segway/), [Hammerhead](/brands/hammerhead/) and [Trailmaster](/brands/trailmaster/) lead our off road buggy brands, alongside Kayo, Apollo and Crossfire quads, go karts and kids buggies. See the full [off-road buggies range](/off-road-buggies/).`,
      ] },
      { h2: `Best buggy brands and buggy manufacturers: how to choose`, p: [
        `There is no single best. Compare warranty, parts support, specifications and the delivered price including GST. Buggy manufacturers differ in how they support Australian owners, so ask where spare parts come from and how long they take. For an overview of consumer guarantees on products you buy, see [the ACCC consumer guide](https://www.accc.gov.au/consumers).`,
      ] },
      { h2: `Australian owned golf buggy brand: what to ask before you buy`, p: [
        `If you want an Australian owned golf buggy brand, ask who services the product in Australia, how long parts take and what the warranty covers. Tell us your course or property and we will recommend a brand, or browse our [golf buggies](/golf-buggies/), [golf carts](/golf-carts/) and [parts and accessories](/parts-accessories/).`,
      ] },
    ],
    faqs: [
      [`Are you an Australian owned golf buggy brand?`, `We are a Sydney-based Australian retailer, not a manufacturer. We sell products from many brands, and we can check the origin and local support for any model you are considering.`],
      [`Which golf cart brands do you stock?`, `ECAR, Club Car, EZGO, Yamaha and Tomberlin, plus used carts. See [golf carts](/golf-carts/).`],
      [`Which buggy brand is best?`, `The best buggy brand is the one that fits your course or property, budget and support needs. Compare specifications, warranty and delivered price, or ask our team for a recommendation.`],
      [`Which off road buggy brands do you sell?`, `Trailmaster, Kayo, Hammerhead, Polaris, Honda, Kubota, Kawasaki, CFMOTO, Segway, Apollo and Crossfire, among others. See [off-road buggies](/off-road-buggies/).`],
      [`Do buggy manufacturers' warranties apply in Australia?`, `The manufacturer warranty applies to new products, and the conditions are provided with your order. Ask us before you buy if you want the details for a specific model.`],
      [`Can I order a brand that is not listed?`, `Message us with the brand and model and we will check availability and freight.`],
    ],
  },
};
