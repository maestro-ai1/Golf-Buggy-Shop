// Long-form product copy (400+ words), five tags, inbound links (category, brand, guides) and one high-authority outbound link per product.
// Original wording built from the product name, group, verified specs and the keyword map. No invented claims, prices or stock.
const hash = (s) => [...s].reduce((a, c) => (a * 31 + c.charCodeAt(0)) >>> 0, 7);
const pick = (arr, seed) => arr[hash(seed) % arr.length];
const fill = (t, v) => t.replace(/\{(\w+)\}/g, (_, k) => v[k] ?? '');

const FAMILY = {
  trolley: ['electric-buggy', 'remote-buggy', 'push-buggy', 'ride-on', 'golf-board'],
  cart: ['cart', 'utility-cart', 'petrol-cart', 'used-cart'],
  battery: ['battery', 'charger'],
  cartacc: ['wheels', 'holder', 'umbrella', 'cooler', 'bag', 'esky', 'seat', 'seatcover', 'mat', 'seatbelt', 'led', 'speaker', 'rack', 'rail', 'mirror', 'steering'],
  offroad: ['dune', 'ssv', 'gokart', 'quad'],
  kids: ['kids'],
  offparts: ['ssv-accessory', 'part', 'ramp', 'tyre'],
};
const familyOf = (g) => Object.keys(FAMILY).find((f) => FAMILY[f].includes(g)) || 'cartacc';

const OUT = {
  trolley: ['https://www.golf.org.au/', 'Golf Australia'],
  cart: ['https://en.wikipedia.org/wiki/Golf_cart', 'the golf cart overview on Wikipedia'],
  battery: ['https://en.wikipedia.org/wiki/Lithium_iron_phosphate_battery', 'the lithium iron phosphate battery article on Wikipedia'],
  cartacc: ['https://en.wikipedia.org/wiki/Golf_cart', 'the golf cart overview on Wikipedia'],
  offroad: ['https://www.safeworkaustralia.gov.au/safety-topic/hazards/quad-bikes', 'Safe Work Australia'],
  kids: ['https://www.productsafety.gov.au/', 'the Australian Government product safety website'],
  offparts: ['https://www.safeworkaustralia.gov.au/safety-topic/hazards/quad-bikes', 'Safe Work Australia'],
};

const BLOGS = {
  trolley: [['/blog/electric-vs-push-golf-buggy-which-should-you-buy/', 'electric vs push golf buggies'], ['/blog/remote-control-golf-buggy-buyers-guide/', 'the remote control golf buggy buyer guide'], ['/blog/golf-e-scooter/', 'golf e-scooters and boards']],
  cart: [['/blog/how-much-does-a-golf-cart-cost-in-australia/', 'what a golf cart costs in Australia'], ['/blog/can-you-drive-a-golf-cart-on-the-road-in-australia/', 'the road rules for golf carts'], ['/blog/trailering-a-golf-cart/', 'trailering a golf cart']],
  battery: [['/blog/lithium-vs-lead-acid-golf-cart-batteries/', 'lithium vs lead-acid golf cart batteries'], ['/blog/used-golf-carts-on-sale/', 'buying a used golf cart']],
  cartacc: [['/blog/how-much-does-a-golf-cart-cost-in-australia/', 'golf cart costs and options'], ['/blog/can-you-drive-a-golf-cart-on-the-road-in-australia/', 'golf cart safety and the rules']],
  offroad: [['/blog/offroad-buggy/', 'the off-road buggy buyer guide'], ['/blog/atv-buggy/', 'ATV buggies compared'], ['/blog/what-is-a-utv-side-by-side-vs-atv-vs-dune-buggy/', 'UTVs, ATVs and dune buggies']],
  kids: [['/blog/kids-ride-on-buggy/', 'choosing a kids ride-on buggy'], ['/blog/go-kart-electric-go-karts/', 'electric go karts']],
  offparts: [['/blog/offroad-buggy/', 'the off-road buggy buyer guide'], ['/blog/trailering-a-golf-cart/', 'loading, ramps and tie-downs']],
};

