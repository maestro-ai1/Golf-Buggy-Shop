import type { PageCopy } from '@/content/pages';

// Batch 2 copy: the 9 golf buggy sub-categories and the 6 golf cart sub-categories. Headings carry the mapped secondaries, real shopper searches from the
// support list are used or answered as FAQs, each page links to its siblings, brands and guides, and carries one high-authority source.
// [text](url) renders as a link; structured data and meta descriptions carry the plain text.
export const SUBCATS: Record<string, PageCopy> = {
  '/golf-buggies/for-sale/': {
    intro: [
      `Every golf buggy for sale here comes from MGI, Stinger, PowerBug, QOD, Concourse and more, with push, electric, remote and ride-on options in one place. Each listing shows a clear price, key specifications and delivery details.`,
      `Compare specifications, prices and delivery on every model, so you can buy a new golf buggy online with confidence. Browse golf buggy sales by type, or message us and we will help you choose.`,
    ],
    guides: [
      { h2: `Buy a golf buggy online with confidence`, p: [
        `New buggies come with manufacturer warranty, fresh batteries and the latest features. We list full specifications so you can compare weight, range, battery type and bag compatibility before you order. When you buy golf buggy models from us, a person checks your order, confirms stock and freight, and then sends payment details.`,
        `If you are comparing us with another retailer, compare the final delivered price. Orders over $1,000 ship free to major metro and depot corridors, and a flat $95 applies below that.`,
      ] },
      { h2: `Golf buggy sale: push, electric, remote and ride-on`, p: [
        `A golf buggy sale usually means a mix of types, so start with the type. [Push golf buggies](/golf-buggies/push-pull-trolleys/) cost the least, [electric golf buggies](/golf-buggies/motorised-electric/) move under their own power, [remote control golf buggies](/golf-buggies/remote-control/) follow you hands-free and a [golf buggy with seat](/golf-buggies/ride-on-seated/) carries you as well. Looking for a lower price? See our [clearance page](/clearance/) for the current lowest-priced buggies and accessories.`,
      ] },
      { h2: `New golf buggies for sale across Australia`, p: [
        `We list new golf buggies for sale Australia-wide, including golf buggies for sale Victoria buyers can order online, and we deliver to Sydney, Melbourne, Adelaide and the rest of the country. Our [locations page](/golf-buggies/for-sale-locations/) explains how delivery works wherever you live. Many golfers also add a [lithium battery](/parts-accessories/golf-buggy-parts/lithium-batteries/) or [accessories](/parts-accessories/golf-cart-accessories/) to their first order to reach free delivery.`,
        `Compare the final price, check the warranty, and read our buyers guide to [electric versus push golf buggies](/blog/electric-vs-push-golf-buggy-which-should-you-buy/) if you are still deciding. For general consumer rights on online purchases, the [ACCC consumer guide](https://www.accc.gov.au/consumers) is a useful reference.`,
      ] },
    ],
    faqs: [
      [`Where can I buy a golf buggy?`, `You can buy a new golf buggy online from us and have it delivered Australia-wide. Browse the range above, add your favourite to the cart and check out with bank transfer (Osko or EFT), PayID or crypto.`],
      [`How much is a new golf buggy?`, `Prices depend on the type. Push buggies cost the least, and electric and remote buggies cost more. All prices on this page include GST.`],
      [`Do you sell cheap golf buggies?`, `Yes. Our push buggies are the lowest-cost way to stop carrying your bag, and every price on this site includes GST. See the [clearance page](/clearance/) for current deals.`],
      [`Can I buy a golf buggy on sale?`, `We list our lowest current prices every day. Check the [clearance page](/clearance/) for current deals and ask us about bundles.`],
      [`How do I choose between brands?`, `Compare weight, folding size, battery type, warranty and whether you want GPS. Our specification tables show these side by side, and you can browse each [brand](/brands/).`],
      [`Do you have golf buggies for sale Sydney, golf buggies for sale Melbourne or golf buggies for sale near me?`, `We sell online and deliver Australia-wide, so you can order a golf buggy for sale Sydney or a golf buggy for sale Melbourne and have it delivered to your door. Message us your postcode and we will confirm the freight cost before you pay.`],
      [`Do you sell a 2 seater golf buggy for sale?`, `Our ride-on range includes seated golf buggies; see the [golf buggy with seat](/golf-buggies/ride-on-seated/) page. For a two-seat golf cart, see our [golf carts](/golf-carts/).`],
    ],
  },

  '/golf-buggies/motorised-electric/': {
    intro: [
      `A motorised golf buggy takes the effort out of every round. Our electric golf buggy for sale range includes compact folding models from MGI and PowerBug, all-terrain buggies from QOD and the ride-on i-MotionCaddys IM4.`,
      `Electric buggies are quiet, easy to steer and gentle on your back. Choose lithium models for lighter weight and longer life between charges.`,
    ],
    guides: [
      { h2: `Electric golf buggy features that matter`, p: [
        `Look at battery capacity, motor power, folded size and weight. Down-hill control keeps the buggy steady on slopes, and an electronic park brake stops it rolling on uneven ground. GPS models add yardages to your screen so you can leave the rangefinder at home.`,
      ] },
      { h2: `Motorised golf buggies for sale: which type?`, p: [
        `Motorised golf buggies range from compact folding models to full ride-on buggies. If you want to steer, choose an electric golf buggy for sale from MGI or PowerBug; if you want the buggy to follow you, see our [remote control golf buggies](/golf-buggies/remote-control/); and if you want to sit, see the [ride-on seated buggies](/golf-buggies/ride-on-seated/). Wondering about the best golf buggy, or the best golf buggy Australia golfers choose? Our guide to the [best electric golf buggy Australia has](/blog/what-is-the-best-electric-golf-buggy-australia/) compares them.`,
      ] },
      { h2: `Lithium or lead-acid?`, p: [
        `Lithium batteries are lighter, charge faster and typically last longer than lead-acid. Most new electric buggies now ship with lithium. If you own an older buggy we also stock replacement [lithium batteries](/parts-accessories/golf-buggy-parts/lithium-batteries/) and [chargers](/parts-accessories/golf-buggy-parts/chargers-conversion-kits/). For background, see [lithium iron phosphate batteries on Wikipedia](https://en.wikipedia.org/wiki/Lithium_iron_phosphate_battery).`,
      ] },
      { h2: `Second hand electric golf buggy for sale and used buggies`, p: [
        `Looking for a second hand electric golf buggy for sale or a second hand golf buggy? We list new buggies online with warranty. A used buggy can cost less, but the battery is the biggest cost to replace, so check its age and ask for service history. Our guide to [used electric golf buggies](/blog/used-electric-golf-buggy-for-sale/) explains what to inspect.`,
      ] },
      { h2: `Motorized golf buggy, motorised golf cart and electric golf buggies Australia`, p: [
        `A motorized golf buggy is spelled both ways: motorised and motorized describe the same electric buggy. Some golfers search motorised golf cart for the same machine, but a ride-in cart is a different vehicle: see our [golf carts](/golf-carts/). Electric golf buggies Australia golfers choose range from the [MGI ZIP X1](/products/mgi-zip-x1-electric-golf-buggy/) to the [Motocaddy S1 DHC](/products/motocaddy-s1-dhc-electric-golf-buggy/), delivered with freight confirmed before you pay.`,
      ] },
    ],
    faqs: [
      [`What is the best electric golf buggy in Australia?`, `The best buggy depends on your course. MGI and PowerBug are popular for compact folding electric buggies, while QOD and Concourse suit golfers who want remote control. Compare specs and ask us if you need help, or read our [best electric golf buggy guide](/blog/what-is-the-best-electric-golf-buggy-australia/).`],
      [`How far does an electric golf buggy go?`, `Range depends on the battery and the terrain. Specification tables on each listing show battery size, and bigger lithium packs cover more holes per charge.`],
      [`Which brand should I choose for an electric golf buggy?`, `Compare weight, folding size, battery type, warranty and GPS. Start with [MGI](/brands/mgi/) for a wide range, or ask us for a recommendation based on your course.`],
      [`How much is an electric golf buggy?`, `Electric golf buggies start from around $640 and run up to about $1,800, and ride-on models cost more. Every price on this site includes GST.`],
      [`Can I fit a motor to a push buggy?`, `Some push buggies can be converted, but a purpose-built electric buggy is usually simpler and safer. Ask us about conversion options.`],
      [`How long do golf buggy batteries last?`, `Lithium batteries typically last longer than lead-acid and keep steady power through the round. Care and charging habits matter. See our [batteries page](/parts-accessories/golf-buggy-parts/lithium-batteries/) for replacements.`],
      [`Do I need a licence to use an electric golf buggy?`, `Walking golf buggies are used on the course, not on public roads. Always follow your club or venue rules.`],
      [`Do you sell a motorized golf cart?`, `Yes. A motorized golf cart or electric motorized golf cart is a ride-in vehicle; see our [electric golf carts](/golf-carts/electric/).`],
    ],
  },

  '/golf-buggies/remote-control/': {
    intro: [
      `A remote control golf buggy follows your commands so you can walk the course with nothing in your hands. Our range of remote golf buggies includes MGI Zip Navigator, MGI Ai models, QOD and Concourse, each with a remote that sends the buggy ahead or calls it back.`,
      `Remote buggies are the premium end of the market. They cost more than a push or standard electric buggy, but they save time and energy over 18 holes. You can browse every remote control golf buggy for sale below.`,
    ],
    guides: [
      { h2: `How a remote golf buggy works`, p: [
        `Most remote buggies use a handheld remote with buttons for forward, stop and call-back, and some track you automatically. The buggy carries your bag on its own frame, and you decide when to send it on. Check the remote range, battery life and what happens if the signal drops before you buy.`,
      ] },
      { h2: `Electric golf buggy with remote: which model is right for me?`, p: [
        `Choose a GPS remote model if you want yardages on a screen. Choose a simpler remote model if you mostly want hands-free movement. An electric golf buggy with remote costs more than a standard electric buggy, and our listings show the main specifications side by side. Our [remote control golf buggy buyers guide](/blog/remote-control-golf-buggy-buyers-guide/) compares the options in detail.`,
      ] },
      { h2: `Remote control golf buggy Australia: brands and delivery`, p: [
        `We stock remote control golf buggies from [MGI](/brands/mgi/), QOD and Concourse and deliver Australia-wide, with freight confirmed before you pay. Most clubs allow them, but rules vary, so check with your club first. [Golf Australia](https://www.golf.org.au/) is a good starting point for general information.`,
        `People also search for a remote control golf cart, an electric golf cart with remote or a golf cart with remote. Remote control is a golf buggy feature; if you want a vehicle you sit in, see our [golf carts](/golf-carts/). A remote control golf caddy is another name for these buggies.`,
      ] },
    ],
    faqs: [
      [`What is a remote control golf buggy?`, `It is an electric golf buggy that you control with a handheld remote, so it can move ahead or return to you without you pushing it.`],
      [`How much is a remote control golf buggy?`, `Prices run from around $1,470 to about $3,200 depending on the model and features. Every price on this site includes GST.`],
      [`Can I use a remote golf buggy on any course?`, `Most courses allow them, but some restrict powered buggies. Check with your club.`],
      [`Is the remote included?`, `Yes, remote models include a remote. Check each listing for details and accessories.`],
      [`Do remote buggies fit my golf bag?`, `Most fit cart and stand bags, but not every stand or carry bag is compatible. Check the bag-fit note on each listing or contact us.`],
      [`Can I get a remote controlled golf buggy for sale in Australia?`, `Yes. Every model on this page is a remote controlled golf buggy for sale Australia-wide, and freight is confirmed before you pay. See our [delivery page](/delivery/).`],
      [`Is there a remote control golf caddy that follows me?`, `Remote models follow your commands, and some track you automatically. Check the specification table on each listing for the exact features.`],
    ],
  },

  '/golf-buggies/push-pull-trolleys/': {
    intro: [
      `A golf trolley, also called a push or pull buggy, is the simplest way to stop carrying your bag. Our push golf buggies from Stinger fold fast, roll smoothly and include the extras golfers actually use.`,
      `Because they have no motor or battery, a golf push buggy is the lowest-cost and lowest-maintenance option. Many golfers start here and upgrade to electric later.`,
    ],
    guides: [
      { h2: `What to look for in a push buggy`, p: [
        `Check folded size, weight and the width of the wheel track. A wider track is more stable on slopes. Look for a built-in phone holder, drink holder and umbrella holder to avoid buying extras. Three-wheel designs are stable and easy to steer, and you can see them on our [3 wheel golf buggy](/golf-buggies/3-wheel/) page; four-wheel designs can sit lower and be more compact.`,
      ] },
      { h2: `Golf push buggy, golf buggy push and pull buggy options`, p: [
        `Whether you call it a golf push buggy, a push golf buggy, a golf pull buggy or a foldable golf buggy, it is the same idea: a light frame you push or pull. Most fold in a few steps and fit a car boot. Our guide to [push trolleys](/blog/push-trolley/) and our [best golf push buggy guide](/blog/best-golf-push-buggy-australia/) explain how to choose.`,
      ] },
      { h2: `Golf trolley for sale: bags, accessories and brands`, p: [
        `A golf trolley for sale here comes from brands such as [Stinger](/brands/stinger/), [Clicgear](/brands/clicgear/), [Rovic](/brands/rovic/), [PowaKaddy](/brands/powakaddy/) and [Tri-Lite](/brands/tri-lite/). Add a [golf trolley bag](/parts-accessories/golf-cart-accessories/bags-rain-covers-eskies/) or umbrella holder to match, and compare the golf push buggy Australia range by weight and fold size. See [golf equipment on Wikipedia](https://en.wikipedia.org/wiki/Golf_equipment) for background on trolleys and bags.`,
      ] },
      { h2: `Golf push cart, push cart and golf trolly options`, p: [
        `A golf push cart, push cart or golf trolly is a walking buggy with no motor. For an electric caddy or golf caddy cart that moves under its own power, see [electric trolleys](/golf-buggies/caddies-electric-trolleys/). We do not rank buggies by star rating, so when you look for the best golf push cart, best rated golf push carts or top rated golf push carts, compare weight, folded size, wheels and price on each listing. Our guide to the [best golf push buggy in Australia](/blog/best-golf-push-buggy-australia/) explains what to check.`,
      ] },
    ],
    faqs: [
      [`What is the difference between a push buggy and an electric buggy?`, `A push buggy has no motor, so you push or pull it. An electric buggy has a motor and battery that move it for you. See our [electric golf buggies](/golf-buggies/motorised-electric/).`],
      [`Which push golf buggy should I buy?`, `Pick the model that folds small enough for your car and has the storage you want. Our Stinger range goes from simple to fully featured.`],
      [`Are push buggies good for hilly courses?`, `Yes, but a wide wheel track and good brakes help a lot. For very hilly courses consider an [electric buggy](/golf-buggies/motorised-electric/).`],
      [`Do I need to assemble a push buggy?`, `Most arrive nearly ready and need only a few steps. Instructions come with the buggy.`],
      [`What does a golf trolley cost?`, `Push buggies are the cheapest buggies. Check the listings above for current prices, all including GST.`],
      [`Do you sell a golf bag trolley or a bag for a golf trolley?`, `Yes. See our [bags and covers](/parts-accessories/golf-cart-accessories/bags-rain-covers-eskies/) and holders for phone, umbrella and drinks.`],
      [`Is a golf push cart the same as a push buggy?`, `Yes. Golf push cart, push buggy and golf trolley all describe a bag carrier you push by hand.`],
    ],
  },

  '/golf-buggies/caddies-electric-trolleys/': {
    intro: [
      `A golf caddy buggy carries your clubs so you can focus on the game. This page brings together golf caddies and electric trolleys for golfers who want motorised help without the cost of a full remote buggy.`,
      `Browse our electric buggies and push buggies below, and ask us if you need help choosing between a caddy-style trolley and a full electric buggy.`,
    ],
    guides: [
      { h2: `Caddy, trolley or buggy?`, p: [
        `In Australia people use these words interchangeably. In practice, a caddy or trolley usually means a lighter, simpler buggy, while buggy often refers to a more feature-rich model. Compare weight, motor and folding size to choose. Our guide to [caddies for golf](/blog/caddies-for-golf/) compares electric, remote and push caddy options.`,
      ] },
      { h2: `Electric trolleys, electric golf trolley and electric golf caddy options`, p: [
        `Electric trolleys carry the bag and move under their own power, so you steer rather than push. An electric golf trolley or electric golf caddy from [Motocaddy](/brands/motocaddy/), [PowaKaddy](/brands/powakaddy/) or [MGI](/brands/mgi/) suits golfers who want help on hills without a full remote buggy. A motorised golf caddy, sometimes called a golf e caddy, is the same idea.`,
      ] },
      { h2: `What does a golf caddy do?`, p: [
        `A caddy carries your bag and, in the traditional sense, gives advice. Today the word also describes the buggy that does the carrying. See [what a golf caddie does on Wikipedia](https://en.wikipedia.org/wiki/Caddie) for the history.`,
      ] },
    ],
    faqs: [
      [`What is an electric golf trolley?`, `It is a motorised trolley that carries your clubs and moves under its own power, so you steer rather than push.`],
      [`Are electric trolleys heavy?`, `Weight varies. Lithium trolleys are lighter, and our listings state weight where the manufacturer provides it.`],
      [`Can I add accessories?`, `Yes. We stock umbrella holders, phone holders, drink holders and bags for most buggies. See our [accessories](/parts-accessories/golf-cart-accessories/).`],
      [`Do you sell motorised golf caddies?`, `Yes. See our [electric buggies](/golf-buggies/motorised-electric/) and [remote models](/golf-buggies/remote-control/).`],
      [`How do I choose?`, `Decide how much help you want. Push buggies need no power, electric buggies move for you, and remote buggies are the hands-free option.`],
      [`What is a golf e caddy?`, `A golf e caddy is another name for an electric golf caddy or electric trolley: a motorised bag carrier you steer.`],
    ],
  },

  '/golf-buggies/ride-on-seated/': {
    intro: [
      `Looking for a golf buggy with seat? Our ride-on and seated golf buggies are for golfers who prefer to sit between shots or who need a little extra support, and they carry both you and your clubs with strong motors and long-range batteries.`,
      `These buggies suit larger courses, hilly terrain and golfers with limited mobility. Browse every ride on golf buggy below.`,
    ],
    guides: [
      { h2: `Ride on golf buggies: seated and stand up golf buggy options`, p: [
        `Ride on golf buggies let you sit, and some let you stand and ride. A single seat golf buggy such as the Parmaker Spirit or the i-MotionCaddys IM4 carries you and your bag, while stand up golf buggy designs keep you on your feet. If you are choosing between a seated buggy and a single seater golf cart, read our guide to the [single seat golf cart](/blog/single-seat-golf-cart/).`,
      ] },
      { h2: `Single seat golf buggy or single seater golf cart?`, p: [
        `A ride-on buggy is smaller and cheaper than a full golf cart and easier to store. A [golf cart](/golf-carts/) seats two to four and suits clubs, resorts and estates. Compare range, load capacity and tyre size before you decide.`,
      ] },
      { h2: `Electric ride on golf buggy: range, seats and brands`, p: [
        `An electric ride on golf buggy suits a golfer who wants to sit between shots. Brands include [Parmaker](/brands/parmaker/) and i-MotionCaddys. Check the seat, the bag mount and the battery in the specification table, and ask us about golf buggy seats and accessories. Always check club rules for powered buggies; [Golf Australia](https://www.golf.org.au/) is a starting point.`,
      ] },
    ],
    faqs: [
      [`What is a ride-on golf buggy?`, `A ride-on golf buggy is a compact electric buggy you sit on, often with room for your clubs.`],
      [`How far does it go?`, `Range depends on the battery and terrain. Specifications are on each listing.`],
      [`Can I use it on the road?`, `Rules vary by state, and golf carts and buggies are generally for private property or the course. Check your state transport authority.`],
      [`How much does a ride-on golf buggy cost?`, `Ride-on buggies cost more than walking buggies. See current prices above.`],
      [`Can it climb hills?`, `Check the motor and climb rating on the specification table.`],
      [`Can I use a golf buggy as a mobility scooter?`, `A golf buggy is made for the course, not as a mobility aid. If you need support on the course, a seated buggy can help; ask us about your needs and check club rules.`],
      [`Can I buy a single seat golf buggy?`, `Yes. Our seated range includes single-seat buggies; see the listings above or read the [single seat golf cart guide](/blog/single-seat-golf-cart/).`],
    ],
  },

  '/golf-buggies/3-wheel/': {
    intro: [
      `A 3 wheel golf buggy is stable, easy to steer and quick to fold. Our three wheel golf buggy range from Stinger is popular for its smooth rolling and compact fold.`,
      `Three-wheel designs are simple to use and suit most golfers on most courses.`,
    ],
    guides: [
      { h2: `Three wheels or four?`, p: [
        `Three-wheel buggies steer easily and are light. Four-wheel buggies can be more stable on side slopes. Most golfers do well with either, and our listings explain the folding action.`,
      ] },
      { h2: `Compact golf buggy, folding golf buggy and collapsible golf buggy`, p: [
        `A compact golf buggy folds small enough for a car boot, and a folding golf buggy or collapsible golf buggy packs flat in a few steps. Check the folded size and the weight in each listing, and compare them with your boot. See all [push and pull trolleys](/golf-buggies/push-pull-trolleys/) for more models, or the [Tri-Lite](/brands/tri-lite/) range.`,
      ] },
      { h2: `3 wheel golf cart or 3 wheel golf buggy?`, p: [
        `People searching for a 3 wheel golf cart usually want a three-wheel push buggy, because a ride-in golf cart has four wheels. Our [electric golf buggies](/golf-buggies/motorised-electric/) add a motor to a similar folding design. For background on trolleys and bags, see [golf equipment on Wikipedia](https://en.wikipedia.org/wiki/Golf_equipment).`,
      ] },
    ],
    faqs: [
      [`What is a three wheel golf buggy?`, `It is a push buggy with two rear wheels and one front wheel, usually swivelling for easy steering.`],
      [`Are three wheel buggies stable?`, `Yes, particularly models with a wide rear track.`],
      [`Do they fold small?`, `Yes. Most three-wheel buggies fold into a compact shape.`],
      [`Can I add a seat?`, `Some models have an optional seat kit. See the [accessories](/parts-accessories/golf-cart-accessories/).`],
      [`Are they good for older golfers?`, `Their light weight and easy handling make them a good choice.`],
      [`Is there a 4 wheel golf buggy?`, `Yes. Four-wheel push buggies sit lower and can be more compact; see the [push and pull trolleys](/golf-buggies/push-pull-trolleys/).`],
    ],
  },

  '/golf-buggies/golf-scooters/': {
    intro: [
      `A golf scooter or electric golf board changes how you move around the course. The Golf Skate Caddy Tourer carries your clubs while you stand and ride, so you cover ground fast.`,
      `Golf scooters are a niche but fun alternative to buggies. Check your club rules, as some limit powered boards.`,
    ],
    guides: [
      { h2: `Is a golf scooter right for me?`, p: [
        `Golf scooters suit confident golfers who want speed and a bit of fun. If you prefer a calm walk, a push or electric buggy may be better. We can help you decide, and our guide to [golf e-scooters](/blog/golf-e-scooter/) covers prices, rules and tips.`,
      ] },
      { h2: `Electric golf scooter Australia: Golf Skate Caddy Australia and scooter golf buggy options`, p: [
        `An electric golf scooter carries your bag and you. The [Golf Skate Caddy](/products/golf-skate-caddy-tourer-electric-golf-board/) Tourer is an electric golf scooter Australia golfers can order from us, delivered Australia-wide. Search terms such as golf scooter Australia, golf cart scooter or scooter golf buggy usually point to this style of board, or to a ride-on buggy like those on our [golf buggy with seat](/golf-buggies/ride-on-seated/) page.`,
      ] },
      { h2: `Golf cart scooter or golf scooter? Rules and safety`, p: [
        `Before you buy, check the club rules for powered boards and wear sensible footwear. [Golf Australia](https://www.golf.org.au/) is a good starting point for club information. Compare with our [electric golf buggies](/golf-buggies/motorised-electric/) if you would rather walk.`,
      ] },
    ],
    faqs: [
      [`What is a golf scooter?`, `A stand-up electric board built to carry a golf bag around the course.`],
      [`Are golf scooters allowed on all courses?`, `No. Check with your club before buying.`],
      [`How much does one cost?`, `Prices are listed on the product page, including GST.`],
      [`Is it hard to ride?`, `Most golfers learn quickly, but start slowly.`],
      [`Can I add a seat?`, `Yes. A fold-away seat accessory is available for compatible models.`],
      [`Do you sell golf scooters for sale in Australia?`, `Yes. We list the Golf Skate Caddy Tourer electric golf board and deliver Australia-wide. See the [product page](/products/golf-skate-caddy-tourer-electric-golf-board/).`],
      [`What is a golf trolley scooter?`, `It describes a trolley or board you ride that also carries your bag. The Golf Skate Caddy is one example.`],
    ],
  },

  '/golf-buggies/for-sale-locations/': {
    intro: [
      `Looking for golf carts for sale Melbourne, Brisbane or elsewhere? We deliver golf buggies and golf carts across Australia, including Brisbane, Sydney, Melbourne, Perth, Adelaide and the Gold Coast. This page explains how delivery works wherever you live and how to buy a golf cart for sale near you.`,
      `Not sure about freight to your suburb or regional town? Message us your postcode and we will confirm the cost before you order.`,
    ],
    guides: [
      { h2: `Delivery across Australia`, p: [
        `Orders over $1,000 ship free to major metro and depot corridors. Below that, a flat $95 freight fee applies. Regional and remote deliveries may need a quote. Our depots and carriers cover New South Wales, Queensland, Victoria, South Australia, Western Australia, Tasmania and the ACT. See our [delivery page](/delivery/) for timing.`,
      ] },
      { h2: `Golf buggy for sale Brisbane, golf buggy for sale QLD and golf buggy for sale Gold Coast`, p: [
        `If you want a golf buggy for sale Brisbane, a golf buggy for sale QLD or a golf buggy for sale Gold Coast, you can order online and we deliver to Queensland. Golf carts for sale QLD and golf carts Gold Coast buyers can browse our [golf carts](/golf-carts/for-sale/) and [golf buggies for sale](/golf-buggies/for-sale/).`,
      ] },
      { h2: `Golf buggy for sale NSW and golf carts for sale Perth, Melbourne and Adelaide`, p: [
        `We are based in Sydney, so a golf buggy for sale NSW or golf carts for sale NSW ships from close by. We also deliver golf carts for sale Melbourne, golf carts for sale Perth and golf carts for sale Adelaide buyers expect: freight is confirmed before you pay. For a golf buggy for sale Perth, or a freight quote on golf carts Perth buyers ask about, message us your postcode.`,
      ] },
      { h2: `Golf carts for sale near me`, p: [
        `Searching for golf carts for sale near me? We sell online and deliver Australia-wide, so your nearest option is a delivery to your door; ask us about pickup options. Looking for golf cart batteries Brisbane buyers can also order our [lithium batteries](/parts-accessories/golf-buggy-parts/lithium-batteries/). For general consumer rights on online orders, the [ACCC consumer guide](https://www.accc.gov.au/consumers) is a good reference.`,
      ] },
    ],
    faqs: [
      [`Do you sell golf carts for sale in Brisbane?`, `Yes. We deliver to Brisbane and the rest of Queensland. See our [golf carts for sale](/golf-carts/for-sale/).`],
      [`Can I buy a golf buggy in Sydney?`, `Yes. Our head office is in Sydney and we deliver throughout NSW.`],
      [`Do you deliver to Perth?`, `Yes. Freight to Western Australia is quoted at checkout or by our team.`],
      [`Can I collect in person?`, `Contact us about pickup options and showroom visits.`],
      [`How long does delivery take?`, `Depot dispatch is typically within 24 to 48 business hours, then freight time depends on your location. See our [delivery page](/delivery/).`],
      [`Do you have golf carts for sale in Melbourne or Adelaide?`, `Yes. We deliver golf carts to Melbourne, Adelaide and every other capital city; freight is confirmed before you pay.`],
      [`Is there a golf buggy for sale in NSW?`, `Yes. We are Sydney-based and deliver golf buggies and golf carts throughout NSW. See our [golf buggies for sale](/golf-buggies/for-sale/).`],
    ],
  },

  '/golf-carts/for-sale/': {
    intro: [
      `Browse golf carts for sale in Australia: new two seat, four seat and larger electric carts in a range of specifications. Prices include GST, and delivery is confirmed before you pay.`,
      `Each listing gives you seat count, drivetrain details and delivery information. Ask us about extras, accessories and payment options.`,
    ],
    guides: [
      { h2: `How to buy a golf cart online`, p: [
        `Pick your seat layout, then check battery type and warranty. Contact us if you want a particular colour or accessory package. We will confirm lead time and freight before you pay. We accept bank transfer (Osko or EFT), PayID and crypto (Bitcoin or USDT). Crypto payments get an extra 10% discount at checkout.`,
      ] },
      { h2: `Golf cart for sale: price, seats and golf cart sales`, p: [
        `A golf cart for sale here is listed with its real golf cart price including GST, so you can compare golf cart sales across seat layouts. Our [electric golf carts](/golf-carts/electric/) cover most golf and estate use, our [utility four seaters](/golf-carts/utility-4-seater/) suit work, and [used golf carts](/golf-carts/used/) and [petrol golf carts](/golf-carts/petrol/) have their own pages. Our guide to [how much a golf cart costs in Australia](/blog/how-much-does-a-golf-cart-cost-in-australia/) explains what changes the price.`,
      ] },
      { h2: `Buy golf cart models: golf cart price and delivery`, p: [
        `When you buy golf cart models from us, the golf cart price on the listing is the price you pay, including GST, with freight confirmed before you pay. Free delivery applies over $1,000 to major metro areas and depot corridors, so most carts ship free. Ask us about accessories, roofs and windscreens, and add a lithium upgrade or charger to the same order if you need one.`,
      ] },
      { h2: `Golf carts for sale Australia-wide, and golf cars for sale`, p: [
        `Whether you want to buy golf cart models for a club, resort, farm or home, we deliver golf carts for sale Australia-wide, with golf cars for sale options in two to eight seats. See our [locations page](/golf-buggies/for-sale-locations/) for city delivery and [Golf cart overview on Wikipedia](https://en.wikipedia.org/wiki/Golf_cart) for background on how carts work. Prefer a smaller walking buggy? See our [golf buggies for sale](/golf-buggies/for-sale/).`,
      ] },
      { h2: `Low price golf carts, inexpensive golf carts and golf car cost`, p: [
        `Low price golf carts and inexpensive golf carts start with our used range, from about $4,900, while new electric carts begin from about $10,800. The golf car cost depends on seats, battery and age, so compare the golf car price across new golf carts and [used golf carts](/golf-carts/used/). We list new golf carts for sale Australia-wide, and Australian golf carts shoppers can have them delivered with freight confirmed before payment. Our guide to [what a golf cart costs in Australia](/blog/how-much-does-a-golf-cart-cost-in-australia/) explains the range.`,
      ] },
    ],
    faqs: [
      [`What is the price of a golf cart in Australia?`, `New electric carts start from around $10,800 and rise with size and specification. All prices include GST.`],
      [`Can I buy a golf cart near me?`, `We deliver across Australia, so you can buy online wherever you are. See our [locations page](/golf-buggies/for-sale-locations/).`],
      [`Do you offer used or second-hand carts?`, `Yes. See our [used golf carts](/golf-carts/used/) for current stock, and ask us if you want a particular model.`],
      [`Do golf carts come with warranty?`, `The manufacturer warranty applies, and conditions are provided with your order.`],
      [`How long is delivery?`, `Depot dispatch within 24-48 business hours, then freight time to you.`],
      [`Do you sell golf cars for sale as well as golf carts?`, `Golf car and golf cart mean the same vehicle. Everything on this page is available as a golf car for sale.`],
      [`Is there a golf buggy price list?`, `Each listing shows the current price. For walking buggies see our [golf buggies for sale](/golf-buggies/for-sale/).`],
    ],
  },

  '/golf-carts/used/': {
    intro: [
      `Looking for 2nd hand golf carts for sale, used golf carts or a second-hand golf cart? Used carts can save thousands, but each one needs a proper check of batteries, electrics and chassis. Tell us what you are looking for and we will help you source and inspect it.`,
      `We list used carts online, including Club Car, EZGO, ECAR and Tomberlin models. For anything else, contact us with your budget, seat count and preferred brand.`,
    ],
    guides: [
      { h2: `What to check when buying a used golf cart`, p: [
        `Check battery age and test range, because replacing batteries is the biggest cost. Test the controller, brakes, steering and tyres. Ask for service records and the serial number. A lithium conversion can give an older cart new life: see our [lithium battery packages](/parts-accessories/golf-buggy-parts/lithium-batteries/). Our guides to [used golf carts on sale](/blog/used-golf-carts-on-sale/) and [2nd hand golf carts](/blog/2nd-hand-golf-carts/) cover the full checklist.`,
      ] },
      { h2: `2nd hand golf carts for sale and second hand golf carts`, p: [
        `Our 2nd hand golf carts for sale and second hand golf carts range from a few years old to older carts that need work. Used golf cart for sale listings show the year, seats and condition notes, and you can compare second hand golf carts near me options by asking us about delivery. A used golf cart for sale with lithium batteries will cost more than one with older lead-acid packs. For general guidance, see [NSW Fair Trading on second-hand goods](https://www.fairtrading.nsw.gov.au/buying-products-and-services/second-hand-goods).`,
      ] },
      { h2: `Used golf buggy for sale and used golf buggies`, p: [
        `A used golf buggy for sale, or golf buggy for sale used, can also mean a smaller walking buggy rather than a cart. We list used golf carts online; for used golf buggies and 2nd hand electric golf carts for sale, message us and we will tell you what we can source. Compare new options on our [electric golf buggies](/golf-buggies/motorised-electric/) page.`,
      ] },
      { h2: `Second hand golf carts for sale: used golf buggy for sale and golf buggy for sale used`, p: [
        `Our second hand golf carts for sale are used four seaters and a few two seaters from brands such as ECAR, EZGO, Club Car and Tomberlin. A for sale used golf carts search, or one for a used golf buggy for sale or golf buggy for sale used, lands on the same listings: each cart is a real unit with its own price including GST, so compare the year, battery voltage and wheel size, and message us about condition and battery age before you pay. Freight is confirmed to your postcode, and our guide to [buying a 2nd hand golf cart](/blog/2nd-hand-golf-carts/) explains what to check.`,
      ] },
    ],
    faqs: [
      [`How much is a used golf cart?`, `Used carts on our site range from about $4,900 to $13,700, depending on age, brand and battery condition. All prices include GST.`],
      [`Are used golf carts reliable?`, `They can be, if batteries and electrics have been checked. Always inspect before buying.`],
      [`Can I upgrade a used cart to lithium?`, `Yes. We stock lithium packages for Club Car Precedent, EZGO RXV, Yamaha and ECAR models. See [lithium batteries](/parts-accessories/golf-buggy-parts/lithium-batteries/).`],
      [`Do you buy used carts?`, `Contact us to discuss trade-ins and consignment.`],
      [`Where can I find second hand golf carts for sale near me?`, `We sell online and deliver Australia-wide. Message us your location, budget and requirements and we will point you to suitable options.`],
      [`Do you sell used golf buggies for sale?`, `We list used golf carts online. For used golf buggies, message us with what you need.`],
      [`Is a 2nd hand electric golf cart a good idea?`, `It can be, if the battery has been checked. Ask the age and type of the battery and compare the price with a new lithium cart.`],
    ],
  },

  '/golf-carts/petrol/': {
    intro: [
      `Petrol golf carts for sale suit long days, heavy duty work and places where charging is hard. If you are after a petrol golf cart, tell us your seat count and budget and we will source options.`,
      `We list the Club Car Tempo and Onward petrol golf carts. Electric carts are quieter and cheaper to run, so compare before you commit.`,
    ],
    guides: [
      { h2: `Petrol or electric?`, p: [
        `Petrol carts refuel in minutes and cope with long shifts. Electric carts are quieter, have fewer moving parts and cost less to run. Lithium electric carts now cover most golf and estate use: see our [electric golf carts](/golf-carts/electric/). Used petrol carts can be inexpensive but need inspection of engine condition, service history and drive belt.`,
      ] },
      { h2: `Used gas golf cart prices and golf cart purchase tips`, p: [
        `Used gas golf cart prices vary with age, hours and condition, so compare several carts before a golf cart purchase. Ask for the service history, check the drive belt and brakes, and test the engine from cold. If you would rather not service an engine, a [lithium electric golf cart](/golf-carts/electric/) has fewer moving parts.`,
      ] },
      { h2: `Petrol golf cart for sale: Club Car and gas golf carts`, p: [
        `A petrol golf cart for sale from [Club Car](/brands/club-car/) is a good choice for heavy duty or long shifts. A petrol golf buggy for sale or golf cart purchase of a gas cart should include a check of the engine, belt and brakes, and used gas golf cart prices vary widely with age and hours. If you are comparing used carts, read our [used golf carts](/golf-carts/used/) page. For background on how golf carts work, see the [golf cart overview on Wikipedia](https://en.wikipedia.org/wiki/Golf_cart).`,
      ] },
    ],
    faqs: [
      [`How much is a petrol golf cart?`, `Our petrol golf carts start from around $14,700, and the Club Car Onward costs more. All prices include GST.`],
      [`Are petrol carts better than electric?`, `Petrol suits heavy duty work and long shifts. Electric suits golf, resort and estate use.`],
      [`Do you sell used gas golf carts?`, `Ask us. We can source options on request, and you can see our [used golf carts](/golf-carts/used/).`],
      [`Where can I service a petrol golf cart?`, `Contact us for parts and service advice.`],
      [`Can I convert petrol to electric?`, `Conversions exist but usually cost more than buying a purpose-built electric cart.`],
      [`What do used gas golf cart prices look like?`, `They vary with age, hours and condition, so compare several carts and always inspect the engine and belt before you buy.`],
    ],
    cta: `Ask about petrol golf carts`,
  },

  '/golf-carts/electric/': {
    intro: [
      `Our electric golf carts use modern lithium power for quiet, low-cost running. Browse ECAR Lithium A2, IKON HD, Magnum and Compass carts and Tomberlin E-Merge models from two to eight seats.`,
      `Electric golf carts suit golf, resorts, estates and campuses. They are quiet, clean and easy to charge at home, and every electric golf cart for sale here is delivered Australia-wide.`,
    ],
    guides: [
      { h2: `Why choose an electric golf cart?`, p: [
        `Electric carts cost less to run, need less servicing and are very quiet. Lithium batteries are lighter than lead-acid and are designed to last for years. Check charging requirements, because most carts charge from a standard wall outlet. Our guide to [electric carts](/blog/electric-carts/) explains how they work, and [lithium iron phosphate batteries on Wikipedia](https://en.wikipedia.org/wiki/Lithium_iron_phosphate_battery) explains the chemistry.`,
      ] },
      { h2: `Electric golf carts for sale and electric carts for sale in Australia`, p: [
        `We list electric golf carts for sale and electric carts for sale from [ECAR](/brands/ecar/) and Tomberlin, in two, four, six and eight seat layouts. An electric golf cart Australia buyers choose is usually lithium, and a motorized golf cart or electric motorized golf cart is the same vehicle. For a smaller walking option, see our [electric golf buggies](/golf-buggies/motorised-electric/).`,
      ] },
      { h2: `Electric golf buggies by city`, p: [
        `Looking for electric golf buggies Sydney, electric golf buggies Melbourne or electric golf buggies Adelaide? We deliver across Australia, and freight is confirmed before you pay; see our [locations page](/golf-buggies/for-sale-locations/). An estate electric golf buggy or electric golf push cart is a lighter option for a golf course. Browse [push buggies](/golf-buggies/push-pull-trolleys/) for those.`,
      ] },
    ],
    faqs: [
      [`What is the best electric golf cart?`, `It depends on seat count and usage. ECAR Magnum and Compass suit premium and resort use. IKON HD suits heavy duty and commercial use.`],
      [`How long do electric golf cart batteries last?`, `Lithium batteries are designed for many years of use. Care and use matter.`],
      [`How much is an electric golf cart?`, `Prices start from around $10,800 and increase with specification.`],
      [`Are electric carts street legal?`, `Not generally. They are for private property and the course unless registered and compliant. Check your state rules, and see our [road rules guide](/blog/can-you-drive-a-golf-cart-on-the-road-in-australia/).`],
      [`Can I charge it at home?`, `Most carts charge from a standard power outlet. Check each model.`],
      [`Do you sell electric golf buggies in Sydney, Melbourne and Adelaide?`, `Yes. We deliver electric golf buggies and carts to Sydney, Melbourne, Adelaide and everywhere else in Australia.`],
      [`Is there an electric golf cart with remote control?`, `Remote control is a golf buggy feature rather than a cart feature. See our [remote control golf buggies](/golf-buggies/remote-control/).`],
    ],
  },

  '/golf-carts/utility-4-seater/': {
    intro: [
      `Need a 4 seater golf cart or a utility cart? This range includes four, six and eight seat ECAR carts and utility models built to carry people and loads around resorts, farms and estates.`,
      `Electric drive keeps running costs low, and rugged builds handle daily commercial use.`,
    ],
    guides: [
      { h2: `Seating and load options`, p: [
        `Pick seats first: four seats suits families and small groups, six or eight suits resorts and shuttles. Utility carts add load beds and racks for tools and supplies. Ask about accessories like seat belts, rain curtains and mats; see our [golf cart accessories](/parts-accessories/golf-cart-accessories/).`,
      ] },
      { h2: `Four seater golf cart, 4 seater golf buggy and utility golf cart`, p: [
        `A four seater golf cart carries two rows of passengers, and some buyers search for a 4 seater golf buggy or a 4 seater golf buggy for sale when they mean the same thing. A utility golf cart adds a load bed, and an electric utility cart for sale from [ECAR](/brands/ecar/) keeps running costs low. Browse the full [golf cart range](/golf-carts/) for other seat counts.`,
      ] },
      { h2: `Electric utility cart for sale`, p: [
        `An electric utility cart for sale here carries people and gear with low running costs and little servicing. Choose the seat layout first, then the load bed, and ask us about options such as roofs, windscreens and racks. Our [electric golf carts](/golf-carts/electric/) cover the passenger-only models.`,
      ] },
      { h2: `Using a 4 seater golf cart safely at work`, p: [
        `If a cart will be used for work, plan driver training, load limits and safe routes. [Safe Work Australia](https://www.safeworkaustralia.gov.au/) publishes guidance on safety at work.`,
      ] },
    ],
    faqs: [
      [`What is a four seater golf cart?`, `A golf cart with two rows of seats carrying four passengers.`],
      [`How much does a four seater cost?`, `Four-seat carts start from around $12,700, and utility models from around $17,400. All prices include GST.`],
      [`Are utility carts different from golf carts?`, `Utility carts have load beds and heavier duty builds for work.`],
      [`Do they come in electric?`, `Yes. Our range is lithium electric.`],
      [`Can I add accessories?`, `Yes. See our [accessories pages](/parts-accessories/golf-cart-accessories/) for seat belts, mats, lights and more.`],
      [`Is a 4 seater golf buggy the same as a golf cart?`, `People use the terms loosely. A four-seat ride-in vehicle is a golf cart; see our [golf carts](/golf-carts/).`],
    ],
  },

  '/golf-carts/mini-junior/': {
    intro: [
      `A kids golf buggy, mini golf cart or junior golf cart is a smaller vehicle for young golfers and compact uses. If you are after a kids golf cart or junior golf buggy, contact us and we will help match a safe, age-appropriate option.`,
      `For children we recommend supervised use, helmets and age-appropriate speed.`,
    ],
    guides: [
      { h2: `Choosing a kids golf cart or kids golf buggy`, p: [
        `Check age and weight guidance, speed limiters and whether the vehicle has parental controls. Always supervise children and follow the manufacturer guidance. Our listing for a [kids 24V electric golf cart ride-on](/products/kids-24v-electric-golf-cart-ride-on-with-canopy/) is an example of a kids golf buggy sized for younger children, and our [kids buggies](/off-road-buggies/kids-buggies/) range includes youth quads and buggies.`,
      ] },
      { h2: `Junior golf buggy and custom golf carts`, p: [
        `A junior golf buggy suits young golfers who want to ride, while custom golf buggy or custom golf carts and custom carts are full-size carts with extras. For a custom golf buggy, see our [golf cart accessories](/parts-accessories/golf-cart-accessories/) such as wheels, seats and lighting. For product safety guidance on toys and ride-ons, see the [Australian Government product safety site](https://www.productsafety.gov.au/).`,
      ] },
    ],
    faqs: [
      [`Do you sell kids golf carts?`, `Yes. See the [kids 24V electric golf cart ride-on](/products/kids-24v-electric-golf-cart-ride-on-with-canopy/), and our [kids buggies](/off-road-buggies/kids-buggies/) for youth off-road vehicles.`],
      [`What age is a mini golf cart for?`, `It depends on the model. Check the manufacturer guidance.`],
      [`Are they safe?`, `Use supervised play, helmets and a controlled environment.`],
      [`How much do they cost?`, `Prices vary by model and are listed on each product page, including GST.`],
      [`Can I buy a junior golf buggy?`, `Junior buggies may be available. Message us with your needs.`],
      [`Can I get custom golf carts?`, `Full-size carts take accessories such as wheels, seats and lights; see [golf cart accessories](/parts-accessories/golf-cart-accessories/) and message us for options.`],
    ],
    cta: `Ask about junior golf carts`,
  },
};
