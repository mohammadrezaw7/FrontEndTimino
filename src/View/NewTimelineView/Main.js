import "./Main.css";
import { ReactComponent as WorkIcon } from "./work.svg";
import { ReactComponent as SchoolIcon } from "./school.svg";
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


import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import AddIcon from '@mui/icons-material/Add';
import ChatIcon from '@mui/icons-material/Chat';
import AddMemberModal from "./AddMemberModal";
import HistoryEdu from "@mui/icons-material/HistoryEdu";
import AddEventModal from "./AddEventModal";
import { request } from "../../helpers/Network";



export default function Main() {
  const { id } = useParams()

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [uploadImageModalVisible, setUploadImageModalVisible] = useState(false);
  const [addMemberModalVisible, setAddMemberModalVisible] = useState(false);
  const [addEventModalVisible, setAddEventModalVisible] = useState(false);
  const [events, setEvents] = useState([]);
  const [timeline, setTimeline] = useState({});
  const [retrieveData, setRetrieveData] = useState(true);

  const handleUploadImage = () => setUploadImageModalVisible((prev) => !prev);
  const handleOpenCloseAddMemberModal = () => setAddMemberModalVisible((prev) => !prev);
  const handleOpenCloseAddEvent = () => setAddEventModalVisible((prev) => {
    setRetrieveData(true);
    return !prev;
  });



  const getEventsData = () => {
    request(
      'GET',
      '/api/'+id+'/event/index',
      {}
    )
    .then(data => {
      data.data.events.forEach(event => {
        event.date = (new Date(event.date)).toDateString('en-US');
      })
      if (data.data.events.length !== 0){
        setEvents(data.data.events)
      }
    })
    .catch(err => {

    })
  }

  const getWorkshopData = () => {
    request(
      'GET',
      '/api/timeline/show/'+id,
      {}
    )
    .then(data => {
      setTimeline(data.data.timeline);
    })
    .catch(err => {

    })
  }

  if ( retrieveData ){
    getEventsData();
    getWorkshopData();
    setRetrieveData(false);
  }





  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const actions = [
    { icon: <AddIcon />, name: 'Add member' , action : handleOpenCloseAddMemberModal},
    { icon: <HistoryEdu />, name: 'Add event' , action : handleOpenCloseAddEvent},
    { icon: <ChatIcon />, name: 'Chat' },
  ];
  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#f9c74f" };

  return (
      <Fragment>
        <Dashboard className="main">
          <div style={{ background: "#3da3d5", paddingLeft: "6rem" }}>
            <div>
              <h1 className="card-subtitle" align="center">{ timeline.title }</h1>
              <VerticalTimeline>
                {events.map((element) => {
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
            <div style={{position:"fixed",bottom:"15px" , left:"140px"}} >
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
                          onClick={action.action}
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
          <AddMemberModal
              show={addMemberModalVisible}
              onHandle={handleOpenCloseAddMemberModal}
              timelineId={id}
          />
          <AddEventModal
              show={addEventModalVisible}
              onHandle={handleOpenCloseAddEvent}
              timelineId={id}
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
