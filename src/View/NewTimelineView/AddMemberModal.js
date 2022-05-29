import { Modal, Button } from "react-bootstrap";
import { useRef, useState } from "react";
import { Input, Select, AutoComplete } from "antd";
import UserCard from "../UserCard/UserCard";
import { request } from "../../helpers/Network";
import classes from "../UserCard/UserCard.module.css";

const imagesAddress = [
    "https://picsum.photos/130/130?image=839",
    "https://picsum.photos/130/130?image=856",
    "https://picsum.photos/130/130?image=836",
];
const imageAddress = imagesAddress[Math.floor(Math.random() * 3)];

export default function AddMemberModal(props) {
    const { onHandle, show, timelineId } = props;

    const [fetchData, setFetchData] = useState([]);

    const UserSearchResult = (users) => {
        setFetchData([]);
        if (users === "") {
            return 0;
        }

        console.log(users);

        const ref = this;
        request(
            'GET',
            '/api/user/search_suggestion',
            {
                query:{
                    username : users
                }
            }
        )
            .then(function (response) {
                setFetchData(response.data);
            })
            .catch(function (error) {
                setFetchData([]);
            });
    };


    const onSearch = (e) => {
        UserSearchResult(e);
    };

    const onUserSelect = (data) => {
        request(
            'POST',
            '/api/timeline/add-member/'+timelineId,
            {
                body:{
                    email : data.email,
                    event_privilege_level : 'create_event',
                    chat_access : 1
                }
            }
        )
            .then(data => {
                // alert success
                console.log("On Data",data);
                onHandle();
            })
            .catch(err => {
                console.log("On Error",err);
            })
    };


    return (
        <Modal show={show} onHide={onHandle}>
            <Modal.Header closeButton>
                <Modal.Title>Add a member to the timeline</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <div className="search-body">
                        <div>
                            <AutoComplete
                                dropdownClassName="autocompletedrpdwn"
                                onChange={(e) => {
                                    onSearch(e);
                                }}
                            >
                                <Input.Search
                                    size="large"
                                    placeholder="input search ..."
                                    enterButton
                                    onSearch={(e) => onSearch(e)}
                                    allowClear
                                />
                            </AutoComplete>
                        </div>
                    </div>

                    <div>
                        <ul className="cards">
                            {
                                fetchData.map((data) => (
                                    <li key={data.id}>
                                        <div className={classes["our-team"]} onClick={onUserSelect.bind(this,data)}>
                                            <div className={classes.picture}>
                                                <img
                                                    className={classes["img-fluid"]}
                                                    src={imageAddress}
                                                    alt="avatar"
                                                />
                                            </div>
                                            <div className={classes["team-content"]}>
                                                <h3 className={classes["name"]}>{data.username}</h3>
                                                <h4 className={classes["title"]}>
                                                    {data.first_name + " " + data.last_name}
                                                </h4>
                                            </div>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}
