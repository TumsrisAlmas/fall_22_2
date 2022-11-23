public with sharing class AddressController {
    
    @AuraEnabled(cacheable = true)
    public static List<Contact> getAddress(String zipCode){
        List<Contact> contactList = new List<Contact>();
		contactList = [SELECT FirstName, LastName, Name, MailingCity, MailingStreet, MailingState, MailingCountry
                       FROM Contact 
                       WHERE MailingPostalCode = :zipCode];

        return contactList;
    }
}
