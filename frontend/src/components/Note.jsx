export default function Note({note, noteNum}){
    return (
        <div>
            <h1>{noteNum}</h1>
            <p>{note}</p>
        </div>
    );
}