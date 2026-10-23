// English site content. Same shape as content.js; anything not translated here
// (links, coordinates, colours) is reused from the Portuguese file.
import * as PT from "./content.js";

export const { OLD, PORT_IDS, SOCIAL, THUMBS } = PT;

export const ROUTES = [
  { id: "inicio", path: "/", label: "Home" },
  { id: "aps", path: "/aps", label: "About APS" },
  { id: "portos", path: "/portos", label: "Ports" },
  { id: "estatisticas", path: "/estatisticas", label: "Statistics" },
  { id: "sistemas", path: "/sistemas", label: "Systems" },
  { id: "noticias", path: "/noticias", label: "News" },
  { id: "galeria", path: "/galeria", label: "Gallery" },
  { id: "contactos", path: "/contactos", label: "Contacts" }
];
export const EXTRA = [
  { path: "/portos/sines", label: "Port of Sines" },
  { path: "/portos/faro", label: "Port of Faro" },
  { path: "/portos/portimao", label: "Port of Portimão" },
  { path: "/aps/governo", label: "Corporate Governance" },
  { path: "/contactos/visitas", label: "Visits" },
  { path: "/recrutamento", label: "Careers" }
];

const CAPTIONS = {
  "sines-vista-aerea.jpg": "Aerial view of the Port and town of Sines",
  "sines-terminal-xxi.jpg": "Container ship at Terminal XXI, Sines",
  "portimao-cruzeiros.jpg": "Cruise ships at the Port of Portimão",
  "faro-cais.jpg": "Commercial quay at the Port of Faro",
  "sines-metaneiro.jpg": "LNG carrier at the LNG Terminal, Sines",
  "sines-terminal-xxi-ferrovia.jpg": "Terminal XXI and rail link, Sines",
  "sines-multiusos.jpg": "Wind turbine blades at the Multipurpose Terminal, Sines",
  "sines-petroleiro.jpg": "Oil tanker at the Liquid Bulk Terminal, Sines",
  "sines-gnl-sede.jpg": "LNG Terminal and APS headquarters, Sines",
  "sines-zal.jpg": "Sines Logistics Activities Zone",
  "sines-sede.jpg": "APS headquarters from above"
};
export const GALLERY = PT.GALLERY.map(g => ({ ...g, caption: CAPTIONS[g.file] || g.caption }));

export const PORTS = {
  sines: { ...PT.PORTS.sines, tag: "Deep water",
    lead: "The Port of Sines is a deep-water port, the national leader in cargo handled, with natural conditions unmatched on the Portuguese coast to receive every type of ship.",
    short: "Deep-water port, national leader in cargo and containers.",
    specs: [["Cargo handled", "1st in Portugal"], ["Containers", "1st in Portugal"], ["Specialised terminals", "5"], ["ZILS behind the port", "> 2,000 ha"], ["In operation since", "1978"], ["TEN-T network", "Atlantic Corridor"]],
    points: ["National leader in total cargo handled in Portuguese ports, and the Portuguese port that handles the most containers.", "With state-of-the-art equipment and highly qualified people, it achieves high levels of productivity.", "Key to the country's energy supply, receiving crude oil and natural gas.", "With direct links to the main production and consumer markets worldwide, it makes companies in its hinterland more competitive abroad."],
    terminals: ["Liquid Bulk", "Petrochemical", "Multipurpose", "LNG", "Containers"],
    link: ["portodesines.pt", "http://www.portodesines.pt"] },
  portimao: { ...PT.PORTS.portimao, tag: "Cruises",
    lead: "The commercial port of Portimão is mainly geared to tourism and has established itself as a cruise destination, bringing more visitors to the Algarve.",
    short: "Geared to tourism, a cruise destination between the Mediterranean and the Atlantic.",
    specs: [["Quay", "330 m + Ro-Ro"], ["Yard", "≈ 22,000 m²"], ["Ships up to", "215 m"], ["Draught", "8 m"], ["Passengers", "up to 2,000"], ["Tonnage", "50,000 GT"]],
    points: ["Between the Mediterranean and the Atlantic Ocean, it is strategically placed for cruise ships sailing these routes.", "It can also handle general cargo, with limits on land access because it sits within the town.", "Restricted to clean cargo compatible with leisure maritime activities.", "The Algarve is one of the best-known tourist regions in the world, attracting visitors from everywhere."],
    terminals: ["Cruise quay", "Ro-Ro quay", "2 cranes"],
    link: null },
  faro: { ...PT.PORTS.faro, tag: "Regional cargo",
    lead: "The Port of Faro has a strong regional role in boosting the Algarve's economy.",
    short: "The natural choice for Algarve companies to export.",
    specs: [["Quay", "200 m"], ["Yard", "≈ 14,000 m²"], ["Ships up to", "120 m"], ["Draught", "6.4 m"], ["Deadweight", "7,500 DWT"], ["Warehouse", "1,000 m²"]],
    points: ["Cement from the Cimpor plant in Loulé is the main export, mostly to Algeria and Cape Verde.", "It also handles stone, iron and roof tiles for Gibraltar, carob for England, salt from Olhão, rock salt from Loulé and tuna for Japan.", "Equipped with 3 cranes, 2 forklifts and a 1,000 m² warehouse.", "With strong regional importance, it is the natural choice for Algarve companies to export their products."],
    terminals: ["3 cranes", "2 forklifts", "1,000 m² warehouse"],
    link: null }
};

