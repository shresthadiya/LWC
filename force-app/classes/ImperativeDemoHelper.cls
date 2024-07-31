public with sharing class ImperativeDemoHelper{
    
    @AuraEnabled
    public static List<Account> getAccounts(){
        return [select id, name from Account LIMIT 5];
    }
}
