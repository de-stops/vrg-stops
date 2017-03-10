const exportStops = require("efa-export-stops-by-coordinates");

const ENDPOINT_BASE_URL_TEMPLATE = "http://www.bayern-fahrplan.de/XML_COORD_REQUEST?&jsonp=&boundingBox=&boundingBoxLU={minx}%3A{miny}%3AWGS84%5BDD.DDDDD%5D&boundingBoxRL={maxx}%3A{maxy}%3AWGS84%5BDD.DDDDD%5D&coordOutputFormat=WGS84%5BGGZHTXX%5D&type_1=STOP&outputFormat=json&inclFilter=1";
const DISTRICT_CODES = ["09673"];

exportStops(ENDPOINT_BASE_URL_TEMPLATE, 9.5, 50, 11, 51, 0, 20000, DISTRICT_CODES);
