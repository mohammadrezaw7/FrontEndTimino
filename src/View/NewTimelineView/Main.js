import "./Main.css";
import { ReactComponent as WorkIcon } from "./work.svg";
import { ReactComponent as SchoolIcon } from "./school.svg";
import timelineElements from "./timelineElements";
import chat from "./chat-svgrepo-com.svg";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Modal } from "antd";
import { useState, Fragment } from "react";
import MessageList from "../Chat/MessageList";
import "antd/dist/antd.css";
import Dashboard from "../dashboard/Dashboard";
import UploadImageModal from "./UploadImageModal";
import {useParams} from "react-router-dom";
import Button from '@mui/material/Button';
import plus from "./icons8-plus-96.png";


import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import AddIcon from '@mui/icons-material/Add';
import ChatIcon from '@mui/icons-material/Chat';




export default function Main() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [uploadImageModalVisible, setUploadImageModalVisible] = useState(false);

  const handleUploadImage = () => setUploadImageModalVisible((prev) => !prev);

  const GetEventsData = () => {
    const { id } = useParams()
    console.log(
        id
    )
  }
  const showModal = () => {
    return
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const actions = [

    { icon: <AddIcon />, name: 'Add member' },
    { icon: <ChatIcon />, name: 'Chat' },
  ];
  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#f9c74f" };
  GetEventsData()

  return (
    <Fragment>
      <Dashboard className="main">




        <div style={{ background: "#3da3d5", paddingLeft: "6rem" }}>
          <div>
            <h1 className="title">Timeline</h1>
            <VerticalTimeline>
              {timelineElements.map((element) => {
                let isWorkIcon = element.icon === "work";
                let showButton =
                  element.buttonText !== undefined &&
                  element.buttonText !== null &&
                  element.buttonText !== "";

                return (
                  <VerticalTimelineElement
                    key={element.key}
                    date={element.date}
                    dateClassName="date"
                    iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                    icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
                  >
                    <h3 className="vertical-timeline-element-title">
                      {element.title}
                    </h3>
                    <h5 className="vertical-timeline-element-subtitle">
                      {element.location}
                    </h5>
                    <p id="description">{element.description}</p>
                    {showButton && (
                      <a
                        className={`button ${
                          isWorkIcon ? "workButton" : "schoolButton"
                        }`}
                        href="/"
                      >
                        {element.buttonText}
                      </a>
                    )}
                    <a
                      onClick={handleUploadImage}
                      className="button workButton"
                    >
                      upload image
                    </a>
                  </VerticalTimelineElement>
                );
              })}

            </VerticalTimeline>
          </div>
          <div >
          <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1}}>
            <SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{ position: 'absolute', bottom: 16, right: 16 }}
                icon={<SpeedDialIcon />}
            >
              {actions.map((action) => (
                  <SpeedDialAction
                      key={action.name}
                      icon={action.icon}
                      tooltipTitle={action.name}
                  />
              ))}
            </SpeedDial>
          </Box>

          </div>
        </div>


        <UploadImageModal
          show={uploadImageModalVisible}
          onHandle={handleUploadImage}
        />
        <Modal
          title="Basic Modal"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Modal.Body>
            <MessageList />
          </Modal.Body>
        </Modal>

      </Dashboard>
    </Fragment>
  );
}
