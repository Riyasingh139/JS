//javascript
        //create pop up i javascript
        //alert(123);      
        //alert("hello");
        //alert ==> function
        //function is block of code
        //alert function is in-build

        // testing some output 
        // console = > in-buid object javascript
        // console.log(data)
        //alert1(1);
        //console.log("hello");
        // console.log(2 *2);
        // store a data in container called as variable
        // we can declare  a variables with three different keywords
        // var , let ,const
        // = is called assignment
         
         //data types in javascript

         let brand = "Hotel Taj";//string
         let city = "Mumbai";//string
         let minCost = 500;//number
         let rating = 4.6;//number
         let isOnlyVag = false; //true => boolean
         let contactNo = null; //object
         let totalRooms;// undefined
 
 
         console.log(brand,typeof brand);
         console.log(city,typeof city);
         console.log(minCost,typeof minCost);
         console.log(rating,typeof rating);
         console.log(isOnlyVag,typeof isOnlyVag);
         console.log(contactNo,typeof contactNo);
         console.log(totalRooms,typeof totalRooms);
       
         //loosely coupled
         let a = 10;
         console.log(typeof a);
         a = "abc";
         console.log(typeof a);
         a = true;
         console.log(typeof a);
         a = null;
         console.log(typeof a);
        
        let b = 10;
        console.log(typeof b)
        b = Number('10a');//NAN not a number
        //string ==> number by using "Number"::typecasting
        
        let isNumber = isNaN(b);
        console.log(isNumber);
        console.log(b,typeof b)
 