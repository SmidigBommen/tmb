// ============================================
// Tour du Mont Blanc 2026 — Travel Assistant
// ============================================

// ===== DATA =====

const STAGES = [
    {
        num: 1, from: 'Les Houches', to: 'Les Contamines', country: 'France',
        distance: 17, elevGain: 1019, elevLoss: 900, hours: '5-6', difficulty: 'easy-moderate',
        highPoint: 'Col de Voza, 1,653m',
        landmarks: ['Official TMB start sign', 'Col de Voza (hotel/restaurant)', 'Bionnassay hamlet', 'Le Champel', 'Les Contamines-Montjoie village'],
        viewpoints: ['Chamonix valley from Col de Voza', 'Bionnassay Glacier (variant)'],
        accommodations: ['Hotels and gites in Les Contamines-Montjoie'],
        notes: 'Most road-walking of any stage. Option to take Bellevue Cable Car to skip initial climb (saves ~803m ascent, ~2 hours). Col de Tricot variant available (more scenic but harder).',
        startElev: 1007, endElev: 1164
    },
    {
        num: 2, from: 'Les Contamines', to: 'Les Chapieux', country: 'France',
        distance: 19, elevGain: 1430, elevLoss: 983, hours: '7-8', difficulty: 'hard',
        highPoint: 'Col de la Croix du Bonhomme, 2,479m',
        landmarks: ['Notre Dame de la Gorge (baroque chapel)', 'Refuge Nant Borrant', 'Refuge de la Balme', 'Col du Bonhomme (2,329m)', 'Col de la Croix du Bonhomme (2,479m)'],
        viewpoints: ['Panoramic views from Col de la Croix du Bonhomme', 'Reserve naturelle des Contamines-Montjoie'],
        accommodations: ['Refuge Nant Borrant', 'Refuge de la Balme', 'Refuge de la Croix du Bonhomme', 'Auberge de la Nova (Les Chapieux)'],
        notes: 'One of the toughest stages. Often holds snow well into July. Col des Fours variant bypasses Les Chapieux (reaches 2,665m — highest TMB point).',
        startElev: 1164, endElev: 1549
    },
    {
        num: 3, from: 'Les Chapieux', to: 'Rifugio Elisabetta', country: 'France',
        distance: 14.5, elevGain: 1058, elevLoss: 411, hours: '5-6', difficulty: 'moderate',
        highPoint: 'Col de la Seigne, 2,516m',
        landmarks: ['La Ville des Glaciers', 'Refuge des Mottets (1,864m)', 'Col de la Seigne (France-Italy border)', 'Val Veny'],
        viewpoints: ['Col de la Seigne — dramatic panorama entering Italy', 'Glacier de la Lex Blanche', 'Aiguille des Glaciers'],
        accommodations: ['Refuge des Mottets', 'Rifugio Elisabetta', 'Cabane du Combal'],
        notes: 'First international border crossing at Col de la Seigne. One of the most dramatic moments on the trek — stepping into Italy with Mont Blanc massif ahead.',
        startElev: 1549, endElev: 2195,
        border: 'France → Italy'
    },
    {
        num: 4, from: 'Rifugio Elisabetta', to: 'Courmayeur', country: 'Italy',
        distance: 17, elevGain: 558, elevLoss: 1548, hours: '5-6', difficulty: 'easy-moderate',
        highPoint: 'Mont Favre, ~2,430m',
        landmarks: ['Lac Combal', 'Val Veny balcony trail', 'Rifugio Maison Vieille (1,956m)', 'Dolonne village', 'Courmayeur town center'],
        viewpoints: ['Val Veny balcony — unparalleled Mont Blanc views from Italy', 'Lake Combal', 'Italian glaciers'],
        accommodations: ['Rifugio Maison Vieille', 'Courmayeur — full range of hotels, restaurants, shops'],
        notes: 'Mostly descent. Cable cars available for final descent to Courmayeur. Courmayeur is the most common rest day location — great Italian food, gelato, and shopping.',
        startElev: 2195, endElev: 1224
    },
    {
        num: 5, from: 'Courmayeur', to: 'Rifugio Bonatti', country: 'Italy',
        distance: 12.5, elevGain: 1094, elevLoss: 293, hours: '5-6', difficulty: 'moderate',
        highPoint: 'Pas Entre Deux Sauts, 2,524m',
        landmarks: ['Cascading waterfall', 'Rifugio Bertone (2,000m)', 'Val Ferret balcony', 'Rifugio Bonatti (2,021m)'],
        viewpoints: ['Grandes Jorasses and Mont Blanc massif from Val Ferret', 'Stunning sunset from Rifugio Bonatti'],
        accommodations: ['Rifugio Bertone', 'Rifugio Bonatti (80 beds — book 6-8 months ahead)'],
        notes: 'Col Sapin variant available. Rifugio Bonatti is one of the most atmospheric refuges on the TMB — books up very quickly. Final night in Italy.',
        startElev: 1224, endElev: 2021
    },
    {
        num: 6, from: 'Rifugio Bonatti', to: 'La Fouly', country: 'Italy',
        distance: 20.4, elevGain: 959, elevLoss: 1373, hours: '7-8', difficulty: 'hard',
        highPoint: 'Grand Col Ferret, 2,537m',
        landmarks: ['Italian Val Ferret', 'Rifugio Elena (2,062m)', 'Grand Col Ferret (Italy-Switzerland border)', 'Alpage de la Peule', 'Ferret village', 'La Fouly'],
        viewpoints: ['Grand Col Ferret — Mont Blanc behind, Swiss Alps ahead', 'Italian Val Ferret balcony'],
        accommodations: ['Rifugio Elena (128+ beds, newly renovated)', 'Alpage de la Peule', 'La Fouly (hotels, gites)'],
        notes: 'Second border crossing (Italy to Switzerland). Long and arduous climb to Grand Col Ferret. Some hikers split this into two days.',
        startElev: 2021, endElev: 1593,
        border: 'Italy → Switzerland'
    },
    {
        num: 7, from: 'La Fouly', to: 'Champex-Lac', country: 'Switzerland',
        distance: 15.3, elevGain: 592, elevLoss: 794, hours: '4-5', difficulty: 'easy',
        highPoint: '~1,600m',
        landmarks: ['River valley trail', 'Praz-de-Fort', 'Les Arlaches', 'Issert', 'Woodland carved creatures', 'Champex-Lac village and lake'],
        viewpoints: ['Champex-Lac — quaint Swiss lakeside village', 'Valley river views'],
        accommodations: ['Champex-Lac — multiple hotels, gites, camping'],
        notes: 'The easiest stage on the TMB. A pleasant valley walk with a surprise steep climb at the end into Champex-Lac. Good alternative rest day location.',
        startElev: 1593, endElev: 1466
    },
    {
        num: 8, from: 'Champex-Lac', to: 'Col de la Forclaz', country: 'Switzerland',
        distance: 15.9, elevGain: 876, elevLoss: 1014, hours: '5-7', difficulty: 'moderate',
        highPoint: 'Alp Bovine, ~2,049m',
        landmarks: ['Alp Bovine trail', 'Views of Martigny and Bernese Oberland', 'Col de la Forclaz (1,526m)', 'Trient village'],
        viewpoints: ['Alp Bovine — spectacular Martigny and Rhone Valley views', 'Bernese Oberland panorama'],
        accommodations: ['Hotel du Col de la Forclaz', 'Trient village', 'Refuge Le Peuty (66 CHF half-board)'],
        notes: 'Two route options: Main via Alp Bovine (great views) or Fenetre d\'Arpette variant (2,665m — one of the toughest but most rewarding variants with Trient Glacier views).',
        startElev: 1466, endElev: 1526
    },
    {
        num: 9, from: 'Col de la Forclaz', to: 'Tre-le-Champ', country: 'Switzerland',
        distance: 12.9, elevGain: 1095, elevLoss: 1000, hours: '5-6', difficulty: 'moderate',
        highPoint: 'Col de Balme, 2,131m',
        landmarks: ['Le Peuty refuge/camping', 'Col de Balme (Switzerland-France border)', 'Aiguillette des Posettes (2,201m)', 'Tre-le-Champ'],
        viewpoints: ['Col de Balme — Mont Blanc suddenly revealed', 'Aiguillette des Posettes — 360° panorama'],
        accommodations: ['Tre-le-Champ (limited)', 'Argentiere (nearby)', 'Refuge Col de Balme'],
        notes: 'Third border crossing back into France. Final morning in Switzerland. Two descent options from Col de Balme.',
        startElev: 1526, endElev: 1417,
        border: 'Switzerland → France'
    },
    {
        num: 10, from: 'Tre-le-Champ', to: 'Refuge de la Flegere', country: 'France',
        distance: 7, elevGain: 783, elevLoss: 324, hours: '3-4', difficulty: 'moderate',
        highPoint: '~2,100m',
        landmarks: ['Aiguillette d\'Argentiere', 'TMB ladders (bolted to rock)', 'Grand Balcon Sud trail'],
        viewpoints: ['Grand Balcon Sud — finest views of Mont Blanc and Chamonix Aiguilles', 'Lac Blanc (variant) — iconic Mont Blanc reflection'],
        accommodations: ['Refuge de la Flegere (75 beds)', 'Refuge du Lac Blanc (~70 beds, if variant taken)'],
        notes: 'Short stage. Famous ladders section (can bypass via Col des Montets). Lac Blanc variant adds ~45 min and ~200m elevation but provides one of the most iconic views on the entire TMB.',
        startElev: 1417, endElev: 1877
    },
    {
        num: 11, from: 'Refuge de la Flegere', to: 'Les Houches', country: 'France',
        distance: 17, elevGain: 772, elevLoss: 1546, hours: '7-8', difficulty: 'hard',
        highPoint: 'Le Brevent, 2,525m',
        landmarks: ['Grand Balcon Sud', 'Le Brevent summit (2,525m)', 'Col du Brevent (2,368m)', 'Restaurant Le Panoramic', 'Refuge de Bellachat', 'Parc de Merlet'],
        viewpoints: ['Le Brevent — one of the finest viewpoints of Mont Blanc', 'Grand Balcon Sud high trail', 'Bellachat views'],
        accommodations: ['Refuge de Bellachat (24 beds)', 'Les Houches and Chamonix (trek end)'],
        notes: 'Final stage! The descent from Le Brevent to Les Houches is steep and relentless. Option to take cable car from Le Brevent or Planpraz to Chamonix. Parc de Merlet wildlife reserve is a worthwhile stop.',
        startElev: 1877, endElev: 1007
    }
];

