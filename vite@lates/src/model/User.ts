import React, { useState } from 'react';

export class Customers {
  CustomerID: string="";
  CustomerName: string="";
  CustomerAdress: string="";
  CustomerBirthDate: string="";
  CustomerPhone: string="";
  CustomerMobile: string="";
}

export class Vaccinations {
  VaccinationName: string="";
  VaccinationManufacturer: string="";
  VaccinationID: string="";
}

export class CustomerVaccinations {
  CustomerVaccinationID:string="";
  VaccinationID:string="";
  CustomerID:string="";
  VaccinationDate: string=";"

}

// export class Member {
//   id: number=0;
//   personalDetails: PersonalDetails=new PersonalDetails();
//   covidDetails: CovidDetails=new CovidDetails();
 
// }