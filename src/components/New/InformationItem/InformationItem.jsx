export function InformationItem(props) {
    return (
        <div>
            <p>{ props.id }</p>
            <p>{ props.name }</p>
            <p>{ props.message }</p>

        </div>
    );
}