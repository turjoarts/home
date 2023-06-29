
function sendEmail()
{
    var id=document.getElementById("p_id").value;
    if(id=='122333')
    {      
        var ele = document.getElementsByName("rate");
        var x;
        for (i = 0; i < ele.length; i++) 
        {
            if (ele[i].checked)
                x= ele[i].value;
        }

        if(x<=5)
        {
            Email.send(
            {
                Host : "smtp.elasticemail.com",
                Username : "turjoarts@gmail.com",
                Password : "29B5F905C9FF1DF589693C13CEB406A27D1B",
                To : 'turjoarts@gmail.com',
                From : "turjoarts@gmail.com",
                Subject : "New Review From Customer",
                Body : "Name: " + document.getElementById("cname").value 
                + "<br> Rating: " + x 
                +"<br> Description: "+ document.getElementById("describe").value
            }).then(
            message => alert("Review Sent Succesfully"));
        }
        else
        {
            alert("please give star");
        }

    }
    else
    {
        alert("Pleae Check Product ID");
    }
}

