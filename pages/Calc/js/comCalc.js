var worth;
var valueYearWanted;
var valueMonthWanted;
var valueYearSelected;
var valueMonthSelected;
var inputComAmount;

function calcNewValue(yearSelected,yearWanted,amount){
    
    worth = amount * ( yearWanted / yearSelected);
    console.log("fired");
    return worth;
}

function testCom(){
    var calcnumCom;
    let yearSelectedCPI;
    let monthYearSelectedCPI;
    let yearWantedCPI;
    let monthYearWantedCPI;
    let valueComType = document.getElementById("comType").options[comType.selectedIndex].text;
    console.log(valueComType);
    let valueYearWanted = document.getElementById("comYearWanted").options[comYearWanted.selectedIndex].text;
    console.log(valueYearWanted);
    let valueMonthWanted = document.getElementById("comMonthWanted").options[comMonthWanted.selectedIndex].text;
    console.log(valueMonthWanted);
    let valueYearSelected = document.getElementById("comYearSelected").options[comYearSelected.selectedIndex].text;
    console.log(valueYearSelected);
    let valueMonthSelected = document.getElementById("comMonthSelected").options[comMonthSelected.selectedIndex].text;
    console.log(valueMonthSelected);
    let inputComAmount = document.getElementById("comRands").value; 
    console.log(inputComAmount);



    switch(true){
        case (valueYearWanted==2002) && (valueMonthWanted== "January") && (valueComType == "Bread" ):
            monthYearWantedCPI = 29.3281;
            break;

        case (valueYearWanted==2002) && (valueMonthWanted== "Febuary") && (valueComType == "Bread"):
            monthYearWantedCPI = 29.591;
            break;

        case (valueYearWanted==2021) && (valueMonthWanted== "April") && (valueComType == "Bread"):
            monthYearWantedCPI = 116,7;
            break;

        case (valueYearWanted==2021) && (valueMonthWanted== "May") && (valueComType == "Bread"):
            monthYearWantedCPI = 117.2;
            break;

        case (valueYearWanted==2021) && (valueMonthWanted== "June") && (valueComType == "Bread"):
            monthYearWantedCPI = 116.9;
            break;
        // case (valueYearWanted==1922):
        //     yearWantedCPI = 0.5865;
        //     break;
        
        // case (valueYearWanted==1923):
        //     yearWantedCPI = 0.5691;
        //     break;

        // case (valueYearWanted==1924):
        //     yearWantedCPI = 0.5769;
        //     break;

        // case (valueYearWanted==1925):
        //     yearWantedCPI = 0.5746;
        //     break;

        // case (valueYearWanted==1926):
        //     yearWantedCPI = 0.566;
        //     break;

        // case (valueYearWanted==1927):
        //     yearWantedCPI = 0.5691;
        //     break;

        // case (valueYearWanted==1928):
        //     yearWantedCPI = 0.5698;
        //     break;
        
        // case (valueYearWanted==1929):
        //     yearWantedCPI = 0.568;
        //     break;

        // case (valueYearWanted==1930):
        //     yearWantedCPI = 0.5547;
        //     break;

        // case (valueYearWanted==1931):
        //     yearWantedCPI = 0.5342;
        //     break;
            
        // case (valueYearWanted==1932):
        //     yearWantedCPI = 0.5102;
        //     break;

        // case (valueYearWanted==1933):
        //     yearWantedCPI = 0.4967;
        //     break;

        // case (valueYearWanted==1934):
        //     yearWantedCPI = 0.5036;
        //     break;
        
        // case (valueYearWanted==1935):
        //     yearWantedCPI = 0.5008;
        //     break;

        // case (valueYearWanted==1936):
        //     yearWantedCPI = 0.5023;
        //     break;

        // case (valueYearWanted==1937):
        //     yearWantedCPI = 0.5143;
        //     break;
            
        // case (valueYearWanted==1938):
        //     yearWantedCPI = 0.5328 ;
        //     break;

        // case (valueYearWanted==1939):
        //     yearWantedCPI = 0.5323;
        //     break;

        // case (valueYearWanted==1940):
        //     yearWantedCPI = 0.551;
        //     break;
        
        // case (valueYearWanted==1941):
        //     yearWantedCPI = 0.5764;
        //     break;

        // case (valueYearWanted==1942):
        //     yearWantedCPI = 0.6248;
        //     break;

        // case (valueYearWanted==1943):
        //     yearWantedCPI = 0.6627;
        //     break;

        // case (valueYearWanted==1944):
        //     yearWantedCPI = 0.6865;
        //     break;

        // case (valueYearWanted==1945):
        //     yearWantedCPI = 0.7044;
        //     break;

        // case (valueYearWanted==1946):
        //     yearWantedCPI = 0.7148;
        //     break;
        
        // case (valueYearWanted==1947):
        //     yearWantedCPI = 0.7445;
        //     break;

        // case (valueYearWanted==1948):
        //     yearWantedCPI = 0.7873;
        //     break;

        // case (valueYearWanted==1949):
        //     yearWantedCPI = 0.8161;
        //     break;
            
        // case (valueYearWanted==1950):
        //     yearWantedCPI = 0.8488;
        //     break;

        // case (valueYearWanted==1951):
        //     yearWantedCPI = 0.9113;
        //     break;

        // case (valueYearWanted==1952):
        //     yearWantedCPI = 0.9903;
        //     break;
        
        // case (valueYearWanted==1953):
        //     yearWantedCPI = 1.0252;
        //     break;

        // case (valueYearWanted==1954):
        //     yearWantedCPI = 1.0441;
        //     break;

        // case (valueYearWanted==1955):
        //     yearWantedCPI = 1.0768;
        //     break;

        // case (valueYearWanted==1956):
        //     yearWantedCPI = 1.0973;
        //     break;

        // case (valueYearWanted==1957):
        //     yearWantedCPI = 1.1298;
        //     break;

        // case (valueYearWanted==1958):
        //     yearWantedCPI = 1.1694;
        //     break;
        
        // case (valueYearWanted==1959):
        //     yearWantedCPI = 1.1827;
        //     break;

        // case (valueYearWanted==1960):
        //     yearWantedCPI = 1.1971;
        //     break;

        // case (valueYearWanted==1961):
        //     yearWantedCPI = 1.223;
        //     break;
            
        // case (valueYearWanted==1962):
        //     yearWantedCPI = 1.2386;
        //     break;

        // case (valueYearWanted==1963):
        //     yearWantedCPI = 1.2543;
        //     break;

        // case (valueYearWanted==1964):
        //     yearWantedCPI = 1.2865;
        //     break;
        
        // case (valueYearWanted==1965):
        //     yearWantedCPI = 1.338;
        //     break;

        // case (valueYearWanted==1966):
        //     yearWantedCPI = 1.3857;
        //     break;

        // case (valueYearWanted==1967):
        //     yearWantedCPI = 1.4339;
        //     break;

        // case (valueYearWanted==1968):
        //     yearWantedCPI = 1.4628;
        //     break;

        // case (valueYearWanted==1969):
        //     yearWantedCPI = 1.51;
        //     break;

        // case (valueYearWanted==1970):
        //     yearWantedCPI = 1.5718;
        //     break;
        
        // case (valueYearWanted==1971):
        //     yearWantedCPI = 1.661;
        //     break;

        // case (valueYearWanted==1972):
        //     yearWantedCPI = 1.7688;
        //     break;

        // case (valueYearWanted==1973):
        //     yearWantedCPI = 1.9382;
        //     break;
            
        // case (valueYearWanted==1974):
        //     yearWantedCPI = 2.1632;
        //     break;

        // case (valueYearWanted==1975):
        //     yearWantedCPI = 2.4345;
        //     break;

        // case (valueYearWanted==1976):
        //     yearWantedCPI = 2.7028;
        //     break;

        // case (valueYearWanted==1977):
        //     yearWantedCPI = 3.0042;
        //     break;
        
        // case (valueYearWanted==1978):
        //     yearWantedCPI = 3.3388;
        //     break;

        // case (valueYearWanted==1979):
        //     yearWantedCPI = 3.7826;
        //     break;

        // case (valueYearWanted==1980):
        //     yearWantedCPI = 4.2993;
        //     break;

        // case (valueYearWanted==1981):
        //     yearWantedCPI = 4.9551;
        //     break;

        // case (valueYearWanted==1982):
        //     yearWantedCPI = 5.6805;
        //     break;

        // case (valueYearWanted==1983):
        //     yearWantedCPI = 6.3794;
        //     break;
        
        // case (valueYearWanted==1984):
        //     yearWantedCPI = 7.1147;
        //     break;

        // case (valueYearWanted==1985):
        //     yearWantedCPI = 8.274;
        //     break;

        // case (valueYearWanted==1986):
        //     yearWantedCPI = 9.8175;
        //     break;
            
        // case (valueYearWanted==1987):
        //     yearWantedCPI = 11.4041;
        //     break;

        // case (valueYearWanted==1988):
        //     yearWantedCPI = 12.8615;
        //     break;

        // case (valueYearWanted==1989):
        //     yearWantedCPI = 14.7561;
        //     break;
        
        // case (valueYearWanted==1990):
        //     yearWantedCPI = 16.8693;
        //     break;

        // case (valueYearWanted==1991):
        //     yearWantedCPI = 19.4562;
        //     break;

        // case (valueYearWanted==1992):
        //     yearWantedCPI = 22.1557;
        //     break;

        // case (valueYearWanted==1993):
        //     yearWantedCPI = 24.3087;
        //     break;

        // case (valueYearWanted==1994):
        //     yearWantedCPI = 26.4815;
        //     break;

        // case (valueYearWanted==1995):
        //     yearWantedCPI = 28.7802;
        //     break;
        
        // case (valueYearWanted==1996):
        //     yearWantedCPI = 30.8967;
        //     break;

        // case (valueYearWanted==1997):
        //     yearWantedCPI = 33.5532;
        //     break;

        // case (valueYearWanted==1998):
        //     yearWantedCPI = 35.8618;
        //     break;
            
        // case (valueYearWanted==1999):
        //     yearWantedCPI = 37.72;
        //     break;

        // case (valueYearWanted==2000):
        //     yearWantedCPI = 39.7339;
        //     break;

        // case (valueYearWanted==2001):
        //     yearWantedCPI = 41.9994;
        //     break;
        
        // case (valueYearWanted==2002):
        //     yearWantedCPI = 45.8483;
        //     break;

        // case (valueYearWanted==2003):
        //     yearWantedCPI = 48.5345;
        //     break;

        // case (valueYearWanted==2004):
        //     yearWantedCPI = 49.2069;
        //     break;

        // case (valueYearWanted==2005):
        //     yearWantedCPI = 50.8796;
        //     break;

        // case (valueYearWanted==2006):
        //     yearWantedCPI = 53.2412;
        //     break;

        // case (valueYearWanted==2007):
        //     yearWantedCPI = 57.0205;
        //     break;
        
        // case (valueYearWanted==2008):
        //     yearWantedCPI = 63.3083;
        //     break;

        // case (valueYearWanted==2009):
        //     yearWantedCPI = 67.8167;
        //     break;

        // case (valueYearWanted==2010):
        //     yearWantedCPI = 70.7083;
        //     break;
            
        // case (valueYearWanted==2011):
        //     yearWantedCPI = 74.2333;
        //     break;

        // case (valueYearWanted==2012):
        //     yearWantedCPI = 78.4083;
        //     break;

        // case (valueYearWanted==2013):
        //     yearWantedCPI = 82.925;
        //     break;
        
        // case (valueYearWanted==2014):
        //     yearWantedCPI = 87.975;
        //     break;

        // case (valueYearWanted==2015):
        //     yearWantedCPI = 92;
        //     break;

        // case (valueYearWanted==2016):
        //     yearWantedCPI = 97.8333;
        //     break;

        // case (valueYearWanted==2017):
        //     yearWantedCPI = 102.9917;
        //     break;
        
        // case (valueYearWanted==2018):
        //     yearWantedCPI = 107.75;
        //     break;

        // case (valueYearWanted==2019):
        //     yearWantedCPI = 112.2;
        //     break;

        // case (valueYearWanted==2020):
        //     yearWantedCPI = 115.8667;
        //     break;
    }

    switch(true){
        case (valueYearSelected==2002) && (valueMonthSelected== "January") && (valueComType == "Bread" ):
            monthYearSelectedCPI = 29.3281;
            break;

        case (valueYearSelected==2002) && (valueMonthSelected== "Febuary") && (valueComType == "Bread"):
            monthYearSelectedCPI = 29.591;
            break;
        
        case (valueYearSelected==2002) && (valueMonthSelected== "March") && (valueComType == "Bread" ):
            monthYearSelectedCPI = 30.4519;
            break;

        case (valueYearSelected==2002) && (valueMonthSelected== "April") && (valueComType == "Bread"):
            monthYearSelectedCPI = 31.0668;
            break;

        case (valueYearSelected==2002) && (valueMonthSelected== "May") && (valueComType == "Bread" ):
            monthYearSelectedCPI = 31.0964;
            break;

        case (valueYearSelected==2002) && (valueMonthSelected== "June") && (valueComType == "Bread"):
            monthYearSelectedCPI = 31.4992;
            break;
        
        case (valueYearSelected==2002) && (valueMonthSelected== "July") && (valueComType == "Bread" ):
            monthYearSelectedCPI = 31.4507;
            break;

        case (valueYearSelected==2002) && (valueMonthSelected== "August") && (valueComType == "Bread" ):
            monthYearSelectedCPI = 29.3281;
            break;

        case (valueYearSelected==2002) && (valueMonthSelected== "September") && (valueComType == "Bread"):
            monthYearSelectedCPI = 29.591;
            break;
        
        case (valueYearSelected==2002) && (valueMonthSelected== "October") && (valueComType == "Bread" ):
            monthYearSelectedCPI = 29.3281;
            break;

        case (valueYearSelected==2002) && (valueMonthSelected== "November") && (valueComType == "Bread"):
            monthYearSelectedCPI = 29.591;
            break;
            
        case (valueYearSelected==2002) && (valueMonthSelected== "December") && (valueComType == "Bread"):
            monthYearSelectedCPI = 29.591;
            break; 

        case (valueYearSelected==2002) && (valueMonthSelected== "April") && (valueComType == "Bread"):
            monthYearSelectedCPI = 29.591;
            break;

        case (valueYearSelected==2021) && (valueMonthSelected== "April") && (valueComType == "Bread"):
        monthYearSelectedCPI = 116,7;
        break;

        case (valueYearSelected==2021) && (valueMonthSelected== "May") && (valueComType == "Bread"):
            monthYearSelectedCPI = 117.2;
            break;

        case (valueYearSelected==2021) && (valueMonthSelected== "June") && (valueComType == "Bread"):
            monthYearSelectedCPI = 116.9;
            break;

        // case (valueYearSelected==1921):
        //     yearSelectedCPI = 0.5865;
        //     break;

        // case (valueYearSelected==1922):
        //     yearSelectedCPI = 0.5865;
        //     break;
        
        // case (valueYearSelected==1923):
        //     yearSelectedCPI = 0.5691;
        //     break;

        // case (valueYearSelected==1924):
        //     yearSelectedCPI = 0.5769;
        //     break;

        // case (valueYearSelected==1925):
        //     yearSelectedCPI = 0.5746;
        //     break;

        // case (valueYearSelected==1926):
        //     yearSelectedCPI = 0.566;
        //     break;

        // case (valueYearSelected==1927):
        //     yearSelectedCPI = 0.5691;
        //     break;

        // case (valueYearSelected==1928):
        //     yearSelectedCPI = 0.5698;
        //     break;
        
        // case (valueYearSelected==1929):
        //     yearSelectedCPI = 0.568;
        //     break;

        // case (valueYearSelected==1930):
        //     yearSelectedCPI = 0.5547;
        //     break;

        // case (valueYearSelected==1931):
        //     yearSelectedCPI = 0.5342;
        //     break;
            
        // case (valueYearSelected==1932):
        //     yearSelectedCPI = 0.5102;
        //     break;

        // case (valueYearSelected==1933):
        //     yearSelectedCPI = 0.4967;
        //     break;

        // case (valueYearSelected==1934):
        //     yearSelectedCPI = 0.5036;
        //     break;
        
        // case (valueYearSelected==1935):
        //     yearSelectedCPI = 0.5008;
        //     break;

        // case (valueYearSelected==1936):
        //     yearSelectedCPI = 0.5023;
        //     break;

        // case (valueYearSelected==1937):
        //     yearSelectedCPI = 0.5143;
        //     break;
            
        // case (valueYearSelected==1938):
        //     yearSelectedCPI = 0.5328 ;
        //     break;

        // case (valueYearSelected==1939):
        //     yearSelectedCPI = 0.5323;
        //     break;

        // case (valueYearSelected==1940):
        //     yearSelectedCPI = 0.551;
        //     break;
        
        // case (valueYearSelected==1941):
        //     yearSelectedCPI = 0.5764;
        //     break;

        // case (valueYearSelected==1942):
        //     yearSelectedCPI = 0.6248;
        //     break;

        // case (valueYearSelected==1943):
        //     yearSelectedCPI = 0.6627;
        //     break;

        // case (valueYearSelected==1944):
        //     yearSelectedCPI = 0.6865;
        //     break;

        // case (valueYearSelected==1945):
        //     yearSelectedCPI = 0.7044;
        //     break;

        // case (valueYearSelected==1946):
        //     yearSelectedCPI = 0.7148;
        //     break;
        
        // case (valueYearSelected==1947):
        //     yearSelectedCPI = 0.7445;
        //     break;

        // case (valueYearSelected==1948):
        //     yearSelectedCPI = 0.7873;
        //     break;

        // case (valueYearSelected==1949):
        //     yearSelectedCPI = 0.8161;
        //     break;
            
        // case (valueYearSelected==1950):
        //     yearSelectedCPI = 0.8488;
        //     break;

        // case (valueYearSelected==1951):
        //     yearSelectedCPI = 0.9113;
        //     break;

        // case (valueYearSelected==1952):
        //     yearSelectedCPI = 0.9903;
        //     break;
        
        // case (valueYearSelected==1953):
        //     yearSelectedCPI = 1.0252;
        //     break;

        // case (valueYearSelected==1954):
        //     yearSelectedCPI = 1.0441;
        //     break;

        // case (valueYearSelected==1955):
        //     yearSelectedCPI = 1.0768;
        //     break;

        // case (valueYearSelected==1956):
        //     yearSelectedCPI = 1.0973;
        //     break;

        // case (valueYearSelected==1957):
        //     yearSelectedCPI = 1.1298;
        //     break;

        // case (valueYearSelected==1958):
        //     yearSelectedCPI = 1.1694;
        //     break;
        
        // case (valueYearSelected==1959):
        //     yearSelectedCPI = 1.1827;
        //     break;

        // case (valueYearSelected==1960):
        //     yearSelectedCPI = 1.1971;
        //     break;

        // case (valueYearSelected==1961):
        //     yearSelectedCPI = 1.223;
        //     break;
            
        // case (valueYearSelected==1962):
        //     yearSelectedCPI = 1.2386;
        //     break;

        // case (valueYearSelected==1963):
        //     yearSelectedCPI = 1.2543;
        //     break;

        // case (valueYearSelected==1964):
        //     yearSelectedCPI = 1.2865;
        //     break;
        
        // case (valueYearSelected==1965):
        //     yearSelectedCPI = 1.338;
        //     break;
    
        // case (valueYearSelected==1966):
        //     yearSelectedCPI = 1.3857;
        //     break;
    
        // case (valueYearSelected==1967):
        //     yearSelectedCPI = 1.4339;
        //     break;
    
        // case (valueYearSelected==1968):
        //     yearSelectedCPI = 1.4628;
        //     break;
    
        // case (valueYearSelected==1969):
        //     yearSelectedCPI = 1.51;
        //     break;
    
        // case (valueYearSelected==1970):
        //     yearSelectedCPI = 1.5718;
        //     break;
        
        // case (valueYearSelected==1971):
        //     yearSelectedCPI = 1.661;
        //     break;
    
        // case (valueYearSelected==1972):
        //     yearSelectedCPI = 1.7688;
        //     break;
    
        // case (valueYearSelected==1973):
        //     yearSelectedCPI = 1.9382;
        //     break;
            
        // case (valueYearSelected==1974):
        //     yearSelectedCPI = 2.1632;
        //     break;
    
        // case (valueYearSelected==1975):
        //     yearSelectedCPI = 2.4345;
        //     break;
    
        // case (valueYearSelected==1976):
        //     yearSelectedCPI = 2.7028;
        //     break;
    
        // case (valueYearSelected==1977):
        //     yearSelectedCPI = 3.0042;
        //     break;
        
        // case (valueYearSelected==1978):
        //     yearSelectedCPI = 3.3388;
        //     break;
    
        // case (valueYearSelected==1979):
        //     yearSelectedCPI = 3.7826;
        //     break;
    
        // case (valueYearSelected==1980):
        //     yearSelectedCPI = 4.2993;
        //     break;
    
        // case (valueYearSelected==1981):
        //     yearSelectedCPI = 4.9551;
        //     break;
    
        // case (valueYearSelected==1982):
        //     yearSelectedCPI = 5.6805;
        //     break;
    
        // case (valueYearSelected==1983):
        //     yearSelectedCPI = 6.3794;
        //     break;
        
        // case (valueYearSelected==1984):
        //     yearSelectedCPI = 7.1147;
        //     break;
    
        // case (valueYearSelected==1985):
        //     yearSelectedCPI = 8.274;
        //     break;
    
        // case (valueYearSelected==1986):
        //     yearSelectedCPI = 9.8175;
        //     break;
            
        // case (valueYearSelected==1987):
        //     yearSelectedCPI = 11.4041;
        //     break;
    
        // case (valueYearSelected==1988):
        //     yearSelectedCPI = 12.8615;
        //     break;
    
        // case (valueYearSelected==1989):
        //     yearSelectedCPI = 14.7561;
        //     break;
        
        // case (valueYearSelected==1990):
        //     yearSelectedCPI = 16.8693;
        //     break;
    
        // case (valueYearSelected==1991):
        //     yearSelectedCPI = 19.4562;
        //     break;
    
        // case (valueYearSelected==1992):
        //     yearSelectedCPI = 22.1557;
        //     break;
    
        // case (valueYearSelected==1993):
        //     yearSelectedCPI = 24.3087;
        //     break;
    
        // case (valueYearSelected==1994):
        //     yearSelectedCPI = 26.4815;
        //     break;
    
        // case (valueYearSelected==1995):
        //     yearSelectedCPI = 28.7802;
        //     break;
        
        // case (valueYearSelected==1996):
        //     yearSelectedCPI = 30.8967;
        //     break;
    
        // case (valueYearSelected==1997):
        //     yearSelectedCPI = 33.5532;
        //     break;
    
        // case (valueYearSelected==1998):
        //     yearSelectedCPI = 35.8618;
        //     break;
            
        // case (valueYearSelected==1999):
        //     yearSelectedCPI = 37.72;
        //     break;
    
        // case (valueYearSelected==2000):
        //     yearSelectedCPI = 39.7339;
        //     break;
    
        // case (valueYearSelected==2001):
        //     yearSelectedCPI = 41.9994;
        //     break;
        
        // case (valueYearSelected==2002):
        //     yearSelectedCPI = 45.8483;
        //     break;
    
        // case (valueYearSelected==2003):
        //     yearSelectedCPI = 48.5345;
        //     break;
    
        // case (valueYearSelected==2004):
        //     yearSelectedCPI = 49.2069;
        //     break;
    
        // case (valueYearSelected==2005):
        //     yearSelectedCPI = 50.8796;
        //     break;
    
        // case (valueYearSelected==2006):
        //     yearSelectedCPI = 53.2412;
        //     break;
    
        // case (valueYearSelected==2007):
        //     yearSelectedCPI = 57.0205;
        //     break;
        
        // case (valueYearSelected==2008):
        //     yearSelectedCPI = 63.3083;
        //     break;
    
        // case (valueYearSelected==2009):
        //     yearSelectedCPI = 67.8167;
        //     break;
    
        // case (valueYearSelected==2010):
        //     yearSelectedCPI = 70.7083;
        //     break;
            
        // case (valueYearSelected==2011):
        //     yearSelectedCPI = 74.2333;
        //     break;
    
        // case (valueYearSelected==2012):
        //     yearSelectedCPI = 78.4083;
        //     break;
    
        // case (valueYearSelected==2013):
        //     yearSelectedCPI = 82.925;
        //     break;
        
        // case (valueYearSelected==2014):
        //     yearSelectedCPI = 87.975;
        //     break;
    
        // case (valueYearSelected==2015):
        //     yearSelectedCPI = 92;
        //     break;
    
        // case (valueYearSelected==2016):
        //     yearSelectedCPI = 97.8333;
        //     break;
    
        // case (valueYearSelected==2017):
        //     yearSelectedCPI = 102.9917;
        //     break;
        
        // case (valueYearSelected==2018):
        //     yearSelectedCPI = 107.75;
        //     break;
    
        // case (valueYearSelected==2019):
        //     yearSelectedCPI = 112.2;
        //     break;
    
        // case (valueYearSelected==2020):
        //     yearSelectedCPI = 115.8667;
        //     break;
    }
    console.log(monthYearSelectedCPI);
    console.log(monthYearWantedCPI);

    calcnumCom = calcNewValue(monthYearSelectedCPI,monthYearWantedCPI,inputComAmount);
    console.log(calcnumCom);
    document.getElementById("comValue").value = calcnumCom.toFixed(2); 
    return calcnumCom; 
}

