import React, { Component } from 'react'
import jsPDF from 'jspdf';

class EditScrape extends React.Component {
    demoFromHTML() {

    var doc = new jsPDF();
    doc.text("Resume:", 40, 30)
    doc.text("Name: John", 60, 50)
    doc.text("Title: Social Media Manager", 60, 60)
    doc.text("E-mail: johnsmith@gmail.com", 60, 70)
    doc.text("Years Experience: 5", 60, 80)
    doc.save('a4.pdf');
    }

render() {
return (
    <div>
        <h4>Resume: </h4>
        <form>
            <p>Name: </p>
            <input type="text" name="name" id="name" placeholder="John" />
            <p>Tilte: </p>
            <input type="text" name="title" id="title" placeholder="Social Media Manager" />
            <p>E-mail: </p>
            <input type="email" name="email" id="email" placeholder="johnsmith@gmail.com" />
            <p>Years Experience: </p>
            <input type="text" name="yearsExp" id="yearsExp" placeholder="5" />
        </form>

        <button onClick={() => this.demoFromHTML()}>Export</button>
        <button>Submit</button>
    </div>
    );
    }
}

export default EditScrape;