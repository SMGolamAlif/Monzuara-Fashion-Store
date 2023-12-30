import Image from "next/image";
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons/faWhatsapp";
import darazIcon from "../../assets/Daraz-Icon-Vector.jpg";
export default function SocialButtons() {
	return (
		<>
			<h3 className="page-footer__header">Follow us</h3>
			<div className="page-footer__social-buttons">
				<div className="page-footer__social-button">
					<a
						className="page-footer__social-link"
						target="_blank"
						href="https://www.facebook.com/profile.php?id=100063700196835"
					>
						<FontAwesomeIcon className="social-icon" icon={faFacebook} />
					</a>
				</div>{" "}
				<div className="page-footer__social-button">
					<a
						className="page-footer__social-link"
						target="_blank"
						href="https://api.whatsapp.com/send?phone=+8801681414016&text=Hi!"
					>
						<FontAwesomeIcon className="social-icon" icon={faWhatsapp} />
					</a>
				</div>{" "}
				<div className="page-footer__social-button">
					<a
						className="page-footer__social-link"
						target="_blank"
						href="https://www.daraz.com.bd/shop/bjuqg9d4/?spm=a2a0e.pdp.seller.1.31ab29ccCDel5k&itemId=329978553&channelSource=pdp!"
					>
						<Image
							src={darazIcon}
							alt="Daraz Icon"
							className="social-icon"
							width={30}
							height={30}
							style={{ borderRadius: '50%', border: '1px solid #000' }}
						/>
					</a>
				</div>
				<div className="page-footer__social-button">
					<a
						className="page-footer__social-link"
						target="_blank"
						href="https://instagram.com"
					>
						<FontAwesomeIcon className="social-icon" icon={faInstagram} />
					</a>
				</div>
				<div className="page-footer__social-button">
					<a
						className="page-footer__social-link"
						target="_blank"
						href="https://twitter.com"
					>
						<FontAwesomeIcon className="social-icon" icon={faTwitter} />
					</a>
				</div>
			</div>
			<p className="text-muted">All rights reserved. © Monzuara Fashion</p>
		</>
	);
}
