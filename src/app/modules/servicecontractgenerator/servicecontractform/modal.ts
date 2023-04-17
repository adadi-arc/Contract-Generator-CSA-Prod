export class contract {
  FormName: any = null;
  flatironOwners: any[] = [];
  selectedOwner: any = null;
  selectedPropertyManager: any = 'BioMed Realty LLC';
  selectedContractor: any = null;
  selectedContractorAddress: any = null;
  selectedContractorCity: any = null;
  selectedContractorState: any = null;
  selectedContractorZip: any = null;
  selectedContractorAttn: any = null;
  selectedContractorEmail: any = null;
  selectedContractorStateOfFormation: any = null;
  selectedExecutionDate: any = null;
  selectedCommencementDate: any = null;
  selectedExpirationDate: any = null;
  selectedPropertyAddress: any = null;
  selectedCOnum: any = null;
  selectedDate: any = null;
  selectedCAGMP: any = null;
  selectedOriginalGMP: any = null;
  selectedNetIncDec: any = null;
  selectedNetChange: any = null;
  selectedPreviousGMP: any = null;
  selectedCOincdec: any = null;
  selectedCOamount: any = null;
  selecctedCOdate: any = null;
  selectedNewGMP: any = null;
  selectedContractTime: any = null;
  selectedTimeIncDec: any = null;
  selectedTimeChange: any = null;
  selectedSOWrevised: boolean = false;
  selectedSubstantialCompletion: any = null;
  selectedSubstantialCompletionDate: any = null;
  selectedContractDate: any = null;
  selectedProjectNum: any = null;
  selectedIncludeTM: boolean = false;
  selectedChangeCAGMP: boolean = false;
  selectedChangeTime: boolean = false;
  selectedReviseSOW: boolean = false;
  selectedStreetAddress: any = null;
  selectedEmergencyCompensation: any = null;
  ConsultingServiceTemp: any = null;
  selectedContractAmount: any = null;
  selectedMonthlyCompensation: any = null;
  selectedYearlyCompensation: any = null;
  selectedReimbursableExpenses: any = null;
  selectedPayment: any = null;
  selectedCovid: any = null;
  selectedPollutionLiability: any = null;
  selectedSubComp: boolean = false;
  addressRepeating: any[] = [];
  fiOwners: any = null;
  fiOwnerSelect: any = null;
  fiOwnersConsulting: any = null;
  fiOwnerConsultingSelect: any = null;
  Architect: any = null;
  ArchitectName : any = null;
  ExpirationDate: any = null;
  // CSA template Changes 22/12/2022
  dateSelection: any = null;
  dateselect: any [] = ['On' , 'No later than'];
  chooseLanguage: any = null;
  chooselanguages: any [] = ['perform the Services through ' , 'complete the Services no later than '];
  includeAmount: any = null;
  includeAmnt: string = '[an amount not to exceed (“NTE”)] ';
  contractBreakdown: any = null;
  contractBreakdownText: string = '[, pursuant to the following breakdown:][OR][.] ';
  contractAmnt: string = 'Lien Waivers.';
  
  paymentSectionA: string = 'a.	[In addition, Owner shall compensate Consultant (as a part of the Contract Amount) in accordance with the pricing schedule set forth as part of Exhibit A hereto and incorporated herein, in an amount not to exceed [the lesser of either ]{MonthlyCompensationSpell}{MonthlyCompensation}{Or} {YearlyCompensationSpell}{YearlyCompensation}, [NOTE:  FOR EMERGENCY SERVICES: [and for Emergency Services, an amount not to exceed {EmergencyCompensationSpell}{EmergencyCompensation}(provided that such limit for Emergency Services shall be an aggregate limit for Emergency Services provided by Consultant at any property owned by Owner or any of Owner’s affiliates (who shall be third party beneficiaries of this Section), not an individual limit for the property owned by Owner)]{compensationTM}'
  // -- X ---
  menuData: any[] = [];
  Region: any[] = [];
  Market: any[] = [];
  Property: any[] = [];
  // X----
  // Hide Show Variables General Template
  scopeService: string =
    'In addition, the Services shall include any additional services to be performed by Consultant on a time and materials basis (“T&M Services”) upon written request by Owner (for which purpose an email from an authorized employee or agent of Owner shall be deemed sufficient).';
  compensationTM: string =
    ', which limits shall not be increased except by an agreement in writing signed by Owner and Consultant, for T&M Services performed in accordance with the terms of this Agreement.';
  California: string =
    'Consultant shall deliver to Owner a written invoice (the “Application for Payment”) on or before the fifth (5th) day of each month during the Term describing in reasonable detail all Services performed by Consultant during the previous month.  Provided the Application for Payment is timely delivered to Owner, Owner shall make payment to Consultant not later than the final day of the month.  With each Application for Payment Consultant shall submit (a) such evidence as may be customary, and such evidence as may be reasonably required by Owner, to demonstrate costs incurred or estimated to be incurred on account of the Services and the Contract Amount during such month and the percentage of completion of each category of Services reasonably estimated to the end of the month of the submission of such Application for Payment, (b) certification by Consultant that the Services for which payment is being sought has been completed in accordance with this Agreement and all applicable permits, (c) [a conditional waiver and release of lien upon progress or final payment (as applicable) from Consultant and each subcontractor complying with the requirements of California Civil Code Section 8132 or 8136 (as applicable) or any successor statute and in the applicable form attached as Exhibit C hereto with respect to the Services to which the Application for Payment applies][OR][Intentionally omitted], (d) [an unconditional waiver and release of lien upon progress payment from Consultant and each subcontractor complying with the requirements of California Civil Code Section 8134 or any successor statute and in the applicable form attached as Exhibit C hereto with respect to all Services previously paid through the date of the immediately preceding Application for Payment][OR][Intentionally omitted], (e) a detailed written description and copies of all change orders and other modifications to the Services or this Agreement issued through the date of the Application for Payment and (f) such other information or documentation as may be reasonably requested by Owner or Owner’s lenders.[  Within ten (10) days after Consultant’s receipt of the final payment under this Agreement, Consultant shall deliver to Owner an unconditional waiver and release of lien upon payment from Consultant and each subcontractor complying with the requirements of California Civil Code Section 8138 and in the applicable form attached as Exhibit C hereto with respect to all Services.]';
  Colorado: string =
    'Consultant shall deliver to Owner a written invoice (the “Application for Payment”) on or before the fifth (5th) day of each month during the Term describing in reasonable detail all Services performed by Consultant during the previous month.  Provided the Application for Payment is timely delivered to Owner, Owner shall make payment to Consultant not later than the final day of the month.  With each Application for Payment Consultant shall submit (a) such evidence as may be customary, and such evidence as may be reasonably required by Owner, to demonstrate costs incurred or estimated to be incurred on account of the Services and the Contract Amount during such month and the percentage of completion of each category of Services reasonably estimated to the end of the month of the submission of such Application for Payment, (b) certification by Consultant that the Services for which payment is being sought has been completed in accordance with this Agreement and all applicable permits, (c) [a conditional waiver and release of lien upon progress payment from Consultant and each subcontractor complying with the requirements of applicable laws and in the applicable form attached as Exhibit C hereto with respect to the Services to which the Application for Payment applies][OR][Intentionally omitted], (d) [an unconditional waiver and release of lien upon payment from Consultant and each subcontractor complying with the requirements of applicable laws and in the applicable form attached as Exhibit C hereto with respect to all Services previously paid through the date of the immediately preceding Application for Payment][OR][Intentionally omitted], (e) a detailed written description and copies of all change orders and other modifications to the Services or this Agreement issued through the date of the Application for Payment and (f) such other information or documentation as may be reasonably requested by Owner or Owner’s lenders.[  Within ten (10) days after Consultant’s receipt of the final payment under this Agreement, Consultant shall deliver to Owner an unconditional waiver and release of lien upon payment from Consultant and each subcontractor complying with the requirements of applicable laws and in the applicable form attached as Exhibit C hereto with respect to all Services.]]';
  Delware: string =
    'Consultant shall deliver to Owner a written invoice (the “Application for Payment”) on or before the fifth (5th) day of each month during the Term describing in reasonable detail all Services performed by Consultant during the previous month.  Provided the Application for Payment is timely delivered to Owner, Owner shall make payment to Consultant not later than the final day of the month.  With each Application for Payment Consultant shall submit (a) such evidence as may be customary, and such evidence as may be reasonably required by Owner, to demonstrate costs incurred or estimated to be incurred on account of the Services and the Contract Amount during such month and the percentage of completion of each category of Services reasonably estimated to the end of the month of the submission of such Application for Payment, (b) certification by Consultant that the Services for which payment is being sought has been completed in accordance with this Agreement and all applicable permits, (c) [an unconditional waiver and release of lien upon payment from Consultant and each subcontractor complying with the requirements of applicable laws and in the applicable form attached as Exhibit C hereto with respect to all Services previously paid through the date of the immediately preceding Application for Payment][OR][Intentionally omitted], (d) [a detailed written description and copies of all change orders and other modifications to the Services or this Agreement issued through the date of the Application for Payment][OR][Intentionally omitted] and (e) such other information or documentation as may be reasonably requested by Owner or Owner’s lenders.[  Within ten (10) days after Consultant’s receipt of the final payment under this Agreement, Consultant shall deliver to Owner an unconditional waiver and release of lien upon payment from Consultant and each subcontractor complying with the requirements of applicable laws and in the applicable form attached as Exhibit C hereto with respect to all Services.]';
  Florida: string =
    'Consultant shall deliver to Owner a written invoice (the “Application for Payment”) on or before the fifth (5th) day of each month during the Term describing in reasonable detail all Services performed by Consultant during the previous month.  Provided the Application for Payment is timely delivered to Owner, Owner shall make payment to Consultant not later than the final day of the month.  With each Application for Payment Consultant shall submit (a) such evidence as may be customary, and such evidence as may be reasonably required by Owner, to demonstrate costs incurred or estimated to be incurred on account of the Services and the Contract Amount during such month and the percentage of completion of each category of Services reasonably estimated to the end of the month of the submission of such Application for Payment, (b) certification by Consultant that the Services for which payment is being sought has been completed in accordance with this Agreement and all applicable permits, (c) [a conditional waiver and release of lien upon progress or final payment (as applicable) from Consultant and each subcontractor complying with the requirements of applicable laws and in the applicable form attached as Exhibit C hereto with respect to the Services to which the Application for Payment applies][OR][Intentionally omitted], (d) [an unconditional waiver and release of lien upon payment from Consultant and each subcontractor complying with the requirements of applicable laws and in the applicable form attached as Exhibit C hereto with respect to all Services previously paid through the date of the immediately preceding Application for Payment][OR][Intentionally omitted], (e) a detailed written description and copies of all change orders and other modifications to the Services or this Agreement issued through the date of the Application for Payment and (f) such other information or documentation as may be reasonably requested by Owner or Owner’s lenders.  [Within ten (10) days after Consultant’s receipt of the final payment under this Agreement, Consultant shall deliver to Owner an unconditional waiver and release of lien upon payment from Consultant and each subcontractor complying with the requirements of applicable laws and in the applicable form attached as Exhibit C hereto with respect to all Services.]';
  MASSACHUSETTS: string =
    'Consultant shall deliver to Owner a written invoice (the “Application for Payment”) on or before the fifth (5th) day of each month during the Term describing in reasonable detail all Services performed by Consultant during the previous month.  Provided the Application for Payment is timely delivered to Owner, Owner shall make payment to Consultant not later than the final day of the month.  With each Application for Payment Consultant shall submit (a) such evidence as may be customary, and such evidence as may be reasonably required by Owner, to demonstrate costs incurred or estimated to be incurred on account of the Services and the Contract Amount during such month and the percentage of completion of each category of Services reasonably estimated to the end of the month of the submission of such Application for Payment, (b) certification by Consultant that the Services for which payment is being sought has been completed in accordance with this Agreement and all applicable permits, (c) [a conditional waiver and release of lien upon progress payment from Consultant and each subcontractor complying with the requirements of applicable laws and in the applicable form attached as Exhibit C hereto with respect to the Services to which the Application for Payment applies][OR][Intentionally omitted], (d) a detailed written description and copies of all change orders and other modifications to the Services or this Agreement issued through the date of the Application for Payment and (e) such other information or documentation as may be reasonably requested by Owner or Owner’s lenders.[  Within ten (10) days after Consultant’s receipt of the final payment under this Agreement, Consultant shall deliver to Owner an unconditional waiver and release of lien upon payment from Consultant and each subcontractor complying with the requirements of applicable laws and in the applicable form attached as Exhibit C hereto with respect to all Services.]';
  applicationPaymentHeading: string = 'Applications for Payment. ';
  applicationPaymentbullet: string = '3.2.      ';
  payment: string =
    ', subject to satisfactory receipt of the documentation set forth in Section 3.2, Owner shall pay to Consultant an amount equal to the value, based on the Contract Amount, of all Services performed pursuant to this Agreement during the preceding calendar month as reasonably determined by Owner[ and supported by the documentation provided pursuant to Section 3.2]';
  covid19: string =
    '  Consultant acknowledges and agrees that COVID-19 may be present in or around the Property and individuals working at or near the Property.  Consultant, on behalf of itself, its affiliates and its subcontractors, and their respective parents, shareholders, partners, directors, officers, employees, material suppliers and other vendors, and each of their respective successors and assigns (collectively with Consultant, the “Consultant Parties”) hereby waives any recourse against, releases Owner and all other Indemnitees from, and expressly assumes the risk of any and all injury, sickness, loss or damage, including death, arising from the presence of COVID-19 in or around the Property or individuals working at or near the Property.  Consultant shall indemnify, reimburse, save, defend (at Owner’s option and with counsel reasonably acceptable to Owner) and hold harmless the Indemnitees for, from and against any and all Claims of any kind or nature arising from Consultant Parties’ contact with COVID-19 at or near the Property or in relation to the Services.  The foregoing obligations of Consultant are in addition to Consultant’s obligations under Article 5.  In addition, Consultant shall (and ensure that all Consultant Parties) adhere to any federal, state and local requirements and recommendations (including from the Centers for Disease Control and Prevention) related to COVID-19.';
  pollutionLiability: string =
    'If Consultant’s Services include handling, remediation, treatment, storage or disposal of waste or hazardous materials on or about the project site as determined by Owner, Consultant shall maintain a minimum limit of $2,000,000 per incident with a $2,000,000 policy aggregate.  Such coverage shall include defense costs applicable to claims for bodily injury, property damage or clean-up costs.  Claims-made coverage is permitted, provided the policy retroactive date is continuously maintained prior to the commencement date of this Agreement and coverage is continuously maintained during all periods Consultant performs Services for Owner plus an additional period of three (3) years after termination of this Agreement or the last date Services are performed, whichever is later. ';
  paymentHeading: string = 'Payment.';
  paymentBullet: string = '3.3.      ';
  pollutionLiabilityHeading: string = 'Pollution Liability:';
  //  x----
  // Hide show Variable Flatiron
  applicationPaymentFlatiron: string =
    '[NOTE:  SPECIFIC LIEN WAIVER SUBSECTIONS SHOULD ONLY BE INCLUDED IF THE SERVICES ARE OF A TYPE FOR WHICH CONSULTANT HAS A RIGHT TO LIEN THE PROPERTY IN THE STATE.  IF NOT, STATE “[INTENTIONALLY OMITTED]” IN PLACE OF THE LIEN WAIVER LANGUAGE.] Consultant shall deliver to Owner a written invoice (the “Application for Payment”) on or before the fifth (5th) day of each month during the Term describing in reasonable detail all Services performed by Consultant during the previous month.  Provided the Application for Payment is timely delivered to Owner, Owner shall make payment to Consultant not later than the final day of the month.  With each Application for Payment Consultant shall submit (a) such evidence as may be customary, and such evidence as may be reasonably required by Owner, to demonstrate costs incurred or estimated to be incurred on account of the Services and the Contract Amount during such month and the percentage of completion of each category of Services reasonably estimated to the end of the month of the submission of such Application for Payment, (b) certification by Consultant that the Services for which payment is being sought has been completed in accordance with this Agreement and all applicable permits, (c) [a conditional waiver and release of lien upon progress payment from Consultant and each subcontractor complying with the requirements of applicable laws and in the applicable form attached as Exhibit C hereto with respect to the Services to which the Application for Payment applies][OR][Intentionally omitted], (d) [an unconditional waiver and release of lien upon payment from Consultant and each subcontractor complying with the requirements of applicable laws and in the applicable form attached as Exhibit C hereto with respect to all Services previously paid through the date of the immediately preceding Application for Payment][OR][Intentionally omitted], (e) a detailed written description and copies of all change orders and other modifications to the Services or this Agreement issued through the date of the Application for Payment and (f) such other information or documentation as may be reasonably requested by Owner or Owner’s lenders.[  Within ten (10) days after Consultant’s receipt of the final payment under this Agreement, Consultant shall deliver to Owner an unconditional waiver and release of lien upon payment from Consultant and each subcontractor complying with the requirements of applicable laws and in the applicable form attached as Exhibit C hereto with respect to all Services.';
  covid: string =
    '  Consultant acknowledges and agrees that COVID-19 may be present in or around the Property and individuals working at or near the Property.  Consultant, on behalf of itself, its affiliates and its subcontractors, and their respective parents, shareholders, partners, directors, officers, employees, material suppliers and other vendors, and each of their respective successors and assigns (collectively with Consultant, the “Consultant Parties”) hereby waives any recourse against, releases Owner, Property Manager and all other Indemnitees from, and expressly assumes the risk of any and all injury, sickness, loss or damage, including death, arising from the presence of COVID-19 in or around the Property or individuals working at or near the Property.  Consultant shall indemnify, reimburse, save, defend (at Owner’s option and with counsel reasonably acceptable to Owner) and hold harmless Owner, Property Manager and the Indemnitees for, from and against any and all Claims of any kind or nature arising from Consultant Parties’ contact with COVID-19 at or near the Property or in relation to the Services.  The foregoing obligations of Consultant are in addition to Consultant’s obligations under Article 5.  In addition, Consultant shall (and ensure that all Consultant Parties) adhere to any federal, state and local requirements and recommendations (including from the Centers for Disease Control and Prevention) related to COVID-19.';
  // ConsultingSerive => TRS
  ScopeofService: string = 'In addition, the Services shall include any additional services to be performed by Consultant on a time and materials basis (“T&M Services”) upon written request by Holdings (for which purpose an email from an authorized employee or agent of Holdings shall be deemed sufficient).'
  compensationTMTRS: string = ', which limits shall not be increased except by an agreement in writing signed by Holdings and Consultant, for T&M Services performed in accordance with the terms of this Agreement.'
  CaliforniaTRS: string = '[NOTE:  SPECIFIC LIEN WAIVER SUBSECTIONS SHOULD ONLY BE INCLUDED IF THE SERVICES ARE OF A TYPE FOR WHICH CONSULTANT HAS A RIGHT TO LIEN THE PROPERTY IN THE STATE.  IF NOT, STATE “[INTENTIONALLY OMITTED]” IN PLACE OF THE LIEN WAIVER LANGUAGE.][CALIFORNIA:  [Consultant shall deliver to Holdings a written invoice (the “Application for Payment”) on or before the fifth (5th) day of each month during the Term describing in reasonable detail all Services performed by Consultant during the previous month.  Provided the Application for Payment is timely delivered to Holdings, Holdings shall make payment to Consultant not later than the final day of the month.  With each Application for Payment Consultant shall submit (a) such evidence as may be customary, and such evidence as may be reasonably required by Holdings, to demonstrate costs incurred or estimated to be incurred on account of the Services and the Contract Amount during such month and the percentage of completion of each category of Services reasonably estimated to the end of the month of the submission of such Application for Payment, (b) certification by Consultant that the Services for which payment is being sought has been completed in accordance with this Agreement and all applicable permits, (c) [a conditional waiver and release of lien upon progress or final payment (as applicable) from Consultant and each subcontractor complying with the requirements of California Civil Code Section 8132 or 8136 (as applicable) or any successor statute and in the applicable form attached as Exhibit C hereto with respect to the Services to which the Application for Payment applies][OR][Intentionally omitted], (d) [an unconditional waiver and release of lien upon progress payment from Consultant and each subcontractor complying with the requirements of California Civil Code Section 8134 or any successor statute and in the applicable form attached as Exhibit C hereto with respect to all Services previously paid through the date of the immediately preceding Application for Payment][OR][Intentionally omitted], (e) a detailed written description and copies of all change orders and other modifications to the Services or this Agreement issued through the date of the Application for Payment and (f) such other information or documentation as may be reasonably requested by Holdings or Owner’s lenders.[  Within ten (10) days after Consultant’s receipt of the final payment under this Agreement, Consultant shall deliver to Holdings an unconditional waiver and release of lien upon payment from Consultant and each subcontractor complying with the requirements of California Civil Code Section 8138 and in the applicable form attached as Exhibit C hereto with respect to all Services.]'
  ColoradoTRS: string = 'Consultant shall deliver to Holdings a written invoice (the “Application for Payment”) on or before the fifth (5th) day of each month during the Term describing in reasonable detail all Services performed by Consultant during the previous month.  Provided the Application for Payment is timely delivered to Holdings, Holdings shall make payment to Consultant not later than the final day of the month.  With each Application for Payment Consultant shall submit (a) such evidence as may be customary, and such evidence as may be reasonably required by Holdings, to demonstrate costs incurred or estimated to be incurred on account of the Services and the Contract Amount during such month and the percentage of completion of each category of Services reasonably estimated to the end of the month of the submission of such Application for Payment, (b) certification by Consultant that the Services for which payment is being sought has been completed in accordance with this Agreement and all applicable permits, (c) [a conditional waiver and release of lien upon progress payment from Consultant and each subcontractor complying with the requirements of applicable laws and in the applicable form attached as Exhibit C hereto with respect to the Services to which the Application for Payment applies][OR][Intentionally omitted], (d) [an unconditional waiver and release of lien upon payment from Consultant and each subcontractor complying with the requirements of applicable laws and in the applicable form attached as Exhibit C hereto with respect to all Services previously paid through the date of the immediately preceding Application for Payment][OR][Intentionally omitted], (e) a detailed written description and copies of all change orders and other modifications to the Services or this Agreement issued through the date of the Application for Payment and (f) such other information or documentation as may be reasonably requested by Holdings or Owner’s lenders.[  Within ten (10) days after Consultant’s receipt of the final payment under this Agreement, Consultant shall deliver to Holdings an unconditional waiver and release of lien upon payment from Consultant and each subcontractor complying with the requirements of applicable laws and in the applicable form attached as Exhibit C hereto with respect to all Services.' 
  DelwareTRS: string = 'Consultant shall deliver to Holdings a written invoice (the “Application for Payment”) on or before the fifth (5th) day of each month during the Term describing in reasonable detail all Services performed by Consultant during the previous month.  Provided the Application for Payment is timely delivered to Holdings, Holdings shall make payment to Consultant not later than the final day of the month.  With each Application for Payment Consultant shall submit (a) such evidence as may be customary, and such evidence as may be reasonably required by Holdings, to demonstrate costs incurred or estimated to be incurred on account of the Services and the Contract Amount during such month and the percentage of completion of each category of Services reasonably estimated to the end of the month of the submission of such Application for Payment, (b) certification by Consultant that the Services for which payment is being sought has been completed in accordance with this Agreement and all applicable permits, (c) [an unconditional waiver and release of lien upon payment from Consultant and each subcontractor complying with the requirements of applicable laws and in the applicable form attached as Exhibit C hereto with respect to all Services previously paid through the date of the immediately preceding Application for Payment][OR][Intentionally omitted], (d) [a detailed written description and copies of all change orders and other modifications to the Services or this Agreement issued through the date of the Application for Payment][OR][Intentionally omitted] and (e) such other information or documentation as may be reasonably requested by Holdings or Owner’s lenders.[  Within ten (10) days after Consultant’s receipt of the final payment under this Agreement, Consultant shall deliver to Holdings an unconditional waiver and release of lien upon payment from Consultant and each subcontractor complying with the requirements of applicable laws and in the applicable form attached as Exhibit C hereto with respect to all Services.'
  FloridaTRS: string = 'Consultant shall deliver to Holdings a written invoice (the “Application for Payment”) on or before the fifth (5th) day of each month during the Term describing in reasonable detail all Services performed by Consultant during the previous month.  Provided the Application for Payment is timely delivered to Holdings, Holdings shall make payment to Consultant not later than the final day of the month.  With each Application for Payment Consultant shall submit (a) such evidence as may be customary, and such evidence as may be reasonably required by Holdings, to demonstrate costs incurred or estimated to be incurred on account of the Services and the Contract Amount during such month and the percentage of completion of each category of Services reasonably estimated to the end of the month of the submission of such Application for Payment, (b) certification by Consultant that the Services for which payment is being sought has been completed in accordance with this Agreement and all applicable permits, (c) [a conditional waiver and release of lien upon progress or final payment (as applicable) from Consultant and each subcontractor complying with the requirements of applicable laws and in the applicable form attached as Exhibit C hereto with respect to the Services to which the Application for Payment applies][OR][Intentionally omitted], (d) [an unconditional waiver and release of lien upon payment from Consultant and each subcontractor complying with the requirements of applicable laws and in the applicable form attached as Exhibit C hereto with respect to all Services previously paid through the date of the immediately preceding Application for Payment][OR][Intentionally omitted], (e) a detailed written description and copies of all change orders and other modifications to the Services or this Agreement issued through the date of the Application for Payment and (f) such other information or documentation as may be reasonably requested by Holdings or Owner’s lenders.  [Within ten (10) days after Consultant’s receipt of the final payment under this Agreement, Consultant shall deliver to Holdings an unconditional waiver and release of lien upon payment from Consultant and each subcontractor complying with the requirements of applicable laws and in the applicable form attached as Exhibit C hereto with respect to all Services.'
  MASSACHUSETTSTRS: string = 'Consultant shall deliver to Holdings a written invoice (the “Application for Payment”) on or before the fifth (5th) day of each month during the Term describing in reasonable detail all Services performed by Consultant during the previous month.  Provided the Application for Payment is timely delivered to Holdings, Holdings shall make payment to Consultant not later than the final day of the month.  With each Application for Payment Consultant shall submit (a) such evidence as may be customary, and such evidence as may be reasonably required by Holdings, to demonstrate costs incurred or estimated to be incurred on account of the Services and the Contract Amount during such month and the percentage of completion of each category of Services reasonably estimated to the end of the month of the submission of such Application for Payment, (b) certification by Consultant that the Services for which payment is being sought has been completed in accordance with this Agreement and all applicable permits, (c) [a conditional waiver and release of lien upon progress payment from Consultant and each subcontractor complying with the requirements of applicable laws and in the applicable form attached as Exhibit C hereto with respect to the Services to which the Application for Payment applies][OR][Intentionally omitted], (d) a detailed written description and copies of all change orders and other modifications to the Services or this Agreement issued through the date of the Application for Payment and (e) such other information or documentation as may be reasonably requested by Holdings or Owner’s lenders.[  Within ten (10) days after Consultant’s receipt of the final payment under this Agreement, Consultant shall deliver to Holdings an unconditional waiver and release of lien upon payment from Consultant and each subcontractor complying with the requirements of applicable laws and in the applicable form attached as Exhibit C hereto with respect to all Services.'
  covidTRS: string = 'COVID-19.  Consultant acknowledges and agrees that COVID-19 may be present in or around the Property and individuals working at or near the Property.  Consultant, on behalf of itself, its affiliates and its subcontractors, and their respective parents, shareholders, partners, directors, officers, employees, material suppliers and other vendors, and each of their respective successors and assigns (collectively with Consultant, the “Consultant Parties”) hereby waives any recourse against, releases Holdings and Owner and all other Indemnitees from, and expressly assumes the risk of any and all injury, sickness, loss or damage, including death, arising from the presence of COVID-19 in or around the Property or individuals working at or near the Property.  Consultant shall indemnify, reimburse, save, defend (at Holdings’ option and with counsel reasonably acceptable to Holdings) and hold harmless Holdings, Owner and the Indemnitees for, from and against any and all Claims of any kind or nature arising from Consultant Parties’ contact with COVID-19 at or near the Property or in relation to the Services.  The foregoing obligations of Consultant are in addition to Consultant’s obligations under Article 5.  In addition, Consultant shall (and ensure that all Consultant Parties) adhere to any federal, state and local requirements and recommendations (including from the Centers for Disease Control and Prevention) related to COVID-19.'
  PollutionTRS: string = 'If Consultant’s Services include handling, remediation, treatment, storage or disposal of waste or hazardous materials on or about the project site as determined by Holdings, Consultant shall maintain a minimum limit of $2,000,000 per incident with a $2,000,000 policy aggregate.  Such coverage shall include defense costs applicable to claims for bodily injury, property damage or clean-up costs.  Claims-made coverage is permitted, provided the policy retroactive date is continuously maintained prior to the commencement date of this Agreement and coverage is continuously maintained during all periods Consultant performs Services for Holdings plus an additional period of three (3) years after termination of this Agreement or the last date Services are performed, whichever is later.'
  Illonios: string = '[NOTE:  FOR ILLINOIS ONLY:  [  All lien waivers provided to Holdings under this Agreement shall be notarized by the appropriate party.]'
  States: any[] = [
    { ID: 1, Title: 'AL' },
    { ID: 2, Title: 'AK' },
    { ID: 3, Title: 'AZ' },
    { ID: 4, Title: 'AR' },
    { ID: 5, Title: 'CA' },
    { ID: 6, Title: 'CO' },
    { ID: 7, Title: 'CT' },
    { ID: 8, Title: 'DE' },
    { ID: 9, Title: 'FL' },
    { ID: 10, Title: 'GA' },
    { ID: 11, Title: 'HI' },
    { ID: 12, Title: 'ID' },
    { ID: 13, Title: 'IL' },
    { ID: 14, Title: 'IN' },
    { ID: 15, Title: 'IA' },
    { ID: 16, Title: 'KS' },
    { ID: 17, Title: 'KY' },
    { ID: 18, Title: 'LA' },
    { ID: 19, Title: 'ME' },
    { ID: 20, Title: 'MD' },
    { ID: 21, Title: 'MA' },
    { ID: 22, Title: 'MI' },
    { ID: 23, Title: 'MN' },
    { ID: 24, Title: 'MS' },
    { ID: 25, Title: 'MO' },
    { ID: 26, Title: 'MT' },
    { ID: 27, Title: 'NE' },
    { ID: 28, Title: 'NV' },
    { ID: 29, Title: 'NH' },
    { ID: 30, Title: 'NJ' },
    { ID: 31, Title: 'NM' },
    { ID: 32, Title: 'NY' },
    { ID: 33, Title: 'NC' },
    { ID: 34, Title: 'ND' },
    { ID: 35, Title: 'OH' },
    { ID: 36, Title: 'OK' },
    { ID: 36, Title: 'OR' },
    { ID: 37, Title: 'PA' },
    { ID: 38, Title: 'RI' },
    { ID: 40, Title: 'SC' },
    { ID: 41, Title: 'SD' },
    { ID: 42, Title: 'TN' },
    { ID: 43, Title: 'TX' },
    { ID: 44, Title: 'UT' },
    { ID: 45, Title: 'VT' },
    { ID: 46, Title: 'VA' },
    { ID: 47, Title: 'WA' },
    { ID: 48, Title: 'WV' },
    { ID: 49, Title: 'WI' },
    { ID: 50, Title: 'WY' },
  ];

}
