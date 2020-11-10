import React, { useState } from 'react';

function FlowerForm() {
   const [fname, setFName ] = useState('');
   const [variety, setVariety ] = useState('');
   const [container, setContainer ] = useState('flat');
   const [description, setDescription ] = useState('');
   
   function handleInputChange(event) {
       const target = event.target;
       const name = target.name;
       const value = target.value;

       if (name === 'fname') { setFName(value) };
       if (name === 'variety') { setVariety(value) };
       if (name === 'container') { setContainer(value) };
       if (name === 'description') { setDescription(value) };
   }
   function saveFlower() {
       alert("Current values: " + "fname: " + fname + ", variety: " + variety + ", container: " + container);
   }
   return (
        <div>
            <form>
                <div class="container">
                    <label className="gridlabel">Name:</label>
                    <input name="fname" type="text" value={fname} onChange={handleInputChange} />
                    <label className="gridlabel">Variety:</label>
                    <input name="variety" type="text" value={variety} onChange={handleInputChange} />
                    <label className="gridlabel">Container:</label>
                    <input name="container" type="text" value={container} onChange={handleInputChange} />
                    <label className="gridlabel">Description:</label>
                    <input name="container" type="textarea" value={description} onChange={handleInputChange} />
                    <button className="gridinput" onClick={saveFlower}>Submit</button>
                </div>
            </form>
       </div>
   );
}
export default FlowerForm;
