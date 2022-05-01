

export function NoteVideo({ note }) {

    return <section className="note-video flex">
        <iframe width="300" height="250"
            src={note.info.url}
            title="YouTube video player" frameBorder="0"
            // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            // allowFullScreen
            ></iframe>
    </section>
}