public with sharing class TreeDemo {
    @AuraEnabled(cacheable = true)
    public static list<Account> getAccountDetails(){
        return [SELECT Id, Name, (SELECT FirstName, LastName FROM Contacts) FROM Account LIMIT 3];
    }
}
