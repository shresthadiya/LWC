public with sharing class Combobox {
    @AuraEnabled(cacheable = true)
    public static list<Account> getAccountList(){
        return [SELECT Id, Name FROM Account LIMIT 10];
    }
}