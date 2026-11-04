export const propertyServices = [
  {
    id: 'sales',
    title: 'Property sales',
    summary: 'Buy or sell homes, land and commercial space with verified titles and a clear paper trail.',
    points: ['Title and survey verification before you pay', 'Market pricing backed by recent comparables', 'Negotiation and closing support', 'Off-plan and land acquisition advice'],
  },
  {
    id: 'letting',
    title: 'Letting and leasing',
    summary: 'Find tenants who pay on time, or find the right home or office to rent without the guesswork.',
    points: ['Tenant referencing and background checks', 'Lease drafting and renewals', 'Rent collection and reminders', 'Short-let and serviced apartment setup'],
  },
  {
    id: 'management',
    title: 'Property management',
    summary: 'We run your property day to day so you receive rent and reports, not phone calls.',
    points: ['Monthly owner statements', 'Inspections with photo reports', 'Service charge administration', 'Ideal for owners living abroad'],
  },
  {
    id: 'advisory',
    title: 'Investment advisory',
    summary: 'Know what an asset will earn before you commit, from land banking to income-producing buildings.',
    points: ['Yield and return projections', 'Location and growth-corridor studies', 'Portfolio reviews', 'Joint-venture structuring'],
  },
];

export const fmServices = [
  { id: 'maintenance', title: 'Planned and reactive maintenance', summary: 'Scheduled servicing and fast response when something breaks, tracked to completion.' },
  { id: 'mep', title: 'Electrical, plumbing and HVAC', summary: 'Generators, inverters, pumps, air-conditioning and wiring kept safe and running.' },
  { id: 'cleaning', title: 'Cleaning and janitorial', summary: 'Daily, deep and post-construction cleaning for homes, estates and offices.' },
  { id: 'security', title: 'Security and access control', summary: 'Vetted guards, gate management, CCTV and visitor logs.' },
  { id: 'landscaping', title: 'Landscaping and grounds', summary: 'Gardens, compounds and shared areas kept neat all year round.' },
  { id: 'waste', title: 'Waste and pest control', summary: 'Scheduled waste evacuation and fumigation to keep buildings healthy.' },
  { id: 'energy', title: 'Power and energy management', summary: 'Diesel monitoring, solar maintenance and load planning to cut running costs.' },
  { id: 'estate', title: 'Estate and facility administration', summary: 'Service charges, resident communication, vendor contracts and budgets.' },
];

export const process = [
  { title: 'Tell us what you need', text: 'A property to buy or rent, a building to manage, or a facility to maintain.' },
  { title: 'We inspect and verify', text: 'Site visits, document checks and a written assessment within days, not weeks.' },
  { title: 'You approve a clear plan', text: 'Fixed scope, timelines and costs agreed in writing before any work starts.' },
  { title: 'We deliver and report', text: 'Regular updates with photos and statements, so you always know where things stand.' },
];

// Sample inventory for the demo. Replace with real listings before launch.
export const listings = [
  // `sample: true` shows a 'Sample listing' tag. Remove once real stock is added.
  { id: 'lekki-4-bed-terrace', title: '4-bedroom terrace duplex', area: 'Lekki, Lagos', type: 'Sale', category: 'Residential', price: 'Price on request', beds: 4, baths: 5, size: '320 m²', sample: true, image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=75' },
  { id: 'ikoyi-3-bed-apartment', title: '3-bedroom serviced apartment', area: 'Ikoyi, Lagos', type: 'Rent', category: 'Residential', price: 'Price on request', beds: 3, baths: 4, size: '210 m²', sample: true, image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=75' },
  { id: 'abuja-office-floor', title: 'Open-plan office floor', area: 'Wuse II, Abuja', type: 'Lease', category: 'Commercial', price: 'Price on request', beds: null, baths: 2, size: '450 m²', sample: true, image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=75' },
  { id: 'epe-land-plots', title: 'Dry land plots with C of O', area: 'Epe, Lagos', type: 'Sale', category: 'Land', price: 'Price on request', beds: null, baths: null, size: '600 m² per plot', sample: true, image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=75' },
  { id: 'gwarinpa-5-bed-detached', title: '5-bedroom detached house', area: 'Gwarinpa, Abuja', type: 'Sale', category: 'Residential', price: 'Price on request', beds: 5, baths: 6, size: '500 m²', sample: true, image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=75' },
  { id: 'vi-retail-space', title: 'Ground-floor retail space', area: 'Victoria Island, Lagos', type: 'Lease', category: 'Commercial', price: 'Price on request', beds: null, baths: 1, size: '140 m²', sample: true, image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=75' },
];

export const faqs = [
  { q: 'Do you manage properties for owners who live outside Nigeria?', a: 'Yes. Many of our clients are abroad. You get monthly statements, inspection photos and a single point of contact, and rent is paid into the account you choose.' },
  { q: 'How do you verify a property before I buy?', a: 'We check the title at the land registry, confirm the survey plan, visit the site and confirm there are no disputes or government acquisition notices before you make any payment.' },
  { q: 'Can I hire you for facility management only?', a: 'Yes. Facility management is a standalone service for estates, offices, schools and private homes. We start with a free site assessment and a written scope.' },
  { q: 'How quickly do you respond to maintenance requests?', a: 'Urgent issues such as power, water or security failures are attended to the same day. Routine requests are scheduled and confirmed within 48 hours.' },
];
