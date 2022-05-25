import React from 'react'
import './Timelineindex.css'
import {request} from "../../helpers/Network";
import {colors} from "@mui/material";
import {red} from "@mui/material/colors";
import {faHome, faPlus} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class TimelineIndex extends React.Component {
    constructor() {
        super();
        this.rows = [];
        this.getTimelinesData();
    }
    getTimelinesData() {
        request(
            'GET',
            '/api/timeline/index',
            {
                post: {
                    user_name : "Hossein",
                },
                query : {
                    page : 2,
                }
            }

        ).then(data => {
            const rows = [];
            data.data.timelines.forEach(timeline => {
                rows.push({
                    id: timeline.id,
                    title: timeline.title,
                    description : timeline.description,
                    avatar: timeline.avatar,
                    created_at: timeline.created_at,
                });
            })
            this.rows = rows;
            this.forceUpdate()
        });
    }
    render() {
        const rows = this.rows;
        console.log(rows)
        return (
            <div className="container">
                <div className="table-responsive">
                    <div className="table-wrapper">
                        <div className="table-title">
                            <div className="row">
                                <div style={{textAlign:"end"}} >

                                    <button  type="button"  className="btn btn-primary add-new"><a style={{color:"white"}} href={'/CreateTimeline'}>
                                        <FontAwesomeIcon icon={faPlus} />
                                         Add New


                                    </a></button>
                                </div>
                                <div ><h2>Timeline-index</h2></div>
                                <div className="col-sm-4">

                                </div>
                            </div>
                        </div>
                        <table className="table table-striped table-hover table-bordered">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Title </th>
                                <th>Description</th>

                                <th>Created At</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {rows.map((row) => (
                                <tr>
                                    <td>{row.id}</td>
                                    <td>{row.title}</td>
                                    <td>{row.description}</td>

                                    <td>{row.created_at}</td>
                                    <td>
                                        <a href={'/timeline-view/' + row.id} className="view" title="View" data-toggle="tooltip"><i
                                            className="material-icons">&#xE417;</i></a>
                                        <a href={'/timeline-edit/' + row.id} className="edit" title="Edit" data-toggle="tooltip"><i
                                            className="material-icons">&#xE254;</i></a>
                                        {/*<a href="#" className="delete" title="Delete" data-toggle="tooltip"><i*/}
                                        {/*    className="material-icons">&#xE872;</i></a>*/}
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                        <div className="clearfix">
                            <div className="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
                            <ul className="pagination">
                                <li className="page-item disabled"><a href="#"><i
                                    className="fa fa-angle-double-left"></i></a></li>
                                <li className="page-item"><a href="#" className="page-link">1</a></li>
                                <li className="page-item"><a href="#" className="page-link">2</a></li>
                                <li className="page-item active"><a href="#" className="page-link">3</a></li>
                                <li className="page-item"><a href="#" className="page-link">4</a></li>
                                <li className="page-item"><a href="#" className="page-link">5</a></li>
                                <li className="page-item"><a href="#" className="page-link"><i
                                    className="fa fa-angle-double-right"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default TimelineIndex;

