import { LatLngExpression } from 'leaflet'

interface StageLocation {
  stageId: any;
  markerId: any; // for key field in map function
  adres: string;
  coordinates: LatLngExpression;
}

export default StageLocation