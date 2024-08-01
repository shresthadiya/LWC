public with sharing class Foreachdemo {
    @AuraEnabled (cacheable = true)
    public static List<Account> getAccountDetails(){
        return [SELECT Id, Name FROM Account LIMIT 20];
    }
}