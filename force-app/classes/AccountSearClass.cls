public with sharing class AccountSearClass {
    @AuraEnabled(cacheable = true)
    public static List<Account> searchAccounts(string searchKey){

        string searchVal = '%' + searchkey + '%';
        return [SELECT Id, Name, Phone, Type, Total_Opportunity_Amount__c FROM Account WHERE Name LIKE : searchVal LIMIT 10];
    }
}
