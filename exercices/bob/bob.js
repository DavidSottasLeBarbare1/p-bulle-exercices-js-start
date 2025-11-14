//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {

  //Check if the message ends with a ? even when there are spaces after it
  if (message.trim().endsWith("?"))
  {
    //Check if the message is fully uppercase
    if (!/[a-z]/.test(message) && /[A-Z]/.test(message))
  {
    return "Calm down, I know what I'm doing!";
  }
    return "Sure.";
  }

  //Check if the message has at least one character (number or letter)
  if (/[a-zA-Z\d]/.test(message))
  { 
    //Check if the message is fully uppercase
    if (!/[a-z]/.test(message) && /[A-Z]/.test(message))
    {
      return "Whoa, chill out!";
    }
    else 
      return "Whatever.";
  }
return "Fine. Be that way!";
  
};