const REFUGES = [
    // === MID-RANGE: Mountain Refuges (existing 17) ===
    { name: 'Refuge Miage', altitude: 1560, capacity: 31, price: '~EUR 65-75', country: 'France', stage: 1, lat: 45.8600, lng: 6.7700, bookingUrl: 'https://www.refugemiage.com/', image: 'images/refuge-miage.jpg', tier: 'mid', notes: 'Privately owned; email booking required', amenities: ['Half-board', 'Basic showers'] },
    { name: 'Refuge Nant Borrant', altitude: 1460, capacity: 30, price: '~EUR 55-65', country: 'France', stage: 2, lat: 45.7650, lng: 6.7100, bookingUrl: 'https://www.refuge-nantborrant.com/', image: 'images/refuge-nant-borrant.jpg', tier: 'mid', notes: 'Very cozy, excellent food. Cash only!', amenities: ['Half-board', 'Packed lunch'] },
    { name: 'Refuge de la Balme', altitude: 1706, capacity: 24, price: '~EUR 55-65', country: 'France', stage: 2, lat: 45.7550, lng: 6.7080, bookingUrl: 'https://www.montourdumontblanc.com/en/', image: 'images/refuge-de-la-balme.jpg', tier: 'mid', notes: 'Famous for its cake. Private rooms available.', amenities: ['Half-board', 'Private rooms', 'Packed lunch'] },
    { name: 'Refuge de la Croix du Bonhomme', altitude: 2443, capacity: 105, price: 'EUR 63', country: 'France', stage: 2, lat: 45.7378, lng: 6.7178, bookingUrl: 'https://refugecroixdubonhomme.ffcam.fr/reservation.html', image: 'images/refuge-croix-du-bonhomme.jpg', tier: 'mid', notes: 'Largest refuge in the area. High altitude.', amenities: ['Half-board', 'Large dorms', 'Hot showers (extra)'] },
    { name: 'Refuge des Mottets', altitude: 1864, capacity: 80, price: '~EUR 65-75', country: 'France', stage: 3, lat: 45.7200, lng: 6.7850, bookingUrl: 'https://www.montourdumontblanc.com/en/', image: 'images/refuge-des-mottets.jpg', tier: 'mid', notes: 'One of the most well-regarded refuges. Spectacular views.', amenities: ['Half-board', 'Hot showers (extra)', 'Packed lunch'] },
    { name: 'Rifugio Elisabetta', altitude: 2195, capacity: 76, price: '~EUR 60-75', country: 'Italy', stage: 3, lat: 45.7614, lng: 6.8306, bookingUrl: 'https://www.rifugioelisabetta.com/', image: 'images/rifugio-elisabetta.jpg', tier: 'mid', notes: 'Basic but functional. Between Col de la Seigne and Courmayeur.', amenities: ['Half-board', 'Showers included'] },
    { name: 'Cabane du Combal', altitude: 2000, capacity: 20, price: '~EUR 55-65', country: 'Italy', stage: 4, lat: 45.7550, lng: 6.8500, bookingUrl: 'https://cabaneducombal.com/en/', image: 'images/cabane-du-combal.jpg', tier: 'mid', notes: 'Small, intimate hut near Lac Combal.', amenities: ['Half-board'] },
    { name: 'Rifugio Maison Vieille', altitude: 1956, capacity: 40, price: '~EUR 60-75', country: 'Italy', stage: 4, lat: 45.7750, lng: 6.9200, bookingUrl: 'https://www.maisonvieille.com/', image: 'images/rifugio-maison-vieille.jpg', tier: 'mid', notes: 'Between Checrouit pass and Courmayeur; restaurant.', amenities: ['Half-board', 'Restaurant', 'Showers included'] },
    { name: 'Rifugio Bertone', altitude: 2000, capacity: 50, price: '~EUR 60-75', country: 'Italy', stage: 5, lat: 45.8300, lng: 7.0000, bookingUrl: 'http://www.rifugiobertone.it/wp/en/home-en/', image: 'images/rifugio-bertone.jpg', tier: 'mid', notes: 'Named after Italian mountaineer. Views over Courmayeur.', amenities: ['Half-board', 'Terrace', 'Showers included'] },
    { name: 'Rifugio Bonatti', altitude: 2021, capacity: 80, price: 'EUR 74 dorm / EUR 94 private', country: 'Italy', stage: 5, lat: 45.8553, lng: 7.0386, bookingUrl: 'https://www.rifugiobonatti.it/en/book-now/', image: 'images/rifugio-bonatti.jpg', tier: 'mid', notes: 'One of the most popular refuges. Books up 6-8 months ahead. Stunning location, generous food.', amenities: ['Half-board', 'Private rooms', 'Showers included', 'Terrace'] },
    { name: 'Rifugio Elena', altitude: 2062, capacity: 128, price: 'EUR 85-140', country: 'Italy', stage: 6, lat: 45.8650, lng: 7.0600, bookingUrl: 'https://www.rifugioelena.it/', image: 'images/rifugio-elena.jpg', tier: 'mid', notes: 'Newly renovated. Seven ensuite private rooms. Largest capacity on route.', amenities: ['Half-board', 'Private rooms', 'Ensuite', 'Showers included'] },
    { name: 'Alpage de la Peule', altitude: 2071, capacity: 20, price: '90 CHF', country: 'Switzerland', stage: 6, lat: 45.8950, lng: 7.0850, bookingUrl: 'https://www.montourdumontblanc.com/en/', image: 'images/alpage-de-la-peule.jpg', tier: 'mid', notes: 'Working dairy farm with 65 cows. Raclette, tomme cheese.', amenities: ['Half-board', 'Artisan cheese', 'Farm experience'] },
    { name: 'Refuge Le Peuty', altitude: 1328, capacity: 23, price: '66 CHF', country: 'Switzerland', stage: 8, lat: 46.0531, lng: 7.0239, bookingUrl: 'https://refugelepeuty.ch/en/', image: 'images/refuge-le-peuty.jpg', tier: 'mid', notes: 'Basic, one large dorm plus private yurt option.', amenities: ['Half-board', 'Yurt', 'Camping'] },
    { name: 'Refuge Col de Balme', altitude: 2131, capacity: 20, price: '~80-100 CHF', country: 'Switzerland', stage: 9, lat: 46.0167, lng: 6.9667, bookingUrl: 'https://en.refugeducoldebalme.com/contact', image: 'images/refuge-col-de-balme.jpg', tier: 'mid', notes: 'At the Swiss-French border.', amenities: ['Half-board', 'Border views'] },
    { name: 'Refuge de la Flegere', altitude: 1877, capacity: 75, price: '~EUR 70-85', country: 'France', stage: 10, lat: 45.9625, lng: 6.8872, bookingUrl: 'https://www.refuge-de-la-flegere.com/en/booking/', image: 'images/refuge-de-la-flegere.jpg', tier: 'mid', notes: 'Cable car access to/from Chamonix. Great position.', amenities: ['Half-board', 'Cable car access', 'Hot showers (extra)'] },
    { name: 'Refuge du Lac Blanc', altitude: 2352, capacity: 70, price: '~EUR 70', country: 'France', stage: 10, lat: 45.9700, lng: 6.8900, bookingUrl: 'https://refugelacblanc.com/en/', image: 'images/refuge-du-lac-blanc.jpg', tier: 'mid', notes: 'Iconic views. Shower costs up to EUR 5.', amenities: ['Half-board', 'Iconic views', 'Packed lunch'] },
    { name: 'Refuge de Bellachat', altitude: 2152, capacity: 24, price: '~EUR 65-75', country: 'France', stage: 11, lat: 45.9200, lng: 6.8200, bookingUrl: 'https://www.refuge-bellachat.com/en', image: 'images/refuge-de-bellachat.jpg', tier: 'mid', notes: 'Small, atmospheric. On final descent from Le Brevent.', amenities: ['Half-board', 'Intimate setting'] },

    // === BUDGET: Campsites & Bivouac ===
    { name: 'Camping Le Bellevue', altitude: 1007, capacity: 100, price: '~EUR 12-20', country: 'France', stage: 1, lat: 45.8910, lng: 6.7970, bookingUrl: 'https://camping-bellevue-leshouches.com/', image: 'images/hotel-saint-antoine.jpg', tier: 'budget', notes: 'Right in Les Houches. Hot showers, small shop. Great start/end point.', amenities: ['Tent pitch', 'Hot showers', 'Shop'] },
    { name: 'Camping Le Pontet', altitude: 1164, capacity: 80, price: '~EUR 10-18', country: 'France', stage: 1, lat: 45.8210, lng: 6.7280, bookingUrl: 'https://www.campinglepontet.fr/', image: 'images/hotel-gai-soleil.jpg', tier: 'budget', notes: 'Village campsite in Les Contamines. Basic but well-located.', amenities: ['Tent pitch', 'Hot showers', 'Village access'] },
    { name: 'Camping Auberge de la Nova', altitude: 1549, capacity: 30, price: '~EUR 10-15', country: 'France', stage: 2, lat: 45.7130, lng: 6.7310, bookingUrl: 'https://refugelanova.com/', image: 'images/auberge-de-la-nova.jpg', tier: 'budget', notes: 'Small camping area next to the auberge in Les Chapieux. Limited spots.', amenities: ['Tent pitch', 'Meals available', 'Basic facilities'] },
    { name: 'Camping Monte Bianco', altitude: 1224, capacity: 120, price: '~EUR 15-25', country: 'Italy', stage: 4, lat: 45.7930, lng: 6.9680, bookingUrl: 'https://www.campinglasorgente.net/en/', image: 'images/hotel-bouton-dor.jpg', tier: 'budget', notes: 'Well-equipped campsite near Courmayeur. Supermarket and restaurants nearby.', amenities: ['Tent pitch', 'Hot showers', 'Laundry', 'Restaurant'] },
    { name: 'Camping Aiguille Noire', altitude: 1320, capacity: 60, price: '~EUR 12-20', country: 'Italy', stage: 5, lat: 45.8050, lng: 6.9750, bookingUrl: 'https://www.aiguillenoire.com/en/home-2/', image: 'images/rifugio-maison-vieille.jpg', tier: 'budget', notes: 'Quiet site in Val Veny. Spectacular mountain backdrop.', amenities: ['Tent pitch', 'Hot showers', 'Bar'] },
    { name: 'Camping des Glaciers', altitude: 1593, capacity: 80, price: '~CHF 15-22', country: 'Switzerland', stage: 6, lat: 45.9335, lng: 7.0960, bookingUrl: 'https://www.camping-glaciers.ch/en/', image: 'images/hotel-edelweiss.jpg', tier: 'budget', notes: 'Beautiful setting in La Fouly. Clean facilities, mountain views.', amenities: ['Tent pitch', 'Hot showers', 'Kitchen'] },
    { name: 'Camping du Grand Combin', altitude: 1466, capacity: 60, price: '~CHF 15-20', country: 'Switzerland', stage: 7, lat: 46.0300, lng: 7.1180, bookingUrl: 'https://www.champex-camping.ch/', image: 'images/hotel-splendide.jpg', tier: 'budget', notes: 'Lakeside camping at Champex-Lac. Scenic and peaceful.', amenities: ['Tent pitch', 'Hot showers', 'Lake access'] },
    { name: 'Camping Relais du Mont Blanc', altitude: 1526, capacity: 40, price: '~CHF 12-18', country: 'Switzerland', stage: 8, lat: 46.0570, lng: 7.0170, bookingUrl: 'https://www.coldelaforclaz.ch/en', image: 'images/hotel-col-de-la-forclaz.jpg', tier: 'budget', notes: 'Camping area at Col de la Forclaz. Basic but well-positioned.', amenities: ['Tent pitch', 'Meals available'] },
    { name: 'Camping Le Peuty', altitude: 1328, capacity: 30, price: '~CHF 12-15', country: 'Switzerland', stage: 8, lat: 46.0535, lng: 7.0245, bookingUrl: 'https://refugelepeuty.ch/en/', image: 'images/refuge-le-peuty.jpg', tier: 'budget', notes: 'Camping alongside the refuge. Yurt option also available.', amenities: ['Tent pitch', 'Meals at refuge', 'Yurt'] },
    { name: 'Camping Le Glacier d\'Argentiere', altitude: 1250, capacity: 70, price: '~EUR 12-20', country: 'France', stage: 9, lat: 45.9810, lng: 6.9280, bookingUrl: 'https://www.campingchamonix.com/en/home/', image: 'images/hotel-grands-montets.jpg', tier: 'budget', notes: 'Near Argentiere village. Access to shops and transport.', amenities: ['Tent pitch', 'Hot showers', 'Laundry', 'Village access'] },

    // === COMFORT: Hotels & Guesthouses ===
    { name: 'Hotel Saint-Antoine', altitude: 1007, capacity: 40, price: '~EUR 120-180', country: 'France', stage: 1, lat: 45.8900, lng: 6.7985, bookingUrl: 'https://www.hotelsaintantoine.com/en/homepage/', image: 'images/hotel-saint-antoine.jpg', tier: 'comfort', notes: 'Charming hotel in Les Houches. Restaurant, garden, Mont Blanc views.', amenities: ['Private room', 'Restaurant', 'WiFi', 'Garden'] },
    { name: 'Hotel Gai Soleil', altitude: 1164, capacity: 50, price: '~EUR 90-140', country: 'France', stage: 1, lat: 45.8215, lng: 6.7275, bookingUrl: 'https://www.gaisoleil.com/', image: 'images/hotel-gai-soleil.jpg', tier: 'comfort', notes: 'Family-run hotel in Les Contamines. Pool and spa facilities.', amenities: ['Private room', 'Restaurant', 'Pool', 'WiFi'] },
    { name: 'Auberge de la Nova', altitude: 1549, capacity: 20, price: '~EUR 75-100', country: 'France', stage: 2, lat: 45.7128, lng: 6.7308, bookingUrl: 'https://refugelanova.com/', image: 'images/auberge-de-la-nova.jpg', tier: 'comfort', notes: 'The only lodging option in tiny Les Chapieux. Comfortable private rooms.', amenities: ['Private room', 'Restaurant', 'Half-board'] },
    { name: 'Hotel Bouton d\'Or', altitude: 1224, capacity: 55, price: '~EUR 130-200', country: 'Italy', stage: 4, lat: 45.7920, lng: 6.9670, bookingUrl: 'https://hotelboutondor.com/en/', image: 'images/hotel-bouton-dor.jpg', tier: 'comfort', notes: 'Elegant hotel in Courmayeur center. Spa, excellent restaurant. Perfect for rest day.', amenities: ['Private room', 'Restaurant', 'Spa', 'WiFi', 'Bar'] },
    { name: 'Auberge de la Maison', altitude: 1300, capacity: 45, price: '~EUR 150-250', country: 'Italy', stage: 4, lat: 45.7880, lng: 6.9610, bookingUrl: 'https://www.aubergemaison.it/en/', image: 'images/auberge-de-la-maison.jpg', tier: 'comfort', notes: 'Upscale chalet-style hotel near Courmayeur. Wellness center, gourmet dining.', amenities: ['Private room', 'Spa', 'Gourmet restaurant', 'WiFi', 'Wellness'] },
    { name: 'Hotel Edelweiss', altitude: 1593, capacity: 30, price: '~CHF 140-200', country: 'Switzerland', stage: 6, lat: 45.9330, lng: 7.0950, bookingUrl: 'https://www.fouly.ch/en/', image: 'images/hotel-edelweiss.jpg', tier: 'comfort', notes: 'Comfortable hotel in La Fouly. Mountain views, hearty Swiss cuisine.', amenities: ['Private room', 'Restaurant', 'WiFi', 'Terrace'] },
    { name: 'Hotel Splendide', altitude: 1466, capacity: 50, price: '~CHF 150-220', country: 'Switzerland', stage: 7, lat: 46.0295, lng: 7.1170, bookingUrl: 'https://www.hotel-splendide.ch/', image: 'images/hotel-splendide.jpg', tier: 'comfort', notes: 'Lakeside hotel in Champex-Lac. Beautiful terrace overlooking the lake.', amenities: ['Private room', 'Restaurant', 'Lake views', 'WiFi', 'Terrace'] },
    { name: 'Hotel Col de la Forclaz', altitude: 1526, capacity: 25, price: '~CHF 120-170', country: 'Switzerland', stage: 8, lat: 46.0560, lng: 7.0165, bookingUrl: 'https://www.coldelaforclaz.ch/en', image: 'images/hotel-col-de-la-forclaz.jpg', tier: 'comfort', notes: 'Historic mountain pass hotel. Restaurant with panoramic terrace.', amenities: ['Private room', 'Restaurant', 'WiFi', 'Panoramic terrace'] },
    { name: 'Hotel Grands Montets', altitude: 1250, capacity: 40, price: '~EUR 130-190', country: 'France', stage: 9, lat: 45.9815, lng: 6.9275, bookingUrl: 'https://www.hotel-grands-montets.com/', image: 'images/hotel-grands-montets.jpg', tier: 'comfort', notes: 'Modern hotel in Argentiere. Close to cable car and restaurants.', amenities: ['Private room', 'Restaurant', 'WiFi', 'Bar'] },
    { name: 'Hotel Le Faucigny', altitude: 1035, capacity: 60, price: '~EUR 140-220', country: 'France', stage: 11, lat: 45.9237, lng: 6.8694, bookingUrl: 'https://www.hameaufaucigny-chamonix.com/en/hotel-faucigny/', image: 'images/hotel-le-faucigny.jpg', tier: 'comfort', notes: 'Boutique hotel in Chamonix center. Perfect end-of-trek celebration.', amenities: ['Private room', 'Restaurant', 'Spa', 'WiFi', 'Bar'] },
];

