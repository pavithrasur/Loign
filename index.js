const nameinput=document.querySelector("#name");
const email=document.querySelector("#email");
const password=document.querySelector("#password");
const message=document.querySelector("#message");
const success=document.querySelector("#success");
const errornodes=document.querySelectorAll(".error");

function validateform()
{
    clearmessages();
    let errorflag=false;
    if(nameinput.value.length<1)
    {
        errornodes[0].innerText="Name cannot be blank";
        nameinput.classList.add('error-border');
        errorflag=true;
    }
      if(email.value.length<1)
    {
        errornodes[1].innerText="Email cannot be empty";
        email.classList.add('error-border');
        errorflag=true;

    }
    if(!emailIsvaild(email.value))
    {
        errornodes[2].innerText="Invaild email";
        email.classList.add('error-border');
        errorflag=true;
    }
     if(password.value.length<8)
        {
            errornodes[3].innerText="invaild password";
            password.classList.add('error-border');
            errorflag=true;
    
        }
        if(passwordIsvaild(password.value))
            {
                errornodes[4].innerText="Invaild email";
                email.classList.add('error-border');
                errorflag=true;
            }
        
             if(message.value.length<1)
                {
                    errornodes[5].innerText="message cannot be blank";
                    message.classList.add('error-border');
                    errorflag=true;
            
                }
                if(!errorflag==true)
                    {
                        success.innerHTML="FormValidation Successful";
                    }

                }


function emailIsvaild(email)
{
    let pattern="[^@]+@[^@]+\.[a-zA-Z]{2,6}";
    return pattern.test(email);
}

function passwordIsvaild(password)
{
    let pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}";
    return pattern.test(password);
}

function clearmessages()
{
    for(i=0;i<errornodes.length;i++)
    {
        errornodes[i].innerText="";
    }
    success.innerText="";
    nameinput.classList.remove('error-border');
    email.classList.remove('error-border');
    password.classList.remove('error-border');
    contact.classList.remove('error-border');
    message.classList.remove('error-border');
    
}



