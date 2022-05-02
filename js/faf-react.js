class EventListing extends React.Component {
    render() {
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

class EventTable extends React.Component {
    getEventListings() {
        let listings = [];
        for (let event of this.props.eventList) {
            listings.push(<EventListing key={event.URISafeName} eventInfo={event} />);
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
                                <i></i>
                            </span>
                        </th>
                        <th id="gcm-middle-column">
                            <span className="faf-table-header">
                                <span>Start</span>
                                <i className="bi bi-chevron-compact-down"></i>
                            </span>
                        </th>
                        <th>
                            <span className="faf-table-header">
                                <span>End</span>
                                <i></i>
                            </span>
                        </th>
                        <th id="gcm-right-column">
                            <span className="faf-table-header">
                                <span>Location</span>
                                <i></i>
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
root.render(<EventTable eventList={reactEventList} />);