const VARIANTS = [
    { stage: 'Stage 1', name: 'Col de Tricot', desc: 'Cross the Bionnassay suspension bridge with direct glacier views. More challenging but far more scenic than the standard Col de Voza route.', highlight: '+200m elevation gain' },
    { stage: 'Stage 2-3', name: 'Col des Fours', desc: 'Reach 2,665m — the highest point on any TMB variant. Spectacular lunar landscape and panoramic views. Bypasses Les Chapieux.', highlight: 'Highest point on TMB' },
    { stage: 'Stage 4', name: 'Mont Fortin', desc: 'High alpine plateau route through Val Veny with spectacular glacier views. Significantly more elevation than the standard route.', highlight: 'Spectacular glaciers' },
    { stage: 'Stage 5', name: 'Col Sapin', desc: 'Higher ridgeline route at 2,436m with more dramatic views than the direct Rifugio Bertone route.', highlight: 'Dramatic ridgeline' },
    { stage: 'Stage 8', name: 'Fenetre d\'Arpette', desc: 'One of the toughest but most rewarding variants. Long boulder field with breathtaking Trient Glacier views. Not recommended in bad weather.', highlight: '2,665m — Expert route' },
    { stage: 'Stage 9', name: 'Aiguillette des Posettes', desc: '360-degree panoramic views from a rounded ridgeline including Le Tour glacier. A beautiful extension from Col de Balme.', highlight: '360° panorama' },
    { stage: 'Stage 10', name: 'Lac Blanc Detour', desc: 'One of the most iconic and photographed views on the TMB — Mont Blanc reflected in an alpine lake. Adds ~45 minutes.', highlight: 'Must-do in clear weather' },
    { stage: 'Stage 11', name: 'Le Brevent Cable Car', desc: 'Take the cable car from Planpraz down to Chamonix to skip the steep, relentless final descent. Saves your knees!', highlight: 'Knee-saver option' },
];

