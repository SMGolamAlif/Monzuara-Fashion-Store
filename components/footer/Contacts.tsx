import { faWhatsapp } from "@fortawesome/free-brands-svg-icons/faWhatsapp";
import { faClock } from "@fortawesome/free-solid-svg-icons/faClock";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons/faMapMarkerAlt";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FooterContacts() {
	return (
		<>
			<h3 className="page-footer__header">Contact Us</h3>
			<p className="page-footer__icon-w-link">
				<span className="icon">
					<FontAwesomeIcon icon={faWhatsapp} />
				</span>
				<a className="link" href="tel:+8801681414016">
					+880 1681414016
				</a>
			</p>
			<p className="page-footer__icon-w-link">
				<span className="icon">
					<FontAwesomeIcon icon={faMapMarkerAlt} />
				</span>
				<a
					className="link"
					href="https://maps.app.goo.gl/5jrLBz3zptteedwS9"
					target="_blank"
				>
					Monzuara Fashion, House=195,Block=G,Word=15 Gazipur-1704,Dhaka -
					Bangladesh.
				</a>
			</p>
			<p className="page-footer__icon-w-link">
				<span className="icon">
					<FontAwesomeIcon icon={faClock} />
				</span>
				9:00am &mdash; 9:00pm
			</p>
		</>
	);
}