// Section libraries: three variants each, chosen per product so pages do not repeat each other word for word.
const SUITS = {
  trolley: [
    `The {name} suits golfers who want to spend their energy on the shot rather than on hauling a bag. Whether you play a flat local course or a hilly one, a good {label} keeps your bag steady, folds away for the boot and makes a long round feel easier. It is a sensible choice for regular players, for golfers returning from injury and for anyone who simply prefers to arrive at the green fresh.`,
    `If you play often, the {name} is the kind of {label} that quickly becomes part of your routine. It takes the weight off your back and shoulders, keeps your clubs organised and lets you focus on the course. Think about how you will lift it in and out of your vehicle, how much storage you have and how hilly your course is, and you will know whether this is the right fit.`,
    `Choose the {name} if you want a dependable {label} from {brand} that you can set up in seconds. It suits players who walk the course, value a tidy bag and want accessories such as umbrella and drink holders. Compare its weight, fold size and features with your own needs, and ask us if you want advice on bag fit.`,
  ],
  cart: [
    `The {name} suits buyers who need a practical vehicle for a course, an estate, a resort, a farm or a large property. A {label} is quiet to run and easy to drive, and it carries people and gear over distances that are too far to walk. Match the seating, battery or engine and options to the job, and you will get years of useful service.`,
    `If you are weighing up a {label}, the {name} is worth a close look. It is designed for private land and low-speed use, and it suits owners who value comfort, simple controls and low running costs. Think about how many people you carry, the ground you drive on and where you will store and charge it.`,
    `The {name} is a good fit for owners who want a straightforward {label} from {brand}. It suits clubs, holiday parks, schools, estates and families who live on larger blocks. Check the seating, the roof and windscreen options and the freight to your postcode, and call us if you want help comparing it with other models.`,
  ],
  battery: [
    `The {name} suits owners who want dependable power and less maintenance from their cart or buggy. Replacing a tired battery can make a vehicle feel new, and a good {label} supports steady performance through the day. Check the fitment details and the charger before you order, and send us your cart model if you are unsure.`,
    `If your cart is slowing down or running out of range, the {name} may be the upgrade you need. It is designed to give consistent output and to reduce day-to-day maintenance. The right match of voltage, capacity and connectors matters, so confirm compatibility first.`,
    `Choose the {name} if you want a {label} that fits your vehicle and your use. It suits owners who drive daily, carry heavy loads or want faster charging. Read the specification and ask us to confirm fit for your make, model and year.`,
  ],
  cartacc: [
    `The {name} suits owners who want to personalise, protect or improve their cart or buggy. Accessories like this are among the easiest upgrades, and they make everyday use more comfortable and more practical. Check that the item suits your model before you order, and add several items to your order to reach free delivery.`,
    `If you want to get more from your cart, the {name} is a simple upgrade. It is made for everyday use on courses, estates and properties, and it is easy to fit with basic tools. Confirm the size and fitment, and send us your model if you want us to check.`,
    `Choose the {name} when you want a useful {label} that works with the cart you already own. It suits owners who like to keep their cart tidy, comfortable and ready for the next job. Compare it with other options in the range and ask us about bundles.`,
  ],
  offroad: [
    `The {name} suits buyers who want a capable {label} for farm tracks, trails, sand or recreation. Match the engine size, seating and drivetrain to your terrain and your riders, and plan the safety gear and training that go with it. It is built for private land and designated off-road areas rather than public roads.`,
    `If you are shopping for a {label}, the {name} deserves a place on your short list. Look at how many people it carries, how it handles your ground and how you will transport and store it. Ask about assembly and parts support before you order.`,
    `Choose the {name} if you want a {label} from {brand} for work or play. It suits owners who value simple controls, rugged construction and a machine that is easy to maintain. Check the specifications and ask us how it compares with similar models.`,
  ],
  kids: [
    `The {name} suits families who want a fun and safe first step into driving. Look at the age range, the speed settings and the safety features, and always supervise. A good {label} builds confidence and gets kids outdoors, and it can be handed down to younger siblings.`,
    `If you are choosing a gift or a family vehicle, the {name} is a popular pick. It is designed for children to drive on flat, safe surfaces with an adult nearby. Check the weight and age guidance, plan helmets and a safe play area, and charge the battery correctly.`,
    `Choose the {name} for a child who is ready for their own vehicle. It suits backyards, farms and parks where permitted, and it teaches steering, braking and road sense. Compare it with other kids buggies and ask us about delivery.`,
  ],
  offparts: [
    `The {name} suits owners who want to keep an off-road machine working or add a useful extra. Parts and accessories are best matched to your exact model, so check the fitment details and send us your make, model and year if you are unsure.`,
    `If you maintain your own buggy, quad or go kart, the {name} is a handy item to have. Genuine and compatible parts keep machines safe and reliable, and the right accessories make work and recreation easier.`,
    `Choose the {name} when you need a dependable {label} for your off-road setup. It suits farm, workshop and recreational owners alike. Confirm the size, the fitment and the delivery to your postcode before you order.`,
  ],
};