const GEAR = {
    'Footwear': [
        'Waterproof hiking boots (broken in)',
        'Camp shoes / sandals',
        'Hiking socks (3-4 pairs wool/synthetic)',
        'Liner socks (blister prevention)'
    ],
    'Base Layers': [
        'Moisture-wicking tops (2-3)',
        'Base layer bottoms (1-2)',
        'Quick-dry underwear (3-4)'
    ],
    'Mid & Outer Layers': [
        'Fleece jacket',
        'Packable down/synthetic jacket',
        'Waterproof shell jacket (Gore-Tex)',
        'Waterproof rain pants'
    ],
    'Lower Body': [
        'Hiking pants (1-2 pairs)',
        'Hiking shorts'
    ],
    'Accessories': [
        'Sun hat with brim',
        'Warm beanie',
        'Insulated gloves',
        'Buff / neck gaiter'
    ],
    'Equipment': [
        'Backpack (30-40L hut-to-hut)',
        'Rain cover for backpack',
        'Trekking poles (collapsible)',
        'Headlamp + extra batteries',
        'Sunglasses (UV, Category 3-4)',
        'Sunscreen SPF 50+',
        'Lip balm with SPF',
        'Water bottle/bladder (2L min)',
        'Map and compass',
        'Phone with offline maps',
        'Portable charger (10,000+ mAh)',
        'Lightweight dry bags'
    ],
    'Toiletries & First Aid': [
        'Blister kit (Compeed, moleskin)',
        'Basic first aid kit',
        'Personal medications',
        'Insect repellent',
        'Toothbrush & toothpaste',
        'Microfiber towel',
        'Earplugs (dormitory essential!)',
        'Sleeping bag liner (silk/synthetic)'
    ],
    'Documents': [
        'Passport / ID',
        'Travel insurance details',
        'Refuge booking confirmations',
        'Cash: EUR 200-300 + CHF 100-200',
        'Credit/debit card'
    ]
};

