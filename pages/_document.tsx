import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<meta
						name="google-site-verification"
						content="m4rLXtHo5F-ZHVT7ZHux6n8BdKQ9EddksroaUfFNGVs"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
					<Script strategy="afterInteractive">
						{`
						(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
						new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
						j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
						'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
						})(window,document,'script','dataLayer','GTM-W4D9LBZR');
						`}
					</Script>
					<Script strategy="afterInteractive">
						{`
						window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
						ga('create', 'G-XEFQLVKMX9', 'auto');
						ga('send', 'pageview');
						`}
					</Script>
					<Script
						src="https://www.google-analytics.com/analytics.js"
						strategy="afterInteractive"
						async
					/>
					<Script
						src="https://www.googletagmanager.com/gtag/js?id=G-XEFQLVKMX9"
						strategy="afterInteractive"
						async
					/>
					<Script strategy="afterInteractive">
						{`
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());

						gtag('config', 'G-XEFQLVKMX9');
						`}
					</Script>
					<noscript>
						<iframe
							src="https://www.googletagmanager.com/ns.html?id=GTM-W4D9LBZR"
							height="0"
							width="0"
							style={{ display: "none", visibility: "hidden" }}
						></iframe>
					</noscript>
				</body>
			</Html>
		);
	}
}

export default MyDocument;
