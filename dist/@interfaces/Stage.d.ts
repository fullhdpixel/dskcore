import VoorkeurStudent from '../@types/VoorkeurStudent';
import StageLocation from './StageLocation';
import PraktijkType from '../@types/PraktijkType';
interface Stage {
    _id: any;
    praktijk: string;
    praktijkType: PraktijkType;
    beschrijving: string;
    locations: StageLocation[];
    voorkeurStudent: VoorkeurStudent;
    stageduur: string;
    stagedagen: string;
    contactpersoon: string;
    mail: string;
    telefoonnummer: string;
    createdAt: string;
    updatedAt: string;
}
export default Stage;