const TIPS = {
  trolley: [
    `Before you buy a {label}, check the folded size, the weight and how the bag attaches. If it is electric, check battery capacity, charge time and whether the battery is easy to remove. Ask your club about rules for powered buggies, and use [{outname}]({outurl}) as a starting point for finding clubs and information about the sport. Keep your receipt and the manual for warranty.`,
    `A good {label} is a buying decision worth a little research. Look at the frame, wheels and brakes, and think about how you will transport it. Ask your club about its rules, and read general information about the game from [{outname}]({outurl}). If you are comparing models, write down the weight, fold size, battery and price for each.`,
    `Think about hills, wet days and how often you play when you choose a {label}. A sturdy frame and good tyres matter more than extras. Check your club's rules in advance, and see [{outname}]({outurl}) for general information about golf in Australia. Ask us if you would like help comparing options.`,
  ],
  cart: [
    `When you buy a {label}, check the seating, the battery or engine, the roof and windscreen options and the freight to your property. Think about where you will charge or refuel it and where it will live. Golf carts are generally made for private land, so read the local rules and the background in [{outname}]({outurl}) before you plan any road use. Keep the invoice and manual.`,
    `A {label} is a long-term purchase, so compare more than the price. Look at the battery type and age, the warranty, the parts supply and the delivery cost. For general background on how golf carts work and where they are used, see [{outname}]({outurl}). Ask us for the delivered price including GST.`,
    `Before you commit to a {label}, write down how you will use it: the number of passengers, the ground, the distance and the storage space. Check how it will be moved and serviced. The [{outname}]({outurl}) gives useful background, and our team can help you compare models.`,
  ],
  battery: [
    `When you shop for a {label}, match the voltage, capacity, physical size and connectors to your vehicle, and check that the charger suits the battery. Lithium chemistry is explained in [{outname}]({outurl}), which is a useful primer. Fit high-current parts carefully and use a qualified installer if you are not sure, and keep photos of the installation for warranty.`,
    `Not every battery fits every cart, so confirm the details before you order. Check the make, model and year, and ask about the charger. If you want to read more about how modern lithium packs work, see [{outname}]({outurl}). Store and charge batteries in a dry, ventilated place.`,
    `Think about how far you drive and how often when you pick a {label}. Match the capacity to your use, and check the warranty. The [{outname}]({outurl}) explains the chemistry behind many modern packs. Ask us if you want help choosing.`,
  ],
  cartacc: [
    `Before you order a {label}, check the model it fits, the dimensions and the mounting points. Many cart accessories are universal, but some are specific to a make and year. For general background on how carts are built and used, see [{outname}]({outurl}). If you are adding electrical items, have them fitted by a qualified person.`,
    `Accessories like this are simple to fit, but a little checking avoids returns. Confirm the size, the finish and the fitment for your cart. Read more about golf cart design in [{outname}]({outurl}), and ask us if you want a second opinion on compatibility.`,
    `Take a moment to confirm the details of the {label}: size, material, quantity and the cart models it suits. The [{outname}]({outurl}) gives general information on carts. If you want to order several items, we can help you plan the order so you reach free delivery.`,
  ],
  offroad: [
    `Before you buy a {label}, think about the terrain, the number of riders, the engine size and the safety equipment. Check the assembly requirements, the warranty and the parts supply. Safety guidance for off-road vehicles is published by [{outname}]({outurl}), and it is worth reading before the first ride. Use helmets, eye protection and sturdy clothing.`,
    `A {label} is a big purchase, so compare models carefully. Look at the engine, transmission, seating and payload, and ask how the vehicle is delivered. For practical safety advice on off-road vehicles, see [{outname}]({outurl}). Supervise young riders and keep to private land and permitted areas.`,
    `Think about where you will drive and who will be driving when you choose a {label}. Match the machine to the ground and to the rider's size and experience. Read safety information from [{outname}]({outurl}) and make training and protective gear part of your plan.`,
  ],
  kids: [
    `When you choose a {label}, check the age range, the weight limit, the speed settings and the safety features. Supervise at all times and use a helmet where recommended. The [{outname}]({outurl}) publishes advice and recalls for children's products and is worth a look before you buy. Charge the battery as instructed.`,
    `A {label} should match the child's size and confidence. Look for speed limiters, seat belts and a parental remote on faster models. See [{outname}]({outurl}) for general guidance on children's products, and keep the manual and receipt for warranty.`,
    `Think about where the child will ride and how closely you can supervise when you pick a {label}. Choose a flat, safe area away from roads and water. Check [{outname}]({outurl}) for product safety advice, and ask us if you want help with age and size guidance.`,
  ],
  offparts: [
    `Check the make, model and year before you order a {label}, and compare the dimensions or part numbers where you can. Safety information for working on and riding off-road vehicles is published by [{outname}]({outurl}). If you are unsure about a repair, ask a qualified mechanic, and keep your old part until the new one is fitted.`,
    `Parts and accessories work best when they match your machine, so confirm fitment first. Safe maintenance practices are outlined by [{outname}]({outurl}). Use the right tools, follow the manual and wear protective gear when you work.`,
    `When you buy a {label}, read the specification, confirm the size and think about the tools you will need. For general safety guidance, see [{outname}]({outurl}). Send us your model details if you would like us to double-check before you pay.`,
  ],
};

