import React, {useState} from 'react';
import {request} from "./Network.js";
import 'antd/dist/antd.css';
import './CreateTimeLine.css';



class CreateTimeline extends React.Component {

    handleSubmit(event) {
        event.preventDefault();

        request(
            'POST',
            '/api/timeline/create',
            {
                body: {
                    title: event.target.title.value,
                    privilege_level: event.target.privilege_level.value,
                    description: event.target.description.value,
                    startsAt: event.target.date.value,
                }
            })
            .then(data => {
                alert("*** Timeline created successfully ***")
                console.log(data);
            })
            .catch(err => {
                console.log(err);
            })
    };

    render() {
        return (
            <div className="form-style-5">
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend>Create Timeline</legend>
                        <input type="text" name="title" placeholder="Title"/>
                        <select id="privilege_level" name="privilege_level">
                            <option value="public">Privilege Level: Public</option>
                            <option value="private">Privilege Level: Private</option>
                        </select>
                        <textarea name="description" placeholder="Description"></textarea>

                        <input type="date" name="date" placeholder="Starts At Date"/>
                        <input type="submit" value="Submit"/>
                    </fieldset>
                </form>
            </div>
        );

    }
}

// const MakeTimeline = () => {
//     const [componentSize, setComponentSize] = useState('large');
//
//
// }

export default CreateTimeline;
