import './footer.scss';

export default function Footer(props) {
    return(
        <div className="container__footer">
            <h3>Total Files: {props.numFiles}</h3>
            <h3>Total File Size: {props.fileSize}</h3>
        </div>
    )
}