class EventListing extends React.PureComponent {
    constructor(props) {
        super(props);

        //set event temporality
        let endDate = this.props.eventInfo.endDate;
        let now = new Date();
        now.setHours(0, 0, 0, 0);
        this.upcomingOnly = false;
        //Note: Use of Date constructor with timestring argument is not encouraged
        if (new Date(endDate) >= now) {
            this.upcomingOnly = true;
        }

        //set event type
        let typeString = this.props.eventInfo.radio_button;
        let temp;
        switch (typeString) {
            case "festival-radio-button":
                temp = "festival";
                break;
            case "competition-radio-button":
                temp = "competition";
                break;
            case "festival-competition-radio-button":
                temp = "fc";
                break;
            case "workshop-radio-button":
                temp = "workshop";
                break;
            default:
                alert("Invalid event-type: " + typeString);
        }
        this.eventType = temp;
    }
    
    render() {
        console.log("re-render event listing");
        let display = this.props.display;
        if (display.upcomingOnly && !this.upcomingOnly || !["All", this.eventType].includes(display.eventType)) {
            return null;
        }
        let info = this.props.eventInfo;
        let startDateStr = new Date(info.startDate).toDateString().substring(4); //substr removes day of week 
        let endDateStr = new Date(info.endDate).toDateString().substring(4);
        let loc = "N/A";
        if (info.eventLocation) {
            loc = info.eventLocation.name + ", " + getCountryFromPlace(info.eventLocation);
        }
        return (
            <tr>
                <td>
                    <a href={"/festivals/" + info.URISafeName}>
                        {info.eventName}
                    </a>
                </td>
                <td>{startDateStr}</td>
                <td>{endDateStr}</td>
                <td>{loc}</td>
            </tr>
        );
    }
}


class EventTable extends React.PureComponent {
    getEventListings() {
        const listings = [];
        for (let event of this.props.eventList) {
            listings.push(<EventListing key={event.URISafeName} eventInfo={event} display={this.props.display} />);
        }
        return listings;
    }
    render() {
        return (
            <table id="gcm-FAF-table">
                <thead>
                    <tr>
                        <th>
                            <span id="table-event-header" className="faf-table-header">
                                <span>Event</span>
                            </span>
                        </th>
                        <th>
                            <span className="faf-table-header">
                                <span>Start</span>
                                <i className="bi bi-chevron-compact-down"></i>
                            </span>
                        </th>
                        <th>
                            <span className="faf-table-header">
                                <span>End</span>
                            </span>
                        </th>
                        <th id="gcm-right-column">
                            <span className="faf-table-header">
                                <span>Location</span>
                            </span>
                        </th>
                    </tr>
                </thead>
                <tbody id="gcm-FAF-tbody">
                    {this.getEventListings()}
                </tbody>
            </table>
        );
    }
}
const root = ReactDOM.createRoot(document.querySelector("#gc-festival-list"));
let reactEventList = [];
for(let event of window.festivals) {
    reactEventList.push(JSON.parse(event._rawJSON));
}

//sort alphabetically
reactEventList.sort((e1, e2) => (e1.eventName).localeCompare(e2.eventName));

//sort by start date
reactEventList.sort(function (e1, e2) {
    let e1StartDate = new Date(e1.startDate);
    let e2StartDate = new Date(e2.startDate);
    if (e1StartDate < e2StartDate) {
        return -1;
    } else if (e2StartDate < e1StartDate) {
        return 1;
    } else {
        return 0;
    }
});

let display = {
    eventType: "All",
    upcomingOnly: true,
};

root.render(<EventTable eventList={reactEventList} display={display}/>);

const eventTypeOptions = document.querySelectorAll(".gcm-faf-eventType-option");
const temporalityOptions = document.querySelectorAll(".gcm-faf-eventTemporality-option");

for (const option of eventTypeOptions) {
    option.addEventListener(
        "click", 
        () => {
            let newEventType = option.getAttribute("value");
            if (display.eventType !== newEventType) {
                // immutability pattern
                display = Object.assign({}, display, {eventType: newEventType});
            }
            const eventTable = <EventTable eventList={reactEventList} display={display}/>;
            root.render(eventTable);
        }
    );
}

for (const option of temporalityOptions) {
    option.addEventListener(
        "click", 
        () => {
            let newUpcomingOnly = option.getAttribute("value") === "upcoming" ? true : false;
            if (display.upcomingOnly !== newUpcomingOnly) {
                // immutability pattern
                display = Object.assign({}, display, {upcomingOnly: newUpcomingOnly});
            }
            const eventTable = <EventTable eventList={reactEventList} display={display}/>;
            root.render(eventTable);
        }
    );
}