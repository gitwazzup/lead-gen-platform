import { Block } from "../block";

interface PersonalInfoProps {
  showGender: boolean;
  showName: boolean;
  showAddress: boolean;
  showMail: boolean;
  requireMail: boolean;
  showPhone: boolean;
  requirePhone: boolean;
  showPlate: boolean;
  requirePlate: boolean;
  showMileage: boolean;
  requireMileage: boolean;
  showNewsletter: boolean;
  showComments: boolean;
  requireComments: boolean;
}

interface PersonalInfoBlock extends Block {
  properties: PersonalInfoProps;
}
