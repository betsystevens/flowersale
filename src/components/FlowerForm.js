import React from 'react';
import { useInput } from '../shared/inputHook';
import { postData } from '../shared/postData';

function FlowerForm() {
    const { value:fname, bind:bindfname, reset:resetfname } = useInput('');
    const { value:variety, bind:bindvariety, reset:resetvariety } = useInput('');
    const { value:container, bind:bindcontainer, reset:resetcontainer } = useInput('');
    const { value:imagename, bind:bindimagename, reset:resetimagename } = useInput('');
    const { value:description, bind:binddescription, reset:resetdescription } = useInput('');


    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Submitting Name ${fname}, ${variety} ${container} ${description}`);
        postData("flowers", {
            "name": fname,
            "variety": [variety],
            "container": container,
            "image": imagename,
            "description": description
        });
        resetfname();
        resetvariety();
        resetcontainer();
        resetdescription();
        resetimagename();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" {...bindfname} />
                <label>Variety:</label>
                <input type="text" {...bindvariety} />
                <label>Container:</label>
                <input name="container" type="text" {...bindcontainer} />
                <label>Image name:</label>
                <input name="description" type="text" {...bindimagename} />
                <label>Description:</label>
                <textarea name="description" rows="7" {...binddescription} />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}
export default FlowerForm;
