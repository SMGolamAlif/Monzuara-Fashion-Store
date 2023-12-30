import { IProduct } from "boundless-api-client";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import ProductsList from "../components/ProductsList";
import MainLayout from "../layouts/Main";
import { apiClient } from "../lib/api";
import { makeAllMenus } from "../lib/menu";
import { IMenuItem } from "../@types/components";
import bgImg from "../assets/cover-bg.jpeg";
import bgPortraitImg from "../assets/cover-bg-portrait.jpg";
import CoverTextInCenter from "../components/CoverTextInCenter";
import ProductsSliderByQuery from "../components/ProductsSliderByQuery";
import { IBasicSettings } from "../@types/settings";
import "swiper/swiper-bundle.css";
export default function IndexPage({
	products,
	mainMenu,
	footerMenu,
	basicSettings,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	return (
		<MainLayout
			mainMenu={mainMenu}
			footerMenu={footerMenu}
			classes={{ layoutMain: "pt-0" }}
			basicSettings={basicSettings}
		>
			<CoverTextInCenter
				showChevronDown
				img={bgImg.src}
				imgPortrait={bgPortraitImg.src}
				content={{
					intro: "Golam Alif",
					head: "Impossible is nothing!",
					subHead:
						"Impossible is not a fact. It’s an opinion. Impossible is not a declaration. It’s a dare. Impossible is potential. Impossible is temporary.",
				}}
				shadow={{
					opacity: 0.5,
					backgroundColor: "#000",
				}}
				link={
					"https://www.daraz.com.bd/shop/bjuqg9d4/?spm=a2a0e.pdp.seller.1.56604e13Nptooh&itemId=330001831&channelSource=pdp"
				}
			/>
			<div className="container">
				<h1 className="page-heading page-heading_h1  page-heading_m-h1">
					Monzuara Fashion store - Daraz bd
				</h1>
				<a
					href="https://www.daraz.com.bd/shop/bjuqg9d4/?spm=a2a0e.pdp.seller.1.56604e13Nptooh&itemId=330001831&channelSource=pdp"
					target="_blank"
				>
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Daraz_Logo.png"
						alt=""
						srcSet=""
						style={{
							height: "auto",
							width: "200px",
							display: "block",
							margin: "auto",
						}}
					/>{" "}
					<br />{" "}
					<p className="text-gray-700 font-bold text-center">
						Order our Product Securely Via Daraz
					</p>
				</a>

				<br />

				<h1 className="page-heading page-heading_h1  page-heading_m-h1">
					Monzuara Fashion store
				</h1>
				<ProductsList products={products} query={{}} />
				<h2 className="page-heading page-heading_h1  page-heading_m-h1">
					Products carousel:
				</h2>
				<ProductsSliderByQuery
					query={{ collection: ["main-page"], sort: "in_collection" }}
					wrapperClassName="page-block"
				/>
			</div>
		</MainLayout>
	);
}

export const getServerSideProps: GetServerSideProps<
	IIndexPageProps
> = async () => {
	// Set the authorization token
	if (!process.env.BOUNDLESS_API_PERMANENT_TOKEN) {
		throw new Error("BOUNDLESS_API_PERMANENT_TOKEN is not defined");
	}

	apiClient.setAuthToken(process.env.BOUNDLESS_API_PERMANENT_TOKEN);
	console.log(process.env.BOUNDLESS_API_PERMANENT_TOKEN); // This line will log the token

	const categoryTree = await apiClient.catalog.getCategoryTree({
		menu: "category",
	});
	const { products } = await apiClient.catalog.getProducts({
		collection: ["main-page"],
		sort: "in_collection",
	});
	const basicSettings = (await apiClient.system.fetchSettings([
		"system.locale",
		"system.currency",
	])) as IBasicSettings;

	const menus = makeAllMenus({ categoryTree });

	return {
		props: {
			products,
			basicSettings,
			...menus,
		},
	};
};
interface IIndexPageProps {
	products: IProduct[];
	mainMenu: IMenuItem[];
	footerMenu: IMenuItem[];
	basicSettings: IBasicSettings;
}