const CARE = {
  trolley: [
    `Wipe the frame and wheels after wet rounds, check the tyre pressure and lubricate folding joints now and then. Charge a battery after every round, store the buggy folded in a dry place and keep the battery partly charged over winter. Check brakes, straps and bag brackets regularly, and replace worn parts promptly.`,
    `A little care keeps a {label} reliable for years. Clean off mud and grass, check the wheels spin freely and tighten any loose bolts. If the buggy has a battery, charge it fully before use and avoid leaving it flat for long periods. Keep the manual and a spare set of straps in your bag.`,
    `Look after the {name} by drying it after use, checking the wheels and brakes and storing it somewhere cool and dry. Charge and store any battery according to the manufacturer's instructions, and carry out a quick check before every round.`,
  ],
  cart: [
    `Regular care keeps a {label} safe and reliable. Check the tyres, brakes, steering and lights before use, keep the batteries charged or the engine serviced and wash off mud and salt. Store the cart in a dry, ventilated space and follow the service schedule in the manual. Book an annual check to catch problems early.`,
    `To get the most from the {name}, set up a simple routine: inspect the tyres and brakes, check the charge level or fuel, clean the body and keep the moving parts lubricated. Charge electric carts after use and avoid deep discharge. Keep a service log with dates and any parts replaced.`,
    `A {label} rewards good habits. Wash it regularly, keep the seats and roof clean and look over the suspension and steering for wear. Follow the manufacturer's battery or engine care instructions and store it under cover when it is not in use.`,
  ],
  battery: [
    `Look after a battery by using the correct charger, charging in a dry, ventilated place and avoiding deep discharge. Keep terminals clean and tight, and check wiring for damage. If the vehicle will be stored for months, leave the battery partly charged and check it every few weeks. Recycle old batteries at an approved collection point.`,
    `Good habits extend battery life: charge after use, avoid heat and keep connections clean. Never charge a damaged or swollen battery, and stop using any pack that smells or overheats. Keep your invoice and installation photos for warranty.`,
    `Treat the {name} well by following the manufacturer's charging and storage guidance. Check connectors regularly, keep the battery dry and clean and do not leave it flat for long periods.`,
  ],
  cartacc: [
    `Keep the {name} clean and check the fittings now and then. Tighten any fixings that work loose, wipe off dirt and salt and replace worn parts promptly. If the item is electrical, check the wiring and connections occasionally.`,
    `A quick wipe and a check of the fixings keeps accessories looking good and working well. Avoid harsh chemicals on plastics and fabrics, and store spare parts in a dry place.`,
    `Maintain the {name} by cleaning it regularly and checking that it stays secure. If you notice wear or damage, replace it so it keeps doing its job safely.`,
  ],
  offroad: [
    `Check the tyres, brakes, steering and fluids before every ride, and wash off mud, sand and salt afterwards. Clean or replace the air filter often in dusty conditions, check belts and chains and follow the service schedule. Store the vehicle in a dry place and use fuel stabiliser if it will sit for months.`,
    `Looking after a {label} is mostly routine: inspect before riding, clean after riding and service on schedule. Keep a spare spark plug, filter and basic tools in your kit. Record hours and services so you know what is due.`,
    `Regular maintenance keeps the {name} safe and reliable. Check bolts, brakes and the drive system, keep the air filter clean and lubricate cables and joints. Store it under cover and charge or refuel it as the manual advises.`,
  ],
  kids: [
    `Wipe the buggy with a damp cloth, avoid hosing electrical parts and check the wheels and steering before each ride. Charge the battery with the supplied charger, avoid leaving it on charge for days and store the buggy indoors or under cover. Replace worn parts promptly.`,
    `Looking after a {label} is simple: keep it clean and dry, charge it as instructed and check it for damage before each session. Store it away from rain and strong sun, and keep the charger in a dry place.`,
    `Help the {name} last by keeping the battery in good condition, checking tyres and fasteners and teaching children to switch it off after use. Keep the manual and the packaging in case you need warranty service.`,
  ],
  offparts: [
    `Fit the {name} carefully using the right tools and the manual. Check that fixings are tight after the first ride, and keep an eye on wear. Store spare parts in a dry place and keep your old part until you are sure the new one is working.`,
    `After fitting, test the part at low speed in a safe area and check it again after a short ride. Keep tools and a basic kit with the vehicle, and replace consumables on schedule.`,
    `Maintain the {name} by inspecting it regularly, cleaning it and replacing it when it wears. Good parts and good habits keep your machine safe.`,
  ],
};

