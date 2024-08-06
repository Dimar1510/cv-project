export interface IPersonal {
  details: IPersonalDetails;
  links: string[];
  skills: string[];
}

export interface IPersonalDetails {
  name: string;
  email: string;
  phone: string;
  address: string;
  specialty: string;
  about: string;
}

export interface IEducation {
  id: string;
  school: string;
  degree: string;
  start: string;
  end: string;
  location: string;
}

export interface IProfession {
  id: string;
  company: string;
  position: string;
  start: string;
  end: string;
  location: string;
  description: string;
}

export interface IResume {
  personal: IPersonal;
  education: IEducation[];
  profession: IProfession[];
}
