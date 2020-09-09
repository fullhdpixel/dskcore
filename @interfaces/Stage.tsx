import VoorkeurStudent from '../@types/VoorkeurStudent'

interface Stage {
  _id: any;

  praktijk: string;
  praktijkType: string; // TODO make special type
  beschrijving: string;
  adres: string[];
  voorkeurStudent: VoorkeurStudent;
  stageduur: string;
  stagedagen: string; // TODO check if days fit
  contactpersoon: string;
  mail: string;
  telefoonnummer: string;
  
  createdAt: string;
  updatedAt: string;
}

export default Stage