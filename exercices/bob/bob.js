//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  if (message.trim().endsWith("?"))
  {
    return "Sure.";
  }
  if (/[a-zA-Z]/.test(message))
  {
    if (message === message.toUpperCase() && message.trim().endsWith("?"))
    {
        return "Calm down, I know what I'm doing!";
    }
    if (message === message.toUpperCase())
    {
      return "Whoa, chill out!";
    }
    else 
      return "Whatever.";
  }
return "Fine. Be that way!";
  
};