const ROUTE_COORDS = [
    [45.8903, 6.7981],  // Les Houches
    [45.8750, 6.7800],  // Col de Voza area
    [45.8500, 6.7600],  // Bionnassay
    [45.8208, 6.7267],  // Les Contamines
    [45.7900, 6.7150],  // Notre Dame de la Gorge
    [45.7650, 6.7100],  // Nant Borrant area
    [45.7453, 6.7072],  // Col du Bonhomme
    [45.7378, 6.7178],  // Col de la Croix du Bonhomme
    [45.7125, 6.7306],  // Les Chapieux
    [45.7100, 6.7600],  // La Ville des Glaciers
    [45.7200, 6.7850],  // Refuge des Mottets
    [45.7500, 6.8056],  // Col de la Seigne
    [45.7614, 6.8306],  // Rifugio Elisabetta
    [45.7550, 6.8500],  // Lac Combal
    [45.7650, 6.8900],  // Val Veny
    [45.7750, 6.9200],  // Maison Vieille area
    [45.7917, 6.9667],  // Courmayeur
    [45.8100, 6.9800],  // Above Courmayeur
    [45.8300, 7.0000],  // Rifugio Bertone area
    [45.8553, 7.0386],  // Rifugio Bonatti
    [45.8650, 7.0500],  // Val Ferret
    [45.8786, 7.0772],  // Grand Col Ferret
    [45.8950, 7.0850],  // Alpage de la Peule
    [45.9100, 7.0900],  // Ferret
    [45.9331, 7.0953],  // La Fouly
    [45.9600, 7.1000],  // Praz-de-Fort
    [45.9900, 7.1100],  // Issert
    [46.0297, 7.1175],  // Champex-Lac
    [46.0400, 7.0800],  // Between Champex and Forclaz
    [46.0500, 7.0500],  // Alp Bovine area
    [46.0564, 7.0167],  // Col de la Forclaz
    [46.0531, 7.0239],  // Trient
    [46.0350, 6.9900],  // Ascending to Balme
    [46.0167, 6.9667],  // Col de Balme
    [46.0000, 6.9500],  // Descending
    [45.9903, 6.9300],  // Tre-le-Champ
    [45.9800, 6.9100],  // Grand Balcon Sud
    [45.9625, 6.8872],  // La Flegere
    [45.9500, 6.8600],  // Planpraz area
    [45.9333, 6.8333],  // Le Brevent
    [45.9200, 6.8200],  // Bellachat
    [45.9050, 6.8000],  // Descending to Les Houches
    [45.8903, 6.7981],  // Les Houches (finish)
];

const MAP_POINTS = [
    // Stage endpoints
    { lat: 45.8903, lng: 6.7981, name: 'Les Houches', type: 'town', info: 'Start/End — 1,007m', stage: '1/11' },
    { lat: 45.8208, lng: 6.7267, name: 'Les Contamines-Montjoie', type: 'town', info: '1,164m — Village with full services', stage: '1-2' },
    { lat: 45.7125, lng: 6.7306, name: 'Les Chapieux', type: 'town', info: '1,549m — Small hamlet', stage: '2-3' },
    { lat: 45.7917, lng: 6.9667, name: 'Courmayeur', type: 'town', info: '1,224m — Largest town on route, rest day', stage: '4-5' },
    { lat: 45.9331, lng: 7.0953, name: 'La Fouly', type: 'town', info: '1,593m — Swiss valley village', stage: '6-7' },
    { lat: 46.0297, lng: 7.1175, name: 'Champex-Lac', type: 'town', info: '1,466m — Swiss lakeside village', stage: '7-8' },
    { lat: 45.9903, lng: 6.9300, name: 'Tre-le-Champ', type: 'town', info: '1,417m', stage: '9-10' },

    // Mountain passes
    { lat: 45.8750, lng: 6.7800, name: 'Col de Voza', type: 'pass', info: '1,653m', stage: '1' },
    { lat: 45.7453, lng: 6.7072, name: 'Col du Bonhomme', type: 'pass', info: '2,329m', stage: '2' },
    { lat: 45.7378, lng: 6.7178, name: 'Col de la Croix du Bonhomme', type: 'pass', info: '2,479m', stage: '2' },
    { lat: 45.7500, lng: 6.8056, name: 'Col de la Seigne', type: 'pass', info: '2,516m — France/Italy border', stage: '3' },
    { lat: 45.8786, lng: 7.0772, name: 'Grand Col Ferret', type: 'pass', info: '2,537m — Italy/Switzerland border', stage: '6' },
    { lat: 46.0167, lng: 6.9667, name: 'Col de Balme', type: 'pass', info: '2,131m — Switzerland/France border', stage: '9' },
    { lat: 45.9333, lng: 6.8333, name: 'Le Brevent', type: 'pass', info: '2,525m — Finest viewpoint of Mont Blanc', stage: '11' },
    { lat: 46.0564, lng: 7.0167, name: 'Col de la Forclaz', type: 'pass', info: '1,526m', stage: '8' },

    // Key refuges
    { lat: 45.7650, lng: 6.7100, name: 'Refuge Nant Borrant', type: 'refuge', info: '1,460m — 30 beds, EUR 55-65', stage: '2' },
    { lat: 45.7200, lng: 6.7850, name: 'Refuge des Mottets', type: 'refuge', info: '1,864m — 80 beds, EUR 65-75', stage: '3' },
    { lat: 45.7614, lng: 6.8306, name: 'Rifugio Elisabetta', type: 'refuge', info: '2,195m — 76 beds, EUR 60-75', stage: '3' },
    { lat: 45.8300, lng: 7.0000, name: 'Rifugio Bertone', type: 'refuge', info: '2,000m — 50 beds, EUR 60-75', stage: '5' },
    { lat: 45.8553, lng: 7.0386, name: 'Rifugio Bonatti', type: 'refuge', info: '2,021m — 80 beds, EUR 74 HB', stage: '5' },
    { lat: 45.8650, lng: 7.0600, name: 'Rifugio Elena', type: 'refuge', info: '2,062m — 128 beds, EUR 85-140', stage: '6' },
    { lat: 45.9625, lng: 6.8872, name: 'Refuge de la Flegere', type: 'refuge', info: '1,877m — 75 beds, EUR 70-85', stage: '10' },
    { lat: 45.9200, lng: 6.8200, name: 'Refuge de Bellachat', type: 'refuge', info: '2,152m — 24 beds, EUR 65-75', stage: '11' },

    // Mont Blanc
    { lat: 45.8326, lng: 6.8652, name: 'Mont Blanc', type: 'summit', info: '4,810m — Highest peak in Western Europe', stage: '' },
];

// ===== MAP INITIALIZATION =====

let mapInstance = null;
const mapMarkers = {};

