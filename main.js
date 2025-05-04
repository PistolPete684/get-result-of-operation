function arithmetic(a, b, operator){
  
  // setup a switch statement to handle the variations of operations being performed on a and b
  switch (operator) {
      // create a case for all four operators that could be options
      case "add":
      // return the result of the operation
        return a + b;
      
      case "subtract":
        return a - b;
      
      case "divide":
        return a / b;
      
      case "multiply":
        return a * b;
      // set a default message incase improper arguments are handed to the function
      default:
        return "Error, unknown operator."
  }
  
}

                   __
                 .'  '.
                :      :
                | _  _ |
             .-.|(o)(o)|.-.        _._          _._
            ( ( | .--. | ) )     .',_ '.      .' _,'.
             '-/ (    ) \-'     / /' `\ \ __ / /' `\ \
              /   '--'   \     / /     \.'  './     \ \
              \ `"===="` /     `-`     : _  _ :      `-`
               `\      /'              |(o)(o)|
                 `\  /'                |      |
                 /`-.-`\_             /        \
           _..:;\._/V\_./:;.._       /   .--.   \
         .'/;:;:;\ /^\ /:;:;:\'.     |  (    )  |
        / /;:;:;:;\| |/:;:;:;:\ \    _\  '--'  /__
   jgs / /;:;:;:;:;\_/:;:;:;:;:\ \ .'  '-.__.-'   `-.

   