const SERVICE = [
  `We deliver Australia-wide. Delivery is free over $1,000 to major metro and depot corridors, and a flat $95 applies below that. The minimum order is $250, and all prices include 10% GST. Pay by bank transfer (Osko or EFT) or PayID, or choose Bitcoin or USDT and receive an extra 10% off, applied automatically at checkout. After you place your order, our team confirms stock and freight and emails your payment details.`,
  `Your order ships from our depots and partners Australia-wide, with free delivery over $1,000 and a flat $95 below that. The minimum order is $250, and prices include 10% GST. Payment options are bank transfer (Osko or EFT), PayID, or Bitcoin and USDT with an extra 10% discount that applies automatically at checkout. Our team confirms stock and freight before payment details are sent.`,
  `Delivery is Australia-wide, free over $1,000 and a flat $95 under that, with a $250 minimum order and GST included in every price. You can pay by Osko or EFT bank transfer or PayID, or use Bitcoin or USDT to take 10% off automatically at checkout. We confirm stock and freight first, then email payment details. Questions? Call 0420 128 746 or message us on WhatsApp.`,
];

const WHY = [
  `Buggies For Sale Australia Pty Ltd is a Sydney-based retailer established in 2023 (ABN 53 635 284 267). Our team knows golf buggies, golf carts, off-road buggies and parts, and we are happy to answer questions about fitment, freight and options before you order. Call 0420 128 746, message us on WhatsApp or email sales@buggiesforsale.com.au and we will help you choose.`,
  `We are an Australian retailer based in Sydney, serving golfers, property owners and families since 2023. If you are unsure about size, fitment, seating or delivery, tell us what you need and we will recommend the right option. You can reach us on 0420 128 746, on WhatsApp or at sales@buggiesforsale.com.au, and we reply as quickly as we can.`,
  `Buying online should feel straightforward. Our Sydney team (ABN 53 635 284 267) can check fitment, explain specifications and quote freight to your postcode. Contact us on 0420 128 746 or sales@buggiesforsale.com.au, or send a WhatsApp message, and we will help you decide whether this is the right product for your needs.`,
];

