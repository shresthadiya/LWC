public with sharing class AccountSearClass {

    @AuraEnabled(cacheable=true)
    public static List<Account> searchAcc(String searchKey) {

    String searchVal = '%' + searchKey + '%';
    return [Select id,name,phone,type,Total_Opportunity_Amount__c from Account where Name LIKE : searchVal];


    }
    
}
