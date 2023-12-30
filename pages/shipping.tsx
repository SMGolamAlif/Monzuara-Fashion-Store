import { IMenuItem } from "../@types/components";
import MainLayout from "../layouts/Main";
import { GetServerSideProps } from "next";
import { apiClient } from "../lib/api";
import { makeAllMenus } from "../lib/menu";
import { IBasicSettings } from "../@types/settings";

export default function ShippingPage({
	mainMenu,
	footerMenu,
	basicSettings,
}: IShippingPageProps) {
	return (
		<MainLayout
			mainMenu={mainMenu}
			footerMenu={footerMenu}
			basicSettings={basicSettings}
		>
			<div className="container mx-auto mt-8">
				<h1 className="text-4xl font-bold text-center mb-4">
					Why Our Shipping is the Best
				</h1>
				<div className="flex flex-col items-center">
					<p className="mb-2">
						<strong className="text-blue-600">
							Fast and Reliable Delivery:
						</strong>{" "}
						We guarantee swift and dependable shipping services to get your
						products to you on time.
					</p>
					<p className="mb-2">
						<strong className="text-blue-600">Global Reach:</strong> Our
						shipping network extends worldwide, ensuring your items reach you no
						matter where you are.
					</p>
					<p className="mb-2">
						<strong className="text-blue-600">
							Tracking and Transparency:
						</strong>{" "}
						Stay informed with real-time tracking updates for complete
						transparency throughout the shipping process.
					</p>
					<p className="mb-2">
						<strong className="text-blue-600">Affordability:</strong> Enjoy
						competitive rates and even free shipping options to make your
						shopping experience budget-friendly.
					</p>
					<p className="mb-2">
						<strong className="text-blue-600">Customer Support:</strong> Our
						dedicated support team is ready to assist you with any
						shipping-related inquiries or issues.
					</p>
					<p className="mb-2">
						<strong className="text-blue-600">Packaging Excellence:</strong> We
						ensure the safety of your products during transit with our
						exceptional packaging.
					</p>
					<p className="mb-2">
						<strong className="text-blue-600">
							Flexible Shipping Options:
						</strong>{" "}
						Choose from a variety of shipping options, including express,
						standard, and eco-friendly choices.
					</p>
					<p className="mb-2">
						<strong className="text-blue-600">Customer Testimonials:</strong>{" "}
						Read what our satisfied customers say about their positive shipping
						experiences with us.
					</p>
					<p className="mb-2">
						<strong className="text-blue-600">Return Policy:</strong> Our
						hassle-free and customer-friendly return policy ensures a
						straightforward return process.
					</p>
					<p className="mb-2">
						<strong className="text-blue-600">Innovative Solutions:</strong> We
						stay ahead in the industry with cutting-edge shipping solutions and
						advanced technologies.
					</p>
				</div>
			</div>
		</MainLayout>
	);
}

export const getServerSideProps: GetServerSideProps<
	IShippingPageProps
> = async () => {
	const categoryTree = await apiClient.catalog.getCategoryTree({
		menu: "category",
	});
	const { mainMenu, footerMenu } = makeAllMenus({ categoryTree });
	const basicSettings = (await apiClient.system.fetchSettings([
		"system.locale",
		"system.currency",
	])) as IBasicSettings;

	return {
		props: {
			mainMenu,
			footerMenu,
			basicSettings,
		},
	};
};

interface IShippingPageProps {
	mainMenu: IMenuItem[];
	footerMenu: IMenuItem[];
	basicSettings: IBasicSettings;
}
