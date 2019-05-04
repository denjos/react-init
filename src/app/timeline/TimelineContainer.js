import React,{Component} from "react";
import timelineData from '../../data';
import {TimelineItem} from "./TimelineItem";
import '../scss/timeline.scss';

console.log(timelineData);
export const Timeline=()=>timelineData.length>0 && (
    <div className="timeline-container">
        {
            timelineData.map((item,key)=>(
                <TimelineItem data={item} key={key}/>
            ))}
    </div>
);