export function tagsFor(p, ctx) {
  const label = p.groupLabel;
  const t = [label, `${p.brand} ${label}`.toLowerCase(), ctx.primary, ctx.secondary, `buy ${label} australia`];
  const out = []; for (const x of t) { const v = (x || '').toLowerCase().replace(/\s+/g, ' ').trim(); if (v && !out.includes(v)) out.push(v); }
  const extras = [`${label} for sale`, `${label} online`, `${p.brand} australia`, `${label} price`];
  for (const x of extras) { if (out.length >= 5) break; const v = x.toLowerCase(); if (!out.includes(v)) out.push(v); }
  return out.slice(0, 5);
}

export function longCopy(p, ctx) {
  const fam = familyOf(p.group);
  const label = p.groupLabel;
  const v = { name: p.name, brand: p.brand, label, fits: p.specs?.Fits || '', outurl: OUT[fam][0], outname: OUT[fam][1] };
  const seed = p.slug;
  const facts = Object.entries(p.specs || {}).filter(([k]) => k !== 'Brand').map(([k, val]) => `**${k}:** ${val}`);
  const price = '$' + p.price.toLocaleString('en-AU', { maximumFractionDigits: 2 });
  const intro = `${p.shortDescription} ${p.description[0] || ''}`.replace(/\s+/g, ' ').trim();
  const lines = [];
  lines.push(`## About the ${p.name}`);
  lines.push(intro);
  lines.push(p.description[1] || `The ${p.name} is listed at ${price} including GST, with delivery to your postcode confirmed before you pay.`);
  lines.push(`The ${p.name} is part of our ${label} range from ${p.brand}. It is priced at ${price} including GST, and our team can confirm stock, freight and fitment before you pay.`);
  lines.push(`## Key features and specifications`);
  for (const h of p.highlights || []) lines.push(`- ${h}`);
  for (const f of facts) lines.push(`- ${f}`);
  lines.push(`## Who the ${p.name} suits`);
  lines.push(fill(pick(SUITS[fam], seed + 's'), v));
  lines.push(`## Buying advice`);
  lines.push(fill(pick(TIPS[fam], seed + 't'), v));
  lines.push(`## Care and maintenance`);
  lines.push(fill(pick(CARE[fam], seed + 'c'), v));
  lines.push(`## Delivery, payment and support`);
  lines.push(pick(SERVICE, seed + 'd'));
  lines.push(`## Why buy from Buggies For Sale`);
  lines.push(pick(WHY, seed + 'w'));
  const links = [];
  if (ctx.categoryUrl) links.push(`[${ctx.categoryName}](${ctx.categoryUrl})`);
  if (ctx.brandUrl) links.push(`the [${p.brand} range](${ctx.brandUrl})`);
  for (const [u, t] of BLOGS[fam].slice(0, 2)) links.push(`our guide to [${t}](${u})`);
  lines.push(`## Related ranges and guides`);
  lines.push(`Keep exploring with ${links.join(', ')}. You can also browse all our [products](/shop/) or [contact us](/contact/) for help choosing.`);
  const words = lines.join(' ').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/[#*]/g, '').split(/\s+/).filter(Boolean).length;
  return { lines, words };
}
