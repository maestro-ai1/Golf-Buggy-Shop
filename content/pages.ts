// Page copy keyed by URL. Original writing. Primary keyword used naturally once in the intro, secondaries in guides/FAQs.
export interface PageCopy {
  intro: string[];
  guides: { h2: string; p: string[] }[];
  faqs: [string, string][];
  cta?: string;
}

export const COPY: Record<string, PageCopy> = {
  '/golf-buggies/': {
    intro: [
      'Looking for a golf buggy that suits the way you play? Our golf buggy range covers every budget and style: simple push buggies, motorised electric buggies, hands-free remote models and seated ride-on buggies, all from brands Australian golfers already trust.',
      'Every buggy on this page includes GST and is delivered Australia-wide. Browse the collections below, compare specifications side by side, or message us and we will help you match a buggy to your course, your bag and your budget.',
    ],
    guides: [
      { h2: 'Push, electric, remote or ride-on: which buggy fits you?', p: ['Push buggies are the lightest and cheapest option, and they need no charging. Electric buggies add a motor so you simply steer. Remote models follow your commands and let you walk completely unburdened, while ride-on buggies seat you for those long rounds or mobility needs.', 'Think about the hills on your usual course, how far you carry the buggy to the car, and whether you want GPS. Those three questions narrow the choice quickly.'] },
      { h2: 'What to check before you buy', p: ['Check that the buggy folds small enough for your boot, that your golf bag suits the bag holder, and that the battery type matches how often you play. Lithium batteries are lighter and last longer between charges than older lead-acid packs.', 'Not sure? Call us on 0420 128 746 or use WhatsApp and tell us your course and your bag type.'] },
    ],
    faqs: [
      ['What is a golf buggy?', 'A golf buggy is a wheeled carrier for your golf bag. Push buggies are pushed by hand, electric and remote buggies have a motor, and ride-on buggies carry the golfer as well.'],
      ['Which golf buggy should I buy?', 'Choose a push buggy for the lowest cost, an electric or remote buggy for a hands-free round, and a ride-on buggy if you need to sit. Start with your budget, your course terrain and how you transport the buggy.'],
      ['How much does a golf buggy cost in Australia?', 'Push buggies start from a few hundred dollars, electric and remote buggies run from around $1,200 up to $3,300, and ride-on buggies cost more. Every price on this site includes GST.'],
      ['Do you deliver golf buggies Australia-wide?', 'Yes. Orders over $1,000 ship free to major metro and depot corridors, and a flat $95 freight fee applies below that threshold.'],
      ['Is a golf buggy the same as a golf cart?', 'In Australia people use the words loosely. A golf buggy usually means the smaller walking buggy that carries your bag. A golf cart is the larger vehicle you ride in.'],
    ],
  },
  '/golf-buggies/for-sale/': {
    intro: [
      'Shop golf buggies for sale from MGI, Stinger, PowerBug, QOD, Concourse and more, with push, electric, remote and ride-on options in one place. Each listing shows a clear price, key specifications and delivery details.',
      'Compare specifications, prices and delivery on every model, so you can buy a new golf buggy online with confidence. Sort by price or category to find your match.',
    ],
    guides: [
      { h2: 'Buy a new golf buggy online with confidence', p: ['New buggies come with manufacturer warranty, fresh batteries and the latest features. We list full specifications so you can compare weight, range, battery type and bag compatibility before you order.', 'If you are comparing us with another retailer, compare the final delivered price. Orders over $1,000 ship free to major metro and depot corridors.'] },
    ],
    faqs: [
      ['Where can I buy a golf buggy?', 'You can buy a new golf buggy online from us and have it delivered Australia-wide. Browse the range above, add your favourite to the cart and check out with bank transfer (Osko or EFT), PayID or crypto.'],
      ['How much is a new golf buggy?', 'Prices depend on the type. Push buggies cost the least, and electric and remote buggies cost more. All prices on this page include GST.'],
      ['Do you sell cheap golf buggies?', 'Yes. Our push buggies are the lowest-cost way to stop carrying your bag, and our prices are set below comparable Australian retailers.'],
      ['Can I buy a golf buggy on sale?', 'We list our lowest current prices every day. Check the clearance page for current deals and ask us about bundles.'],
      ['How do I choose between brands?', 'Compare weight, folding size, battery type, warranty and whether you want GPS. Our specification tables show these side by side.'],
    ],
  },
  '/golf-buggies/motorised-electric/': {
    intro: [
      'A motorised golf buggy takes the effort out of every round. Our electric golf buggies for sale include compact folding models from MGI and PowerBug, all-terrain buggies from QOD and the ride-on i-MotionCaddys IM4.',
      'Electric buggies are quiet, easy to steer and gentle on your back. Choose lithium models for lighter weight and longer life between charges.',
    ],
    guides: [
      { h2: 'Electric golf buggy features that matter', p: ['Look at battery capacity, motor power, folded size and weight. Down-hill control keeps the buggy steady on slopes, and an electronic park brake stops it rolling on uneven ground.', 'GPS models add yardages to your screen so you can leave the rangefinder at home.'] },
      { h2: 'Lithium or lead-acid?', p: ['Lithium batteries are lighter, charge faster and typically last longer than lead-acid. Most new electric buggies now ship with lithium. If you own an older buggy we also stock replacement lithium batteries and chargers.'] },
    ],
    faqs: [
      ['What is the best electric golf buggy in Australia?', 'The best buggy depends on your course. MGI and PowerBug are popular for compact folding electric buggies, while QOD and Concourse suit golfers who want remote control. Compare specs and ask us if you need help.'],
      ['How far does an electric golf buggy go?', 'Range depends on the battery and the terrain. Specification tables on each listing show battery size, and bigger lithium packs cover more holes per charge.'],
      ['Can I fit a motor to a push buggy?', 'Some push buggies can be converted, but a purpose-built electric buggy is usually simpler and safer. Ask us about conversion options.'],
      ['How long do golf buggy batteries last?', 'Lithium batteries typically last longer than lead-acid and keep steady power through the round. Care and charging habits matter. See our batteries page for replacements.'],
      ['Do I need a licence to use an electric golf buggy?', 'Walking golf buggies are used on the course, not on public roads. Always follow your club or venue rules.'],
    ],
  },
  '/golf-buggies/remote-control/': {
    intro: [
      'A remote control golf buggy follows your commands so you can walk the course with nothing in your hands. Our range of remote golf buggies includes MGI Zip Navigator, MGI Ai models, QOD and Concourse, each with a remote that sends the buggy ahead or calls it back.',
      'Remote buggies are the premium end of the market. They cost more than a push or standard electric buggy, but they save time and energy over 18 holes.',
    ],
    guides: [
      { h2: 'How a remote golf buggy works', p: ['Most remote buggies use a handheld remote with buttons for forward, stop and call-back, and some track you automatically. The buggy carries your bag on its own frame, and you decide when to send it on.', 'Check the remote range, battery life and what happens if the signal drops before you buy.'] },
      { h2: 'Which remote golf buggy is right for me?', p: ['Choose a GPS remote model if you want yardages on a screen. Choose a simpler remote model if you mostly want hands-free movement. Our listings show the main specifications side by side.'] },
    ],
    faqs: [
      ['What is a remote control golf buggy?', 'It is an electric golf buggy that you control with a handheld remote, so it can move ahead or return to you without you pushing it.'],
      ['How much is a remote control golf buggy?', 'Prices typically run from around $1,900 to over $3,000 depending on the model and features. Every price on this site includes GST.'],
      ['Can I use a remote golf buggy on any course?', 'Most courses allow them, but some restrict powered buggies. Check with your club.'],
      ['Is the remote included?', 'Yes, remote models include a remote. Check each listing for details and accessories.'],
      ['Do remote buggies fit my golf bag?', 'Most fit cart and stand bags, but not every stand or carry bag is compatible. Check the bag-fit note on each listing or contact us.'],
    ],
  },
  '/golf-buggies/push-pull-trolleys/': {
    intro: [
      'A golf trolley, also called a push or pull buggy, is the simplest way to stop carrying your bag. Our push golf buggies from Stinger fold fast, roll smoothly and include the extras golfers actually use.',
      'Because they have no motor or battery, push buggies are the lowest-cost and lowest-maintenance buggies. Many golfers start here and upgrade to electric later.',
    ],
    guides: [
      { h2: 'What to look for in a push buggy', p: ['Check folded size, weight and the width of the wheel track. A wider track is more stable on slopes. Look for a built-in phone holder, drink holder and umbrella holder to avoid buying extras.', 'Three-wheel designs are stable and easy to steer. Four-wheel designs can sit lower and be more compact.'] },
    ],
    faqs: [
      ['What is the difference between a push buggy and an electric buggy?', 'A push buggy has no motor, so you push or pull it. An electric buggy has a motor and battery that move it for you.'],
      ['Which push golf buggy should I buy?', 'Pick the model that folds small enough for your car and has the storage you want. Our Stinger range goes from simple to fully featured.'],
      ['Are push buggies good for hilly courses?', 'Yes, but a wide wheel track and good brakes help a lot. For very hilly courses consider an electric buggy.'],
      ['Do I need to assemble a push buggy?', 'Most arrive nearly ready and need only a few steps. Instructions come with the buggy.'],
      ['What does a golf trolley cost?', 'Push buggies are the cheapest buggies. Check the listings above for current prices.'],
    ],
  },
  '/golf-buggies/caddies-electric-trolleys/': {
    intro: ['A golf caddy buggy carries your clubs so you can focus on the game. This page brings together golf caddies and electric trolleys for golfers who want motorised help without the cost of a full remote buggy.', 'Browse our electric buggies and push buggies below, and ask us if you need help choosing between a caddy-style trolley and a full electric buggy.'],
    guides: [{ h2: 'Caddy, trolley or buggy?', p: ['In Australia people use these words interchangeably. In practice, a caddy or trolley usually means a lighter, simpler buggy, while buggy often refers to a more feature-rich model. Compare weight, motor and folding size to choose.'] }],
    faqs: [
      ['What is an electric golf trolley?', 'It is a motorised trolley that carries your clubs and moves under its own power, so you steer rather than push.'],
      ['Are electric trolleys heavy?', 'Weight varies. Lithium trolleys are lighter, and our listings state weight where the manufacturer provides it.'],
      ['Can I add accessories?', 'Yes. We stock umbrella holders, phone holders, drink holders and bags for most buggies.'],
      ['Do you sell motorised golf caddies?', 'Yes. See our electric buggies and remote models above.'],
      ['How do I choose?', 'Decide how much help you want. Push buggies need no power, electric buggies move for you, and remote buggies are the hands-free option.'],
    ],
  },
  '/golf-buggies/ride-on-seated/': {
    intro: ['A ride-on golf buggy with a seat is for golfers who prefer to sit between shots or who need a little extra support. Our ride-on and seated golf buggies carry both you and your clubs with strong motors and long-range batteries.', 'These buggies suit larger courses, hilly terrain and golfers with limited mobility.'],
    guides: [{ h2: 'Seated buggy or golf cart?', p: ['A ride-on buggy is smaller and cheaper than a full golf cart and easier to store. A golf cart seats two to four and suits clubs, resorts and estates.', 'Compare range, load capacity and tyre size before you decide.'] }],
    faqs: [
      ['What is a ride-on golf buggy?', 'A ride-on golf buggy is a compact electric buggy you sit on, often with room for your clubs.'],
      ['How far does it go?', 'Range depends on the battery and terrain. Specifications are on each listing.'],
      ['Can I use it on the road?', 'Rules vary by state, and golf carts and buggies are generally for private property or the course. Check your state transport authority.'],
      ['How much does a ride-on golf buggy cost?', 'Ride-on buggies cost more than walking buggies. See current prices above.'],
      ['Can it climb hills?', 'Check the motor and climb rating on the specification table.'],
    ],
  },
  '/golf-buggies/3-wheel/': {
    intro: ['A 3 wheel golf buggy is stable, easy to steer and quick to fold. Our three-wheel push buggies from Stinger are popular for their smooth rolling and compact fold.', 'Three-wheel designs are simple to use and suit most golfers on most courses.'],
    guides: [{ h2: 'Three wheels or four?', p: ['Three-wheel buggies steer easily and are light. Four-wheel buggies can be more stable on side slopes. Most golfers do well with either, and our listings explain the folding action.'] }],
    faqs: [
      ['What is a three wheel golf buggy?', 'It is a push buggy with two rear wheels and one front wheel, usually swivelling for easy steering.'],
      ['Are three wheel buggies stable?', 'Yes, particularly models with a wide rear track.'],
      ['Do they fold small?', 'Yes. Most three-wheel buggies fold into a compact shape.'],
      ['Can I add a seat?', 'Some models have an optional seat kit. See the accessories section.'],
      ['Are they good for older golfers?', 'Their light weight and easy handling make them a good choice.'],
    ],
  },
  '/golf-buggies/golf-scooters/': {
    intro: ['A golf scooter or electric golf board changes how you move around the course. The Golf Skate Caddy Tourer carries your clubs while you stand and ride, so you cover ground fast.', 'Golf scooters are a niche but fun alternative to buggies. Check your club rules, as some limit powered boards.'],
    guides: [{ h2: 'Is a golf scooter right for me?', p: ['Golf scooters suit confident golfers who want speed and a bit of fun. If you prefer a calm walk, a push or electric buggy may be better. We can help you decide.'] }],
    faqs: [
      ['What is a golf scooter?', 'A stand-up electric board built to carry a golf bag around the course.'],
      ['Are golf scooters allowed on all courses?', 'No. Check with your club before buying.'],
      ['How much does one cost?', 'Prices are listed on the product page.'],
      ['Is it hard to ride?', 'Most golfers learn quickly, but start slowly.'],
      ['Can I add a seat?', 'Yes. A fold-away seat accessory is available for compatible models.'],
    ],
  },
  '/golf-buggies/for-sale-locations/': {
    intro: ['We deliver golf buggies and golf carts across Australia, including Brisbane, Sydney, Melbourne, Perth, Adelaide and the Gold Coast. This page explains how delivery works wherever you live and how to buy a golf cart for sale near you.', 'Not sure about freight to your suburb or regional town? Message us your postcode and we will confirm the cost before you order.'],
    guides: [{ h2: 'Delivery across Australia', p: ['Orders over $1,000 ship free to major metro and depot corridors. Below that, a flat $95 freight fee applies. Regional and remote deliveries may need a quote.', 'Our depots and carriers cover New South Wales, Queensland, Victoria, South Australia, Western Australia, Tasmania and the ACT.'] }],
    faqs: [
      ['Do you sell golf carts for sale in Brisbane?', 'Yes. We deliver to Brisbane and the rest of Queensland.'],
      ['Can I buy a golf buggy in Sydney?', 'Yes. Our head office is in Sydney and we deliver throughout NSW.'],
      ['Do you deliver to Perth?', 'Yes. Freight to Western Australia is quoted at checkout or by our team.'],
      ['Can I collect in person?', 'Contact us about pickup options and showroom visits.'],
      ['How long does delivery take?', 'Depot dispatch is typically within 24 to 48 business hours, then freight time depends on your location.'],
    ],
  },
  '/golf-carts/': {
    intro: [
      'Shop golf carts for new, electric and lithium models. Our golf cart range includes ECAR and Tomberlin carts in two, four, six and eight seat layouts for golf clubs, resorts, estates, farms and private properties.',
      'Every cart includes GST and is delivered across the country. Compare models, accessories and lithium upgrades in one place.',
    ],
    guides: [
      { h2: 'Choosing the right golf cart', p: ['Start with the number of seats, then the job: golf, resort transport, estate use or utility work. Then look at battery type. Lithium carts are lighter, need less maintenance and typically hold their performance better than lead-acid.', 'Ask about warranty, servicing and how parts are supported in your area.'] },
      { h2: 'New, used or petrol?', p: ['New electric carts offer the lowest running cost and full warranty. Used carts cost less up front but need inspection of batteries and electrics. Petrol carts suit long days and heavy duty work. Ask us what we can source.'] },
    ],
    faqs: [
      ['Can you drive a golf cart on the road in Australia?', 'Rules differ by state and territory. Golf carts are generally for private property and the course unless registered and compliant. Check with your state transport authority before using one on a public road.'],
      ['How much is a golf cart?', 'New electric golf carts start around $11,000 and go up for larger and premium models. All prices on this site include GST.'],
      ['Are golf carts electric or petrol?', 'Most new carts are electric, and lithium is now the standard for quality models. Petrol carts exist for heavy duty use. Ask us about availability.'],
      ['What are golf cart dimensions?', 'Dimensions vary by model and seat count. Check the specification table on each listing, or ask us for a size sheet.'],
      ['Do you sell golf cart accessories and parts?', 'Yes. Browse our lithium batteries, wheels, lighting, seat belts, mats and holders.'],
    ],
  },
  '/golf-carts/for-sale/': {
    intro: ['Browse golf carts for sale in Australia: new two seat, four seat and larger electric carts in a range of specifications. Prices include GST and are set below comparable Australian retailers.', 'Each listing gives you seat count, drivetrain details and delivery information. Ask us about extras, accessories and finance-style payment options.'],
    guides: [{ h2: 'How to buy a golf cart online', p: ['Pick your seat layout, then check battery type and warranty. Contact us if you want a particular colour or accessory package. We will confirm lead time and freight before you pay.', 'We accept bank transfer (Osko or EFT), PayID and crypto (Bitcoin or USDT). Crypto payments get an extra 10% discount at checkout.'] }],
    faqs: [
      ['What is the price of a golf cart in Australia?', 'New electric carts start from around $11,000 and rise with size and specification. All prices include GST.'],
      ['Can I buy a golf cart near me?', 'We deliver across Australia, so you can buy online wherever you are.'],
      ['Do you offer used or second-hand carts?', 'Ask us about used stock. We list verified new stock online and can source used carts on request.'],
      ['Do golf carts come with warranty?', 'The manufacturer warranty applies, and conditions are provided with your order.'],
      ['How long is delivery?', 'Depot dispatch within 24-48 business hours, then freight time to you.'],
    ],
  },
  '/golf-carts/used/': {
    intro: ['Looking for used golf carts for sale or a second-hand golf cart? Used carts can save thousands, but each one needs a proper check of batteries, electrics and chassis. Tell us what you are looking for and we will help you source and inspect it.', 'We list verified new stock online. For used and second-hand carts, contact us with your budget, seat count and preferred brand.'],
    guides: [{ h2: 'What to check when buying a used golf cart', p: ['Check battery age and test range, because replacing batteries is the biggest cost. Test the controller, brakes, steering and tyres. Ask for service records and the serial number.', 'A lithium conversion can give an older cart new life. See our lithium battery packages.'] }],
    faqs: [
      ['How much is a used golf cart?', 'Prices vary with age, brand and battery condition. Ask us for current options.'],
      ['Are used golf carts reliable?', 'They can be, if batteries and electrics have been checked. Always inspect before buying.'],
      ['Can I upgrade a used cart to lithium?', 'Yes. We stock lithium packages for Club Car Precedent, EZGO RXV, Yamaha and ECAR models.'],
      ['Do you buy used carts?', 'Contact us to discuss trade-ins and consignment.'],
      ['Where can I find used golf carts for sale near me?', 'Message us your location, budget and requirements and we will point you to suitable options.'],
    ],
    cta: 'Tell us what used cart you are after',
  },
  '/golf-carts/petrol/': {
    intro: ['Petrol golf carts for sale suit long days, heavy duty work and places where charging is hard. If you are after a petrol golf cart, tell us your seat count and budget and we will source options.', 'Electric carts are quieter and cheaper to run, so compare before you commit.'],
    guides: [{ h2: 'Petrol or electric?', p: ['Petrol carts refuel in minutes and cope with long shifts. Electric carts are quieter, have fewer moving parts and cost less to run. Lithium electric carts now cover most golf and estate use.', 'Used petrol carts can be inexpensive but need inspection. Check engine condition, service history and drive belt.'] }],
    faqs: [
      ['How much is a petrol golf cart?', 'Prices depend on age, brand and condition. Contact us for current options.'],
      ['Are petrol carts better than electric?', 'Petrol suits heavy duty work and long shifts. Electric suits golf, resort and estate use.'],
      ['Do you sell used gas golf carts?', 'Ask us. We can source options on request.'],
      ['Where can I service a petrol golf cart?', 'Contact us for parts and service advice.'],
      ['Can I convert petrol to electric?', 'Conversions exist but usually cost more than buying a purpose-built electric cart.'],
    ],
    cta: 'Ask about petrol golf carts',
  },
  '/golf-carts/electric/': {
    intro: ['Our electric golf carts use modern lithium power for quiet, low-cost running. Browse ECAR Lithium A2, IKON HD, Magnum and Compass carts and Tomberlin E-Merge models from two to eight seats.', 'Electric carts suit golf, resorts, estates and campuses. They are quiet, clean and easy to charge at home.'],
    guides: [{ h2: 'Why choose an electric golf cart?', p: ['Electric carts cost less to run, need less servicing and are very quiet. Lithium batteries are lighter than lead-acid and are designed to last for years.', 'Check charging requirements, because most carts charge from a standard wall outlet.'] }],
    faqs: [
      ['What is the best electric golf cart?', 'It depends on seat count and usage. ECAR Magnum and Compass suit premium and resort use. IKON HD suits heavy duty and commercial use.'],
      ['How long do electric golf cart batteries last?', 'Lithium batteries are designed for many years of use. Care and use matter.'],
      ['How much is an electric golf cart?', 'Prices start around $11,000 and increase with specification.'],
      ['Are electric carts street legal?', 'Not generally. They are for private property and the course unless registered and compliant. Check your state rules.'],
      ['Can I charge it at home?', 'Most carts charge from a standard power outlet. Check each model.'],
    ],
  },
  '/golf-carts/utility-4-seater/': {
    intro: ['Need a 4 seater golf cart or a utility cart? This range includes four, six and eight seat ECAR carts and utility models built to carry people and loads around resorts, farms and estates.', 'Electric drive keeps running costs low, and rugged builds handle daily commercial use.'],
    guides: [{ h2: 'Seating and load options', p: ['Pick seats first: four seats suits families and small groups, six or eight suits resorts and shuttles. Utility carts add load beds and racks for tools and supplies.', 'Ask about accessories like seat belts, rain curtains and mats.'] }],
    faqs: [
      ['What is a four seater golf cart?', 'A golf cart with two rows of seats carrying four passengers.'],
      ['How much does a four seater cost?', 'Prices start around $12,500 for entry models and rise for larger or premium models.'],
      ['Are utility carts different from golf carts?', 'Utility carts have load beds and heavier duty builds for work.'],
      ['Do they come in electric?', 'Yes. Our range is lithium electric.'],
      ['Can I add accessories?', 'Yes. See our accessories pages for seat belts, mats, lights and more.'],
    ],
  },
  '/golf-carts/mini-junior/': {
    intro: ['A mini golf cart or junior golf cart is a smaller vehicle for young golfers and compact uses. If you are after a kids golf cart or junior golf buggy, contact us and we will help match a safe, age-appropriate option.', 'For children we recommend supervised use, helmets and age-appropriate speed.'],
    guides: [{ h2: 'Choosing for children', p: ['Check age and weight guidance, speed limiters and whether the vehicle has parental controls. Always supervise children and follow the manufacturer guidance.', 'Our kids buggies range includes youth quads and buggies from respected brands.'] }],
    faqs: [
      ['Do you sell kids golf carts?', 'We can source junior options on request. See our kids buggies for youth off-road vehicles.'],
      ['What age is a mini golf cart for?', 'It depends on the model. Check the manufacturer guidance.'],
      ['Are they safe?', 'Use supervised play, helmets and a controlled environment.'],
      ['How much do they cost?', 'Prices vary by model. Contact us.'],
      ['Can I buy a junior golf buggy?', 'Junior buggies may be available. Message us with your needs.'],
    ],
    cta: 'Ask about junior golf carts',
  },
  '/clearance/': {
    intro: ['Looking for cheap golf buggies and cheap golf carts? Our clearance page highlights our lowest-priced buggies, push buggies and accessories so you can save without compromising on quality.', 'Our regular prices are already competitive, and this page collects the best entry-level options.'],
    guides: [{ h2: 'Getting the best price', p: ['Start with push buggies if you want the lowest cost. Add accessories like umbrella holders and phone holders to reach free delivery. Crypto payments (Bitcoin or USDT) receive an extra 10% discount at checkout.', 'Auction or marketplace listings can look cheap but may not include warranty or support.'] }],
    faqs: [
      ['Where can I find cheap golf buggies?', 'Browse the lowest-priced buggies and push buggies on this page.'],
      ['Do you have cheap golf carts for sale?', 'Our new electric carts start from around $11,000. For lower budgets ask about used carts.'],
      ['Is cheaper always better?', 'No. Check warranty, support and battery type.'],
      ['Can I get a discount for paying with crypto?', 'Yes. Crypto payments (Bitcoin or USDT) receive an extra 10% discount at checkout.'],
      ['Do you offer bundles?', 'Contact us to put together a bundle with accessories.'],
    ],
  },
  '/off-road-buggies/': {
    intro: ['Explore off road buggies for farms, trails and weekend adventures. Our range includes Trailmaster Cheetah dune buggies, Kayo and Hammerhead side by side buggies, kids buggies, go karts and quads from respected Australian suppliers.', 'Every model includes GST and is delivered Australia-wide. Compare engines, seating and age guidance before you buy.'],
    guides: [{ h2: 'Choose by use', p: ['For farm and property work choose a side by side or quad with load capacity. For recreation choose a dune buggy or go kart. For younger riders choose a youth buggy with age-appropriate power.', 'Check state rules for registration and use on public land.'] }],
    faqs: [
      ['What is a buggy?', 'An off-road buggy is a small open vehicle for recreation and property work. Types include dune buggies, side by sides, go karts and quads.'],
      ['What is the difference between a dune buggy and an off road buggy?', 'A dune buggy is built for sand and recreation. Off-road buggy is a broader term that also covers side by sides and utility models.'],
      ['Are off-road buggies legal on public roads?', 'Generally no. They are for private land and permitted areas. Check your state rules.'],
      ['Do they come assembled?', 'Many arrive part-assembled. Check the listing and ask us.'],
      ['Do you sell safety gear?', 'Ask us about helmets and protective gear.'],
    ],
  },
  '/off-road-buggies/dune-buggies/': {
    intro: ['Looking for a dune buggy for sale? Our dune buggy range includes Trailmaster Cheetah 175cc and 300cc buggies and the Challenger 200, built for sand, trails and farm tracks.', 'Choose by engine size, seat count and use. We help with delivery, assembly questions and accessories.'],
    guides: [{ h2: 'Choosing a dune buggy', p: ['Engine size drives performance and price. A 175cc buggy suits lighter use, while a 300cc buggy has more power for hills and sand.', 'Check seat count, suspension and brakes, then confirm assembly and delivery details.'] }],
    faqs: [
      ['What is a dune buggy?', 'A dune buggy is a light off-road vehicle built for sand and rough terrain.'],
      ['How much is a dune buggy?', 'Prices depend on engine and specification. Our listings show current prices.'],
      ['Can I buy a dune buggy in NSW?', 'Yes. We deliver Australia-wide including NSW.'],
      ['Can I register a dune buggy?', 'Rules vary by state. Check with your transport authority.'],
      ['Are dune buggy kits available?', 'Ask us about kits and parts.'],
    ],
  },
  '/off-road-buggies/go-karts/': {
    intro: ['Shop go karts for sale including petrol and electric models. Our go karts from Kayo, GMX and Crazy Kart suit backyards, farms and private tracks.', 'Electric go karts are quiet and low-maintenance, while petrol go karts offer higher top speeds. Check engine, speed and assembly before ordering.'],
    guides: [{ h2: 'Electric or petrol go kart?', p: ['Electric karts are quiet and clean, with simpler maintenance. Petrol karts offer higher speeds and longer run times. Always wear a helmet and use go karts where permitted.'] }],
    faqs: [
      ['How much is a go kart?', 'Prices depend on engine and brand. See current prices above.'],
      ['How fast does a go kart go?', 'Speed depends on engine size and design. Check each listing.'],
      ['Are go karts road legal?', 'Generally no. Use them on private land or tracks.'],
      ['Do I need to assemble it?', 'Many go karts arrive part-assembled.'],
      ['Do you sell go kart parts?', 'Ask us about frames, engines and wheels.'],
    ],
  },
  '/off-road-buggies/kids-buggies/': {
    intro: ['Our kids buggies include youth buggies and electric quads sized for younger riders. Choose from Hammerhead Torpedo, Kayo S70 and GO SKITZ models.', 'Always supervise children, use helmets and gear, and follow the manufacturer age and weight guidance.'],
    guides: [{ h2: 'Choosing a buggy for a child', p: ['Match the vehicle to your child age, weight and experience. Start with a speed limiter and a safe, open area.', 'Electric quads are quiet and simple to learn on. Petrol buggies offer more power for bigger kids.'] }],
    faqs: [
      ['What kids buggy should I buy?', 'Choose by age and weight. Electric models suit younger kids, petrol models suit older kids.'],
      ['Are kids electric quads safe?', 'With supervision, helmets and sensible limits, they can be a safe first vehicle.'],
      ['How much is a kids buggy?', 'Prices are listed above and vary by model.'],
      ['Do I need to supervise?', 'Yes, always.'],
      ['What gear do I need?', 'A helmet, gloves and sturdy shoes at minimum.'],
    ],
  },
  '/off-road-buggies/electric-off-road-utvs/': {
    intro: ['Electric off-road buggies and electric UTV options are growing in Australia. This page collects our electric go karts and kids electric quads, and you can ask us about electric utility buggies.', 'Electric drive is quiet, clean and easy to maintain.'],
    guides: [{ h2: 'Electric or petrol off-road?', p: ['Electric vehicles are quiet and cheap to run but have limited range. Petrol vehicles offer long range and quick refuelling.'] }],
    faqs: [
      ['What is an electric UTV?', 'It is a utility vehicle with electric drive, built for work or recreation.'],
      ['How far do electric off-road vehicles go?', 'Range depends on battery and terrain.'],
      ['Are electric UTVs available in Australia?', 'Yes. Ask us about current options.'],
      ['Do you sell electric kids quads?', 'Yes. See the listings above.'],
      ['How do I charge?', 'Most charge from a standard wall outlet.'],
    ],
  },
  '/off-road-buggies/side-by-sides-utvs/': {
    intro: ['Shop side by side buggies and UTVs from Kayo and Hammerhead. A side by side buggy is a two-seat off-road vehicle for property work, trails and recreation.', 'Compare engine size, drive type and assembly details, and ask us about freight to your location.'],
    guides: [{ h2: 'What is a side by side?', p: ['A side by side (UTV) seats two people beside each other and usually has a load bed. It handles rough terrain, farm tracks and work duties.', 'Check engine, transmission and seating before you buy.'] }],
    faqs: [
      ['What is a UTV?', 'A UTV (utility task vehicle) is a side by side vehicle with a load bed for work and recreation.'],
      ['What is the difference between a UTV and an ATV?', 'ATVs are ridden like a quad. UTVs have seats and a steering wheel.'],
      ['How much is a side by side?', 'Prices are listed above and depend on engine and brand.'],
      ['Are they road legal?', 'Generally not. Check your state rules.'],
      ['Do they come assembled?', 'Check each listing for assembly notes.'],
    ],
  },
  '/off-road-buggies/mini-quads-atvs/': {
    intro: ['Our mini quads and small ATVs include Kayo and Apollo quad bikes suited to farm tracks and younger riders. Compare engine size, automatic or manual and age guidance.', 'Always use a helmet and follow age and weight guidance.'],
    guides: [{ h2: 'Choosing a small quad', p: ['Choose automatic quads for beginners and younger riders. Larger engines suit adults and property work.', 'Check reverse gear, speed limiter and braking.'] }],
    faqs: [
      ['What age is a 50cc quad for?', 'It depends on the model. Check manufacturer guidance.'],
      ['Which quad is best for kids?', 'Choose an automatic with a speed limiter.'],
      ['How much do quads cost?', 'See current prices above.'],
      ['Can I use a quad on the road?', 'Generally no. Check state rules.'],
      ['Do you sell quad parts?', 'Ask us.'],
    ],
  },
  '/parts-accessories/': {
    intro: ['Find golf cart accessories, golf buggy parts, lithium batteries, chargers, wheels, trailers and off-road parts in one place. Everything on this page is chosen for Australian golf carts, golf buggies and off-road buggies.', 'Use the category tiles to jump straight to what you need, and message us if you are unsure about fitment.'],
    guides: [{ h2: 'Make sure it fits', p: ['Check your cart or buggy make, model and year. Many parts are model-specific. Our listings show compatibility, and our team can confirm fit before you order.', 'Add accessories to your order to reach free delivery over $1,000.'] }],
    faqs: [
      ['Do you sell golf cart parts in Australia?', 'Yes. We stock batteries, chargers, wheels, lighting, seats and accessories.'],
      ['How do I know a part will fit?', 'Send us your cart make, model and year.'],
      ['Do you sell quad bike spare parts?', 'Ask us about parts for off-road buggies and quads.'],
      ['Do you install parts?', 'Contact us for installation advice. Some items need a qualified installer.'],
      ['Is there a minimum order?', 'Our minimum order is $500.'],
    ],
  },
  '/parts-accessories/golf-cart-accessories/': {
    intro: ['Upgrade your cart with golf cart accessories: phone and umbrella holders, bags and eskies, seat covers, floor mats, lights, speakers and more. We stock accessories for ECAR, Club Car, EZGO, Yamaha and Tomberlin carts and for MGI and Stinger buggies.', 'Small accessories are the easiest way to make a cart or buggy your own.'],
    guides: [{ h2: 'Popular golf cart accessories', p: ['Seat belts and grab rails add safety. LED kits add visibility. Floor mats and seat covers protect your cart. Holders keep phones, drinks and umbrellas within reach.', 'Check fitment notes on each listing.'] }],
    faqs: [
      ['What accessories do golf carts need?', 'Most owners add holders, mats, seat covers, lights and a bag rack.'],
      ['Do you sell golf buggy accessories?', 'Yes, for MGI, Stinger and PowerBug.'],
      ['Are accessories universal?', 'Some are universal, others model-specific.'],
      ['Do you sell accessories Australia-wide?', 'Yes.'],
      ['Can you fit accessories?', 'Ask us for installation advice.'],
    ],
  },
  '/parts-accessories/golf-buggy-parts/': {
    intro: ['Shop golf buggy parts: lithium batteries, chargers, wheels, seats and more for golf buggies and golf carts. Our catalogue lists fitment so you can order with confidence.', 'Need a part that is not listed? Contact us and we will help you find it.'],
    guides: [{ h2: 'Parts we supply', p: ['Batteries and chargers keep you running. Wheels and tyres refresh the ride. Seats and accessories improve comfort.', 'Always match voltage and model.'] }],
    faqs: [
      ['Where can I buy golf buggy parts in Australia?', 'You can buy golf buggy parts from us online with Australia-wide delivery.'],
      ['Do you sell MGI buggy parts?', 'We list common MGI batteries, chargers and accessories.'],
      ['Can you help with fitment?', 'Yes. Send us your model.'],
      ['Do you sell cart parts for Club Car?', 'Yes. See our batteries and accessories for Club Car Precedent.'],
      ['Do you repair buggies?', 'Ask us about service and repair options.'],
    ],
  },
  '/parts-accessories/golf-buggy-parts/lithium-batteries/': {
    intro: ['Upgrade to lithium with our lithium golf cart batteries. We stock PRO-Li packages for Club Car Precedent, EZGO RXV, Yamaha G22 and ECAR 627 carts, plus MGI lithium batteries for buggies.', 'Lithium batteries are lighter, maintenance-free and designed for long life.'],
    guides: [{ h2: 'Core or Plus?', p: ['Core packages suit lower-demand personal use and give around two to three rounds per charge. Plus packages have more capacity for heavier use and longer days.', 'Lithium conversions should be installed by a qualified person and installation photos kept for warranty.'] }],
    faqs: [
      ['How long do golf buggy batteries last?', 'Lithium batteries are designed for many years and thousands of cycles. Care and usage affect life.'],
      ['Can I use any battery in my golf buggy?', 'No. Match voltage, connectors and charger. Ask us to confirm.'],
      ['What amp hours do I need?', 'Core 105Ah suits typical personal use, Plus 150Ah suits heavy use.'],
      ['Is lithium worth it?', 'Lithium costs more up front but is lighter and requires less maintenance.'],
      ['Do I need a new charger?', 'Lithium packages need a compatible charger. We can advise.'],
    ],
  },
  '/parts-accessories/golf-buggy-parts/chargers-conversion-kits/': {
    intro: ['Find a golf cart battery charger or conversion kit for your cart or buggy. We stock ECAR chargers, a Lester Summit2 on-board charger and MGI smart chargers.', 'A good charger protects battery life, so match voltage and plug type.'],
    guides: [{ h2: 'Choosing a charger', p: ['Match the voltage and chemistry of your battery. Lithium needs a compatible charger. Check plug types and cord length.', 'Ask us if you are converting to lithium.'] }],
    faqs: [
      ['What charger do I need for my golf cart?', 'Match voltage, plug type and battery chemistry.'],
      ['Can I use a lead-acid charger on lithium?', 'Not usually. Use a compatible charger.'],
      ['Do you sell golf buggy chargers?', 'Yes, including MGI chargers.'],
      ['Do you sell conversion kits?', 'Ask us about lithium conversion kits.'],
      ['Is a fireproof charging box useful?', 'It adds a layer of protection when charging indoors.'],
    ],
  },
  '/parts-accessories/golf-buggy-parts/wheels-rims-tyres/': {
    intro: ['Shop golf buggy wheels and golf cart wheels, rims and tyres. We stock mag wheel sets in 10, 12 and 14 inch sizes and single wheels and tyres.', 'Mag wheels upgrade the look and feel of your cart.'],
    guides: [{ h2: 'Choosing wheels for your cart', p: ['Check wheel size, offset and bolt pattern. Match tyre size to the wheel and to your cart.', 'Ask us for fitment advice.'] }],
    faqs: [
      ['What size wheels does my golf cart need?', 'Check your current wheel and tyre size. Many carts use 8 to 12 inch wheels.'],
      ['Do you sell golf cart tyres?', 'Yes.'],
      ['Do mag wheels include tyres?', 'Check each listing for what is included.'],
      ['Can wheels be fitted to any cart?', 'Fitment varies. Ask us.'],
      ['Do you sell single wheels?', 'Yes.'],
    ],
  },
  '/parts-accessories/golf-cart-accessories/phone-umbrella-drink-holders/': {
    intro: ['Keep your phone, umbrella and drinks within reach with golf cart and golf buggy holders. We stock golf cart phone holders, umbrella holders, sand bottle holders and drink holders for MGI, Stinger and PowerBug buggies and for carts.', 'Small additions make rounds easier.'],
    guides: [{ h2: 'Choosing a holder', p: ['Check mounting type and diameter. Magnetic phone holders are quick and flexible. Cup-style holders are stable.', 'Check compatibility with your buggy model.'] }],
    faqs: [
      ['Do you sell golf buggy phone holders?', 'Yes.'],
      ['Will a phone holder fit my buggy?', 'Check compatibility on the listing.'],
      ['Do you sell umbrella holders?', 'Yes.'],
      ['Are holders universal?', 'Some are universal. Check each listing.'],
      ['Can I add a drink holder?', 'Yes.'],
    ],
  },
  '/parts-accessories/golf-cart-accessories/bags-rain-covers-eskies/': {
    intro: ['Add storage and comfort with golf buggy bags, umbrellas, cooler bags and esky brackets. We stock MGI cooler bags, accessory bags and umbrellas, and cart esky brackets.', 'Keep your drinks cold and your gear dry.'],
    guides: [{ h2: 'Storage that suits your buggy', p: ['Choose bags designed for your buggy model. Cooler bags keep drinks cold. Esky brackets hold a cooler securely on a cart rail.'] }],
    faqs: [
      ['Do you sell golf buggy bags?', 'Yes.'],
      ['Do you sell golf cart esky brackets?', 'Yes.'],
      ['Do you sell umbrellas?', 'Yes.'],
      ['Are rain covers available?', 'Ask us about rain covers for your cart or buggy.'],
      ['Will it fit my buggy?', 'Check the listing.'],
    ],
  },
  '/parts-accessories/golf-cart-accessories/seat-covers-comfort/': {
    intro: ['Improve comfort with seat covers, floor mats, seat belts and buggy seats. We stock Yamaha G29 padded seat covers, ECAR floor mats, seat belt kits and fold-out buggy seats.', 'Comfort upgrades make cart and buggy rides more enjoyable.'],
    guides: [{ h2: 'Comfort and safety', p: ['Seat belts add safety on slopes. Floor mats protect carpets. Seat covers protect and refresh your seats.'] }],
    faqs: [
      ['Do you sell golf cart seat covers?', 'Yes.'],
      ['Do you sell seat belt kits?', 'Yes for 2 seat and 4 seat carts.'],
      ['Do you sell floor mats?', 'Yes.'],
      ['Will they fit my cart?', 'Check model compatibility.'],
      ['Do you sell cart air conditioning?', 'Ask us.'],
    ],
  },
  '/parts-accessories/golf-buggy-parts/trailers/': {
    intro: ['Looking for a golf cart trailer? We can help you source a trailer to suit your cart or buggy. Tell us your cart size and weight and we will recommend a suitable trailer.', 'Trailers need the right size, ramps and tie-downs for safe transport.'],
    guides: [{ h2: 'Choosing a trailer', p: ['Measure your cart length, width and weight. Check trailer capacity and ramp length. Use proper tie-downs.', 'Ask us about options.'] }],
    faqs: [
      ['What size trailer do I need for a golf cart?', 'Measure your cart and check trailer capacity.'],
      ['How do I tow a golf cart?', 'Load carefully, secure with tie-downs and follow road rules.'],
      ['Do you sell golf cart trailers?', 'Ask us for options.'],
      ['Do you sell tie-downs?', 'Ask us.'],
      ['Can I tow a cart behind a ute?', 'Yes, with the right trailer and towing capacity.'],
    ],
    cta: 'Ask about golf cart trailers',
  },
  '/parts-accessories/repairs-servicing/': {
    intro: ['Need golf buggy repairs or servicing? Tell us your cart or buggy model and the fault. We can advise on parts and work with trusted workshops near you.', 'Regular servicing keeps carts reliable.'],
    guides: [{ h2: 'What to do first', p: ['Note the symptoms, cart model and age. Check battery health and chargers. Contact us with photos if possible.'] }],
    faqs: [
      ['Where can I get golf buggy repairs near me?', 'Contact us with your location and we will point you to options.'],
      ['Do you service golf carts?', 'Ask us.'],
      ['Can I buy parts to repair myself?', 'Yes. Browse our parts.'],
      ['How often should a cart be serviced?', 'Follow the manufacturer schedule.'],
      ['Do you repair MGI buggies?', 'Ask us.'],
    ],
    cta: 'Ask about repairs and servicing',
  },
};
