public with sharing class LWCController2022 {
        @AuraEnabled
        public static List<Contact> getContacts(String idd){
            return [
                SELECT Id, FirstName, LastName, Email FROM Contact WHERE AccountId = :idd LIMIT 10
            ];
        }
        @AuraEnabled
        public static List<Contact> getContactsq(){
            return [
                SELECT Id, FirstName, LastName, Email, Phone FROM Contact LIMIT 10
            ];
        }
       /* @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts2(String accId) {
        return [SELECT Id, Name ,Email, Phone, Account.Name from Contact where AccountId = :accId];
    }*/
}
