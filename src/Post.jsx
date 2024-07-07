export function Post(props) {
    console.log(props);
    return (
        <section>
            <strong>{props.author}</strong><p>{props.content}</p>
            <button>Send</button>
        </section>
    )
}
