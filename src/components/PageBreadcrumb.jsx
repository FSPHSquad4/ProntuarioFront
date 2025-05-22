import { Helmet } from 'react-helmet';
const PageBreadcrumb = ({
  title
}) => {
  return <>
			<Helmet>
				<title>{title} | FSPH - Fundação de Saúde Parreiras Horta</title>
			</Helmet>
		</>;
};
export default PageBreadcrumb;