function initMap() {
    const map = L.map('map', {
        zoomControl: true,
        scrollWheelZoom: true,
    }).setView([45.88, 6.92], 11);
    mapInstance = map;

    L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        maxZoom: 17,
        attribution: '&copy; <a href="https://opentopomap.org">OpenTopoMap</a> contributors'
    }).addTo(map);

    // Draw route
    const routeLine = L.polyline(ROUTE_COORDS, {
        color: '#e74c3c',
        weight: 4,
        opacity: 0.85,
        smoothFactor: 1.5,
        lineCap: 'round',
        lineJoin: 'round'
    }).addTo(map);

    // Custom icons
    function createIcon(color, size) {
        return L.divIcon({
            className: 'custom-marker',
            html: `<div style="width:${size}px;height:${size}px;background:${color};border:2.5px solid white;border-radius:50%;box-shadow:0 2px 6px rgba(0,0,0,0.3);"></div>`,
            iconSize: [size, size],
            iconAnchor: [size/2, size/2],
        });
    }

    const icons = {
        town: createIcon('#27ae60', 14),
        pass: createIcon('#8e44ad', 12),
        refuge: createIcon('#e67e22', 12),
        summit: createIcon('#e74c3c', 18),
    };

    // Add markers
    MAP_POINTS.forEach(pt => {
        const icon = icons[pt.type] || icons.town;
        // For refuge markers, find matching refuge data to add booking link
        const matchedRefuge = (pt.type === 'refuge') ? REFUGES.find(r => r.name === pt.name) : null;
        const bookingHtml = matchedRefuge && matchedRefuge.bookingUrl
            ? `<a href="${matchedRefuge.bookingUrl}" target="_blank" rel="noopener" class="popup-book-link">Book accommodation &rarr;</a>`
            : '';
        const marker = L.marker([pt.lat, pt.lng], { icon })
            .addTo(map)
            .bindPopup(`<strong>${pt.name}</strong><div class="popup-meta">${pt.info}${pt.stage ? ' · Stage ' + pt.stage : ''}</div>${bookingHtml}`);
        mapMarkers[pt.name] = marker;
    });

    // Country border markers
    const borderPoints = [
        { lat: 45.7500, lng: 6.8056, label: 'France → Italy' },
        { lat: 45.8786, lng: 7.0772, label: 'Italy → Switzerland' },
        { lat: 46.0167, lng: 6.9667, label: 'Switzerland → France' },
    ];

    borderPoints.forEach(bp => {
        L.marker([bp.lat, bp.lng], {
            icon: L.divIcon({
                className: 'border-marker',
                html: `<div style="background:rgba(255,255,255,0.92);padding:2px 8px;border-radius:10px;font-size:11px;font-weight:600;white-space:nowrap;box-shadow:0 2px 8px rgba(0,0,0,0.2);border:1px solid rgba(0,0,0,0.1);font-family:Inter,sans-serif;color:#1a2332;">${bp.label}</div>`,
                iconSize: [120, 20],
                iconAnchor: [60, -8],
            })
        }).addTo(map);
    });

    map.fitBounds(routeLine.getBounds().pad(0.08));
}

// ===== ELEVATION PROFILE =====

