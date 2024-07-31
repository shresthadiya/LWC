public with sharing class demowireclass{
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(){
        return [select id, name from Account LIMIT 5];
    }
}
