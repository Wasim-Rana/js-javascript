# memory 
    -   stack 
    -   heap 

    1) stack : primitive data types uses stack memory
    2) heap  : non primitive data types uses heap memory


                                --------------------
                                |     user         |    ------------
                                --------------------                |
                                --------------------                |
                                |  myname(copy)    |                |
                                --------------------                |
                                --------------------                |
                                |     myname2      |                |
                                --------------------                |
                                --------------------                |       ( giving a refernce to user )
                                |    myname        |                |
                                --------------------                |
                                                                    |
                                --------STACK-------                |
                                                                    |
                                                                    |   
                        ------------------------------------        |
                        |                                  |        |
                        |                                  |        |
                        |                                  |        |
                        |                                  |        |
                        |     {                            |        |
                        |                                  |<-------        
                        |    email:"abc@gmail.com",        |
                        |    city: "pune"                  |
                        |            }                     |   
                        |                                  |
                        |                                  |
                        |                                  |
                        |                                  |
                        |                                  |
                        ------------------------------------

                         --------------HEAP-----------------

                        


 - primitive dataypes store in stack and give the copy of there own ( we are changing the copy of the values)
 - non-primitive / reference use heap to store and give the reference not copy ( we are manipulating the orignal value )

 
            