const TITLES = [
  "Conference - Environment, Protection and Safety: From Risk to Resilience | 28 and 29 October",
  "Ports of Sines and the Algarve strengthen their partnership with schools and award scholarships",
  "Port of Sines at the 28th APLOG Logistics Congress",
  "Port of Sines in Madrid to promote the refrigerated cargo segment",
  "Port of Sines hosts the 9th APIBARRA Conference",
  "Port of Sines hosts a working group of the 13th Informal Meeting of CIMAL Transport Authorities",
  "Port of Sines attends the closing of the MAGPIE Project",
  "APS honoured at the Alentejo Awards 2026",
  "Statement - Sines Nautical Club",
  "Port of Sines highlights rail's contribution to competitiveness at the 1st Iberian Intermodality Conference",
  "APS joins the Portuguese Ports Mission to Antwerp and Rotterdam",
  "Electric mobility strengthens operations at the Port of Sines",
  "Statement - New General Cargo Terminal",
  "New passenger record marks a historic weekend at the Port of Portimão",
  "Port of Sines reaches a new monthly container high and expects total cargo to grow",
  "APS launches a €4M tender to upgrade Avenida Circular Sul and the Service Port in Sines",
  "Port of Sines renews its commitment to excellence and safety",
  "Landing of the “Nuvem” submarine cable puts Sines on the map of global connectivity",
  "APS and the Lisbon Law School strengthen their partnership for specialised training in Maritime and Port Law",
  "Port of Sines at the closing ceremony of the NEXOMAR Project in Huelva",
  "Port of Sines completes the NEXUS Agenda, delivering every planned output",
  "8th Port Run strengthens ties between the port and the community",
  "Port of Sines raises its international profile at Breakbulk Europe 2026",
  "Sines now has its own Customs office",
  "New cybersecurity training courses start at the Port Cyber Arena",
  "Ports of Sines and Luanda strengthen strategic cooperation in innovation, sustainability and logistics",
  "APS invests in improving port infrastructure at the Port of Sines",
  "Notice no. 644/2026 - Licence for Private Use of the Public Water Domain",
  "APS at the 60th EMPA Football Tournament",
  "APS renews its commitment to equality and inclusion at the iGen Forum",
  "Port of Sines strengthens cooperation with Brazil in a joint mission to AgroBrasília 2026",
  "Port of Sines hosts the Port Business Mission from the State of Bahia",
  "APS and ISEL bring academia and the port sector closer together",
  "Port of Sines reinforces its role as the economic engine of southern Portugal",
  "APS and AES strengthen cooperation for the development of the Sines region",
  "Parliamentary Committee on Infrastructure, Mobility and Housing visits the Port of Sines",
  "New high-voltage substation at the Port of Sines comes into service",
  "Port of Sines welcomes the Ambassador of the Netherlands to Portugal",
  "Director-General of the Maritime Authority visits the Port of Sines",
  "Port of Sines steps up its presence at the 20th Singapore Maritime Week",
  "Port of Sines strengthens its presence in Brazil at Intermodal South America 2026",
  "Maintenance dredging at the Port of Portimão finished ahead of schedule",
  "Ports of Sines and the Algarve stand out for work-life balance, wellbeing and social responsibility",
  "Port of Sines welcomes students from the Infante D. Henrique Nautical School",
  "APS takes part in the H2-Diplo Dialogue and stresses Sines' role in Europe's energy transition",
  "Concession of the Public Towage and Mooring Service in the Ports of Sines and Portimão",
  "Port of Sines positions itself as the Iberian hydrogen hub at the first Spanish-Portuguese Green Hydrogen Forum",
  "Removal of Vessels - Navigation Channel of the Ferragudo Basin",
  "Dredging starts at the Port of Portimão",
  "APS hosts the launch of a book on port authorities' responsibilities in pilotage",
  "Sines and Portimão move closer to the Ports of Cape Verde",
  "Sines corrects depths and improves operating conditions at Terminal XXI"
];
export const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const CAT = { Avisos: "Notices", Algarve: "Algarve", Sines: "Sines", Institucional: "Corporate" };
const TOPIC = { Energia: "Energy", Eventos: "Events", Obras: "Works" };
export const NEWS_CATS = ["All", "Sines", "Algarve", "Corporate", "Notices"];
export const NEWS = PT.NEWS.map(n => ({ ...n, t: TITLES[n.i] || n.t, m: MONTHS[n.mi - 1], c: CAT[n.c], topic: n.topic && TOPIC[n.topic] }));

export const RECIPIENTS = ["APS General", "Information Systems", "Communication", "Pilotage, Control and Maritime Operations", "Ship Clearance Centre", "Sines Marina", "Concessions and Public Domain Areas", "ZALSINES", "Quality", "Environment", "Safety", "ISPS", "Finance and Economics", "Human Resources", "Legal Affairs", "Infrastructure and Planning", "Customer Ombudsman", "Data Protection Officer (DPO)"];

export const GOV_DOCS = ["Strategy", "Portos 5+", "Integrated Management System", "Code of Ethics and Conduct", "Compliance Risk Prevention", "Management Reports and Accounts", "Corporate Governance Report", "Sustainability Reports", "Activity Plans and Budget", "Procurement Procedures", "Quarterly Management Information", "Equality Plan", "Equal Pay", "Other Information"];