function drawElevationProfile() {
    const canvas = document.getElementById('elevation-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;

    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = 200 * dpr;
    canvas.style.width = rect.width + 'px';
    canvas.style.height = '200px';
    ctx.scale(dpr, dpr);

    const w = rect.width;
    const h = 200;
    const pad = { top: 20, right: 20, bottom: 35, left: 50 };

    // Build elevation data points from stages
    const elevPoints = [];
    let cumulDist = 0;
    STAGES.forEach((s, i) => {
        if (i === 0) elevPoints.push({ dist: 0, elev: s.startElev, label: s.from });
        // Approximate high point at 60% of stage distance
        const highElev = parseInt((s.highPoint || '').replace(/[^0-9]/g, '')) || Math.max(s.startElev, s.endElev) + s.elevGain * 0.5;
        elevPoints.push({ dist: cumulDist + s.distance * 0.55, elev: Math.min(highElev, s.startElev + s.elevGain) });
        cumulDist += s.distance;
        elevPoints.push({ dist: cumulDist, elev: s.endElev, label: s.to });
    });

    const maxDist = cumulDist;
    const maxElev = Math.max(...elevPoints.map(p => p.elev)) + 100;
    const minElev = Math.min(...elevPoints.map(p => p.elev)) - 100;

    const chartW = w - pad.left - pad.right;
    const chartH = h - pad.top - pad.bottom;

    function toX(dist) { return pad.left + (dist / maxDist) * chartW; }
    function toY(elev) { return pad.top + chartH - ((elev - minElev) / (maxElev - minElev)) * chartH; }

    // Grid lines
    ctx.strokeStyle = '#eef1f4';
    ctx.lineWidth = 1;
    for (let e = Math.ceil(minElev / 500) * 500; e <= maxElev; e += 500) {
        ctx.beginPath();
        ctx.moveTo(pad.left, toY(e));
        ctx.lineTo(w - pad.right, toY(e));
        ctx.stroke();
        ctx.fillStyle = '#94a3b1';
        ctx.font = '11px Inter, sans-serif';
        ctx.textAlign = 'right';
        ctx.fillText(e + 'm', pad.left - 6, toY(e) + 4);
    }

    // Distance labels
    ctx.textAlign = 'center';
    for (let d = 0; d <= maxDist; d += 20) {
        ctx.fillStyle = '#94a3b1';
        ctx.font = '11px Inter, sans-serif';
        ctx.fillText(d + 'km', toX(d), h - pad.bottom + 18);
    }

    // Fill gradient
    const gradient = ctx.createLinearGradient(0, pad.top, 0, h - pad.bottom);
    gradient.addColorStop(0, 'rgba(41,128,185,0.25)');
    gradient.addColorStop(1, 'rgba(41,128,185,0.02)');

    ctx.beginPath();
    ctx.moveTo(toX(elevPoints[0].dist), toY(elevPoints[0].elev));
    for (let i = 1; i < elevPoints.length; i++) {
        const prev = elevPoints[i-1];
        const curr = elevPoints[i];
        const cpx = (toX(prev.dist) + toX(curr.dist)) / 2;
        ctx.bezierCurveTo(cpx, toY(prev.elev), cpx, toY(curr.elev), toX(curr.dist), toY(curr.elev));
    }
    ctx.lineTo(toX(elevPoints[elevPoints.length - 1].dist), h - pad.bottom);
    ctx.lineTo(pad.left, h - pad.bottom);
    ctx.closePath();
    ctx.fillStyle = gradient;
    ctx.fill();

    // Line
    ctx.beginPath();
    ctx.moveTo(toX(elevPoints[0].dist), toY(elevPoints[0].elev));
    for (let i = 1; i < elevPoints.length; i++) {
        const prev = elevPoints[i-1];
        const curr = elevPoints[i];
        const cpx = (toX(prev.dist) + toX(curr.dist)) / 2;
        ctx.bezierCurveTo(cpx, toY(prev.elev), cpx, toY(curr.elev), toX(curr.dist), toY(curr.elev));
    }
    ctx.strokeStyle = '#2980b9';
    ctx.lineWidth = 2.5;
    ctx.stroke();

    // Stage dividers and country colors
    cumulDist = 0;
    const countryColors = { France: '#002395', Italy: '#008C45', Switzerland: '#D52B1E' };
    STAGES.forEach((s, i) => {
        cumulDist += s.distance;
        if (i < STAGES.length - 1) {
            ctx.strokeStyle = 'rgba(0,0,0,0.08)';
            ctx.lineWidth = 1;
            ctx.setLineDash([3, 3]);
            ctx.beginPath();
            ctx.moveTo(toX(cumulDist), pad.top);
            ctx.lineTo(toX(cumulDist), h - pad.bottom);
            ctx.stroke();
            ctx.setLineDash([]);
        }
        // Stage number labels
        const midDist = cumulDist - s.distance / 2;
        ctx.fillStyle = countryColors[s.country] || '#1a2332';
        ctx.font = 'bold 10px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(s.num, toX(midDist), h - pad.bottom + 30);
    });
}

// ===== RENDER STAGES =====

function renderStages() {
    const grid = document.getElementById('stages-grid');
    grid.innerHTML = STAGES.map(s => {
        const countryClass = s.country.toLowerCase();
        let diffClass, diffLabel;
        if (s.difficulty === 'easy') { diffClass = 'easy'; diffLabel = 'Easy'; }
        else if (s.difficulty === 'easy-moderate') { diffClass = 'easy'; diffLabel = 'Easy-Moderate'; }
        else if (s.difficulty === 'moderate') { diffClass = 'moderate'; diffLabel = 'Moderate'; }
        else { diffClass = 'hard'; diffLabel = 'Moderate-Difficult'; }

        return `
        <div class="stage-card" data-stage="${s.num}">
            <div class="stage-card-header">
                <div class="stage-number ${countryClass}">${s.num}</div>
                <div class="stage-title">
                    <h4>${s.from} → ${s.to}</h4>
                    <p>${s.country}${s.border ? ' · ' + s.border : ''}</p>
                </div>
            </div>
            <div class="stage-card-body">
                <div class="stage-stats">
                    <div class="stage-stat"><span class="stage-stat-value">${s.distance}</span><span class="stage-stat-label">km</span></div>
                    <div class="stage-stat"><span class="stage-stat-value">+${s.elevGain}</span><span class="stage-stat-label">m gain</span></div>
                    <div class="stage-stat"><span class="stage-stat-value">-${s.elevLoss}</span><span class="stage-stat-label">m loss</span></div>
                    <div class="stage-stat"><span class="stage-stat-value">${s.hours}</span><span class="stage-stat-label">hours</span></div>
                </div>
                <div class="stage-difficulty">
                    <div class="difficulty-bar"><div class="difficulty-fill ${diffClass}"></div></div>
                    <span class="difficulty-label ${diffClass}">${diffLabel}</span>
                </div>
            </div>
        </div>`;
    }).join('');

    // Click handlers
    grid.querySelectorAll('.stage-card').forEach(card => {
        card.addEventListener('click', () => {
            const num = parseInt(card.dataset.stage);
            openStageModal(STAGES[num - 1]);
        });
    });
}

// ===== STAGE MODAL =====

function openStageModal(s) {
    const modal = document.getElementById('stage-modal');
    const content = document.getElementById('modal-content');
    const countryClass = s.country.toLowerCase();

    content.innerHTML = `
        <div class="modal-stage-badge ${countryClass}">Stage ${s.num} · ${s.country}</div>
        <h2>${s.from} → ${s.to}</h2>
        <div class="modal-stats-grid">
            <div class="modal-stat"><span class="modal-stat-value">${s.distance} km</span><span class="modal-stat-label">Distance</span></div>
            <div class="modal-stat"><span class="modal-stat-value">+${s.elevGain}m</span><span class="modal-stat-label">Elevation Gain</span></div>
            <div class="modal-stat"><span class="modal-stat-value">-${s.elevLoss}m</span><span class="modal-stat-label">Elevation Loss</span></div>
            <div class="modal-stat"><span class="modal-stat-value">${s.hours}h</span><span class="modal-stat-label">Est. Time</span></div>
        </div>
        <div class="modal-section">
            <h4>High Point</h4>
            <p>${s.highPoint}</p>
        </div>
        ${s.border ? `<div class="modal-section"><h4>Border Crossing</h4><p>${s.border}</p></div>` : ''}
        <div class="modal-section">
            <h4>Key Landmarks</h4>
            <ul>${s.landmarks.map(l => `<li>${l}</li>`).join('')}</ul>
        </div>
        <div class="modal-section">
            <h4>Viewpoints</h4>
            <ul>${s.viewpoints.map(v => `<li>${v}</li>`).join('')}</ul>
        </div>
        <div class="modal-section">
            <h4>Accommodations</h4>
            <ul>${s.accommodations.map(a => `<li>${a}</li>`).join('')}</ul>
        </div>
        <div class="modal-section">
            <h4>Notes & Tips</h4>
            <p>${s.notes}</p>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('stage-modal').classList.remove('active');
    document.body.style.overflow = '';
}

document.getElementById('modal-close').addEventListener('click', closeModal);
document.getElementById('stage-modal').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeModal();
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// ===== RENDER REFUGES / ACCOMMODATIONS =====

let currentTier = 'mid';
let currentCountry = 'all';

const TIER_CONFIG = {
    budget:  { title: 'Campsites & Budget Options', subtitle: 'Affordable camping along the route — bring your tent and save!', priceLabel: 'per night' },
    mid:     { title: 'Mountain Refuges', subtitle: 'Classic TMB hut-to-hut experience — book early for summer 2026!', priceLabel: 'half-board' },
    comfort: { title: 'Hotels & Guesthouses', subtitle: 'Comfortable stays in towns along the route — treat yourself after a long day!', priceLabel: 'per night' },
    all:     { title: 'All Accommodations', subtitle: 'Browse every option along the route — campsites, refuges, and hotels', priceLabel: '' },
};

// Map budget style → accommodation tier
const BUDGET_TO_TIER = { budget: 'budget', mid: 'mid', comfort: 'comfort', guided: 'all' };

function flyToRefuge(refugeName) {
    if (!mapInstance) return;
    const refuge = REFUGES.find(r => r.name === refugeName);
    if (!refuge || !refuge.lat) return;

    // Scroll to map section
    document.getElementById('map-section').scrollIntoView({ behavior: 'smooth' });

    // After scroll completes, fly to location and open popup
    setTimeout(() => {
        mapInstance.flyTo([refuge.lat, refuge.lng], 14, { duration: 1.2 });

        // Check if there's an existing marker to open
        const existingMarker = mapMarkers[refuge.name];
        if (existingMarker) {
            setTimeout(() => existingMarker.openPopup(), 1300);
        } else {
            // Create a temporary popup for refuges not in MAP_POINTS
            setTimeout(() => {
                const bookLink = refuge.bookingUrl
                    ? `<a href="${refuge.bookingUrl}" target="_blank" rel="noopener" class="popup-book-link">Book accommodation &rarr;</a>`
                    : '';
                L.popup()
                    .setLatLng([refuge.lat, refuge.lng])
                    .setContent(`<strong>${refuge.name}</strong><div class="popup-meta">${refuge.altitude.toLocaleString()}m · ${refuge.capacity} beds · ${refuge.price}<br>Stage ${refuge.stage} · ${refuge.country}</div>${bookLink}`)
                    .openOn(mapInstance);
            }, 1300);
        }
    }, 400);
}

function updateAccommodationHeader() {
    const config = TIER_CONFIG[currentTier];
    document.getElementById('accommodations-title').textContent = config.title;
    document.getElementById('accommodations-subtitle').textContent = config.subtitle;
}

function renderRefuges() {
    const grid = document.getElementById('refuges-grid');
    let filtered = REFUGES;

    // Filter by tier
    if (currentTier !== 'all') {
        filtered = filtered.filter(r => r.tier === currentTier);
    }

    // Filter by country
    if (currentCountry !== 'all') {
        filtered = filtered.filter(r => r.country === currentCountry);
    }

    updateAccommodationHeader();

    grid.innerHTML = filtered.map(r => {
        const countryClass = r.country.toLowerCase();
        const tierClass = r.tier;
        const imgStyle = r.image ? `background-image: url('${r.image}');` : '';
        const noImageClass = r.image ? '' : ` no-image tier-${r.tier}`;
        const priceLabel = TIER_CONFIG[r.tier] ? TIER_CONFIG[r.tier].priceLabel : '';
        return `
        <div class="refuge-card tier-card-${tierClass}" data-refuge="${r.name}">
            <div class="refuge-card-image${noImageClass}" style="${imgStyle}">
                <div class="refuge-card-image-overlay">
                    <span class="refuge-country-badge ${countryClass}">${r.country}</span>
                    <span class="refuge-name">${r.name}</span>
                    <span class="refuge-altitude">${r.altitude.toLocaleString()}m</span>
                </div>
            </div>
            <div class="refuge-card-body-inner">
                <div class="refuge-meta">
                    <span class="refuge-meta-item">Capacity: <strong>${r.capacity}</strong></span>
                    <span class="refuge-meta-item">Stage: <strong>${r.stage}</strong></span>
                </div>
                <div class="refuge-price">${r.price}${priceLabel ? ` <span style="font-size:0.75rem;font-weight:400;color:#6b7c8a;">${priceLabel}</span>` : ''}</div>
                <div class="refuge-notes">${r.notes}</div>
                <div class="refuge-amenities">
                    ${r.amenities.map(a => `<span class="amenity-tag">${a}</span>`).join('')}
                </div>
                <div class="refuge-card-actions">
                    <a href="${r.bookingUrl}" target="_blank" rel="noopener" class="refuge-book-link" onclick="event.stopPropagation();">Book now &rarr;</a>
                    <span class="refuge-map-link">View on map &rarr;</span>
                </div>
            </div>
        </div>`;
    }).join('');

    // Add click handlers
    grid.querySelectorAll('.refuge-card').forEach(card => {
        card.addEventListener('click', () => {
            flyToRefuge(card.dataset.refuge);
        });
    });
}

function setTier(tier) {
    currentTier = tier;
    document.querySelectorAll('.tier-btn').forEach(b => b.classList.toggle('active', b.dataset.tier === tier));
    renderRefuges();
}

// Tier filter buttons
document.querySelectorAll('.tier-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        setTier(btn.dataset.tier);
    });
});

// Country filter buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        currentCountry = btn.dataset.country;
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderRefuges();
    });
});

// ===== BUDGET CALCULATOR =====

const budgetData = {
    budget:  { accommodation: [10, 20], food: [14, 23], transport: [50, 80], extras: [30, 50], label: 'Camping + Self-Catering' },
    mid:     { accommodation: [64, 100], food: [14, 23], transport: [50, 80], extras: [50, 100], label: 'Refuges, Half-Board' },
    comfort: { accommodation: [100, 150], food: [27, 41], transport: [80, 150], extras: [100, 150], label: 'Hotels + Private Rooms' },
    guided:  { accommodation: [145, 230], food: [0, 0], transport: [0, 0], extras: [0, 0], label: 'Guided Tour Package' },
};

function updateBudget() {
    const style = document.getElementById('budget-style').value;
    const days = parseInt(document.getElementById('budget-days').value);
    const hikers = parseInt(document.getElementById('budget-hikers').value);
    const data = budgetData[style];

    document.getElementById('budget-days-value').textContent = days + ' days';
    document.getElementById('budget-hikers-value').textContent = hikers + (hikers === 1 ? ' hiker' : ' hikers');

    const accomLow = data.accommodation[0] * days * hikers;
    const accomHigh = data.accommodation[1] * days * hikers;
    const foodLow = data.food[0] * days * hikers;
    const foodHigh = data.food[1] * days * hikers;
    const transLow = data.transport[0] * hikers;
    const transHigh = data.transport[1] * hikers;
    const extrasLow = data.extras[0] * hikers;
    const extrasHigh = data.extras[1] * hikers;

    const totalLow = accomLow + foodLow + transLow + extrasLow;
    const totalHigh = accomHigh + foodHigh + transHigh + extrasHigh;

    document.getElementById('budget-amount').textContent = `EUR ${totalLow.toLocaleString()} - ${totalHigh.toLocaleString()}`;

    const breakdownEl = document.getElementById('budget-breakdown');
    if (style === 'guided') {
        breakdownEl.innerHTML = `
            <div class="budget-line"><span>Guided package (${days} days x ${hikers})</span><span>EUR ${accomLow.toLocaleString()} - ${accomHigh.toLocaleString()}</span></div>
            <div class="budget-line"><span>Travel insurance (~per person)</span><span>EUR ${(125 * hikers).toLocaleString()}</span></div>
        `;
    } else {
        breakdownEl.innerHTML = `
            <div class="budget-line"><span>${data.label} (${days} nights x ${hikers})</span><span>EUR ${accomLow.toLocaleString()} - ${accomHigh.toLocaleString()}</span></div>
            ${foodLow > 0 ? `<div class="budget-line"><span>Food & snacks</span><span>EUR ${foodLow.toLocaleString()} - ${foodHigh.toLocaleString()}</span></div>` : ''}
            <div class="budget-line"><span>Transport to/from trail</span><span>EUR ${transLow.toLocaleString()} - ${transHigh.toLocaleString()}</span></div>
            <div class="budget-line"><span>Cable cars, showers, extras</span><span>EUR ${extrasLow.toLocaleString()} - ${extrasHigh.toLocaleString()}</span></div>
        `;
    }
}

document.getElementById('budget-style').addEventListener('change', () => {
    updateBudget();
    // Sync accommodation tier with budget style
    const style = document.getElementById('budget-style').value;
    setTier(BUDGET_TO_TIER[style]);
});
document.getElementById('budget-days').addEventListener('input', updateBudget);
document.getElementById('budget-hikers').addEventListener('input', updateBudget);

// ===== TIMING CHART =====

function renderTimingChart() {
    const months = [
        { name: 'Mid-June', score: 70, color: '#f39c12', label: 'Good', crowds: 'Low', snow: 'Some' },
        { name: 'Late June', score: 85, color: '#27ae60', label: 'Very Good', crowds: 'Low-Med', snow: 'Minimal' },
        { name: 'July', score: 90, color: '#27ae60', label: 'Excellent', crowds: 'Med-High', snow: 'None' },
        { name: 'August', score: 75, color: '#f39c12', label: 'Good', crowds: 'Peak', snow: 'None' },
        { name: 'September', score: 85, color: '#27ae60', label: 'Very Good', crowds: 'Low-Med', snow: 'Rare' },
    ];

    const chart = document.getElementById('timing-chart');
    chart.innerHTML = months.map(m => `
        <div class="timing-month">
            <span class="timing-month-name">${m.name}</span>
            <div class="timing-bar-bg">
                <div class="timing-bar-fill" style="width:${m.score}%;background:${m.color};">
                    <span class="timing-bar-label">${m.label} · Crowds: ${m.crowds}</span>
                </div>
            </div>
            <span class="timing-score" style="color:${m.color};">${m.score}/100</span>
        </div>
    `).join('');
}

// ===== VARIANTS =====

function renderVariants() {
    const grid = document.getElementById('variants-grid');
    grid.innerHTML = VARIANTS.map((v, i) => `
        <div class="variant-card" data-index="${i}">
            <div class="variant-stage">${v.stage}</div>
            <div class="variant-name">${v.name}</div>
            <div class="variant-desc">${v.desc}</div>
            <div class="variant-highlight">${v.highlight}</div>
        </div>
    `).join('');

    grid.querySelectorAll('.variant-card').forEach(card => {
        card.addEventListener('click', () => card.classList.toggle('selected'));
    });
}

// ===== GEAR CHECKLIST =====

function renderGear() {
    const grid = document.getElementById('gear-grid');
    const saved = JSON.parse(localStorage.getItem('tmb-gear') || '{}');
    let totalItems = 0;
    let checkedItems = 0;

    grid.innerHTML = Object.entries(GEAR).map(([category, items]) => {
        return `
        <div class="gear-category">
            <h4>${category}</h4>
            ${items.map(item => {
                const key = category + '::' + item;
                const isChecked = saved[key] || false;
                totalItems++;
                if (isChecked) checkedItems++;
                return `
                <div class="gear-item ${isChecked ? 'checked' : ''}" data-key="${key}">
                    <div class="gear-checkbox"></div>
                    <span class="gear-label">${item}</span>
                </div>`;
            }).join('')}
        </div>`;
    }).join('');

    updateGearProgress(checkedItems, totalItems);

    grid.querySelectorAll('.gear-item').forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('checked');
            const key = item.dataset.key;
            const saved = JSON.parse(localStorage.getItem('tmb-gear') || '{}');
            saved[key] = item.classList.contains('checked');
            localStorage.setItem('tmb-gear', JSON.stringify(saved));

            const allItems = grid.querySelectorAll('.gear-item');
            const checked = grid.querySelectorAll('.gear-item.checked');
            updateGearProgress(checked.length, allItems.length);
        });
    });
}

function updateGearProgress(checked, total) {
    const pct = total > 0 ? (checked / total) * 100 : 0;
    document.getElementById('gear-progress-fill').style.width = pct + '%';
    document.getElementById('gear-progress-text').textContent = `${checked} of ${total} items packed`;
}

// ===== NAVIGATION =====

// Active nav link tracking
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => {
                link.classList.toggle('active', link.dataset.section === entry.target.id);
            });
        }
    });
}, { threshold: 0.2, rootMargin: '-60px 0px 0px 0px' });

sections.forEach(s => observer.observe(s));

// Mobile nav toggle
document.getElementById('nav-toggle').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('open');
});

// Close mobile nav on link click
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('open');
    });
});

// Smooth scroll for hero CTA
document.querySelector('.hero-cta')?.addEventListener('click', e => {
    e.preventDefault();
    document.getElementById('map-section')?.scrollIntoView({ behavior: 'smooth' });
});

// ===== INIT =====

document.addEventListener('DOMContentLoaded', () => {
    initMap();
    drawElevationProfile();
    renderStages();
    renderRefuges();
    updateBudget();
    renderTimingChart();
    renderVariants();
    renderGear();
});

// Redraw elevation profile on resize
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(drawElevationProfile, 200);
});
