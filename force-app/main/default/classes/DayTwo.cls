public class DayTwo {
	//SOQL
    public DayTwo(){
        List<Contact> contactList = new List<Contact>();
		contactList = [SELECT FirstName, LastName, Email, LeadSource, 
                       	Account.Name, Account.Phone, Account.AccountSource 
                       FROM Contact 
                       WHERE LeadSource = 'Public Relations'];
        
        System.debug(contactList);
        //SYNTAX OF LOOP -- FOR EACH LOOP.
        /*
         * 	FOR(<Datatype> variable: ListName){
				code is here
		   	}
    	*/
        for(Contact contObj : contactList){
            System.debug(contObj.FirstName);
            System.debug(contObj.LeadSource);
            System.debug(contObj.Account.Name);
        }
    }
    
    
    //METHOD FOR LWC COMPONENT
    //We need to remember 4 elements, @auraEnabled, Cacheable = true, Public, and Static.
    @AuraEnabled(cacheable = true)
    Public Static List<Contact> getContacts(){
        List<Contact> contactList = new List<Contact>();
		contactList = [SELECT FirstName, LastName, Email, LeadSource, 
                       	Account.Name, Account.Phone, Account.AccountSource 
                       FROM Contact 
                       WHERE LeadSource = 'Public Relations'];

        return contactList;
        
    }
}