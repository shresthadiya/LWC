public with sharing class GetAccountDetails {

    @AuraEnabled(cacheable = true)
    public static List<Account> getAccount(){
        return [SELECT Id, Name, Phone, Type, Total_Opportunity_Amount__c from Account LIMIT 5];
    }
}
