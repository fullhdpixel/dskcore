import VoorkeurStudent from '../@types/VoorkeurStudent'
import StageLocation from './StageLocation'
import PraktijkType from '../@types/PraktijkType'

interface Stage {
  _id: any;

  praktijk: string;
  praktijkType: PraktijkType; // TODO make special type
  beschrijving: string;
  locations: StageLocation[];
  voorkeurStudent: VoorkeurStudent;
  stagedagen: string; // TODO check if days fit
  contactpersoon: string;
  mail: string;
  telefoonnummer: string;
  
  createdAt: string;
  updatedAt: string;
}

export default Stage