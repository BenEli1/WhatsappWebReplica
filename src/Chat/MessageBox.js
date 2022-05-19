import MessageCard from "./MessageCard";

function MessageBox({user, contact, cardsList}){
    var data;

    async function GetContacts(){
        if (contact == '')
            return;
       
        const res = await fetch('https://localhost:7227/api/contacts/' + contact + '/messages?username=' + user, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Credentials': '*'
          },
          mode: 'cors',
        })
        data = await res.json();
    }
    
    function rend(){
        GetContacts().then(() => {
        if(contact === '' || cardsList.length == 0)
            return '';
        else{
            return data.map((message,key)=>
            {
                    return <MessageCard {...message} key={key} />
            });
        }
    });
    }

    return(
        <div id="massageBox">
        {rend()}
        </div>
    );
}

export default MessageBox;

