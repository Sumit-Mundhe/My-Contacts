import React from "react";
import ReactDom from "react-dom";
import Header from "./Header";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function createCard(contact){
    return(
        <Card
            key={contact.id}
            name={contact.name} 
            img={contact.img}
            mob={contact.mob}
        />
    )
}

function App(){
    return(
        <div className="main">
            <Header />
            <Avatar img={contacts[0].img} />
            {contacts.map(createCard)}
            {/* <Card 
                name={contacts[0].name}
                img={contacts[0].img}
                mob={contacts[0].mob}
            />
            <Card 
                name={contacts[1].name}
                img={contacts[1].img}
                mob={contacts[1].mob}
            />
            <Card 
                name={contacts[2].name}
                img={contacts[2].img}
                mob={contacts[2].mob}
            /> */}
        </div>
    )
}

export default App;