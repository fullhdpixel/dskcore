import VoorkeurStudent from '../@types/VoorkeurStudent';
interface Stage {
    _id: any;
    praktijk: string;
    praktijkType: string;
    beschrijving: string;
    adres: string[];
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
