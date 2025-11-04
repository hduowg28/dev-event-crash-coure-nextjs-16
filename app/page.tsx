import ExploreBtn from "@/app/component/ExploreBtn";
import EventCard from "@/app/component/EventCard";
import {events} from "@/app/lib/constants"

const Page = () => {
    return (
        <section>
            <h1 className="text-center">The Hub for every dev<br/>Event you can't miss</h1>
            <p className="text-center mt-5">Hackathon, Meetups, and Conferences, All in one Place</p>
            <ExploreBtn/>
            <div className="mt-20 space-y-7">
                <h3>Features Events</h3>
                <ul className="events">
                    {events.map((eventt) => (
                        <li key={eventt.title}>
                            < EventCard {... eventt} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>

    )
}
export default Page
