public class DayOne {
    
    //Constructor: It the first method that executes, when class initiate.
    public DayOne(){
        //variables: it holds the data and help to make data travell from one place to another.
        //Basically we have different types of variable. and those are:
        //PRIMITIVE TYPES
        //String: All letter or Symbols.
        //Number: Only Numeric Number no decimal.
        //Decimal: That contains number and decimal values both.
        //Boolean: True or False.
        //Date: That holds the Date value.
        //DateTime: That holds the DateTime Value(Includes the Timezone).
        //
        
        String contact_firstName = 'John'; //Apex only work with the single quotes for string.
        String contact_lastName = 'Walter';
        
        Integer contact_age = 34;
        Decimal contact_salary = 3342.56;
        
        Boolean contact_isSalaried = true;
        
        Date contact_birthdate = Date.newInstance(1960, 2, 17);//YYYY, MM, DD
        DateTime contact_lastLogInGMT = DateTime.newInstanceGmt(2022, 11, 10, 21, 40, 0); //GMT: 
        DateTime contact_lastLogIn = DateTime.newInstance(2022, 11, 10, 21, 40, 0); 
        
        //
        System.debug(contact_firstName);
        System.debug(contact_lastName);
        System.debug(contact_age);
        System.debug(contact_salary);
        System.debug(contact_isSalaried);
        
        System.debug(contact_birthdate);
        System.debug(contact_lastLogInGMT);
        System.debug(contact_lastLogIn);
        
        //Non-Primitive Data Types.
        //Collection varaibles.
        //LIST, SET and MAP.
        
        //LIST
        List<String> employeeNameList = new List<String>();
        employeeNameList.add('Albert'); //at location 0
        employeeNameList.add('Mike Bas');//at location 1
        employeeNameList.add('Omer');//at location 2
        
        System.debug('BEFORE ' + employeeNameList);
        System.debug(employeeNameList.get(1));
        employeeNameList.remove(1);
        System.debug('AFTER ' + employeeNameList);
        employeeNameList.set(1,'New Value');
        System.debug('AFTER ' + employeeNameList);
        employeeNameList.add('Omer');
        employeeNameList.add('Joy');
        employeeNameList.add('Omer');
        System.debug('AFTER DUPLICATES ' + employeeNameList);
        
        //SET: It is similar to the list but it does not contains the Duplicate values.
        Set<String> employeeEmails = new Set<String>();
        employeeEmails.add('test001@gmail.com');
        employeeEmails.add('test221@gmail.com');
        employeeEmails.add('test331@gmail.com');
        employeeEmails.add('test221@gmail.com');
        System.debug('SET ' + employeeEmails);
        System.debug('Check  ' + employeeEmails.contains('test001@gmail.com'));
        
    }
    
    //Method or Function: These are the small piece of code, that are designed to perform specific task.
    //It will accept some values, perform some operation and give us some result.
    //Parameter are the Values that a function or Method accept or ask to provide.
    //Retun type: This is the output of the function or Method.
    //
    //SYNTAX:
    //public | return-type | function-Name(Parameters){
    	//TODO CODE.
	//}
    
    public Integer sumOfTwoNumber(Integer num1, Integer num2){
        Integer sum = num1 + num2;
        
        //To send the output back we need to use Return.
        return sum;
    }
}