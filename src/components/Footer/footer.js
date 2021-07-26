import './footer.scss';

/**
 * Component to hold a footer
 * 
 * @Component
 */
export default function Footer(props) {
    return(
        <div className="container__footer">
            <h3>Total Files: {props.numFiles}</h3>
            <h3>Total File Size: {props.fileSize} B</h3>
        </div>
    )
}