import VoorkeurStudent from '../@types/VoorkeurStudent';
import PraktijkType from '../@types/PraktijkType';
interface FilterStageObject {
    disableFiltering: boolean;
    praktijkType: PraktijkType;
    voorkeurStudent: VoorkeurStudent;
    page: number;
}
export default FilterStageObject;
