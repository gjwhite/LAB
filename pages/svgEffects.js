
// Components
import { Section } from '../components/Section';
import { SvgButton } from '../components/SvgButton';


// Data


const svgEffects = () => {

    return (
        <Section classes={['center', 'full-screen']}>
            <SvgButton
                text="Click me"
                classes={['large']}
            />
        </Section>
    );
};

export default svgEffects;
