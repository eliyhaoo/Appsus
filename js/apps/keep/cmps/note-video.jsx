

export function NoteVideo({ note }) {

    return <section className="note-video">
        <iframe 
            src={`https://www.youtube.com/embed/${note.info.url}`}
            title="YouTube video player" frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
    </section>
}