public with sharing class WrapperDemo {
    @AuraEnabled(cacheable = true)
    public static List<AccountContactWrapperClass> fetchAccountContactWrapperClass(){
        List<AccountContactWrapperClass> lstAccountContactWrapper = new List<AccountContactWrapperClass>();
        for(Account acc: [SELECT Id, Name, Type, BillingCity, BillingCountry, BillingStreet, (SELECT Id FROM Contacts) FROM Account WHERE Name!= NULL LIMIT 10]){
            lstAccountContactWrapper.add(new AccountContactWrapperClass(acc, acc.Contacts.size()));
        }
        return lstAccountContactWrapper;
    }

    public class AccountContactWrapperClass{
        @AuraEnabled 
        public Account acc;
        @AuraEnabled 
        public Integer totalContacts;
        @AuraEnabled 
        public String billingAddress;
        @AuraEnabled 
        public String type;
        @AuraEnabled 
        public String AccountName;
        @AuraEnabled 
        public String AccountLink;

        public AccountContactWrapperClass(Account acc, Integer totalContacts){
            this.acc = acc;
            this.totalContacts = totalContacts;
            this.billingAddress = acc.BillingStreet + ',' + acc.BillingCity + ',' + acc.BillingCountry;
            this.type = acc.type;
            this.AccountName = acc.Name;
            this.AccountLink = '/' + acc.Id;
        }
    }
}