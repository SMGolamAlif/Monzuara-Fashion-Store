import {IMenuItem} from '../@types/components';
import MainLayout from '../layouts/Main';
import {GetServerSideProps} from 'next';
import {apiClient} from '../lib/api';
import {makeAllMenus} from '../lib/menu';
import {IBasicSettings} from '../@types/settings';

export default function AboutPage({mainMenu, footerMenu, basicSettings}: IAboutPageProps) {
	return (
		<MainLayout
			mainMenu={mainMenu}
			footerMenu={footerMenu}
			basicSettings={basicSettings}
		>
   <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">About Monzuara Fashion</h2>

        <p className="text-lg text-center mb-6">
          Welcome to Monzuara Fashion, where style meets quality and innovation. Established in 2019, we take pride in being more than just a fashion brand – we are a mini factory dedicated to crafting high-quality apparel and accessories that elevate your style and comfort.
        </p>

        <div className="flex flex-col items-center mb-8">
          <p className="text-lg text-center mb-4">
            <strong>Our Journey</strong>
          </p>
          <p className="text-center mb-4">
            Monzuara Fashion embarked on its journey in 2019 with a vision to redefine fashion manufacturing. Located in Gazipur, Dhaka, our mini factory is equipped with state-of-the-art machines and a team of skilled craftsmen passionate about delivering excellence.
          </p>
        </div>

        <div className="flex flex-col items-center mb-8">
          <p className="text-lg text-center mb-4">
            <strong>Global Presence</strong>
          </p>
          <p className="text-center mb-4">
            While our roots are in Dhaka, our influence extends globally. We have successfully ventured into the international market, proudly exporting our fashion creations to countries like England, Finland, Belgium, and other European destinations. Our commitment to quality has made us a trusted name in the global fashion industry.
          </p>
        </div>

        {/* ... Other sections follow the same structure ... */}

        <div className="flex flex-col items-center mb-8">
          <p className="text-lg text-center mb-4">
            <strong>Quality Assurance</strong>
          </p>
          <p className="text-center mb-4">
            Quality is at the heart of everything we do. With our own machines and a meticulous quality control process, we ensure that each product bearing the Monzuara Fashion label meets the highest standards of craftsmanship and durability.
          </p>
        </div>

        <div className="flex flex-col items-center mb-8">
          <p className="text-lg text-center mb-4">
            <strong>Visit Us in Gazipur, Dhaka</strong>
          </p>
          <p className="text-center mb-4">
            For those who want to experience Monzuara Fashion up close, we invite you to visit our facility in Gazipur, Dhaka. Witness the craftsmanship, feel the quality, and discover the passion that goes into every piece we create.
          </p>
        </div>

        <p className="text-center text-lg">
          At Monzuara Fashion, we're not just creating fashion; we're crafting experiences. Join us on this stylish journey, where quality, trust, and innovation converge to redefine your fashion narrative.
        </p>
      </div>
    </section>
		</MainLayout>
	);
}

export const getServerSideProps: GetServerSideProps<IAboutPageProps> = async () => {
	const categoryTree = await apiClient.catalog.getCategoryTree({menu: 'category'});
	const {mainMenu, footerMenu} = makeAllMenus({categoryTree});
	const basicSettings = await apiClient.system.fetchSettings(['system.locale', 'system.currency']) as IBasicSettings;

	return {
		props: {
			mainMenu,
			footerMenu,
			basicSettings
		}
	};
};

interface IAboutPageProps {
	mainMenu: IMenuItem[];
	footerMenu: IMenuItem[];
	basicSettings: IBasicSettings;
}