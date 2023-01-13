interface EventpageParams {
    params: { slug: string }
}

const EventsPage = ({ params }: EventpageParams) => {
    return (
        <div>
            <h1>{params.slug}</h1>
        </div>
    )
}

export default EventsPage;